export type SalesPropertyType =
  | "apartment"
  | "architecture"
  | "villa"
  | "duplex-villa"
  | "rest-house"
  | "floor"
  | "farm"
  | "land"
  | "office"
  | "shop";

export type RentalPropertyType =
  | "apartment"
  | "architecture"
  | "villa"
  | "duplex-villa"
  | "rest-house"
  | "floor"
  | "farm"
  | "land"
  | "office"
  | "storehouse"
  | "shop"
  | "room"
  | "camp";

export interface RealEstesType {
  id: number;
  image: string;
  isPopular: boolean;
  price: number;
  name: string;
  location: string;
  Area: 126;
  Bathrooms: number;
  beds: number;
}
export interface RealEstateGuideType {
  id: number;
  image: string;
  isPopular: boolean;
  price: number;
  name: string;
  location: string;
  Area: 126;
  Bathrooms: number;
  beds: number;
}
