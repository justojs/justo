"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _justoAutomator = require("justo-automator");

var runner;

function publish(config, justo) {
  if (!runner) runner = new _justoAutomator.Automator(config);

  Object.defineProperty(justo, "simple", {
    value: runner.simple,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(justo, "macro", {
    value: runner.macro,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(justo, "workflow", {
    value: runner.workflow,
    enumerable: true,
    configurable: true
  });

  delete justo.suite;
  delete justo.test;
  delete justo.init;
  delete justo.fin;

  return runner;
}
