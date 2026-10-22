import { cn } from "@/lib/utils";

type ProductMockupProps = {
  className?: string;
  caption?: string;
};

const products = [
  { name: "Sparkling Water", price: "$2.49", tone: "bg-[#dbeafe]" },
  { name: "Trail Mix", price: "$4.99", tone: "bg-[#e0e7ff]" },
  { name: "Fresh Bread", price: "$3.25", tone: "bg-[#fef3c7]" },
  { name: "Organic Milk", price: "$5.10", tone: "bg-[#dcfce7]" },
  { name: "Coffee Beans", price: "$8.75", tone: "bg-[#ffe4e6]" },
  { name: "Snack Pack", price: "$1.99", tone: "bg-[#e0f2fe]" },
] as const;

const cart = [
  { name: "Sparkling Water", qty: 2, price: "$4.98" },
  { name: "Fresh Bread", qty: 1, price: "$3.25" },
  { name: "Coffee Beans", qty: 1, price: "$8.75" },
] as const;

/** Original illustrative POS UI — clearly demo data, not a live store. */
export function ProductMockup({
  className,
  caption = "Illustrative AlliancePay POS interface with sample catalog data",
}: ProductMockupProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgb(18_99_241_/_0.22),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 bottom-0 h-16 rounded-[100%] bg-foreground/10 blur-xl"
        aria-hidden
      />

      <figure className="relative">
        {/* Soft retail counter backdrop */}
        <div
          className="absolute -bottom-3 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-b-2xl bg-gradient-to-b from-[#c4a484] to-[#a67c52] opacity-90"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_24px_60px_-20px_rgb(16_27_53_/_0.35)] ring-1 ring-primary/10">
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-[10px] font-bold text-white">
                AP
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  AlliancePay POS
                </p>
                <p className="text-[10px] text-muted">Demo store · Lane 1</p>
              </div>
            </div>
            <span className="rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-semibold text-success">
              Online
            </span>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">Catalog</p>
                <p className="text-[10px] text-muted">Sample data</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-xl border border-border bg-white p-2.5 shadow-sm"
                  >
                    <div
                      className={cn("mb-2 h-12 rounded-lg sm:h-14", product.tone)}
                    />
                    <p className="truncate text-[11px] font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-primary">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-border bg-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Current cart
              </p>
              <ul className="mt-4 flex-1 space-y-3">
                {cart.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-2 text-sm"
                  >
                    <span>
                      <span className="block font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-xs text-muted">Qty {item.qty}</span>
                    </span>
                    <span className="font-semibold text-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-3">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted">Total</span>
                  <span className="text-lg font-bold text-foreground">$16.98</span>
                </div>
                <div className="rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-white">
                  Charge $16.98
                </div>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="sr-only">{caption}</figcaption>
      </figure>
    </div>
  );
}
