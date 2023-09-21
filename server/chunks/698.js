"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 6698:
/***/ ((module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return Error;
  }
}));

var _interop_require_default = __webpack_require__(167);

var _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(6689));

var _head = /*#__PURE__*/_interop_require_default._(__webpack_require__(1597));

var statusCodes = {
  400: "Bad Request",
  404: "This page could not be found",
  405: "Method Not Allowed",
  500: "Internal Server Error"
};

function _getInitialProps(param) {
  var res = param.res,
      err = param.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}

var styles = {
  error: {
    // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
    fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  desc: {
    lineHeight: "48px"
  },
  h1: {
    display: "inline-block",
    margin: "0 20px 0 0",
    paddingRight: 23,
    fontSize: 24,
    fontWeight: 500,
    verticalAlign: "top"
  },
  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "28px"
  },
  wrap: {
    display: "inline-block"
  }
};

var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          statusCode = _this$props.statusCode,
          _this$props$withDarkM = _this$props.withDarkMode,
          withDarkMode = _this$props$withDarkM === void 0 ? true : _this$props$withDarkM;
      var title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred")), /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          /* CSS minified from
          body { margin: 0; color: #000; background: #fff; }
          .next-error-h1 {
            border-right: 1px solid rgba(0, 0, 0, .3);
          }
           ${
            withDarkMode
              ? `@media (prefers-color-scheme: dark) {
            body { color: #fff; background: #000; }
            .next-error-h1 {
              border-right: 1px solid rgba(255, 255, 255, .3);
            }
          }`
              : ''
          }
          */
          __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.wrap
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

(function () {
  Error.displayName = "ErrorPage";
})();

(function () {
  Error.getInitialProps = _getInitialProps;
})();

(function () {
  Error.origGetInitialProps = _getInitialProps;
})();

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ })

};
;