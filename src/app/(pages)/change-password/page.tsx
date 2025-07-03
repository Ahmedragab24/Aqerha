import SectionTitle from "@/components/atoms/title/SectionTitle";
import ChangePasswordForm from "@/components/organisms/forms/ChangePasswordForm";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="تغيير كلمة المرور" className="text-center" />

        <div className="md:max-w-xl mx-auto">
          <ChangePasswordForm />
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordPage;
