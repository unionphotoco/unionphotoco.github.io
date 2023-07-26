"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/definitions/chakra/theme/index.ts + 7 modules
var theme = __webpack_require__(4595);
// EXTERNAL MODULE: ./src/definitions/context/theme.tsx
var context_theme = __webpack_require__(544);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/definitions/data/cart_items.ts
/* harmony default export */ const cart_items = ([{
  id: "001",
  image: "/images/product-1.png",
  title: "Basic Medium Weight T-Shirt",
  price: 59.9,
  qty: 2,
  variants: [{
    key: "Gender",
    value: "Men"
  }, {
    key: "Size",
    value: "XL"
  }]
}, {
  id: "002",
  image: "/images/product-2.png",
  title: "Leather Backpack",
  price: 199.95,
  qty: 1,
  variants: [{
    key: "Color",
    value: "Fire brick"
  }]
}]);
const savedItems = [{
  id: "004",
  image: "/images/product-3.png",
  title: "Oversized Sweatshirt",
  price: 119.9,
  // sale_price: 99.99,
  rating: 4,
  qty: 1
}, {
  id: "001",
  image: "/images/product-1.png",
  title: "Basic Medium Weight T-Shirt",
  price: 59.9,
  rating: 4.45,
  qty: 1,
  variants: [{
    key: "Gender",
    value: "Woman"
  }, {
    key: "Size",
    value: "S"
  }]
}, {
  id: "003",
  image: "/images/product-4.png",
  title: "Retro High-Top Sneakers",
  rating: 4.2,
  price: 149.9,
  qty: 1,
  variants: [{
    key: "Size",
    value: "9.5"
  }, {
    key: "Color",
    value: "White"
  }]
}, {
  id: "002",
  image: "/images/product-2.png",
  title: "Fire brick red Backpack",
  price: 459.9,
  sale_price: 259.9,
  rating: 4.6,
  qty: 1,
  variants: [{
    key: "Color",
    value: "Amber"
  }]
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/definitions/context/cart.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let CartActions;

(function (CartActions) {
  CartActions["CART_DRAWER_TOGGLE"] = "CART_DRAWER_TOGGLE";
  CartActions["CART_DRAWER_CLOSE"] = "CART_DRAWER_CLOSE";
  CartActions["ADD_PRODUCT"] = "ADD_PRODUCT";
  CartActions["UPDATE_QTY"] = "UPDATE_QTY";
  CartActions["REMOVE_PRODUCT"] = "REMOVE_PRODUCT";
})(CartActions || (CartActions = {}));

const initialState = {
  toggle: false,
  cart: cart_items,
  saved: savedItems
};
const CartCtx = /*#__PURE__*/(0,external_react_.createContext)({
  state: initialState,
  dispatch: () => null
}); // Actions

const UPDATE_QTY = (state, payload) => {
  // console.log("UPDATE_QTY", state, payload);
  const index = state.cart.findIndex(item => item.id === payload.id); // console.log("FindIndex", index);

  if (index >= 0) {
    const newCart = [...state.cart];

    const updatedItem = _objectSpread({}, newCart[index]);

    updatedItem.qty = payload.qty;
    newCart[index] = updatedItem;
    return _objectSpread(_objectSpread({}, state), {}, {
      cart: newCart
    });
  } // console.log("newState", newState);
  // console.log("payload", payload);


  return state;
};

function reducer(state, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case "CART_DRAWER_TOGGLE":
      return _objectSpread(_objectSpread({}, state), {}, {
        toggle: !state.toggle
      });

    case "CART_DRAWER_CLOSE":
      return _objectSpread(_objectSpread({}, state), {}, {
        toggle: false
      });

    case "ADD_PRODUCT":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: state.cart.concat(payload) // cart: [...state.cart, payload],

      });

    case "UPDATE_QTY":
      return UPDATE_QTY(state, payload);

    case "REMOVE_PRODUCT":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: state.cart.filter(item => item !== payload)
      });

    default:
      return state;
  }
}

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialState);
  return /*#__PURE__*/jsx_runtime_.jsx(CartCtx.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};
;// CONCATENATED MODULE: ./src/definitions/context/checkout.tsx
function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? checkout_ownKeys(Object(source), !0).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let CheckoutActions;

(function (CheckoutActions) {
  CheckoutActions["SHIPPING"] = "SHIPPING";
})(CheckoutActions || (CheckoutActions = {}));

const checkout_initialState = {
  shipping: {
    id: null,
    price: 0
  }
};
const CheckoutCtx = /*#__PURE__*/(0,external_react_.createContext)({
  state: checkout_initialState,
  dispatch: () => null
});

function checkout_reducer(state, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case "SHIPPING":
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        shipping: payload.shipping
      });

    default:
      return state;
  }
}

const CheckoutProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(checkout_reducer, checkout_initialState);
  return /*#__PURE__*/jsx_runtime_.jsx(CheckoutCtx.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};
;// CONCATENATED MODULE: ./src/definitions/utils/index.ts
const __DEV__ = false;
// EXTERNAL MODULE: ./src/definitions/site/index.ts
var site = __webpack_require__(4094);
;// CONCATENATED MODULE: ./src/definitions/utils/price-format.ts
/**
 * It takes a number and returns a string with the number formatted as a price
 * @param {number} value - number - The value to format.
 * @returns A function that takes a number and returns a string.
 */


const PriceFormat = (value, min = 2, max = 2) => {
  return site/* default.defaultCurrencySymbol */.Z.defaultCurrencySymbol + value.toLocaleString(undefined, {
    // maximumSignificantDigits: 2,
    minimumFractionDigits: min,
    maximumFractionDigits: max
  });
};

/* harmony default export */ const price_format = (PriceFormat);
// EXTERNAL MODULE: ./src/components/image/index.tsx
var components_image = __webpack_require__(8226);
;// CONCATENATED MODULE: ./src/components/cart/cart-items.tsx
function cart_items_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function cart_items_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cart_items_ownKeys(Object(source), !0).forEach(function (key) { cart_items_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cart_items_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function cart_items_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const CartItems = ({
  name,
  direction
}) => {
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(CartCtx);
  const defaultName = name ?? "cart-items";
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: !!state.cart.length && state.cart.map((item, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
      direction: direction ?? ["column", "row", "row"],
      spacing: [5],
      w: "full",
      align: "stretch",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.AspectRatio, {
        flex: "1",
        maxW: 24,
        ratio: 1,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          flex: "1",
          w: "full",
          h: "full",
          p: 0,
          bg: "transparent",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z // loader={customLoader}
          , {
            src: item.image,
            alt: item.title // srcSet={item.image.srcSet}
            ,
            width: "96",
            height: "96",
            layout: "fixed",
            objectFit: "cover",
            objectPosition: "top center"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        flex: "2",
        align: "stretch",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          justify: "space-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            noOfLines: 2,
            fontWeight: "bold",
            children: item.title
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontFamily: "mono",
            children: price_format(item.price)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Wrap, {
          spacing: [1],
          shouldWrapChildren: true,
          children: item.variants.map(variant => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            fontSize: "sm",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
              as: "span",
              fontWeight: "bold",
              children: [variant.key, ":"]
            }), " ", variant.value]
          }, `${defaultName}-item-variants-${variant.key}`))
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          fontSize: "sm",
          align: "center",
          justify: "space-between",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Select, {
            w: 16,
            size: "sm" // defaultValue={item.qty}
            ,
            value: item.qty,
            bg: (0,react_.useColorModeValue)("white", "gray.800"),
            onChange: e => dispatch({
              type: CartActions.UPDATE_QTY,
              payload: cart_items_objectSpread(cart_items_objectSpread({}, item), {}, {
                qty: Number(e.target.value)
              })
            }),
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "1",
              children: "1"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "2",
              children: "2"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "3",
              children: "3"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "4",
              children: "4"
            })]
          })
        })]
      })]
    }, `${defaultName}-${item.title}-${idx}`))
  });
};

/* harmony default export */ const cart_cart_items = (/*#__PURE__*/(0,external_react_.memo)(CartItems));
;// CONCATENATED MODULE: ./src/components/cart/cart-drawer.tsx










const CartDrawer = () => {
  const checkout = (0,external_react_.useContext)(CheckoutCtx);
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(CartCtx);
  const subTotal = state.cart.reduce((total, item) => total + item.price * item.qty, 0);
  const shippingCost = checkout.state.shipping.price ?? 0;
  const total = subTotal + shippingCost;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Drawer, {
    size: "md",
    placement: "right",
    onClose: () => dispatch({
      type: CartActions.CART_DRAWER_CLOSE
    }),
    isOpen: state.toggle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.DrawerOverlay, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.DrawerContent, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.DrawerCloseButton, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.DrawerHeader, {
        borderBottomWidth: "1px",
        children: "Shopping Cart"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.DrawerBody, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
          my: 4,
          spacing: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(cart_cart_items, {})
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.DrawerFooter, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
          width: "full",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              justify: "space-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                children: "Subtotal"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontFamily: "mono",
                children: price_format(subTotal)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              justify: "space-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                children: "Shipping cost"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontFamily: "mono",
                children: shippingCost ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: ["+", price_format(shippingCost)]
                }) : 0
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              justify: "space-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontWeight: "bold",
                children: "Total"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                fontFamily: "mono",
                fontWeight: "bold",
                children: price_format(total)
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            width: "full",
            size: "lg",
            children: "Checkout"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            width: "full",
            size: "lg",
            variant: "outline",
            colorScheme: "gray",
            children: "Continue Shopping"
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const cart_drawer = (CartDrawer);
;// CONCATENATED MODULE: ./src/layouts/default.tsx









const HeaderDefault = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(676), __webpack_require__.e(664), __webpack_require__.e(555)]).then(__webpack_require__.bind(__webpack_require__, 3555)), {
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(react_.Spinner, {}),
  loadableGenerated: {
    modules: ["../src/layouts/default.tsx -> " + "@components/header/header-1"]
  }
});

if (__DEV__) {
  HeaderDefault.displayName = "HeaderDefault";
}

const FooterDefault = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(676), __webpack_require__.e(664), __webpack_require__.e(204)]).then(__webpack_require__.bind(__webpack_require__, 5204)), {
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(react_.Spinner, {}),
  loadableGenerated: {
    modules: ["../src/layouts/default.tsx -> " + "@components/footer/footer-1"]
  }
});

if (__DEV__) {
  FooterDefault.displayName = "FooterDefault";
}

const DefaultLayout = ({
  header,
  footer,
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(CheckoutProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CartProvider, {
      children: [header ? header : /*#__PURE__*/jsx_runtime_.jsx(HeaderDefault, {
        pos: "absolute",
        zIndex: "sticky",
        top: 0,
        width: "full",
        py: 6
      }), children, footer ? footer : /*#__PURE__*/jsx_runtime_.jsx(FooterDefault, {}), /*#__PURE__*/jsx_runtime_.jsx(cart_drawer, {})]
    })
  });
};

if (__DEV__) {
  DefaultLayout.displayName = "DefaultLayout";
}

/* harmony default export */ const layouts_default = (/*#__PURE__*/(0,external_react_.memo)(DefaultLayout));
;// CONCATENATED MODULE: ./next-seo.config.js
/* harmony default export */ const next_seo_config = ({
  titleTemplate: "%s | Union Photo Co.",
  defaultTitle: "Union Photo Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unionphotoco.com/",
    site_name: "Union Photo Co."
  },
  additionalMetaTags: [{
    property: "dc:creator",
    content: "Union Photo Co."
  }]
});
;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















 // Global CSS






const createEmotionCache = () => {
  return cache_default()({
    key: "css"
  });
};

const clientSideEmotionCache = createEmotionCache();

function SencoApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    external_aos_default().init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
    value: emotionCache,
    children: /*#__PURE__*/jsx_runtime_.jsx(context_theme/* ThemeColorProvider */.e, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, _app_objectSpread({}, next_seo_config)), Component.PageLayout ? /*#__PURE__*/jsx_runtime_.jsx(Component.PageLayout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        }) : /*#__PURE__*/jsx_runtime_.jsx(layouts_default, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        })]
      })
    })
  });
}

/* harmony default export */ const _app = (SencoApp);

/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ThemeColorProvider),
/* harmony export */   "r": () => (/* binding */ ThemeColorContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // Default color mode is deepBlue


const defaultColorScheme = "deepBlue";
const ThemeColorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  colorScheme: defaultColorScheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorScheme: () => {}
});
const ThemeColorProvider = ({
  children
}) => {
  const {
    0: colorScheme,
    1: setColorScheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultColorScheme);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ThemeColorContext.Provider, {
    value: {
      colorScheme,
      setColorScheme
    },
    children: children
  });
};

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2819:
/***/ ((module) => {

module.exports = require("@chakra-ui/styled-system");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 5360:
/***/ ((module) => {

module.exports = require("@chakra-ui/utils");

/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733,486,94,595,226], () => (__webpack_exec__(3402)));
module.exports = __webpack_exports__;

})();