"use client";

import { Form, FormField, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import type { z } from "zod";
import { toast } from "sonner";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUpdateProfileMutation } from "@/store/services/Profile";
import { setUserData } from "@/store/features/Auth/userDataSlice";
import { ErrorType } from "@/types/errors";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import SubmitBtn from "@/components/atoms/buttons/SubmitBtn";
import { ProfileSchema } from "@/schemas/ProfileSchema";
import { ProfileType } from "@/types/Profile";
import { UserData } from "@/types/Auth";
import { Button } from "@/components/ui/button";
import { ClipboardMinus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  userData: ProfileType | undefined;
}

const ProfileForm = ({ userData }: Props) => {
  const dispatch = useAppDispatch();

  console.log("userData", userData);

  const { imageFile } = useAppSelector((state) => state.userData);

  const [updateUserData, { isLoading }] = useUpdateProfileMutation();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: userData?.name || "",
      phone: userData?.phone || "",
      whatsapp: userData?.profile?.whatsapp || "",
      address: userData?.profile?.address || "",
      description: userData?.profile?.description || "",
      license_number: userData?.profile?.license_number || "",
      commercial_registration_number:
        userData?.profile?.commercial_registration_number || "",
      service: userData?.profile?.service || "",
      services: userData?.profile?.services || [""],
      protfolio_link: userData?.profile?.protfolio_link || "",
      brochure: undefined,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "services",
  });

  useEffect(() => {
    if (userData) {
      form.reset({
        name: userData?.name || "",
        phone: userData?.phone || "",
        whatsapp: userData.profile?.whatsapp || "",
        address: userData.profile?.address || "",
        description: userData.profile?.description || "",
        license_number: userData.profile?.license_number || "",
        commercial_registration_number:
          userData.profile?.commercial_registration_number || "",
        service: userData.profile?.service || "",
        services: userData.profile?.services || [""],
        protfolio_link: userData.profile?.protfolio_link || "",
        brochure: undefined,
      });
    }
  }, [userData, form]);

  const onSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    const formData = new FormData();

    formData.append("name", data.name || userData?.profile?.name || "");
    formData.append("phone", userData?.profile?.phone || "");
    formData.append("whatsapp", data.whatsapp || "");
    formData.append("address", data.address || "");
    formData.append("description", data.description || "");
    formData.append("license_number", data.license_number || "");
    formData.append(
      "commercial_registration_number",
      data.commercial_registration_number || ""
    );
    if (data.service) formData.append("service", data.service);
    if (data.services && data.services.length > 0) {
      data.services.forEach((service) => {
        if (service) formData.append("services[]", service);
      });
    }
    if (data.protfolio_link)
      formData.append("protfolio_link", data.protfolio_link);

    if (imageFile && imageFile instanceof File) {
      formData.append("image", imageFile);
    }

    if (
      data.brochure &&
      data.brochure instanceof FileList &&
      data.brochure.length > 0
    ) {
      formData.append("brochure", data.brochure[0]);
    }

    try {
      const res = await updateUserData(formData).unwrap();
      toast.success("تم تحديث المعلومات بنجاح");
      dispatch(setUserData(res?.data as unknown as UserData));
    } catch (error) {
      const err = error as ErrorType;
      toast.error(err?.data?.message || "حدث خطأ أثناء التحديث");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-primary">
          تحديث الملف الشخصي
        </h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-secondary p-4 md:p-6 rounded-xl shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* الاسم */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="text"
                  label="الاسم"
                  placeholder="ادخل الاسم"
                  className="!h-12"
                />
              )}
            />

            {/* الهاتف */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="tel"
                  label="رقم الهاتف"
                  placeholder="ادخل رقم الهاتف"
                  className="!h-12"
                />
              )}
            />

            {/* واتساب */}
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="tel"
                  label="رقم الواتساب"
                  placeholder="ادخل رقم الواتساب"
                  className="!h-12"
                />
              )}
            />

            {/* العنوان */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="text"
                  label="العنوان"
                  placeholder="ادخل العنوان"
                  className="!h-12"
                />
              )}
            />

            {/* رقم الترخيص */}
            <FormField
              control={form.control}
              name="license_number"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="text"
                  label="رقم الترخيص"
                  placeholder="ادخل رقم الترخيص"
                  className="!h-12"
                />
              )}
            />

            {/* السجل التجاري */}
            <FormField
              control={form.control}
              name="commercial_registration_number"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="text"
                  label="رقم السجل التجاري"
                  placeholder="ادخل رقم السجل التجاري"
                  className="!h-12"
                />
              )}
            />
          </div>
          {/* الوصف */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <div className="space-y-2">
                <FormLabel>الوصف</FormLabel>
                <Textarea
                  placeholder="ادخل الوصف"
                  {...field}
                  className="!h-[130px]"
                />
              </div>
            )}
          />
          {/* الخدمات */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                type="text"
                label="ماذا تقدم"
                placeholder="ادخل الخدمة"
                className="!h-12"
              />
            )}
          />

          {/* الخدمات المتعددة */}
          <div className="space-y-4">
            <FormLabel>الخدمات المقدمة</FormLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center justify-center gap-3  border rounded-xl shadow-sm p-3"
                >
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name={`services.${index}`}
                      render={({ field }) => (
                        <CustomFormItem
                          field={field}
                          type="text"
                          placeholder={`ادخل الخدمة ${index + 1}`}
                          className="!h-11 !flex-1 rounded-lg"
                        />
                      )}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="rounded-lg"
                    onClick={() => remove(index)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-xl bg-transparent border-dashed h-12 text-primary font-medium hover:border-primary"
                onClick={() => append("")}
              >
                + إضافة خدمة أخرى
              </Button>
            </div>
          </div>

          {/* رابط البورتفوليو */}
          <FormField
            control={form.control}
            name="protfolio_link"
            render={({ field }) => (
              <CustomFormItem
                field={field}
                type="url"
                label="رابط البورتفوليو"
                placeholder="ادخل رابط البورتفوليو"
                className="!h-12"
              />
            )}
          />
          {/* البروشور */}
          {userData?.profile?.brochure ? (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 p-4 border rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary-light/20 text-primary-dark">
                    <ClipboardMinus />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-gray-500">البروشور الحالي</p>
                    <a
                      href={`${userData.profile.brochure}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:text-primary/80"
                    >
                      عرض البروشور
                    </a>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="brochure"
                  render={({ field }) => (
                    <CustomFormItem
                      field={field}
                      type="file"
                      label="تغيير البروشور"
                      placeholder="ارفع بروشور جديد"
                      className="!h-12"
                    />
                  )}
                />
              </div>
            </div>
          ) : (
            <FormField
              control={form.control}
              name="brochure"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  type="file"
                  label="البروشور"
                  placeholder="ارفع البروشور"
                  className="!h-12"
                />
              )}
            />
          )}

          <div className="flex justify-center pt-6">
            <SubmitBtn
              title="حفظ التغييرات"
              loading={isLoading}
              disabled={isLoading}
              className="w-full sm:w-[50%] h-13"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
