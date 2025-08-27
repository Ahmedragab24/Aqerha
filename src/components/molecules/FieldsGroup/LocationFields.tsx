import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { MapPin } from "lucide-react";
import React from "react";
import LocationMap from "../Locations/locationMap";
import { LocationData } from "../../organisms/forms/AddAdOrRequestForm";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  handleLocationSelect: (value: LocationData) => void;
}

const LocationFields = ({ field, handleLocationSelect }: Props) => {
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
                  <Input placeholder="ادخل اسم الحي" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <LocationMap
          onLocationSelect={({ lat, lng, city }) =>
            handleLocationSelect({
              lat: lat.toString(),
              lng: lng.toString(),
              city: city.toString(),
            })
          }
        />
      </div>
    </>
  );
};

export default LocationFields;
