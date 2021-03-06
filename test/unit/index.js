//imports
const spy = require("justo-spy");
const justo = require("../../dist/es5/nodejs/justo");

//suite
describe("justo", function() {
  it("members", function() {
    justo.must.be.instanceOf(Function);
    justo.must.have(["initialize"]);
  });

  it("#justo(config)", function() {
    justo({
      runner: {}
    });

    justo.must.have(["simple", "macro", "workflow", "init", "fin", "suite", "test", "catalog"]);
  });
});
