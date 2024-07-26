export function useRef<T>(): ElementRef<T> {
  let current: T

  const ref = (element: T) => {
    if (element) {
      current = element
    }

    return current
  }

  ref.current = () => current

  return ref
}