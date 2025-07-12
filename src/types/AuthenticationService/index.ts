import { DalServicesType } from "@/constants/DalAuthenticationServices";

export interface AuthenticationServiceType {
  id: number;
  name: string;
  icon: string;
  key: DalServicesType;
}
