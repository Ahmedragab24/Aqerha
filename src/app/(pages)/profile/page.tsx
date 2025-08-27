"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useGetProfileQuery } from "@/store/services/Profile";
import { Loader } from "lucide-react";
import TabsAccountCard from "@/components/organisms/tabsContent/TabsAccountCard";
import ProfileForm from "@/components/organisms/forms/Auth/ProfileForm";
import ChangePasswordForm from "@/components/organisms/forms/Auth/ChangePasswordForm";
import ChangePhoneForm from "@/components/organisms/forms/Auth/ChangePhoneForm";
import { RegisterType } from "@/types/Register";
import OtpForm from "@/components/organisms/forms/Auth/OtpForm";
import DeleteAccount from "@/components/templates/DeleteAccount";

export type Tabs =
  | "accountInfo"
  | "changePassword"
  | "changePhone"
  | "deleteAccount";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("accountInfo");
  const { data: userData, isLoading } = useGetProfileQuery();
  const [type, setType] = useState<RegisterType>("ChangPhone");
  const [phone, setPhone] = useState<string>(userData?.data?.phone || "");

  const handleTabChange = (value: string) => {
    setActiveTab(value as Tabs);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center gap-2 justify-center">
        <Loader className="h-10 w-10 animate-spin" />
        <h2 className="text-xl md:text-2xl font-medium">جاري التحميل...</h2>
      </div>
    );
  }

  if (!userData?.data) {
    return null;
  }

  return (
    <div className="Container pt-24 mb-10 ">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10">
        {/* Sidebar - 1/4 width on desktop */}
        <div className="lg:col-span-3 sticky top-24 h-fit">
          <TabsAccountCard
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            userData={userData.data}
          />
        </div>

        {/* Main Content Area - 3/4 width on desktop */}
        <div className="lg:col-span-9">
          <Card className="bg-white shadow-2xl rounded-3xl px-8">
            <Tabs
              defaultValue="accountInfo"
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
              dir="rtl"
            >
              <TabsContent value="accountInfo" className="mt-6">
                <ProfileForm userData={userData.data} />
              </TabsContent>

              <TabsContent value="changePassword" className="mt-6">
                <ChangePasswordForm />
              </TabsContent>

              <TabsContent value="changePhone" className="mt-6">
                {type === "ChangPhone" && (
                  <ChangePhoneForm setPhone={setPhone} setType={setType} />
                )}
                {type === "Otp" && <OtpForm phone={phone} setType={setType} />}
              </TabsContent>

              <TabsContent value="deleteAccount" className="mt-6">
                <DeleteAccount />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
