import React from "react";
import "./style.css";

import Carousel from "react-bootstrap/Carousel";
/**
 * A simple bootstrap slider
 *
 *
 */
const OmgCarousel = ({ slides, settings = {} }) => {
  return (
    <>
      <Carousel
        className={`${settings.style}`}
        fade={settings.fade}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
        slide={settings.slide}
      >
        {slides.map((slide) => (
          <Carousel.Item
            className={`${slide.class.item} `}
            interval={settings.speed}
          >
            {slide.img2 ? (
              <>
                <img
                  className={`${slide.class.img2}`}
                  src={slide.img}
                  alt={slide.alt}
                />
                <img
                  className={`${slide.class.img2}`}
                  src={slide.img2}
                  alt={slide.alt2}
                />
              </>
            ) : (
              <img
                className={`${slide.class.img}`}
                src={slide.img}
                alt={slide.alt}
              />
            )}
            {(!!slide.head || slide.parag) && (
              <Carousel.Caption className={`${slide.class.caption}`}>
                {slide.head && (
                  <h3 className={`${slide.class.head}`}>{slide.head}</h3>
                )}
                {slide.parag && (
                  <p className={`${slide.class.parag} `}>{slide.parag}</p>
                )}
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default OmgCarousel;
