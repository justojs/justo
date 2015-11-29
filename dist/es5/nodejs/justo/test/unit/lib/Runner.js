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
    it("initialize()", function() {
      Runner.initialize(justo);
      justo.must.have(["simple", "macro", "workflow"]);
    });
  });
});
