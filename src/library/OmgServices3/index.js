import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

const OmgServices3 = ({
  info = {},
  services = {},
  color = "white",
  classes = {},
  cols = {},
}) => {
  cols = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    ...cols,
  };
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.topcontain} `}>
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

        <Container className={`${classes.container}`}>
          <Row className={`${classes.row}`}>
            {services.map((service, i) => (
              <Col
                {...cols}
                /*  {...(services.length % 2 && i + 1 === services.length
                  ? { xs: 12, sm: 12, md: 12 }
                  : {})} */
                {...(service?.cols ?? {})}
                className={`${classes.col}`}
              >
                <div className={`${classes.card}`}>
                  <div className={`${classes.cardfront}`}>
                    <div className={`${classes.cardfbody}`}>
                      <div>
                        {service.sicon}
                        <h3 className={`${classes.header}`}>
                          <span className={`${classes.span} `}></span>
                          {service.title}
                        </h3>
                        <p className={`${classes.parag} `}>{service.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${classes.cardback} `}>
                    <div className={`${classes.cardbbody} `}>
                      <Image
                        src={service.img}
                        className={`${classes.image} `}
                      />
                      <Button
                        href={service.button.url}
                        className={`${classes.button}`}
                        variant={service.button.variant}
                      >
                        {service.button.text}
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OmgServices3;
