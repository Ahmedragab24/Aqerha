import SectionTitle from "@/components/atoms/title/SectionTitle";
import CustomAccordion, {
  AccordionType,
} from "@/components/molecules/accordions/CustomAccordion";
import Image from "next/image";
import React from "react";

const TermsList: AccordionType[] = [
  {
    trigger: "اتفاقية شروط و أحكام الاستخدام العامة",
    value: "item-1",
    content:
      "نرحب بك في منصتنا. باستخدامك لهذا الموقع أو التطبيق، فإنك توافق على الالتزام بشروط وأحكام الاستخدام العامة التالية. تشمل هذه الشروط استخدام المحتوى، والقيود المفروضة على المستخدمين، والمسؤوليات القانونية. نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق. يُرجى قراءة هذه الاتفاقية بعناية قبل استخدام المنصة.",
  },
  {
    trigger: "اتفاقية شروط و أحكام خدمة الحجوزات",
    value: "item-2",
    content:
      "تتيح لك هذه الخدمة حجز الخدمات أو المواعيد المقدمة عبر منصتنا. باستخدامك لخدمة الحجوزات، فإنك توافق على تقديم معلومات دقيقة، والالتزام بالمواعيد المحجوزة، وتتحمل المسؤولية في حال الإلغاء المتأخر أو عدم الحضور. قد يتم فرض رسوم أو عقوبات وفقًا لسياسة الإلغاء.",
  },
  {
    trigger: "اتفاقية شروط و أحكام خدمة البيع السريع",
    value: "item-3",
    content:
      "تُنظم هذه الاتفاقية عملية عرض وبيع المنتجات أو الخدمات بشكل سريع عبر المنصة. يتحمل المستخدم مسؤولية دقة المعلومات المقدمة عند إدراج أي منتج، وتلتزم المنصة بدور الوسيط فقط دون تحمل أي التزامات قانونية مباشرة ناتجة عن المعاملة. تحتفظ المنصة بحقها في إزالة أو تعديل أي عرض يخالف الشروط.",
  },
  {
    trigger: "سياسة خصوصية البيانات",
    value: "item-4",
    content:
      "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. يتم جمع المعلومات فقط للأغراض المتعلقة بتقديم خدماتنا وتحسينها. لا نقوم ببيع أو مشاركة بياناتك مع أطراف خارجية إلا وفقًا لما ينص عليه القانون أو بموافقتك. يُرجى مراجعة سياسة الخصوصية الكاملة لفهم كيفية جمع واستخدام وحماية بياناتك.",
  },
  {
    trigger: "سياسة حقوق الملكية الفكرية",
    value: "item-5",
    content:
      "تحترم منصتنا حقوق الملكية الفكرية للأفراد والشركات. يُحظر نشر أو استخدام أي محتوى دون الحصول على التصاريح القانونية اللازمة. إذا كنت تعتقد أن هناك انتهاكًا لحقوقك، يُرجى التواصل معنا فورًا لتقديم الشكوى مع الوثائق الداعمة.",
  },
  {
    trigger: "Privacy Policy",
    value: "item-6",
    content:
      "We value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information when you interact with our platform. By using our services, you agree to the terms of this Privacy Policy. Please read it carefully to understand your rights and our responsibilities.",
  },
];

const TermsAndConditionsPage = () => {
  return (
    <main className="pt-28 mb-16">
      <div className="Container space-y-16">
        <div className="flex items-center justify-center gap-4">
          <SectionTitle Title="الحصول على مساعدة" />
          <Image
            src="/Icons/awdwdaw.svg"
            alt="Terms And Conditions"
            width={35}
            height={35}
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Policy.svg"
                alt="Policy"
                width={20}
                height={20}
              />
              <h2 className="text-xl md:text-2xl font-semibold">
                الإتفاقيات و السياسات
              </h2>
            </div>
            <p className="text-gray-500">
              الاتفاقيات و السياسات التي تحكم العلاقة بين عقار و المستخدمين (8
              مقالات)
            </p>
          </div>
          <div className="border p-8 bg-secondary shadow-md rounded-sm">
            <CustomAccordion accordionList={TermsList} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
