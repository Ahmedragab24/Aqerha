import FavoriteBtn from "@/components/atoms/buttons/FavoriteBtn";
import ShareBtn from "@/components/atoms/buttons/ShareBtn";
import Riyal from "@/components/atoms/Icons/Riyal";
import GradientOverlay from "@/components/atoms/sliders/GradientOverlay";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import { MapPin } from "lucide-react";
import Image from "next/image";

const CampaignDetailsPage = async ({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) => {
  const { campaignId } = await params;
  console.log(campaignId);

  return (
    <main className="Container pt-28 mb-16" dir="rtl">
      <div className="space-y-10">
        <SectionTitle Title="الإعلان المميز" />

        {/* Property Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4">
          {/* Property Image */}
          <div className="relative w-full h-[20vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/Images/RealEstateGuid.jpg"
              alt="Property Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
              quality={100}
            />
            <GradientOverlay position="top" />
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
              <FavoriteBtn />
              <ShareBtn />
            </div>
          </div>

          {/* Property Details */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">
                  أرض للبيع
                </h2>
                {/* Property Features */}
                <div className="flex items-center justify-between gap-4 text-gray-600">
                  {/* Area */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Icons/LandArea.svg"
                      alt="Triangle"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm text-gray-500">155 م²</span>
                  </div>

                  {/* Bathrooms */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Icons/Bathroom.svg"
                      alt="Triangle"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm text-gray-500">2 حمام</span>
                  </div>

                  {/* Bedrooms */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Icons/Bed.svg"
                      alt="Triangle"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm text-gray-500">4 سرير</span>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-1 mb-4 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <p className="text-gray-500 text-lg leading-relaxed">
                    ٢٦٩٩ وادي الأخضر، جدة، الروضة.
                  </p>
                </div>

                <div className="flex items-center gap-1 text-lg md:text-2xl font-semibold text-primary">
                  <h4>740500</h4>
                  <Riyal className="!w-7 !h-7" />
                  <h4>/الشهر</h4>
                </div>
              </div>
            </div>

            {/* Campaign Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  حالة الحملة: منتهية
                </h3>
                <p className="text-gray-600">تاريخ الإنتهاء: حتى الإغلاق</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ما تم اتفاقه حتى الآن: 150%
                </h3>
                <p className="text-gray-600">تاريخ التفعيل: 15/7/2025</p>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-gray-100 text-center py-3 font-semibold text-gray-700">
                <div>التاريخ</div>
                <div>الميزانية</div>
                <div>الظهور</div>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-3 text-center py-3 text-gray-600">
                  <div>26/9/2024</div>
                  <div>30</div>
                  <div>652</div>
                </div>
                <div className="grid grid-cols-3 text-center py-3 text-gray-600">
                  <div>27/9/2024</div>
                  <div>30</div>
                  <div>443</div>
                </div>
                <div className="grid grid-cols-3 text-center py-3 text-gray-600">
                  <div>28/9/2024</div>
                  <div>30</div>
                  <div>553</div>
                </div>
                <div className="grid grid-cols-3 text-center py-3 text-gray-600">
                  <div>29/9/2024</div>
                  <div>30</div>
                  <div>521</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CampaignDetailsPage;
