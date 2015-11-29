"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = 







initialize;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}var _Publisher = require("./Publisher");var _Publisher2 = _interopRequireDefault(_Publisher);var _Runner = require("./Runner");var _Runner2 = _interopRequireDefault(_Runner);var justo = initialize;function initialize(config) {
  _Publisher2["default"].initialize(justo);
  _Runner2["default"].initialize(justo, config);}


Object.defineProperty(justo, "initialize", { value: initialize });
Object.defineProperty(justo, "publish", { value: function value(obj) {_Publisher2["default"].publish(obj);} });
Object.defineProperty(justo, "unpublish", { value: function value(obj) {_Publisher2["default"].unpublish(obj);} });
Object.defineProperty(justo, "run", { value: function value(work, params) {_Runner2["default"].run(work, params);} });module.exports = exports["default"];
