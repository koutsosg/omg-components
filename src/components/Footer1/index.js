import React from "react";
import OmgFooter1 from "../../library/OmgFooter1";
import logo from "../../assets/logo.svg";
import imgback from "../../assets/imgback.svg";
import "./style.css";

const website = {
  name: "Website Title",
  url: "/",
};
const bcolor = "#f8f9fa";
const classes = {
  header: "titles",
  navbrand: "float-right",
  logo: "App-logo",
  maindiv: "p-5 navbar-light",
  container: "container omg-container",
  row: "row",
  col: "col-12 col-sm-12 col-md-3 py-3",
  about: " text-left",
  p: "py-3",
  contact: "",
  contactli: "text-left p-3",
  links: "",
  linksli: "p-3 text-left",
  linkico: "float-right",
  hoursli: "text-left p-3",
  sicon: "text-left",
  footer: "py-4",
};
const titles = {
  col1: "About Us",
  col2: "Contact Us",
  col3: "Quick Links",
  col4: "Opening Hours",
};

const hours = [
  {
    days: "Monday-Friday",
    hours: "8:00 AM - 5:00 PM",
    icon: "clock outline",
  },
  {
    days: "Saturday",
    hours: "Closed",
    icon: "clock outline",
  },
  {
    days: "Sunday",
    hours: "Closed",
    icon: "clock outline",
  },
];
const about =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

const contacts = [
  {
    text: "73 Canal Street, New York, NY",
    icon: "map marker alternate",
  },
  {
    text: <a href="tel:+30000000000">+30000000000</a>,
    icon: "mobile alternate",
  },
  {
    text: <a href="tel:+320000000000">+320000000000</a>,
    icon: "phone",
  },
  {
    text: <a href="mailto:support@test.com">support@test.com</a>,
    icon: "at",
  },
];
const links = [
  {
    text: "Home",
    url: "/",
    icon: "angle right",
  },

  {
    text: "About",
    url: "/about",
    icon: "angle right",
  },
  {
    text: "Services",
    url: "/services",
    icon: "angle right",
  },
  {
    text: "Projects",
    url: "/projects",
    icon: "angle right",
  },
  {
    text: "Contact",
    url: "/contact",
    icon: "angle right",
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

const Footer1 = () => {
  return (
    <>
      <OmgFooter1
        website={website}
        titles={titles}
        imgback={imgback}
        color={bcolor}
        classes={classes}
        contacts={contacts}
        links={links}
        hours={hours}
        slinks={slinks}
        about={about}
        logo={logo}
      />
    </>
  );
};

export default Footer1;
