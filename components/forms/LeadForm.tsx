"use client";

import { useState } from "react";
import { FormField, inputClassName } from "@/components/forms/FormField";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

export type LeadFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type LeadFormProps = {
  submitLabel?: string;
  className?: string;
  /** Until Phase 4 delivery is wired, submissions stay local and show honest feedback. */
  onSubmit?: (values: LeadFormValues) => Promise<void> | void;
};

function validate(values: LeadFormValues) {
  const errors: Partial<Record<keyof LeadFormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export function LeadForm({
  submitLabel = "Send message",
  className,
  onSubmit,
}: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormValues, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "pending">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      if (onSubmit) {
        await onSubmit(values);
        setStatus("success");
      } else {
        setStatus("pending");
      }
      setValues({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("idle");
      setErrors({ message: "Something went wrong. Please try again." });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      noValidate
    >
      <FormField id="lead-name" label="Full name" required error={errors.name}>
        <input
          id="lead-name"
          name="name"
          autoComplete="name"
          className={inputClassName}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
        />
      </FormField>
      <FormField id="lead-email" label="Work email" required error={errors.email}>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClassName}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
        />
      </FormField>
      <FormField id="lead-company" label="Store or company" error={errors.company}>
        <input
          id="lead-company"
          name="company"
          autoComplete="organization"
          className={inputClassName}
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
        />
      </FormField>
      <FormField id="lead-message" label="How can we help?" required error={errors.message}>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          className={cn(inputClassName, "resize-y")}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
        />
      </FormField>

      <PrimaryButton type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : submitLabel}
      </PrimaryButton>

      {status === "success" ? (
        <p className="text-sm text-success" role="status">
          Thanks — your message was sent.
        </p>
      ) : null}
      {status === "pending" ? (
        <p className="text-sm text-muted" role="status">
          Form delivery is not connected yet. Your details were validated locally;
          email/CRM delivery lands in Phase 4.
        </p>
      ) : null}
    </form>
  );
}
