import { RealEstateGuideData } from "@/constants/cards/RealEstate";
import RealEstateGuideCard from "../molecules/cards/RealEstateGuideCard";

const RealEstateGuideSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {RealEstateGuideData.map((item) => (
        <RealEstateGuideCard key={item.id} RealEstateGuideData={item} />
      ))}
    </div>
  );
};

export default RealEstateGuideSection;
