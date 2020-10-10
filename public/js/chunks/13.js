(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./resources/falcon/src/components/auth/basic/AuthBasicRoutes.js":
/*!***********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/AuthBasicRoutes.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./resources/falcon/src/components/auth/basic/Login.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logout */ "./resources/falcon/src/components/auth/basic/Logout.js");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Registration */ "./resources/falcon/src/components/auth/basic/Registration.js");
/* harmony import */ var _ForgetPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForgetPassword */ "./resources/falcon/src/components/auth/basic/ForgetPassword.js");
/* harmony import */ var _PasswordReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordReset */ "./resources/falcon/src/components/auth/basic/PasswordReset.js");
/* harmony import */ var _ConfirmMail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmMail */ "./resources/falcon/src/components/auth/basic/ConfirmMail.js");
/* harmony import */ var _LockScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LockScreen */ "./resources/falcon/src/components/auth/basic/LockScreen.js");











var AuthBasicRoutes = function AuthBasicRoutes(_ref) {
  var url = _ref.match.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/login"),
    exact: true,
    component: _Login__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/logout"),
    exact: true,
    component: _Logout__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/register"),
    exact: true,
    component: _Registration__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/forget-password"),
    exact: true,
    component: _ForgetPassword__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/confirm-mail"),
    exact: true,
    component: _ConfirmMail__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/password-reset"),
    exact: true,
    component: _PasswordReset__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(url, "/lock-screen"),
    exact: true,
    component: _LockScreen__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/errors/404"
  }));
};

AuthBasicRoutes.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AuthBasicRoutes));

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/ConfirmMail.js":
/*!*******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/ConfirmMail.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfirmMailContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfirmMailContent */ "./resources/falcon/src/components/auth/ConfirmMailContent.js");



var ConfirmMail = function ConfirmMail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmMailContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    email: "xyz@abc.com"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmMail);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/ForgetPassword.js":
/*!**********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/ForgetPassword.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ForgetPasswordForm */ "./resources/falcon/src/components/auth/ForgetPasswordForm.js");



var ForgetPassword = function ForgetPassword() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-0"
  }, " Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Enter your email and we'll send you a reset link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgetPassword);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/LockScreen.js":
/*!******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/LockScreen.js ***!
  \******************************************************************/
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





var LockScreen = function LockScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    size: "4xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-3 mb-0"
  }, "Hi! Emma Watson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Enter your password to access the admin."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LockScreenForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-4 mx-sm-4"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LockScreen);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/Login.js":
/*!*************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/Login.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoginForm */ "./resources/falcon/src/components/auth/LoginForm.js");





var Login = function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "text-left justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fs--1 text-600"
  }, "or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/authentication/basic/register"
  }, "create an account")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/Logout.js":
/*!**************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/Logout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogoutContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LogoutContent */ "./resources/falcon/src/components/auth/LogoutContent.js");



var Logout = function Logout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogoutContent__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/PasswordReset.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/PasswordReset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordResetForm */ "./resources/falcon/src/components/auth/PasswordResetForm.js");



var PasswordReset = function PasswordReset() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Reset new password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordReset);

/***/ }),

/***/ "./resources/falcon/src/components/auth/basic/Registration.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/basic/Registration.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegistrationForm */ "./resources/falcon/src/components/auth/RegistrationForm.js");





var Registration = function Registration() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    id: "modalLabel"
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fs--1 text-600"
  }, "Have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/authentication/basic/login"
  }, "Login")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ }),

/***/ "./resources/falcon/src/layouts/AuthBasicLayout.js":
/*!*********************************************************!*\
  !*** ./resources/falcon/src/layouts/AuthBasicLayout.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navbar_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar/Logo */ "./resources/falcon/src/components/navbar/Logo.js");
/* harmony import */ var _components_common_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Section */ "./resources/falcon/src/components/common/Section.js");
/* harmony import */ var _components_auth_basic_AuthBasicRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/basic/AuthBasicRoutes */ "./resources/falcon/src/components/auth/basic/AuthBasicRoutes.js");






var AuthBasicLayout = function AuthBasicLayout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "flex-center min-vh-100 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 10,
    md: 8,
    lg: 6,
    xl: 5,
    className: "col-xxl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "fs--1 font-weight-normal p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_auth_basic_AuthBasicRoutes__WEBPACK_IMPORTED_MODULE_4__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthBasicLayout);

/***/ })

}]);