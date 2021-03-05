import React from "react";
import OmgServices1 from "../../library/OmgServices";
import service1 from "../../assets/logo.svg";
import service2 from "../../assets/logo.svg";
import service3 from "../../assets/logo.svg";
import service4 from "../../assets/logo.svg";
import "./style.css";

/* font Awesome icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
/* import { faSink } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
 */
const info = {
  title: "OUR SERVICES",
  subtitle: "Quality Service is Our Guarantee",
  text:
    "We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.",
};

const icons = {
  serv1: faDiceD20 /* faWrench */,
  serv2: faDiceD20 /* faSink */,
  serv3: faDiceD20 /* faToilet */,
  serv4: faDiceD20 /* faShower */,
  size: "4x",
};
/*  */

const bcolor = "#f8f9fa";
const classes = {
  maindiv: "p-5",
  container: "container",
  title: "btwline",
  subtitle: "",
  span: "omg-lines",
  row: "row",
  col: " p-1 col-12 col-sm-6 col-md-3",
  coldiv: "p-2",
  image: "",
  header: "",
  parag: "p-3 text-justify",
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
