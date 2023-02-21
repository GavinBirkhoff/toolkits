/**
 * @description Get classnames
 * @param {HTMLElement} el target element
 * @returns {string} class name
 * @example
 * getClass(el) => className
 */
const getClass = (el: HTMLElement | SVGElement): string => {
  return el.className.baseVal === undefined ? el.className : el.className.baseVal
}

export default getClass
