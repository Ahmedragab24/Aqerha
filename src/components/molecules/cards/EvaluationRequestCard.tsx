"use client";

import { Check, Clock } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import ContactBtnsDialog from "../../organisms/Popups/ContactBtnsDialog";
import { EvaluationType } from "@/types/Requests";
import ViewRequestDetailsDialog from "@/components/organisms/Popups/ViewRequestDetailsDialog";

interface Props {
  EvaluationRequest: EvaluationType;
}

const steps = [
  { key: "جاري الفحص", label: "جاري التقييم" },
  { key: "التواصل مع الفحص", label: "التواصل مع المقيم" },
  { key: "التقرير جاهز", label: "التقرير جاهز" },
];

const EvaluationRequestCard = ({ EvaluationRequest }: Props) => {
  const currentStepIndex = steps.findIndex(
    (s) => s.key === EvaluationRequest.evaluation_status
  );

  const progressPercentage =
    currentStepIndex >= 0 ? (currentStepIndex / (steps.length - 1)) * 100 : 0;

  return (
    <Card className="w-full shadow-lg mx-auto">
      <CardContent className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-6">
          <div className="order-1 sm:order-2 text-right">
            <div className="font-semibold text-gray-800 text-base sm:text-lg">
              رقم الطلب: {EvaluationRequest.id}
            </div>
          </div>

          <div className="order-2 sm:order-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                {new Date(EvaluationRequest.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="relative mb-8 sm:mb-6">
          <div className="absolute top-5 left-3 right-3 sm:left-5 sm:right-6 h-1 bg-gray-200 rounded-full">
            <div
              className="absolute right-0 top-0 h-full bg-gradient-to-l from-primary to-primary-light rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex justify-between items-center relative px-1 sm:px-0">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isUpcoming = index > currentStepIndex;

              return (
                <div key={step.key} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300
                      ${isCompleted ? "bg-primary shadow-lg" : ""}
                      ${
                        isCurrent
                          ? "bg-primary shadow-lg ring-2 sm:ring-4 ring-teal-100"
                          : ""
                      }
                      ${isUpcoming ? "border-2 border-gray-300 bg-white" : ""}`}
                  >
                    {isCompleted && (
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    )}
                    {isCurrent && (
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white animate-pulse"></div>
                    )}
                    {isUpcoming && (
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-gray-300"></div>
                    )}
                  </div>

                  <span
                    className={`text-xs sm:text-sm text-center leading-tight px-1 max-w-[70px] sm:max-w-[200px]
                      ${
                        isCompleted || isCurrent
                          ? "text-primary font-medium"
                          : "text-gray-500"
                      }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
          <ViewRequestDetailsDialog EvaluationRequest={EvaluationRequest} />

          {EvaluationRequest.evaluation_status === "التواصل مع الفاحص" && (
            <ContactBtnsDialog
              userData={EvaluationRequest?.user?.profile || undefined}
            >
              <Button
                variant={"link"}
                className="font-semibold text-sm sm:text-base p-2 sm:p-3 h-auto min-h-[44px] bg-primary/5 hover:bg-primary/10 rounded-lg sm:rounded-none"
              >
                التواصل مع الفاحص
                <Image
                  src="/Icons/Alt Arrow Left.svg"
                  alt="arrow left"
                  width={16}
                  height={16}
                  className="sm:w-5 sm:h-5 mr-1"
                />
              </Button>
            </ContactBtnsDialog>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EvaluationRequestCard;
