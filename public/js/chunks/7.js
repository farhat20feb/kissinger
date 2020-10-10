(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/falcon/src/components/dashboard/PurchasesTable.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/PurchasesTable.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-table2-paginator */ "./node_modules/react-bootstrap-table2-paginator/lib/index.js");
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-table-next */ "./node_modules/react-bootstrap-table-next/lib/index.js");
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_es_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Badge */ "./node_modules/reactstrap/es/Badge.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _common_ButtonIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ButtonIcon */ "./resources/falcon/src/components/common/ButtonIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _data_dashboard_purchaseList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/dashboard/purchaseList */ "./resources/falcon/src/data/dashboard/purchaseList.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var CustomTotal = function CustomTotal(_ref) {
  var sizePerPage = _ref.sizePerPage,
      totalSize = _ref.totalSize,
      page = _ref.page,
      lastIndex = _ref.lastIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, (page - 1) * sizePerPage + 1, " to ", lastIndex > totalSize ? totalSize : lastIndex, " of ", totalSize, " \u2014", ' ');
};

var customerFormatter = function customerFormatter(customerName) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "pages/customer-details",
    className: "font-weight-semi-bold"
  }, customerName);
};

var badgeFormatter = function badgeFormatter(status) {
  var color = '';
  var icon = '';
  var text = '';

  switch (status) {
    case 'success':
      color = 'success';
      icon = 'check';
      text = 'Success';
      break;

    case 'blocked':
      color = 'secondary';
      icon = 'ban';
      text = 'Blocked';
      break;

    default:
      color = 'warning';
      icon = 'stream';
      text = 'Pending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "soft-".concat(color),
    className: "rounded-capsule"
  }, text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: icon,
    transform: "shrink-2",
    className: "ml-1"
  }));
};

var amountFormatter = function amountFormatter(amount) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "$", amount);
};

var columns = [{
  dataField: 'customer',
  text: 'Customer',
  formatter: customerFormatter,
  classes: 'border-0 align-middle',
  headerClasses: 'border-0',
  sort: true
}, {
  dataField: 'email',
  text: 'Email',
  classes: 'border-0 align-middle',
  headerClasses: 'border-0',
  sort: true
}, {
  dataField: 'product',
  text: 'Product',
  classes: 'border-0 align-middle',
  headerClasses: 'border-0',
  sort: true
}, {
  dataField: 'status',
  text: 'Payment',
  formatter: badgeFormatter,
  classes: 'border-0 align-middle fs-0',
  headerClasses: 'border-0',
  sort: true
}, {
  dataField: 'amount',
  text: 'Amount',
  formatter: amountFormatter,
  classes: 'border-0 align-middle',
  headerClasses: 'border-0',
  sort: true,
  align: 'right',
  headerAlign: 'right'
}, {
  dataField: 'action',
  classes: 'border-0 align-middle',
  headerClasses: 'border-0',
  text: ''
}];

var SelectRowInput = function SelectRowInput(_ref2) {
  var indeterminate = _ref2.indeterminate,
      rowIndex = _ref2.rowIndex,
      rest = _objectWithoutProperties(_ref2, ["indeterminate", "rowIndex"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-control custom-checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "custom-control-input"
  }, rest, {
    onChange: function onChange() {},
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-control-label"
  }));
};

var selectRow = function selectRow(onSelect) {
  return {
    mode: 'checkbox',
    clickToSelect: false,
    selectionHeaderRenderer: function selectionHeaderRenderer(_ref3) {
      var mode = _ref3.mode,
          rest = _objectWithoutProperties(_ref3, ["mode"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectRowInput, _extends({
        type: "checkbox"
      }, rest));
    },
    selectionRenderer: function selectionRenderer(_ref4) {
      var mode = _ref4.mode,
          rest = _objectWithoutProperties(_ref4, ["mode"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectRowInput, _extends({
        type: mode
      }, rest));
    },
    headerColumnStyle: {
      border: 0,
      verticalAlign: 'middle'
    },
    selectColumnStyle: {
      border: 0,
      verticalAlign: 'middle'
    },
    onSelect: onSelect,
    onSelectAll: onSelect
  };
};

var options = {
  custom: true,
  sizePerPage: 6,
  totalSize: _data_dashboard_purchaseList__WEBPACK_IMPORTED_MODULE_8__["default"].length
};

var PurchasesTable = function PurchasesTable(_ref5) {
  var setIsSelected = _ref5.setIsSelected;
  var table = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var handleNextPage = function handleNextPage(_ref6) {
    var page = _ref6.page,
        onPageChange = _ref6.onPageChange;
    return function () {
      onPageChange(page + 1);
    };
  };

  var handlePrevPage = function handlePrevPage(_ref7) {
    var page = _ref7.page,
        onPageChange = _ref7.onPageChange;
    return function () {
      onPageChange(page - 1);
    };
  };

  var handleViewAll = function handleViewAll(_ref8, newSizePerPage) {
    var onSizePerPageChange = _ref8.onSizePerPageChange;
    onSizePerPageChange(newSizePerPage, 1);
  };

  var onSelect = function onSelect() {
    setImmediate(function () {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_1__["PaginationProvider"], {
    pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_1___default()(options)
  }, function (_ref9) {
    var paginationProps = _ref9.paginationProps,
        paginationTableProps = _ref9.paginationTableProps;
    var lastIndex = paginationProps.page * paginationProps.sizePerPage;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
      ref: table,
      bootstrap4: true,
      keyField: "id",
      data: _data_dashboard_purchaseList__WEBPACK_IMPORTED_MODULE_8__["default"],
      columns: columns,
      selectRow: selectRow(onSelect),
      bordered: false,
      classes: "table-dashboard table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap",
      rowClasses: "btn-reveal-trigger border-top border-200",
      headerClasses: "bg-200 text-900 border-y border-200"
    }, paginationTableProps))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      noGutters: true,
      className: "px-1 py-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      className: "pl-3 fs--1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTotal, _extends({}, paginationProps, {
      lastIndex: lastIndex
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "link",
      size: "sm",
      icon: "chevron-right",
      iconAlign: "right",
      transform: "down-1 shrink-4",
      className: "px-0 font-weight-semi-bold",
      onClick: function onClick() {
        return handleViewAll(paginationProps, _data_dashboard_purchaseList__WEBPACK_IMPORTED_MODULE_8__["default"].length);
      }
    }, "view all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      xs: "auto",
      className: "pr-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: paginationProps.page === 1 ? 'light' : 'primary',
      size: "sm",
      onClick: handlePrevPage(paginationProps),
      disabled: paginationProps.page === 1,
      className: "px-4"
    }, "Previous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: lastIndex >= paginationProps.totalSize ? 'light' : 'primary',
      size: "sm",
      onClick: handleNextPage(paginationProps),
      disabled: lastIndex >= paginationProps.totalSize,
      className: "px-4 ml-2"
    }, "Next"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PurchasesTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./resources/falcon/src/components/dashboard/PurchasesTableActions.js":
/*!****************************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/PurchasesTableActions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var PurchasesTableActions = function PurchasesTableActions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    color: "link",
    size: "sm",
    className: "text-600 btn-reveal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "ellipsis-h",
    className: "fs--1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true,
    className: "border py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "View"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Refund"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    divider: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    className: "text-warning"
  }, "Archive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    className: "text-danger"
  }, "Delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (PurchasesTableActions);

/***/ }),

/***/ "./resources/falcon/src/data/dashboard/purchaseList.js":
/*!*************************************************************!*\
  !*** ./resources/falcon/src/data/dashboard/purchaseList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard/PurchasesTableActions */ "./resources/falcon/src/components/dashboard/PurchasesTableActions.js");


/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  customer: 'Sylvia Plath',
  email: 'john@gmail.com',
  product: 'Slick - Drag & Drop Bootstrap Generator',
  status: 'success',
  amount: 99,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 2,
  customer: 'Homer',
  email: 'sylvia@mail.ru',
  product: 'Bose SoundSport Wireless Headphones',
  status: 'success',
  amount: 634,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 3,
  customer: 'Edgar Allan Poe',
  email: 'edgar@yahoo.com',
  product: 'All-New Fire HD 8 Kids Edition Tablet',
  status: 'blocked',
  amount: 199,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 4,
  customer: 'William Butler Yeats',
  email: 'william@gmail.com',
  product: 'Apple iPhone XR (64GB)',
  status: 'success',
  amount: 798,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 5,
  customer: 'Rabindranath Tagore',
  email: 'tagore@twitter.com',
  product: 'ASUS Chromebook C202SA-YS02 11.6"',
  status: 'blocked',
  amount: 318,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 6,
  customer: 'Emily Dickinson',
  email: 'emily@gmail.com',
  product: 'Mirari OK to Wake! Alarm Clock & Night-Light',
  status: 'pending',
  amount: 11,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 7,
  customer: 'Giovanni Boccaccio',
  email: 'giovanni@outlook.com',
  product: 'Summer Infant Contoured Changing Pad',
  status: 'success',
  amount: 31,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 8,
  customer: 'Oscar Wilde',
  email: 'oscar@hotmail.com',
  product: 'Munchkin 6 Piece Fork and Spoon Set',
  status: 'success',
  amount: 43,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 9,
  customer: 'John Doe',
  email: 'doe@gmail.com',
  product: 'Falcon - Responsive Dashboard Template',
  status: 'success',
  amount: 57,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 10,
  customer: 'Emma Watson',
  email: 'emma@gmail.com',
  product: 'Apple iPhone XR (64GB)',
  status: 'blocked',
  amount: 999,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 11,
  customer: 'Sylvia Plath',
  email: 'plath@yahoo.com',
  product: 'All-New Fire HD 8 Kids Edition Tablet',
  status: 'pending',
  amount: 199,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  id: 12,
  customer: 'Iori Kim',
  email: 'ikim@yahoo.com',
  product: 'ASUS Chromebook C202SA-YS02 11.6"',
  status: 'pending',
  amount: 200,
  action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_PurchasesTableActions__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}]);

/***/ })

}]);