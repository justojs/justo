//imports
import path from "path";
import {File} from "justo-fs";
import log from "justo-logger";
import rep from "justo-reporter";
import {Automator} from "justo-automator";
import {Tester} from "justo-tester";
import Publisher from "./Publisher";

//internal data
var loggers, reporters, automator, tester;

/**
 * Runner interface.
 */
export default class Runner {
  static get loggers() {
    return loggers;
  }

  /**
   * Initializes the runner.
   *
   * @param justo:object  The justo package object to use.
   * @param config:object The configuration.
   */
  static initialize(justo, config) {
    const log = require("justo-logger");
    const rep = require("justo-reporter");

    //(1) create loggers and reporters used by the runners
    loggers = new log.Loggers();
    loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

    reporters = new rep.Reporters();
    reporters.add(new rep.reporter.ColoredConsoleReporter());

    //(2) create default automator
    automator = new Automator({loggers, reporters});

    //(3) publish automator methods
    Publisher.publish(automator);
  }

  /**
   * Run a work.
   *
   * @overload Macro work.
   * @param work:Work       The work.
   * @param works:Work[]    The works associated to the macro items.
   *
   * @overload Automator work.
   * @param work:Work       The work to run.
   * @param params:object[] The parameters.
   *
   * @overload Tester work.
   * @param work:Work       The work to run.
   */
  static run(work, aux) {
    reporters.start(work.name);

    if (work.isMacroWork()) Runner.runMacroWork(work, aux);
    else if (work.isTesterWork()) Runner.runTesterWork(work);
    else Runner.runAutomatorWork(work, aux);

    reporters.end();
  }

  static runMacroWork(work, works) {
    for (let i = 0; i < works.length; ++i) {
      let w = works[i];

      if (w.isAutomatorWork()) Runner.runAutomatorWork(w, work.calls[i].params);
      else if (w.isTesterWork()) Runner.runTesterWork(w);
      else throw new Error("Right now, a macro works can't reference another macro work.");
    }
  }

  static runAutomatorWork(work, params) {
    work.task(work.name, ...params);
  }

  static runTesterWork(work) {
    //(1) check if the files exist
    for (let file of work.src) {
      file = new File(file);
      if (!file.exists()) throw new Error(`The '${file.path}' file doesn't exist.`);
    }

    //(2) run
    if (!tester) tester = new Tester({loggers, reporters});
    Publisher.publish(tester);

    if (work.require) {
      for (let pkg of work.require) require(pkg);
    }

    try {
      tester.workflow(work.name, function() {
        for (let file of work.src) require(path.join(process.cwd(), file));
      })(work.name);
    } finally {
      Publisher.unpublish(tester);
      Publisher.publish(automator);
    }
  }
}
