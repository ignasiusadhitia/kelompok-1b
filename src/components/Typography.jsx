import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Typography = ({
  variant,
  children,
  color = "text-black", // Default parameter untuk color
  className = "", // Default parameter untuk className
  style = {}, // Default parameter untuk style
}) => {
  // Pemetaan variant ke tag HTML
  const tagMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    subtitle: "h4", // Subtitle bisa menggunakan h4
    strong: "strong",
    bodycopy: "p", // Bodycopy lebih semantik sebagai paragraf
    small: "small",
    button: "button", // Button Text menggunakan tag button
    pretext: "p", // Pretext sebagai paragraf
    label: "label",
  };

  // Kelas CSS berdasarkan variant
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

  // Mengambil tag yang sesuai dari pemetaan
  const Tag = tagMap[variant] || "div";

  // Menyusun kelas dengan classnames
  const appliedClasses = classNames(
    "font-raleway", // kelas dasar
    variantClasses[variant],
    color,
    className
  );

  return (
    <Tag className={appliedClasses} style={style}>
      {children}
    </Tag>
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
