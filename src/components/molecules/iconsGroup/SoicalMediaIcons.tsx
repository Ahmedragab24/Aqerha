import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-4">
      <a
        href="#"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
