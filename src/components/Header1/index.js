import React from "react";
import OmgHeader1 from "../../library/OmgHeader1";
import logo from "../../assets/logo.svg";
import "./style.css";

const website = "website title";
const theme = "light"; /* dark or light */
const navpos = "mr-auto"; /* m-auto or ml-auto or mr-auto */
const expand = "sm";
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

const Header1 = () => {
  return (
    <>
      <OmgHeader1
        logo={logo}
        links={links}
        slinks={slinks}
        expand={expand}
        website={website}
        theme={theme}
        navpos={navpos}
      />
    </>
  );
};

export default Header1;
