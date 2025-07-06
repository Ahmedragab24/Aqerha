import { FormField } from "@/components/ui/form";
import React from "react";
import CustomSelectField from "../selects/CustomSelectField";
import { numberOptions } from "@/constants/forms/Order";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const ArchitectureFields = ({ field }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={field}
        name="totalFloors"
        render={({ field }) => (
          <CustomSelectField
            field={field}
            label="عدد الأدوار *"
            placeholder="اختر عدد الأدوار"
            options={numberOptions}
            className="!h-11 border-border"
          />
        )}
      />
      <FormField
        control={field}
        name="elevators"
        render={({ field }) => (
          <CustomSelectField
            field={field}
            label="عدد المصاعد *"
            placeholder="اختر عدد المصاعد"
            options={numberOptions}
            className="!h-11 border-border"
          />
        )}
      />
      <FormField
        control={field}
        name="shops"
        render={({ field }) => (
          <CustomSelectField
            field={field}
            label="عدد المحلات *"
            placeholder="اختر عدد المحلات"
            options={numberOptions}
            className="!h-11 border-border"
          />
        )}
      />
    </div>
  );
};

export default ArchitectureFields;
