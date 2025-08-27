import { RealEstesType } from "@/types/Real-estates";
import React from "react";

const LegalInfoProperty = ({
  realEstate,
}: {
  realEstate: RealEstesType | undefined;
}) => {
  return (
    <>
      {realEstate?.ad?.instrument_number ||
      realEstate?.ad?.created_at ||
      realEstate?.ad?.license_number ? (
        <div className="space-y-8">
          <h1 className="text-xl md:text-2xl font-semibold">
            معلومات عن الإعلان
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstate?.ad?.instrument_number && (
              <div className="flex items-center justify-center gap-1 p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="text-md md:text-xl font-semibold text-primary">
                  رقم الإعلان :
                </h4>
                <span className="text-md md:text-xl text-gray-600">
                  {realEstate?.ad?.instrument_number}
                </span>
              </div>
            )}
            {realEstate?.ad?.created_at && (
              <div className="flex items-center justify-center gap-1 p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="text-md md:text-xl font-semibold text-primary">
                  تاريخ الإضافة :
                </h4>
                <span className="text-md md:text-xl text-gray-600">
                  {new Date(
                    realEstate?.ad?.created_at || ""
                  ).toLocaleDateString()}
                </span>
              </div>
            )}
            {realEstate?.ad?.license_number && (
              <div className="flex items-center justify-center gap-1 p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="text-md md:text-xl font-semibold text-primary">
                  رقم الترخيص :
                </h4>
                <span className="text-md md:text-xl text-gray-600">
                  {realEstate?.ad?.license_number}
                </span>
              </div>
            )}
            {realEstate?.ad?.created_at && (
              <div className="flex items-center justify-center gap-1 p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="text-md md:text-xl font-semibold text-primary">
                  آخر تحديث :
                </h4>
                <span className="text-md md:text-xl text-gray-600">
                  {new Date(
                    realEstate?.ad?.created_at || ""
                  ).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LegalInfoProperty;
