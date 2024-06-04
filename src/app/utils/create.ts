type CreateParams<
  K extends keyof HTMLElementTagNameMap,
  A extends HTMLElementTagNameMap[K]
> = [Partial<A>, ...(Text | Node)[]] | (Text | Node)[]

export function create<
  K extends keyof HTMLElementTagNameMap,
  A extends HTMLElementTagNameMap[K]
>(
  name: K,
  ...[attrs, ...children]: CreateParams<K, A>
): HTMLElementTagNameMap[K] {
  const element = document.createElement(name)

  if (attrs instanceof Element) {
    element.append(attrs, ...(children as Node[]))
  } else {
    element.append(...(children as Node[]))

    Object.assign(element, attrs)
  }

  return element
}
