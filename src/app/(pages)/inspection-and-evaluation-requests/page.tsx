import MainTabTriggerBtn from "@/components/atoms/buttons/MainTriggerBtn";
import SectionTitle from "@/components/atoms/title/SectionTitle";
import InspectionRequestCard from "@/components/molecules/cards/InspectionRequestCard";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { EvaluationRequestsData } from "@/constants/cards/inspection-and-evaluation-requests";

const InspectionAndEvaluationRequestsPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10 md:space-y-4">
      <SectionTitle Title="طلبات المسوق/الوسيط" className="text-center" />

      <Tabs defaultValue="Inspection-requests" className="w-full" dir="rtl">
        <TabsList className="mx-auto md:mx-0 mb-20">
          <div className="flex flex-col border overflow-hidden rounded-sm w-[200px]">
            <MainTabTriggerBtn
              title="طلبات الفحص"
              value="Inspection-requests"
            />
            <MainTabTriggerBtn
              title="طلبات التقييم"
              value="Evaluation-requests"
            />
          </div>
        </TabsList>

        <TabsContent value="Inspection-requests">
          <div className="grid md:grid-cols-2 gap-6">
            {EvaluationRequestsData.map((item) => (
              <InspectionRequestCard key={item.id} EvaluationRequest={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Evaluation-requests">
          <div className="grid md:grid-cols-2 gap-6">
            {EvaluationRequestsData.map((item) => (
              <InspectionRequestCard key={item.id} EvaluationRequest={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default InspectionAndEvaluationRequestsPage;
