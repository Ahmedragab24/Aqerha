"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useCallback, useMemo } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import { toast } from "sonner";
import {
  facades,
  LeaseTermList,
  numberOptions,
  propertyAges,
  SalesPropertyTypeList,
  streetWidths,
} from "@/constants/forms/Order";
import type { SalesPropertyType } from "@/types/products";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import ApartmentFields from "@/components/molecules/FieldsGroup/ApartmentFields";
import ArchitectureFields from "@/components/molecules/FieldsGroup/ArchitectureFields";
import LandFields from "@/components/molecules/FieldsGroup/LandFields";
import LocationAndDescriptionFields from "@/components/molecules/FieldsGroup/LocationAndDescriptionFields";
import {
  AdOrRequestFormInput,
  AdOrRequestFormSchema,
} from "@/schemas/AdOrRequestFormInput";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";
import AgreeTermsCheckboxField from "@/components/molecules/checkboxs/AgreeTermsCheckboxField";

interface Props {
  changeOpen?: (value: boolean) => void;
  type: "ad" | "request" | "any";
  formType: "sales" | "rental";
  title: boolean;
}

export interface LocationData {
  lat: number;
  lng: number;
  address: string;
}

const AddAdOrRequestForm = ({ changeOpen, formType, type, title }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AdOrRequestFormInput>({
    resolver: zodResolver(AdOrRequestFormSchema),
    defaultValues: {
      propertyType: "apartment",
      minPrice: 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      location: {
        lat: 0,
        lng: 0,
        address: "",
      },
      image: undefined,
      AgreeTerms: [],
    },
  });

  const propertyType = form.watch("propertyType") as SalesPropertyType;

  // Memoize conditional rendering logic for better performance
  const showApartmentFields = useMemo(() => {
    return (
      propertyType === "villa" ||
      propertyType === "duplex-villa" ||
      propertyType === "architecture"
    );
  }, [propertyType]);

  const showArchitectureFields = useMemo(() => {
    return propertyType === "architecture";
  }, [propertyType]);

  const showFacadeField = useMemo(() => {
    return (
      propertyType === "villa" ||
      propertyType === "duplex-villa" ||
      propertyType === "architecture" ||
      propertyType === "land"
    );
  }, [propertyType]);

  const showFloorField = useMemo(() => {
    return propertyType === "floor";
  }, [propertyType]);

  const showPropertyAgeField = useMemo(() => {
    return (
      propertyType !== "farm" &&
      propertyType !== "land" &&
      propertyType !== "shop"
    );
  }, [propertyType]);

  const showStreetWidthField = useMemo(() => {
    return propertyType !== "floor" && propertyType !== "farm";
  }, [propertyType]);

  const showLandFields = useMemo(() => {
    return propertyType !== "land";
  }, [propertyType]);

  const showLeaseTermFields = useMemo(() => {
    return formType === "rental" && propertyType !== "land";
  }, [propertyType, formType]);

  const onSubmit = useCallback(
    async (values: AdOrRequestFormInput) => {
      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form submitted successfully:", values);

        // Reset form first, then close modal
        form.reset();
        toast.success("تم إرسال طلب البحث بنجاح");

        // Close modal after successful submission
        changeOpen?.(false);
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, changeOpen]
  );

  const handleLocationSelect = useCallback(
    (location: LocationData) => {
      form.setValue("location.lat", location.lat);
      form.setValue("location.lng", location.lng);
      form.setValue("location.address", location.address);
    },
    [form]
  );

  return (
    <Card className="h-[70vh] overflow-hidden overflow-y-scroll" dir="rtl">
      {title && (
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            {type === "request"
              ? `طلب بحث عن عقار ( ${formType === "sales" ? "بيع" : "إيجار"} )`
              : "إضافة إعلان"}
          </CardTitle>
        </CardHeader>
      )}

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`space-y-6 p-4 rounded-xl shadow-md ${
              type === "request" ? "bg-secondary" : ""
            }`}
          >
            {/* Image Upload Field */}
            {type !== "request" && (
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>صورة العقار</FormLabel>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* Property Type */}
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="نوع العقار"
                  placeholder="اختر نوع العقار"
                  options={SalesPropertyTypeList}
                  className="!h-11 border-border"
                />
              )}
            />

            {/* Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minPrice"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    type="number"
                    placeholder="100000"
                    label="السعر الأدنى (ريال) *"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="maxPrice"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    type="number"
                    placeholder="500000"
                    label="السعر الأقصى (ريال) *"
                  />
                )}
              />
            </div>

            {/* Area Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minArea"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    type="number"
                    placeholder="100"
                    label="أقل مساحة (متر مربع) *"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="maxArea"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    type="number"
                    placeholder="300"
                    label="أكبر مساحة (متر مربع) *"
                  />
                )}
              />
            </div>

            {/* Conditional Fields for Villa, Duplex Villa, and Architecture */}
            {showApartmentFields && <ApartmentFields field={form.control} />}

            {/* Architecture Specific Fields */}
            {showArchitectureFields && (
              <ArchitectureFields field={form.control} />
            )}

            {/* Facade Field */}
            {showFacadeField && (
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
            )}

            {/* Floor Number Field */}
            {showFloorField && (
              <FormField
                control={form.control}
                name="floorNumber"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="رقم الدور"
                    placeholder="اختر رقم الدور"
                    options={numberOptions}
                    className="!h-11 border-border"
                  />
                )}
              />
            )}

            {/* Property Age Field */}
            {showPropertyAgeField && (
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
            )}

            {/* Street Width Field */}
            {showStreetWidthField && (
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
            )}

            {/* Land Specific Fields */}
            {showLandFields && <LandFields field={form.control} />}

            {showLeaseTermFields && (
              <FormField
                control={form.control}
                name="LeaseTerm"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="مدة عقد الإيجار"
                    placeholder="اختر مدة عقد الإيجار"
                    options={LeaseTermList}
                    className="!h-11 border-border"
                  />
                )}
              />
            )}

            {/* Location And Description */}
            <LocationAndDescriptionFields
              field={form.control}
              handleLocationSelect={handleLocationSelect}
            />

            {type === "any" && (
              <FormField
                control={form.control}
                name="AgreeTerms"
                render={() => <AgreeTermsCheckboxField field={form.control} />}
              />
            )}

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

export default AddAdOrRequestForm;
