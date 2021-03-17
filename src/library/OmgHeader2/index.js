import React, { useState } from "react";

import { Dropdown, Menu, Icon } from "semantic-ui-react";
import { Collapse } from "reactstrap";
import "semantic-ui-css/semantic.min.css";
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
const OmgHeader2 = ({ logo, links, website, slinks, classes = {} }) => {
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
        <Menu className={`${classes.nav}`}>
          {links.map((link) =>
            !!link?.submenu ? (
              <Dropdown
                text={link.text}
                pointing
                className={`${classes.navlink} link item `}
              >
                <Dropdown.Menu>
                  {/*   <Dropdown.Header>{link.submenu.text}</Dropdown.Header> */}
                  {link?.submenu?.map((subitem) => (
                    <Dropdown.Item href={subitem.url}>
                      {subitem.text}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Menu.Item
                href={link.url}
                className={`${classes.navlink} link item `}
              >
                {link.text}
              </Menu.Item>
            )
          )}
        </Menu>
        <div className={`${classes.snav}`}>
          {slinks.map((slink) => (
            <div className={`${classes.snavitem}`}>
              <a href={slink.url} target="_blank" rel="noreferrer">
                <Icon
                  className={`${classes.sicon}`}
                  circular
                  name={slink.icon}
                />
              </a>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default OmgHeader2;
