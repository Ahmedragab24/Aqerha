export interface MenuType {
  label: string;
  path: string;
}

export const SellingMenu: MenuType[] = [
  { label: "أضف عقارك للبيع", path: "/add-advertisement" },
  { label: "شقق للبيع", path: "/real-estate" },
  { label: "فيلات للبيع", path: "/real-estate" },
  { label: "أراضي للبيع", path: "/real-estate" },
  { label: "محلات تجارية للبيع", path: "/real-estate" },
  { label: "مكاتب للبيع", path: "/real-estate" },
];

export const LoyerMenu: MenuType[] = [
  { label: "أضف عقارك للإيجار", path: "/add-advertisement" },
  { label: "شقق للإيجار", path: "/real-estate" },
  { label: "فيلات للإيجار", path: "/real-estate" },
  { label: "أراضي للإيجار", path: "/real-estate" },
  { label: "محلات تجارية للإيجار", path: "/real-estate" },
  { label: "مكاتب للإيجار", path: "/real-estate" },
];

export const ServicesMenu: MenuType[] = [
  { label: "المشاريع العقارية", path: "/projects" },
  { label: "المطورين العقاريين", path: "/developers" },
  { label: "المكاتب الهندسية", path: "/engineeringOffices" },
  { label: "شركات المقاولات", path: "/contracting-companies" },
  { label: "خدمات توثيق دال", path: "/dal-authentication-services" },
  { label: "المزادات", path: "/auctions" },
];

export const quakilyMenu: MenuType[] = [
  { label: "استكشاف", path: "/real-estate/explore" },
  { label: "المفضلة", path: "/favorites" },
  { label: "الأخبار", path: "/news" },
  { label: "تواصل معنا", path: "/contact" },
  { label: "من نحن", path: "/aboutUs" },
  { label: "الإشعارات", path: "/notifications" },
  { label: "المحادثات", path: "/conversations" },
  { label: "خدمة العملاء", path: "/customer-service" },
];

export const FooterAboutList = [
  { label: "عن الشركة", path: "/aboutUs" },
  { label: "العقارات", path: "/real-estate" },
  { label: "الخدمات", path: "/services" },
  { label: "الأخبار", path: "/news" },
];

export const FooterImportantLinks = [
  { label: "خدمة العملاء", path: "/customer-service" },
  { label: "اتصل بنا", path: "/contact" },
  {
    label: "الشروط والأحكام",
    path: "/terms-and-conditions#termsAndConditions",
  },
  { label: "سياسة الخصوصية", path: "/terms-and-conditions#privacyPolicy" },
];
