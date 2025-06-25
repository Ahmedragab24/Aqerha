import React from "react";
import SectionTitle from "../atoms/title/SectionTitle";
import SeeMore from "../atoms/buttons/SeeMore";
import { NewsData } from "@/constants/cards/NewsData";
import NewsCard from "../molecules/cards/NewsCard";

const NewsSection = () => {
  return (
    <section className="Container space-y-10">
      <div className="flex justify-between">
        <SectionTitle Title="الأخبار" />
        <SeeMore path="/" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NewsData.map((item) => (
          <NewsCard key={item.id} News={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
