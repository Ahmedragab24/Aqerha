"use client";

import ContactUsForm from "@/components/organisms/forms/ContactUsForm";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetFileAndInfoQuery } from "@/store/services/CompanyInfo";

const ContactPage = () => {
  const { data } = useGetFileAndInfoQuery();
  const PhoneCompany = data?.data?.Whatapp;

  return (
    <main className="pt-28 mb-16">
      <div className="space-y-10">
        <div className="Container">
          <div className="border border-gray-300 rounded-2xl p-10">
            <h3 className="text-lg md:text-2xl text-gray-500 font-medium">
              اتصل بنا
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-2xl md:text-4xl text-primary-dark font-bold">
                  نحن معكم حتى نجد أفضل بيت
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-500">
                  تواصلوا معنا
                </h2>

                <div className="flex items-center gap-2">
                  <Link href={`https://wa.me/${PhoneCompany}`} target="_blank">
                    <Image
                      src="/Icons/whatsapp.svg"
                      alt="whatsapp"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link
                    href={`https://www.instagram.com/${data?.data?.Whatapp}`}
                    target="_blank"
                  >
                    <Image
                      src="/Icons/instagram.svg"
                      alt="whatsapp"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

                <h4 className="text-sm md:text-lg text-gray-500">
                  دعم على مدار ٢٤ ساعة
                </h4>

                <Link href={"tel:" + PhoneCompany}>
                  <Button size={"lg"} className="h-14 !px-16">
                    {PhoneCompany}
                    <Image
                      src="/Icons/call.svg"
                      alt="whatsapp"
                      width={30}
                      height={30}
                    />
                  </Button>
                </Link>
              </div>

              <ContactUsForm />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[20vh] md:h-[60vh]">
          <Image src="/Images/ContactUs Map.jpg" alt="map" fill />

          <div className="hidden md:flex relative justify-center  md:top-1/2 md:-translate-y-1/2">
            <Card className="rounded-none md:py-16">
              <CardContent className="flex flex-col justify-center text-center items-center gap-4">
                <h3 className="text-lg">المكتب الرئيسي لعقرها</h3>
                <h4 className="max-w-[205px] text-md text-gray-700">
                  مدينة الرياض، شارع الملك عبد الله، مبنى إداري الفهد، الطابق ٢
                </h4>
              </CardContent>
            </Card>
            <Card className="bg-primary text-white rounded-none md:py-16 md:px-6">
              <CardContent className="flex flex-col justify-center items-center gap-4">
                <Image
                  src="/Icons/locationWhite.svg"
                  alt="location"
                  width={30}
                  height={30}
                />
                <h2>البحث عبر خرائط جوجل</h2>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:hidden flex relative justify-center  md:top-1/2 md:-translate-y-1/2">
          <Card className="rounded-none md:py-16">
            <CardContent className="flex flex-col justify-center text-center items-center gap-4">
              <h3 className="text-lg">المكتب الرئيسي لعقرها</h3>
              <h4 className="max-w-[205px] text-md text-gray-700">
                مدينة الرياض، شارع الملك عبد الله، مبنى إداري الفهد، الطابق ٢
              </h4>
            </CardContent>
          </Card>
          <Card className="bg-primary text-white rounded-none md:py-16 md:px-6">
            <CardContent className="flex flex-col justify-center text-center items-center gap-4">
              <Image
                src="/Icons/locationWhite.svg"
                alt="location"
                width={30}
                height={30}
              />
              <h2>البحث عبر خرائط جوجل</h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
