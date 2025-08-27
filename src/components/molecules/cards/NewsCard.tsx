import { NewType } from "@/types/News";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  News: NewType;
}

const NewsCard = ({ News }: NewsCardProps) => {
  const { id, image, title, description } = News;
  return (
    <Link
      href={`/news/${id}`}
      className="bg-secondary rounded-2xl p-2 group duration-300 shadow-sm hover:shadow-md"
    >
      <div className="relative w-full h-[180px] overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 py-4">
        <h2>{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </Link>
  );
};

export default NewsCard;
