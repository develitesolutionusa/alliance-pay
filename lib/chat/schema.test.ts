import assert from "node:assert/strict";
import { buildChatMessages } from "@/lib/chat/prompt";
import { chatRequestSchema } from "@/lib/chat/schema";

{
  const result = chatRequestSchema.safeParse({
    messages: [{ role: "user", content: "  What is AlliancePay?  " }],
  });
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.messages[0]?.content, "What is AlliancePay?");
  }
}

{
  const result = chatRequestSchema.safeParse({
    messages: [{ role: "assistant", content: "Hello" }],
  });
  assert.equal(result.success, false);
}

{
  const result = chatRequestSchema.safeParse({
    messages: [{ role: "user", content: "   " }],
  });
  assert.equal(result.success, false);
}

{
  const messages = buildChatMessages([
    { role: "user", content: "Tell me about checkout." },
  ]);
  assert.equal(messages[0]?.role, "system");
  assert.match(messages[0]?.content ?? "", /AlliancePay/);
  assert.equal(messages[1]?.role, "user");
  assert.equal(messages[1]?.content, "Tell me about checkout.");
}
