"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.OmgNavigator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var getRoutes = function getRoutes(links, pnf) {
  var routes = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: link.to
    }, link.component);
  });
  return [].concat(routes, [/*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*"
  }, pnf.component)]);
};

var OmgNavigator = function OmgNavigator(_ref) {
  var links = _ref.links,
      container = _ref.container,
      pnf = _ref.pnf;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, container( /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, getRoutes(links, pnf))));
};

exports.OmgNavigator = OmgNavigator;