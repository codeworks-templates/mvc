import { Value } from "./modelss/Value.js"
import { EventEmitter } from "./utilss/EventEmitter.js"
import { isValidProp } from "./utilss/isValidProp.js"
import { loadState } from "./utilss/Store.js"

class ObservableAppState extends EventEmitter {
  /** @type {import('./modelss/Value.js').Value[]} */
  values = loadState('values', [Value])
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
