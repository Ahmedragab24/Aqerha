import SocialMediaIcons from "../molecules/iconsGroup/SoicalMediaIcons";
import LogoGreen from "../atoms/images/LogoGreen";
import Link from "next/link";
import {
  FooterAboutList,
  FooterImportantLinks,
  ServicesMenu,
} from "@/constants/navMenu";
import DownloadAppICons from "../molecules/iconsGroup/DownloadAppICons";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                  className="footer_Link block w-fit"
                  dir="rtl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h2
              className="text-sm md:text-xl font-bold text-primary mb-4"
              dir="rtl"
            >
              الخدمات
            </h2>
            <nav className="space-y-3">
              {ServicesMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="footer_Link block w-fit"
                  dir="rtl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Important Links Section */}
          <div className="space-y-6">
            <h2
              className="text-sm md:text-xl font-bold text-primary mb-4"
              dir="rtl"
            >
              اهم الروابط
            </h2>
            <nav className="space-y-3">
              <a
                href="https://apps.apple.com/eg/app/%D8%B9%D9%82%D8%B1%D9%87%D8%A7-aqrha/id6743926325?l=ar"
                className="footer_Link block w-fit"
                target="_blank"
                dir="rtl"
                rel="noopener"
              >
                حمل التطبيق
              </a>
              {FooterImportantLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="footer_Link block w-fit"
                  dir="rtl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-start md:items-center">
            <div className="text-right sm:text-center mb-6">
              {/* <div className="inline-flex items-center justify-center">
                <Image
                  src="/Icons/mail2.svg"
                  alt="mail"
                  width={28}
                  height={28}
                  className=""
                />
              </div> */}
              <h3
                className="text-sm md:text-xl font-bold text-primary mb-2"
                dir="rtl"
              >
                {/* ابق على اطلاع */}
                حمل التطبيق الأن
              </h3>
              {/* <p className="text-gray-600 text-sm leading-relaxed" dir="rtl">
                اشترك في نشرتنا الإخبارية لتلقي آخبارنا الأسبوعية
              </p> */}
            </div>

            <div className="space-y-4">
              {/* <EmailInput /> */}
              {/* <p
                className="text-xs text-gray-500 text-right sm:text-center"
                dir="rtl"
              >
                نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة
              </p> */}
              <DownloadAppICons />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div
              className="text-gray-600 text-sm font-medium text-center sm:text-right"
              dir="rtl"
            >
              جميع الحقوق محفوظة © عقرها {new Date().getFullYear()}
            </div>

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
