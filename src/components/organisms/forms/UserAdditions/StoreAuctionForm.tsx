"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import {
  useStoreAuctionAssetsMutation,
  useStoreAuctionMutation,
} from "@/store/services/Auctions";
import {
  AuctionFormSchema,
  type AuctionFormType,
} from "@/schemas/AuctionFormSchema";
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
import {
  StoreAuctionCategoryList,
  StoreAuctionTypeList,
} from "@/constants/Auctions";
import LocationFields from "@/components/molecules/FieldsGroup/LocationFields";
import CustomFormItem from "@/components/molecules/formItems/CustomFormItem";
import StoreAuctionAssetsDialog from "../../Popups/StoreAuctionAssetsDialog";

const StoreAuctionForm = ({
  changeOpen,
}: {
  changeOpen: (open: boolean) => void;
}) => {
  const [StoreAuction, { isLoading: isStoreAuctionLoading }] =
    useStoreAuctionMutation();
  const [StoreAssets, { isLoading: isStoreAssetsLoading }] =
    useStoreAuctionAssetsMutation();
  const [auctionId, setAuctionId] = useState<string>("");
  const [AssestDialogOpen, setAssestDialogOpen] = useState(false);
  const [AssetsData, setAssetsData] = useState<FormData[]>([]);

  console.log("AssetsDataAssetsData", AssetsData);

  const form = useForm<AuctionFormType>({
    resolver: zodResolver(AuctionFormSchema),
    defaultValues: {
      name: "",
      category: "",
      type: "",
      deposit: "",
      start_date: "",
      end_date: "",
      location: {
        latitude: "",
        longitude: "",
        city: "",
      },
      image: undefined,
    },
  });

  const onSubmit = useCallback(
    async (values: AuctionFormType) => {
      if (AssetsData.length === 0) {
        showFailedToast({ title: "يجب إضافة أصل واحد على الأقل" });
        return;
      }

      const Auction = new FormData();
      Auction.append("name", values.name);
      Auction.append("category", values.category);
      Auction.append("type", values.type);
      Auction.append("assets_number", AssetsData.length.toString());
      Auction.append("deposit", values.deposit);
      Auction.append("start_date", values.start_date);
      Auction.append("end_date", values.end_date);
      Auction.append("city", values.location.city);
      Auction.append("location", values.location.city);
      Auction.append("longitude", values.location.longitude);
      Auction.append("latitude", values.location.latitude);

      if (values.image) {
        Auction.append("image", values.image);
      }

      try {
        const res = await StoreAuction(Auction).unwrap();

        if (res?.status_code === 201) {
          const auctionId = String(res.data?.id);
          setAuctionId(auctionId);

          const assetPromises = AssetsData.map(async (asset, index) => {
            try {
              asset.append("auction_id", auctionId);
              await StoreAssets(asset).unwrap();
              console.log(`[v0] Asset ${index + 1} submitted successfully`);
            } catch (error) {
              console.error(`[v0] Error submitting asset ${index + 1}:`, error);
              throw new Error(`فشل في إضافة الأصل رقم ${index + 1}`);
            }
          });

          await Promise.all(assetPromises);

          form.reset();
          setAssetsData([]);
          showSuccessToast({ title: "تم إضافة المزاد بنجاح" });
          changeOpen(false);
        }
      } catch (error) {
        console.error("[v0] Form submission error:", error);
        showFailedToast({
          title:
            error instanceof Error
              ? error.message
              : "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
        });
      }
    },
    [AssetsData, StoreAssets, StoreAuction, form, changeOpen]
  );

  const handleLocationSelect = useCallback(
    (location: LocationData) => {
      form.setValue("location.latitude", location.lat);
      form.setValue("location.longitude", location.lng);
      form.setValue("location.city", location.city);
    },
    [form]
  );

  const handleRemoveAsset = useCallback((index: number) => {
    setAssetsData((prev) => prev.filter((_, i) => i !== index));
    showSuccessToast({ title: "تم حذف الأصل بنجاح" });
  }, []);

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
          name="name"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="اسم المزاد"
              placeholder="أدخل اسم المزاد"
              type="text"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <CustomSelectField
              field={field}
              label="نوع المزاد"
              placeholder="أدخل نوع المزاد"
              options={StoreAuctionTypeList}
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
          name="start_date"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="تاريخ بدأ المزاد"
              placeholder="أدخل تاريخ بدأ المزاد"
              type="date"
              className="!h-11 border-border"
            />
          )}
        />
        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <CustomFormItem
              field={field}
              label="تاريخ انتهاء المزاد"
              placeholder="أدخل تاريخ انتهاء المزاد"
              type="date"
              className="!h-11 border-border"
            />
          )}
        />

        {/* Location And Description */}
        <LocationFields
          field={form.control}
          handleLocationSelect={handleLocationSelect}
        />

        <div className="flex items-center justify-between gap-4">
          <h1>الاصول ({AssetsData.length})</h1>
          <Button
            variant={"link"}
            onClick={(e) => {
              if (
                form.getValues("name") === "" ||
                form.getValues("category") === "" ||
                form.getValues("type") === "" ||
                form.getValues("deposit") === "" ||
                form.getValues("start_date") === "" ||
                form.getValues("end_date") === ""
              ) {
                showFailedToast({ title: "عليك إضافة بيانات المزاد أولاً" });
                return;
              }
              e.preventDefault();
              setAssestDialogOpen(true);
            }}
          >
            إضافة أصل
            <Plus />
          </Button>
        </div>

        {AssetsData.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium">الأصول المضافة:</h3>
            {AssetsData.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded"
              >
                <span>أصل رقم {index + 1}</span>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveAsset(index)}
                >
                  حذف
                </Button>
              </div>
            ))}
          </div>
        )}

        <Button
          type="submit"
          className={`w-full text-lg !h-12`}
          disabled={isStoreAuctionLoading || isStoreAssetsLoading}
        >
          {isStoreAuctionLoading || isStoreAssetsLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري إضافة المزاد...
            </>
          ) : (
            "إضافة المزاد"
          )}
        </Button>
      </form>

      {AssestDialogOpen && (
        <StoreAuctionAssetsDialog
          open={AssestDialogOpen}
          changeOpen={setAssestDialogOpen}
          setAssetsData={setAssetsData}
          auctionId={auctionId}
        />
      )}
    </Form>
  );
};

export default StoreAuctionForm;
