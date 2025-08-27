"use client";

import { useState, type KeyboardEvent } from "react";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Search, X, Plus } from "lucide-react";
import type { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCity } from "@/store/features/filter/FilterRealEstate";

interface SearchCityProps {
  className?: string;
}

const SearchCity = ({ className }: SearchCityProps) => {
  const city = useAppSelector(
    (state: RootState) => state.FilterRealEstate.FilterParams.city
  );
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      dispatch(setCity(inputValue.trim()));
      setInputValue("");
      setIsInputVisible(false);
    }
  };

  const removeBadge = () => {
    dispatch(setCity(""));
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-2 p-3 border border-gray-300 rounded-lg w-full md:w-[300px] min-h-14 ${className}`}
    >
      {/* Input Field (conditionally visible) */}
      {isInputVisible ? (
        <div className="flex-1 relative min-w-[200px]">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={() => {
              if (!inputValue.trim()) {
                setIsInputVisible(false);
              }
            }}
            placeholder="أضف المدينة المطلوبة"
            className="border-0 shadow-none focus-visible:ring-0 text-right pr-8 pl-2"
            autoFocus
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      ) : (
        <Button
          variant="ghost"
          onClick={() => setIsInputVisible(true)}
          className="flex items-center gap-2 !px-3 !py-1 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-sm border border-dashed border-gray-300"
        >
          <Plus className="h-4 w-4" />
          <span className="text-xs">أضف المدينة المطلوبة</span>
        </Button>
      )}

      {/* City Badge from Redux */}
      {city && (
        <Badge
          variant="secondary"
          className="flex items-center text-xs gap-1 px-3 py-2 bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors rounded-sm"
        >
          <span className="text-xs">{city}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent border-none"
            onClick={removeBadge}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      )}
    </div>
  );
};

export default SearchCity;
