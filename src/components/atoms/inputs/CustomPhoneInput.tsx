"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { arabCountries } from "@/constants/phoneCode";
import Image from "next/image";

interface CustomPhoneInputProps {
  field: {
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    name?: string;
  };
  label: string;
  className?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  field,
  label,
  className,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(arabCountries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Get form context to check for errors
  const form = useFormContext();
  const fieldError = form?.formState?.errors?.[field.name || "phone"];

  // Check if field is empty (only country code, no phone number)
  const isEmpty = !phoneNumber || phoneNumber.trim() === "";

  // Determine if we should show error state
  const hasError = !!fieldError || (isEmpty && form?.formState?.isSubmitted);

  const handleCountrySelect = (country: (typeof arabCountries)[0]) => {
    setSelectedCountry(country);
    field.onChange(`${country.code}${phoneNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Only allow digits
    setPhoneNumber(value);
    field.onChange(`${selectedCountry.code}${value}`);
  };

  // Determine border styling based on state
  const getBorderStyling = () => {
    if (hasError) {
      return "border-[1px] border-red-500 ring-2 ring-red-500/20 shadow-sm shadow-red-500/10";
    }
    if (isFocused) {
      return "border-[1px] border-primary ring-2 ring-primary/20 shadow-sm shadow-primary/10";
    }
    return "border-[1px] border-border hover:border-primary/50";
  };

  const getCountryButtonStyling = () => {
    if (hasError) {
      return "border-red-500 bg-red-50/50 hover:bg-red-50/70 dark:bg-red-950/20 dark:hover:bg-red-950/30";
    }
    return "border-border bg-muted/30 hover:bg-muted/50";
  };

  return (
    <FormItem className={`${className}`}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div
          className={cn(
            "relative flex h-11 overflow-hidden rounded-lg border-2 bg-transparent transition-all duration-200",
            getBorderStyling()
          )}
        >
          {/* Country Code Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex h-11 items-center gap-3 rounded-none border-0 border-r-2 px-4 transition-all duration-200",
                  "focus:outline-none focus:ring-0",
                  getCountryButtonStyling()
                )}
              >
                <Image
                  src={selectedCountry.flagUrl}
                  alt={selectedCountry.nameEn}
                  width={20}
                  height={20}
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold leading-none">
                    {selectedCountry.code}
                  </span>
                  <span className="text-xs text-muted-foreground leading-none">
                    {selectedCountry.country}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[220px] max-h-80 overflow-y-auto border-2 bg-background/95 backdrop-blur-sm shadow-xl"
            >
              <div className="p-2">
                <div className="mb-2 px-2 py-1 text-xs font-medium text-muted-foreground">
                  اختر الدولة
                </div>
                {arabCountries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className={cn(
                      "flex items-center gap-4 rounded-md p-3 cursor-pointer transition-all duration-150",
                      "hover:bg-primary/10 focus:bg-primary/10",
                      selectedCountry.code === country.code &&
                        "bg-primary/20 border border-primary/30"
                    )}
                  >
                    <Image
                      src={country.flagUrl}
                      alt={country.nameEn}
                      width={20}
                      height={20}
                    />
                    <div className="flex flex-1 flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        {country.country}
                      </span>
                      <span className="text-xs text-muted-foreground leading-tight">
                        {country.nameEn}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-medium text-primary">
                      {country.code}
                    </span>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Phone Number Input */}
          <div className="relative flex-1">
            <Input
              type="tel"
              placeholder="أدخل رقم جوالك"
              value={phoneNumber}
              onChange={handlePhoneChange}
              onBlur={() => {
                field.onBlur();
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
              className={cn(
                "h-11 border-0 bg-transparent text-right text-base font-medium",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none",
                "pr-4 pl-12", // Space for icon
                hasError
                  ? "placeholder:text-red-400/60 text-foreground"
                  : "placeholder:text-muted-foreground/60"
              )}
              dir="rtl"
              maxLength={15}
            />
            {/* Phone Icon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Phone
                className={cn(
                  "h-4 w-4",
                  hasError ? "text-red-500/70" : "text-muted-foreground/50"
                )}
              />
            </div>
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CustomPhoneInput;
