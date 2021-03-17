import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";

import { Grid, Segment, Image } from "semantic-ui-react";

const Services2 = ({ color, services, classes = {}, info = {} }) => {
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.info}`}>
          <Image className={`${classes.infoimg}`} src={info.img} fluid />
          <div className={`${classes.overlay}`}></div>
          <div className={`${classes.infotext}`}>
            <h1 className={`${classes.infotexth}`}>{info.title}</h1>
          </div>
        </div>
        {services.map((service) => (
          <Segment className={`${classes.services}`} placeholder>
            <Grid className={`${classes.maingrid}`} columns={2} stackable>
              <Grid.Column className={`${classes.gridleft}`}>
                <Image
                  className={`${classes.servimg}`}
                  src={service.img}
                  fluid
                />
              </Grid.Column>

              <Grid.Column
                verticalAlign="middle"
                className={`${classes.gridright}`}
              >
                <h2 className={`${classes.servhead} `}>
                  <span className={`${classes.span} `}></span>
                  {service.title}
                </h2>
                <p className={`${classes.servtext} `}>{service.text}</p>
              </Grid.Column>
            </Grid>
          </Segment>
        ))}
      </div>
    </div>
  );
};
export default Services2;
