import assert from "node:assert/strict";
import { readSmtpConfig } from "@/lib/leads/smtp";

const base = {
  SMTP_HOST: "smtp.example.com",
  SMTP_USER: "leads@example.com",
  SMTP_PASSWORD: "secret",
};

{
  assert.equal(readSmtpConfig({}), null);
}

{
  const config = readSmtpConfig(base);
  assert.ok(config);
  assert.equal(config.port, 587);
  assert.equal(config.secure, false);
  assert.equal(config.from, "leads@example.com");
  assert.equal(config.to, "arif1@att.net");
}

{
  const config = readSmtpConfig({
    ...base,
    SMTP_PORT: "465",
    SMTP_FROM: "AlliancePay <leads@example.com>",
    LEAD_TO_EMAIL: "inbox@example.com",
  });
  assert.ok(config);
  assert.equal(config.port, 465);
  assert.equal(config.secure, true);
  assert.equal(config.from, "AlliancePay <leads@example.com>");
  assert.equal(config.to, "inbox@example.com");
}

{
  const config = readSmtpConfig({
    ...base,
    SMTP_PORT: "587",
    SMTP_SECURE: "true",
  });
  assert.ok(config);
  assert.equal(config.secure, true);
}

{
  assert.equal(readSmtpConfig({ ...base, SMTP_PORT: "0" }), null);
  assert.equal(readSmtpConfig({ ...base, SMTP_HOST: "  " }), null);
}
