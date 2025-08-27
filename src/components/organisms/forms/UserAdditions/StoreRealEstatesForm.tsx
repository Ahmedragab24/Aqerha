"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useMemo } from "react";
import { Loader2 } from "lucide-react";
import {
  type AdOrRequestFormInput,
  AdOrRequestFormSchema,
} from "@/schemas/AdOrRequestFormInput";
import type {
  StoreRealEstesType,
  TypeInterfaceType,
  TypePropertyType,
  TypePurposeType,
  TypeRentalPeriodType,
  TypeUsedRealEstateType,
} from "@/types/Real-estates";
import {
  LeaseTermList,
  numberOptions,
  propertyAges,
  PropertyCategory,
  PropertyTypeList,
  purposesOfRealEstate,
  RegionList,
  streetWidths,
} from "@/constants/selects";
import MultiImageUpload from "@/components/molecules/uploads/MulitImageUpload";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import CustomCheckboxField from "@/components/molecules/checkboxs/CustomCheckboxField";
import { useGetFeaturesByTypeQuery } from "@/store/services/Features";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { Checkbox } from "@/components/ui/checkbox";
import { LocationData } from "../AddAdOrRequestForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import LocationFields from "@/components/molecules/FieldsGroup/LocationFields";
import { Button } from "@/components/ui/button";

interface Props {
  changeOpen: (open: boolean) => void;
  RealEstatesData: StoreRealEstesType[];
  setRealEstatesData: (data: StoreRealEstesType[]) => void;
  isStoreRealEstatesLoading: boolean;
  setImagesData: (data: FormData) => void;
}

const StoreRealEstatesForm = ({
  changeOpen,
  setRealEstatesData,
  isStoreRealEstatesLoading,
  setImagesData,
  RealEstatesData,
}: Props) => {
  const form = useForm<AdOrRequestFormInput>({
    resolver: zodResolver(AdOrRequestFormSchema),
    defaultValues: {
      propertyType: "",
      mainPrice: "",
      maxPrice: "",
      mainArea: "",
      maxArea: "",
      interface: "",
      floorNumber: "",
      propertyAge: "",
      bedrooms: "",
      bathrooms: "",
      salons: "",
      purpose: "",
      purpose_type: "",
      street_width: "",
      number_of_shops: "",
      number_of_units: "",
      number_of_floor: "",
      number_of_streets: "",
      number_of_elevators: "",
      rental_period: "",
      description: "",
      features: [],
      terms_acceptance: false,
      phone: "",
      whatsapp: "",
      is_marketing_request: false,
      location: {
        latitude: "",
        longitude: "",
        city: "",
      },
      image: undefined,
      images: undefined,
    },
  });

  const propertyType = form.watch("propertyType") as TypePropertyType;
  const purposeType = form.watch("purpose") as TypePurposeType;
  const { data } = useGetFeaturesByTypeQuery(propertyType);
  const Features =
    data?.features.map((feature) => ({
      label: feature.name,
      value: String(feature.id),
    })) || [];

  //  Conditions
  const showVillaFields = useMemo(() => {
    return propertyType === "villa" || propertyType === "duplex_villa";
  }, [propertyType]);

  const showArchitectureFields = useMemo(() => {
    return propertyType === "building";
  }, [propertyType]);

  const showFloorFields = useMemo(
    () => propertyType === "floor",
    [propertyType]
  );

  //   const showFacadeField = useMemo(() => {
  //     return [
  //       "villa",
  //       "duplex_villa",
  //       "architecture",
  //       "land",
  //       "shop",
  //       "floor",
  //       "independent_villa",
  //       "rest_house",
  //       "roof_floor",
  //     ].includes(propertyType);
  //   }, [propertyType]);

  const showPropertyAgeField = useMemo(() => {
    return propertyType !== "farm" && propertyType !== "land";
  }, [propertyType]);

  const showStreetWidthField = useMemo(() => {
    return propertyType !== "floor" && propertyType !== "farm";
  }, [propertyType]);

  const showLeaseTermFields = useMemo(() => {
    return purposeType === "rent";
  }, [purposeType]);

  const showBedroomsAndBathrooms = useMemo(() => {
    return [
      "apartment",
      "villa",
      "duplex_villa",
      "floor",
      "independent_villa",
      "rest_house",
      "roof_floor",
    ].includes(propertyType);
  }, [propertyType]);

  const showFloorsField = useMemo(() => {
    return [
      "villa",
      "duplex_villa",
      "architecture",
      "floor",
      "apartment",
      "building",
      "independent_villa",
      "rest_house",
      "roof_floor",
      "chalet",
      "office",
      "palace",
    ].includes(propertyType);
  }, [propertyType]);

  const onSubmit = useCallback(
    async (values: AdOrRequestFormInput) => {
      const RealEstateImages = new FormData();
      if (values.image instanceof File) {
        RealEstateImages.append("image", values.image);
      }
      if (Array.isArray(values.images)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        values.images.forEach((img: any) => {
          if (img instanceof File) {
            RealEstateImages.append("images[]", img);
          }
        });
      }

      const formData: StoreRealEstesType = {
        real_estate_type: values.propertyType as TypePropertyType,
        purpose: values.purpose as TypePurposeType,
        description: values.description || "",
        city: values.location.city,
        interface: values.interface as TypeInterfaceType,
        main_price: Number(values.mainPrice),
        max_price: Number(values.maxPrice),
        main_area: Number(values.mainArea),
        max_area: Number(values.maxArea),
        rooms: Number(values.bedrooms),
        bathrooms: Number(values.bathrooms),
        salons: Number(values.salons),
        number_of_shops: Number(values.number_of_shops),
        number_of_units: Number(values.number_of_units),
        floors: Number(values.number_of_floor),
        number_of_floor: Number(values.floorNumber),
        number_of_streets: Number(values.number_of_streets),
        number_of_elevators: Number(values.number_of_elevators),
        street_width: Number(values.street_width),
        age: Number(values.propertyAge),
        purpose_type: values.purpose_type as TypeUsedRealEstateType,
        features: Array.isArray(values.features)
          ? values.features.map(Number)
          : [Number(values.features)],
        phone: String(values.phone),
        whatsapp: String(values.whatsapp),
        is_marketing_request: values.is_marketing_request || false,
        rental_period: values.rental_period as TypeRentalPeriodType,
        terms_acceptance: values.terms_acceptance,
        latitude: Number(values.location.latitude),
        longitude: Number(values.location.longitude),
      };

      setImagesData(RealEstateImages);
      setRealEstatesData([...RealEstatesData, formData]);
      showSuccessToast({ title: "تم إضافة الوحدة بنجاح" });
      changeOpen(false);
    },
    [setImagesData, setRealEstatesData, RealEstatesData, changeOpen]
  );

  const handleLocationSelect = useCallback(
    (location: LocationData) => {
      form.setValue("location.latitude", location.lat);
      form.setValue("location.longitude", location.lng);
      form.setValue("location.city", location.city);
    },
    [form]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`rounded-md space-y-4`}
      >
        {/* Image Upload Field */}

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
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>صور إضافية</FormLabel>
              <MultiImageUpload
                value={field.value || []}
                onChange={field.onChange}
                className="w-full"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Purpose and Purpose Type */}
        <div className={`grid gap-4 grid-cols-1 md:grid-cols-3`}>
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="نوع العقار"
                placeholder="اختر نوع العقار"
                options={PropertyTypeList}
                className="!h-11 border-border"
              />
            )}
          />

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="الغرض"
                placeholder="أدخل الغرض"
                options={purposesOfRealEstate}
                className="!h-11 border-border"
              />
            )}
          />

          <FormField
            control={form.control}
            name="purpose_type"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="نوع الغرض"
                placeholder="أدخل نوع الغرض"
                options={PropertyCategory}
                className="!h-11 border-border"
              />
            )}
          />
        </div>

        <div className="grid gap-4 grid-cols-1">
          {/* Lease Term Fields */}
          {showLeaseTermFields && (
            <FormField
              control={form.control}
              name="rental_period"
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
              name="street_width"
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
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <FormField
            control={form.control}
            name="mainPrice"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                type="number"
                placeholder="100000"
                label="السعر الاساسي (ريال) *"
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

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <FormField
            control={form.control}
            name="mainArea"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                type="number"
                label="المساحة الأساسية (م²) *"
                placeholder="ادخل المساحة"
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
                placeholder="ادخل المساحة"
                label="أكبر مساحة (م²) *"
              />
            )}
          />
        </div>

        {showVillaFields && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="number_of_units"
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
              name="salons"
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
        )}

        {showBedroomsAndBathrooms && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="bedrooms"
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
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Facade and Interface Fields */}

          <FormField
            control={form.control}
            name="interface"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="الواجهة *"
                placeholder="اختر الواجهة"
                options={RegionList}
                className="!h-11 border-border"
              />
            )}
          />

          {/* Floor-specific fields */}
          {showFloorFields && (
            <FormField
              control={form.control}
              name="floorNumber"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="رقم الطابق *"
                  placeholder="اختر رقم الطابق"
                  options={numberOptions}
                  className="!h-11 border-border"
                />
              )}
            />
          )}

          {/* Floors field for multi-story properties */}
          {showFloorsField && (
            <FormField
              control={form.control}
              name="number_of_floor"
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
          )}
        </div>

        {showArchitectureFields && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <FormField
              control={form.control}
              name="number_of_elevators"
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
            <FormField
              control={form.control}
              name="number_of_shops"
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
              name="number_of_streets"
              render={({ field }) => (
                <CustomSelectField
                  field={field}
                  label="عدد الشوارع *"
                  placeholder="اختر عدد الشوارع"
                  options={numberOptions}
                  className="!h-11 border-border"
                />
              )}
            />
          </div>
        )}

        {/* Features */}
        {propertyType && (
          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  مميزات العقار
                </FormLabel>
                <CustomCheckboxField field={field} options={Features} />
              </FormItem>
            )}
          />
        )}

        {/* Location And Description */}
        <LocationFields
          field={form.control}
          handleLocationSelect={handleLocationSelect}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="الوصف *"
              placeholder="يرجى إدخال تفاصيل حول العقار ..."
              type="text"
              typeInput="textarea"
              className="!h-20"
            />
          )}
        />

        <div className="grid gap-8 grid-cols-1">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomPhoneInput
                field={{
                  value: field.value || "",
                  onChange: field.onChange,
                  onBlur: field.onBlur,
                  name: field.name,
                }}
                label="رقم الهاتف *"
                className="!h-11 border-border"
              />
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <CustomPhoneInput
                field={{
                  value: field.value || "",
                  onChange: field.onChange,
                  onBlur: field.onBlur,
                  name: field.name,
                }}
                label="رقم الواتساب"
                className="!h-11 border-border text-right"
              />
            )}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="mt-16">
          <FormField
            control={form.control}
            name="terms_acceptance"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange(true)
                          : field.onChange(false);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    أوافق علي شروط الإستخدام و ألتزم برسوم الإعلان.
                  </FormLabel>
                </FormItem>
              );
            }}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-lg h-12"
          disabled={isStoreRealEstatesLoading}
        >
          {isStoreRealEstatesLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري الإرسال...
            </>
          ) : (
            "إضافة الوحدة"
          )}
        </Button>
      </form>
    </Form>
  );
};
export default StoreRealEstatesForm;
