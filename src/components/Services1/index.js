import React from "react";
import OmgServices1 from "../../library/OmgServices";
import service1 from "../../assets/logo.svg";
import service2 from "../../assets/logo.svg";
import service3 from "../../assets/logo.svg";
import service4 from "../../assets/logo.svg";
import "./style.css";

/* font Awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSink } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";

const info = {
  title: "OUR SERVICES",
  subtitle: "Quality Service is Our Guarantee",
  text:
    "We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.",
};

const icons = {
  serv1: faCircle /* faWrench */,
  serv2: faCircle /* faSink */,
  serv3: faCircle /* faToilet */,
  serv4: faCircle /* faShower */,
  size: "4x",
};
/*  */
const bcolor = "#f8f9fa";
const classes = {
  title: "btwline",
  subtitle: "",
  span: "omg-lines",
  maindiv: "",
  container: "",
  row: "",
  col: "",
  coldiv: "",
  image: "",
  header: "mr-auto",
  parag: "",
};

/* const cols = { xs: 6, sm: 12, md: 12 }; */

const services = [
  {
    title: "Service 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: service1,
    sicon: (
      <FontAwesomeIcon
        icon={icons.serv1}
        size={icons.size}
        className="omg-serv_icon" /* pull="left" */
      />
    ),
  },
  {
    title: "Service 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: service2,
    sicon: (
      <FontAwesomeIcon
        icon={icons.serv2}
        size={icons.size}
        className="omg-serv_icon"
      />
    ),
  },
  {
    title: "Service 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: service3,
    sicon: (
      <FontAwesomeIcon
        icon={icons.serv3}
        size={icons.size}
        className="omg-serv_icon"
        style={{
          width: `1em`,
        }}
      />
    ),
  },
  {
    title: "Service 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: service4,
    sicon: (
      <FontAwesomeIcon
        icon={icons.serv4}
        size={icons.size}
        className="omg-serv_icon"
        mask={["far", "circle"]}
      />
    ),
  },
];

const Services1 = () => {
  return (
    <>
      <OmgServices1
        color={bcolor}
        info={info}
        services={services}
        classes={classes}
      />
    </>
  );
};

export default Services1;
