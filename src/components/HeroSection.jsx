import React from "react";
import heroImage from "../assets/hero.png";
import Typography from "./Typography";

const HeroSection = () => {
  return (
    <div className="container grid grid-cols-2 mx-auto py-[50px]">
      <div className="flex flex-col justify-center mr-2">
        <Typography variant="h3" className="text-peach-red-100 mb-2.5">
          \ We Are Here \
        </Typography>
        <Typography
          variant="h1"
          className="text-dark-blue-100 mb-2.5 font-[48px]"
        >
          Better Insights For Business Growth
        </Typography>

        <button className="bg-peach-red-100 text-white py-[10px] px-[20px] rounded-md w-fit">
          View More
        </button>
      </div>
      <img src={heroImage} alt="" />
    </div>
  );
};

export default HeroSection;
