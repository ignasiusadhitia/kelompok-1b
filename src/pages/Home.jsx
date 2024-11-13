import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import OurProcessCardSection from "../components/OurProcessCardSection";
import TeamSection from "../components/TeamCard";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <OurProcessCardSection />
      <TeamSection maxMembers={4} />
    </div>
  );
};

export default Home;
