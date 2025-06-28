import React from "react";

const LegalInfoProperty = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-xl md:text-2xl font-semibold">معلومات عن الإعلان</h1>

      <div className="md:max-w-2xl grid grid-cols-2 gap-8">
        <div className="flex items-center gap-1">
          <h4 className="text-md md:text-xl font-semibold">رقم الإعلان:</h4>
          <span className="text-md md:text-xl text-gray-600">13142512</span>
        </div>
        <div className="flex items-center gap-1">
          <h4 className="text-md md:text-xl font-semibold">تاريخ الإضافة:</h4>
          <span className="text-md md:text-xl text-gray-600">23/6/2025</span>
        </div>
        <div className="flex items-center gap-1">
          <h4 className="text-md md:text-xl font-semibold">رقم الترخيص:</h4>
          <span className="text-md md:text-xl text-gray-600">13213123</span>
        </div>
        <div className="flex items-center gap-1">
          <h4 className="text-md md:text-xl font-semibold">آخر تحديث:</h4>
          <span className="text-md md:text-xl text-gray-600">27/6/2025</span>
        </div>
      </div>
    </div>
  );
};

export default LegalInfoProperty;
