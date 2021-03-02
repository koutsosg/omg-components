import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.css";

const Services = ({
  info = {},
  fluid = false,
  services,
  cols = {},
  color = "white",
  classes = {},
}) => {
  cols = {
    xs: 12,
    sm: 6,
    md: 3,
    ...cols,
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${classes.maindiv} p-5`}
    >
      <Container fluid={fluid} className={`${classes.container} `}>
        <h3 className={`${classes.title} `}>
          <span className={`${classes.span} `}></span>
          {info.title}
          <span className={`${classes.span} `}></span>
        </h3>

        <h2 className={`${classes.subtitle} omg-subtitle`}>{info.subtitle}</h2>
        <p style={{ paddingBottom: `1.75em` }} className={`${classes.parag} `}>
          {info.text}
        </p>

        <Row className={`${classes.row} `}>
          {services.map((service) => (
            <Col {...cols} className={`${classes.col} p-1 omg-serv`}>
              <div className="">
                <div className={`${classes.coldiv} border p-2 omg-serv_img2`}>
                  <img
                    className={`${classes.image} img-fluid omg-serv_img`}
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
