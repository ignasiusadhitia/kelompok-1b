import React from "react";
import Typography from "./Typography";
import { Research } from "../assets";

const OurProcessCard = () => {
  return (
    <div className="relative rounded-lg bg-dark-blue-25 p-7">
      <img src={Research} alt="icon" className="w-12 bg-white rounded-lg" />

      <Typography
        variant="h3"
        color="text-dark-blue-100"
        className="text-[20px]"
      >
        Research
      </Typography>
      <Typography variant="bodycopy">
        It is a long established fact that a reader will be distra by the
        readable content of a page.
      </Typography>
    </div>
  );
};

export default OurProcessCard;
