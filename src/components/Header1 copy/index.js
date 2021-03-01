import React from "react";
import OmgHeader1 from "../../library/OmgHeader1";
import logo from "../../logo.svg";
import "./style.css";

const website = "test";
const theme = "light"; /* dark or light */
const navpos = "ml-auto"; /* m-auto or ml-auto or mr-auto */
const spos = "ml-auto";
const slinks = [
  {
    text: "fb",
    url: "/",
  },
  {
    text: "in",
    url: "/",
  },
  {
    text: "tw",
    url: "/",
  },
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
        spos={spos}
        website={website}
        theme={theme}
        navpos={navpos}
      />
    </>
  );
};

export default Header1;
