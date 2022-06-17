"use strict";

require("./style.css");

var _interface = _interopRequireDefault(require("./modules/interface"));

var _definition = require("./modules/definition");

var _await = _interopRequireDefault(require("./modules/await"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_definition.refresh.addEventListener('click', _await["default"]);

_definition.scoreForm.addEventListener('submit', _interface["default"]);