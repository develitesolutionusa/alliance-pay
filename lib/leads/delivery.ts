import { siteConfig } from "@/lib/site";
import {
  intentLabels,
  type LeadIntent,
  type LeadPayload,
} from "@/lib/leads/schema";
import { readSmtpConfig, sendSmtpMail } from "@/lib/leads/smtp";

export type DeliveryResult =
  | { status: "delivered"; channels: string[] }
  | { status: "logged"; channels: ["console"] }
  | { status: "unavailable"; reason: string };

function isDeliveryConfigured() {
  return Boolean(
    readSmtpConfig() ||
      process.env.RESEND_API_KEY?.trim() ||
      process.env.LEAD_WEBHOOK_URL?.trim(),
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildEmailHtml(payload: LeadPayload) {
  const rows: [string, string][] = [
    ["Intent", intentLabels[payload.intent as LeadIntent]],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company?.trim() || "—"],
    ["Message", payload.message],
  ];

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e3eaf4;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e3eaf4;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#101b35"><h1 style="font-size:18px">New AlliancePay lead</h1><table style="border-collapse:collapse;width:100%;max-width:560px">${body}</table></body></html>`;
}

async function sendViaResend(payload: LeadPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const to =
    process.env.LEAD_TO_EMAIL?.trim() || siteConfig.supportEmail;
  const from =
    process.env.LEAD_FROM_EMAIL?.trim() ||
    "AlliancePay Leads <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[AlliancePay] ${intentLabels[payload.intent]} — ${payload.name}`,
      html: buildEmailHtml(payload),
      text: [
        `Intent: ${intentLabels[payload.intent]}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company?.trim() || "—"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("[leads] Resend delivery failed", response.status, detail);
    throw new Error("Email delivery failed.");
  }

  return true;
}

async function sendViaWebhook(payload: LeadPayload): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL?.trim();
  if (!url) return false;

  const secret = process.env.LEAD_WEBHOOK_SECRET?.trim();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
    },
    body: JSON.stringify({
      source: "alliancepay-web",
      receivedAt: new Date().toISOString(),
      lead: {
        intent: payload.intent,
        name: payload.name,
        email: payload.email,
        company: payload.company?.trim() || null,
        message: payload.message,
      },
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("[leads] Webhook delivery failed", response.status, detail);
    throw new Error("CRM webhook delivery failed.");
  }

  return true;
}

/**
 * Deliver a validated lead. SMTP is the email channel when configured;
 * Resend remains a fallback, and a CRM webhook can run alongside either.
 * In development without providers, log to the server console so local testing works.
 */
export async function deliverLead(
  payload: LeadPayload,
): Promise<DeliveryResult> {
  if (!isDeliveryConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[leads] Dev accept (no delivery provider configured)", {
        intent: payload.intent,
        name: payload.name,
        email: payload.email,
        company: payload.company,
        message: payload.message.slice(0, 200),
      });
      return { status: "logged", channels: ["console"] };
    }

    return {
      status: "unavailable",
      reason: `Form delivery is not configured. Email ${siteConfig.supportEmail} instead.`,
    };
  }

  const channels: string[] = [];
  const errors: Error[] = [];
  const smtp = readSmtpConfig();

  try {
    if (smtp) {
      await sendSmtpMail({
        from: smtp.from,
        to: smtp.to,
        replyTo: payload.email,
        subject: `[AlliancePay] ${intentLabels[payload.intent]} — ${payload.name}`,
        html: buildEmailHtml(payload),
        text: [
          `Intent: ${intentLabels[payload.intent]}`,
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Company: ${payload.company?.trim() || "—"}`,
          "",
          payload.message,
        ].join("\n"),
      });
      channels.push("email");
    } else if (await sendViaResend(payload)) {
      channels.push("email");
    }
  } catch (error) {
    errors.push(error instanceof Error ? error : new Error(String(error)));
  }

  try {
    if (await sendViaWebhook(payload)) channels.push("webhook");
  } catch (error) {
    errors.push(error instanceof Error ? error : new Error(String(error)));
  }

  if (channels.length > 0) {
    return { status: "delivered", channels };
  }

  if (errors.length > 0) {
    throw errors[0];
  }

  return {
    status: "unavailable",
    reason: `Form delivery is not configured. Email ${siteConfig.supportEmail} instead.`,
  };
}
