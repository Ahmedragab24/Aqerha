"use client";

import { useGetSocialLinksQuery } from "@/store/services/CompanyInfo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#5f6977"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path
      d="M12.75 2c.57 0 1.14 0 1.7.02.16 1.1.63 2.13 
    1.34 2.97.78.92 1.88 1.52 3.05 1.66v3.23c-1.14-.04-2.27-.33-3.28-.85v7.54c0 
    2.77-2.25 5.02-5.02 5.02S5.52 19.34 5.52 
    16.57c0-2.66 2.05-4.84 4.66-5 .1 0 .2-.01.31-.01.17 
    0 .34.01.5.03v3.27a1.69 1.69 0 0 0-.5-.08c-1.02.07-1.82.92-1.82 
    1.95 0 1.08.88 1.96 1.96 1.96 1.03 0 1.88-.8 
    1.95-1.82V2z"
    />
  </svg>
);

const SocialMediaIcons = () => {
  const { data } = useGetSocialLinksQuery();
  const socialLinks = data?.data?.items || [];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {link.platform === "facebook" && <Facebook className="w-5 h-5" />}
          {link.platform === "twitter" && <Twitter className="w-5 h-5" />}
          {link.platform === "instagram" && <Instagram className="w-5 h-5" />}
          {link.platform === "linkedin" && <Linkedin className="w-5 h-5" />}
          {link.platform === "tiktok" && <TikTokIcon />}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
