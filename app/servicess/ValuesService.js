import { appState } from "../AppState.js";
import { Value } from "../modelss/Value.js";
import { saveState } from "../utilss/Store.js";

function save() {
  saveState('values', appState.values)
}


class ValuesService {
  removeAll() {
    appState.values = []
    save()
  }
  addValue() {
    appState.values = [...appState.values, new Value({ title: Math.round(Math.random() * 20) })]
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

