"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/molecules/uploads/ImageUpload";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LocationData } from "../AddAdOrRequestForm";
import CustomSelectField from "@/components/molecules/selects/CustomSelectField";
import LocationFields from "@/components/molecules/FieldsGroup/LocationFields";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import {
  ProjectFormSchema,
  ProjectFormType,
} from "@/schemas/ProjectFormSchema";
import { useStoreProjectMutation } from "@/store/services/Projects";
import {
  useStoreImagesRealEstateMutation,
  useStoreRealEstateMutation,
} from "@/store/services/RealEstate";
import { StateProjectList } from "@/constants/cards/Projects";
import StoreRealEstatesDialog from "../../Popups/StoreRealEstatesDialog";
import { StoreRealEstesType } from "@/types/Real-estates";

const StoreProjectForm = ({
  changeOpen,
}: {
  changeOpen: (open: boolean) => void;
}) => {
  const [StoreProject, { isLoading: isStoreProjectLoading }] =
    useStoreProjectMutation();

  const [StoreImage, { isLoading: isStoreImageLoading }] =
    useStoreImagesRealEstateMutation();
  const [StoreRealEstate, { isLoading: isStoreRealEstateLoading }] =
    useStoreRealEstateMutation();

  const [RealEstatesDialogOpen, setRealEstatesDialogOpen] = useState(false);

  const [ImagesData, setImagesData] = useState<FormData>();
  const [RealEstatesData, setRealEstatesData] = useState<StoreRealEstesType[]>(
    []
  );

  const AllLoading =
    isStoreProjectLoading || isStoreRealEstateLoading || isStoreImageLoading;

  const form = useForm<ProjectFormType>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: "",
      developer_name: "",
      max_price: "",
      min_price: "",
      payment_plan: "",
      project_status: "",
      description: "",
      location: {
        latitude: "",
        longitude: "",
        city: "",
      },
      cover_image: undefined,
      project_diagram: undefined,
      proshor: undefined,
    },
  });

  const onSubmit = useCallback(
    async (values: ProjectFormType) => {
      if (RealEstatesData.length === 0) {
        showFailedToast({ title: "يجب إضافة وحدة واحدة على الأقل" });
        return;
      }

      const Project = new FormData();
      Project.append("name", values.name);
      Project.append("developer_name", values.developer_name);
      Project.append("max_price", values.max_price);
      Project.append("min_price", values.min_price);
      Project.append("payment_plan", values.payment_plan);
      Project.append("project_status", values.project_status);
      Project.append("description", values.description);
      Project.append("city", values.location.city);
      Project.append("location", values.location.city);
      Project.append("longitudes", values.location.longitude);
      Project.append("latitudes", values.location.latitude);
      Project.append("real_estates_number", RealEstatesData.length.toString());

      const validTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/webp",
        "image/bmp",
      ];

      if (values.cover_image instanceof File) {
        if (!validTypes.includes(values.cover_image.type)) {
          showFailedToast({
            title: "صورة الغلاف يجب أن تكون من نوع صورة صالح",
          });
          return;
        }
        Project.append("cover_image", values.cover_image);
      }

      if (values.project_diagram instanceof File) {
        if (!validTypes.includes(values.project_diagram.type)) {
          showFailedToast({
            title: "مخطط المشروع يجب أن يكون من نوع صورة صالح",
          });
          return;
        }
        Project.append("project_diagram", values.project_diagram);
      }

      if (values.proshor instanceof File) {
        Project.append("proshor", values.proshor);
      }

      try {
        // 1️⃣ أرسل المشروع
        const res = await StoreProject(Project).unwrap();

        if (res?.status_code === 201) {
          const projectId = res.data?.project?.id;

          // 2️⃣ أرسل صور العقارات
          const ImagesRes = await StoreImage(
            ImagesData || new FormData()
          ).unwrap();

          console.log("ImagesRes", ImagesRes);

          if (ImagesRes?.status_code === 200) {
            // 3️⃣ أرسل بيانات الوحدات بعد ما نحط project_id + code
            const RealEstatesPromises = RealEstatesData.map(
              async (realEstate, index) => {
                try {
                  const newRealEstate = {
                    ...realEstate,
                    project_id: projectId,
                    code: ImagesRes.data?.code,
                  };
                  const res = await StoreRealEstate(newRealEstate).unwrap();
                  console.log("RealEstateStore", res);
                } catch (error) {
                  console.error(error);
                  throw new Error(`فشل في إضافة الوحدة رقم ${index + 1}`);
                }
              }
            );

            await Promise.all(RealEstatesPromises);
          }
        }

        form.reset();
        setRealEstatesData([]);
        showSuccessToast({ title: "تم إضافة المشروع وجميع الوحدات بنجاح ✅" });
        changeOpen(false);
      } catch (error) {
        showFailedToast({
          title:
            error instanceof Error
              ? error.message
              : "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
        });
      }
    },
    [
      RealEstatesData,
      StoreProject,
      StoreRealEstate,
      form,
      ImagesData,
      StoreImage,
      changeOpen,
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

  const handleRemoveRealEstate = useCallback((index: number) => {
    setRealEstatesData((prev) => prev.filter((_, i) => i !== index));
    showSuccessToast({ title: "تم حذف الوحدة بنجاح" });
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-md space-y-4"
      >
        {/* Cover Image */}
        <FormField
          control={form.control}
          name="cover_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>صورة غلاف المشروع</FormLabel>
              <ImageUpload
                value={field.value as File}
                onChange={field.onChange}
                className="w-full"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Diagram */}
        <FormField
          control={form.control}
          name="project_diagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>صورة مخطط المشروع</FormLabel>
              <ImageUpload
                value={field.value as File}
                onChange={field.onChange}
                className="w-full"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Text Fields */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="اسم المشروع"
              placeholder="أدخل اسم المشروع"
              type="text"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="developer_name"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="اسم مطور المشروع"
              placeholder="أدخل اسم مطور المشروع"
              type="text"
              className="!h-11 border-border"
            />
          )}
        />

        {/* Prices */}
        <div>
          <FormLabel>أسعار الوحدات</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="min_price"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  placeholder="تبدأ من"
                  type="number"
                  className="!h-11 border-border"
                />
              )}
            />
            <FormField
              control={form.control}
              name="max_price"
              render={({ field }) => (
                <CustomFormItem
                  field={field}
                  placeholder="إلي"
                  type="number"
                  className="!h-11 border-border"
                />
              )}
            />
          </div>
        </div>

        {/* Payment plan & status */}
        <FormField
          control={form.control}
          name="payment_plan"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="خطط الدفع المتاحة"
              placeholder="أدخل خطط الدفع"
              type="text"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="project_status"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="حالة المشروع"
              placeholder="أختر حالة المشروع"
              options={StateProjectList}
              className="!h-11 border-border"
            />
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="الوصف"
              placeholder="أدخل الوصف"
              type="text"
              typeInput="textarea"
              className="!h-28 border-border"
            />
          )}
        />

        {/* Proshor */}
        <FormField
          control={form.control}
          name="proshor"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="ملف بروشور المشروع"
              placeholder="أدخل ملف بروشور المشروع"
              type="file"
              className="!h-11 border-border"
            />
          )}
        />

        {/* Location */}
        <LocationFields
          field={form.control}
          handleLocationSelect={handleLocationSelect}
        />

        {/* Units */}
        <div className="flex items-center justify-between gap-4">
          <h1>الوحدات ({RealEstatesData.length})</h1>
          <Button
            variant="link"
            onClick={(e) => {
              e.preventDefault();
              setRealEstatesDialogOpen(true);
            }}
          >
            إضافة وحدة <Plus />
          </Button>
        </div>

        {RealEstatesData.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">الوحدات المضافة:</h3>
            {RealEstatesData.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded"
              >
                <span>وحدة رقم {index + 1}</span>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveRealEstate(index)}
                >
                  حذف
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="w-full text-lg !h-12"
          disabled={AllLoading}
        >
          {AllLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري إضافة المشروع...
            </>
          ) : (
            "إضافة المشروع"
          )}
        </Button>
      </form>

      {/* Dialog */}
      {RealEstatesDialogOpen && (
        <StoreRealEstatesDialog
          open={RealEstatesDialogOpen}
          changeOpen={setRealEstatesDialogOpen}
          setRealEstatesData={setRealEstatesData}
          isStoreRealEstatesLoading={isStoreRealEstateLoading}
          setImagesData={setImagesData}
          RealEstatesData={RealEstatesData}
        />
      )}
    </Form>
  );
};

export default StoreProjectForm;
