export type MembershipType =
  | "Property Seeker" // باحث عن عقار
  | "Owner or agent" // مالك او وكيل
  | "Real estate developer" // مطور عقاري
  | "Engineering office" // مكتب هندسي
  | "contracting company" //شركة مقاولات
  | "Inspector" // فاحص
  | "Resident" //مقيم
  | "Broker (individual)" //وسيط (فرد)
  | "Broker (company)"; //وسيط (شركة)

export interface MemberShipOptionType {
  label: string;
  value: MembershipType;
}
