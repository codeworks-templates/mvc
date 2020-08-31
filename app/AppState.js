import { EventEmitter } from "./Utils/EventEmitter.js"

class AppState extends EventEmitter {
  user = {}
  profile = {}
  values = []
}

const appState = new AppState()

export const ProxyState = new Proxy(appState, {
  get(appState, prop) {
    isValidProp(prop)
    return appState[prop]
  },
  set(appState, prop, value) {
    isValidProp(prop)
    appState[prop] = value
    appState.emit(prop, value)
    return true
  }
})

function isValidProp(prop) {
  if (typeof appState[prop] === 'function') { return }
  if (!appState.hasOwnProperty(prop)) {
    throw new Error(`[BAD PROP]:[${prop}] Invalid Property Access via Proxy State`)
  }
}
