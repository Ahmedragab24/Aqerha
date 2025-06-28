import Image from "next/image";
import React from "react";

const ApartmentDrawing = () => {
  return (
    <div className="bg-primary-dark py-10 px-8 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="space-y-6">
          <h2 className="text-xl text-white">رسم الشقة</h2>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white">
              <Image src="/Icons/Done.svg" alt="Done" width={20} height={20} />
              <h3>غرفة المعيشة</h3>
            </div>
            <p className="text-sm text-gray-300">
              غرفة معيشة كبيرة لصنع ذكريات رائعة.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white">
              <Image src="/Icons/Done.svg" alt="Done" width={20} height={20} />
              <h3>المطبخ</h3>
            </div>
            <p className="text-sm text-gray-300">
              أفضل وأشهى الأطباق المعدة لأفراد العائلة بحب.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white">
              <Image src="/Icons/Done.svg" alt="Done" width={20} height={20} />
              <h3>غرفة النوم</h3>
            </div>
            <p className="text-sm text-gray-300">
              المكان للاسترخاء والتجديد لليوم التالي.
            </p>
          </div>
        </div>

        <div className="relative w-[250px] md:w-[300px] h-[250px] md:h-[300px]">
          <Image src="/Images/Plan.png" alt="plan" fill />
        </div>
      </div>
    </div>
  );
};

export default ApartmentDrawing;
