"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var data = function data() {
  scoreContainer.innerHTML = '';
  fetch(gameURL).then(function (res) {
    return res.json();
  }).then(function (data) {
    data.result.forEach(function (data) {
      scoreContainer.innerHTML += "\n          <li>".concat(data.user, ": ").concat(data.score, "</li>");
    });
  });
};

var _default = data;
exports["default"] = _default;