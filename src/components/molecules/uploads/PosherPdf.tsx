"use client";

import React from "react";
import Image from "next/image";

interface PosherDialogProps {
  brochureUrl: string;
}

const PosherPdf = ({ brochureUrl }: PosherDialogProps) => {
  const handleDownload = () => {
    window.open(brochureUrl, "_blank");
  };

  return (
    <div
      className="w-fit flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-2 md:p-4 cursor-pointer shadow-sm"
      onClick={handleDownload}
    >
      <Image
        src="/Icons/proicons_pdf-2.svg"
        alt="pdf"
        width={30}
        height={30}
        className="w-4 h-4 md:w-7 md:h-7"
      />
      <h2 className="text-xs md:text-xl md:font-semibold">البروشور</h2>
    </div>
  );
};

export default PosherPdf;
