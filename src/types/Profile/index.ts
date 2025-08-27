import { ProjectType } from "../projects";
import { AdRealEstesType, ReviewType } from "../Real-estates";

export interface ProfileType {
  id: number;
  name: string;
  image: string | null;
  email: string;
  phone: string;
  city: string;
  membership_type: string;
  location: string | null;
  identity_id: string | null;
  status: boolean;
  type: string;
  email_verified_at: string;
  latitude: string | null;
  longitude: string | null;
  nation_id: string | null;
  user_package_status: string;
  address: string;
  description: string;
  profile: {
    id: number;
    user_id: number;
    name: string;
    address: string;
    phone: string;
    whatsapp: string;
    image: string | undefined;
    license_number: string | null;
    commercial_registration_number: string | null;
    description: string;
    service: string;
    services: string[];
    brochure: File | null;
    protfolio_link: string | null;
    created_at: string;
  };
  reviews: ReviewType[];
  ads: AdRealEstesType[];
  projects: ProjectType[];
}

export interface ChangePasswordType {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}

export interface StoreReviewType {
  reviewed_user_id: number;
  rating: number;
  comment: string;
  name: string;
}
