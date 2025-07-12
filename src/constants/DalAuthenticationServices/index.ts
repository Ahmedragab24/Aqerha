export type DalServicesType =
  | "إفراغ عقاري"
  | "التسجيل العيني للعقار"
  | "إفراغ ورهن"
  | "رهن عقاري"
  | "فك رهن عقاري"
  | "تصحيح رهن عقاري";

export interface DalAuthenticationServicesType {
  label: DalServicesType;
  value: DalServicesType;
}

export const DalAuthenticationServicesList: DalAuthenticationServicesType[] = [
  {
    label: "إفراغ عقاري",
    value: "إفراغ عقاري",
  },
  {
    label: "التسجيل العيني للعقار",
    value: "التسجيل العيني للعقار",
  },
  {
    label: "إفراغ ورهن",
    value: "إفراغ ورهن",
  },
  {
    label: "رهن عقاري",
    value: "رهن عقاري",
  },
  {
    label: "فك رهن عقاري",
    value: "فك رهن عقاري",
  },
  {
    label: "تصحيح رهن عقاري",
    value: "تصحيح رهن عقاري",
  },
];
