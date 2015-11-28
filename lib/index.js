//api
export default publish;

//internal members
const justo = publish;
Object.defineProperty(justo, "publish", {value: publish});
Object.defineProperty(justo, "unpublish", {value: unpublish});

/**
 * Publish a member into the justo object.
 *
 * @overload Function publication.
 * @param fn:function The function to publish.
 *
 * @overload Runner publication.
 * @param runner:Runner The runner to publish.
 */
function publish(obj) {
  if (typeof(obj) == "function") {
    Object.defineProperty(justo, obj.name, {value: obj, enumerable: true, configurable: true});
  } else {
    obj.publishInto(justo);
  }
}

/**
 * Unpublish a member from the justo object.
 *
 * @overload Function unpublication.
 * @param fn:function The function to unpublish.
 *
 * @overload Runner unpublication.
 * @param runner:Runner The runner to unpublish.
 */
function unpublish(obj) {
  if (typeof(obj) == "function") {
    delete justo[obj.name];
  } else {
    obj.unpublishFrom(justo);
  }
}
