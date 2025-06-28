import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  setChangeOpen: (value: boolean) => void;
}

const CalendarSuccessfully = ({ setChangeOpen }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <Image
        src="/Icons/Successfully.png"
        alt="successfully"
        width={300}
        height={300}
      />

      <h1 className="text-lg text-center font-semibold">
        تم إرسال الموعد! الان تابع الإشعارات للتأكيد علي الموعد و التواصل مع
        المالك عبر وسائل التواصل
      </h1>

      <Button
        size="lg"
        className="w-1/2 h-12"
        onClick={() => setChangeOpen(false)}
      >
        نم
      </Button>
    </div>
  );
};

export default CalendarSuccessfully;
