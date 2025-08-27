import { Card } from "../../ui/card";
import Image from "next/image";

const ActionsCardsForOfficePage = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card
        className={
          "bg-secondary hover:bg-primary/20 rounded-md py-10 px-4 duration-300 group shadow-sm hover:shadow-md border-none cursor-pointer"
        }
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/Icons/mdi_account-question-outline.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            استشارات هندسية
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
            إدارة المشاريع
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
            src="/Icons/clarity_design-line.svg"
            alt="tabler_report"
            width={70}
            height={70}
          />

          <h2 className="text-xl font-semibold duration-300 text-primary group-hover:text-primary/80 group-hover:drop-shadow-sm">
            تصميم هندسي
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
            تصميم معماري
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default ActionsCardsForOfficePage;
