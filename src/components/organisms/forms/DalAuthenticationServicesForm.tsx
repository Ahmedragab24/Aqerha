"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormLabel } from "../../ui/form";
import CustomFormItem from "../../molecules/formItems/CustomFormItem";
import SubmitBtn from "../../atoms/buttons/SubmitBtn";
import CustomSelectField from "../../molecules/selects/CustomSelectField";
import CustomPhoneInput from "../../atoms/inputs/CustomPhoneInput";
import { cities } from "@/constants/cities";
import { DalAuthenticationServicesFormSchema } from "@/schemas/DalAuthenticationServicesFormSchema";
import ImageUpload from "../../molecules/uploads/ImageUpload";
import { TypeUserType } from "@/types/Auth";
import { userTypeList } from "@/constants/selects";
import { toast } from "sonner";
import {
  AuthenticationServiceType,
  DalServiceRequestType,
} from "@/types/AuthenticationService";
import {
  useDalRequestMutation,
  useGetServicesQuery,
} from "@/store/services/AuthenticationServices";
import { ErrorType } from "@/types/errors";

interface Props {
  Service: AuthenticationServiceType;
}

const DalAuthenticationServicesForm = ({ Service }: Props) => {
  const { data } = useGetServicesQuery();
  const ServicesData =
    data?.data.map((item) => ({
      value: String(item.id),
      label: item.name,
    })) || [];
  const [CreateRequest, { isLoading }] = useDalRequestMutation();
  const form = useForm<z.infer<typeof DalAuthenticationServicesFormSchema>>({
    resolver: zodResolver(DalAuthenticationServicesFormSchema),
    defaultValues: {
      username: "",
      ServiceType: String(Service.id),
      ServiceApplicantType: "",
      NationalIDNumber: "",
      phone: "",
      email: "",
      city: "",
      TheNeighborhood: "",
      AgencyNumber: "",
      AgencyImage: undefined,
    },
    mode: "onChange",
  });

  async function onSubmit(
    values: z.infer<typeof DalAuthenticationServicesFormSchema>
  ) {
    const data: DalServiceRequestType = {
      full_name: values.username,
      dal_service_id: Service.id,
      requester_type: values.ServiceApplicantType,
      national_id: values.NationalIDNumber,
      phone: values.phone,
      email: values.email,
      city: values.city,
      agency_number: values.AgencyNumber,
      agency_document: values.AgencyImage,
      district: values.TheNeighborhood,
    };

    try {
      const res = await CreateRequest(data).unwrap();
      toast.success(`${res.message}`);
      form.reset();
    } catch (error) {
      const err = error as ErrorType;
      toast.error(`${err?.data?.message || "حدث خطأ غير متوقع"}`);
    }
  }

  const ServiceApplicantType = form.watch(
    "ServiceApplicantType"
  ) as TypeUserType;

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary p-4 md:p-6 rounded-xl shadow-md h-[80vh] overflow-y-scroll">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="الإسم كاملاً"
                placeholder="الرجاء إدخال إسمك كاملاً"
                type="text"
              />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="البريد الإلكتروني"
                placeholder="الرجاء إدخال البريد الإلكتروني"
                type="email"
              />
            )}
          />
          <FormField
            control={form.control}
            name="ServiceType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="إختر الخدمة"
                placeholder="الرجاء اختيار الخدمة"
                options={ServicesData}
              />
            )}
          />
          <FormField
            control={form.control}
            name="ServiceApplicantType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="صفة طالب الخدمة"
                placeholder="الرجاء اختيار الصفة"
                options={userTypeList}
              />
            )}
          />
          <FormField
            control={form.control}
            name="NationalIDNumber"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="رقم الهوية الوطنية"
                placeholder="الرجاء إدخال رقم الهوية الوطنية"
                type="number"
              />
            )}
          />
          {ServiceApplicantType === "multi_owners" && (
            <>
              <FormField
                control={form.control}
                name="AgencyNumber"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="رقم الوكالة"
                    placeholder="الرجاء إدخال رقم الوكالة"
                    type="number"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="AgencyImage"
                render={({ field }) => (
                  <div>
                    <FormLabel className="mb-2">
                      الرجاء إدخال صورة الوكالة
                    </FormLabel>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomPhoneInput field={field} label="الرجاء إدخال رقم جوالك" />
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="المدينة"
                placeholder="اختر المدينة"
                options={cities}
              />
            )}
          />
          <FormField
            control={form.control}
            name="TheNeighborhood"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="الحي"
                placeholder="ادخل الحي"
                type="text"
              />
            )}
          />
          <SubmitBtn
            title="إرسال الطلب"
            loading={isLoading}
            disabled={isLoading}
          />
        </form>
      </div>
    </Form>
  );
};

export default DalAuthenticationServicesForm;
