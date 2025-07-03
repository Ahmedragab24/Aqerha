"use client";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { OptionType } from "@/types/selects";

interface CustomSelectProps {
  className?: string;
  options: OptionType[];
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: any;
  label?: string;
}

const CustomSelectField = ({
  options,
  className,
  placeholder,
  field,
  label,
}: CustomSelectProps) => {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger
            className={`w-full border-border !h-11 ${className || ""}`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};

export default CustomSelectField;
