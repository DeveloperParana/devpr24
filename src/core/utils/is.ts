import type { Factory, Type } from "../../types"

export const is = {
  factory<T>(value: unknown): value is Factory<T> {
    return typeof value === 'function'
  },
  type<T>(value: unknown): value is Type<T> {
    return typeof value === 'function' && !!value.prototype
  },
  writable<
    K extends keyof JSXElementTagNameMap,
    A extends keyof JSXElementTagNameMap[K],
  >(element: JSXElementTagNameMap[K], property: A | PropertyKey) {
    const originalValue = element[property as A]

    try {
      element[property as A] = 1 as JSXElementTagNameMap[K][A]
    } catch {
      return false
    }

    element[property as A] = originalValue

    return true
  },
}
