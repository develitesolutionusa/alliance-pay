import {
  BadgePercent,
  BarChart3,
  Boxes,
  ClipboardList,
  CreditCard,
  Gift,
  Headset,
  Heart,
  IdCard,
  Layers,
  MapPinned,
  Package,
  ShoppingCart,
  Percent,
  Printer,
  Puzzle,
  Receipt,
  RotateCcw,
  Scale,
  ScanBarcode,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const icons = {
  scanBarcode: ScanBarcode,
  shoppingCart: ShoppingCart,
  package: Package,
  boxes: Boxes,
  warehouse: Warehouse,
  clipboardList: ClipboardList,
  users: Users,
  idCard: IdCard,
  heart: Heart,
  gift: Gift,
  chart: BarChart3,
  trendingUp: TrendingUp,
  creditCard: CreditCard,
  layers: Layers,
  mapPinned: MapPinned,
  puzzle: Puzzle,
  store: Store,
  sparkles: Sparkles,
  headset: Headset,
  percent: Percent,
  badgePercent: BadgePercent,
  receipt: Receipt,
  rotateCcw: RotateCcw,
  printer: Printer,
  scale: Scale,
} as const;

export type IconName = keyof typeof icons;

type FeatureIconProps = {
  name: IconName;
  className?: string;
};

export function FeatureIcon({ name, className = "h-6 w-6" }: FeatureIconProps) {
  const Icon: LucideIcon | undefined = icons[name];
  if (!Icon) {
    throw new Error(`Unknown FeatureIcon name: ${String(name)}`);
  }
  return (
    <Icon
      className={className}
      strokeWidth={2}
      absoluteStrokeWidth
      aria-hidden
    />
  );
}
