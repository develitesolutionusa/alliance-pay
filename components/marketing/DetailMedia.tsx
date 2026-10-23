import Image from "next/image";
import { cn } from "@/lib/utils";

type DetailMediaProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function DetailMedia({
  src,
  alt,
  className,
  priority = false,
}: DetailMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] border border-border bg-surface shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
