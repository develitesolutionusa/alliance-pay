import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
};

export function readSmtpConfig(
  env: Record<string, string | undefined> = process.env,
): SmtpConfig | null {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const password = env.SMTP_PASSWORD?.trim();
  if (!host || !user || !password) return null;

  const portRaw = env.SMTP_PORT?.trim();
  const port = portRaw ? Number(portRaw) : 587;
  if (!Number.isInteger(port) || port < 1 || port > 65535) return null;

  const secureFlag = env.SMTP_SECURE?.trim().toLowerCase();
  const secure =
    secureFlag === "true" || secureFlag === "1" || port === 465;

  return {
    host,
    port,
    secure,
    user,
    password,
    from: env.SMTP_FROM?.trim() || env.LEAD_FROM_EMAIL?.trim() || user,
    to: env.LEAD_TO_EMAIL?.trim() || siteConfig.supportEmail,
  };
}

export async function sendSmtpMail(message: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const config = readSmtpConfig();
  if (!config) return false;

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });

  try {
    await transport.sendMail({
      from: message.from || config.from,
      to: message.to || config.to,
      replyTo: message.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "SMTP send failed.";
    console.error("[leads] SMTP delivery failed", detail);
    throw new Error("Email delivery failed.");
  }

  return true;
}
