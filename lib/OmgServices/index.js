"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("bootstrap/dist/css/bootstrap.min.css");

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var Services = function Services(_ref) {
  var _ref$info = _ref.info,
      info = _ref$info === void 0 ? {} : _ref$info,
      services = _ref.services,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color
    },
    className: "" + classes.maindiv
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container + " "
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.title + " "
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.span + " "
  }), info.title, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.span + " "
  })), /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.subtitle + " omg-subtitle"
  }, info.subtitle), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      paddingBottom: "1.75em"
    },
    className: classes.parag + "  text-center"
  }, info.text), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.row + " "
  }, services.map(function (service) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.col + " omg-serv"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "border"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.coldiv + "  omg-serv_img2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: classes.image + "  img-fluid omg-serv_img",
      src: service.img,
      alt: service.title
    })), service.sicon, /*#__PURE__*/_react.default.createElement("h2", {
      className: classes.header + " omg-serv_header"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: classes.span + " "
    }), service.title), /*#__PURE__*/_react.default.createElement("p", {
      className: classes.parag + " "
    }, service.text)));
  }))));
};

var _default = Services;
exports.default = _default;