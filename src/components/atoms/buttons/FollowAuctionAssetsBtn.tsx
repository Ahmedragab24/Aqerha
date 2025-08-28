"use client";

import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { Button } from "@/components/ui/button";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { useToggleFollowAssetMutation } from "@/store/services/Auctions";
import { ErrorType } from "@/types/errors";
import { BellRing } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
  AssetsId: number;
}

const FollowAuctionAssetsBtn = ({ AssetsId }: Props) => {
  const [ToggleAssets, { isLoading }] = useToggleFollowAssetMutation();
  const [IsFollowed, setIsFollowed] = useState<boolean>(false);
  const token = getAuthTokenClient();

  useEffect(() => {
    const followedAssets = JSON.parse(
      localStorage.getItem("followedAssets") || "[]"
    );
    if (followedAssets.includes(AssetsId)) {
      setIsFollowed(true);
    }
  }, [AssetsId]);

  // زر المتابعة
  const handlerFollow = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const res = await ToggleAssets({ asset_id: AssetsId }).unwrap();

      let followedAssets = JSON.parse(
        localStorage.getItem("followedAssets") || "[]"
      );

      if (IsFollowed) {
        followedAssets = followedAssets.filter((id: number) => id !== AssetsId);
        localStorage.setItem("followedAssets", JSON.stringify(followedAssets));
        setIsFollowed(false);
        showSuccessToast({
          title: `${res?.message || "تم إلغاء متابعة الأصل"}`,
        });
      } else {
        followedAssets.push(AssetsId);
        localStorage.setItem("followedAssets", JSON.stringify(followedAssets));
        setIsFollowed(true);
        showSuccessToast({
          title: `${res?.message || "تم متابعة الأصل بنجاح"}`,
        });
      }
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({
        title: `${err?.data?.message || "حدث خطأ أثناء العملية"}`,
      });
    }
  };

  return (
    <>
      {token ? (
        <Button
          onClick={handlerFollow}
          disabled={isLoading}
          variant={IsFollowed ? "default" : "secondary"}
          className={` ${isLoading ? "cursor-not-allowed" : ""} ${
            IsFollowed ? "" : ""
          }`}
        >
          <BellRing />
          {IsFollowed ? "إلغاء المتابعة" : "متابعة"}
        </Button>
      ) : (
        <RegisterDialog>
          <Button
            variant={IsFollowed ? "default" : "secondary"}
            className={` ${isLoading ? "cursor-not-allowed" : ""} ${
              IsFollowed ? "" : ""
            }`}
          >
            <BellRing />
            متابعة
          </Button>
        </RegisterDialog>
      )}
    </>
  );
};

export default FollowAuctionAssetsBtn;
