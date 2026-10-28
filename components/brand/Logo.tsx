import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO = {
  src: "/brand/alliancepay-logo.png",
  width: 1400,
  height: 443,
} as const;

type LogoProps = {
  className?: string;
  href?: string;
  /** Nav lockup stays compact; the footer lockup is larger so the tagline reads. */
  size?: "nav" | "footer";
  priority?: boolean;
};

const sizeClass = {
  nav: "h-11 w-auto sm:h-12",
  footer: "h-16 w-auto",
} as const;

export function Logo({
  className,
  href = "/",
  size = "nav",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      aria-label="AlliancePay home"
    >
      <Image
        src={LOGO.src}
        alt=""
        width={LOGO.width}
        height={LOGO.height}
        priority={priority}
        sizes={size === "footer" ? "220px" : "180px"}
        className={cn(sizeClass[size], "object-contain")}
      />
    </Link>
  );
}
