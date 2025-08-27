"use client";

import { useAppSelector } from "@/store/hooks";
import SectionTitle from "../../../components/atoms/title/SectionTitle";
import ChangePhoneForm from "../../../components/organisms/forms/Auth/ChangePhoneForm";
import React, { useState } from "react";
import { RegisterType } from "@/types/Register";

const ChangePhonePage = () => {
  const { phone } = useAppSelector((state) => state.userData.userData);
  const [, setPhoneNumber] = useState(phone);
  const [, setType] = useState<RegisterType>("ChangPhone");

  return (
    <main className="Container pt-28 mb-16">
      <div className="space-y-16">
        <SectionTitle Title="تغيير رقم الجوال" className="text-center" />

        <div className="md:max-w-xl mx-auto">
          <ChangePhoneForm setPhone={setPhoneNumber} setType={setType} />
        </div>
      </div>
    </main>
  );
};

export default ChangePhonePage;
