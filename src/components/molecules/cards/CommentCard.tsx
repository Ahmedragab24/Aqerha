import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ReviewType } from "@/types/Real-estates";

interface Props {
  review: ReviewType;
}

const CommentCard = ({ review }: Props) => {
  return (
    <Card className="bg-transparent">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="space-y-1">
              <h4 className="text-md font-bold">{review?.reviewer_name}</h4>
              <span className="text-gray-400">
                {review?.created_at &&
                  new Date(review.created_at).toISOString().split("T")[0]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={
                  i < (review?.rating ?? 0)
                    ? "text-chart-1 fill-chart-1 text-lg"
                    : "text-gray-300 text-lg"
                }
              />
            ))}
          </div>
        </div>
        <div>
          <p className="md:text-lg text-sm text-gray-500">{review?.comment}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
