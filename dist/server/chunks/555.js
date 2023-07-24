"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 3555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header_1)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/definitions/navigation/main.tsx
const main = [{
  title: "Photo Booth Rentals",
  href: "/photo-booth-rentals",
  colorScheme: "green"
}, {
  title: "Event Gallery",
  href: "https://unionphotoco.pixieset.com",
  colorScheme: "green",
  target: "_blank"
}, // {
//   title: "Lookbook",
//   href: "/lookbook",
// },
// {
//   title: "FAQs",
//   href: "/faq",
// },
// {
//   title: "Pages",
//   href: "",
//   subColumns: [1, 2, 2],
//   subChildren: PagesSubChildren,
//   subitems: [
//     // {
//     //   icon: <Icon fontSize={24} as={MdInfoOutline} />,
//     //   title: "About",
//     //   href: "/about",
//     //   description: "Trending Design to inspire you",
//     // },
//     // {
//     //   icon: <Icon fontSize={24} as={HiOutlineSupport} />,
//     //   title: "Help & Support",
//     //   href: "/help",
//     //   description: "Gain access to product support",
//     // },
//     // {
//     //   icon: <Icon fontSize={24} as={MdOutlineAssignment} />,
//     //   title: "Invoice",
//     //   href: "/invoice",
//     //   description: "Fully customizable dynamic invoice page",
//     // },
//     {
//       icon: <Icon fontSize={24} as={TbListDetails} />,
//       title: "Product Overview",
//       href: "/product-overview",
//       description: "Summary of the product",
//     },
//     {
//       icon: <Icon fontSize={24} as={BiGridAlt} />,
//       title: "Filtered Products",
//       href: "/filtered-products",
//       description: "Filtered product listings page",
//     },
//     {
//       icon: <Icon fontSize={24} as={BsCart} />,
//       title: "Shopping Cart",
//       href: "/shopping-cart",
//       description: "You can edit and see the products you have added",
//     },
//     {
//       icon: <Icon fontSize={24} as={IoBagCheckOutline} />,
//       title: "Checkout",
//       href: "/checkout",
//       description: "Customers completing their orders",
//     },
//   ],
// },
// {
//   title: "Contact",
//   href: "/contact",
// },
{
  title: "833.360.3679",
  href: "tel:8333603679",
  id: "menu-phonenumber"
}, {
  title: "Book Now",
  href: "/book-now",
  id: "menu-booknow",
  colorScheme: "green"
}]; // Add Tag to any navigation item

const ItemsTag = [{
  title: "More Demo",
  badge: "Soon",
  colorScheme: "green"
}, {
  title: "Account Forms",
  badge: "Modal",
  colorScheme: "pink"
}];
/* harmony default export */ const navigation_main = (main);
// EXTERNAL MODULE: ./src/components/logo/index.tsx
var logo = __webpack_require__(9674);
// EXTERNAL MODULE: ./src/components/image/index.tsx
var components_image = __webpack_require__(8226);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/navbar/index.tsx
const _excluded = ["items", "colorScheme", "containerRef"],
      _excluded2 = ["items"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const styledLink = {
  background: "black",
  color: "white",
  borderRadius: "0",
  padding: ".5rem 1rem",
  fontWeight: "bold"
};

const DesktopNav = _ref => {
  let {
    items = [],
    colorScheme,
    containerRef
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const internalRef = (0,external_react_.useRef)();
  const {
    0: mega,
    1: setMega
  } = (0,external_react_.useState)(null);
  const linkFontSize = "md";
  const linkColor = (0,react_.useColorModeValue)("gray.600", "gray.200");
  const linkHoverColor = (0,react_.useColorModeValue)("gray.800", "white");
  const popoverContentBgColor = (0,react_.useColorModeValue)("white", "black");

  const handleRouteChange = () => setMega(null);

  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  (0,react_.useOutsideClick)({
    ref: containerRef,
    handler: e => {
      /**
       * Exclude internalRef
       * @FIX:  Use this feature with useMergeRefs in the future.
       * @ISSUE: https://github.com/chakra-ui/chakra-ui/issues/4869
       */
      const tree = e.composedPath();
      if (tree.indexOf(internalRef.current) === -1) setMega(null);
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, _objectSpread(_objectSpread({
    ref: internalRef,
    direction: "row",
    spacing: 4
  }, rest), {}, {
    children: items.map((item, index, items) => /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      children: item.subitems ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
          onClick: mega != index ? () => setMega(index) : null,
          variant: "unstyled",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            as: "span",
            p: 2 // href={item.href ?? "#"}
            ,
            fontSize: linkFontSize,
            fontWeight: 500,
            color: linkColor // cursor="pointer"
            ,
            style: item?.style,
            _hover: {
              textDecoration: "none",
              color: linkHoverColor
            },
            children: [item.title, /*#__PURE__*/jsx_runtime_.jsx(icons_.ChevronDownIcon, {
              h: "1.2em",
              w: "1.2em",
              ml: 2
            })]
          })
        }), item.subitems && /*#__PURE__*/jsx_runtime_.jsx(react_.Portal, {
          containerRef: containerRef,
          children: mega === index && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
            p: 6,
            mt: 4,
            shadow: "xl",
            width: "full",
            rounded: "xl",
            align: "start",
            spacing: [10],
            direction: ["row"],
            "data-aos": "fade-up-low",
            divider: /*#__PURE__*/jsx_runtime_.jsx(react_.StackDivider, {}),
            bg: popoverContentBgColor,
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
              width: "full",
              columns: item.subColumns ?? 2,
              spacing: 2,
              children: item.subitems.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(DesktopSubNav, _objectSpread(_objectSpread({}, item), {}, {
                colorScheme: colorScheme
              }), `${idx}--${item.title}`))
            }), item.subChildren &&
            /*#__PURE__*/
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jsx_runtime_.jsx(react_.chakra.div, {
              as: item.subChildren
            })]
          })
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: item.href,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
          target: item.target ?? "_self",
          p: 2,
          fontSize: linkFontSize,
          rounded: "xl",
          fontWeight: 500,
          color: linkColor,
          _hover: {
            color: linkHoverColor
          },
          style: index === items.length - 1 ? styledLink : null,
          children: item.title
        }, `idx-${item.title}-link`)
      }, `idx-${item.title}`)
    }, `index-${item.title}`))
  }));
};

DesktopNav.displayName = "DesktopNav";

const DesktopSubNav = ({
  icon,
  image,
  title,
  href,
  description,
  colorScheme
}) => {
  const hoverBG = (0,react_.useColorModeValue)("gray.100", "gray.900");
  const titleColor = (0,react_.useColorModeValue)("blackAlpha.800", "whiteAlpha.800");
  const hoverTitleColor = (0,react_.useColorModeValue)("blackAlpha.800", "white");
  const descriptionColor = (0,react_.useColorModeValue)("blackAlpha.600", "whiteAlpha.600");
  const hoverColorDescription = (0,react_.useColorModeValue)("blackAlpha.700", "whiteAlpha.700");
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
      p: 5,
      role: "group",
      rounded: "md",
      display: "block",
      transitionProperty: "common",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-in-out",
      target: "_blank",
      _hover: {
        bg: hoverBG
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        direction: "row",
        align: "center",
        children: [icon && /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          alignSelf: "start",
          mr: 2,
          mt: 1,
          children: /*#__PURE__*/(0,external_react_.isValidElement)(icon) ? icon : /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
            as: icon
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          align: "stretch",
          justify: "center",
          direction: "column",
          children: [image && /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            mb: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
              maxH: 250,
              width: 800,
              height: 600 // layout="responsive"
              ,
              objectFit: "cover",
              objectPosition: "top",
              rounded: "2xl",
              alt: title,
              src: image
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
            mb: 0 // mt={image ? 6 : 0}
            ,
            fontSize: "xl",
            fontWeight: 600,
            color: titleColor,
            transitionProperty: "common",
            transitionDuration: "normal",
            transitionTimingFunction: "ease-in-out",
            _groupHover: {
              color: hoverTitleColor
            },
            children: [title, " ff"]
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: "sm",
            transitionProperty: "common",
            transitionDuration: "normal",
            transitionTimingFunction: "ease-in-out",
            color: descriptionColor,
            _groupHover: {
              color: hoverColorDescription
            },
            children: description
          })]
        }), !image && /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          flex: 1,
          align: "center",
          justify: "flex-end",
          opacity: 0,
          transition: "all 250ms ease-in-out",
          transform: "translateX(-10px)",
          _groupHover: {
            opacity: 1,
            transform: "translateX(0)"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
            as: icons_.ChevronRightIcon,
            color: `${colorScheme}.400`,
            w: 5,
            h: 5
          })
        })]
      })
    })
  });
};

DesktopSubNav.displayName = "DesktopSubNav";
const MobileNav = _ref2 => {
  let {
    items = []
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, _objectSpread(_objectSpread({
    p: 4,
    display: {
      lg: "none"
    }
  }, rest), {}, {
    children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(MobileNavItem // id={`MobileNavItem-${item.title}-${index}`}
    , _objectSpread({}, item), `MobileNavItem-${item.title}-${index}`))
  }));
};
MobileNav.displayName = "MobileNav";

const MobileNavItem = ({
  title,
  subitems,
  href,
  subChildren,
  isLastItem
}) => {
  const {
    isOpen,
    onToggle
  } = (0,react_.useDisclosure)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
    spacing: 4,
    onClick: subitems && onToggle,
    cursor: subitems ? "pointer" : null,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      py: 2,
      as: subitems ? null : react_.Link,
      href: href ? href : null,
      justify: "space-between",
      align: "center",
      style: isLastItem ? styledLink : null,
      _hover: {
        textDecoration: "none"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontWeight: 600,
        color: (0,react_.useColorModeValue)("gray.600", "gray.200"),
        children: title
      }), subitems && /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
        as: icons_.ChevronDownIcon,
        transition: "all 250ms ease-in-out",
        transform: isOpen ? "rotate(180deg)" : "",
        w: 6,
        h: 6
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Collapse, {
      in: isOpen,
      animateOpacity: true,
      style: {
        marginTop: "0!important"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        mt: 2,
        pl: 4,
        borderLeft: 1,
        borderStyle: "solid",
        borderColor: (0,react_.useColorModeValue)("gray.200", "gray.700"),
        align: "start",
        children: [subitems && subitems.map(item => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: item.href,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            py: 2,
            children: item.title
          })
        }, item.title)), subChildren && /*#__PURE__*/jsx_runtime_.jsx(react_.chakra.div, {
          as: subChildren
        })]
      })
    })]
  });
};

MobileNavItem.displayName = "MobileNavItem";
/* harmony default export */ const navbar = (/*#__PURE__*/(0,external_react_.memo)(DesktopNav));
;// CONCATENATED MODULE: ./src/components/header/header-1.tsx
function header_1_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function header_1_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? header_1_ownKeys(Object(source), !0).forEach(function (key) { header_1_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : header_1_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function header_1_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import type { ChakraProps, ThemingProps } from "@chakra-ui/react";







const Header1 = props => {
  const {
    isOpen,
    onToggle,
    onClose
  } = (0,react_.useDisclosure)();
  const breakpoint = {
    base: "none",
    lg: "flex"
  };
  const breakpointReverse = {
    base: "flex",
    lg: "none"
  };
  const ref = (0,external_react_.useRef)();
  const mobileMenuBG = (0,react_.useColorModeValue)("white", "gray.900");
  const col = (0,react_.useColorModeValue)("blackAlpha.700", "whiteAlpha.700");

  const handleRouteChange = () => onClose();

  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, header_1_objectSpread(header_1_objectSpread({
    py: 4
  }, props), {}, {
    bg: "white",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Container, {
      maxW: "container.xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        align: "center",
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            _hover: {
              color: col
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
              align: "center",
              children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {
                width: "250"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(navbar, {
          containerRef: ref,
          display: breakpoint,
          items: navigation_main
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          display: breakpointReverse,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
            onClick: onToggle,
            icon: isOpen ? /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseIcon, {
              w: 3,
              h: 3
            }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.HamburgerIcon, {
              w: 5,
              h: 5
            }),
            colorScheme: "white",
            borderRadius: "0",
            "aria-label": "Toggle Navigation"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        display: ["none", "none", "none", "block"],
        ref: ref,
        pos: "relative",
        zIndex: "sticky",
        width: "full"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Collapse, {
      in: isOpen,
      animateOpacity: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        display: breakpointReverse,
        mt: 4,
        py: 2,
        bg: mobileMenuBG,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Container, {
          maxW: "container.xl",
          children: /*#__PURE__*/jsx_runtime_.jsx(MobileNav, {
            items: navigation_main
          })
        })
      })
    })]
  }));
};

/* harmony default export */ const header_1 = (/*#__PURE__*/(0,external_react_.memo)(Header1));

/***/ }),

/***/ 9674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ Logo2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Logo = ({
  width
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
  src: "/images/logo/Bellevue-Photo-Booth-Rentals.png",
  alt: "Union Photo Co. photo booth rentals" // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ,
  htmlWidth: width
});

const Logo2 = ({
  width
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
  src: "/images/logo/Union Photo Co. Small White.png",
  alt: "Union Photo Co. photo booth rentals" // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ,
  htmlWidth: width
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Logo));

/***/ })

};
;