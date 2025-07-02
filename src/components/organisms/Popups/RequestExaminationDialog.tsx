import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExaminationForm from "../forms/ExaminationForm";

// interface Props {}

const RequestExaminationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-center">
          <Button size="lg" className="w-full h-12 md:w-[30%]">
            طلب الخدمة
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>طلب فحص</DialogTitle>
        </DialogHeader>

        <ExaminationForm />
      </DialogContent>
    </Dialog>
  );
};

export default RequestExaminationDialog;
