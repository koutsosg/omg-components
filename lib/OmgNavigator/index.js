"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.OmgNavigator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var getRoutes = function getRoutes(_ref) {
  var links = _ref.links,
      pagenotfound = _ref.pagenotfound;
  var routes = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: link.to
    }, link.component);
  });
  return [].concat(routes, [/*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*"
  }, /*#__PURE__*/_react.default.createElement("div", null, pagenotfound))]);
};

var OmgNavigator = function OmgNavigator(_ref2) {
  var links = _ref2.links,
      container = _ref2.container;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, container( /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, getRoutes(links))));
};

exports.OmgNavigator = OmgNavigator;