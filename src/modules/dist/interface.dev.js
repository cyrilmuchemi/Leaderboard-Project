"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _refresher = _interopRequireDefault(require("./refresher.js"));

var _definition = require("./definition.js");

var _UI = _interopRequireDefault(require("./UI.js"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Submit = function Submit(e) {
  e.preventDefault();
  var Data = new _api["default"]();
  Data.add((0, _UI["default"])());
  (0, _refresher["default"])(_definition.name, _definition.score);
};

var _default = Submit;
exports["default"] = _default;