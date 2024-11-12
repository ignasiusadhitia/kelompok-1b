import React from "react";
import Typography from "./Typography";
export default function AboutUsSection() {
  return (
    <section className="bg-off-white ">
      <div className="flex px-40 py-20">
        <div className="">
          <img
            src="src/assets/AssetsAboutPages/Mask group.png"
            alt="About Us"
            className="w-[40rem]"
          />
        </div>
        <div className="ps-10">
          <Typography
            variant="strong"
            color="text-peach-red-100"
            className="mb-2 font-bold"
          >
            \About Us\
          </Typography>
          <Typography
            variant="h2"
            color="text-dark-blue-100"
            className="text-5xl mb-4 mt-4"
          >
            One of the Fastest Way to Business Growth
          </Typography>
          <Typography variant="bodycopy" className="text-xl leading-6 ">
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout.
            The point of <br /> using Lorem Ipsum is that it has a more-or-less
            normal distribution <br /> of letters, as opposed.
          </Typography>
          <div className="flex bg-[#ffffff] gap-5 px-3 py-2 rounded-[10px] mt-5">
            <div className="bg-off-white px-3 py-2 rounded-[10px] ">
              <img
                src="src/assets/AssetsAboutPages/Vector.svg"
                className="w-[25px]"
              />
            </div>
            <div>
              <Typography variant="strong" color="text-dark-blue-100" className="text-lg">Get Instant Professional Advice</Typography>
              <p>
                Ready to Help: <a href="tel:+1356787897" className="text-peach-red-100 font-semibold">+1 356 678 7897</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
