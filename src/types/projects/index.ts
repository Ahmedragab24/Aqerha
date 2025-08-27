import { RealEstesType } from "../Real-estates";

export type typeProjectStateType = "complete" | "not_complete";

export interface ProjectType {
  id: number;
  user_id: number;
  name: string;
  location: string;
  city: string;
  cover_image: string;
  project_diagram: string;
  proshor: string | File;
  real_estates_number: number;
  description: string;
  longitudes: string;
  latitudes: string;
  payment_plan: string;
  min_price: string;
  max_price: string;
  project_status: typeProjectStateType;
  developer_name: string;
  created_at: string;
  updated_at: string;
  real_estates: RealEstesType[];
}

export interface StoreProjectType {
  name: string;
  location: string;
  city: string;
  cover_image: string;
  project_diagram: string | File;
  proshor: string | File;
  real_estates_number: number;
  description: string;
  longitudes: string;
  latitudes: string;
  payment_plan: number;
  min_price: string;
  max_price: string;
  project_status: typeProjectStateType;
  developer_name: string;
}
