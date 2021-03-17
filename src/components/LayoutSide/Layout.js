import React from "react";
import OmgLayoutSide from "../../library/OmgLayoutSide";
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
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light text-right px-0 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "text-right ",
  dropitem: "",
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

const Layout = ({ children, links }) => {
  return (
    <OmgLayoutSide
      logo={logo}
      website={website}
      children={children}
      overlay={overlay}
      imgback={imgback}
      classes={classes}
      slinks={slinks}
      links={links}
    />
  );
};
export default Layout;
