import PaymentPlansDialog from "@/components/organisms/Popups/PaymentPlansDialog";
import ProjectPlanDialog from "@/components/organisms/Popups/ProjectPlanDialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const ActionsCardsForProjectPage = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectPlanDialog>
        <Card
          className={
            "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/la_pencil-ruler.svg"
              alt="tabler_report"
              width={70}
              height={70}
            />

            <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              مخطط المشروع
            </h2>
          </div>
        </Card>
      </ProjectPlanDialog>

      <Card
        className={
          "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/gis_map-poi.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            الموقع
          </h2>
        </div>
      </Card>

      <PaymentPlansDialog>
        <Card
          className={
            "bg-secondary rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/f7_money-dollar.svg"
              alt="tabler_report"
              width={70}
              height={70}
            />

            <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              خطط الدفع
            </h2>
          </div>
        </Card>
      </PaymentPlansDialog>
    </div>
  );
};

export default ActionsCardsForProjectPage;
