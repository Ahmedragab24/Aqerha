"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { OptionType } from "@/types/selects";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface CustomSelectProps {
  className?: string;
  options: OptionType[];
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch?: (value: any) => void;
  onChange?: (value: string) => void;
}

const CustomSelect = ({
  options,
  className,
  placeholder,
  value,
  dispatch,
  onChange,
}: CustomSelectProps) => {
  return (
    <Select
      defaultValue={value}
      value={value}
      onValueChange={(val) =>
        dispatch ? dispatch(val) : onChange && onChange(val)
      }
    >
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, index) => (
          <SelectItem
            key={index}
            value={item.value}
            className="flex items-center gap-2"
          >
            {item.label}
            {item?.image && (
              <Avatar>
                <AvatarImage src={item?.image} className="w-8 h-8" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
