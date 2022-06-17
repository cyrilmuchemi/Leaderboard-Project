"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _definition = require("./definition.js");

var data = function data() {
  _definition.scoreContainer.innerHTML = '';
  fetch(_definition.gameURL).then(function (res) {
    return res.json();
  }).then(function (data) {
    data.result.forEach(function (data) {
      _definition.scoreContainer.innerHTML += "\n          <li>".concat(data.user, ": ").concat(data.score, "</li>");
    });
  });
};

var _default = data;
exports["default"] = _default;