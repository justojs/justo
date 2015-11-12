"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = justo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _justoLogger = require("justo-logger");

var logger = _interopRequireWildcard(_justoLogger);

var _justoReporter = require("justo-reporter");

var reporter = _interopRequireWildcard(_justoReporter);

var _Automator = require("./Automator");

var _Automator2 = _interopRequireDefault(_Automator);

var Reporters = reporter.Reporters;
var ColoredConsoleReporter = reporter.reporter.ColoredConsoleReporter;

var Loggers = logger.Loggers;
var ColoredConsoleLogger = logger.logger.ColoredConsoleLogger;

var runner;
var args;

function justo(type, config) {
  if (type == "automator") return automator(config);
}

Object.defineProperty(justo, "task", {
  get: function get() {
    return runner.task;
  },
  enumerable: true
});

Object.defineProperty(justo, "macro", {
  get: function get() {
    return runner.macro;
  },
  enumerable: true
});

Object.defineProperty(justo, "args", {
  get: function get() {
    return args;
  },
  enumerable: true
});

Object.defineProperty(justo, "arg", {
  get: function get() {
    return args[0];
  },
  enumerable: true
});

function automator(config) {
  var loggers, reporters;

  loggers = new Loggers();
  loggers.add(new ColoredConsoleLogger());

  reporters = new Reporters();
  reporters.add(new ColoredConsoleReporter());

  runner = new _Automator2["default"]({ loggers: loggers, reporters: reporters });

  args = config.arguments;

  return runner;
}
module.exports = exports["default"];
