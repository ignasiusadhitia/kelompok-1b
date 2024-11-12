import React from "react";
import Typography from "./Typography";
import { Rectangle, Research } from "../assets";
import PropTypes from "prop-types";

const OurProcessCard = ({
  title = "Research",
  description = "It is a long established fact that a reader will be distra by the readable content of a page.",
  icon = Research,
  index = "01",
}) => {
  return (
    <div className="flex flex-col gap-5 relative rounded-md bg-dark-blue-10 p-7">
      <Typography className="text-dark-blue-25 text-[48px] font-[800] leading-[50px] absolute top-[-5px] right-2.5 ">
        {index}
      </Typography>
      <div className="p-3.5 bg-white rounded-lg w-fit">
        <img src={icon} alt="icon" className="w-12 " />
      </div>

      <Typography
        variant="h3"
        color="text-dark-blue-100"
        className="text-[20px]"
      >
        {title}
      </Typography>

      <img src={Rectangle} alt="" className="w-[90px]" />
      <Typography variant="bodycopy">{description}</Typography>
    </div>
  );
};

OurProcessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  index: PropTypes.string,
};

export default OurProcessCard;