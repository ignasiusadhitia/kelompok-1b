import React from "react";
import Typography from "./Typography";
import MaskGroup from "../assets/AssetsAboutPages/MaskGroup.png";
import Icon from "../assets/AssetsAboutPages/Icon.svg";
export default function AboutUsSection() {
  return (
    <section className="bg-off-white ">
      <div className="container grid grid-cols-2 gap-10 py-20 mx-auto">
        {/* image */}
        <div>
          <img src={MaskGroup} alt="About Us" className="w-full" />
        </div>
        {/* image end */}

        <div>
          {/* tagline */}
          <Typography
            variant="strong"
            color="text-peach-red-100"
            className="mb-2 font-bold"
          >
            \About Us\
          </Typography>
          {/* tagline end */}

          {/* title */}
          <Typography
            variant="h2"
            color="text-dark-blue-100"
            className="text-5xl mb-4 mt-4"
          >
            One of the Fastest Way to Business Growth
          </Typography>
          {/* title end */}

          {/* description */}
          <Typography variant="bodycopy" className="text-lg leading-7 mt-7">
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout.
            The point of <br /> using Lorem Ipsum is that it has a more-or-less
            normal distribution <br /> of letters, as opposed.
          </Typography>
          {/* description end */}

          <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-7">
            <div className="bg-off-white px-3 py-2 rounded-[10px] ">
              <img src={Icon} className="w-[25px]" />
            </div>

            {/* contact */}
            <div className="">
              <Typography
                variant="strong"
                color="text-dark-blue-100"
                className="text-lg"
              >
                Get Instant Professional Advice
              </Typography>
              <p>
                Ready to Help:{" "}
                <a
                  href="tel:+1356787897"
                  className="text-peach-red-100 font-semibold"
                >
                  +1 356 678 7897
                </a>
              </p>
            </div>
            {/* contact end */}
          </div>
        </div>
      </div>
    </section>
  );
}
