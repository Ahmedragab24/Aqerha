import { AuthenticationServiceType } from "@/types/AuthenticationService";
import Image from "next/image";
import Link from "next/link";

interface AuthenticationServicesCardProps {
  AuthenticationService: AuthenticationServiceType;
}

const AuthenticationServicesCard = ({
  AuthenticationService,
}: AuthenticationServicesCardProps) => {
  const { name, icon } = AuthenticationService;

  return (
    <Link
      href={"/"}
      className={
        "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md"
      }
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={icon} alt={name} width={80} height={80} />

        <h2 className="text-xl font-semibold duration-300 group-hover:text-primary group-hover:drop-shadow-sm">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default AuthenticationServicesCard;
