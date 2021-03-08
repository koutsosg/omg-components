import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

import {
  Collapse,
  Nav,
  /*  Navbar,
  NavbarBrand,
  NavbarToggler, */
  NavItem,
  NavLink,
} from "reactstrap";
import "./style.css";

/**
 * A simple header navigation component with ReactStrap
 *
 * @param {object} props
 * @param {string} props.logo
 * @param {object[]} props.links
 * @param {string} props.links.text
 * @param {string} props.links.url
 * @param {string} props.website
 * @param {string} props.expand
 * @param {object[]} props.slinks
 * @param {string} props.slinks.icon
 * @param {string} props.slinks.url
 */
const OmgHeader1 = ({ logo, links, website, slinks, classes = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div className={`${classes.navbar} navbar omg-navbar`}>
      {!!logo && (
        <a
          className={`${classes.navbrand} navbar-brand omg-navbar_brand`}
          href="/"
        >
          {logo.includes("/static/media") ? (
            <img
              className={`${classes.logo} omg-navbar_logo`}
              src={logo}
              alt={website}
            />
          ) : (
            logo
          )}
        </a>
      )}
      <button
        onClick={toggle}
        aria-label="Toggle navigation"
        type="button"
        className={`${classes.toggler} navbar-toggler`}
      >
        <span className={`${classes.toggler} navbar-toggler-icon`}></span>
      </button>

      <Collapse className={`${classes.toggler}`} isOpen={isOpen} navbar>
        <Nav className={`${classes.nav} omg-navbar_nav_link`} navbar>
          {links.map((link) => (
            <NavItem className={`${classes.navitem}`}>
              <NavLink className={`${classes.navlink}`} href={link.url}>
                {link.text}

                {link?.submenu && (
                  <div>
                    {link?.submenu?.map((item) => (
                      <NavLink className={`${classes.navlink}`} href={item.url}>
                        {item.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <Nav className={`${classes.snav} omg-navbar_nav_s`} navbar>
          {slinks.map((slink) => (
            <NavItem className={`${classes.snavitem}`}>
              <NavLink className={`${classes.snavlink}`} href={slink.url}>
                {" "}
                <Icon
                  className={`${classes.sicon}`}
                  circular
                  name={slink.icon}
                />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </div>
  );
};

export default OmgHeader1;
