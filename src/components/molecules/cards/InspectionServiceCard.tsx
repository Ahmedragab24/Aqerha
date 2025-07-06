import { InspectionServiceType } from "@/types/InspectionServices";
import Image from "next/image";
import Link from "next/link";

interface InspectionServiceCardProps {
  InspectionService: InspectionServiceType;
}

const InspectionServiceCard = ({
  InspectionService,
}: InspectionServiceCardProps) => {
  const { id, name, color, icon } = InspectionService;

  return (
    <Link
      href={`/examination&Evaluation#${id}`}
      className={
        "rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md"
      }
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={icon} alt={name} width={100} height={100} />

        <h2 className="text-xl font-semibold duration-300 group-hover:text-primary group-hover:drop-shadow-sm">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default InspectionServiceCard;
