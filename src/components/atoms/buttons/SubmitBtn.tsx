import { Button } from "@/components/ui/button";

interface SubmitBtnProps {
  title: string;
  disabled?: boolean;
}

const SubmitBtn = ({ title, disabled }: SubmitBtnProps) => {
  return (
    <Button className="w-full h-11" type="submit" disabled={disabled}>
      {title}
    </Button>
  );
};

export default SubmitBtn;
