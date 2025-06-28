import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  console.log(newsId);

  return (
    <main className="Container pt-28 mb-16">
      <div className="">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            ركود سوق الإسكان
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            البائعون في انتظار المشترين والمشترون في انتظار انخفاض أسعار
            البائعين، وتحليل شامل لحالة السوق العقاري الحالية
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-3">
            {/* Hero Image */}
            <div className="relative w-full h-[350px] lg:h-[450px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                alt="منظر المدينة مع الجبال"
                fill
                className="object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Image
                  src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                  alt="calendar"
                  width={20}
                  height={20}
                />
                <span>٣٠ ديسمبر ٢٠٢٥</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                  alt="clock"
                  width={20}
                  height={20}
                />
                <span>مدة القراءة: ١٠ دقائق</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                  alt="author"
                  width={20}
                  height={20}
                />
                <span>أحمد محمد</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <p className="text-gray-700 leading-relaxed mb-6">
                من وجهة نظر نشطاء سوق العقارات، فإن الوضع الحالي للسوق هو
                استجابة للارتفاعات المتتالية في الأسعار خلال السنوات الماضية،
                وبسبب الزيادة الهائلة في الأسعار في هذا السوق، لا يوجد حاليًا
                رغبة في شراء هذه السلعة الضرورية ولكن الاستثمارية.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                وفقًا لتقارير السوق العقاري، شهدت الأشهر الأخيرة انخفاضًا
                ملحوظًا في عدد المعاملات العقارية، حيث يتردد المشترون في اتخاذ
                قرارات الشراء بسبب عدم اليقين حول اتجاه الأسعار المستقبلية. من
                ناحية أخرى، يحجم البائعون عن تخفيض أسعارهم أملاً في تحسن الظروف
                السوقية.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                تحليل حالة السوق الحالية
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                يشير الخبراء إلى أن هذا الركود قد يكون مؤقتًا، حيث أن العوامل
                الاقتصادية الأساسية لا تزال قوية. ومع ذلك، فإن التحديات التي
                تواجه السوق تتطلب حلولاً مبتكرة من جميع الأطراف المعنية، بما في
                ذلك المطورين والمستثمرين والجهات التنظيمية.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                كما أن التغيرات في أنماط العمل والحياة بعد جائحة كوفيد-19 أثرت
                بشكل كبير على تفضيلات المشترين، حيث ازداد الطلب على المنازل في
                المناطق الضواحي بينما انخفض الاهتمام بالشقق في المراكز الحضرية
                المزدحمة.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                توقعات مستقبل السوق العقاري
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                رغم التحديات الحالية، يتوقع المحللون أن يشهد السوق العقاري
                تعافيًا تدريجيًا خلال الأشهر القادمة، خاصة مع استقرار أسعار
                الفائدة وتحسن الظروف الاقتصادية العامة. ومع ذلك، قد تستغرق عملية
                التعافي وقتًا أطول من المتوقع.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                من المهم للمستثمرين والمشترين المحتملين مراقبة المؤشرات
                الاقتصادية عن كثب واتخاذ قرارات مدروسة بناءً على تحليل شامل
                للسوق وظروفهم الشخصية. كما ينصح الخبراء بالتشاور مع مستشارين
                عقاريين مختصين قبل اتخاذ أي قرارات استثمارية كبيرة.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[350px] lg:h-[450px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                alt="منظر المدينة مع الجبال"
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <p className="text-gray-700 leading-relaxed mb-6">
                من وجهة نظر نشطاء سوق العقارات، فإن الوضع الحالي للسوق هو
                استجابة للارتفاعات المتتالية في الأسعار خلال السنوات الماضية،
                وبسبب الزيادة الهائلة في الأسعار في هذا السوق، لا يوجد حاليًا
                رغبة في شراء هذه السلعة الضرورية ولكن الاستثمارية.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                وفقًا لتقارير السوق العقاري، شهدت الأشهر الأخيرة انخفاضًا
                ملحوظًا في عدد المعاملات العقارية، حيث يتردد المشترون في اتخاذ
                قرارات الشراء بسبب عدم اليقين حول اتجاه الأسعار المستقبلية. من
                ناحية أخرى، يحجم البائعون عن تخفيض أسعارهم أملاً في تحسن الظروف
                السوقية.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                تحليل حالة السوق الحالية
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                يشير الخبراء إلى أن هذا الركود قد يكون مؤقتًا، حيث أن العوامل
                الاقتصادية الأساسية لا تزال قوية. ومع ذلك، فإن التحديات التي
                تواجه السوق تتطلب حلولاً مبتكرة من جميع الأطراف المعنية، بما في
                ذلك المطورين والمستثمرين والجهات التنظيمية.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                كما أن التغيرات في أنماط العمل والحياة بعد جائحة كوفيد-19 أثرت
                بشكل كبير على تفضيلات المشترين، حيث ازداد الطلب على المنازل في
                المناطق الضواحي بينما انخفض الاهتمام بالشقق في المراكز الحضرية
                المزدحمة.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">
                توقعات مستقبل السوق العقاري
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                رغم التحديات الحالية، يتوقع المحللون أن يشهد السوق العقاري
                تعافيًا تدريجيًا خلال الأشهر القادمة، خاصة مع استقرار أسعار
                الفائدة وتحسن الظروف الاقتصادية العامة. ومع ذلك، قد تستغرق عملية
                التعافي وقتًا أطول من المتوقع.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                من المهم للمستثمرين والمشترين المحتملين مراقبة المؤشرات
                الاقتصادية عن كثب واتخاذ قرارات مدروسة بناءً على تحليل شامل
                للسوق وظروفهم الشخصية. كما ينصح الخبراء بالتشاور مع مستشارين
                عقاريين مختصين قبل اتخاذ أي قرارات استثمارية كبيرة.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 mt-8">العلامات</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge variant={"secondary"} className="py-2 px-6 text-sm">
                    انتعاش وركود السوق
                  </Badge>
                  <Badge variant={"secondary"} className="py-2 px-6 text-sm">
                    ركود أسعار الإسكان في عام 1402
                  </Badge>
                  <Badge variant={"secondary"} className="py-2 px-6 text-sm">
                    التضخم السالب في الإسكان
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href={"/news/1"}>
                    <Card className="overflow-hidden border-gray-300 p-0">
                      <CardContent className="p-0">
                        <div className="relative h-[200px]">
                          <Image
                            src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                            alt="مشاريع عقارية جديدة"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-sm mb-2">
                            مشاريع عقارية جديدة في المنطقة الشرقية
                          </h4>
                          <p className="text-xs text-gray-600">
                            استمرار التطوير رغم تحديات السوق
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href={"/news/1"}>
                    <Card className="overflow-hidden border-gray-300 p-0">
                      <CardContent className="p-0">
                        <div className="relative h-[200px]">
                          <Image
                            src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                            alt="مجمعات سكنية حديثة"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-sm mb-2">
                            مجمعات سكنية حديثة بتصاميم عصرية
                          </h4>
                          <p className="text-xs text-gray-600">
                            تلبية احتياجات الأسر العصرية
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href={"/news/1"}>
                    <Card className="overflow-hidden border-gray-300 p-0">
                      <CardContent className="p-0">
                        <div className="relative h-[200px]">
                          <Image
                            src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                            alt="أسواق عقارية متنوعة"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-sm mb-2">
                            تنوع الخيارات العقارية المتاحة
                          </h4>
                          <p className="text-xs text-gray-600">
                            من الشقق إلى الفلل والمكاتب
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6 bg-secondary rounded-lg p-4 border border-gray-300">
              {/* Market Trend Chart */}
              <h3 className="font-bold text-sm mb-4">أخبار ذات صلة</h3>
              <Card className="overflow-hidden p-0 border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مشاريع عقارية جديدة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">
                      مشاريع عقارية جديدة في المنطقة الشرقية
                    </h4>
                    <p className="text-xs text-gray-600">
                      استمرار التطوير رغم تحديات السوق
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden p-0 border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="مجمعات سكنية حديثة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">
                      مجمعات سكنية حديثة بتصاميم عصرية
                    </h4>
                    <p className="text-xs text-gray-600">
                      تلبية احتياجات الأسر العصرية
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden p-0 border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative h-[200px]">
                    <Image
                      src="/Images/22789f86341e22a53d75e94226849df397d68d5e.jpg"
                      alt="أسواق عقارية متنوعة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm mb-2">
                      تنوع الخيارات العقارية المتاحة
                    </h4>
                    <p className="text-xs text-gray-600">
                      من الشقق إلى الفلل والمكاتب
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

export default NewsDetailsPage;
