import { ScrollSpy, find, findAll } from "../utils";
import { Logo } from "../parts";

export const Header = () => {
  addEventListener("scroll", function () {
    const header = find("header")!;
    header.classList.toggle("sticky", scrollY > 0);
  });

  const toggleMenu = () => {
    const menuToggle = find("div.menuToggle")!;
    const navigation = find("ul.navigation")!;
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  document.documentElement.classList.add("dark");

  addEventListener("DOMContentLoaded", () => {
    const sections = findAll<"section">("body > section");
    const navigation = find("header nav");
    const navLinks = findAll("a", navigation);
    new ScrollSpy(sections, navLinks).start();
  });

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
          <li>
            <a href="#" onClick={toggleMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#banner" onClick={toggleMenu}>
              Conf
            </a>
          </li>
          <li>
            <a href="#comunidade" onClick={toggleMenu}>
              Comunidade
            </a>
          </li>
          <li>
            <a href="#palestras" onClick={toggleMenu}>
              Palestrantes
            </a>
          </li>
          <li>
            <a href="#apoie" onClick={toggleMenu}>
              Apoie
            </a>
          </li>
          <li>
            <a href="#faq" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div
        role="button"
        className="menuToggle"
        ariaLabel="Alternar menu de navegação"
        onClick={toggleMenu}
      ></div>
    </header>
  );
};
