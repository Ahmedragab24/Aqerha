import { ProjectType } from "@/types/projects";
import PaymentPlansDialog from "../../organisms/Popups/PaymentPlansDialog";
import ProjectPlanDialog from "../../organisms/Popups/ProjectPlanDialog";
import { Card } from "../../ui/card";
import Image from "next/image";
import LocationPropertyDialog from "@/components/organisms/Popups/LocationPropertyDialog";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";

interface Props {
  project: ProjectType | undefined;
}

const ActionsCardsForProjectPage = ({ project }: Props) => {
  const handlerOpenBrochure = () => {
    if (!project?.proshor) {
      showFailedToast({ title: "لا يوجد ملف للعرض" });
      return;
    }
    window.open(project?.proshor, "_blank");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <ProjectPlanDialog project={project}>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md p-2 lg:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/la_pencil-ruler.svg"
              alt="tabler_report"
              width={70}
              height={70}
              className="w-8 h-8 md:w-16 md:h-16"
            />

            <h2 className="text-[10px]  md:text-xs text-center lg:text-xl font-medium lg:font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              مخطط المشروع
            </h2>
          </div>
        </Card>
      </ProjectPlanDialog>

      <Card
        onClick={handlerOpenBrochure}
        className={
          "bg-secondary hover:bg-primary/20 rounded-md p-2 lg:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwYTQzMzEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2staW1hZ2UtaWNvbiBsdWNpZGUtYm9vay1pbWFnZSI+PHBhdGggZD0ibTIwIDEzLjctMi4xLTIuMWEyIDIgMCAwIDAtMi44IDBMOS43IDE3Ii8+PHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgxOWExIDEgMCAwIDEgMSAxdjE4YTEgMSAwIDAgMS0xIDFINi41YTEgMSAwIDAgMSAwLTVIMjAiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjgiIHI9IjIiLz48L3N2Zz4="
            alt="tabler_report"
            width={70}
            height={70}
            className="w-8 h-8 md:w-16 md:h-16"
          />

          <h2 className="text-[10px]  md:text-xs text-center lg:text-xl font-medium lg:font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            البروشور
          </h2>
        </div>
      </Card>

      <LocationPropertyDialog project={project}>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md p-2 lg:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/gis_map-poi.svg"
              alt="tabler_report"
              width={70}
              height={70}
              className="w-8 h-8 md:w-16 md:h-16"
            />

            <h2 className="text-[10px] md:text-xs text-center lg:text-xl font-medium lg:font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              الموقع
            </h2>
          </div>
        </Card>
      </LocationPropertyDialog>

      <PaymentPlansDialog project={project}>
        <Card
          className={
            "bg-secondary hover:bg-primary/20 rounded-md p-2 lg:py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
          }
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/Icons/f7_money-dollar.svg"
              alt="tabler_report"
              width={70}
              height={70}
              className="w-8 h-8 md:w-16 md:h-16"
            />

            <h2 className="text-[10px] md:text-xs text-center lg:text-xl font-medium lg:font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
              خطط الدفع
            </h2>
          </div>
        </Card>
      </PaymentPlansDialog>
    </div>
  );
};

export default ActionsCardsForProjectPage;
