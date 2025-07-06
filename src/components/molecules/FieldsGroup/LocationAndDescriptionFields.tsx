import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import React from "react";
import LocationMap from "../Locations/locationMap";
import { Textarea } from "@/components/ui/textarea";
import { LocationData } from "@/components/organisms/forms/AddAdOrRequestForm";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  handleLocationSelect: (value: LocationData) => void;
}

const LocationAndDescriptionFields = ({
  field,
  handleLocationSelect,
}: Props) => {
  return (
    <>
      {/* Location */}
      <div className="space-y-4">
        <FormLabel className="text-base font-semibold flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          الموقع *
        </FormLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={field}
            name="location.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المدينة *</FormLabel>
                <FormControl>
                  <Input placeholder="الرياض" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={field}
            name="location.district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الحي *</FormLabel>
                <FormControl>
                  <Input placeholder="العليا" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={field}
          name="location.address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>العنوان التفصيلي *</FormLabel>
              <FormControl>
                <Input
                  placeholder="اختر الموقع من الخريطة أو اكتب العنوان"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LocationMap onLocationSelect={handleLocationSelect} />
      </div>

      {/* Description */}
      <FormField
        control={field}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>الوصف *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="يرجى إدخال تفاصيل حول العقار المطلوب..."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default LocationAndDescriptionFields;
