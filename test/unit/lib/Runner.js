//imports
const Runner = require("../../../dist/es5/nodejs/justo/lib/Runner");
const Publisher = require("../../../dist/es5/nodejs/justo/lib/Publisher");

//suite
describe("Runner", function() {
  var justo;

  beforeEach(function() {
    justo = {};
    Publisher.initialize(justo);
  });

  describe("#initialize()", function() {
    it("initialize(config)", function() {
      Runner.initialize(justo, {
        runner: {
          logger: {
            minLevel: "debug",
            maxLevel: "error"
          }
        }
      });

      justo.must.have(["simple", "macro", "workflow"]);
      Runner.loggers[0].minLevel.name.must.be.eq("DEBUG");
      Runner.loggers[0].maxLevel.name.must.be.eq("ERROR");
    });
  });
});
