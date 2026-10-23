/**
 * Best-effort in-memory rate limiter for serverless / single-instance deploys.
 * Resets when the process recycles. For multi-region production, swap for Redis.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export type RateLimitResult =
  | { ok: true; remaining: number; resetAt: number }
  | { ok: false; remaining: 0; resetAt: number; retryAfterSec: number };

export type RateLimitOptions = {
  /** Max requests in the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
};

const DEFAULT_OPTIONS: RateLimitOptions = {
  limit: 5,
  windowMs: 15 * 60 * 1000,
};

export function checkRateLimit(
  key: string,
  options: RateLimitOptions = DEFAULT_OPTIONS,
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + options.windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { ok: true, remaining: options.limit - 1, resetAt };
  }

  if (existing.count >= options.limit) {
    return {
      ok: false,
      remaining: 0,
      resetAt: existing.resetAt,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return {
    ok: true,
    remaining: options.limit - existing.count,
    resetAt: existing.resetAt,
  };
}

/** Test helper — clears all buckets. */
export function resetRateLimitStore() {
  buckets.clear();
}
