"use client";

import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useDeleteNotificationMutation } from "@/store/services/Notifications";
import { ErrorType } from "@/types/errors";
import { NotificationType } from "@/types/Notifications";
import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";
import { Trash2 } from "lucide-react";
import React from "react";

interface Props {
  notification: NotificationType;
  onClick?: () => void;
}

const NotificationCard = ({ notification, onClick }: Props) => {
  const [DeleteNotification] = useDeleteNotificationMutation();

  const isUnread = !notification.read_at;
  const title = notification.data.title_ar;
  const message = notification.data.message_ar;
  const userName = notification.data.user_name;
  const createdTime = formatDistanceToNow(new Date(notification.created_at), {
    addSuffix: true,
    locale: ar,
  });

  const handleDeleteNotification = async () => {
    try {
      await DeleteNotification(notification.id).unwrap();
      showSuccessToast({ title: "تم حذف الإشعار" });
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({
        title: err?.data?.message || "حدث خطأ أثناء حذف الإشعار",
      });
    }
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition hover:bg-gray-50 ${
        isUnread ? "bg-gray-100" : "bg-white"
      } border border-gray-200`}
    >
      {/* Avatar Section */}
      <div className="relative flex-shrink-0">
        <Avatar className="h-12 w-12">
          <AvatarImage src={"/placeholder.svg"} alt={userName} />
          <AvatarFallback className="bg-primary text-white font-semibold">
            {userName?.charAt(0) || "?"}
          </AvatarFallback>
        </Avatar>
        {isUnread && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 text-right">
        <div className="flex justify-between items-start mb-1">
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-500">{createdTime}</div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-2">{message}</p>

        <div className="flex justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            {new Date(notification.created_at).toLocaleDateString("ar-SA")}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:bg-red-100"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteNotification();
            }}
          >
            <Trash2 className="w-4 h-4" />
            <span className="ml-1">حذف</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
