import { Building } from "lucide-react";
import Image from "next/image";

interface DataNotFoundProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const DataNotFount = ({
  title,
  description,
  icon = <Building />,
}: DataNotFoundProps) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center 
      text-center
    "
    >
      <div
        className="
        w-16 h-16 sm:w-20 sm:h-20 
        rounded-full 
        bg-muted 
        flex items-center justify-center 
        mb-4 sm:mb-6
      "
      >
        <Image src={`${icon}`} alt={`${title}`} width={50} height={50} />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground max-w-md">
        {description}
      </p>
    </div>
  );
};

export default DataNotFount;
