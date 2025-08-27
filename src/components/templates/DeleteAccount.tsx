"use client";

import { Button } from "@/components/ui/button";
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
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { removeData } from "@/store/features/Auth/userDataSlice";
import { useDeleteAccountMutation } from "@/store/services/Auth";
import {
  getAuthTokenClient,
  removeAuthTokenClient,
} from "@/lib/auth/auth-client";
import { showSuccessToast } from "../Successfully/DoneToast";
import { ErrorType } from "@/types/errors";
import { showFailedToast } from "../Error&NotFound/FailedToast";

const DeleteAccount = () => {
  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
  const dispatch = useAppDispatch();

  const handleDeleteAccount = async () => {
    const token = getAuthTokenClient() || "";
    try {
      const res = await deleteAccount(token).unwrap();
      dispatch(removeData());
      removeAuthTokenClient();
      showSuccessToast({ title: `${res?.message}` });

      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({ title: `${err?.data?.message}` });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center text-center justify-center rounded-lg border border-destructive/20 bg-destructive/5 py-20 px-4">
        <h3 className="text-xl font-semibold text-destructive">حذف الحساب</h3>
        <p className="text-md text-gray-600 mt-1">هل أنت متأكد من حذف حسابك؟</p>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              className="w-full md:w-[30%] h-12 mt-4"
              size="sm"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              حذف الحساب
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="flex flex-col items-center !justify-center text-center gap-4">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-destructive text-center">
                تأكيد الحذف
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                <p className="font-medium text-gray-600">
                  هل أنت متأكد من حذف حسابك؟
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-gray-600">
                إلغاء
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteAccount}
                disabled={isLoading}
                className="bg-destructive hover:bg-destructive/90 rounded-md"
              >
                {isLoading ? "جاري الحذف..." : "تأكيد الحذف"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default DeleteAccount;
