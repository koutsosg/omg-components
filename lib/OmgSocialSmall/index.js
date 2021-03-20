"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("semantic-ui-css/semantic.min.css");

var _semanticUiReact = require("semantic-ui-react");

var Social = function Social(_ref) {
  var slinks = _ref.slinks,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, slinks.map(function (slink) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: "" + classes.sicon,
      href: slink.url,
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
      className: "" + classes.siconl,
      circular: classes.circular,
      name: slink.icon
    }));
  }));
};

var _default = Social;
exports.default = _default;