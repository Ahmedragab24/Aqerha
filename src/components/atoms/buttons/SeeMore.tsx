import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface SeeMoreProps {
  className?: string;
  title?: string;
  path: string;
}

const SeeMore = ({ title = "رؤية المزيد", className, path }: SeeMoreProps) => {
  return (
    <Link
      href={path}
      className="flex items-center gap-1 text-sm duration-200 group text-gray-500 hover:text-gray-600 cursor-pointer py-2"
    >
      <h5 className={`${className} `}>{title}</h5>
      <ArrowLeft className="w-4 h-4 duration-200 group-hover:-translate-x-1" />
    </Link>
  );
};

export default SeeMore;
