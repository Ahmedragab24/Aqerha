export type MembershipType =
  | "property_seeker" // باحث عن عقار
  | "owner" // مالك
  | "agent" // وكيل
  | "Services Providers"; // مقدم خدمات

export type ServicesProvidersType =
  | "real_estate_developer" // مطور عقاري
  | "engineering_offices" // مكتب هندسي
  | "contracting_company" //شركة مقاولات
  | "auction_companies" //شركة مزادات
  | "inspector" // فاحص
  | "evaluator" //مقيم
  | "individual_agent" //وسيط (فرد)
  | "company_agent"; //وسيط (شركة)

export type examinationDescriptionType =
  | "owner" // مالك
  | "buyer" // مشتري
  | "broker" //وسيط
  | "tenant" //مستأجر
  | "agent"; //وكيل

export interface MemberShipOptionType {
  label: string;
  value: MembershipType;
}
export interface ServicesProvidersOptionType {
  label: string;
  value: ServicesProvidersType;
}
export interface examinationDescriptionOptionType {
  label: string;
  value: examinationDescriptionType;
}

// 'user',                   // مستخدم
// 'property_seeker',        // باحث عن عقار
// 'owner',                  // مالك
// 'real_estate_developer',  // مطور عقاري
// 'marketer',               // مسوق
// 'engineering_offices',    // مكاتب هندسية
// 'contracting_company',    // شركة مقاولات
// 'inspector',              // فاحص
// 'evaluator',              // مقيم
// 'auction_companies',      // شركات المزادات
// 'individual_agent',       // وسيط (فرد)
// 'company_agent'           // وسيط (شركة)
