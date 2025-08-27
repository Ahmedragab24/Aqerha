"use client";

import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useStoreReviewMutation } from "@/store/services/Profile";
import { Button } from "@/components/ui/button";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { RealEstesUser } from "@/types/Real-estates";
import { Input } from "@/components/ui/input";

interface Props {
  AdvertiserData: RealEstesUser;
}

const RateAdvertiser = ({ AdvertiserData }: Props) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [StoreReview, { isLoading }] = useStoreReviewMutation();

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleMouseEnter = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handlerStoreReview = async () => {
    if (!AdvertiserData?.id) {
      showFailedToast({ title: "لا يمكن إضافة التقييم بدون معرف المعلن" });
      return;
    }

    if (!selectedRating) {
      showFailedToast({ title: "يجب اختيار تقييم" });
      return;
    }

    if (!comment) {
      showFailedToast({ title: "يجب إدخال تقييم" });
      return;
    }

    if (!name) {
      showFailedToast({ title: "يجب إدخال اسمك" });
      return;
    }

    try {
      await StoreReview({
        reviewed_user_id: AdvertiserData.id,
        rating: selectedRating,
        comment,
        name,
      }).unwrap();

      // ✅ إعادة تعيين القيم
      setSelectedRating(0);
      setHoveredRating(0);
      setComment("");
      setName("");

      showSuccessToast({
        title: "تم إضافة التقييم بنجاح",
      });
    } catch (error) {
      console.error(error);
      showFailedToast({
        title: "حدث خطأ أثناء إضافة التقييم",
      });
    }
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-3">
            ما هي التجربة التي تتطلع لها {AdvertiserData?.name} ؟
          </p>

          {/* Interactive Star Rating */}
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = star <= (hoveredRating || selectedRating);
              return (
                <div
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleMouseEnter(star)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400 border-yellow-400 scale-110"
                      : "bg-gray-200 border-gray-300 hover:bg-gray-300"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {star}
                  </span>
                </div>
              );
            })}
          </div>

          {selectedRating > 0 && (
            <p className="text-sm text-green-600 mb-2 font-medium">
              تم اختيار {selectedRating} من 5 نجوم
            </p>
          )}

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ادخل اسمك"
            className="mb-4"
          />

          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="ادخل رسالتك"
            className="mb-4"
          />
        </div>

        <Button
          className="w-full"
          disabled={isLoading || selectedRating === 0}
          onClick={handlerStoreReview}
        >
          {isLoading ? "جاري الارسال..." : "إرسال"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RateAdvertiser;
