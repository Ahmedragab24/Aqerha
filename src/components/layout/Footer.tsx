import Image from "next/image";
import EmailInput from "../atoms/inputs/EmailInput";
import SocialMediaIcons from "../molecules/iconsGroup/SoicalMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="flex flex-col md:flex-row justify-between py-8 mb-4 m-auto !max-w-7xl">
        {/* Right section - Logo and Navigation */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="">
            <Image
              src="/Logo/Logo on Transparent BG.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-right"
            >
              عن الشركة
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-right"
            >
              العقارات
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-right"
            >
              الخدمات
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-right"
            >
              الأخبار
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-gray-900 transition-colors text-right"
            >
              اتصل بنا
            </a>
          </nav>
        </div>

        {/* Left section - Newsletter */}
        <div className="flex flex-col items-center gap-4">
          {/* Icon */}
          <Image src="/Icons/mail2.svg" alt="mail" width={45} height={45} />

          {/* Heading */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3" dir="rtl">
            ابق على اطلاع
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-sm leading-relaxed" dir="rtl">
            اشترك في نشرتنا الإخبارية لتلقي آخبارنا الأسبوعية
          </p>

          {/* Email input */}
          <EmailInput />
        </div>
      </div>

      {/* Bottom section - Social links and copyright */}
      <div className="py-6 bg-gray-200">
        <div className="Container flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            جميع الحقوق محفوظة © عقريها {new Date().getFullYear()}
          </div>

          {/* Social Media Icons */}
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
