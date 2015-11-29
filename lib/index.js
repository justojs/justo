//imports
import Publisher from "./Publisher";
import Runner from "./Runner";

//internal members
const justo = initialize;

//api
export default function initialize() {
  Publisher.initialize(justo);
  Runner.initialize(justo);
}

Object.defineProperty(justo, "initialize", {value: initialize});
Object.defineProperty(justo, "publish", {value: (obj) => { Publisher.publish(obj); }});
Object.defineProperty(justo, "unpublish", {value: (obj) => { Publisher.unpublish(obj); }});
Object.defineProperty(justo, "run", {value: (work, params) => { Runner.run(work, params); }});
