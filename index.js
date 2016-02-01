//internal members
const justo = initialize;

//api
module.exports = initialize;

/**
 * Initializes the package.
 */
function initialize(justojson) {
  init(justojson);
}

Object.defineProperty(justo, "initialize", {value: initialize});

/**
 * Initializes Justo.js.
 */
function init(config) {
  const log = require("justo-logger");
  const rep = require("justo-reporter");
  const Runner = require("justo-runner").Runner;
  var loggers, reporters, runner;

  //(1) create loggers and reporters used by the runners
  loggers = new log.Loggers();
  loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

  reporters = new rep.Reporters();
  reporters.add(new rep.reporter.ColoredConsoleReporter());

  //(2) create default automator
  runner = new Runner({loggers, reporters, only: !!config.runner.only});
  Object.defineProperty(justo, "runner", {value: runner});
  runner.publishInto(justo);
}
