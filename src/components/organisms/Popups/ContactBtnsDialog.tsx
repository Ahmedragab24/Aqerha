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
  phone: string;
  whatsapp: string;
}

const ContactBtnsDialog = ({ children, phone, whatsapp }: Props) => {
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
            phone={phone}
            whatsapp={whatsapp}
            className="!flex-col"
            classNameBtns="!w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactBtnsDialog;
