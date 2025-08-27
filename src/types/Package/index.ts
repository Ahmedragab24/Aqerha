export type typePackageType = "individuals" | "companies";

export interface FeatureType {
  key: string;
  value: string;
}

export interface PackageType {
  id: number;
  name: string;
  type: typePackageType;
  time_type: string;
  description: string;
  price: string;
  duration_days: number;
  features: FeatureType[];
}
