import Image from "next/image";
import Link from "next/link";

interface InspectionService {
  id: number;
  title: string;
  image: string;
  color: string;
}

interface Props {
  InspectionService: InspectionService;
}

const InspectionServiceCard = ({ InspectionService }: Props) => {
  const { id, title, image, color } = InspectionService;

  return (
    <Link
      key={id}
      href={`/Inspection-services#${id}`}
      className={`rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md 
       ${color}
        `}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="!h-[50px] md:!h-[100px]"
        />

        <h2
          className="text-[8px] md:text-sm lg:text-xl text-center font-medium md:font-semibold 
             duration-300 group-hover:text-primary group-hover:drop-shadow-sm 
             break-words whitespace-normal leading-snug"
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default InspectionServiceCard;
