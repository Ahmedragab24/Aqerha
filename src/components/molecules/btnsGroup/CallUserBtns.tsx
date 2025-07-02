import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CallUserBtnsProps {
  phone?: string;
  email?: string;
  isText: boolean;
  className?: string;
  classNameBtns?: string;
}

const CallUserBtns = ({
  isText,
  phone,
  className,
  classNameBtns,
}: CallUserBtnsProps) => {
  return (
    <div className={`flex flex-row items-center gap-2 md:gap-4 ${className}`}>
      <Button
        variant={"secondary"}
        className={`md:!p-6 border-none hover:bg-secondary/80 ${classNameBtns}`}
      >
        <Link href={`tel:${phone}`} className="flex items-center gap-2">
          <Image
            src="/Icons/mingcute_phone-line.svg"
            alt="Real Estate"
            width={25}
            height={25}
          />
          {isText && <h4>اتصال</h4>}
        </Link>
      </Button>

      <Button
        variant={"secondary"}
        className={`md:!p-6 border-none hover:bg-secondary/80 ${classNameBtns}`}
      >
        <Link href={`tel:${phone}`} className="flex items-center gap-2">
          <Image
            src="/Icons/basil_whatsapp-outline.svg"
            alt="Real Estate"
            width={25}
            height={25}
          />
          {isText && <h4>واتساب</h4>}
        </Link>
      </Button>

      <Button
        variant={"secondary"}
        className={`md:!p-6 border-none hover:bg-secondary/80 ${classNameBtns}`}
      >
        <Link href={`tel:${phone}`} className="flex items-center gap-2">
          <Image
            src="/Icons/proicons_chat.svg"
            alt="Real Estate"
            width={25}
            height={25}
          />
          {isText && <h4>محادثة</h4>}
        </Link>
      </Button>
    </div>
  );
};

export default CallUserBtns;
