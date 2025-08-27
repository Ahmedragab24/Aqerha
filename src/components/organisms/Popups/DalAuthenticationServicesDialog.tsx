import { AuthenticationServiceType } from "@/types/AuthenticationService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import DalAuthenticationServicesForm from "../forms/DalAuthenticationServicesForm";

interface Props {
  children?: React.ReactNode;
  Service: AuthenticationServiceType;
}

const DalAuthenticationServicesDialog = ({ children, Service }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle>خدمات توثيق دال</DialogTitle>
        </DialogHeader>

        <DalAuthenticationServicesForm Service={Service} />
      </DialogContent>
    </Dialog>
  );
};

export default DalAuthenticationServicesDialog;
