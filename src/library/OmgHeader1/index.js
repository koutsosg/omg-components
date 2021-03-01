import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
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
const OmgHeader1 = ({
  logo,
  links,
  website,
  theme,
  navpos,
  slinks,
  expand,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <Navbar className="omg-navbar" color={theme} light expand={expand}>
      {!!logo && (
        <NavbarBrand className="omg-navbar_brand" href="/">
          {logo.includes("/static/media") ? (
            <img
              className="omg-navbar_logo App-logo"
              src={logo}
              alt={website}
            />
          ) : (
            logo
          )}
        </NavbarBrand>
      )}
      <NavbarToggler onClick={toggle} className="omg-navbar_toggler mr-2" />
      <Collapse className="omg-navbar_collapse" isOpen={isOpen} navbar>
        <Nav className={`${navpos} omg-navbar_nav_link`} navbar>
          {links.map((link) => (
            <NavItem className="omg-navbar_nav_item">
              <NavLink className="omg-navbar_nav_link" href={link.url}>
                {link.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <Nav className="omg-navbar_nav_s" navbar>
          {slinks.map((slink) => (
            <NavItem className="omg-navbar_nav_item">
              <NavLink className="p-2 omg-navbar_nav_link" href={slink.url}>
                {" "}
                <Icon circular name={slink.icon} />
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default OmgHeader1;
