"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = publish;

var justo = publish;
Object.defineProperty(justo, "publish", { value: publish });
Object.defineProperty(justo, "unpublish", { value: unpublish });

function publish(obj) {
  if (typeof obj == "function") {
    Object.defineProperty(justo, obj.name, { value: obj, enumerable: true, configurable: true });
  } else {
    obj.publishInto(justo);
  }
}

function unpublish(obj) {
  if (typeof obj == "function") {
    delete justo[obj.name];
  } else {
    obj.unpublishFrom(justo);
  }
}
module.exports = exports["default"];
