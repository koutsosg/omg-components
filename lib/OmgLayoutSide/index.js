"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("semantic-ui-css/semantic.min.css");

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
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: website.url,
    className: "" + classes.avatarlink
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "" + classes.avatarlogo,
    alt: website.name + " avatar"
  })), /*#__PURE__*/_react.default.createElement("h1", {
    className: "" + classes.h1
  }, website.h1), /*#__PURE__*/_react.default.createElement("h2", {
    className: "" + classes.h2
  }, website.h2), /*#__PURE__*/_react.default.createElement("p", {
    className: "" + classes.p
  }, website.p), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "" + classes.quicklink,
    to: website.quicklink,
    target: website.qlinktarget,
    rel: "noopener noreferrer"
  }, website.quicklinkt), website.modal, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu, {
    vertical: true,
    secondary: true,
    className: "" + classes.menu
  }, links.map(function (link) {
    var _link$submenu;

    return !!(link != null && link.submenu) ? /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown, {
      icon: false,
      text: link.text,
      className: classes.dropdown + "  omg-layout_menu item"
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Menu, {
      className: "" + classes.dropdownmenu
    }, link == null ? void 0 : (_link$submenu = link.submenu) == null ? void 0 : _link$submenu.map(function (subitem) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
        className: classes.droplink + " omg-layout_menu",
        to: subitem.to
      }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Dropdown.Item, {
        className: "" + classes.dropitem
      }, subitem.text));
    }))) : /*#__PURE__*/_react.default.createElement(_semanticUiReact.Menu.Item, {
      className: "" + classes.menuitem
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: classes.menulink + "  omg-layout_menu",
      to: link.to
    }, link.text));
  })), /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("div", null, website.frame), /*#__PURE__*/_react.default.createElement("footer", {
    className: "" + classes.footer
  }, slinks.map(function (slink) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: "" + classes.sicon,
      href: slink.url,
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      className: "" + classes.siconl,
      circular: classes.circular,
      name: slink.icon
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.copyright
  }, "\xA9 ", new Date().getFullYear(), ", -", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: website.url,
    className: "" + classes.copyright
  }, website.name), ".\xA0All Rights Reserved"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.children
  }, children));
};

var _default = Layout;
exports.default = _default;