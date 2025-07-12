"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "@/components/ui/form";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { StepType } from "@/app/(pages)/broker-ad/page";
import { StepTowFormSchema } from "@/schemas/broker-ad";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import {
  AdvertisingChannelsList,
  FoundOrNoFound,
  numberOptions,
  propertyAges,
  PropertyServicesList,
  purposes,
  SalesPropertyTypeList,
} from "@/constants/forms/Order";

interface Props {
  setStep: (value: StepType) => void;
}

const StepTowForm = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof StepTowFormSchema>>({
    resolver: zodResolver(StepTowFormSchema),
    defaultValues: {
      IdNumber: "",
      AdvertisingLicenseNumber: "",
      TitleDeedNumber: "",
      contactNumber: "",
      RealEstateLicenseNumber: "",
      PropertyArea: "",
      UnitPrice: "",
      RoomsNumber: "",
      PropertyType: "",
      PropertyAge: "",
      AdvertisementPurpose: "",
      TheAddress: "",
      AddressNumber: "",
      City: "",
      TheNeighborhood: "",
      zipCode: "",
      AdditionalNumber: "",
      StreetName: "",
      BuildingNumber: "",
      Longitude: "",
      latitude: "",
      ObligationsProperty: "",
      AdvertisingChannels: "",
      PropertyServices: "",
      LicenseCreationDate: "",
      LicenseExpirationDate: "",
    },
  });

  function onSubmit(values: z.infer<typeof StepTowFormSchema>) {
    console.log(values);
    setStep("stepThree");
  }

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="IdNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم المعلن (الهوية /المنشأة)"
                placeholder="ادخل رقم الهوية / المنشأة"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="AdvertisingLicenseNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم ترخيص الإعلان"
                placeholder="ادخل رقم ترخيص الإعلان"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="TitleDeedNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم صك الملكية"
                placeholder="ادخل رقم صك الملكية"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم التواصل للمعلن"
                placeholder="ادخل رقم التواصل للمعلن"
                type="tel"
              />
            )}
          />
          <FormField
            control={form.control}
            name="RealEstateLicenseNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم رخصة الوساطة والتسويق العقاري"
                placeholder="ادخل رقم رخصة الوساطة والتسويق العقاري"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="PropertyArea"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="مساحة العقار"
                placeholder="ادخل مساحة العقار"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="UnitPrice"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="سعر الوحدة / سعر المتر للارض"
                placeholder="ادخل سعر الوحدة / سعر المتر للارض"
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="RoomsNumber"
            render={({ field }) => (
              <CustomSelectField
                label="عدد الغرف"
                placeholder="اختر عدد الغرف"
                field={field}
                options={numberOptions}
              />
            )}
          />
          <FormField
            control={form.control}
            name="PropertyType"
            render={({ field }) => (
              <CustomSelectField
                label="نوع العقار"
                placeholder="اختر نوع العقار"
                field={field}
                options={SalesPropertyTypeList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="PropertyAge"
            render={({ field }) => (
              <CustomSelectField
                label="عمر العقار"
                placeholder="اختر عمر العقار"
                field={field}
                options={propertyAges}
              />
            )}
          />
          <FormField
            control={form.control}
            name="AdvertisementPurpose"
            render={({ field }) => (
              <CustomSelectField
                label="غرض الإعلان"
                placeholder="اختر غرض الإعلان"
                field={field}
                options={purposes}
              />
            )}
          />
          <FormField
            control={form.control}
            name="TheAddress"
            render={({ field }) => (
              <CustomFormItem
                label="المنطقة"
                placeholder="ادخل المنطقة"
                field={field}
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="AddressNumber"
            render={({ field }) => (
              <CustomFormItem
                label="رقم المنطقة"
                placeholder="ادخل رقم المنطقة"
                field={field}
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="City"
            render={({ field }) => (
              <CustomFormItem
                label="المدينة"
                placeholder="ادخل المدينة"
                field={field}
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="TheNeighborhood"
            render={({ field }) => (
              <CustomFormItem
                label="الحي"
                placeholder="ادخل الحي"
                field={field}
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <CustomFormItem
                label="الرمز البريدي"
                placeholder="ادخل الرمز البريدي"
                field={field}
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="AdditionalNumber"
            render={({ field }) => (
              <CustomFormItem
                label="الرقم الإضافي"
                placeholder="ادخل الرقم الإضافي"
                field={field}
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="StreetName"
            render={({ field }) => (
              <CustomFormItem
                label="اسم الشارع"
                placeholder="ادخل اسم الشارع"
                field={field}
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="BuildingNumber"
            render={({ field }) => (
              <CustomFormItem
                label="رقم المبني"
                placeholder="ادخل رقم المبني"
                field={field}
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="Longitude"
            render={({ field }) => (
              <CustomFormItem
                label="خط الطول"
                placeholder="ادخل خط الطول"
                field={field}
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="latitude"
            render={({ field }) => (
              <CustomFormItem
                label="خط العرض"
                placeholder="ادخل خط العرض"
                field={field}
                type="number"
              />
            )}
          />
          <FormField
            control={form.control}
            name="ObligationsProperty"
            render={({ field }) => (
              <CustomSelectField
                label="الالتزامات على العقار"
                placeholder="اختر الالتزامات على العقار"
                field={field}
                options={FoundOrNoFound}
              />
            )}
          />
          <FormField
            control={form.control}
            name="AdvertisingChannels"
            render={({ field }) => (
              <CustomSelectField
                label="قنوات الإعلان"
                placeholder="اختر قنوات الإعلان"
                field={field}
                options={AdvertisingChannelsList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="PropertyServices"
            render={({ field }) => (
              <CustomSelectField
                label="خدمات العقار"
                placeholder="اختر خدمات العقار"
                field={field}
                options={PropertyServicesList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="LicenseCreationDate"
            render={({ field }) => (
              <CustomFormItem
                label="تاريخ انشاء الرخصة"
                placeholder="ادخل تاريخ انشاء الرخصة"
                field={field}
                type="date"
              />
            )}
          />
          <FormField
            control={form.control}
            name="LicenseExpirationDate"
            render={({ field }) => (
              <CustomFormItem
                label="تاريخ نهاية الرخصة"
                placeholder="ادخل تاريخ نهاية الرخصة"
                field={field}
                type="date"
              />
            )}
          />
          <div className="md:col-span-2">
            <SubmitBtn title="التالي" />
          </div>
        </form>
      </div>
    </Form>
  );
};

export default StepTowForm;
