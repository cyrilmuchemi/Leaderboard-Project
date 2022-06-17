"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _definition = require("./definition.js");

var User = function User() {
  var userName = _definition.name.value;
  var userScore = _definition.score.value;
  var userInput = {
    user: userName,
    score: userScore
  };
  return userInput;
};

var _default = User;
exports["default"] = _default;