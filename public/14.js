(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/falcon/src/components/auth/wizard/BasicUserForm.js":
/*!*************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/BasicUserForm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WizardInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WizardInput */ "./resources/js/falcon/src/components/auth/wizard/WizardInput.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var BasicUserForm = function BasicUserForm(_ref) {
  var register = _ref.register,
      errors = _ref.errors,
      watch = _ref.watch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Name*",
    placeholder: "Name",
    name: "name",
    id: "name",
    innerRef: register({
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Min length 2'
      }
    }),
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Email*",
    placeholder: "Email",
    id: "email",
    name: "email",
    innerRef: register({
      required: 'Email is required',
      pattern: {
        value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
        message: 'Email must be valid'
      }
    }),
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    form: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "password",
    label: "Password*",
    placeholder: "Password",
    id: "password",
    name: "password",
    innerRef: register({
      required: 'You must specify a password',
      minLength: {
        value: 2,
        message: 'Password must have at least 2 characters'
      }
    }),
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "password",
    label: "Confirm Password*",
    placeholder: "Confirm Password",
    id: "confirmPassword",
    name: "confirmPassword",
    innerRef: register({
      validate: function validate(value) {
        return value === watch('password') || 'The password do not match';
      }
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "checkbox",
    id: "agreeToTerms",
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"],
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "I accept the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#!"
    }, " terms"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#!"
    }, " privacy policy")),
    name: "agreeToTerms",
    innerRef: register({
      required: 'You have to agree with us'
    }),
    errors: errors
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicUserForm);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/BillingUserForm.js":
/*!***************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/BillingUserForm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WizardInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WizardInput */ "./resources/js/falcon/src/components/auth/wizard/WizardInput.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");






var BillingUserForm = function BillingUserForm(_ref) {
  var register = _ref.register,
      errors = _ref.errors;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__["AuthWizardContext"]),
      handleInputChange = _useContext.handleInputChange;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    form: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "number",
    name: "cardNumber",
    label: "Card Number*",
    placeholder: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022",
    className: "input-spin-none",
    id: "cardNumber",
    innerRef: register({
      required: 'Please Enter your card number'
    }),
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Name on Card*",
    name: "nameOnCard",
    placeholder: "John Doe",
    id: "nameOnCard",
    innerRef: register({
      required: 'Name on card is requred'
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    form: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "select",
    name: "country",
    label: "Country*",
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      handleInputChange(target);
    },
    innerRef: register({
      required: 'Country is requred'
    }),
    errors: errors,
    options: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', "Lao, People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'],
    placeholder: "Select your country",
    id: "country"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "number",
    name: "zipCode",
    label: "Zip Code*",
    className: "input-spin-none",
    placeholder: "1234",
    id: "zipcode",
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      handleInputChange(target);
    },
    innerRef: register({
      required: 'Zip Code is requred'
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    form: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Date of Birth",
    id: "date",
    customType: "datetime",
    name: "expdate",
    placeholder: "DD/YYYY",
    dateFormat: "MM-YYYY",
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "CVV*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "d-inline-block cursor-pointer text-secondary",
      id: "CVVTooltip"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: "question-circle",
      className: "mx-2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
      placement: "top",
      target: "CVVTooltip"
    }, "Card verification value")),
    name: "cvv",
    placeholder: "123",
    id: "ccv",
    onChange: function onChange(_ref4) {
      var target = _ref4.target;
      handleInputChange(target);
    },
    className: "input-spin-none",
    innerRef: register({
      required: 'CVV is requred',
      maxLength: {
        value: 3,
        message: 'cvv must have at max 3 characters'
      }
    }),
    errors: errors
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BillingUserForm);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/Success.js":
/*!*******************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/Success.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lottie_celebration_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lottie/celebration.json */ "./resources/js/falcon/src/components/auth/wizard/lottie/celebration.json");
var _lottie_celebration_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lottie/celebration.json */ "./resources/js/falcon/src/components/auth/wizard/lottie/celebration.json", 1);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");






var Success = function Success() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_4__["AuthWizardContext"]),
      setStep = _useContext.setStep,
      setUser = _useContext.setUser;

  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _lottie_celebration_json__WEBPACK_IMPORTED_MODULE_3__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  var emptyData = function emptyData() {
    setStep(1);
    setUser({});
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wizard-lottie-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wizard-lottie mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: defaultOptions
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-1"
  }, "Your account is all set!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fs-0"
  }, "Now you can access to your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    className: "px-5 my-3 text-white",
    onClick: emptyData
  }, "Start Over"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/UserForm.js":
/*!********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/UserForm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _BasicUserForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicUserForm */ "./resources/js/falcon/src/components/auth/wizard/BasicUserForm.js");
/* harmony import */ var _AdvanceUserForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdvanceUserForm */ "./resources/js/falcon/src/components/auth/wizard/AdvanceUserForm.js");
/* harmony import */ var _BillingUserForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BillingUserForm */ "./resources/js/falcon/src/components/auth/wizard/BillingUserForm.js");
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Success */ "./resources/js/falcon/src/components/auth/wizard/Success.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../context/Context */ "./resources/js/falcon/src/context/Context.js");
/* harmony import */ var _WizardModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WizardModal */ "./resources/js/falcon/src/components/auth/wizard/WizardModal.js");
/* harmony import */ var _common_ButtonIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/ButtonIcon */ "./resources/js/falcon/src/components/common/ButtonIcon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var UserForm = function UserForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_9__["default"]),
      isRTL = _useContext.isRTL;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_9__["AuthWizardContext"]),
      user = _useContext2.user,
      setUser = _useContext2.setUser,
      step = _useContext2.step,
      setStep = _useContext2.setStep;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      watch = _useForm.watch;

  var onSubmitData = function onSubmitData(data) {
    setUser(_objectSpread(_objectSpread({}, user), data));
    setStep(step + 1);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  var handleBackStep = function handleBackStep(targetStep) {
    if (step !== 4) {
      if (targetStep < step) {
        setStep(targetStep);
      }
    } else {
      toggle();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WizardModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toggle: toggle,
    modal: modal,
    setModal: setModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"],
    onSubmit: handleSubmit(onSubmitData),
    className: "theme-wizard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('font-weight-semi-bold', {
      'done cursor-pointer': step > 1,
      active: step === 1
    }),
    onClick: function onClick() {
      return handleBackStep(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "lock"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block mt-1 fs--1"
  }, "Account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('font-weight-semi-bold', {
      'done  cursor-pointer': step > 2,
      active: step === 2
    }),
    onClick: function onClick() {
      return handleBackStep(2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "user"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block mt-1 fs--1"
  }, "Personal"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('font-weight-semi-bold', {
      'done  cursor-pointer': step > 3,
      active: step === 3
    }),
    onClick: function onClick() {
      return handleBackStep(3);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "dollar-sign"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block mt-1 fs--1"
  }, "Billing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('font-weight-semi-bold', {
      'done  cursor-pointer': step > 3
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-item-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "thumbs-up"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-block mt-1 fs--1"
  }, "Done"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "fs--1 font-weight-normal px-md-6 pt-4 pb-3"
  }, step === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasicUserForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    register: register,
    errors: errors,
    watch: watch
  }), step === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdvanceUserForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    register: register,
    errors: errors
  }), step === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BillingUserForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    register: register,
    errors: errors
  }), step === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Success__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('px-md-6 bg-light', {
      'd-none': step === 4,
      ' d-flex': step < 4
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "link",
    icon: isRTL ? 'chevron-right' : 'chevron-left',
    iconAlign: "left",
    transform: "down-1 shrink-4",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('px-0 font-weight-semi-bold', {
      'd-none': step === 1
    }),
    onClick: function onClick() {
      setStep(step - 1);
    }
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    className: "ml-auto px-5",
    type: "submit",
    icon: isRTL ? 'chevron-left' : 'chevron-right',
    iconAlign: "right",
    transform: "down-1 shrink-4"
  }, "Next"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/WizardLayout.js":
/*!************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/WizardLayout.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserForm */ "./resources/js/falcon/src/components/auth/wizard/UserForm.js");
/* harmony import */ var _components_common_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/Section */ "./resources/js/falcon/src/components/common/Section.js");
/* harmony import */ var _components_navbar_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/navbar/Logo */ "./resources/js/falcon/src/components/navbar/Logo.js");
/* harmony import */ var _AuthWizardProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthWizardProvider */ "./resources/js/falcon/src/components/auth/wizard/AuthWizardProvider.js");







var WizardLayout = function WizardLayout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "py-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "flex-center min-vh-100 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 10,
    lg: 7,
    className: "col-xxl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthWizardProvider__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserForm__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (WizardLayout);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/WizardModal.js":
/*!***********************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/WizardModal.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _lottie_warning_light_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lottie/warning-light.json */ "./resources/js/falcon/src/components/auth/wizard/lottie/warning-light.json");
var _lottie_warning_light_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lottie/warning-light.json */ "./resources/js/falcon/src/components/auth/wizard/lottie/warning-light.json", 1);






var WizardModal = function WizardModal(_ref) {
  var toggle = _ref.toggle,
      modal = _ref.modal,
      setModal = _ref.setModal;
  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _lottie_warning_light_json__WEBPACK_IMPORTED_MODULE_4__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn text-danger position-absolute t-0 r-0  mr-2 mt-1  p-0 bg-transparent border-0",
    onClick: function onClick() {
      return setModal(!modal);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "times",
    className: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    className: "flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lottie__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: defaultOptions,
    style: {
      width: '100px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    body: true
  }, "You don't have access to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "the link. Please try again."))));
};

/* harmony default export */ __webpack_exports__["default"] = (WizardModal);

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/lottie/celebration.json":
/*!********************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/lottie/celebration.json ***!
  \********************************************************************************/
/*! exports provided: v, fr, ip, op, w, h, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.2.1\",\"fr\":60,\"ip\":0,\"op\":120,\"w\":264,\"h\":464,\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[132,249.777,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,17.777,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],\"o\":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],\"v\":[[53.694,-25.404],[51.881,-23.591],[50.068,-25.404],[51.881,-27.217]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],\"o\":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],\"v\":[[-53.867,-20.26],[-55.68,-18.446],[-57.493,-20.26],[-55.68,-22.073]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.203921571374,0.658823549747,0.32549020648,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-0.858,4.484],\"ix\":2},\"a\":{\"a\":0,\"k\":[-0.858,4.484],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1.014,1.014]},\"o\":{\"x\":[0.164,0.164],\"y\":[0,0]},\"n\":[\"0_1p014_0p164_0\",\"0_1p014_0p164_0\"],\"t\":19,\"s\":[62,62],\"e\":[100,100]},{\"t\":58}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":19,\"s\":[-35],\"e\":[-25]},{\"t\":58}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":19,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":25,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":52,\"s\":[100],\"e\":[0]},{\"t\":58}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],\"o\":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],\"v\":[[-53.306,27.449],[-55.119,29.262],[-56.932,27.449],[-55.119,25.636]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.960784316063,0.960784316063,0.960784316063,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.207,\"y\":1},\"o\":{\"x\":0.035,\"y\":0},\"n\":\"0p207_1_0p035_0\",\"t\":19,\"s\":[-30.5,0.107],\"e\":[-68.5,-9.893],\"to\":[-6.33333349227905,-1.66666662693024],\"ti\":[6.33333349227905,1.66666662693024]},{\"t\":69}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-54.5,28.107],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":19,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":21,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":61,\"s\":[100],\"e\":[0]},{\"t\":68}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],\"o\":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],\"v\":[[69.444,41.179],[67.631,42.992],[65.818,41.179],[67.631,39.366]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.835294127464,0.309803932905,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.108,\"y\":0},\"n\":\"0_1_0p108_0\",\"t\":28,\"s\":[24.828,16.174],\"e\":[70.828,31.174],\"to\":[7.66666650772095,2.5],\"ti\":[-7.66666650772095,-2.5]},{\"t\":76}],\"ix\":2},\"a\":{\"a\":0,\"k\":[70.828,42.174],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":29,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p667_1_0p167_0\"],\"t\":30,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":61,\"s\":[100],\"e\":[0]},{\"t\":67}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.592,-0.951],[0.951,0.592]],\"o\":[[0.951,0.592],[-0.592,0.951],[0,0]],\"v\":[[73.931,-6.884],[74.58,-4.09],[71.786,-3.44]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.835294127464,0.309803932905,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.665,0.701],[-0.701,-0.665]],\"o\":[[-0.701,-0.665],[0.665,-0.701],[0,0]],\"v\":[[-76.396,23.886],[-76.461,21.412],[-73.987,21.347]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.475,0.475],\"y\":[0,0]},\"n\":[\"0_1_0p475_0\",\"0_1_0p475_0\"],\"t\":16,\"s\":[48,48],\"e\":[100,100]},{\"t\":60}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":16,\"s\":[-20],\"e\":[16]},{\"t\":56}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":16,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":17,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":42,\"s\":[100],\"e\":[0]},{\"t\":50}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":4,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.539,-1.357],[1.357,-0.539]],\"o\":[[1.357,-0.539],[0.539,1.357],[0,0]],\"v\":[[47.029,50.537],[50.464,52.018],[48.983,55.452]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.835294127464,0.309803932905,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.647,-0.718],[0.718,0.647]],\"o\":[[0.718,0.647],[-0.647,0.718],[0,0]],\"v\":[[-42.262,-30.163],[-42.135,-27.691],[-44.606,-27.564]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-0.271,10.361],\"ix\":2},\"a\":{\"a\":0,\"k\":[-0.271,10.361],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"n\":[\"0p833_0p833_0p167_0p167\",\"0p833_0p833_0p167_0p167\"],\"t\":17,\"s\":[48,48],\"e\":[121,121]},{\"t\":55}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":17,\"s\":[-65],\"e\":[-41]},{\"t\":57}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":18,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":19,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":42,\"s\":[100],\"e\":[0]},{\"t\":46}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":5,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-1.141,-3.423],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.141,3.423]],\"o\":[[-1.261,3.423],[0,0],[0,0],[0,0],[1.261,-3.423],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.06,0],[0,0]],\"v\":[[-54.16,-6.027],[-58.604,-1.643],[-58.604,-1.643],[-58.604,-1.643],[-54.22,2.741],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-54.16,-6.027]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705884457,0.40000000596,0.219607844949,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.117,\"y\":0},\"n\":\"0_1_0p117_0\",\"t\":20,\"s\":[-15.636,-1.957],\"e\":[-54.636,-1.957],\"to\":[-6.5,0],\"ti\":[6.5,0]},{\"t\":53}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-54.636,-1.957],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"n\":[\"0p833_0p833_0p167_0p167\",\"0p833_0p833_0p167_0p167\"],\"t\":20,\"s\":[36,36],\"e\":[100,100]},{\"t\":27}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":20,\"s\":[177],\"e\":[0]},{\"t\":60}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":20,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":24,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":44,\"s\":[100],\"e\":[0]},{\"t\":50}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":6,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-1.213,-3.638],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.213,3.638]],\"o\":[[-1.34,3.638],[0,0],[0,0],[0,0],[1.34,-3.638],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.064,0],[0,0]],\"v\":[[29.244,-37.02],[24.521,-32.36],[24.521,-32.36],[24.521,-32.36],[29.18,-27.701],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[29.244,-37.02]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.992156863213,0.792156875134,0.250980407,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.182,\"y\":0},\"n\":\"0_1_0p182_0\",\"t\":25,\"s\":[20.02,-14.024],\"e\":[29.02,-32.024],\"to\":[1.5,-3],\"ti\":[-1.5,3]},{\"t\":64}],\"ix\":2},\"a\":{\"a\":0,\"k\":[29.02,-32.024],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":25,\"s\":[-188],\"e\":[0]},{\"t\":64}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":25,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":62,\"s\":[100],\"e\":[0]},{\"t\":64}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":7,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-1.647,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.647,4.94]],\"o\":[[-1.82,4.94],[0,0],[0,0],[0,0],[1.82,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.087,0],[0,0]],\"v\":[[-61.399,42.313],[-67.812,48.639],[-67.812,48.639],[-67.812,48.639],[-61.486,54.966],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-61.399,42.313]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.992156863213,0.792156875134,0.250980407,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.16,\"y\":1},\"o\":{\"x\":0.064,\"y\":0},\"n\":\"0p16_1_0p064_0\",\"t\":23,\"s\":[-5.173,18.703],\"e\":[-61.173,48.703],\"to\":[-9.33333301544189,5],\"ti\":[9.33333301544189,-5]},{\"t\":60}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-61.173,48.703],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"n\":[\"0p833_0p833_0p167_0p167\",\"0p833_0p833_0p167_0p167\"],\"t\":23,\"s\":[58,58],\"e\":[100,100]},{\"t\":60}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":23,\"s\":[-114],\"e\":[59]},{\"t\":60}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":23,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":29,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":47,\"s\":[100],\"e\":[0]},{\"t\":52}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":8,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[-1.647,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.647,4.94]],\"o\":[[-1.82,4.94],[0,0],[0,0],[0,0],[1.82,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.087,0],[0,0]],\"v\":[[62.601,18.646],[56.188,24.973],[56.188,24.973],[56.188,24.973],[62.514,31.299],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[62.601,18.646]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.964705884457,0.40000000596,0.219607844949,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.151,\"y\":0},\"n\":\"0_1_0p151_0\",\"t\":31,\"s\":[24.235,24.584],\"e\":[37.235,48.584],\"to\":[2.16666674613953,4],\"ti\":[-2.16666674613953,-4]},{\"t\":66}],\"ix\":2},\"a\":{\"a\":0,\"k\":[62.235,24.584],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":31,\"s\":[267],\"e\":[0]},{\"t\":66}],\"ix\":6},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":31,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":35,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":58,\"s\":[100],\"e\":[0]},{\"t\":63}],\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":9,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,147],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":9,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.167,-1.057],[1.057,0.167],[-0.167,1.057],[-1.057,-0.167]],\"o\":[[-0.167,1.057],[-1.057,-0.167],[0.167,-1.057],[1.057,0.167]],\"v\":[[50.085,-9.024],[47.868,-7.413],[46.257,-9.63],[48.474,-11.241]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.580392181873,0.858823537827,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.734,0.668],[0,0]],\"o\":[[0,0],[0.915,-0.833],[0,0],[0,0]],\"v\":[[34.096,-8.981],[43.364,-5.068],[45.868,-7.347],[41.357,-9.251]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.580392181873,0.858823537827,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-0.856,0.779],[0,0]],\"o\":[[0,0],[0.799,-0.726],[0,0],[0,0]],\"v\":[[30.837,-3.543],[38.247,-0.415],[40.752,-2.693],[29.202,-7.57]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.580392181873,0.858823537827,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.667,-0.025],[0,0],[-0.159,-0.392],[0,0],[0,0],[0,0],[-0.314,0.285],[-3.08,2.806]],\"o\":[[0,0],[-0.423,0.016],[0,0],[0,0],[0,0],[0.16,0.393],[2.179,-1.981],[0.493,-0.45]],\"v\":[[46.283,-9.434],[29.579,-8.813],[29.037,-7.975],[30.965,-3.228],[31.508,-1.892],[33.436,2.852],[34.409,3.075],[46.794,-8.191]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.834,\"y\":0},\"n\":\"0p667_1_0p834_0\",\"t\":9,\"s\":[22.625,5.39],\"e\":[37.625,-21.61],\"to\":[2.5,-4.5],\"ti\":[-7.33333349227905,4.66666650772095]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p667_1_0p167_0\",\"t\":27,\"s\":[37.625,-21.61],\"e\":[66.625,-22.61],\"to\":[7.33333349227905,-4.66666650772095],\"ti\":[-4.83333349227905,0.16666667163372]},{\"t\":99}],\"ix\":2},\"a\":{\"a\":0,\"k\":[31.625,-2.61],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.834],\"y\":[0]},\"n\":[\"0p667_1_0p834_0\"],\"t\":9,\"s\":[0],\"e\":[23]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":27,\"s\":[23],\"e\":[87]},{\"t\":102}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.676,-0.737],[-0.739,-0.322],[0,0],[0.728,1.73]],\"o\":[[0.239,0.904],[0.58,0.632],[0,0],[0.963,-1.623],[0,0]],\"v\":[[8.112,4.826],[9.456,7.333],[11.464,8.758],[18.942,6.333],[19.314,1.004]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.676,-0.737],[-0.739,-0.322],[0,0],[0.728,1.73]],\"o\":[[0.239,0.904],[0.58,0.632],[0,0],[0.963,-1.623],[0,0]],\"v\":[[-4.667,-9.098],[-3.324,-6.591],[-1.315,-5.167],[6.163,-7.592],[6.535,-12.921]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":30,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.424,-2.224],[2.224,2.424],[-2.424,2.224],[-2.224,-2.424]],\"o\":[[-2.424,2.224],[-2.224,-2.424],[2.424,-2.224],[2.224,2.424]],\"v\":[[5.104,-6.217],[-3.311,-6.578],[-2.95,-14.994],[5.465,-14.633]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.424,-2.224],[2.224,2.424],[-2.424,2.224],[-2.224,-2.424]],\"o\":[[-2.424,2.224],[-2.224,-2.424],[2.424,-2.224],[2.224,2.424]],\"v\":[[17.871,7.694],[9.456,7.333],[9.816,-1.083],[18.232,-0.722]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.258823543787,0.521568655968,0.956862747669,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-0.805],[0.805,0],[0,0.805],[-0.805,0]],\"o\":[[0,0.805],[-0.805,0],[0,-0.805],[0.805,0]],\"v\":[[2.131,-18.613],[0.673,-17.154],[-0.786,-18.613],[0.673,-20.071]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-0.805],[0.805,0],[0,0.805],[-0.805,0]],\"o\":[[0,0.805],[-0.805,0],[0,-0.805],[0.805,0]],\"v\":[[23.39,3.886],[21.932,5.344],[20.474,3.886],[21.932,2.428]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.547,-0.198],[4.316,-5.897],[6.344,-7.758],[11.575,-2.059]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.197,-2.934],[2.934,3.197],[-3.197,2.934],[-2.934,-3.197]],\"o\":[[-3.197,2.934],[-2.934,-3.197],[3.197,-2.934],[2.934,3.197]],\"v\":[[6.389,-4.817],[-4.711,-5.294],[-4.235,-16.394],[6.865,-15.917]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.197,-2.934],[2.934,3.197],[-3.197,2.934],[-2.934,-3.197]],\"o\":[[-3.197,2.934],[-2.934,-3.197],[3.197,-2.934],[2.934,3.197]],\"v\":[[19.156,9.094],[8.056,8.618],[8.532,-2.482],[19.632,-2.006]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.654901981354,0.149019613862,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":6,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.524,\"y\":1},\"o\":{\"x\":0.235,\"y\":0},\"n\":\"0p524_1_0p235_0\",\"t\":19,\"s\":[-2.597,2.691],\"e\":[4.403,-2.309],\"to\":[1.16666662693024,-0.83333331346512],\"ti\":[-1.16666662693024,0.83333331346512]},{\"t\":35}],\"ix\":2},\"a\":{\"a\":0,\"k\":[4.403,-2.309],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.524],\"y\":[1]},\"o\":{\"x\":[0.235],\"y\":[0]},\"n\":[\"0p524_1_0p235_0\"],\"t\":19,\"s\":[-15],\"e\":[0]},{\"t\":35}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.1,-0.029],[-0.075,-0.627],[0,0],[-0.402,-0.639],[-0.639,0.402],[0.525,5.142],[0.726,-0.104]],\"o\":[[-0.598,0.174],[0.418,3.66],[-0.639,0.402],[0.402,0.639],[0.17,-0.158],[-0.104,-0.726],[-0.129,-0.071]],\"v\":[[23.835,10.665],[22.93,12.01],[20.679,17.637],[20.346,19.463],[22.172,19.795],[25.565,11.782],[24.163,10.678]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.882352948189,0.96862745285,0.976470589638,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.218,0.733],[-1.464,-1.762],[-0.9,-0.213],[0,0.427]],\"o\":[[-0.48,1.287],[0.865,1.04],[0.091,-0.399],[0,-2.464]],\"v\":[[-3.595,0.569],[-2.616,5.31],[0.082,7.092],[0.226,5.853]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.098039217293,0.46274510026,0.823529422283,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.326,-0.271],[-2.388,-2.873],[-1.23,0.912],[0.271,0.326]],\"o\":[[-0.271,-0.326],[-1.121,1.042],[2.388,2.873],[0.426,-0.277],[0,0]],\"v\":[[-1.227,-1.254],[-2.369,-1.299],[-2.616,5.31],[3.927,6.276],[4.2,5.276]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.258823543787,0.521568655968,0.956862747669,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.524,\"y\":1},\"o\":{\"x\":0.235,\"y\":0},\"n\":\"0p524_1_0p235_0\",\"t\":19,\"s\":[-5.545,8.719],\"e\":[-0.545,2.719],\"to\":[0.83333331346512,-1],\"ti\":[-0.83333331346512,1]},{\"t\":35}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-0.545,2.719],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.524],\"y\":[1]},\"o\":{\"x\":[0.235],\"y\":[0]},\"n\":[\"0p524_1_0p235_0\"],\"t\":19,\"s\":[-21],\"e\":[0]},{\"t\":35}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-2.273,-0.065],[-0.785,1.357],[2.175,0.883],[0,0]],\"o\":[[0,0],[3.45,0.621],[1.864,0.016],[0.883,-2.175],[0,0],[0,0]],\"v\":[[22.694,16.282],[19.382,28.627],[34.588,31.056],[38.61,28.636],[36.567,23.208],[22.694,16.282]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[22.812,22.976],\"ix\":2},\"a\":{\"a\":0,\"k\":[22.812,22.976],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":46,\"s\":[0],\"e\":[40]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":53,\"s\":[40],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":61,\"s\":[0],\"e\":[40]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":68,\"s\":[40],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":76,\"s\":[0],\"e\":[40]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":83,\"s\":[40],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":91,\"s\":[0],\"e\":[40]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":98,\"s\":[40],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":104,\"s\":[0],\"e\":[40]},{\"t\":111}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[2.346,0.055],[0.726,-1.717],[0.802,-3.412]],\"o\":[[0,0],[0.055,-2.346],[-1.557,0.18],[-0.844,2.111],[0,0]],\"v\":[[-7.303,-6.634],[-7.982,-21.533],[-12.149,-25.567],[-15.969,-22.84],[-19.023,-4.768]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-11.923,-7.349],\"ix\":2},\"a\":{\"a\":0,\"k\":[-11.923,-7.349],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-17.51,-5.965],\"ix\":2},\"a\":{\"a\":0,\"k\":[-12.51,-5.965],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":46,\"s\":[0],\"e\":[-57]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":53,\"s\":[-57],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":61,\"s\":[0],\"e\":[-57]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":68,\"s\":[-57],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":76,\"s\":[0],\"e\":[-57]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":83,\"s\":[-57],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":91,\"s\":[0],\"e\":[-57]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":98,\"s\":[-57],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":104,\"s\":[0],\"e\":[-57]},{\"t\":111}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[3.109,-4.939],[0.544,-0.719],[6.406,-2.58],[4.308,1.885],[1.857,-0.603],[1.021,1.037],[-1.659,1.634],[0,0],[1.838,1.867],[1.223,1.656],[0,0],[1.43,1.452],[-0.628,1.436],[-1.668,2.869],[0.119,2.321],[-0.797,2.137],[-8.234,3.256],[-7.762,-7.881],[-0.497,-6.728]],\"o\":[[-0.485,0.77],[-4.172,5.508],[-3.452,1.39],[-3.102,1.829],[-1.445,0.607],[-1.223,-1.656],[0,0],[-1.842,-1.455],[-1.43,-1.452],[0,0],[-1.659,1.634],[-1.021,-1.037],[0.632,-1.848],[-0.978,-2.085],[-0.118,-2.299],[3.121,-8.365],[9.704,-3.838],[4.742,4.815],[0.429,5.812]],\"v\":[[22.85,28.094],[21.305,30.328],[5.022,42.771],[-5.471,42.074],[-13.531,46.335],[-17.642,45.481],[-17.186,39.721],[-14.076,36.657],[-19.802,31.673],[-23.68,27.321],[-26.583,30.181],[-32.35,30.549],[-33.142,26.426],[-29.173,18.84],[-31.098,12.136],[-29.819,5.419],[-10.814,-13.545],[19.188,-6.731],[27.337,11.43]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":4,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.034,\"y\":0.874},\"o\":{\"x\":0.267,\"y\":0},\"n\":\"0p034_0p874_0p267_0\",\"t\":3,\"s\":[-3.158,282.637],\"e\":[-3.158,148.416],\"to\":[0,-24.6100254058838],\"ti\":[0,27.8037662506104]},{\"i\":{\"x\":0.639,\"y\":1},\"o\":{\"x\":0.306,\"y\":0.655},\"n\":\"0p639_1_0p306_0p655\",\"t\":40,\"s\":[-3.158,148.416],\"e\":[-3.158,146.637],\"to\":[0,-0.62887918949127],\"ti\":[0,0.55664157867432]},{\"i\":{\"x\":0,\"y\":0},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0_0_0p167_0p167\",\"t\":48,\"s\":[-3.158,146.637],\"e\":[-3.158,146.637],\"to\":[0,0],\"ti\":[0,0]},{\"i\":{\"x\":0.637,\"y\":1},\"o\":{\"x\":0.947,\"y\":0},\"n\":\"0p637_1_0p947_0\",\"t\":77,\"s\":[-3.158,146.637],\"e\":[-3.158,297.637],\"to\":[0,25.1666660308838],\"ti\":[0,-25.1666660308838]},{\"t\":118}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-3.899,12.125],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[0.753]},\"o\":{\"x\":[0.73],\"y\":[0.002]},\"n\":[\"0_0p753_0p73_0p002\"],\"t\":3,\"s\":[-83],\"e\":[0]},{\"i\":{\"x\":[0.542],\"y\":[0.966]},\"o\":{\"x\":[0.244],\"y\":[0.632]},\"n\":[\"0p542_0p966_0p244_0p632\"],\"t\":40,\"s\":[0],\"e\":[11]},{\"t\":92}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.169,0.366],[-0.366,-1.169],[1.169,-0.366],[0.366,1.169]],\"o\":[[1.169,-0.366],[0.366,1.169],[-1.169,0.366],[-0.366,-1.169]],\"v\":[[74.105,66.32],[76.887,67.774],[75.432,70.555],[72.651,69.101]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.169,0.366],[-0.366,-1.169],[1.169,-0.366],[0.366,1.169]],\"o\":[[1.169,-0.366],[0.366,1.169],[-1.169,0.366],[-0.366,-1.169]],\"v\":[[84.615,63.027],[87.396,64.481],[85.942,67.262],[83.161,65.808]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.392,-0.123],[-0.123,-0.392],[2.821,-0.928],[0.097,0.311],[0.392,-0.123],[-0.123,-0.392],[-3.451,1.081],[-0.003,0.001],[-0.004,0.001],[0.364,1.436]],\"o\":[[-0.392,0.123],[0.097,0.311],[-2.846,0.848],[-0.123,-0.392],[-0.392,0.123],[0.521,1.387],[0.004,-0.001],[0.003,-0.001],[3.451,-1.081],[-0.123,-0.392]],\"v\":[[85.032,68.824],[84.469,69.776],[82.259,73.479],[78.331,71.699],[77.326,71.239],[76.866,72.244],[82.692,74.897],[82.702,74.893],[82.713,74.891],[85.984,69.387]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.75686275959,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":6,\"s\":[81.563,66.65],\"e\":[80.563,69.65],\"to\":[-0.16666667163372,0.5],\"ti\":[0.16666667163372,-0.5]},{\"t\":26}],\"ix\":2},\"a\":{\"a\":0,\"k\":[80.563,69.65],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":6,\"s\":[100,80.2],\"e\":[100,100]},{\"t\":26}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":6,\"s\":[7],\"e\":[0]},{\"t\":26}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0_1_0p333_0\",\"t\":12,\"s\":[85.184,83.972],\"e\":[80.184,68.972],\"to\":[-0.83333331346512,-2.5],\"ti\":[0.83333331346512,2.5]},{\"t\":26}],\"ix\":2},\"a\":{\"a\":0,\"k\":[80.184,68.972],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[0.833,0.833]},\"o\":{\"x\":[0.167,0.167],\"y\":[0.167,0.167]},\"n\":[\"0p833_0p833_0p167_0p167\",\"0p833_0p833_0p167_0p167\"],\"t\":21,\"s\":[100,88],\"e\":[100,100]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":12,\"s\":[10],\"e\":[0]},{\"t\":26}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.115,1.767],[1.109,0.51],[0.526,-1.75],[0,0]],\"o\":[[0.23,-2.72],[-0.123,-1.446],[-1.75,-0.526],[0,0],[0,0]],\"v\":[[106.043,74.431],[106.817,62.464],[104.647,59.522],[100.588,61.502],[96.767,71.274]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":9,\"s\":[93.639,67.126],\"e\":[100.639,72.126],\"to\":[1.16666662693024,0.83333331346512],\"ti\":[-1.16666662693024,-0.83333331346512]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[100.639,72.126],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":9,\"s\":[-38],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[41]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.244,1.754],[-0.984,0.723],[-0.869,-1.608],[0,0]],\"o\":[[-0.775,-2.618],[-0.171,-1.441],[1.608,-0.869],[0,0],[0,0]],\"v\":[[64.19,83.193],[59.28,69.792],[60.811,66.472],[65.187,67.592],[71.397,77.407]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":9,\"s\":[70.639,72.375],\"e\":[67.639,78.375],\"to\":[-0.5,1],\"ti\":[0.5,-1]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[67.639,78.375],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":9,\"s\":[28],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[-59]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.819,-4.165],[-0.224,-0.665],[1.144,-5.255],[3.101,-1.948],[0.425,-1.46],[1.115,-0.203],[0.326,1.784],[0,0],[2.007,-0.366],[1.602,-0.062],[0,0],[1.561,-0.285],[0.649,1.034],[1.117,2.331],[1.546,0.94],[1.027,1.449],[-1.51,6.728],[-8.475,1.546],[-4.55,-2.627]],\"o\":[[0.283,0.649],[1.719,5.099],[-0.617,2.831],[-0.181,2.798],[-0.243,1.196],[-1.602,0.062],[0,0],[-1.743,0.549],[-1.561,0.285],[0,0],[0.326,1.784],[-1.115,0.203],[-0.913,-1.216],[-1.771,-0.284],[-1.532,-0.931],[-4.019,-5.673],[1.779,-7.929],[5.178,-0.945],[3.93,2.269]],\"v\":[[106.04,74.527],[106.803,76.501],[107.682,92.436],[102.637,98.887],[101.851,105.943],[99.5,108.216],[95.991,105.4],[95.38,102.054],[89.663,103.558],[85.162,104.149],[85.732,107.271],[83.443,111.146],[80.442,109.85],[77.295,103.972],[72.135,102.275],[68.371,98.509],[64.484,77.965],[82.013,61.632],[97.276,64.339]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[88.364,96.845],\"ix\":2},\"a\":{\"a\":0,\"k\":[88.364,96.845],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":12,\"s\":[10],\"e\":[0]},{\"t\":26}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[88.398,97.139],\"ix\":2},\"a\":{\"a\":0,\"k\":[88.398,97.139],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.497],\"y\":[0]},\"n\":[\"0p507_1_0p497_0\"],\"t\":9,\"s\":[15],\"e\":[0]},{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p507_1_0p167_0\"],\"t\":24,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.503],\"y\":[1]},\"o\":{\"x\":[0.493],\"y\":[0]},\"n\":[\"0p503_1_0p493_0\"],\"t\":92,\"s\":[0],\"e\":[15]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.331,0.051],[0.118,-0.32],[2.513,0.391],[-0.041,0.265],[0.331,0.051],[0.051,-0.331],[-2.91,-0.453],[-0.251,1.18]],\"o\":[[-0.331,-0.051],[-0.01,0.066],[-2.447,-0.381],[0.051,-0.331],[-0.331,-0.051],[-0.119,1.201],[2.91,0.453],[0.184,-0.31]],\"v\":[[-71.518,70.243],[-72.272,70.736],[-75.277,72.638],[-77.562,69.912],[-78.131,69.214],[-78.829,69.782],[-75.529,73.818],[-71.158,70.977]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.042,0.236],[1.129,0.176],[0.535,-1.01],[-0.109,-0.217],[-0.242,-0.038],[-0.154,0.284],[-0.488,-0.076],[-0.092,-0.486],[-0.314,-0.049],[-0.172,0.176]],\"o\":[[-0.202,-1.125],[-1.129,-0.176],[-0.112,0.212],[0.11,0.22],[0.314,0.049],[0.236,-0.435],[0.488,0.076],[0.061,0.317],[0.242,0.038],[0.17,-0.174]],\"v\":[[-66.409,67.692],[-68.634,65.517],[-71.415,66.912],[-71.42,67.588],[-70.858,67.999],[-70.076,67.607],[-68.866,67.007],[-67.896,67.946],[-67.271,68.558],[-66.609,68.337]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.129,0.176],[0.535,-1.01],[-0.109,-0.217],[-0.242,-0.038],[-0.154,0.284],[-0.488,-0.076],[-0.092,-0.486],[-0.314,-0.049],[-0.171,0.176],[0.042,0.236]],\"o\":[[-1.129,-0.176],[-0.112,0.212],[0.11,0.22],[0.314,0.049],[0.236,-0.435],[0.488,0.076],[0.061,0.317],[0.242,0.038],[0.17,-0.174],[-0.202,-1.125]],\"v\":[[-80.105,63.731],[-82.887,65.126],[-82.892,65.802],[-82.329,66.213],[-81.547,65.821],[-80.337,65.221],[-79.368,66.16],[-78.742,66.772],[-78.081,66.551],[-77.88,65.905]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.258823543787,0.521568655968,0.956862747669,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":8,\"s\":[-75.218,72.983],\"e\":[-75.218,66.983],\"to\":[0,-1],\"ti\":[0,1]},{\"t\":34}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-75.218,67.983],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":8,\"s\":[100,100],\"e\":[100,75]},{\"t\":34}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.296,1.746],[0.962,0.752],[0.916,-1.581],[0,0]],\"o\":[[0.852,-2.593],[0.214,-1.436],[-1.581,-0.916],[0,0],[0,0]],\"v\":[[-55.197,79.471],[-51.678,68.007],[-53.109,64.643],[-57.517,65.632],[-63.492,74.256]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":9,\"s\":[-65.965,71.185],\"e\":[-60.965,77.185],\"to\":[0.83333331346512,1],\"ti\":[-0.83333331346512,-1]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-60.965,77.185],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":9,\"s\":[-32],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":28,\"s\":[0],\"e\":[43]},{\"t\":92}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.168,1.763],[-1.124,0.476],[-0.473,-1.765],[0,0]],\"o\":[[-0.149,-2.726],[0.166,-1.442],[1.765,-0.473],[0,0],[0,0]],\"v\":[[-97.941,78.324],[-99.622,64.151],[-97.365,61.275],[-93.367,63.376],[-89.592,74.36]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":9,\"s\":[-87.601,67.404],\"e\":[-94.601,75.404],\"to\":[-1.16666662693024,1.33333337306976],\"ti\":[1.16666662693024,-1.33333337306976]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-94.601,75.404],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":9,\"s\":[33],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":28,\"s\":[0],\"e\":[-43]},{\"t\":92}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.807,-4.473],[-0.064,-0.699],[2.328,-4.848],[3.467,-1.179],[0.751,-1.322],[1.132,0.06],[-0.096,1.811],[0,0],[2.037,0.108],[1.573,0.31],[0,0],[1.585,0.084],[0.393,1.156],[0.548,2.526],[1.287,1.272],[0.664,1.647],[-3.024,6.197],[-8.602,-0.454],[-3.82,-3.607]],\"o\":[[0.126,0.697],[0.494,5.358],[-1.255,2.612],[-0.822,2.681],[-0.512,1.108],[-1.573,-0.31],[0,0],[-1.823,0.131],[-1.585,-0.084],[0,0],[-0.096,1.811],[-1.132,-0.06],[-0.607,-1.394],[-1.657,-0.685],[-1.275,-1.26],[-2.599,-6.449],[3.564,-7.303],[5.256,0.277],[3.3,3.116]],\"v\":[[-55.222,79.564],[-54.936,81.661],[-57.763,97.367],[-64.162,102.478],[-66.558,109.162],[-69.37,110.829],[-72.134,107.278],[-71.955,103.883],[-77.864,104.025],[-82.38,103.56],[-82.547,106.729],[-85.669,109.969],[-88.29,108.015],[-89.993,101.569],[-94.621,98.726],[-97.414,94.192],[-96.447,73.306],[-75.619,61.465],[-61.394,67.627]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-78.172,97.588],\"ix\":2},\"a\":{\"a\":0,\"k\":[-78.172,97.588],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.497],\"y\":[0]},\"n\":[\"0p507_1_0p497_0\"],\"t\":9,\"s\":[-16],\"e\":[0]},{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p507_1_0p167_0\"],\"t\":24,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.503],\"y\":[1]},\"o\":{\"x\":[0.493],\"y\":[0]},\"n\":[\"0p503_1_0p493_0\"],\"t\":92,\"s\":[0],\"e\":[-16]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.222,-0.097],[0.097,-1.222],[1.222,0.097],[-0.097,1.222]],\"o\":[[1.222,0.097],[-0.097,1.222],[-1.222,-0.097],[0.097,-1.222]],\"v\":[[27.89,68.796],[29.927,71.183],[27.54,73.22],[25.503,70.833]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.222,-0.097],[0.097,-1.222],[1.222,0.097],[-0.097,1.222]],\"o\":[[1.222,0.097],[-0.097,1.222],[-1.222,-0.097],[0.097,-1.222]],\"v\":[[38.869,69.666],[40.906,72.053],[38.519,74.09],[36.482,71.703]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0.021,-0.403],[-3.548,-0.187],[-0.157,1.447],[0.403,0.021]],\"o\":[[-0.403,-0.021],[0.004,1.456],[3.548,0.187],[0.081,-0.477],[0,0]],\"v\":[[29.185,74.537],[28.417,75.305],[32.872,79.745],[37.77,75.799],[37.248,74.963]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.258823543787,0.521568655968,0.956862747669,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":0.828},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_0p828_0p333_0\",\"t\":8,\"s\":[32.73,77.934],\"e\":[32.73,70.146],\"to\":[0,-0.4550960958004],\"ti\":[0,1.13193333148956]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0.368},\"n\":\"0p667_1_0p333_0p368\",\"t\":22,\"s\":[32.73,70.146],\"e\":[32.73,72.934],\"to\":[0,-0.94076693058014],\"ti\":[0,0.37823724746704]},{\"t\":34}],\"ix\":2},\"a\":{\"a\":0,\"k\":[32.73,72.934],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.333,0.333],\"y\":[0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":8,\"s\":[100,69],\"e\":[100,100]},{\"t\":34}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.204,1.759],[1,0.7],[0.832,-1.628],[0,0]],\"o\":[[0.715,-2.635],[0.138,-1.445],[-1.628,-0.832],[0,0],[0,0]],\"v\":[[54.701,82.083],[57.611,70.45],[56.005,67.166],[51.655,68.386],[46.142,77.313]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":9,\"s\":[42.455,75.337],\"e\":[49.455,80.337],\"to\":[1.16666662693024,0.83333331346512],\"ti\":[-1.16666662693024,-0.83333331346512]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[49.455,80.337],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":9,\"s\":[-42],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[32]},{\"t\":106}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.075,1.769],[-1.097,0.535],[-0.566,-1.738],[0,0]],\"o\":[[-0.292,-2.714],[0.09,-1.449],[1.738,-0.566],[0,0],[0,0]],\"v\":[[11.956,83.19],[9.531,69.125],[11.632,66.134],[15.736,68.022],[20.084,78.792]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":9,\"s\":[22.735,71.871],\"e\":[15.735,80.871],\"to\":[-1.16666662693024,1.5],\"ti\":[1.16666662693024,-1.5]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[15.735,80.871],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":9,\"s\":[30],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[-31]},{\"t\":106}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.041,-4.424],[-0.101,-0.695],[2.069,-4.964],[3.4,-1.36],[0.68,-1.36],[1.133,0],[0,1.814],[0,0],[2.04,0],[1.587,0.227],[0,0],[1.587,0],[0.453,1.133],[0.68,2.494],[1.353,1.202],[0.75,1.61],[-2.693,6.348],[-8.614,0],[-4.004,-3.401]],\"o\":[[0.162,0.69],[0.776,5.325],[-1.115,2.674],[-0.68,2.72],[-0.453,1.133],[-1.587,-0.227],[0,0],[-1.814,0.227],[-1.587,0],[0,0],[0,1.814],[-1.133,0],[-0.68,-1.36],[-1.691,-0.597],[-1.34,-1.191],[-2.935,-6.303],[3.174,-7.481],[5.263,0],[3.459,2.938]],\"v\":[[54.681,82.178],[55.077,84.256],[53.081,100.09],[46.961,105.531],[44.92,112.331],[42.2,114.145],[39.253,110.745],[39.253,107.344],[33.359,107.798],[28.825,107.571],[28.825,110.745],[25.878,114.145],[23.158,112.331],[21.117,105.984],[16.346,103.388],[13.319,99.008],[13.183,78.1],[33.359,65.179],[47.888,70.582]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.819607853889,0.886274516582,0.992156863213,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[32.355,102.023],\"ix\":2},\"a\":{\"a\":0,\"k\":[32.355,102.023],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.497],\"y\":[0]},\"n\":[\"0p507_1_0p497_0\"],\"t\":9,\"s\":[-9],\"e\":[0]},{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p507_1_0p167_0\"],\"t\":24,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.503],\"y\":[1]},\"o\":{\"x\":[0.493],\"y\":[0]},\"n\":[\"0p503_1_0p493_0\"],\"t\":92,\"s\":[0],\"e\":[-9]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.217,-0.143],[0.143,-1.217],[1.217,0.143],[-0.143,1.217]],\"o\":[[1.217,0.143],[-0.143,1.217],[-1.217,-0.143],[0.143,-1.217]],\"v\":[[-27.281,64.08],[-25.335,66.542],[-27.797,68.488],[-29.743,66.026]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.217,-0.143],[0.143,-1.217],[1.217,0.143],[-0.143,1.217]],\"o\":[[1.217,0.143],[-0.143,1.217],[-1.217,-0.143],[0.143,-1.217]],\"v\":[[-16.342,65.361],[-14.396,67.823],[-16.859,69.769],[-18.804,67.307]],\"c\":true},\"ix\":2},\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.408,0.048],[0.048,-0.408],[2.954,0.304],[-0.038,0.324],[0.408,0.048],[0.048,-0.408],[-3.592,-0.421],[-0.004,0],[-0.004,0],[-0.254,1.46]],\"o\":[[-0.408,-0.048],[-0.038,0.324],[-2.945,-0.387],[0.048,-0.408],[-0.408,-0.048],[-0.091,1.479],[0.004,0],[0.003,0.001],[3.592,0.421],[0.048,-0.408]],\"v\":[[-18.286,71.753],[-19.188,72.392],[-22.717,74.871],[-25.577,71.644],[-26.307,70.814],[-27.137,71.544],[-22.9,76.343],[-22.889,76.344],[-22.879,76.346],[-17.647,72.655]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.141176477075,0.75686275959,0.878431379795,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0,\"y\":1},\"o\":{\"x\":0.557,\"y\":0},\"n\":\"0_1_0p557_0\",\"t\":13,\"s\":[-23.301,78.72],\"e\":[-23.301,66.72],\"to\":[0,-2],\"ti\":[0,2]},{\"t\":35}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-23.301,68.72],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.557,0.628],\"y\":[0,0]},\"n\":[\"0_1_0p557_0\",\"0_1_0p628_0\"],\"t\":13,\"s\":[100,100],\"e\":[100,73]},{\"t\":35}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.348,1.736],[0.939,0.78],[0.963,-1.553],[0,0]],\"o\":[[0.929,-2.567],[0.257,-1.429],[-1.553,-0.963],[0,0],[0,0]],\"v\":[[-1.705,77.16],[2.154,65.806],[0.823,62.401],[-3.611,63.258],[-9.841,71.701]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":13,\"s\":[-10.458,73.808],\"e\":[-6.458,73.808],\"to\":[0.66666668653488,0],\"ti\":[-0.66666668653488,0]},{\"t\":28}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-6.458,73.808],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":13,\"s\":[-37],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[50]},{\"t\":86}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.22,1.757],[-1.138,0.442],[-0.421,-1.779],[0,0]],\"o\":[[-0.068,-2.729],[0.209,-1.436],[1.779,-0.421],[0,0],[0,0]],\"v\":[[-42.063,75.075],[-43.32,60.858],[-40.979,58.05],[-37.045,60.269],[-33.6,71.361]],\"c\":false},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":13,\"s\":[-33.539,69.767],\"e\":[-38.539,69.767],\"to\":[-0.83333331346512,0],\"ti\":[1.33333337306976,-0.33333334326744]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p833_0p833_0p167_0p167\",\"t\":28,\"s\":[-38.539,69.767],\"e\":[-41.539,71.767],\"to\":[-1.33333337306976,0.33333334326744],\"ti\":[0.5,-0.33333334326744]},{\"t\":86}],\"ix\":2},\"a\":{\"a\":0,\"k\":[-38.539,69.767],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":13,\"s\":[41],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":28,\"s\":[0],\"e\":[-42]},{\"t\":86}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.673,-4.495],[-0.044,-0.701],[2.471,-4.777],[3.501,-1.075],[0.79,-1.299],[1.13,0.093],[-0.149,1.807],[0,0],[2.033,0.168],[1.563,0.357],[0,0],[1.581,0.131],[0.358,1.167],[0.472,2.541],[1.249,1.309],[0.615,1.666],[-3.207,6.105],[-8.585,-0.71],[-3.71,-3.719]],\"o\":[[0.105,0.701],[0.334,5.371],[-1.332,2.573],[-0.902,2.655],[-0.545,1.092],[-1.563,-0.357],[0,0],[-1.826,0.076],[-1.581,-0.131],[0,0],[-0.149,1.807],[-1.13,-0.093],[-0.566,-1.412],[-1.636,-0.734],[-1.237,-1.297],[-2.406,-6.523],[3.779,-7.194],[5.245,0.434],[3.205,3.213]],\"v\":[[-0.899,80.086],[-0.676,82.19],[-3.969,97.806],[-10.518,102.723],[-13.111,109.333],[-15.972,110.916],[-18.629,107.285],[-18.349,103.896],[-24.26,103.862],[-28.76,103.262],[-29.021,106.425],[-32.239,109.571],[-34.8,107.54],[-36.311,101.046],[-40.852,98.066],[-43.508,93.451],[-41.92,72.603],[-20.748,61.388],[-6.713,67.97]],\"c\":true},\"ix\":2},\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.796078443527,0.941176474094,0.972549021244,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":3,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-24.009,98.593],\"ix\":2},\"a\":{\"a\":0,\"k\":[-24.009,98.593],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":3,\"cix\":2,\"ix\":1,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":1,\"cix\":2,\"ix\":2,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-25.943,97.102],\"ix\":2},\"a\":{\"a\":0,\"k\":[-25.943,97.102],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.497],\"y\":[0]},\"n\":[\"0p507_1_0p497_0\"],\"t\":9,\"s\":[2],\"e\":[0]},{\"i\":{\"x\":[0.507],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p507_1_0p167_0\"],\"t\":24,\"s\":[0],\"e\":[0]},{\"i\":{\"x\":[0.503],\"y\":[1]},\"o\":{\"x\":[0.493],\"y\":[0]},\"n\":[\"0p503_1_0p493_0\"],\"t\":92,\"s\":[0],\"e\":[2]},{\"t\":107}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":2,\"cix\":2,\"ix\":4,\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.048,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p048_1_0p333_0\",\"t\":0,\"s\":[0,182],\"e\":[0,145.557],\"to\":[0,-3.17620086669922],\"ti\":[0,7.90277862548828]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":11.555,\"s\":[0,145.557],\"e\":[0,147],\"to\":[0,-6.61127233505249],\"ti\":[0,0]},{\"i\":{\"x\":0.667,\"y\":0.667},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_0p667_0p167_0p167\",\"t\":21,\"s\":[0,147],\"e\":[0,147],\"to\":[0,0],\"ti\":[0,0]},{\"i\":{\"x\":0.631,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p631_1_0p333_0\",\"t\":87,\"s\":[0,147],\"e\":[0,145.557],\"to\":[0,0],\"ti\":[0,-6.61127233505249]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.952,\"y\":0},\"n\":\"0p667_1_0p952_0\",\"t\":97,\"s\":[0,145.557],\"e\":[0,182],\"to\":[0,7.90277862548828],\"ti\":[0,-3.17620086669922]},{\"t\":108}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5}}],\"np\":4,\"cix\":2,\"ix\":3,\"hd\":false}],\"ip\":-17,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[{\"tm\":8,\"cm\":\"0\",\"dr\":0},{\"tm\":9,\"cm\":\"2\",\"dr\":0},{\"tm\":28,\"cm\":\"3\",\"dr\":0},{\"tm\":34,\"cm\":\"1\",\"dr\":0}]}");

/***/ }),

/***/ "./resources/js/falcon/src/components/auth/wizard/lottie/warning-light.json":
/*!**********************************************************************************!*\
  !*** ./resources/js/falcon/src/components/auth/wizard/lottie/warning-light.json ***!
  \**********************************************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.1.5\",\"fr\":29.9700012207031,\"ip\":0,\"op\":42.0000017106951,\"w\":32,\"h\":32,\"nm\":\"System-states-Sin conexión\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"! contornos\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[16,16,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[8.25,8.25,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.847,0.847,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[1,1,0.333],\"y\":[0,0,0]},\"n\":[\"0p847_1_1_0\",\"0p847_1_1_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[100,100,100],\"e\":[130,130,100]},{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.127,0.127,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p127_0\",\"0_1_0p127_0\",\"0p667_1_0p333_0\"],\"t\":21,\"s\":[130,130,100],\"e\":[100,100,100]},{\"t\":42.0000017106951}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.442,0],[0,-0.443],[-0.442,0],[0,0.441]],\"o\":[[-0.442,0],[0,0.441],[0.442,0],[0,-0.443]],\"v\":[[0,-0.8],[-0.8,0],[0,0.8],[0.8,0]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9607843137254902,0.5019607843137255,0.24313725490196078,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.25,12.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformar\"}],\"nm\":\"Grupo 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.221,0],[0,0.221],[0,0],[0.221,0],[0,-0.221],[0,0]],\"o\":[[0.221,0],[0,0],[0,-0.221],[-0.221,0],[0,0],[0,0.221]],\"v\":[[0,2.544],[0.4,2.144],[0.4,-2.144],[0,-2.544],[-0.4,-2.144],[-0.4,2.144]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.9607843137254902,0.5019607843137255,0.24313725490196078,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.25,7.194],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformar\"}],\"nm\":\"Grupo 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.416],[-4.416,0],[0,4.416],[4.416,0]],\"o\":[[0,4.416],[4.416,0],[0,-4.416],[-4.416,0]],\"v\":[[-8,0],[0,8],[8,0],[0,-8]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.8901960784313725,0.8235294117647058,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.25,8.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformar\"}],\"nm\":\"Grupo 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":3597.00014650881,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Sombra contornos\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":8.4,\"s\":[100],\"e\":[0]},{\"t\":23.8000009693939}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[16,16,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[8.25,8.25,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.847,0.847,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[1,1,0.333],\"y\":[0,0,0]},\"n\":[\"0p847_1_1_0\",\"0p847_1_1_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[100,100,100],\"e\":[180,180,100]},{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.127,0.127,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p127_0\",\"0_1_0p127_0\",\"0p667_1_0p333_0\"],\"t\":21,\"s\":[180,180,100],\"e\":[100,100,100]},{\"t\":42.0000017106951}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.416],[-4.416,0],[0,4.416],[4.416,0]],\"o\":[[0,4.416],[4.416,0],[0,-4.416],[-4.416,0]],\"v\":[[-8,0],[0,8],[8,0],[0,-8]],\"c\":true},\"ix\":2},\"nm\":\"Trazado 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.996078431372549,0.9411764705882353,0.9098039215686274,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Relleno 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.25,8.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transformar\"}],\"nm\":\"Grupo 3\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":3597.00014650881,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ })

}]);