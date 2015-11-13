//imports
const justo = require("../../../dist/es5/nodejs/justo");
const Automator = require("justo-runner").Automator;

//suite
describe("index", function() {
  it("automator()", function() {
    var runner;

    runner = justo("automator", {loggers: [], reporters: [], arguments: ["arg1", "args2"]});
    
    runner.must.be.instanceOf(Automator);
    justo.task.must.be.instanceOf(Function);
    justo.macro.must.be.instanceOf(Function);
  });
});
