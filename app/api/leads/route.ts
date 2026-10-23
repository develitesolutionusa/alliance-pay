import { NextResponse, type NextRequest } from "next/server";
import { getClientIp } from "@/lib/leads/client-ip";
import { deliverLead } from "@/lib/leads/delivery";
import { checkRateLimit } from "@/lib/leads/rate-limit";
import {
  fieldErrorsFromZod,
  leadPayloadSchema,
} from "@/lib/leads/schema";
import { siteConfig } from "@/lib/site";

const JSON_HEADERS = {
  "Cache-Control": "no-store",
};

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400, headers: JSON_HEADERS },
    );
  }

  const parsed = leadPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please fix the highlighted fields.",
        fieldErrors: fieldErrorsFromZod(parsed.error),
      },
      { status: 400, headers: JSON_HEADERS },
    );
  }

  // Honeypot filled → fake success so bots do not adapt.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json(
      { ok: true, status: "received" },
      { status: 200, headers: JSON_HEADERS },
    );
  }

  const ip = getClientIp(request);
  const rate = checkRateLimit(`leads:${ip}`);
  if (!rate.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many requests. Please wait a few minutes or email us directly.",
        retryAfterSec: rate.retryAfterSec,
      },
      {
        status: 429,
        headers: {
          ...JSON_HEADERS,
          "Retry-After": String(rate.retryAfterSec),
        },
      },
    );
  }

  try {
    const delivery = await deliverLead({
      ...parsed.data,
      company: parsed.data.company ?? "",
      website: "",
    });

    if (delivery.status === "unavailable") {
      return NextResponse.json(
        {
          ok: false,
          error: delivery.reason,
          supportEmail: siteConfig.supportEmail,
        },
        { status: 503, headers: JSON_HEADERS },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        status: delivery.status === "delivered" ? "delivered" : "received",
      },
      { status: 200, headers: JSON_HEADERS },
    );
  } catch (error) {
    console.error("[leads] Unexpected delivery error", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not deliver your message. Please email ${siteConfig.supportEmail}.`,
        supportEmail: siteConfig.supportEmail,
      },
      { status: 502, headers: JSON_HEADERS },
    );
  }
}
