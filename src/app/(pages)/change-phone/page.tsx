"use client";

import SectionTitle from "@/components/atoms/title/SectionTitle";
import ChangePhoneForm from "@/components/organisms/forms/ChangePhoneForm";
import React from "react";

const ChangePhonePage = () => {
  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="تغيير رقم الجوال" className="text-center" />

        <div className="md:max-w-xl mx-auto">
          <ChangePhoneForm />
        </div>
      </div>
    </main>
  );
};

export default ChangePhonePage;
