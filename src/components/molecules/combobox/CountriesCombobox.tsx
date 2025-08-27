"use client";

import * as React from "react";
import { Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cities } from "@/constants/cities";
import { useAppDispatch } from "@/store/hooks";
import { setCity } from "@/store/features/filter/FilterRealEstate";

const CountriesCombobox = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="bg-white hover:bg-white/80 w-fit justify-between border-none !px-6 text-gray-500"
        >
          <MapPin />
          {value
            ? cities.find((city) => city.value === value)?.label
            : "اختر مدينتك"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-gray-400">
        <Command>
          <CommandInput placeholder="ابحث" className="h-9 " />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.value}
                  value={city.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    dispatch(setCity(city.value));
                  }}
                >
                  {city.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === city.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountriesCombobox;
