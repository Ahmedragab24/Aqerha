"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, MapPin } from "lucide-react";
import { SalesOrderFormSchema } from "@/schemas/SalesOrderFormSchema";
import LocationMap from "@/components/molecules/Locations/locationMap";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import CustomCheckboxField from "@/components/molecules/checkboxs/CustomCheckboxField";
import { toast } from "sonner";
import {
  facades,
  RentalFeatures,
  numberOptions,
  propertyAges,
  purposes,
  RentalPropertyTypeList,
  streetWidths,
} from "@/constants/forms/Order";

interface Props {
  changeOpen: (value: boolean) => void;
}

const RentalOrderForm = ({ changeOpen }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof SalesOrderFormSchema>>({
    resolver: zodResolver(SalesOrderFormSchema),
    defaultValues: {
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      minPricePerMeter: "",
      maxPricePerMeter: "",
      purpose: "",
      facade: "",
      apartments: "",
      rooms: "",
      halls: "",
      bathrooms: "",
      propertyAge: "",
      streetWidth: "",
      floorNumber: "",
      totalFloors: "",
      elevators: "",
      shops: "",
      LeaseTerm: "",
      features: [],
      location: {
        lat: 24.7136,
        lng: 46.6753,
        address: "",
        city: "",
        district: "",
      },
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SalesOrderFormSchema>) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted successfully:", values);
      changeOpen(false);
      // Reset form after successful submission
      setTimeout(() => {
        form.reset();
        toast.success("Event has been created.");
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleLocationSelect = (location: {
    lat: number;
    lng: number;
    address: string;
  }) => {
    form.setValue("location.lat", location.lat);
    form.setValue("location.lng", location.lng);
    form.setValue("location.address", location.address);
  };

  // const propertyType: RentalPropertyType = form.watch("propertyType");

  return (
    <Card className="h-[70vh] overflow-hidden overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          طلب بحث عن عقار ( إيجار )
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-secondary p-4 rounded-xl shadow-md"
          >
            {/* Property Type */}
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="نوع العقار"
                  placeholder="اختر نوع العقار"
                  options={RentalPropertyTypeList}
                  className="!h-11 border-border"
                />
              )}
            />
            {/* {propertyType === "apartment" && <></>} */}

            {/* Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>السعر الأدنى (ريال) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>السعر الأقصى (ريال) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="500000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Area Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>أقل مساحة (متر مربع) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>أكبر مساحة (متر مربع) *</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="300" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Price per meter */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minPricePerMeter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>سعر المتر الأدنى (ريال)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxPricePerMeter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>سعر المتر الأقصى (ريال)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="3000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Purpose and Facade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="الغرض *"
                    placeholder="اختر الغرض"
                    options={purposes}
                    className="!h-11 border-border"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="facade"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="الواجهة *"
                    placeholder="اختر الواجهة"
                    options={facades}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* Apartments and Halls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="apartments"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد الشقق *"
                    placeholder="اختر عدد الشقق"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="halls"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد الصالات *"
                    placeholder="اختر عدد الصالات"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* Rooms and Bathrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد الغرف *"
                    placeholder="اختر عدد الغرف"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد دورات المياه *"
                    placeholder="اختر عدد دورات المياه"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* FloorNumber and Elevators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="floorNumber"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد الأدوار *"
                    placeholder="اختر عدد الأدوار"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="elevators"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد المصاعد *"
                    placeholder="اختر عدد المصاعد"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* FloorNumber and Elevators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="shops"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عدد المحلات *"
                    placeholder="اختر عدد المحلات"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="LeaseTerm"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="مدة عقد الإيجار *"
                    placeholder="اختر مدة عقد الإيجار"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* Property Age and Street Width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="propertyAge"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عمر العقار *"
                    placeholder="اختر عمر العقار"
                    options={propertyAges}
                    className="!h-11 border-border"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="streetWidth"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="عرض الشارع"
                    placeholder="اختر عرض الشارع"
                    options={streetWidths}
                    className="!h-11 border-border"
                  />
                )}
              />
            </div>

            {/* Location */}
            <div className="space-y-4">
              <FormLabel className="text-base font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                الموقع *
              </FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                control={form.control}
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

            {/* Features */}
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">
                    المميزات المطلوبة
                  </FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CustomCheckboxField
                      field={field}
                      options={RentalFeatures}
                    />
                  </div>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                "إرسال الطلب"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RentalOrderForm;
