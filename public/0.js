(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/falcon/src/components/auth/LoginForm.js":
/*!**************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/LoginForm.js ***!
  \**************************************************************/
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
/* harmony import */ var _common_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Divider */ "./resources/js/falcon/src/components/common/Divider.js");
/* harmony import */ var _SocialAuthButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocialAuthButtons */ "./resources/js/falcon/src/components/auth/SocialAuthButtons.js");
/* harmony import */ var _hoc_withRedirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/withRedirect */ "./resources/js/falcon/src/hoc/withRedirect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var LoginForm = function LoginForm(_ref) {
  var setRedirect = _ref.setRedirect,
      hasLabel = _ref.hasLabel,
      layout = _ref.layout;

  // State
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      remember = _useState6[0],
      setRemember = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isDisabled = _useState8[0],
      setIsDisabled = _useState8[1]; // Handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Logged in as ".concat(email));
    setRedirect(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsDisabled(!email || !password);
  }, [email, password]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Email address' : '',
    value: email,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setEmail(target.value);
    },
    type: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Password' : '',
    value: password,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setPassword(target.value);
    },
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CustomInput"], {
    id: "customCheckRemember",
    label: "Remember me",
    checked: remember,
    onChange: function onChange(_ref4) {
      var target = _ref4.target;
      return setRemember(target.checked);
    },
    type: "checkbox"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "fs--1",
    to: "/authentication/".concat(layout, "/forget-password")
  }, "Forget Password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    block: true,
    className: "mt-3",
    disabled: isDisabled
  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mt-4"
  }, "or log in with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialAuthButtons__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

LoginForm.propTypes = {
  setRedirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hasLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
LoginForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withRedirect__WEBPACK_IMPORTED_MODULE_7__["default"])(LoginForm));

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/RegistrationForm.js":
/*!*********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/RegistrationForm.js ***!
  \*********************************************************************/
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
/* harmony import */ var _common_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Divider */ "./resources/js/falcon/src/components/common/Divider.js");
/* harmony import */ var _SocialAuthButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocialAuthButtons */ "./resources/js/falcon/src/components/auth/SocialAuthButtons.js");
/* harmony import */ var _hoc_withRedirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hoc/withRedirect */ "./resources/js/falcon/src/hoc/withRedirect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var RegistrationForm = function RegistrationForm(_ref) {
  var setRedirect = _ref.setRedirect,
      setRedirectUrl = _ref.setRedirectUrl,
      layout = _ref.layout,
      hasLabel = _ref.hasLabel;

  // State
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      confirmPassword = _useState8[0],
      setConfirmPassword = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isAccepted = _useState10[0],
      setIsAccepted = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState12 = _slicedToArray(_useState11, 2),
      isDisabled = _useState12[0],
      setIsDisabled = _useState12[1]; // Handler


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Successfully registered as ".concat(name));
    setRedirect(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setRedirectUrl("/authentication/".concat(layout, "/login"));
  }, [setRedirectUrl, layout]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsDisabled(!name || !email || !password || !confirmPassword || !isAccepted || password !== confirmPassword);
  }, [name, email, password, confirmPassword, isAccepted]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Name' : '',
    value: name,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setName(target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Email address' : '',
    value: email,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setEmail(target.value);
    },
    type: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    className: "col-6"
  }, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Password' : '',
    value: password,
    onChange: function onChange(_ref4) {
      var target = _ref4.target;
      return setPassword(target.value);
    },
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    className: "col-6"
  }, hasLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: !hasLabel ? 'Confirm Password' : '',
    value: confirmPassword,
    onChange: function onChange(_ref5) {
      var target = _ref5.target;
      return setConfirmPassword(target.value);
    },
    type: "password"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CustomInput"], {
    id: "customCheckTerms",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "I accept the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "#!"
    }, "terms"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "#!"
    }, "privacy policy")),
    checked: isAccepted,
    onChange: function onChange(_ref6) {
      var target = _ref6.target;
      return setIsAccepted(target.checked);
    },
    type: "checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    block: true,
    className: "mt-3",
    disabled: isDisabled
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mt-4"
  }, "or register with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialAuthButtons__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

RegistrationForm.propTypes = {
  setRedirect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setRedirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hasLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
RegistrationForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withRedirect__WEBPACK_IMPORTED_MODULE_7__["default"])(RegistrationForm));

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/SocialAuthButtons.js":
/*!**********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/SocialAuthButtons.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var SocialAuthButtons = function SocialAuthButtons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    noGutters: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "pr-sm-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "outline-google-plus",
    size: "sm",
    block: true,
    className: "mt-2",
    to: "#!"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: ['fab', 'google-plus-g'],
    transform: "grow-8",
    className: "mr-2"
  }), " google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    className: "pl-sm-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "outline-facebook",
    size: "sm",
    block: true,
    className: "mt-2",
    to: "#!"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: ['fab', 'facebook-square'],
    transform: "grow-8",
    className: "mr-2"
  }), " facebook"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialAuthButtons);

/***/ }),

/***/ "./resources/js/falcon/src/components/common/Divider.js":
/*!**************************************************************!*\
  !*** ./resources/js/falcon/src/components/common/Divider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Divider = function Divider(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-100 position-relative text-center', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "text-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap"
  }, children));
};

Divider.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./resources/js/falcon/src/hoc/withRedirect.js":
/*!*****************************************************!*\
  !*** ./resources/js/falcon/src/hoc/withRedirect.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var withRedirect = function withRedirect(OriginalComponent) {
  var UpdatedComponent = function UpdatedComponent(props) {
    // State
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        redirect = _useState2[0],
        setRedirect = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/'),
        _useState4 = _slicedToArray(_useState3, 2),
        redirectUrl = _useState4[0],
        setRedirectUrl = _useState4[1];

    if (redirect) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: redirectUrl
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OriginalComponent, _extends({
      setRedirect: setRedirect,
      setRedirectUrl: setRedirectUrl
    }, props));
  };

  return UpdatedComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (withRedirect);

/***/ })

}]);