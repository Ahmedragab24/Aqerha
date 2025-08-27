import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import ContactUsForm from "../forms/ContactUsForm";
interface Props {
  children?: React.ReactNode;
}

const CustomerServicesDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="text-2xl">أرسل رسالة</DialogTitle>
        </DialogHeader>

        <div>
          <ContactUsForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerServicesDialog;
