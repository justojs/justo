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

export default function justo(type, config, props) {
  //(1) set runner
  if (type == "automator") automator(config);

  //(2) add automator properties
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

  Object.defineProperty(justo, "workflow", {
    get: function() {
      return runner.workflow;
    },
    enumerable: true
  });

  for (let key of Object.keys(props)) {
    Object.defineProperty(justo, key, {value: props[key], enumerable: true});
  }

  //(3) return runner
  return runner;
}

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
}
