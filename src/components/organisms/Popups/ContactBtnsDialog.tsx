import { ProfileType } from "@/types/Real-estates";
import CallUserBtns from "../../molecules/btnsGroup/CallUserBtns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface Props {
  children?: React.ReactNode;
  userData: ProfileType;
}

const ContactBtnsDialog = ({ children, userData }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center mb-6">
          <DialogTitle>تواصل مع المالك</DialogTitle>
          <DialogDescription>
            اختر الطريقة التي تفضلها للتواصل.
          </DialogDescription>
        </DialogHeader>

        <div>
          <CallUserBtns
            isText
            userData={userData}
            className="!flex-col"
            classNameBtns="!w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactBtnsDialog;
