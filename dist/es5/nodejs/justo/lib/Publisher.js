"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}
var justo;var 




Publisher = (function () {function Publisher() {_classCallCheck(this, Publisher);}_createClass(Publisher, null, [{ key: "initialize", value: 





    function initialize(j) {
      justo = j;} }, { key: "publish", value: 











    function publish(obj) {
      if (typeof obj == "function") {
        Object.defineProperty(justo, obj.name, { value: obj, enumerable: true, configurable: true });} else 
      {
        obj.publishInto(justo);}} }, { key: "unpublish", value: 












    function unpublish(obj) {
      if (typeof obj == "function") {
        delete justo[obj.name];} else 
      {
        obj.unpublishFrom(justo);}} }]);return Publisher;})();exports["default"] = Publisher;module.exports = exports["default"];
