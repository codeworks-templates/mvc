import { Pop } from "./Pop.js"

export function saveState(key, value) {
  try {
    let data = value
    if (typeof value != 'string') {
      data = JSON.stringify(data)
    }
    window.localStorage.setItem(key, data)
    if (typeof value == 'undefined' || value == null) {
      window.localStorage.removeItem(key)
    }
  } catch (error) {
    console.error('[SAVING_STATE]', { key, value })
    Pop.error(error)
  }
}

export function loadState(key, instanceType) {
  try {
    const keyType = Array.isArray(instanceType) ? '[]' : '{}'
    instanceType = Array.isArray(instanceType) ? instanceType[0] : instanceType
    let data = JSON.parse(window.localStorage.getItem(key) || keyType)
    if (keyType == '{}' && !Object.keys(data).length) { return null }
    if (Array.isArray(data) && instanceType) {
      return data.map(i => new instanceType(i))
    }
    if (instanceType && data) {
      return new instanceType(data)
    }
    return data
  } catch (error) {
    console.error('[ATTEMPTING_TO_LOAD_STATE]', { key, instanceType })
    Pop.error(error)
  }
}
