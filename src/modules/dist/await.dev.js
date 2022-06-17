"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Score = function Score() {
  return regeneratorRuntime.async(function Score$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _data["default"])());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Score;
exports["default"] = _default;