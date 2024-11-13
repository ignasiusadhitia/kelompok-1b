import React from "react";
import OurExperticeCardSection from "../components/OurExperticeCardSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import BannerSection from "../components/BannerSection";

const OurServices = () => {
  return (
    <div>
      <BannerSection title={"Services"} breadCrumb={"Home / Services"} />
      <WhatWeDoSection />
      <OurExperticeCardSection />
    </div>
  );
};

export default OurServices;
