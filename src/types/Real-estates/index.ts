import { AppointmentsType } from "../appointments";
import { FeatureType } from "../Features";
import { ImagesType } from "../Images";
import { PromotionServiceType } from "../Promotions";

export type TypePropertyType =
  | "apartment"
  | "building"
  | "villa"
  | "duplex_villa"
  | "independent_villa"
  | "rest_house"
  | "floor"
  | "roof_floor"
  | "chalet"
  | "camp"
  | "warehouse"
  | "farm"
  | "land"
  | "office"
  | "shop"
  | "palace";

export type TypePurposeType = "rent" | "buy" | "sale";
export type TypeRentalPeriodType = "daily" | "weekly" | "monthly" | "yearly";
export type TypeUsedRealEstateType = "residential" | "commercial";
// | "all"
// | "none";

export type TypeInterfaceType =
  | "north"
  | "south"
  | "east"
  | "west"
  | "north_west"
  | "south_west"
  | "north_east"
  | "4_streets"
  | "3_streets";

export type TypeUserRealEstateType = "individual" | "company" | "multi_owners";
export type TypeUserRealEstateRole = "owner" | "agent";

export interface RealEstesUserAd {
  id: number;
  real_estate: RealEstesType;
  license_number: string;
  created_at: string;
  status: string | null;
}

export interface ProfileType {
  id: number;
  user_id: number;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  image: string;
  license_number: string | null;
  commercial_registration_number: string | null;
  description: string;
  service: string | null;
  services: string[] | null;
  brochure: string | null;
  protfolio_link: string | null;
  created_at: string;
}

export interface ReviewType {
  id: number;
  reviewer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface RealEstesUser {
  id: number | null;
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
  nation_id: string;
  user_package_status: string;
  profile: ProfileType | null;
  reviews: ReviewType[];
  ads: RealEstesUserAd[];
}

export interface RealEstesAd {
  id: number;
  license_number: string | null;
  licence_status: string;
  user_type: string;
  user_role: string;
  record_number: string | null;
  record_date: string | null;
  unified_commercial_registration_number: string;
  instrument_number: string;
  instrument_date: string;
  owner_nation_id: string | null;
  agent_nation_id: string | null;
  one_owner_id_number: string | null;
  id_number: string | null;
  birth_date: string | null;
  phone: string;
  agency_number: string;
  agency_date: string;
  created_at: string;
  promotion: {
    type: string;
    title: string;
    start_date: string;
    end_date: string | null;
  };
}

export interface RealEstesType {
  id: number;
  user_id: number;
  ad_id: number;
  project_id: number | null;
  description: string;
  city: string;
  real_estate_type: TypePropertyType;
  views: number;
  is_favorited: boolean;
  purpose: TypePurposeType;
  status: string;
  interface: string;
  main_price: string;
  max_price: string | null;
  main_meter_price: string | null;
  max_meter_price: string | null;
  main_area: string;
  max_area: string | null;
  age: string;
  apartments: number;
  purpose_type: TypeUsedRealEstateType;
  rooms: number;
  bathrooms: number;
  salons: number;
  floors: string;
  number_of_floor: string | null;
  number_of_floors: string | null;
  number_of_shops: string | null;
  number_of_elevators: string | null;
  number_of_streets: string | null;
  number_units: string | null;
  street_width: number;
  rental_period: TypeRentalPeriodType | null;
  latitude: string;
  longitude: string;
  main_image: string;
  images: ImagesType[];
  appointments: AppointmentsType[];
  created_at?: string;
  updated_at?: string;
  features: FeatureType[];
  user: RealEstesUser;
  ad: RealEstesAd;
  project: null;
}

export interface AdRealEstesType {
  id: number;
  user_type: TypeUserRealEstateType;
  user_role: TypeUserRealEstateRole;
  record_number: string;
  record_date: string;
  unified_commercial_registration_number: string;
  licence_number: string;
  licence_status: string;
  instrument_number: string;
  instrument_date: string;
  owner_nation_id: string | null;
  agent_nation_id: string | null;
  one_owner_id_number: string | null;
  id_number: string | null;
  birth_date: string | null;
  phone: string;
  whatsapp: string | null;
  agency_number: string;
  agency_date: string;
  real_estate: RealEstesType;
  promotion: PromotionServiceType | null;
  other_ads: { id: number; real_estate: RealEstesType }[];
}

export interface StoreRealEstesType {
  ad_id?: number;
  project_id?: number;
  real_estate_type: TypePropertyType;
  purpose: TypePurposeType;
  description: string;
  city: string;
  interface: TypeInterfaceType;
  main_price: number;
  max_price: number;
  main_area: number;
  max_area: number;
  rooms: number;
  bathrooms: number;
  salons: number;
  floors: number;
  number_of_shops: number;
  number_of_units: number;
  number_of_floor: number;
  number_of_streets: number;
  number_of_elevators: number;
  age: number;
  street_width: number;
  rental_period: TypeRentalPeriodType | null;
  latitude: number;
  longitude: number;

  purpose_type: TypeUsedRealEstateType;
  terms_acceptance: boolean;

  // الخصائص المضافة (قائمة بأرقام IDs من جدول features)
  features: number[];

  // كود الإعلان (مطلوب فقط إذا كان الغرض 'sponsored')
  code?: string;
  // "is_marketing_request":"1",

  // رقم الواتساب (مطلوب إذا كان الغرض 'sale' أو 'buy')
  phone: string;
  whatsapp: string;

  is_marketing_request: boolean;
}

export interface StoreAdRealEstesType {
  user_type: TypeUserRealEstateType;
  user_role: TypeUserRealEstateRole;
  phone: string;
  whatsapp: string;
  id_number?: string;
  birth_date: string;
  record_number?: string;
  record_date?: string;
  unified_commercial_registration_number?: string;
  licence_number?: string;
  instrument_number?: string;
  instrument_date?: string;
  owner_nation_id?: string;
  agent_nation_id?: string;
  one_owner_id_number?: string;
  agency_number?: string;
  agency_date?: string;
}

export interface DiscriminationCampaignType {
  id: number;
  image: string;
  name: string;
  dailyBudget: number;
  startDate: string;
  endDate: string;
}

// export interface MarketingRealEstateType {
//   id: number;
//   views: number;
//   user_id: number;
//   ad_id: number | null;
//   project_id: number | null;
//   real_estate_type: TypePropertyType;
//   is_favorited: boolean;
//   purpose: TypePurposeType;
//   status: string;
//   description: string;
//   city: string;
//   interface: TypeInterfaceType;
//   main_price: number;
//   max_price: number;
//   main_meter_price: number;
//   max_meter_price: number;
//   main_area: number;
//   max_area: number;
//   age: string;
//   rooms: number;
//   bathrooms: number;
//   salons: number;
//   floors: number;
//   number_of_floor: number;
//   number_of_floors: number;
//   number_of_shops: number;
//   number_of_elevators: number;
//   number_of_streets: number;
//   number_units: number;
//   street_width: number;
//   rental_period: TypeRentalPeriodType | null;
//   latitude: number;
//   longitude: number;
//   apartments: number;
//   purpose_type: TypeUsedRealEstateType;
//   main_image: string;
//   features: {
//     id: number;
//     name: string;
//   }[];
//   images: ImagesType[];
//   user: RealEstesUser;
//   ad: RealEstesAd;
//   appointments: AppointmentsType[];
//   project: ProjectType | null;
//   created_at: string;
//   updated_at: string;
// }

export interface ExploreRealEstateType {
  id: number;
  type: TypePropertyType;
  purpose: TypePurposeType;
  location: string | null;
  rooms: number;
  bathrooms: number;
  area: string;
  price: string;
  main_image: string;
  is_favorited: boolean;
}
