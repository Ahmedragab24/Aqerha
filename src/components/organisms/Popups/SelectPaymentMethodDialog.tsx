import SelectPayment from "../../molecules/selects/SelectPayment";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

interface Props {
  children?: React.ReactNode;
  price: number;
}

const SelectPaymentMethodDialog = ({ children, price }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div>
          <SelectPayment price={price} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectPaymentMethodDialog;
