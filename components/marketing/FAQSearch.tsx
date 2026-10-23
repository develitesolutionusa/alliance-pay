"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  FAQAccordion,
  type FAQItem,
} from "@/components/marketing/FAQAccordion";

type FAQSearchProps = {
  items: FAQItem[];
};

export function FAQSearch({ items }: FAQSearchProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    if (!deferredQuery) return items;
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(deferredQuery) ||
        item.answer.toLowerCase().includes(deferredQuery),
    );
  }, [deferredQuery, items]);

  return (
    <div className="space-y-6">
      <label className="block">
        <span className="sr-only">Search FAQs</span>
        <span className="relative block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions"
            className="w-full rounded-[var(--radius-button)] border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </span>
      </label>
      {filtered.length === 0 ? (
        <p className="rounded-[var(--radius-card)] border border-dashed border-border bg-surface px-5 py-8 text-center text-sm text-muted">
          No questions match “{query.trim()}”. Try another keyword or{" "}
          <a className="font-semibold text-primary" href="/contact">
            contact AlliancePay
          </a>
          .
        </p>
      ) : (
        <FAQAccordion key={deferredQuery || "all"} items={filtered} />
      )}
    </div>
  );
}
