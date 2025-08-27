import {
  TypePropertyType,
  TypeUsedRealEstateType,
  TypeUserRealEstateRole,
} from "../Real-estates";

export type EvaluationRequestState =
  | "full_evaluation"
  | "partial_evaluation"
  | "property_evaluation";

export interface EvaluationRequestType {
  name: string;
  national_id: string;
  user_status: TypeUserRealEstateRole;
  phone: string;
  email: string;
  real_estate_type: TypePropertyType;
  real_estate_category: TypeUsedRealEstateType;
  city: string;
  district: string;
  location: string;
  examination_purpose: EvaluationRequestState;
  image_from_agancy: string | File;
  ownership_deed: string | File;
  agency_number: string;
  agency_date: string;
}

export type ExaminationRequestState =
  | "with_report"
  | "without_report"
  | "visit_package";

export interface examinationRequestType {
  name: string;
  national_id: string;
  user_status: string;
  phone: string;
  email: string;
  real_estate_type: TypePropertyType;
  real_estate_category: TypeUsedRealEstateType;
  city: string;
  district: string;
  location: string;
  examination_purpose: string;
  payment_method: string;
  payment_status: string;
  inspection_service_type: ExaminationRequestState;
}
