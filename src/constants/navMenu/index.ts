export interface MenuType {
  label: string;
  path: string;
}

export const SellingMenu: MenuType[] = [
  { label: "أضف عقارك للبيع", path: "/" },
  { label: "شقق للبيع", path: "/" },
  { label: "فيلات للبيع", path: "/" },
  { label: "أراضي للبيع", path: "/" },
  { label: "محلات تجارية للبيع", path: "/" },
  { label: "مكاتب للبيع", path: "/" },
];

export const LoyerMenu: MenuType[] = [
  { label: "أضف عقارك للإيجار", path: "/" },
  { label: "شقق للإيجار", path: "/" },
  { label: "فيلات للإيجار", path: "/" },
  { label: "أراضي للإيجار", path: "/" },
  { label: "محلات تجارية للإيجار", path: "/" },
  { label: "مكاتب للإيجار", path: "/" },
];

export const ServicesMenu: MenuType[] = [
  { label: "الوسطاء العقاريون", path: "/" },
  { label: "خبراء التقييم", path: "/" },
  { label: "المكاتب الهندسية", path: "/" },
  { label: "شركات المقاولات", path: "/" },
  { label: "المطورين العقاريين", path: "/" },
];
