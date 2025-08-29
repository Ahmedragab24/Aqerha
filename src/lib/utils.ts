import { TypePropertyType, TypePurposeType } from "@/types/Real-estates";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatName = (type: TypePropertyType) => {
  switch (type) {
    case "apartment":
      return "شقة";
    case "building":
      return "عمارة";
    case "camp":
      return "مخيم";
    case "farm":
      return "مزرعة";
    case "chalet":
      return "شاليه";
    case "duplex_villa":
      return "فيلا دوبلكس";
    case "floor":
      return "طابق";
    case "independent_villa":
      return "فيلا مستقلة";
    case "land":
      return "أرض";
    case "office":
      return "مكتب";
    case "palace":
      return "قصر";
    case "rest_house":
      return "استراحة";
    case "roof_floor":
      return "ملحق علوي";
    case "shop":
      return "محل";
    case "villa":
      return "فيلا";
    case "warehouse":
      return "مستودع";
    default:
      return "غير معروف";
  }
};

export const formatPurpose = (purpose: TypePurposeType) => {
  switch (purpose) {
    case "rent":
      return "للإيجار";
    case "buy":
      return "للشراء";
    case "sale":
      return "للبيع";
    default:
      return "";
  }
};

export const formatPrice = (price: number) => {
  const Format = new Intl.NumberFormat("en-Us").format(price);

  return Format;
};

export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `منذ ${days} يوم${days > 1 ? "ًا" : ""}`;
  if (hours > 0) return `منذ ${hours} ساعة`;
  if (minutes > 0) return `منذ ${minutes} دقيقة`;
  return "الآن";
}
