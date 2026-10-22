import assert from "node:assert/strict";
import { formatPlanPrice, pricingConfig } from "@/lib/pricing";

const essential = pricingConfig.plans[0];

assert.equal(formatPlanPrice(essential, "monthly"), "Custom");
assert.equal(pricingConfig.showAnnualToggle, false);
assert.equal(pricingConfig.recommendedPlanId, null);

console.log("pricing.test.ts passed");
