"use client";

import {
  useGetEvaluationByUserQuery,
  useGetExaminationsByUserQuery,
} from "@/store/services/GetRequests";
import MainTabTriggerBtn from "../../../components/atoms/buttons/MainTriggerBtn";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import { Tabs, TabsContent, TabsList } from "../../../components/ui/tabs";
import ExaminationRequestCard from "@/components/molecules/cards/ExaminationRequestCard";
import EvaluationRequestCard from "../../../components/molecules/cards/EvaluationRequestCard";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { SearchX } from "lucide-react";

const InspectionAndEvaluationRequestsPage = () => {
  const { data: examinations, isLoading: examinationsLoading } =
    useGetExaminationsByUserQuery();
  const { data: evaluations, isLoading: evaluationsLoading } =
    useGetEvaluationByUserQuery();

  return (
    <main className="Container pt-28 mb-20">
      <SectionTitle Title="طلبات الفحص/التقييم" className="text-center" />

      <Tabs defaultValue="Examinations-requests" className="w-full" dir="rtl">
        <TabsList className="mx-auto md:mx-0 my-2 flex border rounded-sm h-full">
          <MainTabTriggerBtn
            title="طلبات الفحص"
            value="Examinations-requests"
          />
          <MainTabTriggerBtn
            title="طلبات التقييم"
            value="Evaluation-requests"
          />
        </TabsList>

        {/* Tab - فحص */}
        <TabsContent value="Examinations-requests">
          {examinationsLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              <GroupCardsSkeletons count={2} />
            </div>
          ) : examinations?.data && examinations.data.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {examinations.data.map((item) => (
                <ExaminationRequestCard
                  key={item.id}
                  ExaminationRequest={item}
                />
              ))}
            </div>
          ) : (
            <DataNotFount
              title="لا يوجد طلبات"
              description="لا يوجد طلبات حاليا"
              icon={<SearchX className="w-10 h-10" />}
            />
          )}
        </TabsContent>

        {/* Tab - تقييم */}
        <TabsContent value="Evaluation-requests">
          {evaluationsLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              <GroupCardsSkeletons count={2} />
            </div>
          ) : evaluations?.evaluation_requests &&
            evaluations.evaluation_requests.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {evaluations.evaluation_requests.map((item) => (
                <EvaluationRequestCard key={item.id} EvaluationRequest={item} />
              ))}
            </div>
          ) : (
            <DataNotFount
              title="لا يوجد طلبات"
              description="لا يوجد طلبات حاليا"
              icon={<SearchX className="w-10 h-10" />}
            />
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default InspectionAndEvaluationRequestsPage;
