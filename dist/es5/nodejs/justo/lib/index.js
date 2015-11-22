"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = justo;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _justoLogger = require("justo-logger");

var logger = _interopRequireWildcard(_justoLogger);

var _justoReporter = require("justo-reporter");

var reporter = _interopRequireWildcard(_justoReporter);

var _justoAutomator = require("justo-automator");

var Reporters = reporter.Reporters;
var ColoredConsoleReporter = reporter.reporter.ColoredConsoleReporter;

var Loggers = logger.Loggers;
var ColoredConsoleLogger = logger.logger.ColoredConsoleLogger;

var runner;
var args;

function justo(type, config, props) {
  if (type == "automator") automator(config);

  Object.defineProperty(justo, "simple", {
    get: function get() {
      return runner.simple;
    },
    enumerable: true
  });

  Object.defineProperty(justo, "macro", {
    get: function get() {
      return runner.macro;
    },
    enumerable: true
  });

  Object.defineProperty(justo, "workflow", {
    get: function get() {
      return runner.workflow;
    },
    enumerable: true
  });

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      Object.defineProperty(justo, key, { value: props[key], enumerable: true });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return runner;
}

function automator(config) {
  var loggers, reporters;

  loggers = new Loggers();
  loggers.add(new ColoredConsoleLogger());

  reporters = new Reporters();
  reporters.add(new ColoredConsoleReporter());

  runner = new _justoAutomator.Automator({ loggers: loggers, reporters: reporters });
}
module.exports = exports["default"];
