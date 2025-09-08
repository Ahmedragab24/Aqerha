import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadAppICons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full mx-auto">
      <Link
        href="https://apps.apple.com/eg/app/%D8%B9%D9%82%D8%B1%D9%87%D8%A7-aqrha/id6743926325?l=ar"
        className="flex items-center justify-between gap-4 p-2 bg-black rounded-xl transition-all dark:bg-secondary hover:opacity-80"
      >
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500 text-[10px] md:text-xs">Get it on</p>
          <h3 className="text-white text-[10px] md:text-xs">App Store</h3>
        </div>

        <Image
          src="/Logo/ic_round-apple.png"
          alt="Download on the App Store"
          width={35}
          height={35}
        />
      </Link>

      <Link
        href="https://play.google.com/store/apps/details?id=com.aqerha.computing"
        className="flex items-center justify-between gap-4 p-2 transition-all bg-black rounded-xl dark:bg-secondary hover:opacity-80"
      >
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500 text-[10px] md:text-xs">Get it on</p>
          <h3 className="text-white text-[10px] md:text-xs">Google Play</h3>
        </div>

        <Image
          src="/Logo/google_play.png"
          alt="Get it on Google Play"
          width={35}
          height={35}
        />
      </Link>
    </div>
  );
};

export default DownloadAppICons;
