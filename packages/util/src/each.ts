import isArray from './is-array'
import isObject from './is-object'

export default (elements: unknown[] | Record<string, unknown>, func: (v: unknown, k: unknown) => unknown): void => {
  if (!elements) {
    return
  }
  let rst
  if (isArray(elements)) {
    for (let i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i)
      if (rst === false) {
        break
      }
    }
  } else if (isObject(elements)) {
    for (const k in elements) {
      if (Object.prototype.hasOwnProperty.call(elements, k)) {
        rst = func(elements[k], k)
        if (rst === false) {
          break
        }
      }
    }
  }
}