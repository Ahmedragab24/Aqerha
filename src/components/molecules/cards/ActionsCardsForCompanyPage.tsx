import { Card } from "@/components/ui/card";
import Image from "next/image";

const ActionsCardsForCompanyPage = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card
        className={
          "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/الصيانة والترميم Maintenance.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            الصيانة والترميم
          </h2>
        </div>
      </Card>

      <Card
        className={
          "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/ic_sharp-manage-history.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            إدارة فرق العمل
          </h2>
        </div>
      </Card>

      <Card
        className={
          "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/ConstructionServies.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            تنفيذ البناء
          </h2>
        </div>
      </Card>

      <Card
        className={
          "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/bx_brush.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            التشطيب النهائي
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default ActionsCardsForCompanyPage;
