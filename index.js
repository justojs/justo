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
  const Console = require("justo-console");
  const log = require("justo-logger");
  const rep = require("justo-reporter");
  const Runner = require("justo-runner").Runner;
  var console, loggers, reporters, runner;

  //(1) create console, loggers, reporters used by the runners
  console = new Console();

  loggers = new log.Loggers();
  loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

  reporters = new rep.Reporters();
  if (!config.reporter) reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({console}, config.reporter)));
  else if (config.reporter.type == "console") reporters.add(new rep.reporter.ConsoleReporter(Object.assign({console}, config.reporter.console)));
  else reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({console}, config.reporter.coloredConsole)));
  reporters.add(new rep.reporter.StateReporter("state"));

  //(2) create default automator
  runner = new Runner({loggers, reporters, console, only: !!config.runner.only});
  Object.defineProperty(justo, "runner", {value: runner});
  runner.publishInto(justo);
}
