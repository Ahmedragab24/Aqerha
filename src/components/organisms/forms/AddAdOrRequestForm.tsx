"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useMemo } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Loader2 } from "lucide-react";
import CustomSelectField from "../../molecules/selects/CustomSelectField";
import CustomFormItem from "../../molecules/formItems/CustomFormItem";
import {
  type AdOrRequestFormInput,
  AdOrRequestFormSchema,
} from "@/schemas/AdOrRequestFormInput";
import ImageUpload from "../../molecules/uploads/ImageUpload";
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
import {
  useStoreImagesRealEstateMutation,
  useStoreRealEstateMutation,
} from "@/store/services/RealEstate";
import MultiImageUpload from "@/components/molecules/uploads/MulitImageUpload";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import CustomCheckboxField from "@/components/molecules/checkboxs/CustomCheckboxField";
import { useGetFeaturesByTypeQuery } from "@/store/services/Features";
import CustomPhoneInput from "@/components/atoms/inputs/CustomPhoneInput";
import { Checkbox } from "@/components/ui/checkbox";
import LocationFields from "../../molecules/FieldsGroup/LocationFields";

interface Props {
  changeOpen?: (value: boolean) => void;
  type: "ad" | "request" | "any";
  title: boolean;
  isPage: boolean;
  setRealEstateId?: (value: number) => void;
  setOpenAppointmentsDialog?: (value: boolean) => void;
}

export interface LocationData {
  lat: string;
  lng: string;
  city: string;
}

const AddAdOrRequestForm = ({
  changeOpen,
  setRealEstateId,
  type,
  title,
  isPage,
  setOpenAppointmentsDialog,
}: Props) => {
  const [StoreImage] = useStoreImagesRealEstateMutation();
  const [StoreRealEstate, { isLoading: isStoreRealEstateLoading }] =
    useStoreRealEstateMutation();

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
      phone: {
        iso_code: "",
        number: "",
      },
      whatsapp: "",
      is_marketing_request: type === "request" ? true : false,
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

  const showFacadeField = useMemo(() => {
    return [
      "villa",
      "duplex_villa",
      "architecture",
      "land",
      "shop",
      "floor",
      "independent_villa",
      "rest_house",
      "roof_floor",
    ].includes(propertyType);
  }, [propertyType]);

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
      console.log(values);

      const RealEstateImages = new FormData();
      RealEstateImages.append("image", values.image);
      RealEstateImages.append("images", String(values.images));

      try {
        // Simulate API call
        const ImagesRes = await StoreImage(RealEstateImages).unwrap();
        const ImageCode = ImagesRes?.data?.code;

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
          phone: `${values.phone?.iso_code ?? ""}${values.phone?.number ?? ""}`,
          whatsapp: String(values.whatsapp),
          is_marketing_request: values.is_marketing_request || false,
          rental_period: values.rental_period as TypeRentalPeriodType,
          terms_acceptance: values.terms_acceptance,
          latitude: Number(values.location.latitude),
          longitude: Number(values.location.longitude),
          code: ImageCode,
        };

        if (ImagesRes?.status_code === 200) {
          const res = await StoreRealEstate(formData).unwrap();
          // Reset form first, then close modal
          setRealEstateId?.(res?.data?.id);
          form.reset();
          showSuccessToast({ title: "حدد مواعيد المقابلة" });
          setOpenAppointmentsDialog?.(true);
          changeOpen?.(false);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        showFailedToast({
          title: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
        });
      }
    },
    [
      form,
      changeOpen,
      StoreImage,
      StoreRealEstate,
      setRealEstateId,
      setOpenAppointmentsDialog,
    ]
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
    <Card
      className={`!p-0 ${
        isPage
          ? "rounded-xl shadow-lg border border-gray-200 max-w-6xl mx-auto"
          : "h-[70vh] overflow-hidden overflow-y-scroll shadow-xl"
      }`}
      dir="rtl"
    >
      {title && (
        <CardHeader className={isPage ? "pb-6" : "pb-4"}>
          <CardTitle
            className={`font-bold text-center text-primary ${
              isPage ? "text-3xl" : "text-2xl"
            }`}
          >
            {type === "request"
              ? `طلب بحث عن عقار ( ${purposeType === "buy" ? "بيع" : "إيجار"} )`
              : "إضافة إعلان"}
          </CardTitle>
        </CardHeader>
      )}

      <CardContent className={isPage ? "px-8 pb-8" : "px-2 md:px-4"}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`rounded-md ${
              type === "request" ? "bg-secondary py-4" : ""
            } ${isPage ? "space-y-8" : "space-y-6"}`}
          >
            {/* Image Upload Field */}
            {type !== "request" && (
              <div
                className={`grid gap-4 border border-gray-400 py-4 px-4 rounded-lg ${
                  isPage
                    ? "grid-cols-1 md:grid-cols-2 space-y-0"
                    : "grid-cols-1 space-y-4"
                }`}
              >
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
              </div>
            )}

            {/* Property Type - Show differently based on isPage */}
            {!isPage && (
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
            )}

            {/* Purpose and Purpose Type */}
            <div
              className={`grid gap-4 ${
                isPage ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {/* Property Type - Show in grid for full page */}
              {isPage && (
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
              )}
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

            <div
              className={`grid gap-4 ${
                isPage ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
              }`}
            >
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

            <div
              className={`grid gap-4 ${
                isPage
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
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

            <div
              className={`grid gap-4 ${
                isPage
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
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
              <div
                className={`grid gap-4 ${
                  isPage
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
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
              <div
                className={`grid gap-4 ${
                  isPage
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
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

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                isPage ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {/* Facade and Interface Fields */}
              {showFacadeField && (
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
              )}

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
              <div
                className={`grid gap-4 ${
                  isPage
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
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
                    <CustomCheckboxField
                      field={field}
                      options={Features}
                      isPage={isPage}
                    />
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
                  className={`${isPage ? "!h-40" : "!h-20"}`}
                />
              )}
            />

            <div
              className={`grid gap-4 ${
                isPage
                  ? "grid-cols-1 md:grid-cols-2 gap-8"
                  : "grid-cols-1 gap-10"
              }`}
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <CustomPhoneInput
                    field={{
                      value: (typeof field.value === "string"
                        ? undefined
                        : field.value) ?? { iso_code: "", number: "" },
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
                  <CustomFormItem
                    field={field}
                    type="text"
                    label="رقم الواتساب"
                    placeholder="ادخل رقم الواتساب"
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
              className={`w-full text-lg ${isPage ? "h-14 text-xl" : "h-12"}`}
              disabled={isStoreRealEstateLoading}
            >
              {isStoreRealEstateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  جاري الإرسال...
                </>
              ) : type === "request" ? (
                "إرسال الطلب"
              ) : (
                "إضافة الإعلان"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddAdOrRequestForm;
