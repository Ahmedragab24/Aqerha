"use client";
import type { RegisterType as RegisterDialogType } from "@/types/Register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../../../ui/form";
import CustomFormItem from "../../../molecules/formItems/CustomFormItem";
import { registerFormSchema } from "@/schemas/register";
import SubmitBtn from "../../../atoms/buttons/SubmitBtn";
import CustomPhoneInput from "../../../atoms/inputs/CustomPhoneInput";
import CustomSelectField from "../../../molecules/selects/CustomSelectField";
import { cities } from "@/constants/cities";
import {
  MembershipTypeList,
  ServicesProviderTypeList,
} from "@/constants/Membership";
import Image from "next/image";
import { Button } from "../../../ui/button";
import OrBadge from "../../../atoms/badges/OrBadge";
import type { MembershipType, ServicesProvidersType } from "@/types/Membership";
import type { z } from "zod";
import { useUserRegisterMutation } from "@/store/services/Auth";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import AcceptanceTermsCheckbox from "@/components/molecules/checkboxs/AcceptanceTermsCheckbox";

interface RegisterFormProps {
  setType: (value: RegisterDialogType) => void;
  setPhone: (value: string) => void;
}

const RegisterForm = ({ setType, setPhone }: RegisterFormProps) => {
  const [Register, { isLoading }] = useUserRegisterMutation();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      membershipType: "" as MembershipType,
      CommercialNumber: "",
      unifiedCommercialRegisterNumber: "",
      ServicesProviderType: "",
      IdNumber: "",
      licence_number: "",
      ValLicenseNumber: "",
      Password: "",
      acceptanceTerms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);

    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("phone", values.phone);
    data.append("city", values.city);
    data.append("password", values.Password);
    data.append("membership_type", values.membershipType);
    data.append("fal_id", String(values.ValLicenseNumber));
    data.append("device_type", "web");
    data.append("fcm_token", "asdasd");
    data.append(
      "commercial_registration_number",
      String(values.CommercialNumber)
    );
    data.append(
      "unifiedCommercialRegisterNumber",
      String(values.unifiedCommercialRegisterNumber)
    );
    data.append("licence_number", String(values.licence_number));
    data.append("nation_id", String(values.IdNumber));

    try {
      await Register(data).unwrap();

      showSuccessToast({ title: "تم التسجيل بنجاح" });
      setPhone(values.phone);

      setType("login");
    } catch (error) {
      const err = error as ErrorType;
      console.log(err);
      const firstError = err.data.message || "حدث خطأ غير متوقع";
      showFailedToast({ title: firstError });
    }
  }

  const MembershipType = form.watch("membershipType") as MembershipType;
  const ServicesProviderType = form.watch(
    "ServicesProviderType"
  ) as ServicesProvidersType;

  return (
    <Form {...form}>
      <div className="space-y-4 bg-secondary px-2 py-4 md:p-6 rounded-xl shadow-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="اسم المستخدم"
                placeholder="أدخل الاسم"
                type="text"
                icon={
                  <Image
                    src="/Icons/user_Gray.svg"
                    alt="membership"
                    width={20}
                    height={20}
                  />
                }
              />
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <CustomPhoneInput field={field} label="رقم الجوال" />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="البريد الإلكتروني"
                placeholder="ادخل البريد الإلكتروني"
                type="email"
                icon={
                  <Image
                    src="/Icons/Email.svg"
                    alt="membership"
                    width={20}
                    height={20}
                  />
                }
              />
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="المدينة"
                placeholder="اختر مدينتك"
                options={cities}
                icon={
                  <Image
                    src="/Icons/iconoir_city.svg"
                    alt="membership"
                    width={20}
                    height={20}
                  />
                }
              />
            )}
          />
          <FormField
            control={form.control}
            name="membershipType"
            render={({ field }) => (
              <CustomSelectField
                field={field}
                label="نوع العضوية"
                placeholder="اختر نوع العضوية"
                options={MembershipTypeList}
                icon={
                  <Image
                    src="/Icons/material-symbols-light_real-estate-agent-outline.svg"
                    alt="membership"
                    width={22}
                    height={22}
                  />
                }
              />
            )}
          />
          {MembershipType === "Services Providers" && (
            <>
              <FormField
                control={form.control}
                name="ServicesProviderType"
                render={({ field }) => (
                  <CustomSelectField
                    field={field}
                    label="نوع مقدم الخدمات"
                    placeholder="اختر نوع مقدم الخدمات"
                    options={ServicesProviderTypeList}
                    icon={
                      <Image
                        src="/Icons/material-symbols-light_real-estate-agent-outline.svg"
                        alt="membership"
                        width={22}
                        height={22}
                      />
                    }
                  />
                )}
              />
            </>
          )}
          {(MembershipType === "owner" || MembershipType === "agent") && (
            <FormField
              control={form.control}
              name="IdNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم الهوية الوطنية"
                  placeholder="أدخل رقم الهوية"
                  type="number"
                  icon={
                    <Image
                      src="/Icons/arcticons_id-me_Gray.svg"
                      alt="membership"
                      width={22}
                      height={22}
                    />
                  }
                />
              )}
            />
          )}

          {MembershipType === "Services Providers" &&
            ServicesProviderType === "individual_agent" && (
              <FormField
                control={form.control}
                name="IdNumber"
                render={({ field }) => (
                  <CustomFormItem
                    field={field}
                    label="رقم الهوية الوطنية"
                    placeholder="أدخل رقم الهوية"
                    type="number"
                    icon={
                      <Image
                        src="/Icons/arcticons_id-me_Gray.svg"
                        alt="membership"
                        width={22}
                        height={22}
                      />
                    }
                  />
                )}
              />
            )}

          {(ServicesProviderType === "contracting_company" ||
            ServicesProviderType === "real_estate_developer") && (
            <FormField
              control={form.control}
              name="CommercialNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم السجل التجاري"
                  placeholder="أدخل رقم السجل التجاري"
                  type="number"
                  icon={
                    <Image
                      src="/Icons/arcticons_id-me.svg"
                      alt="membership"
                      width={22}
                      height={22}
                    />
                  }
                />
              )}
            />
          )}

          {ServicesProviderType === "company_agent" && (
            <FormField
              control={form.control}
              name="unifiedCommercialRegisterNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم السجل التجاري الموحد"
                  placeholder="أدخل الرقم الموحد للسجل التجاري الموحد"
                  type="number"
                  icon={
                    <Image
                      src="/Icons/arcticons_id-me.svg"
                      alt="membership"
                      width={22}
                      height={22}
                    />
                  }
                />
              )}
            />
          )}

          {(ServicesProviderType === "individual_agent" ||
            ServicesProviderType === "company_agent") && (
            <FormField
              control={form.control}
              name="ValLicenseNumber"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم رخصة فال"
                  placeholder="أدخل رقم رخصة فال"
                  type="number"
                  icon={
                    <Image
                      src="/Icons/material-symbols-light_id-card-outline-rounded.svg"
                      alt="membership"
                      width={22}
                      height={22}
                    />
                  }
                />
              )}
            />
          )}

          {(ServicesProviderType === "evaluator" ||
            ServicesProviderType === "inspector" ||
            ServicesProviderType === "auction_companies" ||
            ServicesProviderType === "engineering_offices") && (
            <FormField
              control={form.control}
              name="licence_number"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  label="رقم الرخصة"
                  placeholder="أدخل رقم الرخصة"
                  type="number"
                  icon={
                    <Image
                      src="/Icons/material-symbols-light_id-card-outline-rounded.svg"
                      alt="membership"
                      width={22}
                      height={22}
                    />
                  }
                />
              )}
            />
          )}

          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                label="كلمة المرور"
                placeholder="أدخل كلمة المرور"
                type="password"
              />
            )}
          />

          <FormField
            control={form.control}
            name="acceptanceTerms"
            render={({ field }) => <AcceptanceTermsCheckbox field={field} />}
          />

          <SubmitBtn
            title="إنشاء حساب"
            loading={isLoading}
            disabled={isLoading}
          />
        </form>
        <OrBadge />
        <Button
          variant={"outline"}
          onClick={() => setType("login")}
          className="w-full h-11 text-primary hover:text-primary-80"
        >
          تسجيل دخول
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
