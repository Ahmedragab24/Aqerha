"use client";

import { Tabs } from "@/app/(pages)/profile/page";
import LogoUpload from "@/components/molecules/uploads/UploadLogo";
import { Card } from "@/components/ui/card";
import { MembershipType } from "@/types/Membership";
import { ProfileType } from "@/types/Profile";
import { LockKeyhole, Phone, Trash2, User } from "lucide-react";
import React from "react";

interface TabsType {
  value: "accountInfo" | "changePassword" | "changePhone" | "deleteAccount";
  nameKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  type: (MembershipType | "All")[];
}

const tabs: TabsType[] = [
  {
    value: "accountInfo",
    nameKey: "المعلومات الشخصية",
    icon: User,
    type: ["All"],
  },
  {
    value: "changePassword",
    nameKey: "تغيير كلمة المرور",
    icon: LockKeyhole,
    type: ["All"],
  },
  {
    value: "changePhone",
    nameKey: "تغيير رقم الهاتف",
    icon: Phone,
    type: ["All"],
  },

  {
    value: "deleteAccount",
    nameKey: "حذف الحساب",
    icon: Trash2,
    type: ["All"],
  },
];

interface Props {
  userData: ProfileType | undefined;
  activeTab: string;
  setActiveTab: (tab: Tabs) => void;
}

const TabsAccountCard = ({ activeTab, setActiveTab, userData }: Props) => {
  return (
    <Card className="bg-white shadow-2xl rounded-3xl py-6">
      <div className="flex flex-col gap-4">
        <LogoUpload image={userData?.profile?.image || ""} />
        <div className="text-center">
          <h3 className="text-xl font-semibold">{userData?.name}</h3>
          <h5 className="text-md text-gray-400">{userData?.email}</h5>
          <span className="text-sm text-gray-400 font-semibold">
            {userData?.phone}
          </span>
        </div>

        <nav className="space-y-2">
          {tabs
            .filter(
              (tab) =>
                tab.type.includes("All") ||
                (userData?.type &&
                  tab.type.includes(
                    (userData.membership_type as MembershipType) || "All"
                  ))
            )
            .map(({ icon, nameKey, value }) => (
              <div
                key={value}
                className={`w-full justify-start duration-200 text-md flex items-center gap-1 px-4 py-2 cursor-pointer hover:bg-gray-200
        ${
          activeTab === value &&
          "bg-gray-200 text-primary border-e-4 border-primary-dark"
        }
        ${value === "deleteAccount" ? "text-red-800" : ""}`}
                onClick={() => setActiveTab(value as Tabs)}
              >
                {icon &&
                  React.createElement(icon, { className: "mx-2 h-4 w-4" })}
                <span>{nameKey}</span>
              </div>
            ))}
        </nav>
      </div>
    </Card>
  );
};

export default TabsAccountCard;
