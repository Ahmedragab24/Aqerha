import Image from "next/image";
import React from "react";

const LicenseExpirationCard = () => {
  return (
    <div className="bg-[#FF0000]/10 border border-red-500 p-8 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:bg-[#FF0000]/30 duration-300">
      <div className="flex  gap-4">
        <div>
          <Image
            src="/Icons/f7_exclamationmark-triangle-fill.svg"
            alt="License Expiration"
            width={60}
            height={60}
          />
        </div>

        <div className="flex flex-col gap-2 text-black">
          <h2 className="text-xl font-semibold">
            تم إغلاق الإعلان لانتهاء الترخيص
          </h2>
          <h4 className="font-light">
            لنشر إعلان جديد بنفس الصور و التفاصيل إضغط هنا
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LicenseExpirationCard;
