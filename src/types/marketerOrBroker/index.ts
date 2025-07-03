export type MarketerOrBrokerRequestCategoryType =
  | "الكل"
  | "فيلا"
  | "أرض"
  | "شقق"
  | "عمارة";

export interface MarketerOrBrokerRequestType {
  id: number;
  name: string;
  category: MarketerOrBrokerRequestCategoryType;
  minAria: number;
  maxAria: number;
  minPrice: number;
  maxPrice: number;
  phone: string;
  whatsapp: string;
}
