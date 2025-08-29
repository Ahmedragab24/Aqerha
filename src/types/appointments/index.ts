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

export interface StoreTimeSlotType {
  start_time: string;
  end_time: string;
}

export interface StorePlaceType {
  address: string;
  latitude: number;
  longitude: number;
}

export interface StoreAppointmentType {
  date: Date;
  real_estate_id: number;
  places: StorePlaceType[];
  times: StoreTimeSlotType[];
}

export interface StoreUserBookAppointmentType {
  appointment_id: number;
  appointment_time_id: number;
  appointment_place_id: number;
  name: string;
  phone: string;
}
