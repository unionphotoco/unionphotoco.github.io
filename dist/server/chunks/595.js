"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 4595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ chakra_theme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/styled-system"
var styled_system_ = __webpack_require__(2819);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
// EXTERNAL MODULE: external "@chakra-ui/utils"
var utils_ = __webpack_require__(5360);
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/components/button.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // type AccessibleColor = {
//   bg?: string;
//   color?: string;
//   hoverBg?: string;
//   activeBg?: string;
// };

/** Accessible color overrides for less accessible colors. */
// const accessibleColorMap: { [key: string]: AccessibleColor } = {
//   yellow: {
//     bg: "yellow.400",
//     color: "black",
//     hoverBg: "yellow.500",
//     activeBg: "yellow.600",
//   },
//   cyan: {
//     bg: "cyan.400",
//     color: "black",
//     hoverBg: "cyan.500",
//     activeBg: "cyan.600",
//   },
// };

const variantGhost = (0,styled_system_.defineStyle)(props => {
  const {
    colorScheme: c,
    theme
  } = props;

  if (c === "white") {
    return {
      color: (0,theme_tools_.mode)(`inherit`, `whiteAlpha.800`)(props),
      _hover: {
        color: (0,theme_tools_.mode)(`whiteAlpha.800`, `blackAlpha.800`)(props),
        bg: (0,theme_tools_.mode)(`blackAlpha.900`, `whiteAlpha.900`)(props)
      },
      _active: {
        color: (0,theme_tools_.mode)(`whiteAlpha.900`, `blackAlpha.700`)(props),
        bg: (0,theme_tools_.mode)(`blackAlpha.900`, `whiteAlpha.900`)(props)
      }
    };
  }

  if (c === "gray") {
    return {
      color: (0,theme_tools_.mode)(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: (0,theme_tools_.mode)(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: {
        bg: (0,theme_tools_.mode)(`gray.200`, `whiteAlpha.300`)(props)
      }
    };
  }

  const darkHoverBg = (0,theme_tools_.transparentize)(`${c}.200`, 0.12)(theme);
  const darkActiveBg = (0,theme_tools_.transparentize)(`${c}.200`, 0.24)(theme);
  return {
    color: (0,theme_tools_.mode)(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: (0,theme_tools_.mode)(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: (0,theme_tools_.mode)(`${c}.100`, darkActiveBg)(props)
    }
  };
});
const variantOutline = (0,styled_system_.defineStyle)(props => {
  const {
    colorScheme: c
  } = props;
  const borderColor = (0,theme_tools_.mode)(`gray.200`, `whiteAlpha.300`)(props);

  if (c === "white") {
    return {
      border: "1px solid",
      borderColor: "whiteAlpha.800",
      color: c,
      ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
        marginEnd: "-1px"
      },
      _hover: {
        bg: "whiteAlpha.400",
        borderColor: "whiteAlpha.400"
      },
      _active: {
        bg: "whiteAlpha.600",
        borderColor: "whiteAlpha.600"
      }
    };
  }

  if (c === "black") {
    return {
      border: "1px solid",
      borderColor: "blackAlpha.800",
      color: c,
      ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
        marginEnd: "-1px"
      },
      _hover: {
        bg: "blackAlpha.400",
        borderColor: "blackAlpha.400"
      },
      _active: {
        bg: "blackAlpha.600",
        borderColor: "blackAlpha.600"
      }
    };
  }

  return _objectSpread({
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px"
    }
  }, (0,utils_.runIfFn)(variantGhost, props));
});
const variantSolid = (0,styled_system_.defineStyle)(props => {
  const {
    colorScheme: c
  } = props;

  if (c === "black") {
    const bg = "black";
    const color = "white";
    return {
      bg,
      color,
      _hover: {
        color: "black",
        bg: "white",
        _disabled: {
          color,
          bg
        }
      },
      _active: {
        bg: "whiteAlpha.600"
      }
    };
  }

  if (c === "white") {
    const bg = "white";
    const color = "black";
    return {
      bg,
      color,
      _hover: {
        color: "white",
        bg: "black",
        _disabled: {
          color,
          bg
        }
      },
      _active: {
        bg: "blackAlpha.600"
      }
    };
  }
});
const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid // link: variantLink,
  // unstyled: variantUnstyled,

};
const baseStyle = (0,styled_system_.defineStyle)({
  borderRadius: "xl",
  letterSpacing: "0.02em" // textTransform: "uppercase",

});
const sizes = {
  jumbo: (0,styled_system_.defineStyle)({
    px: 16,
    h: 16,
    fontSize: "lg"
  })
};
/* harmony default export */ const components_button = ((0,styled_system_.defineStyleConfig)({
  baseStyle,
  variants,
  sizes
}));
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/components/link.ts
function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? link_ownKeys(Object(source), !0).forEach(function (key) { link_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const variantUnderline = props => {
  const {
    colorScheme: c,
    colorMode: m
  } = props;
  return {
    position: "relative",
    fontWeight: "semibold",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "2px",
      borderRadius: "2px",
      // backgroundColor: "currentColor",
      backgroundColor: m === "light" ? `${c}.400` : `${c}.500`,
      bottom: -1,
      left: 0,
      transformOrigin: "right",
      transform: "scaleX(0)",
      transition: "transform .3s ease-in-out"
    },
    "&:hover::before": {
      transformOrigin: "left",
      transform: "scaleX(1)"
    },
    _hover: {
      color: m === "light" ? `${c}.400` : `${c}.500`,
      textDecoration: "none"
    }
  };
};

const variantContinue = props => {
  const {
    colorScheme: c,
    colorMode: m
  } = props;
  const styles = {
    position: "relative",
    display: "inline",
    // color: m === "light" ? `${c}.400` : `${c}.500`,
    fontWeight: "semibold",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "1px",
      borderRadius: "1px",
      backgroundColor: "currentColor",
      bottom: -2,
      left: 0,
      transformOrigin: "right"
    },
    "&:hover::before": {
      transformOrigin: "left",
      transform: "scaleX(1)"
    },
    _hover: {
      color: m === "light" ? `${c}.200` : `${c}.400`,
      textDecoration: "none"
    }
  };

  if (c === "black") {
    return link_objectSpread(link_objectSpread({}, styles), {}, {
      color: m === "light" ? `black` : `white`,
      _hover: link_objectSpread(link_objectSpread({}, styles._hover), {}, {
        color: m === "light" ? `blackAlpha.600` : `whiteAlpha.600`
      })
    });
  }

  if (c === "white") {
    return link_objectSpread(link_objectSpread({}, styles), {}, {
      color: m === "light" ? `white` : `whiteAlpha.800`,
      _hover: link_objectSpread(link_objectSpread({}, styles._hover), {}, {
        color: m === "light" ? `blackAlpha.600` : `whiteAlpha.600`
      })
    });
  }

  return link_objectSpread(link_objectSpread({}, styles), {}, {
    color: m === "light" ? `${c}.400` : `${c}.500`
  });
};

const link_variants = {
  underline: variantUnderline,
  continue: variantContinue
};
const defaultProps = {
  colorScheme: "brand"
};
const link_baseStyle = {
  transitionProperty: "common",
  transitionDuration: "normal",
  transitionTimingFunction: "ease-in-out",
  _hover: {
    textDecoration: "none"
  },
  _focus: {
    boxShadow: "outline"
  }
};
/* harmony default export */ const components_link = ({
  baseStyle: link_baseStyle,
  variants: link_variants,
  // sizes,
  defaultProps
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/components/text.ts
const variantSubtitle = props => {
  const {
    colorMode: m
  } = props;
  return {
    fontSize: "md",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: m === "light" ? "brand.400" : "brand.300"
  };
};

const text_variants = {
  subtitle: variantSubtitle
};
/* harmony default export */ const components_text = ({
  // baseStyle,
  variants: text_variants // sizes,

});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/foundations/colors.ts
// export default {
//   brand: baseTheme.colors.blue,
// };
const deepPurple = {
  50: "#EDE7F6",
  100: "#D1C4E9",
  200: "#B39DDB",
  300: "#9575CD",
  400: "#7E57C2",
  500: "#673AB7",
  600: "#5E35B1",
  700: "#512DA8",
  800: "#4527A0",
  900: "#311B92"
};
const lightBlue = {
  50: "#E1F5FE",
  100: "#B3E5FC",
  200: "#81D4FA",
  300: "#4FC3F7",
  400: "#29B6F6",
  500: "#03A9F4",
  600: "#039BE5",
  700: "#0288D1",
  800: "#0277BD",
  900: "#01579B"
};
const lightGreen = {
  50: "#F1F8E9",
  100: "#DCEDC8",
  200: "#C5E1A5",
  300: "#AED581",
  400: "#9CCC65",
  500: "#8BC34A",
  600: "#7CB342",
  700: "#689F38",
  800: "#558B2F",
  900: "#33691E"
};
const lime = {
  50: "#F9FBE7",
  100: "#F0F4C3",
  200: "#E6EE9C",
  300: "#DCE775",
  400: "#D4E157",
  500: "#CDDC39",
  600: "#C0CA33",
  700: "#AFB42B",
  800: "#9E9D24",
  900: "#827717"
};
const amber = {
  50: "#FFF8E1",
  100: "#FFECB3",
  200: "#FFE082",
  300: "#FFD54F",
  400: "#FFCA28",
  500: "#FFC107",
  600: "#FFB300",
  700: "#FFA000",
  800: "#FF8F00",
  900: "#FF6F00"
};
const deepOrange = {
  50: "#FBE9E7",
  100: "#FFCCBC",
  200: "#FFAB91",
  300: "#FF8A65",
  400: "#FF7043",
  500: "#FF5722",
  600: "#F4511E",
  700: "#E64A19",
  800: "#D84315",
  900: "#BF360C"
};
const brown = {
  50: "#EFEBE9",
  100: "#D7CCC8",
  200: "#BCAAA4",
  300: "#A1887F",
  400: "#8D6E63",
  500: "#795548",
  600: "#6D4C41",
  700: "#5D4037",
  800: "#4E342E",
  900: "#3E2723"
};
const deepBlue = {
  50: "#E8EDFD",
  100: "#BECCF8",
  200: "#95ABF4",
  300: "#6B8AF0",
  400: "#4169EB",
  500: "#1849E7",
  600: "#133AB9",
  700: "#0E2C8B",
  800: "#0A1D5C",
  900: "#050F2E"
};
const indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e"
};
const blueGray = {
  50: "#ECEFF1",
  100: "#CFD8DC",
  200: "#B0BEC5",
  300: "#90A4AE",
  400: "#78909C",
  500: "#607D8B",
  600: "#546E7A",
  700: "#455A64",
  800: "#37474F",
  900: "#263238"
};
const magenta = {
  50: "#FFF5F7",
  100: "#FFE6F2",
  200: "#FFACD6",
  300: "#FF73B9",
  400: "#FF399D",
  500: "#FF0080",
  600: "#D30082",
  700: "#A70082",
  800: "#7B0079",
  900: "#4F004F"
};
/* harmony default export */ const colors = ({
  brand: deepBlue,
  deepPurple,
  lightBlue,
  indigo,
  deepBlue,
  lightGreen,
  lime,
  magenta,
  amber,
  deepOrange,
  brown,
  blueGray,
  github: {
    400: "#333"
  },
  discord: {
    400: "rgba(88, 118, 224, 1)"
  }
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/foundations/fontSizes.ts
/* harmony default export */ const fontSizes = ({
  lg: "18px",
  "5xl": "46px"
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/foundations/shadows.ts
/* harmony default export */ const shadows = ({
  outline: "0 0 0 3px var(--chakra-colors-brand-100)"
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/styles.ts

const styles = {
  global: props => ({
    // "html, body": {
    //   fontFamily:
    //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    // },
    "html, body": {
      fontFamily: "body"
    },
    h1: {
      fontWeight: 700 // marginBottom: "0.5em",

    },
    p: {// marginBottom: "1em",
    },
    "*::selection, mark": {
      color: (0,theme_tools_.mode)("brand.400", "brand.400")(props),
      background: (0,theme_tools_.mode)("brand.50", "brand.900")(props)
    }
  })
};
/* harmony default export */ const theme_styles = (styles);
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/index.ts








/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */
// Color mode config

const config = {
  initialColorMode: "light" // useSystemColorMode: true,

};
const fonts = {
  heading: '"Playfair Display", sans-serif',
  body: "Raleway, sans-serif",
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` // body: "Josefin Sans, sans-serif",

};
const overrides = {
  config,
  styles: theme_styles,
  colors: colors,
  shadows: shadows,
  fonts,
  fontSizes: fontSizes,
  components: {
    Button: components_button,
    Input: {
      defaultProps: {
        focusBorderColor: "brand.400" // errorBorderColor: "yellow.400",

      },
      sizes: {
        lg: {
          field: {
            px: 6,
            py: 4,
            borderRadius: "xl"
          },
          addon: {
            borderRadius: "xl"
          }
        },
        md: {
          field: {
            borderRadius: "xl"
          },
          addon: {
            borderRadius: "xl"
          }
        },
        sm: {
          field: {
            borderRadius: "lg"
          },
          addon: {
            borderRadius: "lg"
          }
        },
        xs: {
          field: {
            borderRadius: "md"
          },
          addon: {
            borderRadius: "md"
          }
        }
      }
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.400",
        borderRadius: "xl" // errorBorderColor: "yellow.400",

      },
      sizes: {
        lg: {
          field: {
            borderRadius: "xl"
          }
        },
        md: {
          field: {
            borderRadius: "xl"
          }
        },
        sm: {
          field: {
            borderRadius: "lg"
          }
        }
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "brand.400" // errorBorderColor: "yellow.400",

      },
      sizes: {
        lg: {
          borderRadius: "xl"
        }
      }
    },
    Text: components_text,
    Link: components_link
  }
};
const theme = (0,react_.extendTheme)(overrides, (0,react_.withDefaultColorScheme)({
  colorScheme: "brand"
}));
/* harmony default export */ const chakra_theme = (theme);

/***/ })

};
;