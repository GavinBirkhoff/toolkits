import { isElement, isString } from 'util4j'

export interface DomAttrs<T> {
  tagName: T
  container?: HTMLElement
  node?: HTMLElement | string
}

/**
 * Create a dom
 * @param {DomAttrs} domAttrs tagName create tag name, container parent node,node child node
 * @returns {HTMLElementTagNameMap[K]}
 * @since 1.0.0
 * @example
 * // returns <div></div>
 * createDom()
 * @example
 * // returns <body><a>link</a></body>
 * createDom({tagName:'a', container:body, node: 'link'})
 */
const createDom = <K extends keyof HTMLElementTagNameMap>(domAttrs?: DomAttrs<K>): HTMLElementTagNameMap[K] => {
  if (!domAttrs || isString(domAttrs)) {
    return document.createElement((domAttrs ?? 'div') as K)
  }
  const { tagName, container, node } = domAttrs
  const el = document.createElement(tagName ?? 'div')
  if (node) {
    if (isString(node)) {
      const textNode = document.createTextNode(node as string)
      el.appendChild(textNode)
    } else if (isElement(node)) {
      el.appendChild(node as Node)
    }
  }
  if (container) {
    container.appendChild(el)
  }
  return el
}

export default createDom