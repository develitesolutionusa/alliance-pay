import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function ProductCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "card-surface card-interactive group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      {imageSrc ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-gradient text-lg font-semibold">{title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
