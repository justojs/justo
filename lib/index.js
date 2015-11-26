//api
export default publish;

//internal members
var loggers, reporters;
const justo = publish;
Object.defineProperty(justo, "publish", {value: publish});

function publish(type, config, props) {
  const log = require("justo-logger");
  const rep = require("justo-reporter");
  var runner;

  //(1) publish runner
  if (!loggers) {
    loggers = new log.Loggers();
    loggers.add(new log.logger.ColoredConsoleLogger());
  }

  if (!reporters) {
    reporters = new rep.Reporters();
    reporters.add(new rep.reporter.ColoredConsoleReporter());
  }

  config = Object.assign({}, config, {loggers, reporters});

  if (type == "automator") {
    runner = require("./automator").publish(config, justo);
  } else if (type == "tester") {
    runner = require("./tester").publish(config, justo);
  } else {
    throw new Error(`Invalid runner type: ${type}.`);
  }

  for (let key of Object.keys(props)) {
    Object.defineProperty(justo, key, {value: props[key], enumerable: true});
  }

  //(2) return runner
  return runner;
}
