"use client";

import { useGetFavoritesQuery } from "@/store/services/Favorites";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import FavoriteRealEstateCard from "@/components/molecules/cards/FavoriteRealEstateCard";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";

const FavoritesPage = () => {
  const { data, isLoading, isError } = useGetFavoritesQuery();

  const favoritesList = data?.data || [];

  return (
    <main className="Container pt-28 mb-16">
      <SectionTitle
        Title="العقارات المفضلة"
        className="text-center mb-10 md:mb-20"
      />

      <div className="space-y-10">
        {isLoading && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GroupCardsSkeletons count={4} />
          </div>
        )}

        {isError && (
          <DataNotFount
            title="حدث خطأ ما"
            description="يرجى تحديث الصفحة أو المحاولة لاحقاً."
          />
        )}

        {!isLoading && !isError && favoritesList.length === 0 && (
          <DataNotFount
            title="لا توجد عقارات في المفضلة حالياً"
            description="يمكنك إضافة العقارات التي تعجبك إلى المفضلة لعرضها هنا لاحقاً."
          />
        )}

        {!isLoading && favoritesList.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoritesList.map((item) => (
              <FavoriteRealEstateCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default FavoritesPage;
