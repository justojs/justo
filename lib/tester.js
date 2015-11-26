//imports
import {Tester} from "justo-tester";

//internal members
var runner;

//api
export function publish(config, justo) {
  //(1) set runner
  if (!runner) runner = new Tester(config);

  //(2) publish
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

  //(3) return runner
  return runner;
}
