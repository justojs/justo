//imports
const spy = require("justo-spy");
const justo = require("../../../dist/es5/nodejs/justo");

//suite
describe("justo", function() {
  describe("#publish()", function() {
    it("publish(fn : function)", function() {
      function register() {}
      justo.publish(register);
      justo.register.must.be.same(register);
    });

    it("publish(runner : Runner)", function() {
      const runner = spy({}, "publishInto() {}");
      justo.publish(runner);
      runner.spy.called("publishInto()").must.be.eq(1);
      runner.spy.calledWith("publishInto()", [justo]).must.be.eq(1);
    });
  });

  describe("#unpublish()", function() {
    it("unpublish(fn : function)", function() {
      function unregister() {}
      justo.publish(unregister);
      justo.unpublish(unregister);
      justo.must.not.have("unregister");
    });

    it("unpublish(runner : Runner)", function() {
      const runner = spy({}, "unpublishFrom() {}");
      justo.unpublish(runner);
      runner.spy.called("unpublishFrom()").must.be.eq(1);
      runner.spy.calledWith("unpublishFrom()", [justo]).must.be.eq(1);
    });
  });
});
