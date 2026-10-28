import OpenAI from "openai";
import { NextResponse, type NextRequest } from "next/server";
import { buildChatMessages } from "@/lib/chat/prompt";
import { getGroqSettings } from "@/lib/chat/groq";
import { chatRequestSchema } from "@/lib/chat/schema";
import { getClientIp } from "@/lib/leads/client-ip";
import { checkRateLimit } from "@/lib/leads/rate-limit";
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

  const parsed = chatRequestSchema.safeParse(body);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "That message could not be sent.";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 400, headers: JSON_HEADERS },
    );
  }

  const ip = getClientIp(request);
  const rate = checkRateLimit(`chat:${ip}`, {
    limit: 20,
    windowMs: 10 * 60 * 1000,
  });
  if (!rate.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: `Too many messages. Please wait or email ${siteConfig.supportEmail}.`,
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

  const settings = getGroqSettings();
  if (!settings.configured) {
    return NextResponse.json(
      {
        ok: false,
        error: `The assistant is not configured yet. Email ${siteConfig.supportEmail} or contact us.`,
      },
      { status: 503, headers: JSON_HEADERS },
    );
  }

  const client = new OpenAI({
    apiKey: settings.apiKey,
    baseURL: settings.baseURL,
  });

  let completion: AsyncIterable<OpenAI.Chat.Completions.ChatCompletionChunk>;
  try {
    completion = await client.chat.completions.create({
      model: settings.model,
      messages: buildChatMessages(parsed.data.messages),
      stream: true,
      temperature: 0.4,
      max_tokens: 700,
      reasoning_effort: "low",
    });
  } catch (error) {
    const status = error instanceof OpenAI.APIError ? error.status : undefined;
    console.error("Groq chat request failed", status ?? "unknown");
    return NextResponse.json(
      {
        ok: false,
        error: `The assistant could not reply just now. Try again, or email ${siteConfig.supportEmail}.`,
      },
      { status: 502, headers: JSON_HEADERS },
    );
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const part of completion) {
          const delta = part.choices[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
        controller.close();
      } catch (error) {
        const status =
          error instanceof OpenAI.APIError ? error.status : undefined;
        console.error("Groq chat stream failed", status ?? "unknown");
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
