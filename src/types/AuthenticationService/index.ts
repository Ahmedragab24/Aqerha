export interface AuthenticationServiceType {
  id: number;
  name: string;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserAuthenticationServiceType {
  id: number;
  full_name: string;
  dal_service_id: number;
  dal_service_name: string;
  requester_type: string;
  national_id: string;
  agency_number: number;
  phone: string;
  email: string;
  city: string;
  district: string;
  agency_document: string;
  created_at: string;
}

export interface DalServiceRequestType {
  id?: number;
  full_name: string;
  dal_service_id: string | number;
  requester_type: string;
  national_id: string;
  agency_number: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  agency_document: File | string | undefined;
  updated_at?: string;
  created_at?: string;
}
