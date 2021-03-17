"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("bootstrap/dist/css/bootstrap.min.css");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./style.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OmgServices3 = function OmgServices3(_ref) {
  var _ref$info = _ref.info,
      info = _ref$info === void 0 ? {} : _ref$info,
      _ref$services = _ref.services,
      services = _ref$services === void 0 ? {} : _ref$services,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? {} : _ref$cols;
  cols = _objectSpread({
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4
  }, cols);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color
    },
    className: "" + classes.maindiv
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.topcontain + " "
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
  }, info.text), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "" + classes.container
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "" + classes.row
  }, services.map(function (service, i) {
    var _service$cols;

    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, (0, _extends2.default)({}, cols, (_service$cols = service == null ? void 0 : service.cols) != null ? _service$cols : {}, {
      className: "" + classes.col
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "" + classes.card
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "" + classes.cardfront
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "" + classes.cardfbody
    }, /*#__PURE__*/_react.default.createElement("div", null, service.sicon, /*#__PURE__*/_react.default.createElement("h3", {
      className: "" + classes.header
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: classes.span + " "
    }), service.title), /*#__PURE__*/_react.default.createElement("p", {
      className: classes.parag + " "
    }, service.text)))), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.cardback + " "
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.cardbbody + " "
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
      src: service.img,
      className: classes.image + " "
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      href: service.button.url,
      className: "" + classes.button,
      variant: service.button.variant
    }, service.button.text)))));
  })))));
};

var _default = OmgServices3;
exports.default = _default;