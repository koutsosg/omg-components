"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("semantic-ui-css/semantic.min.css");

require("./style.css");

var _semanticUiReact = require("semantic-ui-react");

var Services2 = function Services2(_ref) {
  var color = _ref.color,
      services = _ref.services,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$info = _ref.info,
      info = _ref$info === void 0 ? {} : _ref$info;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: color
    },
    className: "" + classes.maindiv
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.info
  }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Image, {
    className: "" + classes.infoimg,
    src: info.img,
    fluid: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.overlay
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "" + classes.infotext
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "" + classes.infotexth
  }, info.title))), services.map(function (service) {
    return /*#__PURE__*/_react.default.createElement(_semanticUiReact.Segment, {
      className: "" + classes.services,
      placeholder: true
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Grid, {
      className: "" + classes.maingrid,
      columns: 2,
      stackable: true
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Grid.Column, {
      className: "" + classes.gridleft
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Image, {
      className: "" + classes.servimg,
      src: service.img,
      fluid: true
    })), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Grid.Column, {
      verticalAlign: "middle",
      className: "" + classes.gridright
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: classes.servhead + " "
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: classes.span + " "
    }), service.title), /*#__PURE__*/_react.default.createElement("p", {
      className: classes.servtext + " "
    }, service.text))));
  })));
};

var _default = Services2;
exports.default = _default;