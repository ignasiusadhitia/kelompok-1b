import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";

const Header = ({ title }) => {
  return (
    <div className="bg-dark-blue-100 h-[220px] flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        color="text-peach-red-100"
        className="text-4xl py-3 leading-none"
      >
        {title}
      </Typography>
      <Typography variant="small" color="text-white text-lg">
        Home / {title}
      </Typography>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
