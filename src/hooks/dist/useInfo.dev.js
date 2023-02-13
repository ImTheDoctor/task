"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useInfo = function useInfo(_ref) {
  var initial = _ref.initial;

  var _useState = (0, _react.useState)(initial),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = (0, _react.useState)(JSON.parse(localStorage.getItem("data")) || []),
      _useState6 = _slicedToArray(_useState5, 2),
      info = _useState6[0],
      setInfo = _useState6[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setInfo([].concat(_toConsumableArray(info), [values]));
    localStorage.setItem("data", JSON.stringify([].concat(_toConsumableArray(info), [values])));
    event.target.reset();
  };

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        type = _event$target.type,
        checked = _event$target.checked,
        value = _event$target.value,
        name = _event$target.name;
    setValues(_objectSpread({}, values, _defineProperty({}, name, type === 'checkbox' ? checked : value)));
  };

  var handleErrors = function handleErrors(err) {
    setErrors(err);
  };

  var handleDelete = function handleDelete() {
    setInfo([]);
    return localStorage.removeItem("data");
  };

  console.log(initial, ': initial');
  console.log(values);
  console.log(info);
  return {
    info: info,
    values: values,
    errors: errors,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    handleDelete: handleDelete,
    handleErrors: handleErrors
  };
};

var _default = useInfo;
exports["default"] = _default;