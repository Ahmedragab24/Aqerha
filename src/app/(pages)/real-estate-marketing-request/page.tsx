import SectionTitle from "@/components/atoms/title/SectionTitle";
import AddAdOrRequestForm from "@/components/organisms/forms/AddAdOrRequestForm";
import React from "react";

const RealEstateMarketingRequestPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="طلب تسويق عقار" className="text-center" />

      <div className="md:max-w-2xl mx-auto">
        <AddAdOrRequestForm formType="rental" type="any" title={false} />
      </div>
    </main>
  );
};

export default RealEstateMarketingRequestPage;
