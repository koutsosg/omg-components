import React from "react";

import "./style.css";
import Social from "../OmgSocialSmall";
import { Link } from "react-router-dom";
const Layout = ({
  links,
  slinks,
  classes = {},
  logo,
  imgback,
  overlay,
  website = {},
  children,
}) => {
  return (
    <>
      <header
        className={`${classes.headermain}`}
        style={{
          backgroundImage: `url(${overlay}), url(${imgback})`,
        }}
      >
        <div className={`${classes.headerin}`}>
          <a href="/" className={`${classes.avatarlink}`}>
            <img
              src={logo}
              className={`${classes.avatarlogo}`}
              alt={`${website.name} logo`}
            />
          </a>
          <h1 className={`${classes.h}`}>{website.h2}</h1>
          <p className={`${classes.p}`}>{website.p}</p>
          <a
            className={`${classes.quicklink}`}
            href={website.quicklink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website.quicklinkt}
          </a>
          <hr />
          {links.map((link) => (
            <Link to={link.to}>{link.text}</Link>
          ))}
          <hr />
        </div>
        <footer className={`${classes.footer}`}>
          <Social classes={classes} slinks={slinks} />

          <div className={`${classes.copyright}`}>
            © {new Date().getFullYear()}, -
            <a href={website.url} className={`${classes.copyright}`}>
              {website.name}
            </a>
            .&nbsp;All Rights Reserved
          </div>
        </footer>
      </header>

      <div className={`${classes.children}`}>{children}</div>
    </>
  );
};

export default Layout;
