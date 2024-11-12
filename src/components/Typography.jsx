import React from "react";
import PropTypes from "prop-types";

const Typography = ({
  variant,
  children,
  color = "text-black",
  className = "",
  style = {},
}) => {
  const baseClass = "font-raleway";
  const variantClasses = {
    h1: "font-bold text-h1 leading-h1",
    h2: "font-bold text-h2 leading-h2",
    h3: "font-bold text-h3 leading-h3",
    subtitle: "font-medium text-subtitle leading-subtitle",
    strong: "font-bold text-strong leading-strong",
    bodycopy: "font-normal text-bodycopy leading-bodycopy",
    small: "font-medium text-small leading-small",
    button: "font-semibold text-button leading-button",
    pretext: "font-semibold text-pretext leading-pretext",
    label: "font-medium text-label leading-label",
  };

  const appliedClasses = `${baseClass} ${variantClasses[variant] || ""} ${color} ${className}`;

  return (
    <div className={appliedClasses} style={style}>
      {children}
    </div>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "subtitle",
    "strong",
    "bodycopy",
    "small",
    "button",
    "pretext",
    "label",
  ]).isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Typography;
