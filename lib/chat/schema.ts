import { z } from "zod";

export const chatRoles = ["user", "assistant"] as const;

export const chatMessageSchema = z.object({
  role: z.enum(chatRoles),
  content: z
    .string()
    .trim()
    .min(1, "Message is empty.")
    .max(1200, "Message is too long."),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

const MAX_HISTORY_CHARS = 6000;

export const chatRequestSchema = z
  .object({
    messages: z
      .array(chatMessageSchema)
      .min(1, "Send a message to start.")
      .max(12, "Start a new chat to continue."),
  })
  .superRefine((data, ctx) => {
    const last = data.messages.at(-1);
    if (last?.role !== "user") {
      ctx.addIssue({
        code: "custom",
        message: "The latest message must be from the visitor.",
        path: ["messages"],
      });
    }

    const total = data.messages.reduce(
      (sum, message) => sum + message.content.length,
      0,
    );
    if (total > MAX_HISTORY_CHARS) {
      ctx.addIssue({
        code: "custom",
        message: "This conversation is too long. Start a new chat.",
        path: ["messages"],
      });
    }
  });

export type ChatRequest = z.infer<typeof chatRequestSchema>;
