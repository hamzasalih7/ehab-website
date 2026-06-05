import {
  UtensilsCrossed,
  Building2,
  Plane,
  Calculator,
  Landmark,
  Rocket,
  Building,
  Cpu,
  Users,
  Award,
  FileCheck,
  Briefcase,
  Home,
  Monitor,
  Castle,
  House,
  Store,
  ShoppingCart,
  Megaphone,
  Globe,
  Palette,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Building2,
  Plane,
  Calculator,
  Landmark,
  Rocket,
  Building,
  Cpu,
  Users,
  Award,
  FileCheck,
  Briefcase,
  Home,
  Monitor,
  Castle,
  House,
  Store,
  ShoppingCart,
  Megaphone,
  Globe,
  Palette,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Building2;
  return <Icon className={className} aria-hidden />;
}
