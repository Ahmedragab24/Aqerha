import { Loader } from "lucide-react";
import { Button } from "../../ui/button";

interface SubmitBtnProps {
  title: string;
  disabled?: boolean;
  className?: string;
  loading: boolean;
}

const SubmitBtn = ({ title, disabled, loading, className }: SubmitBtnProps) => {
  return (
    <Button
      className={`w-full h-11 ${className}`}
      type="submit"
      disabled={disabled}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <Loader className="animate-spin" />
          <span className="text-white">جاري التحميل...</span>
        </div>
      ) : (
        <span className="text-white">{title}</span>
      )}
    </Button>
  );
};

export default SubmitBtn;
