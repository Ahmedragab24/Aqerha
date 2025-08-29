"use client";

import { useStoreUserBookAppointmentMutation } from "@/store/services/RealEstate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import type { ErrorType } from "@/types/errors";
import type {
  AppointmentsType,
  PlacesType,
  TimesType,
} from "@/types/appointments";
import { Loader } from "lucide-react";

interface Props {
  setIsSuccessfully: (value: boolean) => void;
  appointments: AppointmentsType[];
}

const CalendarForm = ({ setIsSuccessfully, appointments }: Props) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<{
    id: number;
    start_time: string;
    end_time: string;
  }>({
    id: 0,
    start_time: "",
    end_time: "",
  });
  const [selectedLocation, setSelectedLocation] = useState<{
    id: number;
    address: string;
    latitude: number;
    longitude: number;
  }>({
    id: 0,
    address: "",
    latitude: 0,
    longitude: 0,
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [storeAppointment, { isLoading }] =
    useStoreUserBookAppointmentMutation();

  const availableDates = appointments?.map((item) => item.date);

  const selectedAppointment = appointments?.find(
    (item) => item.date === selectedDate
  );
  const Times = selectedAppointment?.times || [];
  const Places = selectedAppointment?.places || [];

  console.log("Available Dates", availableDates);
  console.log("Times", Times);
  console.log("Places", Places);

  const daysOfWeek = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const handleDateSelection = (dateStr: string) => {
    setSelectedDate(dateStr);
    setSelectedTime({
      id: 0,
      start_time: "",
      end_time: "",
    });
    setSelectedLocation({
      id: 0,
      address: "",
      latitude: 0,
      longitude: 0,
    });
  };

  const handleConfirm = async () => {
    try {
      await storeAppointment({
        appointment_id: selectedAppointment?.id || 0,
        appointment_time_id: selectedTime?.id || 0,
        appointment_place_id: selectedLocation?.id || 0,
        name,
        phone,
      });
      setIsSuccessfully(true);
      showSuccessToast({ title: "تم حجز الموعد بنجاح" });
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err.data.message || "حدث خطأ غير متوقع" });
    }
  };

  return (
    <div className="space-y-6 py-4 px-6 h-[80vh] overflow-y-scroll">
      {/* Name and Phone Fields */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm text-gray-600">
            الاسم
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
            dir="rtl"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm text-gray-600">
            رقم الجوال
          </Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1"
            dir="rtl"
          />
        </div>
      </div>

      {/* Date Selection */}
      <div>
        <h3 className="text-center font-medium mb-4">اختر التاريخ المتاح</h3>
        <div className="grid grid-cols-3 gap-3">
          {availableDates?.map((dateStr) => {
            const d = new Date(dateStr);
            const dayName = daysOfWeek[d.getDay()];
            return (
              <button
                key={dateStr}
                onClick={() => handleDateSelection(dateStr)}
                className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                  selectedDate === dateStr
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div className="font-medium text-sm">{dayName}</div>
                <div className="text-xs text-gray-500 mt-1">{dateStr}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <h3 className="text-center font-medium mb-4">اختر الوقت المتاح</h3>
        {!selectedDate ? (
          <div className="text-center text-gray-500 py-8">
            يرجى اختيار التاريخ أولاً
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {Times?.map((time: TimesType) => (
              <button
                key={time.id}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border text-center text-sm transition-colors cursor-pointer ${
                  selectedTime === time
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {time?.start_time} - {time?.end_time}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Location Selection */}
      <div>
        <h3 className="text-center font-medium mb-4">اختر مكان المقابلة</h3>
        {!selectedDate ? (
          <div className="text-center text-gray-500 py-8">
            يرجى اختيار التاريخ أولاً
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {Places?.map((Place: PlacesType) => (
              <button
                key={Place.id}
                onClick={() => setSelectedLocation(Place)}
                className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                  selectedLocation === Place
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {Place.address}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <Button
        onClick={handleConfirm}
        className="w-full !h-12"
        disabled={
          isLoading ||
          !selectedDate ||
          !selectedTime ||
          !selectedLocation ||
          !name ||
          !phone
        }
      >
        {isLoading ? (
          <div className="flex items-center gap-1">
            <h5>جاري التحميل...</h5>
            <Loader className="animate-spin" />
          </div>
        ) : (
          "تأكيد"
        )}
      </Button>
    </div>
  );
};

export default CalendarForm;
