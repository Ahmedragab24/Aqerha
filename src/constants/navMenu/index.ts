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
  { label: "شقق للإيجار", path: "/PropertiesForRent" },
  { label: "فيلات للإيجار", path: "/PropertiesForRent" },
  { label: "أراضي للإيجار", path: "/PropertiesForRent" },
  { label: "محلات تجارية للإيجار", path: "/PropertiesForRent" },
  { label: "مكاتب للإيجار", path: "/PropertiesForRent" },
];

export const ServicesMenu: MenuType[] = [
  { label: "الوسطاء العقاريون", path: "/" },
  { label: "خبراء التقييم", path: "/" },
  { label: "المكاتب الهندسية", path: "/" },
  { label: "شركات المقاولات", path: "/" },
  { label: "المطورين العقاريين", path: "/developers" },
];

export const quakilyMenu: MenuType[] = [
  { label: "المفضلة", path: "/favorites" },
  { label: "الأخبار", path: "/news" },
  { label: "تواصل معنا", path: "/contact" },
  { label: "من نحن", path: "/aboutUs" },
  { label: "الإشعارات", path: "/notifications" },
];
