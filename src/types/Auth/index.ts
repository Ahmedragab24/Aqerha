import { MembershipType, ServicesProvidersType } from "../Membership";
import { ProfileType } from "../Profile";

export type TypeUserType = "individual" | "company" | "multi_owners";
export type TypeUserRoleType = "owner" | "agent";

export interface UserTypeOption {
  label: string;
  value: TypeUserType;
}
export interface UserRoleTypeOption {
  label: string;
  value: TypeUserRoleType;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  membership_type: MembershipType | ServicesProvidersType;
  nation_id: number | null;
  user_package: string;
  profile_photo_url: string | null;
  profile_photo_path: string;
  profile?: ProfileType | null;
  fal_id?: string | null;
  unifiedCommercialRegisterNumber?: string | null;
  licence_number?: string | null;
  commercial_registration_number?: string | null;
  updated_at?: string;
  created_at?: string;
}

export interface LoginType {
  phone: string;
  password: string;
  fcm_token?: string;
  device_type: "web";
}

export interface RegisterType {
  name: string;
  email: string;
  phone: string;
  password: string;
  city: string;
  membership_type: MembershipType;
  image?: string;
  unifiedCommercialRegisterNumber?: string | number;
  commercial_registration_number?: string | number;
  licence_number?: string | number;
  fal_id?: string | number;
  fcm_token?: string;
  device_type: "web";
  nation_id?: number | string;
}

export interface OtpType {
  otp: number;
  phone: string;
  type?: "register" | "reset_password";
}

export interface ResetPasswordType {
  phone: string;
  password: string;
  password_confirmation: string;
}
