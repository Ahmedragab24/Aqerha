import {
  examinationDescriptionOptionType,
  MemberShipOptionType,
  ServicesProvidersOptionType,
} from "@/types/Membership";

export const MembershipTypeList: MemberShipOptionType[] = [
  { label: "باحث عن عقار", value: "property_seeker" },
  { label: "مالك او وكيل", value: "owner" },
  { label: "مقدم خدمات", value: "Services Providers" },
];

export const ServicesProviderTypeList: ServicesProvidersOptionType[] = [
  { label: "مطور عقاري", value: "real_estate_developer" },
  { label: "مكتب هندسي", value: "engineering_offices" },
  { label: "شركة مقاولات", value: "contracting_company" },
  { label: "شركة مزادات", value: "auction_companies" },
  { label: "فاحص", value: "inspector" },
  { label: "مقيم", value: "evaluator" },
  { label: "وسيط (فرد)", value: "individual_agent" },
  { label: "وسيط (شركة)", value: "company_agent" },
];

export const examinationDescriptionList: examinationDescriptionOptionType[] = [
  { label: "مالك", value: "owner" },
  { label: "مشتري", value: "buyer" },
  { label: "وسيط", value: "broker" },
  { label: "مستأجر", value: "tenant" },
  { label: "وكيل", value: "agent" },
];
