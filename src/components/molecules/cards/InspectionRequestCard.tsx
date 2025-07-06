"use client";

import { Check, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { EvaluationRequestType } from "@/types/inspection-and-evaluation-requests";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactBtnsDialog from "@/components/organisms/Popups/ContactBtnsDialog";

interface Props {
  EvaluationRequest: EvaluationRequestType;
}

const InspectionRequestCard = ({ EvaluationRequest }: Props) => {
  const { phone, requestDate, requestNumber, whatsapp, status } =
    EvaluationRequest;

  // Define progress steps
  const steps = [
    {
      key: "under_examination",
      label: "جاري الفحص",
      description: "قيد المراجعة والفحص",
    },
    {
      key: "in_contact",
      label: "التواصل مع الفاحص",
      description: "جاري التواصل معكم",
    },
    {
      key: "report_ready",
      label: "التقرير جاهز",
      description: "التقرير جاهز للاستلام",
    },
  ];

  // Get current step index
  const currentStepIndex = steps.findIndex((step) => step.key === status);

  return (
    <Card className="w-full shadow-lg mx-auto">
      <CardContent className="p-4 sm:p-6">
        {/* Header - Responsive layout */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-6">
          {/* Request Number - Priority on mobile */}
          <div className="order-1 sm:order-2 text-right">
            <div className="font-semibold text-gray-800 text-base sm:text-lg">
              رقم الطلب: {requestNumber}
            </div>
          </div>

          {/* Date - Secondary on mobile */}
          <div className="order-2 sm:order-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">{requestDate}</span>
            </div>
          </div>
        </div>

        {/* Progress Steps - Mobile optimized */}
        <div className="relative mb-8 sm:mb-6">
          {/* Progress Line - Adjusted for mobile */}
          <div className="absolute top-5 left-3 right-3 sm:left-5 sm:right-6 h-1 bg-gray-200 rounded-full">
            <div
              className="absolute right-0 top-0 h-full bg-gradient-to-l from-primary to-primary-light rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>

          {/* Steps Container - Mobile responsive */}
          <div className="flex justify-between items-center relative px-1 sm:px-0">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isUpcoming = index > currentStepIndex;

              return (
                <div key={step.key} className="flex flex-col items-center">
                  {/* Step Circle - Consistent size */}
                  <div
                    className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 sm:mb-3 relative z-10 transition-all duration-300
                    ${isCompleted ? "bg-primary shadow-lg" : ""}
                    ${
                      isCurrent
                        ? "bg-primary shadow-lg ring-2 sm:ring-4 ring-teal-100"
                        : ""
                    }
                    ${isUpcoming ? "border-2 border-gray-300 bg-white" : ""}
                  `}
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

                  {/* Step Label - Mobile optimized text */}
                  <span
                    className={`
                    text-xs sm:text-sm text-center leading-tight px-1 max-w-[70px] sm:max-w-[200px]
                    ${
                      isCompleted || isCurrent
                        ? "text-primary font-medium"
                        : "text-gray-500"
                    }
                  `}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons - Mobile stacked layout */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
          {/* View Request Button */}
          <Button
            variant={"link"}
            className="font-semibold text-sm sm:text-base p-2 sm:p-3 h-auto min-h-[44px] justify-center sm:justify-start"
          >
            عرض الطلب
            <Image
              src="/Icons/Alt Arrow Left.svg"
              alt="arrow left"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5 mr-1"
            />
          </Button>

          {/* Contact Button - Only show when status is in_contact */}
          {status === "in_contact" && (
            <ContactBtnsDialog phone={phone} whatsapp={whatsapp}>
              <Button
                variant={"link"}
                className="font-semibold text-sm sm:text-base p-2 sm:p-3 h-auto min-h-[44px] justify-center sm:justify-start bg-primary/5 hover:bg-primary/10 rounded-lg sm:rounded-none sm:bg-transparent sm:hover:bg-transparent"
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

export default InspectionRequestCard;
