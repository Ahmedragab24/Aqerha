import {
  ProfileType,
  TypePropertyType,
  TypeUsedRealEstateType,
} from "../Real-estates";

export type EvaluationStatus =
  | "جاري الفحص"
  | "التواصل مع الفاحص"
  | "التقرير جاهز";

export interface homeExaminationType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ExaminationType {
  id: number;
  name: string;
  national_id: string;
  user_status: string;
  phone: string;
  email: string;
  real_estate_type: TypePropertyType;
  real_estate_category: TypeUsedRealEstateType;
  city: string;
  district: string;
  location: string;
  examination_purpose: string;
  user_id: number;
  examination_status: EvaluationStatus;
  payment_method: string;
  payment_status: string;
  examinator: null;
  engineering_examination_id: number | null;
  created_at: string;
}

export interface EvaluationType {
  id: number;
  name: string;
  national_id: string;
  user_status: string;
  phone: string;
  email: string;
  real_estate_type: TypePropertyType;
  real_estate_category: TypeUsedRealEstateType;
  city: string;
  district: string;
  location: string;
  examination_purpose: string;
  image_from_agancy: string;
  ownership_deed: string;
  agency_number: string;
  agency_date: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  evaluation_status: EvaluationStatus;
  evaluator_id: number | null;
  user: {
    id: number;
    name: string;
    image: string;
    email: string;
    phone: string;
    city: string;
    membership_type: string;
    location: string;
    new_phone: string;
    role: string | null;
    identity_id: string | null;
    status: boolean;
    type: string;
    email_verified_at: string;
    two_factor_secret: string | null;
    two_factor_recovery_codes: string | null;
    two_factor_confirmed_at: string | null;
    latitude: number | null;
    longitude: number | null;
    otp_till: string | null;
    fcm_token: string | null;
    device_type: string;
    nation_id: string | null;
    current_team_id: number | null;
    profile_photo_path: string | null;
    fal_id: string;
    unifiedCommercialRegisterNumber: string;
    licence_number: string | null;
    commercial_registration_number: string | null;
    created_at: string;
    updated_at: string;
    description: string | null;
    whats_number: string | null;
    profile_photo_url: string;
    profile: ProfileType;
  };
}
