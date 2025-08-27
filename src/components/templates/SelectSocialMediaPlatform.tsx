"use client";

import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SocialType } from "./PromotionServiceDetails";

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
}

const SelectSocialMediaPlatform = ({
  selectedSocial,
  setSelectedSocial,
}: SocialMediaPlatformProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
