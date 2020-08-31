import { ProxyState } from "../AppState";

class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, { id: Math.random() }]
  }
}

export const valuesService = new ValuesService();

