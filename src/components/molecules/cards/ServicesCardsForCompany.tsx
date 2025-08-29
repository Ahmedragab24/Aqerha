import { Card } from "../../ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import CallUserBtns from "../btnsGroup/CallUserBtns";
import { ProfileType } from "@/types/Real-estates";
interface Props {
  Services: string[];
  userData: ProfileType | undefined;
}

const serviceImages: { keyword: string[]; image: string }[] = [
  {
    keyword: ["صيانة", "الصيانة", "الاستشارات"],
    image: "/Icons/الصيانة والترميم Maintenance.svg",
  },
  {
    keyword: ["ترميم", "الترميم", "تنفيذ"],
    image: "/Icons/الصيانة والترميم Maintenance.svg",
  },
  {
    keyword: ["إدارة", "الإدارة", "الهندسية", "تخطيط", "تصميم"],
    image: "/Icons/ic_sharp-manage-history.svg",
  },
  {
    keyword: ["فريق", "الفريق", "ماكيت"],
    image: "/Icons/ic_sharp-manage-history.svg",
  },
  {
    keyword: ["بناء", "خدمات"],
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
  return match ? match.image : "/Icons/bx_brush.svg";
};

const ServicesCardsForCompany = ({ Services, userData }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Dialog>
        {Services.map((service) => (
          <DialogTrigger asChild key={service}>
            <Card className="bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-2 md:px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={getServiceImage(service)}
                  alt={service}
                  width={70}
                  height={70}
                  className="w-10 h-10 md:w-16 md:h-16"
                />
                <h2 className="text-xs md:text-sm lg:text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
                  {service}
                </h2>
              </div>
            </Card>
          </DialogTrigger>
        ))}
        <DialogContent className="flex justify-center">
          <DialogHeader>
            <DialogTitle className="text-center">تواصل مع الشركة</DialogTitle>
            <DialogDescription></DialogDescription>
            <CallUserBtns isText userData={userData} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesCardsForCompany;
