(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/falcon/src/assets/img/generic/14.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/14.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/14.jpg?2e238fd18606f8076b216f8f6fa3f3ae";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/15.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/15.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/15.jpg?fe45522fbe324c21109877e52c48c7ca";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/16.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/16.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/16.jpg?321fd6d464a0ac8538479a5149b804a7";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/17.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/17.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/17.jpg?5145db2480ebdbc7e77dd705cd931d6d";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/18.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/18.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/18.jpg?80c92e6e2848ee24eb2137384ec44ac9";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/19.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/19.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/19.jpg?3c467e003bd1e41ebf900298082b826f";

/***/ }),

/***/ "./resources/falcon/src/assets/img/generic/20.jpg":
/*!********************************************************!*\
  !*** ./resources/falcon/src/assets/img/generic/20.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/20.jpg?c906bddbf3338dfb8295519687ed8dcc";

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

/***/ "./resources/falcon/src/components/auth/split/AuthSplitRoutes.js":
/*!***********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/AuthSplitRoutes.js ***!
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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./resources/falcon/src/components/auth/split/Login.js");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logout */ "./resources/falcon/src/components/auth/split/Logout.js");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Registration */ "./resources/falcon/src/components/auth/split/Registration.js");
/* harmony import */ var _ForgetPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForgetPassword */ "./resources/falcon/src/components/auth/split/ForgetPassword.js");
/* harmony import */ var _PasswordReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordReset */ "./resources/falcon/src/components/auth/split/PasswordReset.js");
/* harmony import */ var _ConfirmMail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmMail */ "./resources/falcon/src/components/auth/split/ConfirmMail.js");
/* harmony import */ var _LockScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LockScreen */ "./resources/falcon/src/components/auth/split/LockScreen.js");











var AuthSplitRoutes = function AuthSplitRoutes(_ref) {
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

AuthSplitRoutes.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AuthSplitRoutes);

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/ConfirmMail.js":
/*!*******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/ConfirmMail.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmMailContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConfirmMailContent */ "./resources/falcon/src/components/auth/ConfirmMailContent.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_16_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/generic/16.jpg */ "./resources/falcon/src/assets/img/generic/16.jpg");
/* harmony import */ var _assets_img_generic_16_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_16_jpg__WEBPACK_IMPORTED_MODULE_4__);






var ConfirmMail = function ConfirmMail(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_16_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      position: '50% 30%'
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmMailContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: "xyz@abc.com",
    layout: "split",
    titleTag: "h3"
  }));
};

ConfirmMail.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__["default"])(ConfirmMail));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/ForgetPassword.js":
/*!**********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/ForgetPassword.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ForgetPasswordForm */ "./resources/falcon/src/components/auth/ForgetPasswordForm.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_17_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/generic/17.jpg */ "./resources/falcon/src/assets/img/generic/17.jpg");
/* harmony import */ var _assets_img_generic_17_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_17_jpg__WEBPACK_IMPORTED_MODULE_4__);






var ForgetPassword = function ForgetPassword(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_17_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
      position: '50% 76%',
      overlay: true
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-0"
  }, " Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Enter your email and we'll send you a reset link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgetPasswordForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "split"
  }));
};

ForgetPassword.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__["default"])(ForgetPassword));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/LockScreen.js":
/*!******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/LockScreen.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Avatar */ "./resources/falcon/src/components/common/Avatar.js");
/* harmony import */ var _LockScreenForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LockScreenForm */ "./resources/falcon/src/components/auth/LockScreenForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/team/1.jpg */ "./resources/falcon/src/assets/img/team/1.jpg");
/* harmony import */ var _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_generic_18_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/generic/18.jpg */ "./resources/falcon/src/assets/img/generic/18.jpg");
/* harmony import */ var _assets_img_generic_18_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_18_jpg__WEBPACK_IMPORTED_MODULE_7__);









var LockScreen = function LockScreen(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_18_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    className: "align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: _assets_img_team_1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    size: "4xl",
    className: "mr-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    body: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Hi! Emma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, "Enter your password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "to access the admin."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LockScreenForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mt-4"
  })));
};

LockScreen.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__["default"])(LockScreen));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/Login.js":
/*!*************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/Login.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Flex */ "./resources/falcon/src/components/common/Flex.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoginForm */ "./resources/falcon/src/components/auth/LoginForm.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_14_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/generic/14.jpg */ "./resources/falcon/src/assets/img/generic/14.jpg");
/* harmony import */ var _assets_img_generic_14_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_14_jpg__WEBPACK_IMPORTED_MODULE_6__);








var Login = function Login(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_14_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
      position: '50% 20%'
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: "center",
    justify: "between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 fs--1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-weight-semi-bold"
  }, "New User? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/authentication/split/register"
  }, "Create account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: "split",
    hasLabel: true
  }));
};

Login.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__["default"])(Login));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/Logout.js":
/*!**************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/Logout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LogoutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LogoutContent */ "./resources/falcon/src/components/auth/LogoutContent.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_19_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/generic/19.jpg */ "./resources/falcon/src/assets/img/generic/19.jpg");
/* harmony import */ var _assets_img_generic_19_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_19_jpg__WEBPACK_IMPORTED_MODULE_4__);






var Logout = function Logout(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_19_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogoutContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "split",
    titleTag: "h3"
  }));
};

Logout.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__["default"])(Logout));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/PasswordReset.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/PasswordReset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PasswordResetForm */ "./resources/falcon/src/components/auth/PasswordResetForm.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_20_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/generic/20.jpg */ "./resources/falcon/src/assets/img/generic/20.jpg");
/* harmony import */ var _assets_img_generic_20_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_20_jpg__WEBPACK_IMPORTED_MODULE_4__);






var PasswordReset = function PasswordReset(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_20_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Reset password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "split",
    hasLabel: true
  }));
};

PasswordReset.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_3__["default"])(PasswordReset));

/***/ }),

/***/ "./resources/falcon/src/components/auth/split/Registration.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/split/Registration.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Flex */ "./resources/falcon/src/components/common/Flex.js");
/* harmony import */ var _RegistrationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RegistrationForm */ "./resources/falcon/src/components/auth/RegistrationForm.js");
/* harmony import */ var _hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hoc/withAuthSplit */ "./resources/falcon/src/hoc/withAuthSplit.js");
/* harmony import */ var _assets_img_generic_15_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/generic/15.jpg */ "./resources/falcon/src/assets/img/generic/15.jpg");
/* harmony import */ var _assets_img_generic_15_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_generic_15_jpg__WEBPACK_IMPORTED_MODULE_6__);








var Registration = function Registration(_ref) {
  var setBgProps = _ref.setBgProps;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setBgProps({
      image: _assets_img_generic_15_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
    });
  }, [setBgProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: "center",
    justify: "between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 fs--1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-weight-semi-bold"
  }, "Already User? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/authentication/split/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: "split",
    hasLabel: true
  }));
};

Registration.propTypes = {
  setBgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withAuthSplit__WEBPACK_IMPORTED_MODULE_5__["default"])(Registration));

/***/ }),

/***/ "./resources/falcon/src/hoc/withAuthSplit.js":
/*!***************************************************!*\
  !*** ./resources/falcon/src/hoc/withAuthSplit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap_es_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap/es/Container */ "./node_modules/reactstrap/es/Container.js");
/* harmony import */ var _components_common_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Background */ "./resources/falcon/src/components/common/Background.js");
/* harmony import */ var reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/CardBody */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap_es_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/CardHeader */ "./node_modules/reactstrap/es/CardHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var withAuthSplit = function withAuthSplit(OriginalComponent) {
  var UpdatedComponent = function UpdatedComponent(props) {
    // State
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
        _useState2 = _slicedToArray(_useState, 2),
        bgProps = _useState2[0],
        setBgProps = _useState2[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: "min-vh-100 bg-100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: 6,
      className: "d-none d-lg-block"
    }, bgProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Background__WEBPACK_IMPORTED_MODULE_2__["default"], bgProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      sm: 10,
      md: 6,
      className: "px-sm-0 align-self-center mx-auto py-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      noGutters: true,
      className: "justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      lg: 9,
      xl: 8,
      className: "col-xxl-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bg-split-card-header bg-circle-shape text-center p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      className: "text-white text-sans-serif font-weight-extra-bold fs-4 z-index-1 position-relative",
      to: "/"
    }, "falcon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, _extends({
      setBgProps: setBgProps
    }, props)))))))));
  };

  return UpdatedComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthSplit);

/***/ })

}]);