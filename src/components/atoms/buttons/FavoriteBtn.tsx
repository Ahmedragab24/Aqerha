"use client";

import {
  useGetFavoritesQuery,
  useToggleFavoriteMutation,
} from "@/store/services/Favorites";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import type { ErrorType } from "@/types/errors";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { checkAuthStatus, getAuthTokenClient } from "@/lib/auth/auth-client";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";

interface Props {
  RealStateId: number;
  type: "card" | "page";
}

const FavoriteBtn = ({ RealStateId, type }: Props) => {
  const { data } = useGetFavoritesQuery();
  const FavoritesList = useMemo(() => data?.data || [], [data?.data]);
  const token = getAuthTokenClient();

  const [toggleFavorite, { isLoading }] = useToggleFavoriteMutation();
  const [IsFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const found = FavoritesList.some((item) => item.id === RealStateId);
    setIsFavorite(found);
  }, [FavoritesList, RealStateId]);

  const handleFavorite = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!checkAuthStatus) {
      showFailedToast({
        title: "يجب تسجيل الدخول أولاً",
      });
      return;
    }
    try {
      const res = await toggleFavorite(RealStateId).unwrap();
      setIsFavorite((prev) => !prev);
      showSuccessToast({
        title: `${res?.message || "تم تحديث الحالة بنجاح"}`,
      });
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({
        title: `${err?.data?.message || "حدث خطأ أثناء تحديث المفضلة"}`,
      });
    }
  };

  return (
    <>
      {type === "card" ? (
        token ? (
          <Button
            className="bg-gray-100/60 rounded-full w-6 h-6 md:w-8 md:h-8 !p-2 md:!p-4 border-2 border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={handleFavorite}
            disabled={isLoading}
          >
            <Heart
              className={`transition-colors w-3 h-3 md:!w-5 md:!h-5 ${
                IsFavorite
                  ? "fill-primary text-primary"
                  : "fill-none text-primary"
              }`}
            />
          </Button>
        ) : (
          <RegisterDialog>
            <Button className="bg-gray-100/60 rounded-full !p-2 border-2 border-gray-200 hover:bg-gray-50 transition-colors">
              <Heart className="transition-colors w-3 h-3 md:!w-5 md:!h-5 fill-none text-gray-600" />
            </Button>
          </RegisterDialog>
        )
      ) : token ? (
        <Button
          className="bg-[#FFF0F0] hover:bg-[#FFF0F0]/80 rounded-xl"
          onClick={handleFavorite}
          disabled={isLoading}
        >
          <Heart
            className={`transition-colors !w-5 !h-5 ${
              IsFavorite
                ? "!fill-red-600 !text-red-600"
                : "fill-none text-red-600"
            }`}
          />
        </Button>
      ) : (
        <RegisterDialog>
          <Button className="bg-[#FFF0F0] hover:bg-[#FFF0F0]/80 rounded-xl">
            <Heart className="transition-colors !w-5 !h-5 fill-none text-red-600" />
          </Button>
        </RegisterDialog>
      )}
    </>
  );
};

export default FavoriteBtn;
