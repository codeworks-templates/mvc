import { appState } from "../AppState.js";
import { Value } from "../Models/Value.js";
import { saveState } from "../Utils/Store.js";

function save() {
  saveState('values', appState.values)
}


class ValuesService {
  addValue() {
    appState.values = [...appState.values, new Value({ title: Math.random() })]
    save()
  }

  /**
   * @param {string} id
   */
  removeValue(id) {
    appState.values = appState.values.filter(v => v.id !== id)
    save()
  }
}

export const valuesService = new ValuesService();

