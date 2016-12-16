"use strict";
var justo = initialize;


module.exports = initialize;




function initialize(justojson) {
  init(justojson);
}

Object.defineProperty(justo, "initialize", { value: initialize });




function init(config) {
  var Console = require("justo-console");
  var rep = require("justo-reporter");
  var Runner = require("justo-runner").Runner;
  var console, reporters, runner;


  console = new Console();

  reporters = new rep.Reporters();
  if (!config.reporter) reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({ console: console }, config.reporter)));else
  if (config.reporter.type == "console") reporters.add(new rep.reporter.ConsoleReporter(Object.assign({ console: console }, config.reporter.console)));else
  reporters.add(new rep.reporter.ColoredConsoleReporter(Object.assign({ console: console }, config.reporter.coloredConsole)));
  reporters.add(new rep.reporter.StateReporter("state"));


  runner = new Runner({ reporters: reporters, console: console, only: !!config.runner.only, onError: config.runner.onError });
  Object.defineProperty(justo, "runner", { value: runner });
  runner.publishInto(justo);
}
