import React from "react";
import OurWorkSection from "../components/OurWorkSection";
import BannerSection from "../components/BannerSection";
const Portfolio = () => {
  return (
    <div>
      {/* send props for change title and bread crumb */}
      <BannerSection title="Portofolio" breadCrumb="Home / Portofolio"  />
      <OurWorkSection />
    </div>
  );
};

export default Portfolio;
