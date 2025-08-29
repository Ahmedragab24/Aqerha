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
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold ">
            معلومات عن الإعلان
          </h1>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {realEstate?.ad?.instrument_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم الإعلان :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.instrument_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.created_at && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  تاريخ الإضافة :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {new Date(
                    realEstate?.ad?.created_at || ""
                  ).toLocaleDateString("ar-SA")}
                </span>
              </div>
            )}

            {realEstate?.ad?.license_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم الترخيص :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.license_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.instrument_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم الصك :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.instrument_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.record_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم السجل التجاري :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.record_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.unified_commercial_registration_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم السجل التجاري :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.unified_commercial_registration_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.agency_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم الوكالة :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.agency_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.agency_date && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  تاريخ الوكالة :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.agency_date}
                </span>
              </div>
            )}

            {realEstate?.ad?.id_number && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم الهوية :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.id_number}
                </span>
              </div>
            )}

            {realEstate?.ad?.owner_nation_id && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم هوية المالك :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.owner_nation_id}
                </span>
              </div>
            )}

            {realEstate?.ad?.agent_nation_id && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 p-3 md:p-4 bg-gray-100 rounded-md shadow-sm text-center sm:text-right">
                <h4 className="text-sm md:text-xl font-semibold text-primary">
                  رقم هوية الوكيل :
                </h4>
                <span className="text-sm md:text-xl text-gray-600">
                  {realEstate?.ad?.agent_nation_id}
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
