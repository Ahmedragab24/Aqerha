import { Button } from "@/components/ui/button";

interface SubmitBtnProps {
  title: string;
}

const SubmitBtn = ({ title }: SubmitBtnProps) => {
  return (
    <Button className="w-full h-11" type="submit">
      {title}
    </Button>
  );
};

export default SubmitBtn;
