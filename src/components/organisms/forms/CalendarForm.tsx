"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface Props {
  setIsSuccessfully: (value: boolean) => void;
}

const CalendarForm = ({ setIsSuccessfully }: Props) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dates = [
    { day: "الخميس", date: "11 يناير", value: "thursday" },
    { day: "الجمعة", date: "12 يناير", value: "friday" },
    { day: "السبت", date: "13 يناير", value: "saturday" },
    { day: "الأحد", date: "14 يناير", value: "sunday" },
    { day: "الاثنين", date: "15 يناير", value: "monday" },
    { day: "الثلاثاء", date: "16 يناير", value: "tuesday" },
  ];

  const times = [
    { label: "من 9 صباحاً إلى 11 صباحاً", value: "9-11" },
    { label: "من 11 صباحاً إلى 1 مساءً", value: "11-1" },
    { label: "من 1 إلى 3 مساءً", value: "1-3" },
    { label: "من 3 إلى 5 مساءً", value: "3-5" },
    { label: "من 5 إلى 7 مساءً", value: "5-7" },
    { label: "من 7 إلى 9 مساءً", value: "7-9" },
  ];

  const locations = [
    { label: "الدمام", value: "dammam" },
    { label: "الرياض", value: "riyadh" },
    { label: "جدة", value: "jeddah" },
  ];

  const handleConfirm = () => {
    console.log({
      name,
      phone,
      selectedDate,
      selectedTime,
      selectedLocation,
    });

    setIsSuccessfully(true);
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
          {dates.map((date) => (
            <button
              key={date.value}
              onClick={() => setSelectedDate(date.value)}
              className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                selectedDate === date.value
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <div className="font-medium text-sm">{date.day}</div>
              <div className="text-xs text-gray-500 mt-1">{date.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <h3 className="text-center font-medium mb-4">اختر الوقت المتاح</h3>
        <div className="grid grid-cols-2 gap-3">
          {times.map((time) => (
            <button
              key={time.value}
              onClick={() => setSelectedTime(time.value)}
              className={`p-3 rounded-lg border text-center text-sm transition-colors cursor-pointer ${
                selectedTime === time.value
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {time.label}
            </button>
          ))}
        </div>
      </div>

      {/* Location Selection */}
      <div>
        <h3 className="text-center font-medium mb-4">اختر مكان المقابلة</h3>
        <div className="grid grid-cols-3 gap-3">
          {locations.map((location) => (
            <button
              key={location.value}
              onClick={() => setSelectedLocation(location.value)}
              className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                selectedLocation === location.value
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {location.label}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <Button
        onClick={handleConfirm}
        className="w-full "
        disabled={
          !selectedDate || !selectedTime || !selectedLocation || !name || !phone
        }
      >
        تأكيد
      </Button>
    </div>
  );
};

export default CalendarForm;
