"use client";

import { BellRing } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="relative">
            <BellRing className="fill-primary text-primary !w-6 !h-6" />
            {/* Red notification dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-fit md:w-lg p-0 shadow-lg border border-gray-200"
          align="end"
          dir="rtl"
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
          <div className="px-4 pb-4">
            <div className="space-y-3">
              {/* Notification Item */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-100 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    قام شخص بمراجعة الآن
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    اطلع على آخر تحديث لأعلى مزايدة.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">الآن</p>
                </div>
              </div>

              {/* Additional notification items can be added here */}
            </div>
          </div>

          {/* View All Link */}
          <div className="border-t border-gray-200 p-4">
            <Link href={"/notifications"}>
              <Button variant={"link"}>عرض الكل</Button>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Notifications;
