"use client";

import { BellRing } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  useGetAllNotificationsQuery,
  useGetNotificationsUnreadQuery,
} from "@/store/services/Notifications";
import { useNotificationSpecificMarkReadMutation } from "@/store/services/Notifications";
import { NotificationType } from "@/types/Notifications";
import NotificationCard from "@/components/molecules/cards/NotificationCard";
import { getAuthTokenClient } from "@/lib/auth/auth-client";
import RegisterDialog from "../Popups/RegisterDialog";

interface NavLargeScreenProps {
  isScrolled: boolean;
  navbarBg: boolean;
}

const Notifications = ({ isScrolled, navbarBg }: NavLargeScreenProps) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "read">("all");
  const { data, refetch } = useGetAllNotificationsQuery();
  const AllNotifications: NotificationType[] = data?.notifications || [];

  const { data: notificationsUnRead, refetch: refetchUnread } =
    useGetNotificationsUnreadQuery();
  const NotificationsUnreadData = notificationsUnRead?.data;

  const [MarkNotificationRead] = useNotificationSpecificMarkReadMutation();
  const token = getAuthTokenClient();

  const handleMarkRead = async (id: string) => {
    try {
      await MarkNotificationRead(id).unwrap();
      await Promise.all([refetch(), refetchUnread()]);
    } catch (err) {
      console.error("Mark read failed", err);
    }
  };

  return (
    <div>
      {token ? (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"noneBg"}
              className="relative !p-0 !m-0"
              suppressHydrationWarning
            >
              <BellRing
                className={`fill-primary text-primary !w-6 !h-6 ${
                  isScrolled || navbarBg
                    ? "text-foreground fill-primary"
                    : "text-primary-light fill-primary-light"
                }`}
              />

              {/* Red notification dot */}
              {NotificationsUnreadData &&
                NotificationsUnreadData?.countUnreadNotifications > 0 && (
                  <span className="absolute top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-fit md:w-lg p-0 shadow-lg border border-gray-200 rtl"
            align="end"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-center">الإشعارات</h3>
            </div>

            {/* Filter Buttons */}
            <div className="p-4 pb-2">
              <div className="flex gap-2">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("all")}
                  className={`flex-1 ${
                    activeFilter === "all"
                      ? "bg-green-700 hover:bg-green-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  الكل
                </Button>
                <Button
                  variant={activeFilter === "read" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter("read")}
                  className={`flex-1 ${
                    activeFilter === "read"
                      ? "bg-green-700 hover:bg-green-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  المقروءة
                </Button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="px-4 pb-4 max-h-80 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {activeFilter === "all"
                  ? AllNotifications.map((n) => (
                      <NotificationCard
                        key={n.id}
                        notification={n}
                        onClick={() => handleMarkRead(n.id)}
                      />
                    ))
                  : AllNotifications.filter((n) => n.read_at).map((n) => (
                      <NotificationCard key={n.id} notification={n} />
                    ))}
              </div>

              {AllNotifications.length === 0 && (
                <p className="text-center py-4">لا يوجد إشعارات</p>
              )}
            </div>

            {/* View All Link */}
            <div className="border-t border-gray-200 p-4">
              <Link href={"/notifications"}>
                <Button variant={"link"}>عرض الكل</Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <RegisterDialog>
          <Button
            variant={"noneBg"}
            className="relative !p-0 !m-0"
            suppressHydrationWarning
          >
            <BellRing
              className={`fill-primary text-primary !w-6 !h-6 ${
                isScrolled || navbarBg
                  ? "text-foreground fill-primary"
                  : "text-primary-light fill-primary-light"
              }`}
            />
          </Button>
        </RegisterDialog>
      )}
    </div>
  );
};

export default Notifications;
