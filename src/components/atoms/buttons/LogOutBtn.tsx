"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useUserLogOutMutation } from "@/store/services/Auth";
import {
  AUTH_CHANGE_EVENT,
  getAuthTokenClient,
  removeAuthTokenClient,
} from "@/lib/auth/auth-client";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const LogOutBtn = ({ setIsOpen }: Props) => {
  const [LogOut] = useUserLogOutMutation();

  const handleLogOut = async () => {
    setIsOpen(false);
    const token = getAuthTokenClient();

    try {
      await LogOut(token).unwrap();
      removeAuthTokenClient();
      showSuccessToast({ title: "تم تسجيل خروجك" });
      setTimeout(() => {
        window.location.reload();
      }, 1100);
    } catch (error) {
      console.log(error);
      showFailedToast({
        title: "فشل تسجيل الخروج من الخادم، لكن تم حذف الجلسة محليًا",
      });
    } finally {
      window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 py-1 text-xs md:text-sm rounded-sm text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent font-normal"
        >
          <LogOutIcon className="h-2.5 w-2.5 md:h-4 md:w-4" />
          تسجيل الخروج
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        dir="rtl"
        className="md:w-[400px] flex flex-col justify-center items-center"
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            تأكيد تسجيل الخروج
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            هل أنت متأكد أنك تريد تسجيل الخروج من حسابك؟
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row items-center gap-4">
          <AlertDialogCancel>إلغاء</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={handleLogOut}
          >
            تسجيل الخروج
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOutBtn;
