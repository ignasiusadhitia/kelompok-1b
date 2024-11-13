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
      <div className="bg-dark-blue-10 pt-10 pb-20">
        <TeamSection maxMembers={4} />
      </div>
    </div>
  );
};

export default Home;
