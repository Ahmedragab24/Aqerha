export type EvaluationRequestState =
  | "under_examination"
  | "in_contact"
  | "report_ready";

export interface EvaluationRequestType {
  id: number;
  requestNumber: string;
  requestDate: string;
  phone: string;
  whatsapp: string;
  status: EvaluationRequestState;
}
