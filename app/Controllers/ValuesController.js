import { ProxyState } from "../AppState.js";


//Private
function _draw() {
  let values = ProxyState.values;
  console.log(values);
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
  }

  addValue() {
    ProxyState.values = [...ProxyState.values, { id: Math.random() }]
  }

}
