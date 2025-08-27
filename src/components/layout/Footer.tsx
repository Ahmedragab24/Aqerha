import Image from "next/image";
import EmailInput from "../atoms/inputs/EmailInput";
import SocialMediaIcons from "../molecules/iconsGroup/SoicalMediaIcons";
import LogoGreen from "../atoms/images/LogoGreen";
import Link from "next/link";
import {
  FooterAboutList,
  LoyerMenu,
  SellingMenu,
  ServicesMenu,
} from "@/constants/navMenu";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Navigation Sections - Takes 4 columns on large screens */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="space-y-6">
                <div className="mb-6">
                  <LogoGreen />
                </div>
                <nav className="space-y-3">
                  {FooterAboutList.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="footer_Link"
                      dir="rtl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Selling Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4" dir="rtl">
                  بيع
                </h2>
                <nav className="space-y-3">
                  {SellingMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="footer_Link"
                      dir="rtl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Rental Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4" dir="rtl">
                  إيجار
                </h2>
                <nav className="space-y-3">
                  {LoyerMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="footer_Link"
                      dir="rtl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-primary mb-4" dir="rtl">
                  الخدمات
                </h2>
                <nav className="space-y-3">
                  {ServicesMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="footer_Link"
                      dir="rtl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Newsletter Section - Takes 1 column on large screens */}
          <div className="lg:col-span-2">
            {/* Newsletter Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full">
                <Image
                  src="/Icons/mail2.svg"
                  alt="mail"
                  width={32}
                  height={32}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" dir="rtl">
                ابق على اطلاع
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" dir="rtl">
                اشترك في نشرتنا الإخبارية لتلقي آخبارنا الأسبوعية
              </p>
            </div>

            {/* Email Input Form */}
            <div className="space-y-4">
              <EmailInput />
              <p className="text-xs text-gray-500 text-center" dir="rtl">
                نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-sm font-medium" dir="rtl">
              جميع الحقوق محفوظة © عقريها {new Date().getFullYear()}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
