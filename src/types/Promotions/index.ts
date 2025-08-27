import { PaymentMethodType } from "../Payments";

export type TypeServiceType =
  | "highlight"
  | "golden"
  | "notify"
  | "social_campaign"
  | "from_account";

export interface PromotionServiceType {
  id: number;
  title: string;
  description: string;
  benefits: string;
}

export interface PromotionOrderType {
  // رقم الإعلان العقاري اللي عايز أروّج له (لازم يكون موجود في جدول Ads)
  ad_id: number;

  // رقم الخدمة اللي تم اختيارها من جدول promotion_ads
  // 5 = خدمة "الإعلان عبر حسابات عقرها"
  promotion_ad_id: number;

  // نوع الخدمة - Enum: highlight, golden, notify, social_campaign, from_account
  service_type: TypeServiceType;

  // المنصة اللي هيتم فيها نشر الإعلان (مطلوبة في حالات social/from_account)
  platform?: string;

  // تاريخ بداية الخدمة
  start_date: string;

  // تاريخ نهاية الخدمة
  end_date: string;

  // السعر الإجمالي المطلوب للدفع مقابل الخدمة
  total_price: number;

  // وسيلة الدفع - Enum: apple_pay, mada, credit_card
  payment_method: PaymentMethodType;
}
