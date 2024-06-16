import {config} from '../config'
import {Logo} from '../parts'
import {ScrollSpy, find, findAll} from '../utils'

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

  addEventListener('DOMContentLoaded', () => {
    const sections = findAll<'section'>('body > section')
    const navigation = find('header nav')
    const navLinks = findAll('a', navigation)
    new ScrollSpy(sections, navLinks).start()
  })

  return (
    <header>
      <a href="#" className="logo">
        <Logo width={64} />
        <strong>
          DevPR Conf <span>24</span>
        </strong>
      </a>
      
      <nav>
        <ul className="navigation">
          {config.navigation.map(([id, name]) => {
            return (
              <li>
                <a href={id} onClick={toggleMenu}>
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div
        role="button"
        className="menuToggle"
        ariaLabel="Alternar menu de navegação"
        onClick={toggleMenu}
      ></div>
    </header>
  )
}
