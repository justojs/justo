//imports
const justo = require("../../../dist/es5/nodejs/justo");

//suite
describe("index", function() {
  function register() {}

  it("automator", function() {
    var runner;

    runner = justo.publish("automator", {}, {register});

    runner.must.be.instanceOf("Automator");
    justo.register.must.be.instanceOf(Function);
    justo.simple.must.be.instanceOf(Function);
    justo.macro.must.be.instanceOf(Function);
    justo.workflow.must.be.instanceOf(Function);
  });

  it("tester", function() {
    var runner;

    runner = justo.publish("tester", {}, {register});

    runner.must.be.instanceOf("Tester");
    justo.register.must.be.instanceOf(Function);
    justo.simple.must.be.instanceOf(Function);
    justo.macro.must.be.instanceOf(Function);
    justo.workflow.must.be.instanceOf(Function);
    justo.suite.must.be.instanceOf(Function);
    justo.test.must.be.instanceOf(Function);
    justo.init.must.be.instanceOf(Function);
    justo.fin.must.be.instanceOf(Function);
  });

  it("iterating between both", function() {
    var autom, tester;

    autom = justo.publish("automator", {}, {register});
    autom.must.be.instanceOf("Automator");

    tester = justo.publish("tester", {}, {register});
    tester.must.be.instanceOf("Tester");

    autom.must.be.same(justo.publish("automator", {}, {register}));
    justo.must.have(["simple", "macro", "workflow", "register"]);
    justo.must.not.have(["suite", "test", "init", "fin"]);

    tester.must.be.same(justo.publish("tester", {}, {register}));
    justo.must.have(["simple", "macro", "workflow", "register", "suite", "test", "init", "fin"]);
  });
});
