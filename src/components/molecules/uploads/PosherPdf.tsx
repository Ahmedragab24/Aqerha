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
      className="flex items-center gap-2 bg-[#ECFDF3] rounded-lg p-4 cursor-pointer shadow-sm"
      onClick={handleDownload}
    >
      <Image src="/Icons/proicons_pdf-2.svg" alt="pdf" width={30} height={30} />
      <h2 className="text-sm md:text-xl font-semibold">البروشور</h2>
    </div>
  );
};

export default PosherPdf;
