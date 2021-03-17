"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _OmgSocialSmall = _interopRequireDefault(require("../OmgSocialSmall"));

var _reactRouterDom = require("react-router-dom");

var _semanticUiReact = require("semantic-ui-react");

var Layout = function Layout(_ref) {
  var links = _ref.links,
      slinks = _ref.slinks,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      logo = _ref.logo,
      imgback = _ref.imgback,
      overlay = _ref.overlay,
      _ref$website = _ref.website,
      website = _ref$website === void 0 ? {} : _ref$website,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "" + classes.headermain,
    style: {
      backgroundImage: "url(" + overlay + "), url(" + imgback + ")"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.headerin
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "" + classes.avatarlink
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "" + classes.avatarlogo,
    alt: website.name + " logo"
  })), /*#__PURE__*/_react.default.createElement("h1", {
    className: "" + classes.h
  }, website.h2), /*#__PURE__*/_react.default.createElement("p", {
    className: "" + classes.p
  }, website.p), /*#__PURE__*/_react.default.createElement("a", {
    className: "" + classes.quicklink,
    href: website.quicklink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, website.quicklinkt), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu, {
    vertical: true,
    secondary: true,
    className: "" + classes.menu
  }, links.map(function (link) {
    var _link$submenu;

    return !!(link != null && link.submenu) ? /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      text: link.text,
      className: classes.dropdown + " item"
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Menu, {
      className: "" + classes.dropdownmenu
    }, link == null ? void 0 : (_link$submenu = link.submenu) == null ? void 0 : _link$submenu.map(function (subitem) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        className: "" + classes.droplink,
        to: subitem.to
      }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Item, {
        className: "" + classes.dropitem
      }, subitem.text));
    }))) : /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu.Item, {
      className: classes.menuitem + " item"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "" + classes.menulink,
      to: link.to
    }, link.text));
  })), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("footer", {
    className: "" + classes.footer
  }, /*#__PURE__*/_react.default.createElement(_OmgSocialSmall.default, {
    classes: classes,
    slinks: slinks
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.copyright
  }, "\xA9 ", new Date().getFullYear(), ", -", /*#__PURE__*/_react.default.createElement("a", {
    href: website.url,
    className: "" + classes.copyright
  }, website.name), ".\xA0All Rights Reserved"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.children
  }, children));
};

var _default = Layout;
exports.default = _default;