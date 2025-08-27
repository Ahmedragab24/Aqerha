"use client";

import { useAppDispatch } from "@/store/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { AreaList } from "@/constants/filters";
import {
  setMaxArea,
  setMinArea,
} from "@/store/features/filter/FilterRealEstate";

interface CustomAreaSelectProps {
  className?: string;
}

const CustomAreaSelect = ({ className }: CustomAreaSelectProps) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      onValueChange={(val) => {
        const [from, to] = val.split("-").map(Number);
        dispatch(setMinArea(from));
        if (!isNaN(to)) {
          dispatch(setMaxArea(to));
        } else {
          dispatch(setMaxArea(0));
        }
      }}
    >
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder="المساحة" />
      </SelectTrigger>

      <SelectContent>
        {AreaList.map((item, index) => (
          <SelectItem
            key={index}
            value={`${item.from}-${item.to ?? ""}`}
            className="flex items-center gap-2"
          >
            {item.to
              ? `${item.from} - ${item.to} م²`
              : `أكثر من ${item.from} م²`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomAreaSelect;
