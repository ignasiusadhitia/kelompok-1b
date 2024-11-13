import React from "react";
import visionIcon from "../assets/what-we-do-1.png";
import goalIcon from "../assets/what-we-do-2.png";
import heroImg from "../assets/what-we-do-hero.png";
import Typography from "./Typography";

const WhatWeDoSection = () => {
  return (
    <section className="bg-off-white ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 mx-auto">
        {/* image */}
        <div>
          <img src={heroImg} alt="what We Do" className="w-full" />
        </div>
        {/* image end */}

        <div>
          {/* tagline */}
          <Typography
            variant="strong"
            color="text-peach-red-100"
            className="mb-2 font-bold"
          >
            \ What We Do \
          </Typography>
          {/* tagline end */}

          {/* title */}
          <Typography
            variant="h2"
            color="text-dark-blue-100"
            className="text-5xl mb-4 mt-4"
          >
            We Develope Product That People Love to Use.
          </Typography>
          {/* title end */}

          {/* description */}
          <Typography variant="bodycopy" className="text-lg leading-7 mt-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, of a page when looking at its
            layout. The point of using Lorem Ipsum is that of a page when
            looking at its layout. The point of using Lorem Ipsum is thatLorem
            Ipsum is that it has a more-or-less normalLorem IpsumLorem Ipsum
            distribution of letters, as opposed
          </Typography>
          {/* description end */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-7">
              <div className="p-3.5 bg-peach-red-10 rounded-[10px] w-fit">
                <img src={visionIcon} alt="icon" className="w-12 " />
              </div>

              <div>
                <Typography
                  variant="strong"
                  color="text-peach-red-100"
                  className="text-lg"
                >
                  Our Vision
                </Typography>
                <p className="text-sm text-dark-blue-100">
                  It is a long established fact that
                </p>
              </div>
            </div>

            <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-7">
              <div className="p-3.5 bg-peach-red-10 rounded-[10px] w-fit">
                <img src={goalIcon} alt="icon" className="w-12 " />
              </div>

              <div className="">
                <Typography
                  variant="strong"
                  color="text-peach-red-100"
                  className="text-lg"
                >
                  Our Vision
                </Typography>
                <p className="text-sm text-dark-blue-100">
                  It is a long established fact that
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
