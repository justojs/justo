"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _justoTester = require("justo-tester");

var runner;

function publish(config, justo) {
  if (!runner) runner = new _justoTester.Tester(config);

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

  Object.defineProperty(justo, "suite", {
    value: runner.suite,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(justo, "init", {
    value: runner.init,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(justo, "fin", {
    value: runner.fin,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(justo, "test", {
    value: runner.test,
    enumerable: true,
    configurable: true
  });

  return runner;
}
