import React from "react";
import OmgServices3 from "../../library/OmgServices3";
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
  size: "3x",
};
/*  */

const bcolor = "#f8f9fa";
const classes = {
  maindiv: "p-5",
  topcontain: "container",
  title: "btwline",
  subtitle: "",
  span: "omg-lines",
  container: "",
  row: "",
  col: "p-2",
  card: "card-flip card bg-light",
  cardfront: "card-front",
  cardfbody: "card-body m-auto",
  sicon: "omg-serv_icon",

  header: "card-title",
  span: "omg-lines",
  parag: "p-3 text-justify",
  cardback: "card-back border",
  cardbbody: "card-body d-flex",
  image: "img-fluid mx-auto",
  button: "omg-button",
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
        className={`${classes.sicon}`} /* pull="left" */
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
        className={`${classes.sicon}`}
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
        className={`${classes.sicon}`}
        /* style={{
          width: `1em`,
        }} */
      />
    ),
  },
  /*  {
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
  }, */
];

const Services3 = () => {
  return (
    <>
      <OmgServices3
        color={bcolor}
        info={info}
        services={services}
        classes={classes}
      />
    </>
  );
};

export default Services3;
