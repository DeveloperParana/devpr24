export const normalize = <T extends object>(value: T, ...keys: string[]) => {
  return Object.entries(value).reduce((prev, [key, val]) => {
    return !keys.includes(key) ? {...prev, [key]: val} : {...prev}
  }, {} as T)
}

export const assign = <T extends object>(value: T, partial: object) => {
  return Object.assign(value, partial)
}
