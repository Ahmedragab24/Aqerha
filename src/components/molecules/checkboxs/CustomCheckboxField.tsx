import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { OptionType } from "@/types/selects";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  label?: string;
  options: OptionType[];
  className?: string;
}

const CustomCheckboxField = ({ field, options, className, label }: Props) => {
  return (
    <FormItem className="!w-full !min-w-xl">
      {label && (
        <div className="mb-4">
          <FormLabel className="text-base">{label}</FormLabel>
        </div>
      )}
      <div className="grid grid-cols-4 gap-1">
        {options.map((item) => (
          <FormField
            key={item.value}
            control={field.control}
            name={field.name}
            render={({ field: checkboxField }) => {
              return (
                <FormItem
                  key={item.value}
                  className="flex flex-row items-center gap-2"
                >
                  <FormControl>
                    <Checkbox
                      className={`${className}`}
                      checked={checkboxField.value?.includes(item.value)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? checkboxField.onChange([
                              ...checkboxField.value,
                              item.value,
                            ])
                          : checkboxField.onChange(
                              checkboxField.value?.filter(
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
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default CustomCheckboxField;
