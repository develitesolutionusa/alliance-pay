import assert from "node:assert/strict";
import {
  checkRateLimit,
  resetRateLimitStore,
} from "@/lib/leads/rate-limit";

resetRateLimitStore();

const options = { limit: 3, windowMs: 60_000 };

{
  const first = checkRateLimit("test:ip", options);
  assert.equal(first.ok, true);
  if (first.ok) assert.equal(first.remaining, 2);
}

{
  checkRateLimit("test:ip", options);
  const third = checkRateLimit("test:ip", options);
  assert.equal(third.ok, true);
  if (third.ok) assert.equal(third.remaining, 0);
}

{
  const blocked = checkRateLimit("test:ip", options);
  assert.equal(blocked.ok, false);
  if (!blocked.ok) {
    assert.equal(blocked.remaining, 0);
    assert.ok(blocked.retryAfterSec >= 1);
  }
}

{
  const other = checkRateLimit("test:other", options);
  assert.equal(other.ok, true);
}

resetRateLimitStore();
console.log("rate-limit.test.ts passed");
