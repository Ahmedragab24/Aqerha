import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const NewsPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <h1 className="text-2xl font-bold mb-6">عقارات</h1>

      <div className="space-y-12">
        {/* Main Featured Property Section */}
        <Card className="overflow-hidden bg-secondary border-none p-0">
          <CardContent className="p-0">
            <div className="flex flex-col-reverse lg:flex-row">
              {/* Property Details */}
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[420px]">
                <div className="space-y-6">
                  <div className="w-fit text-sm bg-gray-200 rounded-sm px-3 py-2">
                    مدة القراءة: ٥ دقائق
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl lg:text-2xl font-bold leading-tight">
                      ركود سوق الإسكان
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                      البائعون في انتظار المشترين والمشترون في انتظار انخفاض
                      أسعار البائعين.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-4 lg:line-clamp-3">
                      من وجهة نظر نشطاء سوق العقارات، فإن الوضع الحالي للسوق هو
                      استجابة للارتفاعات المتتالية في الأسعار خلال السنوات
                      الماضية، وبسبب الزيادة الهائلة في الأسعار في هذا السوق، لا
                      يوجد حاليًا رغبة في شراء هذه السلعة الضرورية ولكن
                      الاستثمارية.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm bg-gray-200 rounded-sm px-3 py-2">
                    <Image
                      src="/Icons/calendar.svg"
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    ٣٠ ديسمبر ٢٠٢٥
                  </div>
                  <Link href={"/news/1"}>
                    <Button size="lg" className="px-6 lg:px-8 w-full sm:w-auto">
                      تابع القراءة
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Property Image */}
              <div className="lg:w-1/2">
                <div className="relative h-[250px] sm:h-[300px] lg:h-[420px]">
                  <Image
                    src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                    alt="منظر المدينة مع الجبال"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Housing Section */}
        <div>
          <h1 className="text-2xl font-bold mb-6">الإسكان</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مباني سكنية"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 lg:p-6 space-y-4">
                    <div className="w-fit text-sm bg-gray-200 rounded-sm px-3 py-2">
                      مدة القراءة: 10 دقائق
                    </div>
                    <h2 className="text-lg lg:text-xl font-bold leading-tight">
                      هل خطر الزلازل أكبر في ناطحات السحاب أم في الشقق المنخفضة
                      الارتفاع أو المنازل الريفية؟
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
                      الزلزال هو أحد الكوارث الطبيعية التي لا يمكن التنبؤ بزمان
                      ومكان حدوثه بدقة. لذلك، معظم الناس لا يعرفون كيف يجب أن
                      يتصرفوا أثناء الزلزال؛ حتى أن العديد منهم لا يدركون حدوث
                      الزلزال حتى بعد عدة دقائق من وقوعه.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Articles */}
            <div className="space-y-6">
              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative h-[180px] sm:h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مباني سكنية"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
                      ركود أسعار المستثمرين الأجانب بسبب ارتفاع أسعار المواد
                      والمواد الأولية والبناء
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      تم إجراء مقارنة شاملة بين أسعار العقارات السكنية في منطقة
                      الخليج مع مراعاة التطورات الاقتصادية الحديثة والتغيرات في
                      السوق العقاري.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative h-[180px] sm:h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="ناطحات سحاب حديثة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs lg:text-sm text-gray-500 mb-2">
                      عقارات تجارية
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
                      هل تعتقد أن قطاع الأراضي تكون في طليعات السحاب أم في
                      المناطق المحيطة الارتفاع أو المناطق المرتفعة؟
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      الأراضي في هذه المناطق التجارية الحيوية تشهد نمواً مستمراً
                      في الطلب، مما يجعلها خياراً مثالياً للمستثمرين الباحثين عن
                      عوائد مجزية في السوق العقاري.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* البناء والتشييد */}
        <div>
          <h1 className="text-2xl font-bold mb-6">البناء والتشييد</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-secondary border-none p-0 border-gray-300"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col-reverse sm:flex-row">
                      {/* Property Details */}
                      <div className="sm:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
                        <div className="space-y-4">
                          <div className="w-fit text-xs lg:text-sm bg-gray-200 rounded-sm px-3 py-2">
                            مدة القراءة: ٥ دقائق
                          </div>
                          <h2 className="text-sm lg:text-base font-bold leading-tight">
                            ضرورة استخدام مواد البناء القياسية في نهضة الإسكان
                            الوطنية في كرمانشاه
                          </h2>
                        </div>
                      </div>

                      {/* Property Image */}
                      <div className="sm:w-1/2">
                        <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px]">
                          <Image
                            src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                            alt="منظر المدينة مع الجبال"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

        {/* Rental Section */}
        <div>
          <h1 className="text-2xl font-bold mb-6">إيجار</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مباني سكنية"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 lg:p-6 space-y-4">
                    <div className="w-fit text-sm bg-gray-200 rounded-sm px-3 py-2">
                      مدة القراءة: 10 دقائق
                    </div>
                    <h2 className="text-lg lg:text-xl font-bold leading-tight">
                      هل خطر الزلازل أكبر في ناطحات السحاب أم في الشقق المنخفضة
                      الارتفاع أو المنازل الريفية؟
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
                      الزلزال هو أحد الكوارث الطبيعية التي لا يمكن التنبؤ بزمان
                      ومكان حدوثه بدقة. لذلك، معظم الناس لا يعرفون كيف يجب أن
                      يتصرفوا أثناء الزلزال؛ حتى أن العديد منهم لا يدركون حدوث
                      الزلزال حتى بعد عدة دقائق من وقوعه.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Articles */}
            <div className="space-y-6">
              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative h-[180px] sm:h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مباني سكنية"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
                      ركود أسعار المستثمرين الأجانب بسبب ارتفاع أسعار المواد
                      والمواد الأولية والبناء
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      تم إجراء مقارنة شاملة بين أسعار العقارات السكنية في منطقة
                      الخليج مع مراعاة التطورات الاقتصادية الحديثة والتغيرات في
                      السوق العقاري.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden p-0 border-gray-300">
                <CardContent className="p-0">
                  <div className="relative h-[180px] sm:h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="ناطحات سحاب حديثة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs lg:text-sm text-gray-500 mb-2">
                      عقارات تجارية
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm lg:text-base leading-tight">
                      هل تعتقد أن قطاع الأراضي تكون في طليعات السحاب أم في
                      المناطق المحيطة الارتفاع أو المناطق المرتفعة؟
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      الأراضي في هذه المناطق التجارية الحيوية تشهد نمواً مستمراً
                      في الطلب، مما يجعلها خياراً مثالياً للمستثمرين الباحثين عن
                      عوائد مجزية في السوق العقاري.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
