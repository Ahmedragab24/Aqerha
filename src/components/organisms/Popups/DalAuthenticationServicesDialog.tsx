import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DalServicesType } from "@/constants/DalAuthenticationServices";
import DalAuthenticationServicesForm from "../forms/DalAuthenticationServicesForm";

interface Props {
  children?: React.ReactNode;
  typeService: DalServicesType;
}

const DalAuthenticationServicesDialog = ({ children, typeService }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>خدمات توثيق دال</DialogTitle>
        </DialogHeader>

        <div>
          <DalAuthenticationServicesForm typeService={typeService} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DalAuthenticationServicesDialog;
