import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import React from "react";
import CustomSelectField from "../selects/CustomSelectField";
import { numberOptions, SalesFeatures } from "@/constants/forms/Order";
import CustomCheckboxField from "../checkboxs/CustomCheckboxField";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const ApartmentFields = ({ field }: Props) => {
  return (
    <>
      {/* Apartments and Halls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={field}
          name="apartments"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="عدد الشقق *"
              placeholder="اختر عدد الشقق"
              options={numberOptions}
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={field}
          name="halls"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="عدد الصالات *"
              placeholder="اختر عدد الصالات"
              options={numberOptions}
              className="!h-11 border-border"
            />
          )}
        />
      </div>

      {/* Rooms and Bathrooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={field}
          name="rooms"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="عدد الغرف *"
              placeholder="اختر عدد الغرف"
              options={numberOptions}
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={field}
          name="bathrooms"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="عدد دورات المياه *"
              placeholder="اختر عدد دورات المياه"
              options={numberOptions}
              className="!h-11 border-border"
            />
          )}
        />
      </div>

      {/* Features */}
      <FormField
        control={field}
        name="features"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              المميزات المطلوبة
            </FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CustomCheckboxField field={field} options={SalesFeatures} />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default ApartmentFields;
