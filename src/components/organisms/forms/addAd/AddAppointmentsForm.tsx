"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  ChevronRight,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type {
  StoreTimeSlotType,
  StorePlaceType,
  StoreAppointmentType,
} from "@/types/appointments";
import LocationMap from "@/components/molecules/Locations/locationMap";
import type { stepType } from "@/app/(pages)/add-advertisement/page";
import type { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { useStoreAppointmentRealEstateMutation } from "@/store/services/RealEstate";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface AppointmentSchedulerProps {
  realEstateId?: number;
  setStep: (step: stepType) => void;
  setOpenAppointmentsDialog: (value: boolean) => void;
}

export default function AppointmentScheduler({
  realEstateId = 1,
  setStep,
  setOpenAppointmentsDialog,
}: AppointmentSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [times, setTimes] = useState<StoreTimeSlotType[]>([]);
  const [places, setPlaces] = useState<StorePlaceType[]>([]);
  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const [StoreAppointments, { isLoading }] =
    useStoreAppointmentRealEstateMutation();

  // Add new time slot
  const addTimeSlot = () => {
    setTimes([...times, { start_time: "01:00", end_time: "02:00" }]);
  };

  // Remove time slot
  const removeTimeSlot = (index: number) => {
    setTimes(times.filter((_, i) => i !== index));
  };

  // Update time slot
  const updateTimeSlot = (
    index: number,
    field: "start_time" | "end_time",
    value: string
  ) => {
    setTimes(
      times.map((time, i) => (i === index ? { ...time, [field]: value } : time))
    );
  };

  // Add place from location map
  const handleLocationSelect = (location: {
    lat: number;
    lng: number;
    city: string;
  }) => {
    const newPlace: StorePlaceType = {
      address: location.city,
      latitude: location.lat,
      longitude: location.lng,
    };
    setPlaces([...places, newPlace]);
    setIsLocationDialogOpen(false);
  };

  // Remove place
  const removePlace = (index: number) => {
    setPlaces(places.filter((_, i) => i !== index));
  };

  // Handle save
  const handleSave = async () => {
    const appointmentData: StoreAppointmentType = {
      real_estate_id: realEstateId,
      places: places,
      times: times,
      date: selectedDate || new Date(),
    };
    try {
      await StoreAppointments(appointmentData).unwrap();
      showSuccessToast({ title: "تم إضافة الإعلان و مواعيد المقابلة" });
      setOpenAppointmentsDialog(false);
      setStep("stepOne");
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: err.data.message || "حدث خطأ غير متوقع" });
    }
  };

  return (
    <div className="w-full md:max-w-[480px] mx-auto" dir="rtl">
      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <ChevronRight className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          حدد موعد المقابلة
        </h1>
        <div className="w-6" />
      </div>

      <div className="p-6 space-y-8 bg-white">
        <Card className="border-blue-100 shadow-sm">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <Label className="text-lg font-semibold text-gray-800">
                  اختر التاريخ
                </Label>
              </div>

              {selectedDate && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-lg font-medium text-blue-800">
                    {selectedDate?.toLocaleDateString("ar-En")}
                  </p>
                </div>
              )}

              <Input
                type="date"
                value={selectedDate?.toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                className="w-full h-12 text-right"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-green-600" />
                <Label className="text-lg font-semibold text-gray-800">
                  الأوقات المتاحة
                </Label>
              </div>

              <Button
                type="button"
                onClick={addTimeSlot}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-xl h-12 font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Plus className="w-5 h-5 ml-2" />
                إضافة وقت جديد
              </Button>

              <div className="space-y-3">
                {times.map((timeSlot, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 shadow-sm"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTimeSlot(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>

                    <div className="flex flex-col md:flex-row items-center gap-2 flex-1">
                      <span className="text-sm font-medium text-gray-700">
                        من
                      </span>
                      <input
                        type="time"
                        value={timeSlot.start_time}
                        onChange={(e) =>
                          updateTimeSlot(index, "start_time", e.target.value)
                        }
                        className="border-2 text-sm border-green-200 rounded-lg p-2 text-center bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-colors"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        إلى
                      </span>
                      <input
                        type="time"
                        value={timeSlot.end_time}
                        onChange={(e) =>
                          updateTimeSlot(index, "end_time", e.target.value)
                        }
                        className="border-2 text-sm border-green-200 rounded-lg p-2 text-center bg-white focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-purple-600" />
                <Label className="text-lg font-semibold text-gray-800">
                  أماكن المقابلة
                </Label>
              </div>

              <Dialog
                open={isLocationDialogOpen}
                onOpenChange={setIsLocationDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 rounded-xl h-12 font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Plus className="w-5 h-5 ml-2" />
                    إضافة مكان جديد
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-right">
                      اختر موقع المقابلة
                    </DialogTitle>
                  </DialogHeader>
                  <LocationMap onLocationSelect={handleLocationSelect} />
                </DialogContent>
              </Dialog>

              <div className="space-y-3">
                {places.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-100 shadow-sm"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removePlace(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center gap-2 flex-1">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="text-right font-medium text-gray-700">
                        {place.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={handleSave}
          disabled={
            isLoading ||
            !selectedDate ||
            times.length === 0 ||
            places.length === 0
          }
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              جارٍ الحفظ...
            </div>
          ) : (
            "حفظ المواعيد"
          )}
        </Button>
      </div>
    </div>
  );
}
