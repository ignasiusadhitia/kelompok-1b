import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
<<<<<<< HEAD
import QuoteCard from "../components/QuoteCard";

const Portfolio = () => {
  return (
    <div>
      <BannerSection title={"Portfolio"} breadCrumb={"Home / Portfolio"} />
=======
const Portfolio = () => {
  return (
    <div>
      {/* send props for change title and bread crumb */}
      <BannerSection title="Portofolio" breadCrumb="Home / Portofolio"  />
>>>>>>> 65c88dea33b0e3ec46a4257452bee9f5e2a5d77a
      <OurWorkSection />
      <QuoteCard />
    </div>
  );
};

export default Portfolio;
