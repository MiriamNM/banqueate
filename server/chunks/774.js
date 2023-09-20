exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 6085:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "addBasePath", ({
  enumerable: true,
  get: function get() {
    return addBasePath;
  }
}));

var _addpathprefix = __webpack_require__(1751);

var _normalizetrailingslash = __webpack_require__(6962);

var basePath =  false || "";

function addBasePath(path, required) {
  return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 4318:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "addLocale", ({
  enumerable: true,
  get: function get() {
    return addLocale;
  }
}));

var _normalizetrailingslash = __webpack_require__(6962);

var addLocale = function addLocale(path) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) { var _require; }

  return path;
};

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2038:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  PrefetchKind: function PrefetchKind() {
    return _PrefetchKind;
  },
  ACTION_REFRESH: function ACTION_REFRESH() {
    return _ACTION_REFRESH;
  },
  ACTION_NAVIGATE: function ACTION_NAVIGATE() {
    return _ACTION_NAVIGATE;
  },
  ACTION_RESTORE: function ACTION_RESTORE() {
    return _ACTION_RESTORE;
  },
  ACTION_SERVER_PATCH: function ACTION_SERVER_PATCH() {
    return _ACTION_SERVER_PATCH;
  },
  ACTION_PREFETCH: function ACTION_PREFETCH() {
    return _ACTION_PREFETCH;
  },
  ACTION_FAST_REFRESH: function ACTION_FAST_REFRESH() {
    return _ACTION_FAST_REFRESH;
  },
  ACTION_SERVER_ACTION: function ACTION_SERVER_ACTION() {
    return _ACTION_SERVER_ACTION;
  }
});

var _ACTION_REFRESH = "refresh";
var _ACTION_NAVIGATE = "navigate";
var _ACTION_RESTORE = "restore";
var _ACTION_SERVER_PATCH = "server-patch";
var _ACTION_PREFETCH = "prefetch";
var _ACTION_FAST_REFRESH = "fast-refresh";
var _ACTION_SERVER_ACTION = "server-action";

var _PrefetchKind;

(function (PrefetchKind) {
  PrefetchKind["AUTO"] = "auto";
  PrefetchKind["FULL"] = "full";
  PrefetchKind["TEMPORARY"] = "temporary";
})(_PrefetchKind || (_PrefetchKind = {}));

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 8693:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
  enumerable: true,
  get: function get() {
    return getDomainLocale;
  }
}));

var _normalizetrailingslash = __webpack_require__(6962);

var basePath = (/* unused pure expression or super */ null && ( false || ""));

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var finalLocale, proto, domain, target, detectDomainLocale, normalizeLocalePath; } else {
    return false;
  }
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2590:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

var _excluded = ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Image", ({
  enumerable: true,
  get: function get() {
    return Image;
  }
}));

var _interop_require_default = __webpack_require__(167);

var _interop_require_wildcard = __webpack_require__(8760);

var _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(6689));

var _reactdom = __webpack_require__(6405);

var _head = /*#__PURE__*/_interop_require_default._(__webpack_require__(1597));

var _getimgprops = __webpack_require__(5132);

var _imageconfig = __webpack_require__(5843);

var _imageconfigcontext = __webpack_require__(744);

var _warnonce = __webpack_require__(618);

var _routercontext = __webpack_require__(4964);

var _imageloader = /*#__PURE__*/_interop_require_default._(__webpack_require__(1586)); // This is replaced by webpack define plugin


var configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};

if (true) {
  globalThis.__NEXT_IMAGE_IMPORTED = true;
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
  var src = img == null ? void 0 : img.src;

  if (!img || img["data-loaded-src"] === src) {
    return;
  }

  img["data-loaded-src"] = src;
  var p = "decode" in img ? img.decode() : Promise.resolve();
  p["catch"](function () {}).then(function () {
    if (!img.parentElement || !img.isConnected) {
      // Exit early in case of race condition:
      // - onload() is called
      // - decode() is called but incomplete
      // - unmount is called
      // - decode() completes
      return;
    }

    if (placeholder !== "empty") {
      setBlurComplete(true);
    }

    if (onLoadRef == null ? void 0 : onLoadRef.current) {
      // Since we don't have the SyntheticEvent here,
      // we must create one with the same shape.
      // See https://reactjs.org/docs/events.html
      var event = new Event("load");
      Object.defineProperty(event, "target", {
        writable: false,
        value: img
      });
      var prevented = false;
      var stopped = false;
      onLoadRef.current(_objectSpread(_objectSpread({}, event), {}, {
        nativeEvent: event,
        currentTarget: img,
        target: img,
        isDefaultPrevented: function isDefaultPrevented() {
          return prevented;
        },
        isPropagationStopped: function isPropagationStopped() {
          return stopped;
        },
        persist: function persist() {},
        preventDefault: function preventDefault() {
          prevented = true;
          event.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          stopped = true;
          event.stopPropagation();
        }
      }));
    }

    if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
      onLoadingCompleteRef.current(img);
    }

    if (false) { var widthModified, heightModified, valid, _window$getComputedSt2, position, widthViewportRatio, origSrc; }
  });
}

function getDynamicProps(fetchPriority) {
  var _react$version$split = _react.version.split("."),
      _react$version$split2 = _slicedToArray(_react$version$split, 2),
      majorStr = _react$version$split2[0],
      minorStr = _react$version$split2[1];

  var major = parseInt(majorStr, 10);
  var minor = parseInt(minorStr, 10);

  if (major > 18 || major === 18 && minor >= 3) {
    // In React 18.3.0 or newer, we must use camelCase
    // prop to avoid "Warning: Invalid DOM property".
    // See https://github.com/facebook/react/pull/25927
    return {
      fetchPriority: fetchPriority
    };
  } // In React 18.2.0 or older, we must use lowercase prop
  // to avoid "Warning: Invalid DOM property".


  return {
    fetchpriority: fetchPriority
  };
}

var ImageElement = /*#__PURE__*/(0, _react.forwardRef)(function (param, forwardedRef) {
  var src = param.src,
      srcSet = param.srcSet,
      sizes = param.sizes,
      height = param.height,
      width = param.width,
      decoding = param.decoding,
      className = param.className,
      style = param.style,
      fetchPriority = param.fetchPriority,
      placeholder = param.placeholder,
      loading = param.loading,
      unoptimized = param.unoptimized,
      fill = param.fill,
      onLoadRef = param.onLoadRef,
      onLoadingCompleteRef = param.onLoadingCompleteRef,
      setBlurComplete = param.setBlurComplete,
      setShowAltText = param.setShowAltText,
      onLoad = param.onLoad,
      _onError = param.onError,
      rest = _objectWithoutProperties(param, _excluded);

  return /*#__PURE__*/_react["default"].createElement("img", _objectSpread(_objectSpread(_objectSpread({}, rest), getDynamicProps(fetchPriority)), {}, {
    // It's intended to keep `loading` before `src` because React updates
    // props in order which causes Safari/Firefox to not lazy load properly.
    // See https://github.com/facebook/react/issues/25883
    loading: loading,
    width: width,
    height: height,
    decoding: decoding,
    "data-nimg": fill ? "fill" : "1",
    className: className,
    style: style,
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    sizes: sizes,
    srcSet: srcSet,
    src: src,
    ref: (0, _react.useCallback)(function (img) {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") forwardedRef(img);else if (_typeof(forwardedRef) === "object") {
          // @ts-ignore - .current is read only it's usually assigned by react internally
          forwardedRef.current = img;
        }
      }

      if (!img) {
        return;
      }

      if (_onError) {
        // If the image has an error before react hydrates, then the error is lost.
        // The workaround is to wait until the image is mounted which is after hydration,
        // then we set the src again to trigger the error handler (if there was an error).
        // eslint-disable-next-line no-self-assign
        img.src = img.src;
      }

      if (false) {}

      if (img.complete) {
        handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
      }
    }, [src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, _onError, unoptimized, forwardedRef]),
    onLoad: function onLoad(event) {
      var img = event.currentTarget;
      handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
    },
    onError: function onError(event) {
      // if the real image fails to load, this will ensure "alt" is visible
      setShowAltText(true);

      if (placeholder !== "empty") {
        // If the real image fails to load, this will still remove the placeholder.
        setBlurComplete(true);
      }

      if (_onError) {
        _onError(event);
      }
    }
  }));
});

function ImagePreload(param) {
  var isAppRouter = param.isAppRouter,
      imgAttributes = param.imgAttributes;

  var opts = _objectSpread({
    as: "image",
    imageSrcSet: imgAttributes.srcSet,
    imageSizes: imgAttributes.sizes,
    crossOrigin: imgAttributes.crossOrigin,
    referrerPolicy: imgAttributes.referrerPolicy
  }, getDynamicProps(imgAttributes.fetchPriority));

  if (isAppRouter && _reactdom.preload) {
    // See https://github.com/facebook/react/pull/26940
    (0, _reactdom.preload)(imgAttributes.src, // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
    opts);
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", _objectSpread({
    key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    // Note how we omit the `href` attribute, as it would only be relevant
    // for browsers that do not support `imagesrcset`, and in those cases
    // it would cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    href: imgAttributes.srcSet ? undefined : imgAttributes.src
  }, opts)));
}

var Image = /*#__PURE__*/(0, _react.forwardRef)(function (props, forwardedRef) {
  var pagesRouter = (0, _react.useContext)(_routercontext.RouterContext); // We're in the app directory if there is no pages router.

  var isAppRouter = !pagesRouter;
  var configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
  var config = (0, _react.useMemo)(function () {
    var c = configEnv || configContext || _imageconfig.imageConfigDefault;
    var allSizes = [].concat(_toConsumableArray(c.deviceSizes), _toConsumableArray(c.imageSizes)).sort(function (a, b) {
      return a - b;
    });
    var deviceSizes = c.deviceSizes.sort(function (a, b) {
      return a - b;
    });
    return _objectSpread(_objectSpread({}, c), {}, {
      allSizes: allSizes,
      deviceSizes: deviceSizes
    });
  }, [configContext]);
  var onLoad = props.onLoad,
      onLoadingComplete = props.onLoadingComplete;
  var onLoadRef = (0, _react.useRef)(onLoad);
  (0, _react.useEffect)(function () {
    onLoadRef.current = onLoad;
  }, [onLoad]);
  var onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
  (0, _react.useEffect)(function () {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  var _ref = (0, _react.useState)(false),
      _ref2 = _slicedToArray(_ref, 2),
      blurComplete = _ref2[0],
      setBlurComplete = _ref2[1];

  var _ref3 = (0, _react.useState)(false),
      _ref4 = _slicedToArray(_ref3, 2),
      showAltText = _ref4[0],
      setShowAltText = _ref4[1];

  var _ref5 = (0, _getimgprops.getImgProps)(props, {
    defaultLoader: _imageloader["default"],
    imgConf: config,
    blurComplete: blurComplete,
    showAltText: showAltText
  }),
      imgAttributes = _ref5.props,
      imgMeta = _ref5.meta;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ImageElement, _objectSpread(_objectSpread({}, imgAttributes), {}, {
    unoptimized: imgMeta.unoptimized,
    placeholder: imgMeta.placeholder,
    fill: imgMeta.fill,
    onLoadRef: onLoadRef,
    onLoadingCompleteRef: onLoadingCompleteRef,
    setBlurComplete: setBlurComplete,
    setShowAltText: setShowAltText,
    ref: forwardedRef
  })), imgMeta.priority ? /*#__PURE__*/_react["default"].createElement(ImagePreload, {
    isAppRouter: isAppRouter,
    imgAttributes: imgAttributes
  }) : null);
});

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6512:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

var _excluded = ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _default;
  }
}));

var _interop_require_default = __webpack_require__(167);

var _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(6689));

var _resolvehref = __webpack_require__(7782);

var _islocalurl = __webpack_require__(1109);

var _formaturl = __webpack_require__(3938);

var _utils = __webpack_require__(9232);

var _addlocale = __webpack_require__(4318);

var _routercontext = __webpack_require__(4964);

var _approutercontext = __webpack_require__(3280);

var _useintersection = __webpack_require__(6675);

var _getdomainlocale = __webpack_require__(8693);

var _addbasepath = __webpack_require__(6085);

var _routerreducertypes = __webpack_require__(2038);

var prefetched = new Set();

function prefetch(router, href, as, options, appOptions, isAppRouter) {
  if (true) {
    return;
  } // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.


  if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
    return;
  } // We should only dedupe requests when experimental.optimisticClientCache is
  // disabled.


  if (!options.bypassPrefetchedCheck) {
    var locale = // Let the link's locale prop override the default router locale.
    typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
    var prefetchedKey = href + "%" + as + "%" + locale; // If we've already fetched the key, then don't prefetch it again!

    if (prefetched.has(prefetchedKey)) {
      return;
    } // Mark this URL as prefetched.


    prefetched.add(prefetchedKey);
  }

  var prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options); // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  Promise.resolve(prefetchPromise)["catch"](function (err) {
    if (false) {}
  });
}

function isModifiedEvent(event) {
  var eventTarget = event.currentTarget;
  var target = eventTarget.getAttribute("target");
  return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
  var nodeName = e.currentTarget.nodeName; // anchors inside an svg have a lowercase nodeName

  var isAnchorNodeName = nodeName.toUpperCase() === "A";

  if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
  !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault();

  var navigate = function navigate() {
    // If the router is an NextRouter instance it will have `beforePopState`
    var routerScroll = scroll != null ? scroll : true;

    if ("beforePopState" in router) {
      router[replace ? "replace" : "push"](href, as, {
        shallow: shallow,
        locale: locale,
        scroll: routerScroll
      });
    } else {
      router[replace ? "replace" : "push"](as || href, {
        forceOptimisticNavigation: !prefetchEnabled,
        scroll: routerScroll
      });
    }
  };

  if (isAppRouter) {
    _react["default"].startTransition(navigate);
  } else {
    navigate();
  }
}

function formatStringOrUrl(urlObjOrString) {
  if (typeof urlObjOrString === "string") {
    return urlObjOrString;
  }

  return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */


var Link = /*#__PURE__*/_react["default"].forwardRef(function LinkComponent(props, forwardedRef) {
  var children;

  var hrefProp = props.href,
      asProp = props.as,
      childrenProp = props.children,
      _props$prefetch = props.prefetch,
      prefetchProp = _props$prefetch === void 0 ? null : _props$prefetch,
      passHref = props.passHref,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale,
      _onClick = props.onClick,
      onMouseEnterProp = props.onMouseEnter,
      onTouchStartProp = props.onTouchStart,
      _props$legacyBehavior = props.legacyBehavior,
      legacyBehavior = _props$legacyBehavior === void 0 ? true === false : _props$legacyBehavior,
      restProps = _objectWithoutProperties(props, _excluded);

  children = childrenProp;

  if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  }

  var pagesRouter = _react["default"].useContext(_routercontext.RouterContext);

  var appRouter = _react["default"].useContext(_approutercontext.AppRouterContext);

  var router = pagesRouter != null ? pagesRouter : appRouter; // We're in the app directory if there is no pages router.

  var isAppRouter = !pagesRouter;
  var prefetchEnabled = prefetchProp !== false;
  /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   */

  var appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;

  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }

  if (false) { var hasDynamicSegment, _href; }

  var _react$default$useMem = _react["default"].useMemo(function () {
    if (!pagesRouter) {
      var _resolvedHref = formatStringOrUrl(hrefProp);

      return {
        href: _resolvedHref,
        as: asProp ? formatStringOrUrl(asProp) : _resolvedHref
      };
    }

    var _ref = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
    };
  }, [pagesRouter, hrefProp, asProp]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var previousHref = _react["default"].useRef(href);

  var previousAs = _react["default"].useRef(as); // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (legacyBehavior) {
    if (false) {} else {
      child = _react["default"].Children.only(children);
    }
  } else {
    if (false) {}
  }

  var childRef = legacyBehavior ? child && _typeof(child) === "object" && child.ref : forwardedRef;

  var _ref3 = (0, _useintersection.useIntersection)({
    rootMargin: "200px"
  }),
      _ref4 = _slicedToArray(_ref3, 3),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1],
      resetVisible = _ref4[2];

  var setRef = _react["default"].useCallback(function (el) {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === "function") childRef(el);else if (_typeof(childRef) === "object") {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]); // Prefetch the URL if we haven't already and it's visible.


  _react["default"].useEffect(function () {
    // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
    if (false) {}

    if (!router) {
      return;
    } // If we don't need to prefetch the URL, don't do prefetch.


    if (!isVisible || !prefetchEnabled) {
      return;
    } // Prefetch the URL.


    prefetch(router, href, as, {
      locale: locale
    }, {
      kind: appPrefetchKind
    }, isAppRouter);
  }, [as, href, isVisible, locale, prefetchEnabled, pagesRouter == null ? void 0 : pagesRouter.locale, router, isAppRouter, appPrefetchKind]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (false) {}

      if (!legacyBehavior && typeof _onClick === "function") {
        _onClick(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
        child.props.onClick(e);
      }

      if (!router) {
        return;
      }

      if (e.defaultPrevented) {
        return;
      }

      linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
    },
    onMouseEnter: function onMouseEnter(e) {
      if (!legacyBehavior && typeof onMouseEnterProp === "function") {
        onMouseEnterProp(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
        child.props.onMouseEnter(e);
      }

      if (!router) {
        return;
      }

      if ((!prefetchEnabled || false) && isAppRouter) {
        return;
      }

      prefetch(router, href, as, {
        locale: locale,
        priority: true,
        // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
        bypassPrefetchedCheck: true
      }, {
        kind: appPrefetchKind
      }, isAppRouter);
    },
    onTouchStart: function onTouchStart(e) {
      if (!legacyBehavior && typeof onTouchStartProp === "function") {
        onTouchStartProp(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
        child.props.onTouchStart(e);
      }

      if (!router) {
        return;
      }

      if (!prefetchEnabled && isAppRouter) {
        return;
      }

      prefetch(router, href, as, {
        locale: locale,
        priority: true,
        // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
        bypassPrefetchedCheck: true
      }, {
        kind: appPrefetchKind
      }, isAppRouter);
    }
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user.
  // If the url is absolute, we can bypass the logic to prepend the domain and locale.

  if ((0, _utils.isAbsoluteUrl)(as)) {
    childProps.href = as;
  } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
    var curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
    childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
  }

  return legacyBehavior ? /*#__PURE__*/_react["default"].cloneElement(child, childProps) : /*#__PURE__*/_react["default"].createElement("a", _objectSpread(_objectSpread({}, restProps), childProps), children);
});

var _default = Link;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
  enumerable: true,
  get: function get() {
    return normalizePathTrailingSlash;
  }
}));

var _removetrailingslash = __webpack_require__(3297);

var _parsepath = __webpack_require__(8854);

var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
  if (!path.startsWith("/") || undefined) {
    return path;
  }

  var _ref = (0, _parsepath.parsePath)(path),
      pathname = _ref.pathname,
      query = _ref.query,
      hash = _ref.hash;

  if (false) {}

  return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6682:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  requestIdleCallback: function requestIdleCallback() {
    return _requestIdleCallback;
  },
  cancelIdleCallback: function cancelIdleCallback() {
    return _cancelIdleCallback;
  }
});

var _requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  var start = Date.now();
  return self.setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 6675:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useIntersection", ({
  enumerable: true,
  get: function get() {
    return useIntersection;
  }
}));

var _react = __webpack_require__(6689);

var _requestidlecallback = __webpack_require__(6682);

var hasIntersectionObserver = typeof IntersectionObserver === "function";
var observers = new Map();
var idList = [];

function createObserver(options) {
  var id = {
    root: options.root || null,
    margin: options.rootMargin || ""
  };
  var existing = idList.find(function (obj) {
    return obj.root === id.root && obj.margin === id.margin;
  });
  var instance;

  if (existing) {
    instance = observers.get(existing);

    if (instance) {
      return instance;
    }
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  instance = {
    id: id,
    observer: observer,
    elements: elements
  };
  idList.push(id);
  observers.set(id, instance);
  return instance;
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
      var index = idList.findIndex(function (obj) {
        return obj.root === id.root && obj.margin === id.margin;
      });

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

function useIntersection(param) {
  var rootRef = param.rootRef,
      rootMargin = param.rootMargin,
      disabled = param.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;

  var _ref = (0, _react.useState)(false),
      _ref2 = _slicedToArray(_ref, 2),
      visible = _ref2[0],
      setVisible = _ref2[1];

  var elementRef = (0, _react.useRef)(null);
  var setElement = (0, _react.useCallback)(function (element) {
    elementRef.current = element;
  }, []);
  (0, _react.useEffect)(function () {
    if (hasIntersectionObserver) {
      if (isDisabled || visible) return;
      var element = elementRef.current;

      if (element && element.tagName) {
        var unobserve = observe(element, function (isVisible) {
          return isVisible && setVisible(isVisible);
        }, {
          root: rootRef == null ? void 0 : rootRef.current,
          rootMargin: rootMargin
        });
        return unobserve;
      }
    } else {
      if (!visible) {
        var idleCallback = (0, _requestidlecallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
        };
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isDisabled, rootMargin, rootRef, visible, elementRef.current]);
  var resetVisible = (0, _react.useCallback)(function () {
    setVisible(false);
  }, []);
  return [setElement, visible, resetVisible];
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 1597:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  defaultHead: function defaultHead() {
    return _defaultHead;
  },
  "default": function _default() {
    return _default2;
  }
});

var _interop_require_default = __webpack_require__(167);

var _interop_require_wildcard = __webpack_require__(8760);

var _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(6689));

var _sideeffect = /*#__PURE__*/_interop_require_default._(__webpack_require__(2470));

var _ampcontext = __webpack_require__(3918);

var _headmanagercontext = __webpack_require__(2796);

var _ampmode = __webpack_require__(5732);

var _warnonce = __webpack_require__(618);

function _defaultHead(inAmpMode) {
  if (inAmpMode === void 0) inAmpMode = false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    _react["default"].Children.toArray(child.props.children).reduce( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf("$") + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case "meta":
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== "name" || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */


function reduceComponents(headChildrenElements, props) {
  var inAmpMode = props.inAmpMode;
  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(_defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if ( true && !inAmpMode) {
      if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function (url) {
        return c.props["href"].startsWith(url);
      })) {
        var newProps = _objectSpread({}, c.props || {});

        newProps["data-href"] = newProps["href"];
        newProps["href"] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps["data-optimized-fonts"] = true;
        return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
      }
    }

    if (false) { var srcMessage; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(param) {
  var children = param.children;
  var ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideeffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
  }, children);
}

var _default2 = Head;

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 3956:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  "default": function _default() {
    return _default2;
  },
  unstable_getImgProps: function unstable_getImgProps() {
    return _unstable_getImgProps;
  }
});

var _interop_require_default = __webpack_require__(167);

var _getimgprops = __webpack_require__(5132);

var _warnonce = __webpack_require__(618);

var _imagecomponent = __webpack_require__(2590);

var _imageloader = /*#__PURE__*/_interop_require_default._(__webpack_require__(1586));

var _unstable_getImgProps = function _unstable_getImgProps(imgProps) {
  (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");

  var _ref = (0, _getimgprops.getImgProps)(imgProps, {
    defaultLoader: _imageloader["default"],
    // This is replaced by webpack define plugin
    imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
  }),
      props = _ref.props;

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i2 = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i2[0],
        value = _Object$entries$_i2[1];

    if (value === undefined) {
      delete props[key];
    }
  }

  return {
    props: props
  };
};

var _default2 = _imagecomponent.Image;

/***/ }),

/***/ 1586:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _default;
  }
}));

function defaultLoader(param) {
  var config = param.config,
      src = param.src,
      width = param.width,
      quality = param.quality;

  if (false) { var _require2, hasMatch, parsedSrc, missingValues; }

  return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
} // We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js


defaultLoader.__next_img_default = true;
var _default = defaultLoader;

/***/ }),

/***/ 7182:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 3185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesRouteModule: function() {
        return PagesRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(3076);
const _render = __webpack_require__(3100);
class PagesRouteModule extends _routemodule.RouteModule {
    constructor(options){
        super(options);
        this.components = options.components;
    }
    render(req, res, context) {
        return (0, _render.renderToHTMLImpl)(req, res, context.page, context.query, context.renderOpts, {
            App: this.components.App,
            Document: this.components.Document
        });
    }
}
const _default = PagesRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3956)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(6512)


/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ })

};
;