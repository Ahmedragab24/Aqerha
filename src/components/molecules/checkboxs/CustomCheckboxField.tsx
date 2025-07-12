import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { OptionType } from "@/types/selects";
import clsx from "clsx";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  label?: string;
  options: OptionType[];
  className?: string;
}

const CustomCheckboxField = ({ field, options, className, label }: Props) => {
  if (!field?.name || !field?.control || !Array.isArray(options)) {
    console.warn(
      "CustomCheckboxField: field.name, control, or options missing"
    );
    return null;
  }

  return (
    <FormItem className="w-full">
      {label && (
        <div className="mb-4">
          <FormLabel className="text-base">{label}</FormLabel>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((item) => {
          if (!item?.value) return null;

          return (
            <FormField
              key={item.value}
              control={field.control}
              name={field.name}
              render={({ field: checkboxField }) => {
                const currentValue = Array.isArray(checkboxField.value)
                  ? checkboxField.value
                  : [];

                const isChecked = currentValue.includes(String(item.value));

                return (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        className={clsx("border-muted", className)}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            checkboxField.onChange([
                              ...currentValue,
                              item.value,
                            ]);
                          } else {
                            checkboxField.onChange(
                              currentValue.filter(
                                (v: string) => v !== item.value
                              )
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal cursor-pointer">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          );
        })}
      </div>

      <FormMessage />
    </FormItem>
  );
};

export default CustomCheckboxField;
