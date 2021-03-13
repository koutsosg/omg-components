import React from "react";
import OmgLayoutSide from "../../library/OmgLayoutSide/Layout";
import imgback from "../../assets/imgback.svg";
import overlay from "../../assets/overlay.png";
import logo from "../../../src/logo.svg";
const website = {
  name: "website title",
  url: "/",
  h2: "test",
  p: "Edit <code>src/App.js</code> and save to reload.",
  quicklink: "https://reactjs.org",
  quicklinkt: "Learn React",
};
const classes = {
  headermain: "omg-sidebar_layout",
  headerin: "inner",
  avatarlink: "image avatar",
  avatarlogo: "",
  h: "text-light",
  p: "text-light",
  quicklink: "text-light App-link",
  footer: "innerfoot",
  sicon: "",
  siconl: "",
  circular: true /* true / false */,
  copyright: "",
  copyrightl: "",
  children:
    "omg-layout_main" /* omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_736pad */,
};
/* 3108; */
const slinks = [
  {
    icon: "facebook",
    url: "/",
  },
  {
    icon: "instagram",
    url: "/",
  },
  {
    icon: "linkedin",
    url: "/",
  },
  {
    icon: "twitter",
    url: "/",
  },

  {
    icon: "at",
    url: "/",
  },
];

const Layout = ({ children }) => {
  return (
    <OmgLayoutSide
      logo={logo}
      website={website}
      children={children}
      overlay={overlay}
      imgback={imgback}
      classes={classes}
      slinks={slinks}
    />
  );
};
export default Layout;
