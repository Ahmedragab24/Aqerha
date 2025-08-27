"use client";

import {
  useDeleteAllNotificationsMutation,
  useGetAllNotificationsQuery,
  useNotificationsMarkAllReadMutation,
} from "@/store/services/Notifications";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import NotificationNotFount from "../../../components/Error&NotFound/NotificationNotFount";
import DataNotFount from "@/components/Error&NotFound/DataNotFount";
import { BellRing, Trash2 } from "lucide-react";
import GroupCardsSkeletons from "@/components/molecules/Skeletons/GroupCardsSkeletons";
import { NotificationType } from "@/types/Notifications";
import { useEffect } from "react";
import { showSuccessToast } from "@/components/Successfully/DoneToast";
import { showFailedToast } from "@/components/Error&NotFound/FailedToast";
import { ErrorType } from "@/types/errors";
import { Button } from "@/components/ui/button";
import NotificationCard from "@/components/molecules/cards/NotificationCard";

const NotificationsPage = () => {
  const { data, isLoading, isError } = useGetAllNotificationsQuery();
  const [ReadAll] = useNotificationsMarkAllReadMutation();
  const [DeleteAll] = useDeleteAllNotificationsMutation();

  const notifications: NotificationType[] = data?.notifications || [];

  useEffect(() => {
    const ReadAllNotifications = async () => {
      try {
        await ReadAll().unwrap();
      } catch (error) {
        console.error("خطأ أثناء تعليم الإشعارات كمقروءة:", error);
      }
    };
    ReadAllNotifications();
  }, [ReadAll]);

  const DeleteAllNotifications = async () => {
    try {
      await DeleteAll().unwrap();
      showSuccessToast({
        title: "تم حذف جميع الإشعارات",
      });
    } catch (error) {
      const err = error as ErrorType;
      showFailedToast({
        title: `${err?.data?.message || "حدث خطأ أثناء حذف الإشعارات"}`,
      });
    }
  };

  return (
    <main className="Container pt-28 mb-16 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <SectionTitle Title={`الإشعارات (${notifications.length})`} />

        {notifications.length > 0 && (
          <Button
            variant={"link"}
            className="text-red-500"
            onClick={() => DeleteAllNotifications()}
          >
            <Trash2 className="w-5 h-5" />
            حذف جميع الإشعارات
          </Button>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <GroupCardsSkeletons count={4} />
        </div>
      )}

      {/* Error State */}
      {isError && !isLoading && (
        <DataNotFount
          title="حدث خطأ ما"
          description="يرجى تحديث الصفحة"
          icon={<BellRing />}
        />
      )}

      {/* Notifications List */}
      {!isLoading && !isError && notifications.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      )}

      {/* No Notifications */}
      {!isLoading && !isError && notifications.length === 0 && (
        <NotificationNotFount />
      )}
    </main>
  );
};

export default NotificationsPage;
