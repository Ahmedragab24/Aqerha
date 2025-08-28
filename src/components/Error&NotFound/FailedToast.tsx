import Image from "next/image";
import { toast } from "sonner";

interface Props {
  title: string;
}

export const showFailedToast = ({ title }: Props) => {
  return toast.custom((id) => (
    <div className="flex flex-row justify-center items-center gap-4 mx-auto border border-destructive w-fit rounded-2xl bg-background shadow-md py-4 px-16">
      <Image
        src="/Icons/Close Circle.svg"
        alt={`success ${id}`}
        width={30}
        height={30}
      />
      <h2 className="text-sm font-medium text-destructive">{title}</h2>
    </div>
  ));
};

// Keep the component export for backward compatibility if needed
const FailedToast = () => {
  return null; // This component doesn't render anything
};

export default FailedToast;
