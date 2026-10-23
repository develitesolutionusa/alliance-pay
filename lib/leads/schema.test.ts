import assert from "node:assert/strict";
import {
  fieldErrorsFromZod,
  leadPayloadSchema,
} from "@/lib/leads/schema";

const valid = {
  intent: "demo" as const,
  name: "Alex Rivera",
  email: "alex@example.com",
  company: "Rivera Market",
  message: "We need a POS demo for two registers.",
  website: "",
};

{
  const result = leadPayloadSchema.safeParse(valid);
  assert.equal(result.success, true);
}

{
  const result = leadPayloadSchema.safeParse({
    ...valid,
    email: "not-an-email",
  });
  assert.equal(result.success, false);
  if (!result.success) {
    const errors = fieldErrorsFromZod(result.error);
    assert.equal(errors.email, "Enter a valid email address.");
  }
}

{
  const result = leadPayloadSchema.safeParse({
    intent: "contact",
    name: "  ",
    email: "ok@example.com",
    message: "Hello",
  });
  assert.equal(result.success, false);
}

{
  const result = leadPayloadSchema.safeParse({
    ...valid,
    website: "https://spam.example",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.website, "https://spam.example");
  }
}

{
  const result = leadPayloadSchema.safeParse({
    intent: "trial",
    name: "Sam",
    email: "sam@store.com",
    message: "Trial please",
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.company, "");
    assert.equal(result.data.website, "");
  }
}

console.log("schema.test.ts passed");
