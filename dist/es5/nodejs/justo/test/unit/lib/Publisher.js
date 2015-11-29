//imports
const spy = require("justo-spy");
const Publisher = require("../../../dist/es5/nodejs/justo/lib/Publisher");

//suite
describe("Publisher", function() {
  var justo;

  beforeEach(function() {
    justo = {};
    Publisher.initialize(justo);
  });

  describe("#publish()", function() {
    it("publish(fn : function)", function() {
      function register() {}
      Publisher.publish(register);
      justo.register.must.be.same(register);
    });

    it("publish(runner : Runner)", function() {
      const runner = spy({}, "publishInto() {}");
      Publisher.publish(runner);
      runner.spy.called("publishInto()").must.be.eq(1);
      runner.spy.calledWith("publishInto()", [justo]).must.be.eq(1);
    });
  });

  describe("#unpublish()", function() {
    it("unpublish(fn : function)", function() {
      function unregister() {}
      Publisher.publish(unregister);
      Publisher.unpublish(unregister);
      justo.must.not.have("unregister");
    });

    it("unpublish(runner : Runner)", function() {
      const runner = spy({}, "unpublishFrom() {}");
      Publisher.unpublish(runner);
      runner.spy.called("unpublishFrom()").must.be.eq(1);
      runner.spy.calledWith("unpublishFrom()", [justo]).must.be.eq(1);
    });
  });
});
