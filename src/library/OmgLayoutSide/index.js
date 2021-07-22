import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import Social from "../OmgSocialSmall";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Icon } from "semantic-ui-react";

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
          <Link to={website.url} className={`${classes.avatarlink}`}>
            <img
              src={logo}
              className={`${classes.avatarlogo}`}
              alt={`${website.name} avatar`}
            />
          </Link>
          <h1 className={`${classes.h1}`}>{website.h1}</h1>
          <h2 className={`${classes.h2}`}>{website.h2}</h2>
          <p className={`${classes.p}`}>{website.p}</p>

          <Link
            className={`${classes.quicklink}`}
            to={website.quicklink}
            target={website.qlinktarget}
            rel="noopener noreferrer"
          >
            {website.quicklinkt}
          </Link>
          {website.modal}
          <hr />
          <Menu vertical secondary className={`${classes.menu}`}>
            {links.map((link) =>
              !!link?.submenu ? (
                <Dropdown
                  icon={false}
                  text={link.text}
                  className={`${classes.dropdown}  omg-layout_menu item`}
                >
                  <Dropdown.Menu className={`${classes.dropdownmenu}`}>
                    {/*   <Dropdown.Header>{link.submenu.text}</Dropdown.Header> */}
                    {link?.submenu?.map((subitem) => (
                      <Link
                        className={`${classes.droplink} omg-layout_menu`}
                        to={subitem.to}
                      >
                        <Dropdown.Item className={`${classes.dropitem}`}>
                          {subitem.text}
                        </Dropdown.Item>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Menu.Item className={`${classes.menuitem}`}>
                  <Link
                    className={`${classes.menulink}  omg-layout_menu`}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </Menu.Item>
              )
            )}
          </Menu>
          <hr />
        </div>
        <div>{website.frame}</div>
        <footer className={`${classes.footer}`}>
          {slinks.map((slink) => (
            <a
              className={`${classes.sicon}`}
              href={slink.url}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                className={`${classes.siconl}`}
                circular={classes.circular}
                name={slink.icon}
              />
            </a>
          ))}
          <div className={`${classes.copyright}`}>
            © {new Date().getFullYear()}, -
            <Link to={website.url} className={`${classes.copyright}`}>
              {website.name}
            </Link>
            .&nbsp;All Rights Reserved
          </div>
        </footer>
      </header>

      <div className={`${classes.children}`}>{children}</div>
    </>
  );
};

export default Layout;
