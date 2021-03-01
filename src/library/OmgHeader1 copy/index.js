import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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
 *  * @param {string} props.spos
 * @param {object[]} props.slinks
 * @param {string} props.slinks.text
 * @param {string} props.slinks.url
 */
const OmgHeader1 = ({ logo, links, website, theme, navpos, slinks, spos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <Navbar color={theme} light expand="md">
      {!!logo && (
        <NavbarBrand href="/">
          {logo.includes("/static/media") ? (
            <img className="gkc-navbar_logo" src={logo} alt={website} />
          ) : (
            logo
          )}
        </NavbarBrand>
      )}
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className={navpos} navbar>
          {links.map((link) => (
            <NavItem>
              <NavLink href={link.url}>{link.text}</NavLink>
            </NavItem>
          ))}
        </Nav>
        <Nav className={spos} navbar>
          {slinks.map((slink) => (
            <NavItem>
              <NavLink className="omg-navbar_nav-slink" href={slink.url}>
                {slink.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default OmgHeader1;
