import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HTMLInputTypeAttribute } from "react";

interface CustomFormItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  typeInput?: "text" | "textAria";
  // icon?: React.ReactNode;
}

const CustomFormItem = ({
  field,
  label,
  className,
  placeholder,
  type,
  typeInput = "text",
}: // icon,
CustomFormItemProps) => {
  return (
    <FormItem>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        {typeInput === "text" ? (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={`${className}`}
          />
        ) : (
          <Textarea
            placeholder={placeholder}
            {...field}
            className={`${className}`}
          />
        )}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CustomFormItem;
