"use client";

import QuickChatDialog from "@/components/organisms/chats/QuickChatDialog";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import RegisterDialog from "@/components/organisms/Popups/RegisterDialog";

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
  const token = getAuthTokenClient();

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
            className="w-3 h-3 md:w-5 md:h-5"
          />
          {isText && <h4 className="text-[10px] md:text-sm">اتصال</h4>}
        </Link>
      </Button>

      <Button
        variant={"secondary"}
        className={`md:!p-6 border-none hover:bg-secondary/80 shadow-md ${classNameBtns}`}
      >
        <Link
          href={`https://wa.me/${whatsapp}`}
          className="flex items-center gap-2"
        >
          <Image
            src="/Icons/basil_whatsapp-outline.svg"
            alt="Real Estate"
            width={25}
            height={25}
            className="w-3 h-3 md:w-5 md:h-5"
          />
          {isText && <h4 className="text-[10px] md:text-sm">واتساب</h4>}
        </Link>
      </Button>

      {token ? (
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
      ) : (
        <RegisterDialog>
          <Button
            variant={"secondary"}
            className={`md:!p-6 border-none hover:bg-secondary/80 shadow-md ${classNameBtns}`}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/Icons/proicons_chat.svg"
                alt="Chat"
                width={25}
                height={25}
                className="w-3 h-3 md:w-5 md:h-5"
              />
              {isText && <h4 className="text-[10px] md:text-sm">محادثة</h4>}
            </div>
          </Button>
        </RegisterDialog>
      )}
    </div>
  );
};

export default CallUserBtns;
