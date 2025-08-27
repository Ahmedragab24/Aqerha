"use client";

import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ShareButton = () => {
  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "شاهد هذا العقار:",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showSuccessToast({
          title: "تم المشاركة بنجاح ✅",
        });
      } catch (err) {
        console.error("فشل في المشاركة:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showSuccessToast({
          title: "تم نسخ الرابط إلى الحافظة ✅",
        });
      } catch (err) {
        console.error("فشل في النسخ:", err);
      }
    }
  };

  return (
    <Button
      onClick={handleShare}
      className="bg-[#EDF0F8] hover:bg-[#EDF0F8]/80 rounded-xl"
    >
      <Image src="/Icons/Share.svg" alt="share" width={20} height={20} />
    </Button>
  );
};

export default ShareButton;
