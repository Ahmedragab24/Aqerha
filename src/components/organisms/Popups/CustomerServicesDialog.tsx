import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomerServicesForm from "../forms/CustomerServicesForm";
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
          <CustomerServicesForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerServicesDialog;
