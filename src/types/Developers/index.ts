import { TypeUserType } from "../Auth";
import { ProjectType } from "../projects";
import { ProfileType } from "../Real-estates";

export interface DeveloperType {
  id: number;
  name: string;
  image: string | null;
  email: string;
  phone: string;
  city: string;
  membership_type: "real_estate_developer";
  location: string | null;
  identity_id: number | null;
  status: boolean;
  type: TypeUserType;
  email_verified_at: string | null;
  latitude: number | null;
  longitude: number | null;
  nation_id: number | null;
  user_package_status: string;
  profile_photo_url: string;
  profile: ProfileType;
  real_estate_project: ProjectType[];
}

export interface StoreDeveloperType {
  name: string;
  phone: string;
  email: string;
  city: string;
  password: string;
}
