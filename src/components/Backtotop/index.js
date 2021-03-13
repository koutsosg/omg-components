import React from "react";
import ScrollTopArrow from "../../library/OmgBacktotop";

const icon = {
  name: "angle up",
  loading: false,
  link: true,
  circular: true,
  bordered: false,
  inverted: false,
  size: "large",
  color: "",
  classes: "scrollTop bg-light",
};

const icon2 = {
  name: "react",
  loading: true,
  link: true,
  circular: true,
  bordered: true,
  inverted: false,
  size: "large",
  color: "black",
  classes: "scrollTop bg-light",
};

const BackToTop = () => {
  return (
    <>
      <ScrollTopArrow icon={icon} icon2={icon2} />
    </>
  );
};

export default BackToTop;
