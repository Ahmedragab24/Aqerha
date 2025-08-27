"use client";

import Image from "next/image";
import { useGetAllNewsQuery } from "@/store/services/News";
import MainNewsCard from "@/components/molecules/cards/MainNewsCard";
import SecondeNewsCard from "@/components/molecules/cards/SecondeNewsCard";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import { Newspaper } from "lucide-react";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";

const NewsPage = () => {
  const { data, isLoading, isError } = useGetAllNewsQuery();
  const NewsList = data || [];

  return (
    <main className="Container pt-28 mb-16">
      <h1 className="text-2xl font-bold mb-6">عقارات</h1>

      {isLoading && <GroupCardsSkeletons count={4} />}

      {isError && (
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<Newspaper />}
        />
      )}

      {!isLoading && !isError && NewsList.length === 0 && (
        <DataNotFount
          title="لا يوجد أخبار حالياً"
          description="قريباً سوف يتوفر أهم الأخبار، تابعنا"
          icon={<Newspaper />}
        />
      )}

      {!isLoading && !isError && NewsList.length > 0 && (
        <div className="space-y-12">
          {/* Main Featured Property Section */}
          {NewsList[0] && <MainNewsCard News={NewsList[0]} />}

          {/* Housing Section */}
          <div>
            <h1 className="text-2xl font-bold mb-6">الإسكان</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Second Article */}
              <div className="lg:col-span-2">
                {NewsList[1] && <SecondeNewsCard News={NewsList[1]} />}
              </div>

              {/* Side Articles */}
              <div className="space-y-6">
                {NewsList[2] && (
                  <SecondeNewsCard
                    News={NewsList[2]}
                    ImageStyle="!h-[180px] sm:!h-[200px]"
                  />
                )}

                {NewsList[3] && (
                  <SecondeNewsCard
                    News={NewsList[3]}
                    ImageStyle="!h-[180px] sm:!h-[200px]"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Banner Section */}
          <div className="bg-secondary p-6 lg:p-8 rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 items-center text-center lg:text-right">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-xl lg:text-2xl font-semibold leading-tight">
                  في عقرها، دائمًا يوجد منزل ينتظرك
                </h1>
                <h3 className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  سواء كنت تبحث عن منزل مريح أو كنت مدير وكالة عقارية أو مستشار
                  مستقل، نحن دائمًا هنا لدعمك.
                </h3>
              </div>
              <div className="relative w-[180px] h-[200px] sm:w-[220px] sm:h-[240px] lg:w-[280px] lg:h-[300px]">
                <Image
                  src="/Images/IllustrationBanner.png"
                  alt="IllustrationBanner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsPage;

//{/* البناء والتشييد */}
// {/* <div>
//   <h1 className="text-2xl font-bold mb-6">البناء والتشييد</h1>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {Array(4)
//       .fill(0)
//       .map((_, index) => (
//         <Card
//           key={index}
//           className="overflow-hidden bg-secondary border-none p-0 border-gray-300"
//         >
//           <CardContent className="p-0">
//             <div className="flex flex-col-reverse sm:flex-row">
//               {/* Property Details */}
//               <div className="sm:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
//                 <div className="space-y-4">
//                   <div className="w-fit text-xs lg:text-sm bg-gray-200 rounded-sm px-3 py-2">
//                     مدة القراءة: ٥ دقائق
//                   </div>
//                   <h2 className="text-sm lg:text-base font-bold leading-tight">
//                     ضرورة استخدام مواد البناء القياسية في نهضة الإسكان الوطنية
//                     في كرمانشاه
//                   </h2>
//                 </div>
//               </div>

//               {/* Property Image */}
//               <div className="sm:w-1/2">
//                 <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px]">
//                   <Image
//                     src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
//                     alt="منظر المدينة مع الجبال"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//   </div>
// </div>; */}

//  {/* Rental Section */}
// {/* <div>
//   <h1 className="text-2xl font-bold mb-6">إيجار</h1>

//   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//     {/* Main Article */}
//     <div className="lg:col-span-2">
//       <Card className="overflow-hidden p-0 border-gray-300">
//         <CardContent className="p-0">
//           <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
//             <Image
//               src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
//               alt="مباني سكنية"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-4 lg:p-6 space-y-4">
//             <div className="w-fit text-sm bg-gray-200 rounded-sm px-3 py-2">
//               مدة القراءة: 10 دقائق
//             </div>
//             <h2 className="text-lg lg:text-xl font-bold leading-tight">
//               هل خطر الزلازل أكبر في ناطحات السحاب أم في الشقق المنخفضة الارتفاع
//               أو المنازل الريفية؟
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
//               الزلزال هو أحد الكوارث الطبيعية التي لا يمكن التنبؤ بزمان ومكان
//               حدوثه بدقة. لذلك، معظم الناس لا يعرفون كيف يجب أن يتصرفوا أثناء
//               الزلزال؛ حتى أن العديد منهم لا يدركون حدوث الزلزال حتى بعد عدة
//               دقائق من وقوعه.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>

//     {/* Side Articles */}
//     <div className="space-y-6">
//       <Card className="overflow-hidden p-0 border-gray-300">
//         <CardContent className="p-0">
//           <div className="relative h-[180px] sm:h-[200px]">
//             <Image
//               src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
//               alt="مباني سكنية"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-4">
//             <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
//               ركود أسعار المستثمرين الأجانب بسبب ارتفاع أسعار المواد والمواد
//               الأولية والبناء
//             </h3>
//             <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
//               تم إجراء مقارنة شاملة بين أسعار العقارات السكنية في منطقة الخليج
//               مع مراعاة التطورات الاقتصادية الحديثة والتغيرات في السوق العقاري.
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="overflow-hidden p-0 border-gray-300">
//         <CardContent className="p-0">
//           <div className="relative h-[180px] sm:h-[200px]">
//             <Image
//               src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
//               alt="ناطحات سحاب حديثة"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-4">
//             <div className="text-xs lg:text-sm text-gray-500 mb-2">
//               عقارات تجارية
//             </div>
//             <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
//               هل تعتقد أن قطاع الأراضي تكون في طليعات السحاب أم في المناطق
//               المحيطة الارتفاع أو المناطق المرتفعة؟
//             </h3>
//             <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
//               الأراضي في هذه المناطق التجارية الحيوية تشهد نمواً مستمراً في
//               الطلب، مما يجعلها خياراً مثالياً للمستثمرين الباحثين عن عوائد
//               مجزية في السوق العقاري.
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   </div>
// </div>; */}
