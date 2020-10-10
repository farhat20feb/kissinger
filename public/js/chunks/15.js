(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/falcon/src/assets/img/leaflet-icon/marker-icon.png":
/*!**********************************************************************!*\
  !*** ./resources/falcon/src/assets/img/leaflet-icon/marker-icon.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marker-icon.png?1d1b00e1299dd2bcf03168c9a76b5f27";

/***/ }),

/***/ "./resources/falcon/src/components/dashboard/ActiveUsersMap.js":
/*!*********************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/ActiveUsersMap.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LeafletMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeafletMap */ "./resources/falcon/src/components/dashboard/LeafletMap.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ActiveUsersMap = function ActiveUsersMap() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('week'),
      _useState2 = _slicedToArray(_useState, 2),
      duration = _useState2[0],
      setDuration = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "h-100 mt-3 mt-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    className: "bg-light d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mb-0"
  }, "Active users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], {
    className: "text-sans-serif"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    color: "link",
    size: "sm",
    className: "text-600 dropdown-caret-none",
    boundary: "viewport"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "ellipsis-h",
    className: "fs--1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: "border py-0",
    right: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Move"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Resize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    divider: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "text-warning"
  }, "Archive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "text-danger"
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "p-0 overflow-hidden h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeafletMap__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], {
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"], {
    type: "select",
    bsSize: "sm",
    id: "selectDuration",
    value: duration,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setDuration(target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "week"
  }, "Last 7 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "month"
  }, "Last month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "year"
  }, "Last year"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "falcon-default",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-sm-inline-block mr-1"
  }, "Location"), "Overview", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "chevron-right",
    className: "ml-1 fs--1"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActiveUsersMap);

/***/ }),

/***/ "./resources/falcon/src/components/dashboard/LeafletMap.js":
/*!*****************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/LeafletMap.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var _MarkerCluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkerCluster */ "./resources/falcon/src/components/dashboard/MarkerCluster.js");
/* harmony import */ var _data_dashboard_activeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/dashboard/activeUsers */ "./resources/falcon/src/data/dashboard/activeUsers.js");
/* harmony import */ var leaflet_tilelayer_colorfilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.tilelayer.colorfilter */ "./node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.min.js");
/* harmony import */ var leaflet_tilelayer_colorfilter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_tilelayer_colorfilter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/Context */ "./resources/falcon/src/context/Context.js");










var LeafletMap = function LeafletMap() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_Context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      isDark = _useContext.isDark;

  var filter = isDark ? ['invert:98%', 'grayscale:69%', 'bright:89%', 'contrast:111%', 'hue:205deg', 'saturate:1000%'] : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mapRef.current) {
      leaflet__WEBPACK_IMPORTED_MODULE_5___default.a.tileLayer.colorFilter('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: null,
        transparent: true,
        filter: filter
      }).addTo(mapRef.current.leafletElement);
    }
  }, [filter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    center: [10.737, 0],
    zoom: 1,
    minZoom: 1,
    maxZoom: 18,
    zoomSnap: 0.5,
    className: "h-100 bg-white",
    style: {
      width: '100%',
      minHeight: 300
    },
    ref: mapRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarkerCluster__WEBPACK_IMPORTED_MODULE_2__["default"], {
    markers: _data_dashboard_activeUsers__WEBPACK_IMPORTED_MODULE_3__["markers"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LeafletMap);

/***/ }),

/***/ "./resources/falcon/src/components/dashboard/MarkerCluster.js":
/*!********************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/MarkerCluster.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster/dist/leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster.js");
/* harmony import */ var leaflet_markercluster_dist_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_dist_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster/dist/MarkerCluster.css */ "./node_modules/leaflet.markercluster/dist/MarkerCluster.css");
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_dist_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet.markercluster/dist/MarkerCluster.Default.css */ "./node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css");
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_dist_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./resources/falcon/src/components/dashboard/constants.js");








var mcg = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.markerClusterGroup({
  chunkedLoading: false,
  spiderfyOnMaxZoom: false
});

var MarkerCluster = function MarkerCluster(_ref) {
  var markers = _ref.markers;

  var _useLeaflet = Object(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["useLeaflet"])(),
      map = _useLeaflet.map;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    mcg.clearLayers();
    markers.map(function (_ref2) {
      var lat = _ref2.lat,
          _long = _ref2["long"],
          name = _ref2.name,
          street = _ref2.street,
          location = _ref2.location;
      var popupContent = "\n        <h6 class=\"mb-1\">".concat(name, "</h6>\n        <p class=\"m-0 text-500\">").concat(street, ", ").concat(location, "</p>\n      ");
      return leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.LatLng(lat, _long), {
        icon: _constants__WEBPACK_IMPORTED_MODULE_7__["customMarker"]
      }).addTo(mcg).bindPopup(popupContent);
    }); // optionally center the map around the markers
    // map.fitBounds(mcg.getBounds());
    // // add the marker cluster group to the map

    map.addLayer(mcg);
  }, [markers, map]);
  return null;
};

MarkerCluster.propTypes = {
  markers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    lat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    "long": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    street: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MarkerCluster);

/***/ }),

/***/ "./resources/falcon/src/components/dashboard/constants.js":
/*!****************************************************************!*\
  !*** ./resources/falcon/src/components/dashboard/constants.js ***!
  \****************************************************************/
/*! exports provided: customMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customMarker", function() { return customMarker; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_leaflet_icon_marker_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/leaflet-icon/marker-icon.png */ "./resources/falcon/src/assets/img/leaflet-icon/marker-icon.png");
/* harmony import */ var _assets_img_leaflet_icon_marker_icon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_leaflet_icon_marker_icon_png__WEBPACK_IMPORTED_MODULE_1__);


var customMarker = new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Icon({
  iconUrl: _assets_img_leaflet_icon_marker_icon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

/***/ })

}]);