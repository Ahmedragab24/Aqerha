import { AssetsType } from "@/types/Actions";
import Image from "next/image";
import React from "react";

interface AssetFeaturesProps {
  AssetsDetails: AssetsType | undefined;
}

const AssetFeatures = ({ AssetsDetails }: AssetFeaturesProps) => {
  return (
    <div className="space-y-4 border border-gray-300 rounded-md p-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/Icons/Area.svg" alt="area" width={20} height={20} />
          <span className="text-[#7A7474] font-normal">مساحة العقار</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.area && AssetsDetails?.area
              ? AssetsDetails?.area + "م²"
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image
            src="/Icons/double-bed 1.svg"
            alt="bed"
            width={20}
            height={20}
          />
          <span className="text-[#7A7474] font-normal">عدد الغرف</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.rooms && AssetsDetails?.rooms
              ? AssetsDetails?.rooms
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/Icons/bath-tub 1.svg" alt="bed" width={20} height={20} />
          <span className="text-[#7A7474] font-normal">دورات المياه</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.bathrooms && AssetsDetails?.bathrooms
              ? AssetsDetails?.bathrooms
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/Icons/stairs 1.svg" alt="bed" width={20} height={20} />
          <span className="text-[#7A7474] font-normal">عدد الطوابق</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.floors && AssetsDetails?.floors
              ? AssetsDetails?.floors
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NTgwODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYWZmaWMtY29uZS1pY29uIGx1Y2lkZS10cmFmZmljLWNvbmUiPjxwYXRoIGQ9Ik0xNi4wNSAxMC45NjZhNSAyLjUgMCAwIDEtOC4xIDAiLz48cGF0aCBkPSJtMTYuOTIzIDE0LjA0OSA0LjQ4IDIuMDRhMSAxIDAgMCAxIC4wMDEgMS44MzFsLTguNTc0IDMuOWEyIDIgMCAwIDEtMS42NiAwbC04LjU3NC0zLjkxYTEgMSAwIDAgMSAwLTEuODNsNC40ODQtMi4wNCIvPjxwYXRoIGQ9Ik0xNi45NDkgMTQuMTRhNSAyLjUgMCAxIDEtOS45IDBMMTAuMDYzIDMuNWEyIDIgMCAwIDEgMy44NzQgMHoiLz48cGF0aCBkPSJNOS4xOTQgNi41N2E1IDIuNSAwIDAgMCA1LjYxIDAiLz48L3N2Zz4="
            alt="bed"
            width={20}
            height={20}
          />
          <span className="text-[#7A7474] font-normal">الشوارع المحيطة</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.streets && AssetsDetails?.streets
              ? AssetsDetails?.streets
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NTgwODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRyb3BsZXRzLWljb24gbHVjaWRlLWRyb3BsZXRzIj48cGF0aCBkPSJNNyAxNi4zYzIuMiAwIDQtMS44MyA0LTQuMDUgMC0xLjE2LS41Ny0yLjI2LTEuNzEtMy4xOVM3LjI5IDYuNzUgNyA1LjNjLS4yOSAxLjQ1LTEuMTQgMi44NC0yLjI5IDMuNzZTMyAxMS4xIDMgMTIuMjVjMCAyLjIyIDEuOCA0LjA1IDQgNC4wNXoiLz48cGF0aCBkPSJNMTIuNTYgNi42QTEwLjk3IDEwLjk3IDAgMCAwIDE0IDMuMDJjLjUgMi41IDIgNC45IDQgNi41czMgMy41IDMgNS41YTYuOTggNi45OCAwIDAgMS0xMS45MSA0Ljk3Ii8+PC9zdmc+"
            alt="bed"
            width={20}
            height={20}
          />
          <span className="text-[#7A7474] font-normal">مياه</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.has_water && AssetsDetails?.has_water
              ? "متوفر"
              : "غير متوفر"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NTgwODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhYmxlLWljb24gbHVjaWRlLWNhYmxlIj48cGF0aCBkPSJNMTcgMTlhMSAxIDAgMCAxLTEtMXYtMmEyIDIgMCAwIDEgMi0yaDJhMiAyIDAgMCAxIDIgMnYyYTEgMSAwIDAgMS0xIDF6Ii8+PHBhdGggZD0iTTE3IDIxdi0yIi8+PHBhdGggZD0iTTE5IDE0VjYuNWExIDEgMCAwIDAtNyAwdjExYTEgMSAwIDAgMS03IDBWMTAiLz48cGF0aCBkPSJNMjEgMjF2LTIiLz48cGF0aCBkPSJNMyA1VjMiLz48cGF0aCBkPSJNNCAxMGEyIDIgMCAwIDEtMi0yVjZhMSAxIDAgMCAxIDEtMWg0YTEgMSAwIDAgMSAxIDF2MmEyIDIgMCAwIDEtMiAyeiIvPjxwYXRoIGQ9Ik03IDVWMyIvPjwvc3ZnPg=="
            alt="bed"
            width={20}
            height={20}
          />
          <span className="text-[#7A7474] font-normal">كهرباء</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">
            {AssetsDetails?.has_electricity && AssetsDetails?.has_electricity
              ? "متوفر"
              : "غير متوفر"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetFeatures;
