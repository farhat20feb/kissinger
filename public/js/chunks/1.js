(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/falcon/src/assets/img/illustrations/envelope.png":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/envelope.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/envelope.png?e6f6336e6f7fd0115221a8edc676babc";

/***/ }),

/***/ "./resources/falcon/src/assets/img/illustrations/rocket.png":
/*!******************************************************************!*\
  !*** ./resources/falcon/src/assets/img/illustrations/rocket.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/rocket.png?5856fd8354d9e616353d06fffa77aad1";

/***/ }),

/***/ "./resources/falcon/src/components/auth/ConfirmMailContent.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/ConfirmMailContent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _assets_img_illustrations_envelope_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/illustrations/envelope.png */ "./resources/falcon/src/assets/img/illustrations/envelope.png");
/* harmony import */ var _assets_img_illustrations_envelope_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_envelope_png__WEBPACK_IMPORTED_MODULE_5__);







var ConfirmMailContent = function ConfirmMailContent(_ref) {
  var email = _ref.email,
      layout = _ref.layout,
      TitleTag = _ref.titleTag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block mx-auto mb-4",
    src: _assets_img_illustrations_envelope_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "sent",
    width: 70
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleTag, null, "Please check your email!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An email has been sent to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, email), ". Please click on the included link to reset your password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    color: "primary",
    size: "sm",
    className: "mt-3",
    to: "/authentication/".concat(layout, "/login")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "chevron-left",
    transform: "shrink-4 down-1",
    className: "mr-1"
  }), "Return to login"));
};

ConfirmMailContent.propTypes = {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  titleTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ConfirmMailContent.defaultProps = {
  layout: 'basic',
  titleTag: 'h4'
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmMailContent);

/***/ }),

/***/ "./resources/falcon/src/components/auth/ForgetPasswordForm.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/auth/ForgetPasswordForm.js ***!
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _hoc_withRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withRedirect */ "./resources/falcon/src/hoc/withRedirect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ForgetPasswordForm = function ForgetPasswordForm(_ref) {
  var setRedirect = _ref.setRedirect,
      setRedirectUrl = _ref.setRedirectUrl,
      layout = _ref.layout;

  // State
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1]; // Handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (email) {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("An email is sent to ".concat(email, " with password reset link"));
      setRedirect(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRedirectUrl("/authentication/".concat(layout, "/confirm-mail"));
  }, [setRedirectUrl, layout]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    className: "mt-4",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: "form-control",
    placeholder: "Email address",
    value: email,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setEmail(target.value);
    },
    type: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    block: true,
    disabled: !email
  }, "Send reset link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "fs--1 text-600",
    to: "#!"
  }, "I can't recover my account using this page", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-inline-block ml-1"
  }, "\u2192")));
};

ForgetPasswordForm.propTypes = {
  setRedirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setRedirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ForgetPasswordForm.defaultProps = {
  layout: 'basic'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withRedirect__WEBPACK_IMPORTED_MODULE_5__["default"])(ForgetPasswordForm));

/***/ }),

/***/ "./resources/falcon/src/components/auth/LogoutContent.js":
/*!***************************************************************!*\
  !*** ./resources/falcon/src/components/auth/LogoutContent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _assets_img_illustrations_rocket_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/illustrations/rocket.png */ "./resources/falcon/src/assets/img/illustrations/rocket.png");
/* harmony import */ var _assets_img_illustrations_rocket_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_illustrations_rocket_png__WEBPACK_IMPORTED_MODULE_5__);







var LogoutContent = function LogoutContent(_ref) {
  var layout = _ref.layout,
      TitleTag = _ref.titleTag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block mx-auto mb-4",
    src: _assets_img_illustrations_rocket_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "shield",
    width: 70
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleTag, null, "See you again!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thanks for using Falcon. You are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    className: "d-none d-sm-block"
  }), "now successfully signed out."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    color: "primary",
    size: "sm",
    className: "mt-3",
    to: "/authentication/".concat(layout, "/login")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "chevron-left",
    transform: "shrink-4 down-1",
    className: "mr-1"
  }), "Return to Login"));
};

LogoutContent.propTypes = {
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  titleTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
LogoutContent.defaultProps = {
  layout: 'basic',
  titleTag: 'h4'
};
/* harmony default export */ __webpack_exports__["default"] = (LogoutContent);

/***/ }),

/***/ "./resources/falcon/src/components/auth/PasswordResetForm.js":
/*!*******************************************************************!*\
  !*** ./resources/falcon/src/components/auth/PasswordResetForm.js ***!
  \*******************************************************************/
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
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var PasswordResetForm = function PasswordResetForm(_ref) {
  var setRedirect = _ref.setRedirect,
      setRedirectUrl = _ref.setRedirectUrl,
      layout = _ref.layout,
      hasLabel = _ref.hasLabel;

  // State
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      confirmPassword = _useState4[0],
      setConfirmPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isDisabled = _useState6[0],
      setIsDisabled = _useState6[1]; // Handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success('Login with your new password');
    setRedirect(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRedirectUrl("/authentication/".concat(layout, "/login"));
  }, [setRedirectUrl, layout]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (password === '' || confirmPassword === '') return setIsDisabled(true);
    setIsDisabled(password !== confirmPassword);
  }, [password, confirmPassword]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('mt-3', {
      'text-left': hasLabel
    }),
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_5__["default"], null, "New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: !hasLabel ? 'New Password' : '',
    value: password,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setPassword(target.value);
    },
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: !hasLabel ? 'Confirm Password' : '',
    value: confirmPassword,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setConfirmPassword(target.value);
    },
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "primary",
    block: true,
    className: "mt-3",
    disabled: isDisabled
  }, "Set password"));
};

PasswordResetForm.propTypes = {
  setRedirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setRedirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hasLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
PasswordResetForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withRedirect__WEBPACK_IMPORTED_MODULE_4__["default"])(PasswordResetForm));

/***/ })

}]);