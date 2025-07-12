import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";

export const AgreeTermsList = [
  { value: "agree", label: "أوافق علي شروط الإستخدام و ألتزم برسوم الإعلان." },
];

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const AgreeTermsCheckboxField = ({ field }: Props) => {
  return (
    <FormItem>
      {AgreeTermsList.map((item) => (
        <FormField
          key={item.value}
          control={field}
          name="AgreeTerms"
          render={({ field }) => {
            return (
              <FormItem
                key={item.value}
                className="flex flex-row items-center gap-2"
              >
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes(item.value)}
                    onCheckedChange={(checked) => {
                      const currentValue = field.value || [];
                      return checked
                        ? field.onChange([...currentValue, item.value])
                        : field.onChange(
                            currentValue.filter(
                              (value: string) => value !== item.value
                            )
                          );
                    }}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  {item.label}
                </FormLabel>
              </FormItem>
            );
          }}
        />
      ))}
      <FormMessage />
    </FormItem>
  );
};

export default AgreeTermsCheckboxField;
