"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = 



initialize;var justo = initialize;function initialize(justojson) {
  init(justojson);}


Object.defineProperty(justo, "initialize", { value: initialize });




function init(config) {
  var log = require("justo-logger");
  var rep = require("justo-reporter");
  var Runner = require("justo-runner").Runner;
  var loggers, reporters, runner;


  loggers = new log.Loggers();
  loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

  reporters = new rep.Reporters();
  reporters.add(new rep.reporter.ColoredConsoleReporter());


  runner = new Runner({ loggers: loggers, reporters: reporters, only: !!config.runner.only });
  Object.defineProperty(justo, "runner", { value: runner });
  runner.publishInto(justo);}module.exports = exports["default"];
