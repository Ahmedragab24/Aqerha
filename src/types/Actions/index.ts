import { MembershipType } from "../Membership";
import { TypePropertyType } from "../Real-estates";

export type TypeAuctionCategoryType = "ongoing" | "upcoming" | "ended";
export type TypeAuctionType = "private" | "electronic" | "hybrid" | "public";

export interface BordersType {
  id?: number;
  asset_id?: number;
  direction: string;
  border: string;
  lengths: string;
}

export interface BiddingActivityType {
  id: number;
  user_id?: number;
  auction_id?: number;
  asset_id?: number;
  offer: number;
  total_payment: string;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    name: string;
    profile_photo_url?: string;
    profile?: string | null;
  };
}

export interface AuctionOwner {
  id: number;
  name: string;
  phone: string;
  image: string | null;
  email: string;
  city: string;
  membership_type: MembershipType;
  status: boolean;
}
export interface AssetsType {
  id: number;
  auction_id: number;
  is_followed: boolean;
  real_estate_type: TypePropertyType;
  category: TypeAuctionCategoryType;
  location: string;
  city: string;
  longitude: string;
  latitude: string;
  deposit: number;
  meter_price: number;
  open_price: number;
  asset_start_date: string;
  asset_end_date: string;
  instrument_number: string;
  auction_number: string;
  streets_num: number;
  area: number;
  rooms: number;
  bathrooms: number;
  floors: number | null;
  streets: number;
  has_electricity: number;
  has_water: number;
  asset_image: string;
  brochure_image: string;
  description: string;
  bidders_count: number;
  highest_offer: number;
  total_offer_amount: number;
  commission: number;
  final_total: number;
  borders: BordersType[];
  bidding_activity: BiddingActivityType[];
  owner?: AuctionOwner;
}

export interface AuctionType {
  id: number;
  user_id: number;
  name: string;
  category: TypeAuctionCategoryType;
  type: TypeAuctionType;
  location: string;
  city: string;
  longitude: string;
  latitude: string;
  deposit: number;
  image: string;
  assets_number: number;
  start_date: string;
  end_date: string;
  assets?: AssetsType[];
}

export interface StoreAuctionType {
  name: string;
  category: TypeAuctionCategoryType;
  type: TypeAuctionType;
  location: string;
  city: string;
  longitude: string;
  latitude: string;
  deposit: number;
  image: string | File;
  assets_number: number;
  start_date: string;
  end_date: string;
}
export interface StoreAuctionAssetsType {
  auction_id: number;
  // is_followed: boolean;
  real_estate_type: TypePropertyType;
  category: TypeAuctionCategoryType;
  location: string;
  city: string;
  longitude: string;
  latitude: string;
  deposit: number;
  meter_price: number;
  open_price: number;
  asset_start_date: string;
  asset_end_date: string;
  instrument_number: string;
  auction_number: string;
  streets_num: number;
  area: number;
  rooms: number;
  bathrooms: number;
  floors: number | null;
  streets: number;
  has_electricity: number;
  has_water: number;
  asset_image: string | File;
  brochure_image: string | File;
  description: string;
  bidders_count: number;
  highest_offer: number;
  total_offer_amount: number;
  commission: number;
  final_total: number;
  borders: BordersType[];
  bidding_activity: BiddingActivityType[];
}

export interface EnrollAndOfferType {
  auction_id: number;
  asset_id: number;
  offer: number;
}
