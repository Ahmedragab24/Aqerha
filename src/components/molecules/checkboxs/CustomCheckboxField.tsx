import { Checkbox } from "../../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import type { OptionType } from "@/types/selects";
import clsx from "clsx";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  label?: string;
  options: OptionType[];
  className?: string;
  isPage?: boolean;
}

const CustomCheckboxField = ({
  field,
  options,
  className,
  label,
  isPage,
}: Props) => {
  return (
    <FormItem className="w-full">
      {label && (
        <div className="mb-4">
          <FormLabel className="text-base">{label}</FormLabel>
        </div>
      )}

      <div
        className={`grid grid-cols-2 gap-2 ${
          isPage
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {options.map((item) => (
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
                <FormItem className="flex items-center w-full border rounded-md p-2">
                  <FormControl>
                    <Checkbox
                      className={clsx(className)}
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          checkboxField.onChange([...currentValue, item.value]);
                        } else {
                          checkboxField.onChange(
                            currentValue.filter((v: string) => v !== item.value)
                          );
                        }
                      }}
                    />
                  </FormControl>
                  <span className="ml-2 text-sm font-normal cursor-pointer">
                    {item.label}
                  </span>
                </FormItem>
              );
            }}
          />
        ))}
      </div>

      <FormMessage />
    </FormItem>
  );
};

export default CustomCheckboxField;
