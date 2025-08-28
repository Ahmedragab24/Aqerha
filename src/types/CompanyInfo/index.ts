export interface ContactUsType {
  name: string;
  phone: string;
  message: string;
}

export interface SocialLinkType {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "tiktok";
  url: string;
}
