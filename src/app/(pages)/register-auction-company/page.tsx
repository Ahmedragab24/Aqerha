import SectionTitle from "../../../components/atoms/title/SectionTitle";
import RegisterAuctionCompanyForm from "../../../components/organisms/forms/RegisterAuctionCompanyForm";
import React from "react";

const RegisterAuctionCompanyPage = () => {
  return (
    <main className="Container pt-28 mb-16 space-y-10">
      <SectionTitle Title="التسجيل كشركة مزادات" className="text-center" />

      <div>
        <RegisterAuctionCompanyForm />
      </div>
    </main>
  ); 
};

export default RegisterAuctionCompanyPage;
