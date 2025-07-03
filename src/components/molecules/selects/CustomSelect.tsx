import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  image?: string;
}

const CustomSelect = ({
  options,
  className,
  placeholder,
  image,
}: CustomSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={`w-[180px] ${className}`}>
        <div className="w-full flex items-center justify-between gap-4">
          <Avatar>
            <AvatarImage src={image} className="w-8 h-8" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <SelectValue placeholder={placeholder} />
        </div>
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
