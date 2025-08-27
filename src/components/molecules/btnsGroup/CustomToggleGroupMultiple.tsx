import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { OptionType } from "@/types/selects";
import React from "react";

interface CustomToggleGroupMultipleProps {
  title?: string;
  Items: OptionType[];
  value?: string[];
  dispatch: (value: string[]) => void;
  type: "multiple";
}

const CustomToggleGroupMultiple = ({
  title,
  Items,
  value,
  dispatch,
}: CustomToggleGroupMultipleProps) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      {title && (
        <Label className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
          {title}
        </Label>
      )}
      <ToggleGroup
        type="multiple"
        defaultValue={Items.map((item) => item.value)}
        value={value}
        onValueChange={(val) => val && dispatch(val)}
        className="flex flex-wrap gap-0 justify-start"
      >
        {Items.map((item) => (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            aria-label={`Toggle ${item.value}`}
            className="min-w-[105px] w-auto text-gray-500 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground cursor-pointer border border-gray-200 text-xs sm:text-sm font-medium"
          >
            <span className="whitespace-nowrap">{item.label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CustomToggleGroupMultiple;
