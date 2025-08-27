export interface PlacesType {
  id: number;
  appointment_id: number;
  address: string;
  latitude: number;
  longitude: number;
  created_at: string;
  updated_at: string;
}

export interface TimesType {
  id: number;
  appointment_id: number;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

export interface AppointmentsType {
  id: number;
  date: string;
  places: PlacesType[];
  times: TimesType[];
}

export interface StoreAppointmentType {
  date: string;
  real_estate_id: number;
  places: { address: string; latitude: number; longitude: number }[];
  times: { start_time: string; end_time: string }[];
}
