"use client";

import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SocialType } from "./PromotionServiceDetails";

const ServicesList = [
  {
    id: 1,
    title: "حملة إعلانية مدفوعة",
    description: "ترويج إعلانك العقاري من خلال حملة مدفوعة",
    icon: "/Icons/ic_sharp-language.svg",
  },
  {
    id: 2,
    title: "الإعلان عبر حسابات عقرها",
    description: "نشر إعلانك من خلال حساب عقرها",
    icon: "/Icons/ic_baseline-app-shortcut.svg",
  },
];

const SocialList = [
  {
    label: "انستغرام",
    value: "instagram" as SocialType,
    icon: "/Icons/Frame 1261153660.svg",
  },
  {
    label: "إكس",
    value: "x" as SocialType,
    icon: "/Icons/line-md_twitter-x-alt.svg",
  },
  {
    label: "سناب شات",
    value: "snapchat" as SocialType,
    icon: "/Icons/snapchat.svg",
  },
  {
    label: "تيك توك",
    value: "tiktok" as SocialType,
    icon: "/Icons/logos_tiktok-icon.svg",
  },
];

interface SocialMediaPlatformProps {
  selectedSocial: SocialType;
  setSelectedSocial: (social: SocialType) => void;
  selectedService: number;
  setSelectedService: (service: number) => void;
}

const SelectSocialMediaPlatform = ({
  selectedService,
  selectedSocial,
  setSelectedService,
  setSelectedSocial,
}: SocialMediaPlatformProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("✅ شبكة التواصل المختارة:", selectedSocial);
    console.log("🛠️ الخدمة المختارة:", selectedService);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">الرجاء اختيار الخدمة</h3>
        <div className="flex flex-col gap-6">
          {ServicesList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item.id)}
              className={`flex items-center gap-4 border p-4 rounded-md md:w-1/2 cursor-pointer transition hover:bg-gray-100 ${
                selectedService === item.id
                  ? "border-primary bg-gray-100"
                  : "border-gray-200"
              }`}
            >
              <Image src={item.icon} width={30} height={30} alt={item.title} />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          اختر شبكة التواصل الاجتماعي
        </h3>
        <RadioGroup
          dir="rtl"
          value={selectedSocial}
          onValueChange={(value) => setSelectedSocial(value as SocialType)}
          className="flex flex-col gap-3"
        >
          {SocialList.map((item) => (
            <div key={item.value} className="flex items-center gap-3">
              <RadioGroupItem value={item.value} />
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <Label className="text-sm font-normal">{item.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </form>
  );
};

export default SelectSocialMediaPlatform;
