import { z } from "zod";

export const leadIntents = ["demo", "contact", "trial"] as const;
export type LeadIntent = (typeof leadIntents)[number];

export const leadPayloadSchema = z.object({
  intent: z.enum(leadIntents),
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),
  company: z.string().trim().max(160, "Company name is too long.").default(""),
  message: z
    .string()
    .trim()
    .min(1, "Please add a short message.")
    .max(4000, "Message is too long."),
  /**
   * Honeypot field. Accept any string here so bots still pass schema;
   * the API returns a fake success when this is non-empty.
   */
  website: z.string().max(200).default(""),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;

export type LeadFieldErrors = Partial<
  Record<"name" | "email" | "company" | "message" | "form", string>
>;

export function fieldErrorsFromZod(error: z.ZodError): LeadFieldErrors {
  const out: LeadFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (
      key === "name" ||
      key === "email" ||
      key === "company" ||
      key === "message"
    ) {
      if (!out[key]) out[key] = issue.message;
    }
  }
  return out;
}

export const intentLabels: Record<LeadIntent, string> = {
  demo: "Demo request",
  contact: "Contact inquiry",
  trial: "Trial access request",
};
