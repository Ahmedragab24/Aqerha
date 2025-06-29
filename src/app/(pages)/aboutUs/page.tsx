import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="Container pt-28 mb-16 flex items-center justify-center">
      <Card className="w-full shadow-lg border-gray-300">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-right mb-8">
            <h2 className="text-lg font-medium text-gray-600">قصة عقرها</h2>
          </div>

          {/* Main Title */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-primary-dark mb-2">
              نحن نؤمن أن لكل شخص بيتاً خاصاً به.
            </h1>
            <p className="text-gray-700 text-xl">
              نحن معك حتى نجد البيت الذي تريده.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col-reverse md:flex-row gap-8 mt-12">
            {/* Image Section */}
            <div className="flex-1">
              <div className="relative h-[580px] w-full">
                <Image
                  src="/Images/adasdqwdae.jpg"
                  alt="Modern building"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6 text-right">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  لقد عبرت تطورات الإنترنت طرق المعاملات والأسواق بشكل جذري.
                  القوات الموجودة في هذا الشكل من المعلومات، بسهولة وسرعة أكثر
                  جذب الذين يجعلون نحو حياة أفضل وأحدث تغيير في الأنماط
                  التقليدية.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  المعلومات، بشكل عام مثال أمثلة الجودة الموثوقة من خلال الوقت
                  الطرق في قطاع العقارات طريقة أن التفكير داخل المدينة والتعامل
                  مع الأكواد الموثوقة فقد معاد، وضع دولتك الوقت يمكن في الطريقة
                  الكاملة للقيام بالمعاملات من خلال هذه الطرق.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  بسبب طبيعة الفضاء الافتراضي، موقع محلي، يمكن بسهولة الحصول على
                  معلومات تأثير وشراء وضع العقارات في البلد، بسبب هذا الموقع
                  دائماً التحقق من المعلومات الدقيقة والصحيحة أو المناطق
                  المختلفة تم تقديمها لك.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  يمكنك أن تسوق براحة إلى وقتم أجراء والسائل بشكل جذري القوات
                  الموجودة في هذا الشكل من المعلومات، بسهولة وسرعة مجموعة كبيرة
                  من العقارات المختلفة ومستشارين عقاريين من المحققين من جانبهم،
                  مع بيانات محدثة ومفصلة حول العقارات في معظم أنحاء المعلومات
                  حول العقارات في معظم أنحاء البلاد، بما في ذلك عام استثمارات
                  العقارات متخصصين، ومن خلال هذا الاستثمار، متخصصة لك لاختيار
                  أفضل وأكثر أماناً في كل المناطق بسهولة في أي مكان وفي أي وقت
                  أكثر أماناً كنت تحتاج إلى مزيد من المعلومات، أو مستشار مستقبل،
                  يمكن دائماً وكالة عقارية، أو مستشار مستقبل، يمكن دائماً
                  محاولة.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  بسبب طبيعة الفضاء الافتراضي، موقع محلي، يمكن بسهولة الحصول على
                  معلومات تأثير وشراء وضع العقارات في البلد، بسبب هذا الموقع
                  دائماً التحقق من المعلومات الدقيقة والصحيحة أو المناطق
                  المختلفة تم تقديمها لك.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUsPage;
