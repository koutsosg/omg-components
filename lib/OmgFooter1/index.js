"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("semantic-ui-css/semantic.min.css");

require("./style.css");

var _semanticUiReact = require("semantic-ui-react");

var OmgFooter1 = function OmgFooter1(_ref) {
  var _ref$titles = _ref.titles,
      titles = _ref$titles === void 0 ? {} : _ref$titles,
      logo = _ref.logo,
      imgback = _ref.imgback,
      links = _ref.links,
      about = _ref.about,
      _ref$website = _ref.website,
      website = _ref$website === void 0 ? {} : _ref$website,
      slinks = _ref.slinks,
      hours = _ref.hours,
      contacts = _ref.contacts,
      color = _ref.color,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color
    },
    className: "" + classes.maindiv
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundImage: "url(" + imgback + ")",
      backgroundPosition: "left center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      minHeight: 250
    },
    className: classes.row + " "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.col
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.about
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "" + classes.header
  }, titles.col1), /*#__PURE__*/_react.default.createElement("p", {
    className: "" + classes.p
  }, about), slinks.map(function (slink) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: "" + classes.sicon,
      href: slink.url
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      circular: true,
      name: slink.icon
    }));
  }), /*#__PURE__*/_react.default.createElement("div", null, !!logo && /*#__PURE__*/_react.default.createElement("a", {
    className: classes.navbrand + " navbar-brand omg-navbar_brand",
    href: "/"
  }, logo.includes("/static/media") ? /*#__PURE__*/_react.default.createElement("img", {
    className: classes.logo + " omg-navbar_logo",
    src: logo,
    alt: website
  }) : logo)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.col
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.about
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "" + classes.header
  }, titles.col2), /*#__PURE__*/_react.default.createElement(_semanticUiReact.List, {
    className: "" + classes.contact,
    divided: true,
    relaxed: true
  }, contacts.map(function (contact) {
    return /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Item, {
      className: "" + classes.contactli,
      icon: contact.icon,
      content: contact.text
    });
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.col
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.about
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "" + classes.header
  }, titles.col3), /*#__PURE__*/_react.default.createElement(_semanticUiReact.List, {
    className: "" + classes.links,
    divided: true,
    relaxed: true
  }, links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Item, {
      className: "" + classes.linksli
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Content, null, /*#__PURE__*/_react.default.createElement("a", {
      href: link.url
    }, /*#__PURE__*/_react.default.createElement("div", null, link.text, /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Icon, {
      className: "" + classes.linkico,
      name: link.icon
    })))));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.col
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.about
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "" + classes.header
  }, titles.col4), /*#__PURE__*/_react.default.createElement(_semanticUiReact.List, {
    className: "" + classes.hours,
    divided: true,
    relaxed: true
  }, hours.map(function (hour) {
    return /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Item, {
      className: "" + classes.hoursli
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Icon, {
      className: "" + classes.i,
      name: hour.icon
    }), /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Content, null, /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Header, null, hour.days), /*#__PURE__*/_react.default.createElement(_semanticUiReact.List.Description, null, hour.hours)));
  }))))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "hr"
  }), /*#__PURE__*/_react.default.createElement("footer", {
    className: "" + classes.footer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, "\xA9 ", new Date().getFullYear(), ",", /*#__PURE__*/_react.default.createElement("a", {
    href: website.url
  }, website.name), ".\xA0All Rights Reserved"))));
};

var _default = OmgFooter1;
exports.default = _default;