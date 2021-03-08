import React from "react";
import OmgHeader2 from "../../library/OmgHeader2";
import logo from "../../assets/logo.svg";
import "./style.css";

const website = "website title";

const classes = {
  navbar: "navbar-expand-md navbar-light bg-light ",
  navbrand: "",
  logo: "App-logo",
  toggler: "",
  togglerspan: "",
  collapse: "",
  nav: "shadow-none bg-light navbar-nav my-auto mr-auto border-0",
  navitem: "",
  navlink: "border-0 ",
  snav: " navbar-nav omg-navbar_nav_s",
  snavitem: " p-2 nav-item",
  snavlink: "p-2",
  sicon: "",
};
const links = [
  {
    text: "Home",
    url: "/",
    submenu: [
      { text: "hello", url: "/" },
      { text: "world", url: "/" },
    ],
  },

  {
    text: "About",
    url: "/about",
    submenu: [
      { text: "hello", url: "/" },
      { text: "world", url: "/" },
    ],
  },
  {
    text: "Services",
    url: "/services",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];
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

const Header2 = () => {
  return (
    <>
      <OmgHeader2
        logo={logo}
        links={links}
        slinks={slinks}
        website={website}
        classes={classes}
      />
    </>
  );
};

export default Header2;
