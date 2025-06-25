import Banner from "@/components/atoms/images/Banner";
import AuctionsSection from "@/components/templates/AuctionsSection";
import AuthenticationServicesSection from "@/components/templates/AuthenticationServicesSection";
import CompaniesSection from "@/components/templates/CompaniesSection";
import DevelopersSection from "@/components/templates/DevelopersSection";
import EngineeringOfficesSection from "@/components/templates/EngineeringOfficesSection";
import HeroSection from "@/components/templates/HeroSection";
import InspectionServicesSection from "@/components/templates/InspectionServicesSection";
import NewProjectsSection from "@/components/templates/NewProjectsSection";
import NewsSection from "@/components/templates/NewsSection";
import PopularRealEstateSection from "@/components/templates/PopularRealEstateSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 mb-16">
      <HeroSection />
      <PopularRealEstateSection />
      <NewProjectsSection />
      <DevelopersSection />
      <Banner image="/Images/Banner.jpg" />
      <EngineeringOfficesSection />
      <AuctionsSection />
      <NewsSection />
      <CompaniesSection />
      <InspectionServicesSection />
      <AuthenticationServicesSection />
    </main>
  );
}
