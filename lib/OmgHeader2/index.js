"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _reactstrap = require("reactstrap");

require("./style.css");

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
var OmgHeader2 = function OmgHeader2(_ref) {
  var logo = _ref.logo,
      links = _ref.links,
      website = _ref.website,
      slinks = _ref.slinks,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.navbar + " navbar omg-navbar"
  }, !!logo && /*#__PURE__*/_react.default.createElement("a", {
    className: classes.navbrand + " navbar-brand omg-navbar_brand",
    href: "/"
  }, logo.includes("/static/media") ? /*#__PURE__*/_react.default.createElement("img", {
    className: classes.logo + " omg-navbar_logo",
    src: logo,
    alt: website
  }) : logo), /*#__PURE__*/_react.default.createElement("button", {
    onClick: toggle,
    "aria-label": "Toggle navigation",
    type: "button",
    className: classes.toggler + " navbar-toggler"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.toggler + " navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Collapse, {
    className: "" + classes.toggler,
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu, {
    className: "" + classes.nav
  }, links.map(function (link) {
    var _link$submenu;

    return !!(link != null && link.submenu) ? /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      text: link.text,
      pointing: true,
      className: classes.navlink + " link item "
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Menu, null, link == null ? void 0 : (_link$submenu = link.submenu) == null ? void 0 : _link$submenu.map(function (subitem) {
      return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Item, {
        href: subitem.url
      }, subitem.text);
    }))) : /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu.Item, {
      href: link.url,
      className: classes.navlink + " link item "
    }, link.text);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.snav
  }, slinks.map(function (slink) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "" + classes.snavitem
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: slink.url,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      className: "" + classes.sicon,
      circular: true,
      name: slink.icon
    })));
  }))));
};

var _default = OmgHeader2;
exports.default = _default;