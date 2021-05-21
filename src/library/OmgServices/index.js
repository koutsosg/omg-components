import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./style.css";

const Services = ({ info = {}, services, color = "white", classes = {} }) => {
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.container} `}>
        <h3 className={`${classes.title} `}>
          <span className={`${classes.span} `}></span>
          {info.title}
          <span className={`${classes.span} `}></span>
        </h3>

        <h2 className={`${classes.subtitle} omg-subtitle`}>{info.subtitle}</h2>
        <p
          style={{ paddingBottom: `1.75em` }}
          className={`${classes.parag}  text-center`}
        >
          {info.text}
        </p>

        <div className={`${classes.row} `}>
          {services.map((service) => (
            <div className={`${classes.col} omg-serv`}>
              <div className="border">
                <div className={`${classes.coldiv}  omg-serv_img2`}>
                  <img
                    className={`${classes.image}  img-fluid omg-serv_img`}
                    src={service.img}
                    alt={service.title}
                  />
                </div>
                {service.sicon}
                <h2 className={`${classes.header} omg-serv_header`}>
                  <span className={`${classes.span} `}></span>
                  {service.title}
                </h2>
                <p className={`${classes.parag} `}>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
