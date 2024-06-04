import {sections, type Sections} from '../app.sections'
import {Logo} from '../parts'
import {find} from '../utils'

export const Header = () => {
  addEventListener('scroll', function () {
    const header = find('header')!
    header.classList.toggle('sticky', scrollY > 0)
  })

  const toggleMenu = () => {
    const menuToggle = find('div.menuToggle')!
    const navigation = find('ul.navigation')!
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
  }

  document.documentElement.classList.add('dark')

  const sectionMap: Record<keyof Sections, string> = {
    banner: 'Topo',
    about: 'Comunidade',
    speakers: 'Conf 2024',
    getInvolved: 'Contribua',
    supports: 'Apoie o evento',
    testimonials: 'Depoimentos',
    contact: 'Contato',
  }
  function getLinkItemBySectionKey(key: keyof Sections) {
    const href = `#${key}`
    const text = sectionMap[key]
    return (
      <li>
        <a href={href} onClick={toggleMenu}>
          {text}
        </a>
      </li>
    )
  }

  const items = Object.keys(sections) as (keyof Sections)[]

  return (
    <header>
      <a href="#" className="logo">
        <Logo width={64} />
        <strong>
          DevPR Conf <span>2024</span>
        </strong>
      </a>
      <div
        role="button"
        className="menuToggle"
        ariaLabel="Alternar menu de navegação"
        onClick={toggleMenu}
      ></div>
      <nav>
        <ul className="navigation">{items.map(getLinkItemBySectionKey)}</ul>
      </nav>
    </header>
  )
}
