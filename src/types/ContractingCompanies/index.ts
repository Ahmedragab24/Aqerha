import { TypeUserType } from "../Auth";
import { ProjectType } from "../projects";
import { ProfileType } from "../Real-estates";

export interface ContractingCompanyType {
  id: number;
  name: string;
  image: string | null;
  email: string;
  phone: string;
  city: string;
  membership_type: "contracting_company";
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
  office_services: string[];
  real_estate_project: ProjectType[];
}

export interface StoreContractingCompanyType {
  name: string;
  phone: string;
  whatsapp: string;
  commercial_registration_number: number;
  city: string;
  image: string | File;
  description: string;
  services: string[];
}
