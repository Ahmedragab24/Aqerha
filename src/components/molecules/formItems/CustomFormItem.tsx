import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";

interface CustomFormItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const CustomFormItem = ({
  field,
  label,
  className,
  placeholder,
  type,
}: CustomFormItemProps) => {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`${className}`}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CustomFormItem;
