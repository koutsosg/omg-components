import React from "react";
import OmgCarousel from "../../library/OmgCarousel";
import slide1 from "../../assets/logo.svg";
import slide2 from "../../assets/imgback.svg";
import "./style.css";
const settings = {
  fade: true,
  speed: 2000,
  pause: `hover` /* false or hover */,
  controls: true,
  indicators: false,
  slide: true,
  style: "bg-dark",
};
const slides = [
  {
    img: slide1,
    alt: "",
    img2: slide2,
    alt2: "",
    head: "First slide label",
    parag: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    class: {
      item: "",
      img: "d-inline-block w-50",
      img2: "w-50",
      caption: "",
      head: "",
      parag: "",
    },
  },
  {
    img: slide1,
    alt: "",
    head: "second slide label",
    parag: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    class: {
      item: "",
      img: "d-inline-block w-50 ",
      img2: "w-50",
      caption: "",
      head: "",
      parag: "",
    },
  },
];

const Carousel = () => {
  return (
    <>
      <OmgCarousel slides={slides} settings={settings} />
    </>
  );
};

export default Carousel;
