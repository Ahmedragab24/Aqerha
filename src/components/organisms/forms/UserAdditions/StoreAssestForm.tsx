"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState, useEffect } from "react";
import type { TypePropertyType } from "@/types/Real-estates";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";
import { Button } from "@/components/ui/button";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import {
  AuctionRealEstatesType,
  StoreAuctionCategoryList,
} from "@/constants/Auctions";
import LocationFields from "@/components/molecules/FieldsGroup/LocationFields";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import {
  AssestFormSchema,
  type AssestFormType,
} from "@/schemas/AssestFormSchema";
import BordersTable from "@/components/templates/BordersTable";
import CustomCheckboxField from "@/components/molecules/checkboxs/CustomCheckboxField";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { LocationData } from "../AddAdOrRequestForm";
import { Input } from "@/components/ui/input";

interface StoreAuctionAssetsDialogProps {
  changeOpen: (open: boolean) => void;
  setAssetsData: (
    assetsData: FormData[] | ((prev: FormData[]) => FormData[])
  ) => void;
  auctionId: string;
}

interface BorderEntry {
  direction: string;
  border: string;
  lengths: string;
}

const StoreAssestForm = ({
  changeOpen,
  setAssetsData,
  auctionId,
}: StoreAuctionAssetsDialogProps) => {
  const [borders, setBorders] = useState<BorderEntry[]>([
    { direction: "شمال", border: "", lengths: "" },
    { direction: "شرق", border: "", lengths: "" },
    { direction: "جنوب", border: "", lengths: "" },
    { direction: "غرب", border: "", lengths: "" },
  ]);

  const form = useForm<AssestFormType>({
    resolver: zodResolver(AssestFormSchema),
    defaultValues: {
      real_estate_type: "",
      category: "",
      location: {
        latitude: "",
        longitude: "",
        city: "",
      },
      streets_num: "",
      meter_price: "",
      deposit: "",
      open_price: "",
      asset_start_date: "",
      asset_end_date: "",
      instrument_number: "",
      auction_number: "",
      area: "",
      rooms: "",
      bathrooms: "",
      floors: "",
      has_electricity: false,
      has_water: false,
      description: "",
      borders: borders,
      asset_image: undefined,
      brochure_image: undefined,
    },
  });

  useEffect(() => {
    form.setValue("borders", borders);
  }, [borders, form]);

  const onSubmit = useCallback(
    async (values: AssestFormType) => {
      try {
        console.log("[v0] Submitting asset with values:", values);

        const Assets = new FormData();
        Assets.append("auction_id", auctionId);
        Assets.append("real_estate_type", values.real_estate_type);
        Assets.append("category", values.category);
        Assets.append("location", values.location.city);
        Assets.append("streets_num", values.streets_num);
        Assets.append("meter_price", values.meter_price);
        Assets.append("deposit", values.deposit);
        Assets.append("open_price", values.open_price);
        Assets.append("asset_start_date", values.asset_start_date);
        Assets.append("asset_end_date", values.asset_end_date);
        Assets.append("instrument_number", values.instrument_number);
        Assets.append("auction_number", values.auction_number);
        Assets.append("area", values.area);
        Assets.append("rooms", String(values.rooms));
        Assets.append("bathrooms", String(values.bathrooms));
        Assets.append("floors", String(values.floors));
        Assets.append("has_electricity", values.has_electricity ? "1" : "0");
        Assets.append("has_water", values.has_water ? "1" : "0");
        Assets.append("description", values.description);
        Assets.append("city", values.location.city);
        Assets.append("latitude", values.location.latitude);
        Assets.append("longitude", values.location.longitude);
        values.borders.forEach((border, index) => {
          Assets.append(`borders[${index}][direction]`, border.direction);
          Assets.append(`borders[${index}][border]`, border.border);
          Assets.append(`borders[${index}][Lengths]`, border.lengths);
        });

        if (values.asset_image instanceof File) {
          Assets.append("asset_image", values.asset_image);
        }

        if (values.brochure_image instanceof File) {
          Assets.append("brochure_image", values.brochure_image);
        }

        setAssetsData((prev: FormData[]) => [...prev, Assets]);

        form.reset();
        setBorders([
          { direction: "شمال", border: "", lengths: "" },
          { direction: "شرق", border: "", lengths: "" },
          { direction: "جنوب", border: "", lengths: "" },
          { direction: "غرب", border: "", lengths: "" },
        ]);

        changeOpen(false);
        showSuccessToast({ title: "تم إضافة الأصل بنجاح" });

        console.log("[v0] Asset added successfully");
      } catch (error) {
        console.error("[v0] Error adding asset:", error);
        showFailedToast({ title: "حدث خطأ أثناء إضافة الأصل" });
      }
    },
    [auctionId, setAssetsData, changeOpen, form]
  );

  const handleLocationSelect = useCallback(
    (location: LocationData) => {
      form.setValue("location.latitude", location.lat);
      form.setValue("location.longitude", location.lng);
      form.setValue("location.city", location.city);
    },
    [form]
  );

  const TypeProperty = form.watch("real_estate_type") as TypePropertyType;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`rounded-md space-y-4`}
      >
        {/* Image Upload Field */}
        <FormField
          control={form.control}
          name="asset_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>صورة المزاد</FormLabel>
              <ImageUpload
                value={field.value}
                onChange={field.onChange}
                className="w-full"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="real_estate_type"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="نوع العقار"
              placeholder="أدخل نوع العقار"
              options={AuctionRealEstatesType}
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="حالة المزاد"
              placeholder="أدخل حالة المزاد"
              options={StoreAuctionCategoryList}
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="deposit"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="مبلغ دخول المزاد"
              placeholder="أدخل مبلغ دخول المزاد"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="asset_start_date"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="تاريخ بدأ الأصل"
              placeholder="أدخل تاريخ بدأ الأصل"
              type="date"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="asset_end_date"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="تاريخ انتهاء الأصل"
              placeholder="أدخل تاريخ انتهاء الأصل"
              type="date"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="open_price"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="السعر الإفتتاحي"
              placeholder="أدخل السعر الإفتتاحي"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="meter_price"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="سعر المتر"
              placeholder="أدخل سعر المتر"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="instrument_number"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="رقم الصك"
              placeholder="أدخل رقم الصك"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="auction_number"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="رقم المزاد"
              placeholder="أدخل رقم المزاد"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="مساحة الأصل"
              placeholder="أدخل مساحة الأصل"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="streets_num"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="عدد الشوارع"
              placeholder="أدخل عدد الشوارع"
              type="number"
              className="!h-11 border-border"
            />
          )}
        />
        {TypeProperty === "building" && (
          <FormField
            control={form.control}
            name="floors"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="عدد الأدوار"
                placeholder="أدخل عدد الأدوار"
                type="number"
                className="!h-11 border-border"
              />
            )}
          />
        )}
        {(TypeProperty === "villa" || TypeProperty === "apartment") && (
          <>
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="عدد الغرف"
                  placeholder="أدخل عدد الغرف"
                  type="number"
                  className="!h-11 border-border"
                />
              )}
            />

            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="عدد دورات المياه"
                  placeholder="أدخل عدد دورات المياه"
                  type="number"
                  className="!h-11 border-border"
                />
              )}
            />
          </>
        )}
        {/* Borders */}
        <BordersTable borders={borders} setBorders={setBorders} />
        {/* Location And Description */}
        <LocationFields
          field={form.control}
          handleLocationSelect={handleLocationSelect}
        />
        <FormField
          control={form.control}
          name="has_electricity"
          render={({ field }) => (
            <CustomCheckboxField
              field={field}
              options={[{ label: "يوجد كهرباء", value: "true" }]}
            />
          )}
        />

        <FormField
          control={form.control}
          name="has_water"
          render={({ field }) => (
            <CustomCheckboxField
              field={field}
              options={[{ label: "يوجد مياه", value: "true" }]}
            />
          )}
        />
        <FormField
          control={form.control}
          name="brochure_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ملف البروشور</FormLabel>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="!h-11 border-border"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  field.onChange(file || undefined);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="وصف الأصل"
              placeholder="أدخل وصف الأصل"
              type="text"
              typeInput="textarea"
              className="!h-44 border-border"
            />
          )}
        />
        <Button
          type="submit"
          className={`w-full text-lg !h-12`}
          disabled={false}
        >
          حفظ الأصل
        </Button>
      </form>
    </Form>
  );
};

export default StoreAssestForm;
