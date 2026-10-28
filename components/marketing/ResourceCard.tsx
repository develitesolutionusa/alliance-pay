import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ResourceArticle } from "@/lib/resources";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  article: ResourceArticle;
  className?: string;
};

export function ResourceCard({ article, className }: ResourceCardProps) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className={cn(
        "card-surface card-interactive group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {article.category}
        </p>
        <h2 className="mt-2 text-subhead text-foreground">
          {article.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {article.description}
        </p>
        <p className="mt-4 text-xs text-muted">
          {article.readingMinutes} min read
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Read guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
