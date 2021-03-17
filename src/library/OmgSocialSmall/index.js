import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
const Social = ({ slinks, classes = {} }) => {
  return (
    <>
      {slinks.map((slink) => (
        <a className={`${classes.sicon}`} href={slink.url}>
          <Icon
            className={`${classes.siconl}`}
            circular={classes.circular}
            name={slink.icon}
          />
        </a>
      ))}
    </>
  );
};
export default Social;
