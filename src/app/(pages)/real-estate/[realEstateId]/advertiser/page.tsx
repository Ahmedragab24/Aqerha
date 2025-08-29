"use client";

import Image from "next/image";
import SectionTitle from "../../../../../components/atoms/title/SectionTitle";
import CallUserBtns from "../../../../../components/molecules/btnsGroup/CallUserBtns";
import RateAdvertiser from "../../../../../components/molecules/cards/RateAdvertiser";
import { useAppSelector } from "@/store/hooks";
import { MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommentCard from "@/components/molecules/cards/CommentCard";
import { useGetProfileByIdQuery } from "@/store/services/Profile";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import { ProfileType } from "@/types/Real-estates";

const AdvertiserPage = () => {
  const { AdvertiserData } = useAppSelector((state) => state.AdvertiserData);
  const { data } = useGetProfileByIdQuery(AdvertiserData?.id || 0);
  const Projects = data?.data?.projects || [];

  return (
    <main className="relative mb-16">
      {/* Profile Images */}
      <div className="relative w-full h-[40vh] md:h-[90vh]">
        <Image
          src={`${AdvertiserData?.profile?.image || "/placeholder.svg"}`}
          alt={`${AdvertiserData?.name}`}
          fill
          priority
          loading="eager"
          className="object-cover brightness-[80%]"
        />

        <div className="absolute bottom-[-55px] md:bottom-[-85px] right-5 md:right-20 w-[150px] h-[150px] md:w-[250px] md:h-[250px] shadow-md rounded-full border-4 border-white overflow-hidden z-20">
          <Image
            src={`${AdvertiserData?.profile?.image || "/placeholder.svg"}`}
            alt={`${AdvertiserData?.name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Information */}
      <div className="Container mt-28 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <SectionTitle Title={AdvertiserData?.name} />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p>{AdvertiserData?.profile?.address}</p>
              </div>
              <p className="text-gray-500">
                معدل رضا المستخدمين: {AdvertiserData?.reviews?.length} من ٥
              </p>
              <h3 className="text-2xl font-medium md:max-w-[600px]">
                {AdvertiserData?.profile?.description}
              </h3>
            </div>

            {/* <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/user-square.svg"
                  alt="user"
                  width={30}
                  height={30}
                />
                <h3 className="text-xl text-gray-600 font-semibold">
                  وكيل العقارات
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/Icons/home-trend-up.svg"
                  alt="user"
                  width={30}
                  height={30}
                />
                <h3 className="text-xl text-gray-600 font-semibold">
                  {AdvertiserData?.ads?.length} إعلان نشط
                </h3>
              </div>
            </div> */}

            <CallUserBtns
              isText={false}
              classNameBtns="!px-10 md:!px-20"
              userData={(data?.data?.profile as ProfileType) || undefined}
            />
          </div>

          {/* Left Column - Rating Section */}
          <div className="lg:col-span-1 space-y-8">
            {/* <div className="flex items-center gap-4">
              <div className="cursor-pointer">
                <Image
                  src="/Icons/export.svg"
                  alt="export"
                  width={30}
                  height={30}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/Icons/save.svg"
                  alt="export"
                  width={30}
                  height={30}
                />
              </div>
            </div> */}

            <RateAdvertiser AdvertiserData={AdvertiserData} />
          </div>
        </div>

        <Tabs defaultValue="projects" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-3 gap-2 bg-transparent border-b border-gray-200 rounded-none h-auto p-0">
            <TabsTrigger value="projects" className="TriggerTab">
              المشروعات
            </TabsTrigger>
            <TabsTrigger value="reviews" className="TriggerTab">
              تقييمات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-8">
            {/* Advertisement List */}
            <div className="Container space-y-8 mt-16">
              <SectionTitle Title="قائمة الإعلانات" />

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Projects?.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <div>
              <h2 className="text-xl text-primary-foreground mb-4">
                التعليقات
              </h2>

              <div className="border-y-2 border-border border-dashed py-10">
                {AdvertiserData?.reviews &&
                AdvertiserData?.reviews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {AdvertiserData?.reviews.map((review) => (
                      <CommentCard key={review.id} review={review} />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <h2 className="text-lg font-semibold">لا يوجد تعليقات</h2>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default AdvertiserPage;
