import { AuctionType } from "@/types/Actions";
import Image from "next/image";
import Link from "next/link";

interface AuctionCardProps {
  Auction: AuctionType;
}

const AuctionCard = ({ Auction }: AuctionCardProps) => {
  const { id, image } = Auction;
  return (
    <Link
      href={`/auctions/${id}`}
      className="relative w-auto h-[220px] overflow-hidden rounded-xl duration-300 group hover:shadow-md"
    >
      <Image
        src={image}
        alt="Action"
        fill
        loading="lazy"
        className="duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default AuctionCard;
