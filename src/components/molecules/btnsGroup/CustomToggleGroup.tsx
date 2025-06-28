"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import type { OptionType } from "@/types/selects";
import { Label } from "@/components/ui/label";

interface CustomToggleGroupProps {
  title: string;
  Items: OptionType[];
}

const CustomToggleGroup = ({ title, Items }: CustomToggleGroupProps) => {
  const [selectedFormat, setSelectedFormat] = useState<string>(
    Items[0]?.value || ""
  );

  return (
    <div className="space-y-2 sm:space-y-3">
      <Label className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
        {title}
      </Label>

      <ToggleGroup
        type="single"
        value={selectedFormat}
        onValueChange={setSelectedFormat}
        className="flex flex-wrap gap-0 justify-start"
      >
        {Items.map((item) => (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            aria-label={`Toggle ${item.value}`}
            className="
              min-w-[105px] w-auto text-gray-500 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground cursor-pointer border border-gray-200 text-xs sm:text-sm font-medium"
          >
            <span className="whitespace-nowrap">{item.label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CustomToggleGroup;
