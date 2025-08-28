import BannersCarousel from "../components/atoms/images/Banner";
import AuctionsSection from "../components/templates/AuctionsSection";
import AuthenticationServicesSection from "../components/templates/AuthenticationServicesSection";
import CompaniesSection from "../components/templates/CompaniesSection";
import DevelopersSection from "../components/templates/DevelopersSection";
import EngineeringOfficesSection from "../components/templates/EngineeringOfficesSection";
import HeroSection from "../components/templates/HeroSection";
import InspectionServicesSection from "../components/templates/InspectionServicesSection";
import NewProjectsSection from "../components/templates/NewProjectsSection";
import NewsSection from "../components/templates/NewsSection";
import PopularRealEstateSection from "../components/templates/PopularRealEstateSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex flex-col gap-10 md:gap:16 lg:gap-20 mb-16">
        <PopularRealEstateSection />
        <NewProjectsSection />
        <DevelopersSection />
        <BannersCarousel />
        <EngineeringOfficesSection />
        <AuctionsSection />
        <CompaniesSection />
        <InspectionServicesSection />
        <AuthenticationServicesSection />
        <NewsSection />
      </div>
    </main>
  );
}
