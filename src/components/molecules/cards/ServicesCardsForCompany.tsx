import { Card } from "../../ui/card";
import Image from "next/image";

interface Props {
  Services: string[];
}

const serviceImages: { keyword: string[]; image: string }[] = [
  {
    keyword: ["صيانة", "الصيانة"],
    image: "/Icons/الصيانة والترميم Maintenance.svg",
  },
  {
    keyword: ["ترميم", "الترميم", "تنفيذ"],
    image: "/Icons/الصيانة والترميم Maintenance.svg",
  },
  {
    keyword: ["إدارة", "الإدارة", "الهندسية"],
    image: "/Icons/ic_sharp-manage-history.svg",
  },
  {
    keyword: ["فريق", "الفريق"],
    image: "/Icons/ic_sharp-manage-history.svg",
  },
  {
    keyword: ["بناء"],
    image: "/Icons/ConstructionServies.svg",
  },
  {
    keyword: ["تشطيب", "الانشاءات"],
    image: "/Icons/bx_brush.svg",
  },
];

const getServiceImage = (service: string): string => {
  const match = serviceImages.find(({ keyword }) =>
    keyword.some((k) => service.includes(k))
  );
  return match ? match.image : "/Icons/default.svg";
};

const ServicesCardsForCompany = ({ Services }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Services.map((service) => (
        <Card
          key={service}
          className="bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={getServiceImage(service)}
              alt={service}
              width={70}
              height={70}
            />
            <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              {service}
            </h2>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ServicesCardsForCompany;
