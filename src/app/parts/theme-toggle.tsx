export const ThemeToggle = () => {
  const themes = [
    ['dark', 'Escuro'],
    ['dark-medium-contrasts', 'Escuro com contraste'],
    ['dark-high-contrast', 'Escuro com alto contraste'],
    ['light', 'Claro'],
    ['light-medium-contrast', 'Claro com contraste'],
    ['light-high-contrast', 'Claro com alto contraste'],
  ]

  const onThemeChange = (value: Event) => {
    const select = value.target as HTMLSelectElement
    document.documentElement.className = select.value
  }

  return (
    <select name="theme" id="theme" oninput={onThemeChange}>
      {themes.map(([value, text]) => (
        <option value={value}>{text}</option>
      ))}
    </select>
  )
}
