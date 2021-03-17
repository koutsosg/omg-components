"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _Carousel = _interopRequireDefault(require("react-bootstrap/Carousel"));

/**
 * A simple bootstrap slider
 *
 *
 */
var OmgCarousel = function OmgCarousel(_ref) {
  var slides = _ref.slides,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Carousel.default, {
    className: "" + settings.style,
    fade: settings.fade,
    pause: settings.pause,
    controls: settings.controls,
    indicators: settings.indicators,
    slide: settings.slide
  }, slides.map(function (slide) {
    return /*#__PURE__*/_react.default.createElement(_Carousel.default.Item, {
      className: slide.class.item + " ",
      interval: settings.speed
    }, slide.img2 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      className: "" + slide.class.img2,
      src: slide.img,
      alt: slide.alt
    }), /*#__PURE__*/_react.default.createElement("img", {
      className: "" + slide.class.img2,
      src: slide.img2,
      alt: slide.alt2
    })) : /*#__PURE__*/_react.default.createElement("img", {
      className: "" + slide.class.img,
      src: slide.img,
      alt: slide.alt
    }), (!!slide.head || slide.parag) && /*#__PURE__*/_react.default.createElement(_Carousel.default.Caption, {
      className: "" + slide.class.caption
    }, slide.head && /*#__PURE__*/_react.default.createElement("h3", {
      className: "" + slide.class.head
    }, slide.head), slide.parag && /*#__PURE__*/_react.default.createElement("p", {
      className: slide.class.parag + " "
    }, slide.parag)));
  })));
};

var _default = OmgCarousel;
exports.default = _default;