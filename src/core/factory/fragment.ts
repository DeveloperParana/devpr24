export function fragment() {
  const template = document.createElement('template')
  return template.content.cloneNode(true)
}
