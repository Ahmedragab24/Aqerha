import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import React from "react";
import CustomSelectField from "../selects/CustomSelectField";
import { Input } from "../../ui/input";
import { purposesOfRealEstate } from "@/constants/selects";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const LandFields = ({ field }: Props) => {
  return (
    <>
      {/* Price per meter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={field}
          name="minPricePerMeter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>سعر المتر الأدنى (ريال)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="1000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={field}
          name="maxPricePerMeter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>سعر المتر الأقصى (ريال)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="3000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Purpose */}
      <FormField
        control={field}
        name="purpose"
        render={({ field }) => (
          <CustomSelectField
            field={field}
            label="الغرض *"
            placeholder="اختر الغرض"
            options={purposesOfRealEstate}
            className="!h-11 border-border"
          />
        )}
      />
    </>
  );
};

export default LandFields;
