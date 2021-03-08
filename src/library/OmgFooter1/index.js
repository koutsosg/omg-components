import React from "react";

import "./style.css";
import { List, Icon } from "semantic-ui-react";
const OmgFooter1 = ({
  titles = {},
  logo,
  imgback,
  links,
  about,
  website = {},
  slinks,
  hours,
  contacts,
  color,
  classes = {},
}) => {
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.container}`}>
        <div
          style={{
            backgroundImage: `url(${imgback})`,
            backgroundPosition: `left center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `contain`,

            minHeight: 250,
          }}
          className={`${classes.row} `}
        >
          <div className={`${classes.col}`}>
            <div className={`${classes.about}`}>
              <h4 className={`${classes.header}`}>{titles.col1}</h4>

              <p className={`${classes.p}`}>{about}</p>
              {slinks.map((slink) => (
                <a className={`${classes.sicon}`} href={slink.url}>
                  <Icon circular name={slink.icon} />
                </a>
              ))}
              <div>
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
              </div>
            </div>
          </div>

          <div className={`${classes.col}`}>
            <div className={`${classes.about}`}>
              <h4 className={`${classes.header}`}>{titles.col2}</h4>
              <List className={`${classes.contact}`} divided relaxed>
                {contacts.map((contact) => (
                  <List.Item
                    className={`${classes.contactli}`}
                    icon={contact.icon}
                    content={contact.text}
                  />
                ))}
              </List>
            </div>
          </div>

          <div className={`${classes.col}`}>
            <div className={`${classes.about}`}>
              <h4 className={`${classes.header}`}>{titles.col3}</h4>

              <List className={`${classes.links}`} divided relaxed>
                {links.map((link) => (
                  <List.Item className={`${classes.linksli}`}>
                    <List.Content>
                      <a href={link.url}>
                        <div>
                          {link.text}
                          <List.Icon
                            className={`${classes.linkico}`}
                            name={link.icon}
                          />
                        </div>
                      </a>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          </div>
          <div className={`${classes.col}`}>
            <div className={`${classes.about}`}>
              <h4 className={`${classes.header}`}>{titles.col4}</h4>
              <List className={`${classes.hours}`} divided relaxed>
                {hours.map((hour) => (
                  <List.Item className={`${classes.hoursli}`}>
                    <List.Icon className={`${classes.i}`} name={hour.icon} />
                    <List.Content>
                      <List.Header>{hour.days}</List.Header>
                      <List.Description>{hour.hours}</List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
          </div>
        </div>
        <hr className="hr"></hr>
        <footer className={`${classes.footer}`}>
          <div className="">
            © {new Date().getFullYear()},
            <a href={website.url}>{website.name}</a>
            .&nbsp;All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OmgFooter1;
