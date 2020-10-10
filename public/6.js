(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/falcon/src/assets/img/icons/cloud-upload.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/falcon/src/assets/img/icons/cloud-upload.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cloud-upload.svg?7ef49c61af901f469f462722681207bf";

/***/ }),

/***/ "./resources/js/falcon/src/assets/img/team/avatar.png":
/*!************************************************************!*\
  !*** ./resources/js/falcon/src/assets/img/team/avatar.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar.png?f83a7c867d7ba17bacaba050b083ddfa";

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/AdvanceUserForm.js":
/*!***************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/AdvanceUserForm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WizardInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WizardInput */ "./resources/js/falcon/src/components/auth/wizard/WizardInput.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _common_FalconDropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/FalconDropzone */ "./resources/js/falcon/src/components/common/FalconDropzone.js");
/* harmony import */ var _assets_img_team_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/team/avatar.png */ "./resources/js/falcon/src/assets/img/team/avatar.png");
/* harmony import */ var _assets_img_team_avatar_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_team_avatar_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/utils */ "./resources/js/falcon/src/helpers/utils.js");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Avatar */ "./resources/js/falcon/src/components/common/Avatar.js");
/* harmony import */ var _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/icons/cloud-upload.svg */ "./resources/js/falcon/src/assets/img/icons/cloud-upload.svg");
/* harmony import */ var _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var AdvanceUserForm = function AdvanceUserForm(_ref) {
  var _avatar$, _avatar$2;

  var register = _ref.register,
      errors = _ref.errors;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_8__["AuthWizardContext"]),
      user = _useContext.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([].concat(_toConsumableArray(user.avater ? user.avater : []), [{
    src: _assets_img_team_avatar_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }])),
      _useState2 = _slicedToArray(_useState, 2),
      avatar = _useState2[0],
      setAvatar = _useState2[1];

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_8__["AuthWizardContext"]),
      handleInputChange = _useContext2.handleInputChange;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    className: "flex-center pb-3 d-block d-md-flex text-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "4xl",
    className: "mb-2",
    src: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["isIterableArray"])(avatar) ? ((_avatar$ = avatar[0]) === null || _avatar$ === void 0 ? void 0 : _avatar$.base64) || ((_avatar$2 = avatar[0]) === null || _avatar$2 === void 0 ? void 0 : _avatar$2.src) : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
    body: true,
    className: "ml-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_FalconDropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
    files: avatar,
    onChange: function onChange(files) {
      setAvatar(files);
      handleInputChange({
        name: 'avater',
        value: files
      });
    },
    multiple: false,
    accept: "image/*",
    placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], {
      className: " fs-0 mx-auto d-inline-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "",
      width: 25,
      className: "mr-2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Media"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "fs-0 mb-0 text-700"
    }, "Upload your profile picture"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 w-75 mx-auto text-500"
    }, "Upload a 300x300 jpg image with a maximum size of 400KB"))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "select",
    label: "Gender",
    placeholder: "Select your gender",
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"],
    name: "selectGender",
    id: "selectGender",
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      handleInputChange(target);
    },
    innerRef: register({
      required: false
    }),
    errors: errors,
    options: ['Male', 'Female', 'Other']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "number",
    label: "Phone",
    placeholder: "Phone",
    name: "phoneNumber",
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      handleInputChange(target);
    },
    id: "name",
    className: "input-spin-none",
    innerRef: register({
      required: false
    }),
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Date of Birth",
    id: "date",
    customType: "datetime",
    name: "birthDate",
    placeholder: "DD/MM/YYYY",
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "textarea",
    label: "Address",
    name: "address",
    rows: "4",
    id: "address",
    innerRef: register({
      required: false
    }),
    errors: errors
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvanceUserForm);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/AuthWizardProvider.js":
/*!******************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/AuthWizardProvider.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var AuthWizardProvider = function AuthWizardProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      step = _useState4[0],
      setStep = _useState4[1];

  var handleInputChange = function handleInputChange(_ref2) {
    var value = _ref2.value,
        name = _ref2.name;
    return setUser(_objectSpread(_objectSpread({}, user), {}, _defineProperty({}, name, value)));
  };

  var value = {
    user: user,
    setUser: setUser,
    step: step,
    setStep: setStep,
    handleInputChange: handleInputChange
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Context__WEBPACK_IMPORTED_MODULE_1__["AuthWizardContext"].Provider, {
    value: value
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthWizardProvider);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/WizardError.js":
/*!***********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/WizardError.js ***!
  \***********************************************************************/
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var WizardError = function WizardError(_ref) {
  var error = _ref.error,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["error", "className"]);

  return !!error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-danger d-inline-block', className)
  }, rest), error) : null;
};

WizardError.defaultProps = {
  error: ''
};
WizardError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WizardError);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/WizardInput.js":
/*!***********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/WizardInput.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _WizardError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WizardError */ "./resources/js/falcon/src/components/auth/wizard/WizardError.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var WizardInput = function WizardInput(_ref) {
  var _errors$name4, _errors$name5;

  var label = _ref.label,
      id = _ref.id,
      name = _ref.name,
      errors = _ref.errors,
      _ref$tag = _ref.tag,
      Tag = _ref$tag === void 0 ? reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"] : _ref$tag,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      placeholder = _ref.placeholder,
      className = _ref.className,
      customType = _ref.customType,
      rest = _objectWithoutProperties(_ref, ["label", "id", "name", "errors", "tag", "type", "options", "placeholder", "className", "customType"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__["AuthWizardContext"]),
      user = _useContext.user,
      handleInputChange = _useContext.handleInputChange;

  if (customType === 'datetime') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, !!label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
      id: id,
      dateFormat: "DD/MM/YYYY",
      timeFormat: false,
      defaultValue: user[name],
      onChange: function onChange(setStartDate) {
        return handleInputChange({
          name: name,
          value: setStartDate
        });
      },
      inputProps: {
        name: name,
        placeholder: placeholder
      }
    }, rest)));
  }

  if (type === 'checkbox' || type === 'switch' || type === 'radio') {
    var _errors$name;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      name: name,
      id: id,
      type: type,
      className: className,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardError__WEBPACK_IMPORTED_MODULE_3__["default"], {
        error: (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
        className: "fs--1 font-weight-normal d-block"
      }))
    }, rest)));
  }

  if (type === 'select') {
    var _errors$name2, _errors$name3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, !!label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      "for": id
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      name: name,
      id: id,
      defaultValue: user[name],
      type: type,
      label: label,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, {
        'border-danger': (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message
      })
    }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: ""
    }, placeholder), options.map(function (option, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: option,
        key: index
      }, option);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: (_errors$name3 = errors[name]) === null || _errors$name3 === void 0 ? void 0 : _errors$name3.message,
      className: "mt-1"
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, !!label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    "for": id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    name: name,
    id: id,
    defaultValue: user[name],
    type: type,
    placeholder: placeholder,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, {
      'border-danger': (_errors$name4 = errors[name]) === null || _errors$name4 === void 0 ? void 0 : _errors$name4.message
    })
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardError__WEBPACK_IMPORTED_MODULE_3__["default"], {
    error: (_errors$name5 = errors[name]) === null || _errors$name5 === void 0 ? void 0 : _errors$name5.message,
    className: "mt-1"
  }));
};

WizardInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};
WizardInput.defaultProps = {
  required: false
};
/* harmony default export */ __webpack_exports__["default"] = (WizardInput);

/***/ }),

/***/ "./resources/js/falcon/src/components/common/FalconDropzone.js":
/*!*********************************************************************!*\
  !*** ./resources/js/falcon/src/components/common/FalconDropzone.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/utils */ "./resources/js/falcon/src/helpers/utils.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Flex */ "./resources/js/falcon/src/components/common/Flex.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/icons/cloud-upload.svg */ "./resources/js/falcon/src/assets/img/icons/cloud-upload.svg");
/* harmony import */ var _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_9__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var getSize = function getSize(size) {
  if (size < 1024) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, size), " Byte");
  } else if (size < 1024 * 1024) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, (size / 1024).toFixed(2)), " KB");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, (size / (1024 * 1024)).toFixed(2)), " MB");
  }
};

var FalconDropzone = function FalconDropzone(_ref) {
  var placeholder = _ref.placeholder,
      className = _ref.className,
      onChange = _ref.onChange,
      files = _ref.files,
      preview = _ref.preview,
      rest = _objectWithoutProperties(_ref, ["placeholder", "className", "onChange", "files", "preview"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDrop: function onDrop(acceptedFiles) {
      var stringFiles = [];

      if (!!acceptedFiles.length) {
        acceptedFiles.map(function (file) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            stringFiles.push({
              id: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
              base64: reader.result,
              size: file.size,
              path: file.path,
              type: file.type
            });
            onChange([].concat(stringFiles));
          };

          return true;
        });
      }
    }
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", getRootProps({
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('p-3 border-dashed border-2x border-300 bg-light rounded-soft text-center cursor-pointer', className)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _objectSpread(_objectSpread({}, getInputProps()), rest)), placeholder);
  }), preview && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["isIterableArray"])(files) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-top mt-3"
  }, files.map(function (_ref3) {
    var id = _ref3.id,
        path = _ref3.path,
        base64 = _ref3.base64,
        size = _ref3.size;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
      className: "align-items-center py-3 border-bottom btn-reveal-trigger",
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "img-fluid",
      width: 38,
      src: base64,
      alt: path
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
      body: true,
      tag: _Flex__WEBPACK_IMPORTED_MODULE_7__["default"],
      justify: "between",
      align: "center",
      className: "ml-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      "data-dz-name": ""
    }, path), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "position-relative",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 fs--1 text-400 line-height-1"
    }, getSize(size)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["UncontrolledDropdown"], {
      className: "text-sans-serif"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownToggle"], {
      color: "link",
      size: "sm",
      className: "text-600 btn-reveal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: "ellipsis-h"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], {
      className: "border py-0",
      right: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
      className: "text-danger",
      onClick: function onClick() {
        return onChange(files.filter(function (file) {
          return file.id !== id;
        }));
      }
    }, "Remove File"))))));
  })));
};

FalconDropzone.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  files: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isMulti: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FalconDropzone.defaultProps = {
  placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_icons_cloud_upload_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    width: 25,
    className: "mr-2"
  }),
  files: [],
  preview: false
};
/* harmony default export */ __webpack_exports__["default"] = (FalconDropzone);

/***/ })

}]);