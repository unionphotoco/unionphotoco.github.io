"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 8226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export customLoader */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["loader", "width", "height", "alt", "src", "layout", "placeholder", "blurDataURL", "quality", "priority", "sizes", "rounded", "roundedTop", "roundedTopLeft", "roundedTopRight", "roundedTopStart", "roundedTopEnd", "roundedBottom", "roundedBottomLeft", "roundedBottomRight", "roundedBottomStart", "roundedBottomEnd", "roundedLeft", "roundedRight", "roundedStart", "roundedEnd"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const customLoader = ({
  src,
  width,
  quality = 75
}) => {
  return `${src}?w=${width}&q=${quality}&img`;
}; // const normalizeSrc = (src: string) => {
//   return src.startsWith("/") ? src.slice(1) : src;
// };
// const cloudflareLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
//   const params = [`width=${width}`];
//   if (quality) {
//     params.push(`quality=${quality}`);
//   }
//   const paramsString = params.join(",");
//   return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
// };

const CustomImage = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
  shouldForwardProp: props => ["loader", "width", "height", "alt", "src", "layout", "placeholder", "blurDataURL", "onLoadingComplete", "quality", "sizes"].includes(props)
}); // const NewImage = (props: any) => (
//   <CustomImage loader={cloudflareLoader} {...props} />
// );

const NextImage = props => {
  const {
    0: isLoaded,
    1: setIsLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const {
    loader,
    width,
    height,
    alt,
    src,
    layout,
    placeholder,
    blurDataURL,
    // onLoadingComplete,
    quality,
    priority,
    sizes,
    rounded,
    roundedTop,
    roundedTopLeft,
    roundedTopRight,
    roundedTopStart,
    roundedTopEnd,
    roundedBottom,
    roundedBottomLeft,
    roundedBottomRight,
    roundedBottomStart,
    roundedBottomEnd,
    roundedLeft,
    roundedRight,
    roundedStart,
    roundedEnd
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const {
    display = "flex"
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    position: "relative",
    isLoaded: isLoaded,
    display: display // height={hasFull ? "full" : null}
    // width={hasFull ? "full" : null}
    // sx={hasFullHeight ? childFullHeight : undefined}
    ,
    rounded: rounded,
    roundedTop: roundedTop,
    roundedTopLeft: roundedTopLeft,
    roundedTopRight: roundedTopRight,
    roundedTopStart: roundedTopStart,
    roundedTopEnd: roundedTopEnd,
    roundedBottom: roundedBottom,
    roundedBottomLeft: roundedBottomLeft,
    roundedBottomRight: roundedBottomRight,
    roundedBottomStart: roundedBottomStart,
    roundedBottomEnd: roundedBottomEnd,
    roundedLeft: roundedLeft,
    roundedRight: roundedRight,
    roundedStart: roundedStart,
    roundedEnd: roundedEnd,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CustomImage, _objectSpread({
      loader: loader,
      width: width,
      height: height,
      alt: alt,
      src: src,
      layout: layout,
      placeholder: placeholder,
      blurDataURL: blurDataURL,
      quality: quality,
      priority: priority,
      sizes: sizes,
      rounded: rounded,
      roundedTop: roundedTop,
      roundedTopLeft: roundedTopLeft,
      roundedTopRight: roundedTopRight,
      roundedTopStart: roundedTopStart,
      roundedTopEnd: roundedTopEnd,
      roundedBottom: roundedBottom,
      roundedBottomLeft: roundedBottomLeft,
      roundedBottomRight: roundedBottomRight,
      roundedBottomStart: roundedBottomStart,
      roundedBottomEnd: roundedBottomEnd,
      roundedLeft: roundedLeft,
      roundedRight: roundedRight,
      roundedStart: roundedStart,
      roundedEnd: roundedEnd // onLoadingComplete={onLoadingComplete}
      ,
      onLoadingComplete: () => setIsLoaded(true)
    }, rest))
  });
}; // export default memo(NewImage);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(NextImage));

/***/ })

};
;