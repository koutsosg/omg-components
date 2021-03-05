import React from "react";
import OmgHeader1 from "../../library/OmgHeader1";
import logo from "../../assets/logo.svg";
import "./style.css";

const website = "website title";

const classes = {
  navbar: "navbar-expand-sm navbar-light bg-light ",
  navbrand: "",
  logo: "App-logo",
  toggler: "",
  togglerspan: "",
  collapse: "",
  nav: "mr-auto",
  navitem: "",
  navlink: "p-2",
  snav: "",
  snavitem: "mr-auto",
  snavlink: "p-2",
  sicon: "",
};
const links = [
  {
    text: "Home",
    url: "/",
  },

  {
    text: "About",
    url: "/about",
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
  /*   {
    text: "twitter",
    url: "/",
  },

  {
    text: "at",
    url: "/",
  }, */
];

const Header1 = () => {
  return (
    <>
      <OmgHeader1
        logo={logo}
        links={links}
        slinks={slinks}
        website={website}
        classes={classes}
      />
    </>
  );
};

export default Header1;
