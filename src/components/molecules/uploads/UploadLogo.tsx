"use client";
import { Button } from "@/components/ui/button";
import {
  setUserImageFile,
  setUserLogoImage,
} from "@/store/features/Auth/userDataSlice";

import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Props {
  image?: string | File;
}

const LogoUpload = ({ image }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImagePreview(objectURL);

      dispatch(setUserLogoImage(objectURL));
      dispatch(setUserImageFile(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    return () => {
      if (imagePreview?.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const displayImage = imagePreview
    ? imagePreview
    : image
    ? image
    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhY2I1YzEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kLWljb24gbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=";

  return (
    <div className="relative mx-auto w-[130px] h-[130px] p-2 rounded-full border-2 border-primary-dark group">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src={displayImage as string}
          alt="User Avatar"
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-110"
        />
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute bottom-0 right-0"
        onClick={handleClick}
      >
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhY2I1YzEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbWVyYS1pY29uIGx1Y2lkZS1jYW1lcmEiPjxwYXRoIGQ9Ik0xMy45OTcgNGEyIDIgMCAwIDEgMS43NiAxLjA1bC40ODYuOUEyIDIgMCAwIDAgMTguMDAzIDdIMjBhMiAyIDAgMCAxIDIgMnY5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjlhMiAyIDAgMCAxIDItMmgxLjk5N2EyIDIgMCAwIDAgMS43NTktMS4wNDhsLjQ4OS0uOTA0QTIgMiAwIDAgMSAxMC4wMDQgNHoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIi8+PC9zdmc+"
          alt="Camera"
          width={15}
          height={15}
        />
      </Button>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default LogoUpload;
