export function styled<T extends HTMLElement>(
  declarations: Partial<CSSStyleDeclaration>,
  element: T
) {
  Object.assign(element.style, declarations)
  return element
}
