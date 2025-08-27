import QuickChatDialog from "@/components/organisms/chats/QuickChatDialog";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";

interface CallUserBtnsProps {
  phone?: string;
  whatsapp?: string;
  email?: string;
  isText: boolean;
  className?: string;
  classNameBtns?: string;
  userId?: number;
  productId?: number;
}

const CallUserBtns = ({
  isText,
  phone,
  whatsapp,
  className,
  classNameBtns,
  userId,
  productId,
}: CallUserBtnsProps) => {
  return (
    <div className={`flex flex-row items-center gap-2 md:gap-4 ${className}`}>
      <Button
        variant={"secondary"}
        className={`md:!p-6 border-none hover:bg-secondary/80 shadow-md ${classNameBtns}`}
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
        className={`md:!p-6 border-none hover:bg-secondary/80 shadow-md ${classNameBtns}`}
      >
        <Link href={`tel:${whatsapp}`} className="flex items-center gap-2">
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
        className={`md:!p-6 border-none hover:bg-secondary/80 shadow-md ${classNameBtns}`}
      >
        <QuickChatDialog
          isText={isText}
          userId={userId!}
          productId={productId!}
        />
      </Button>
    </div>
  );
};

export default CallUserBtns;
