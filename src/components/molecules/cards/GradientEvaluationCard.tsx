import Riyal from "../../atoms/Icons/Riyal";
import { Card, CardContent } from "../../ui/card";
import Image from "next/image";

interface Props {
  title: string;
  price: string;
  image: string;
  gradientColor:
    | "Gradient_Linear_Red"
    | "Gradient_Linear_Yellow"
    | "Gradient_Linear_Purple";
}

const GradientEvaluationCard = ({
  title,
  price,
  image,
  gradientColor,
}: Props) => {
  return (
    <Card className={`${gradientColor} border-none`}>
      <CardContent>
        <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-center md:px-20 py-6">
          <div className="flex flex-col justify-between gap-10 md:max-w-xl">
            <h2 className="text-[#234F68] text-lg md:text-2xl font-bold leading-relaxed">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-lg md:text-2xl text-primary font-bold">
              <p>{price}</p>
              <Riyal className="!w-8 !h-8" />
            </div>
          </div>
          <div className="relative w-[267px] md:w-[367px] h-[200px] md:h-[300px] flex items-center justify-center">
            <Image
              src={image}
              alt="Engineering Inspection"
              className="w-24 h-24"
              fill
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradientEvaluationCard;
