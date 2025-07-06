import SectionTitle from "@/components/atoms/title/SectionTitle";
import RealEstateCard from "@/components/molecules/cards/RealEstateCard";
import PaginationList from "@/components/organisms/paginations/PaginationList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RealEstesData } from "@/constants/cards/RealEstate";

const FavoritesPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <SectionTitle Title="العقارات المفضلة" className="text-center mb-10" />
      <div className="space-y-10">
        <Tabs defaultValue="renting" className="w-full" dir="rtl">
          <TabsList className="w-1/2 h-14 mx-auto py-2 px-4 shadow-lg mb-6">
            <TabsTrigger
              value="renting"
              className="text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              إيجار
            </TabsTrigger>
            <TabsTrigger
              value="selling"
              className="text-xl data-[state=active]:text-white data-[state=active]:bg-primary"
            >
              بيع
            </TabsTrigger>
          </TabsList>
          <TabsContent value="renting">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {RealEstesData.map((item) => (
                <RealEstateCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="selling">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {RealEstesData.map((item) => (
                <RealEstateCard key={item.id} product={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <PaginationList />
      </div>
    </main>
  );
};

export default FavoritesPage;
