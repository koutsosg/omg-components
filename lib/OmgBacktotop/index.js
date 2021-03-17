"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("semantic-ui-css/semantic.min.css");

require("./style.css");

var _semanticUiReact = require("semantic-ui-react");

var ScrollTopArrow = function ScrollTopArrow(_ref) {
  var icon = _ref.icon,
      icon2 = _ref.icon2;

  var _useState = (0, _react.useState)(false),
      showScroll = _useState[0],
      setShowScroll = _useState[1];

  (0, _react.useEffect)(function () {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  var checkScrollTop = function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  var scrollTop = function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
    loading: icon2.loading,
    link: icon2.link,
    circular: icon2.circular,
    bordered: icon2.bordered,
    inverted: icon2.inverted,
    size: icon2.size,
    name: icon2.name,
    color: icon2.color,
    className: icon2.classes,
    onClick: scrollTop,
    style: {
      height: 40,
      display: showScroll ? "flex" : "none"
    }
  }), /*#__PURE__*/_react.default.createElement(_semanticUiReact.Icon, {
    loading: icon.loading,
    link: icon.link,
    circular: icon.circular,
    bordered: icon.bordered,
    inverted: icon.inverted,
    size: icon.size,
    name: icon.name,
    color: icon.color,
    className: icon.classes,
    onClick: scrollTop,
    style: {
      height: 40,
      display: showScroll ? "flex" : "none"
    }
  }));
};

var _default = ScrollTopArrow;
exports.default = _default;