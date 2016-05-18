"use strict";
var justo = initialize;


module.exports = initialize;




function initialize(justojson) {
  init(justojson);}


Object.defineProperty(justo, "initialize", { value: initialize });




function init(config) {
  var Console = require("justo-console");
  var log = require("justo-logger");
  var rep = require("justo-reporter");
  var Runner = require("justo-runner").Runner;
  var console, loggers, reporters, runner;


  console = new Console();

  loggers = new log.Loggers();
  loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

  reporters = new rep.Reporters();
  if (!config.reporter) reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({ console: console }, config.reporter)));else 
  if (config.reporter.type == "console") reporters.add(new rep.reporter.ConsoleReporter(Object.assign({ console: console }, config.reporter.console)));else 
  reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({ console: console }, config.reporter.coloredConsole)));
  reporters.add(new rep.reporter.StateReporter("state"));


  runner = new Runner({ loggers: loggers, reporters: reporters, console: console, only: !!config.runner.only });
  Object.defineProperty(justo, "runner", { value: runner });
  runner.publishInto(justo);}
