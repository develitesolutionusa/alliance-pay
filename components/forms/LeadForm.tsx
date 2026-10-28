"use client";

import { useId, useState } from "react";
import { FormField, inputClassName } from "@/components/forms/FormField";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  fieldErrorsFromZod,
  leadPayloadSchema,
  type LeadFieldErrors,
  type LeadIntent,
} from "@/lib/leads/schema";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export type LeadFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

type LeadFormProps = {
  intent: LeadIntent;
  submitLabel?: string;
  className?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  intent,
  submitLabel = "Send message",
  className,
}: LeadFormProps) {
  const formId = useId();
  const [values, setValues] = useState<LeadFormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    const parsed = leadPayloadSchema.safeParse({
      intent,
      ...values,
    });

    if (!parsed.success) {
      setErrors(fieldErrorsFromZod(parsed.error));
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: LeadFieldErrors;
        supportEmail?: string;
      } | null;

      if (response.status === 429) {
        setStatus("error");
        setStatusMessage(
          data?.error ??
            "Too many requests. Please wait a few minutes and try again.",
        );
        return;
      }

      if (!response.ok || !data?.ok) {
        if (data?.fieldErrors) setErrors(data.fieldErrors);
        setStatus("error");
        setStatusMessage(
          data?.error ??
            "Something went wrong. Please try again or email us directly.",
        );
        return;
      }

      setValues({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
      });
      setStatus("success");
      setStatusMessage("Thanks — your message was sent. We will follow up soon.");
    } catch {
      setStatus("error");
      setStatusMessage(
        `Network error. Check your connection and try again, or email ${siteConfig.supportEmail}.`,
      );
    }
  }

  const statusId = `${formId}-status`;

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative space-y-4", className)}
      noValidate
      aria-describedby={statusMessage ? statusId : undefined}
    >
      <FormField id={`${formId}-name`} label="Full name" required error={errors.name}>
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          className={inputClassName}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          disabled={status === "submitting"}
        />
      </FormField>
      <FormField
        id={`${formId}-email`}
        label="Work email"
        required
        error={errors.email}
      >
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={inputClassName}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          disabled={status === "submitting"}
        />
      </FormField>
      <FormField
        id={`${formId}-company`}
        label="Store or company"
        error={errors.company}
      >
        <input
          id={`${formId}-company`}
          name="company"
          autoComplete="organization"
          className={inputClassName}
          value={values.company}
          onChange={(e) =>
            setValues((v) => ({ ...v, company: e.target.value }))
          }
          disabled={status === "submitting"}
        />
      </FormField>
      <FormField
        id={`${formId}-message`}
        label="How can we help?"
        required
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className={cn(inputClassName, "resize-y")}
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          disabled={status === "submitting"}
        />
      </FormField>

      {/* Honeypot — visually hidden from people, left for bots. */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) =>
            setValues((v) => ({ ...v, website: e.target.value }))
          }
        />
      </div>

      <PrimaryButton
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </PrimaryButton>

      {statusMessage ? (
        <p
          id={statusId}
          className={cn(
            "text-sm",
            status === "success" ? "text-success" : "text-danger",
          )}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
