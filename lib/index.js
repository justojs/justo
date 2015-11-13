//imports
import * as logger from "justo-logger";
import * as reporter from "justo-reporter";
import {Automator} from "justo-runner";

const Reporters = reporter.Reporters;
const ColoredConsoleReporter = reporter.reporter.ColoredConsoleReporter;

const Loggers = logger.Loggers;
const ColoredConsoleLogger = logger.logger.ColoredConsoleLogger;

//api
var runner;
var args;

export default function justo(type, config) {
  if (type == "automator") return automator(config);
}

Object.defineProperty(justo, "task", {
  get: function() {
    return runner.task;
  },
  enumerable: true
});

Object.defineProperty(justo, "macro", {
  get: function() {
    return runner.macro;
  },
  enumerable: true
});

Object.defineProperty(justo, "args", {
  get: function() {
    return args;
  },
  enumerable: true
});

Object.defineProperty(justo, "arg", {
  get: function() {
    return args[0];
  },
  enumerable: true
});

/**
 * Automator.
 */
function automator(config) {
  var loggers, reporters;

  //(1) create automator components
  loggers = new Loggers();
  loggers.add(new ColoredConsoleLogger());

  reporters = new Reporters();
  reporters.add(new ColoredConsoleReporter());

  //(2) set runner
  runner = new Automator({loggers, reporters});

  //(3) set arguments
  args = config.arguments;

  //(3) return
  return runner;
}
