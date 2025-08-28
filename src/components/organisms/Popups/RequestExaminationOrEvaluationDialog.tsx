"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import EvaluationForm from "../forms/EvaluationForm";
import ExaminationForm from "../forms/ExaminationForm";
import { ExaminationRequestState } from "@/types/inspection-and-evaluation-requests";

interface Props {
  children?: React.ReactNode;
  type: "examination" | "evaluation";
  title?: string;
  styleTrigger?: string;
  ExaminationType?: ExaminationRequestState;
}

const RequestExaminationOrEvaluationDialog = ({
  children,
  type,
  title = "طلب الخدمة",
  styleTrigger,
  ExaminationType,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children ? (
        <DialogTrigger>{children}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button
            size="lg"
            className={`w-full h-12 md:w-[30%] ${styleTrigger}`}
          >
            {title}
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="h-[90vh] overflow-y-scroll px-3 md:px-6">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        {type === "examination" ? (
          <ExaminationForm
            setOpen={setOpen}
            ExaminationType={ExaminationType || "with_report"}
          />
        ) : (
          <EvaluationForm setOpen={setOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestExaminationOrEvaluationDialog;
