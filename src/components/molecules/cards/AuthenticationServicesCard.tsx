import DalAuthenticationServicesDialog from "@/components/organisms/Popups/DalAuthenticationServicesDialog";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";
import { AuthenticationIconData } from "@/constants/cards/AuthenticationServices";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { AuthenticationServiceType } from "@/types/AuthenticationService";
import Image from "next/image";

interface AuthenticationServicesCardProps {
  AuthenticationService: AuthenticationServiceType;
}

const AuthenticationServicesCard = ({
  AuthenticationService,
}: AuthenticationServicesCardProps) => {
  const { name } = AuthenticationService;
  const token = getAuthTokenClient();

  const Icon = AuthenticationIconData.find((item) => item.name === name);

  return (
    <>
      {token ? (
        <DalAuthenticationServicesDialog Service={AuthenticationService}>
          <div
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src={Icon?.icon || ""}
                alt={name}
                width={80}
                height={80}
                className="w-10 h-10 md:w-16 md:h-16"
              />

              <h2 className="text-xs md:text-sm lg:text-xl text-center font-semibold duration-300 group-hover:text-primary group-hover:drop-shadow-sm">
                {name}
              </h2>
            </div>
          </div>
        </DalAuthenticationServicesDialog>
      ) : (
        <RegisterDialog>
          <div
            className={
              "bg-secondary hover:bg-primary/20 rounded-md py-4 md:py-10 px-4 duration-300 group shadow-sm hover:shadow-md cursor-pointer"
            }
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src={Icon?.icon || ""}
                alt={name}
                width={80}
                height={80}
                className="w-10 h-10 md:w-16 md:h-16"
              />

              <h2 className="text-xs md:text-sm lg:text-xl text-center font-semibold duration-300 group-hover:text-primary group-hover:drop-shadow-sm">
                {name}
              </h2>
            </div>
          </div>
        </RegisterDialog>
      )}
    </>
  );
};

export default AuthenticationServicesCard;
