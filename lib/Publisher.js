//internal data
var justo;

/**
 * A publisher of members into the justo package.
 */
export default class Publisher {
  /**
   * Initialize the publisher.
   *
   * @param j:object  The justo package object to use.
   */
  static initialize(j) {
    justo = j;
  }

  /**
   * Publish a member into the justo object.
   *
   * @overload Function publication.
   * @param fn:function   The function to publish.
   *
   * @overload Runner publication.
   * @param runner:Runner The runner to publish.
   */
  static publish(obj) {
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
   * @param fn:function   The function to unpublish.
   *
   * @overload Runner unpublication.
   * @param runner:Runner The runner to unpublish.
   */
  static unpublish(obj) {
    if (typeof(obj) == "function") {
      delete justo[obj.name];
    } else {
      obj.unpublishFrom(justo);
    }
  }
}
