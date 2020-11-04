(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/falcon/src/assets/img/illustrations/WebStorLogo.png":
/*!***********************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/WebStorLogo.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/WebStorLogo.png?27117df5f73b9699e7bd7ba786bd3921";

/***/ }),

/***/ "./resources/falcon/src/assets/img/illustrations/bg-shape.png":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/bg-shape.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg-shape.png?49213c49d98a197f3a4064b3acc297e0";

/***/ }),

/***/ "./resources/falcon/src/assets/img/illustrations/half-circle.png":
/*!***********************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/half-circle.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/half-circle.png?e3156472270dc71804db82dcbc69cfd9";

/***/ }),

/***/ "./resources/falcon/src/assets/img/illustrations/shape-1.png":
/*!*******************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/shape-1.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/shape-1.png?e7c6d73f68fe6e2e1c2c56de81c39547";

/***/ }),

/***/ "./resources/falcon/src/components/auth/LockScreenForm.js":
/*!****************************************************************!*\
  !*** ./resources/falcon/src/components/auth/LockScreenForm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _hoc_withRedirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withRedirect */ "./resources/falcon/src/hoc/withRedirect.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var LockScreenForm = function LockScreenForm(_ref) {
  var setRedirect = _ref.setRedirect,
      setRedirectUrl = _ref.setRedirectUrl,
      rest = _objectWithoutProperties(_ref, ["setRedirect", "setRedirectUrl"]);

  // State
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1]; // Handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setRedirect(true);
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Logged in as Emma Watson");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], _extends({
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"],
    noGutters: true,
    onSubmit: handleSubmit
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: "mr-2",
    placeholder: "Password",
    value: password,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setPassword(target.value);
    },
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "auto",
    className: "pl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "primary",
    disabled: !password
  }, "Login")));
};

LockScreenForm.propTypes = {
  setRedirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setRedirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withRedirect__WEBPACK_IMPORTED_MODULE_4__["default"])(LockScreenForm));

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/AuthCardRoutes.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/AuthCardRoutes.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./resources/falcon/src/components/auth/card/Login.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logout */ "./resources/falcon/src/components/auth/card/Logout.js");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registration */ "./resources/falcon/src/components/auth/card/Registration.js");
/* harmony import */ var _ForgetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ForgetPassword */ "./resources/falcon/src/components/auth/card/ForgetPassword.js");
/* harmony import */ var _ConfirmMail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmMail */ "./resources/falcon/src/components/auth/card/ConfirmMail.js");
/* harmony import */ var _PasswordReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordReset */ "./resources/falcon/src/components/auth/card/PasswordReset.js");
/* harmony import */ var _LockScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LockScreen */ "./resources/falcon/src/components/auth/card/LockScreen.js");










var AuthCardRoutes = function AuthCardRoutes(_ref) {
  var url = _ref.match.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/login"),
    exact: true,
    component: _Login__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/logout"),
    exact: true,
    component: _Logout__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/register"),
    exact: true,
    component: _Registration__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/forget-password"),
    exact: true,
    component: _ForgetPassword__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/confirm-mail"),
    exact: true,
    component: _ConfirmMail__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/password-reset"),
    exact: true,
    component: _PasswordReset__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "".concat(url, "/lock-screen"),
    exact: true,
    component: _LockScreen__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/errors/404"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthCardRoutes);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/ConfirmMail.js":
/*!******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/ConfirmMail.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfirmMailContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfirmMailContent */ "./resources/falcon/src/components/auth/ConfirmMailContent.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var ConfirmMail = function ConfirmMail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300"
    }, "Read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "terms"), ' ', "and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "conditions", ' '))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmMailContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "card",
    email: "xyz@abc.com",
    titleTag: "h3"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmMail);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/ForgetPassword.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/ForgetPassword.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ForgetPasswordForm */ "./resources/falcon/src/components/auth/ForgetPasswordForm.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var ForgetPassword = function ForgetPassword() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300"
    }, "Read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "terms"), ' ', "and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "conditions", ' '))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-0"
  }, " Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, "Enter your email and we'll send you a reset link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "card"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgetPassword);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/LockScreen.js":
/*!*****************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/LockScreen.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Avatar */ "./resources/falcon/src/components/common/Avatar.js");
/* harmony import */ var _LockScreenForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LockScreenForm */ "./resources/falcon/src/components/auth/LockScreenForm.js");
/* harmony import */ var _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/team/1.jpg */ "./resources/falcon/src/assets/img/team/1.jpg");
/* harmony import */ var _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var LockScreen = function LockScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300"
    }, "Read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "terms"), ' ', "and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "conditions", ' '))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    className: "align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    size: "4xl",
    className: "mr-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    body: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Hi! Emma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, "Enter your password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "to access the admin."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LockScreenForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-4"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LockScreen);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/Login.js":
/*!************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/Login.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoginForm */ "./resources/falcon/src/components/auth/LoginForm.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");





var Login = function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Account Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "card",
    hasLabel: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/Logout.js":
/*!*************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/Logout.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LogoutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LogoutContent */ "./resources/falcon/src/components/auth/LogoutContent.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");





var Logout = function Logout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300"
    }, "Read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "terms"), ' ', "and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "text-underline text-300",
      to: "#!"
    }, "conditions", ' '))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogoutContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "card",
    titleTag: "h3"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/PasswordReset.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/PasswordReset.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordResetForm */ "./resources/falcon/src/components/auth/PasswordResetForm.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ "./resources/falcon/src/context/Context.js");






var PasswordReset = function PasswordReset() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      isDark = _useContext.isDark;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold ".concat(isDark ? 'text-800' : 'text-300')
    }, "Read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline ".concat(isDark ? 'text-800' : 'text-300'),
      to: "#!"
    }, "terms"), ' ', "and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "text-underline ".concat(isDark ? 'text-800' : 'text-300'),
      to: "#!"
    }, "conditions", ' '))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Reset password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "card",
    hasLabel: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordReset);

/***/ }),

/***/ "./resources/falcon/src/components/auth/card/Registration.js":
/*!*******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/card/Registration.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RegistrationForm */ "./resources/falcon/src/components/auth/RegistrationForm.js");
/* harmony import */ var _layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/AuthCardLayout */ "./resources/falcon/src/layouts/AuthCardLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var Registration = function Registration() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AuthCardLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    leftSideContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "pt-3"
    }, "Have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
      color: "outline-light",
      className: "mt-2 px-4",
      to: "/authentication/card/login"
    }, "Log In"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "card",
    hasLabel: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ }),

/***/ "./resources/falcon/src/layouts/AuthCardLayout.js":
/*!********************************************************!*\
  !*** ./resources/falcon/src/layouts/AuthCardLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_common_Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/Background */ "./resources/falcon/src/components/common/Background.js");
/* harmony import */ var _components_common_Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/Flex */ "./resources/falcon/src/components/common/Flex.js");
/* harmony import */ var _components_common_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Section */ "./resources/falcon/src/components/common/Section.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/Context */ "./resources/falcon/src/context/Context.js");
/* harmony import */ var _assets_img_illustrations_bg_shape_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/illustrations/bg-shape.png */ "./resources/falcon/src/assets/img/illustrations/bg-shape.png");
/* harmony import */ var _assets_img_illustrations_bg_shape_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_bg_shape_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_illustrations_shape_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/illustrations/shape-1.png */ "./resources/falcon/src/assets/img/illustrations/shape-1.png");
/* harmony import */ var _assets_img_illustrations_shape_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_shape_1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_illustrations_half_circle_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/illustrations/half-circle.png */ "./resources/falcon/src/assets/img/illustrations/half-circle.png");
/* harmony import */ var _assets_img_illustrations_half_circle_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_half_circle_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_illustrations_WebStorLogo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/illustrations/WebStorLogo.png */ "./resources/falcon/src/assets/img/illustrations/WebStorLogo.png");
/* harmony import */ var _assets_img_illustrations_WebStorLogo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_WebStorLogo_png__WEBPACK_IMPORTED_MODULE_11__);













var AuthCardLayout = function AuthCardLayout(_ref) {
  var leftSideContent = _ref.leftSideContent,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_7__["default"]),
      isDark = _useContext.isDark;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true,
    className: "py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    className: "min-vh-100 flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 8,
    className: "col-xxl-5 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "bg-auth-circle-shape",
    src: _assets_img_illustrations_bg_shape_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    width: "250"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "bg-auth-circle-shape-2",
    src: _assets_img_illustrations_shape_1_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    width: "150"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "overflow-hidden z-index-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    className: "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 5,
    className: "text-white text-center bg-card-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative p-4 pt-md-5 pb-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Background__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: _assets_img_illustrations_half_circle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    className: "bg-auth-card-shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "z-index-1 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "text-white mb-4 text-sans-serif font-weight-extra-bold fs-4 d-inline-block",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo-img",
    src: _assets_img_illustrations_WebStorLogo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    width: "250"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: isDark ? 'text-800' : 'text-100'
  }, "The Web-Stor Dashboard is your control center for insights about your Web-Stor application connections, all in one place."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3 mb-4 mt-md-4 mb-md-5"
  }, leftSideContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 7,
    tag: _components_common_Flex__WEBPACK_IMPORTED_MODULE_5__["default"],
    align: "center",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-4 p-md-5 flex-grow-1"
  }, children))))))));
};

AuthCardLayout.propTypes = {
  leftSideContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AuthCardLayout);

/***/ })

}]);