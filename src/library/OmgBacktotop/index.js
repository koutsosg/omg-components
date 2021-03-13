import React, { useState, useEffect } from "react";

import "./style.css";

import { Icon } from "semantic-ui-react";

const ScrollTopArrow = ({ icon, icon2 }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Icon
        loading={icon2.loading}
        link={icon2.link}
        circular={icon2.circular}
        bordered={icon2.bordered}
        inverted={icon2.inverted}
        size={icon2.size}
        name={icon2.name}
        color={icon2.color}
        className={icon2.classes}
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
      <Icon
        loading={icon.loading}
        link={icon.link}
        circular={icon.circular}
        bordered={icon.bordered}
        inverted={icon.inverted}
        size={icon.size}
        name={icon.name}
        color={icon.color}
        className={icon.classes}
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </>
  );
};

export default ScrollTopArrow;
