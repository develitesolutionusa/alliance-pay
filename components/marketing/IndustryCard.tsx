import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IndustryCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageHint: string;
  className?: string;
};

export function IndustryCard({
  title,
  description,
  href,
  imageSrc,
  imageHint,
  className,
}: IndustryCardProps) {
  return (
    <article
      className={cn(
        "card-interactive group h-full rounded-[var(--radius-card)] shadow-sm",
        className,
      )}
    >
      <div className="card-gradient flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-[background] duration-200">
        <div className="relative h-40 overflow-hidden sm:h-44">
          <Image
            src={imageSrc}
            alt={imageHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-gradient text-lg font-semibold">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
          >
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
