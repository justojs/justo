"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = publish;

var loggers, reporters;
var justo = publish;
Object.defineProperty(justo, "publish", { value: publish });

function publish(type, config, props) {
  var log = require("justo-logger");
  var rep = require("justo-reporter");
  var runner;

  if (!loggers) {
    loggers = new log.Loggers();
    loggers.add(new log.logger.ColoredConsoleLogger());
  }

  if (!reporters) {
    reporters = new rep.Reporters();
    reporters.add(new rep.reporter.ColoredConsoleReporter());
  }

  config = Object.assign({}, config, { loggers: loggers, reporters: reporters });

  if (type == "automator") {
    runner = require("./automator").publish(config, justo);
  } else if (type == "tester") {
    runner = require("./tester").publish(config, justo);
  } else {
    throw new Error("Invalid runner type: " + type + ".");
  }

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
module.exports = exports["default"];
