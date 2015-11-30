"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _path = require(
"path");var _path2 = _interopRequireDefault(_path);var _justoFs = require(
"justo-fs");var _justoLogger = require(
"justo-logger");var _justoLogger2 = _interopRequireDefault(_justoLogger);var _justoReporter = require(
"justo-reporter");var _justoReporter2 = _interopRequireDefault(_justoReporter);var _justoAutomator = require(
"justo-automator");var _justoTester = require(
"justo-tester");var _Publisher = require(
"./Publisher");var _Publisher2 = _interopRequireDefault(_Publisher);


var loggers, reporters, automator, tester;var 




Runner = (function () {function Runner() {_classCallCheck(this, Runner);}_createClass(Runner, null, [{ key: "initialize", value: 










    function initialize(justo, config) {
      var log = require("justo-logger");
      var rep = require("justo-reporter");


      loggers = new log.Loggers();
      loggers.add(new log.logger.ColoredConsoleLogger(config.runner.logger));

      reporters = new rep.Reporters();
      reporters.add(new rep.reporter.ColoredConsoleReporter());


      automator = new _justoAutomator.Automator({ loggers: loggers, reporters: reporters });


      _Publisher2["default"].publish(automator);} }, { key: "run", value: 
















    function run(work, aux) {
      reporters.start(work.name);

      if (work.isMacroWork()) Runner.runMacroWork(work, aux);else 
      if (work.isTesterWork()) Runner.runTesterWork(work);else 
      Runner.runAutomatorWork(work, aux);

      reporters.end();} }, { key: "runMacroWork", value: 


    function runMacroWork(work, works) {
      for (var i = 0; i < works.length; ++i) {
        var w = works[i];

        if (w.isAutomatorWork()) Runner.runAutomatorWork(w, work.calls[i].params);else 
        if (w.isTesterWork()) Runner.runTesterWork(w);else 
        throw new Error("Right now, a macro works can't reference another macro work.");}} }, { key: "runAutomatorWork", value: 



    function runAutomatorWork(work, params) {
      work.task.apply(work, [work.name].concat(_toConsumableArray(params)));} }, { key: "runTesterWork", value: 


    function runTesterWork(work) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

        for (var _iterator = work.src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var file = _step.value;
          file = new _justoFs.File(file);
          if (!file.exists()) throw new Error("The '" + file.path + "' file doesn't exist.");}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator["return"]) {_iterator["return"]();}} finally {if (_didIteratorError) {throw _iteratorError;}}}



      if (!tester) tester = new _justoTester.Tester({ loggers: loggers, reporters: reporters });
      _Publisher2["default"].publish(tester);

      if (work.require) {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
          for (var _iterator2 = work.require[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var pkg = _step2.value;require(pkg);}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2["return"]) {_iterator2["return"]();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}}


      try {
        tester.workflow(work.name, function () {var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {
            for (var _iterator3 = work.src[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var file = _step3.value;require(_path2["default"].join(process.cwd(), file));}} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3["return"]) {_iterator3["return"]();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}})(
        work.name);} finally 
      {
        _Publisher2["default"].unpublish(tester);
        _Publisher2["default"].publish(automator);}} }, { key: "loggers", get: function get() {return loggers;} }]);return Runner;})();exports["default"] = Runner;module.exports = exports["default"];
