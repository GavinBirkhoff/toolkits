/**
 * @since 1.0.0
 * @description Set style props
 * @param {HTMLElement} element target element
 * @param {{ [key: string]: string }} props props of style
 * @returns {void}
 */
import { each, isEmpty, hasOwnProperty } from 'util4j'

const setStyleProps = (element: HTMLElement, props: Partial<{ [key: string]: string }>): void => {
  if (element == null && isEmpty(props)) return
  each(props, (value: string, key: string) => {
    let newKey = key

    if (hasOwnProperty.call(element.style, newKey)) {
      element.style.setProperty(newKey, value)
    } else {
      newKey = newKey.replace(/([A-Z])/g, '-$1').toLowerCase()
      element.style.setProperty(`--${newKey}`, value)
    }
  })
}
// gavin
export default setStyleProps
