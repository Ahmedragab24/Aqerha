import { SaudiRiyal } from "lucide-react";

interface RiyalProps {
  className?: string;
}

const Riyal = ({ className }: RiyalProps) => {
  return <SaudiRiyal className={`!w-4 !h-4 md:!w-5 md:!h-5 ${className}`} />;
};

export default Riyal;
