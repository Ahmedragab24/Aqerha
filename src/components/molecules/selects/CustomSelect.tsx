import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OptionType } from "@/types/selects";

interface CustomSelectProps {
  className?: string;
  options: OptionType[];
  placeholder?: string;
}

const CustomSelect = ({
  options,
  className,
  placeholder,
}: CustomSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
