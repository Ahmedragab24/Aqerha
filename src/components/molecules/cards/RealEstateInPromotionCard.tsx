import Image from "next/image";
import GradientOverlay from "../../atoms/sliders/GradientOverlay";
import Riyal from "../../atoms/Icons/Riyal";
import FavoriteBtn from "../../atoms/buttons/FavoriteBtn";
import ShareBtn from "../../atoms/buttons/ShareBtn";
import { RealEstesType } from "@/types/Real-estates";
import { formatName, formatPurpose } from "@/lib/utils";

interface Props {
  RealEstate: RealEstesType;
  selectedValue?: RealEstesType | null;
  setSelectedValue?: (value: RealEstesType) => void;
}

const RealEstateInPromotionCard = ({
  RealEstate,
  selectedValue,
  setSelectedValue,
}: Props) => {
  const { id, main_image, main_price, real_estate_type, purpose } = RealEstate;

  const Name = formatName(real_estate_type);
  const Purpose = formatPurpose(purpose);

  return (
    <div
      onClick={() => setSelectedValue?.(RealEstate)}
      className={`bg-secondary rounded-2xl shadow-md p-2 cursor-pointer group duration-300 hover:shadow-lg ${
        selectedValue?.id === id ? "border-2 border-primary" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative w-auto h-40 overflow-hidden rounded-xl">
        <Image
          src={main_image || "/placeholder.svg"}
          alt={real_estate_type}
          fill
          loading="lazy"
          className="w-full h-full object-cover rounded-xl duration-300 group-hover:scale-105"
        />
        <GradientOverlay position="top" />

        {/* Overlay Icons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <FavoriteBtn type="card" RealStateId={id} />
          <ShareBtn />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title & Price */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {Name} {Purpose}
          </h3>

          <div className="flex items-center md:text:lg font-semibold text-primary">
            <h4>{main_price}</h4>
            <Riyal className="!w-5 !h-5" />
            <h4>/الشهر</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateInPromotionCard;
