import { cn } from "@/lib/utils";

type WorkflowStepsProps = {
  steps: { title: string; description: string }[];
  className?: string;
};

export function WorkflowSteps({ steps, className }: WorkflowStepsProps) {
  return (
    <ol className={cn("grid gap-4 lg:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-[var(--radius-card)] border border-border bg-surface p-5"
        >
          <p className="text-sm font-semibold text-primary">
            Step {index + 1}
          </p>
          <h3 className="mt-2 text-subhead text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
