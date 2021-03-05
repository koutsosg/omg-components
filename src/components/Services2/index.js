import React from "react";
import OmgServices2 from "../../library/OmgServices2";
import "./style.css";
import headimg from "../../assets/logo.svg";

import service1 from "../../assets/logo.svg";
import service2 from "../../assets/logo.svg";
import service3 from "../../assets/logo.svg";

const bcolor = "#f8f9fa";

const classes = {
  maindiv: "bg-light omg-maindiv",
  container: "container p-0",
  info: "omg-info",
  infoimg: "omg-info_img",
  overlay: "omg-overlay_img",
  infotext: "omg-info_text",
  infotexth: "",
  services: "",
  maingrid: "omg-grid_main",
  gridleft: "",
  servimg: "omg-gridleft_img",
  gridright: "",
  servhead: "",
  span: "",
  servtext: "",
};

const info = {
  title: "R",
  img: headimg,
};

const services = [
  {
    img: service1,
    title: "service1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: service2,
    title: "service2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: service3,
    title: "service3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services2 = () => {
  return (
    <>
      <OmgServices2
        color={bcolor}
        info={info}
        services={services}
        classes={classes}
      />
    </>
  );
};

export default Services2;
