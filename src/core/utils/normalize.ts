/**
 * Kebab case to CamelCase
 */
export function kebabToCamel(value: string) {
  const parts = value.toLowerCase().split('-')

  const normalize = (word: string) => {
    return [word.slice(0, 1).toUpperCase(), word.slice(1)]
  }

  return parts.map((word, i) => (i === 0 ? word : normalize(word))).join('')
}

/**
 * Camel case to KebabCase
 */
export function camelToKebab(value: string): string {
  const parts = value.replace(/([a-z])([A-Z])/g, '$1-$2')
  const normalized = parts.replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
  return normalized.toLowerCase()
}

/**
 * Normalize DataSet attribute
 */
export const formatDataAttr = (attribute: string) => {
  return kebabToCamel(attribute.replace('data-', ''))
}

/**
 * Normalize Event name
 */
export function formatEventAttr(attribute: string) {
  return attribute.startsWith('on:') ? attribute.replace(':', '') : attribute
}
