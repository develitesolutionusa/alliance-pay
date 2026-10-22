import {
  BarChart3,
  ClipboardList,
  CreditCard,
  Layers,
  Heart,
  Headset,
  Package,
  Puzzle,
  ScanBarcode,
  Sparkles,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons = {
  scanBarcode: ScanBarcode,
  package: Package,
  clipboardList: ClipboardList,
  users: Users,
  heart: Heart,
  chart: BarChart3,
  creditCard: CreditCard,
  layers: Layers,
  puzzle: Puzzle,
  store: Store,
  sparkles: Sparkles,
  headset: Headset,
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
  return <Icon className={className} aria-hidden />;
}
