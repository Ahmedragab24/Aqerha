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
  { label: "شقق للإيجار", path: "/Properties" },
  { label: "فيلات للإيجار", path: "/Properties" },
  { label: "أراضي للإيجار", path: "/Properties" },
  { label: "محلات تجارية للإيجار", path: "/Properties" },
  { label: "مكاتب للإيجار", path: "/Properties" },
];

export const ServicesMenu: MenuType[] = [
  { label: "الوسطاء العقاريون", path: "/" },
  { label: "خبراء التقييم", path: "/examination&Evaluation" },
  { label: "المكاتب الهندسية", path: "/engineeringOffices" },
  { label: "شركات المقاولات", path: "/contractingCompanies" },
  { label: "المطورين العقاريين", path: "/developers" },
  { label: "خدمات توثيق دال", path: "/dalDocumentationServices" },
  { label: "المزادات", path: "/auctions" },
];

export const quakilyMenu: MenuType[] = [
  { label: "استكشاف", path: "/Properties/explore" },
  { label: "المفضلة", path: "/favorites" },
  { label: "الأخبار", path: "/news" },
  { label: "تواصل معنا", path: "/contact" },
  { label: "من نحن", path: "/aboutUs" },
  { label: "الإشعارات", path: "/notifications" },
  { label: "المحادثات", path: "/conversations" },
];

export const FooterAboutList = [
  { label: "عن الشركة", path: "/" },
  { label: "العقارات", path: "/" },
  { label: "الخدمات", path: "/" },
  { label: "الأخبار", path: "/" },
  { label: "اتصل بنا", path: "/" },
];
