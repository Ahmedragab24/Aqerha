import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExaminationForm from "../forms/ExaminationForm";

interface Props {
  children?: React.ReactNode;
  type: "inspection" | "evaluation";
}

const RequestExaminationDialog = ({ children, type }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <div className="flex justify-center">
            <Button size="lg" className="w-full h-12 md:w-[30%]">
              طلب الخدمة
            </Button>
          </div>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <ExaminationForm type={type} />
      </DialogContent>
    </Dialog>
  );
};

export default RequestExaminationDialog;
