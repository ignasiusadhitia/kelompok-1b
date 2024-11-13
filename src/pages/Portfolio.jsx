import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
import QuoteCard from "../components/QuoteCard";

const Portfolio = () => {
  return (
    <div>
      <BannerSection title={"Portfolio"} breadCrumb={"Home / Portfolio"} />
      <OurWorkSection />
      <QuoteCard />
    </div>
  );
};

export default Portfolio;
