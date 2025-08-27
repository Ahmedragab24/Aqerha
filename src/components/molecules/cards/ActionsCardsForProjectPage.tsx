import { ProjectType } from "@/types/projects";
import PaymentPlansDialog from "../../organisms/Popups/PaymentPlansDialog";
import ProjectPlanDialog from "../../organisms/Popups/ProjectPlanDialog";
import { Card } from "../../ui/card";
import Image from "next/image";
import LocationPropertyDialog from "@/components/organisms/Popups/LocationPropertyDialog";

interface Props {
  project: ProjectType | undefined;
}

const ActionsCardsForProjectPage = ({ project }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectPlanDialog project={project}>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
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

      <LocationPropertyDialog project={project}>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
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
      </LocationPropertyDialog>

      <PaymentPlansDialog>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
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
