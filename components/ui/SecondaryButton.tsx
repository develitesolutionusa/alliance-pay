import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type SecondaryButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "btn-outline-gradient inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border border-transparent px-5 py-2.5 text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

function buttonClass(className?: string) {
  const typeClass = className?.includes("text-button-lg")
    ? "text-button-lg"
    : "text-button";
  return cn(baseClass, typeClass, className);
}

export function SecondaryButton(props: SecondaryButtonProps) {
  const { children, className } = props;

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={buttonClass(className)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass(className)}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" {...buttonProps} className={buttonClass(className)}>
      {children}
    </button>
  );
}
