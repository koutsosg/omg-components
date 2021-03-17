import React from "react";

import "./style.css";
import Social from "../OmgSocialSmall";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
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
          <Menu vertical secondary className={`${classes.menu}`}>
            {links.map((link) =>
              !!link?.submenu ? (
                <Dropdown
                  text={link.text}
                  className={`${classes.dropdown} item`}
                >
                  <Dropdown.Menu className={`${classes.dropdownmenu}`}>
                    {/*   <Dropdown.Header>{link.submenu.text}</Dropdown.Header> */}
                    {link?.submenu?.map((subitem) => (
                      <Link className={`${classes.droplink}`} to={subitem.to}>
                        <Dropdown.Item className={`${classes.dropitem}`}>
                          {subitem.text}
                        </Dropdown.Item>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Menu.Item className={`${classes.menuitem} item`}>
                  <Link className={`${classes.menulink}`} to={link.to}>
                    {link.text}
                  </Link>
                </Menu.Item>
              )
            )}
          </Menu>
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
