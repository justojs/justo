//imports
import {Automator} from "justo-automator";

//internal members
var runner;

//api
export function publish(config, justo) {
  //(1) set runner
  if (!runner) runner = new Automator(config);

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

  delete justo.suite;
  delete justo.test;
  delete justo.init;
  delete justo.fin;

  //(3) return runner
  return runner;
}
