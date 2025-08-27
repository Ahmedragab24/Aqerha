"use client";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type { OptionType } from "@/types/selects";

interface CustomSelectProps {
  className?: string;
  options: OptionType[];
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: any;
  label?: string;
  icon?: React.ReactNode;
}

const CustomSelectField = ({
  options,
  className,
  placeholder,
  field,
  label,
  icon,
}: CustomSelectProps) => {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger
            className={`w-full border-border !h-11 ${className || ""}`}
          >
            <div className="flex items-center gap-2.5">
              <SelectValue placeholder={placeholder} />
              {icon && icon}
            </div>
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
