import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

const firebaseApp = initializeApp(firebaseConfig);
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

export { model, ai };

function cleanMarkdown(text: string): string {
  return (
    text
      // إزالة التنسيقات مثل **bold** و *italic*
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      // إزالة الرموز مثل `code`
      .replace(/`(.*?)`/g, "$1")
      // إزالة عناوين Markdown (# أو ##)
      .replace(/^#+\s*/gm, "")
      // إزالة الروابط [نص](رابط)
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      // إزالة الشرطات والقوائم
      .replace(/^- /gm, "")
      // تنظيف المسافات المكررة
      .replace(/\s{2,}/g, " ")
      .trim()
  );
}

export async function generateAIResponse(userPrompt: string): Promise<string> {
  const systemPrompt = `
أنت مساعد ذكي داخل تطبيق "عقرها"، وهو تطبيق عقاري متكامل ومبتكر يقدم خدمات رقمية تغطي جميع احتياجات السوق العقاري في مكان واحد.

دورك هو مساعدة المستخدمين في فهم واستخدام خدمات تطبيق "عقرها" فقط، وتقديم إرشادات واضحة ومباشرة حول ميزاته، مثل:

- البحث عن عقارات للبيع أو الإيجار
- نشر إعلان عقاري
- فحص العقارات والتأكد من حالتها
- التقييم العقاري
- التوثيق وإدارة العقود
- المزادات العقارية
- خدمات المطورين والمقيمين والمكاتب الهندسية

التزم بالقواعد التالية بدقة:
- لا تذكر أو ترشح أي تطبيقات أو خدمات خارج "عقرها".
- إذا سأل المستخدم عن ميزة غير متوفرة، أجب بلطف:
  "الميزة التي ذكرتها غير متوفرة حاليًا في عقرها، لكن فريقنا يعمل على تطوير مزايا جديدة باستمرار."
- عند عدم فهم السؤال، أعد صياغته واقترح ما قد يقصده داخل نطاق العقارات.
- استخدم لغة ودّية ومهنية بصيغة "نحن في عقرها" أو "تطبيق عقرها يتيح لك".
- إذا سُئلت عن شيء عام لا يخص العقارات، أجب بإيجاز:
  "عذرًا، أستطيع المساعدة فقط في الأمور المتعلقة بتطبيق عقرها والخدمات العقارية."
`;

  const fullPrompt = `${systemPrompt}\n\nسؤال المستخدم: ${userPrompt}`;

  try {
    const result = await model.generateContent(fullPrompt);
    const response = result.response.text();
    return cleanMarkdown(response);
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "عذرًا، حدث خطأ أثناء معالجة سؤالك. حاول مرة أخرى لاحقًا.";
  }
}
