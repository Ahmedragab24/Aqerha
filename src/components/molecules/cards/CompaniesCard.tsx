import { ContractingCompanyType } from "@/types/ContractingCompanies";
import Image from "next/image";
import Link from "next/link";

interface Props {
  Company: ContractingCompanyType;
  path: string;
}

const CompaniesCard = ({ Company, path }: Props) => {
  const {
    name,
    // city,
    // email,
    // email_verified_at,
    // id,
    // identity_id,
    // latitude,
    // location,
    // longitude,
    // membership_type,
    // nation_id,
    // phone,
    profile,
    // status,
    // type,
    // user_package_status,
  } = Company;
  return (
    <Link
      href={`${path}`}
      className="border border-gray-300 rounded-2xl py-8 px-4 group duration-300 hover:bg-secondary hover:shadow-md"
    >
      <div className="flex flex-col justify-center items-center gap-4 overflow-hidden p-1">
        <Image
          src={profile?.image || "/placeholder.svg"}
          alt={name}
          width={100}
          height={100}
          loading="lazy"
          className="rounded-xl object-fit-cover border border-gray-300 duration-300 group-hover:scale-105"
        />

        <h3 className="duration-300 group-hover:drop-shadow-sm group-hover:text-primary">
          {profile?.name}
        </h3>
      </div>
    </Link>
  );
};

export default CompaniesCard;
