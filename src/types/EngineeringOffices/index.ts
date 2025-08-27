import { ProfileType } from "../Profile";

export interface EngineeringOfficeType {
  id: number;
  name: string;
  image: string | null;
  email: string;
  phone: string;
  city: string;
  location: string | null;
  profile_photo_url: "https://ui-avatars.com/api/?name=%D9%85+%D9%87&color=7F9CF5&background=EBF4FF";
  profile: ProfileType;
  office_services: [];
}
