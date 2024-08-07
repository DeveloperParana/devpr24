import { slugify } from "./utils";

type Section =
  | "Topo"
  | "Comunidade"
  | "Palestras"
  | "Contribua"
  | "Marcas"
  | "Apoie"
  | "FAQ"
  // | "Depoimentos"
  | "Conf 2023"
  | "Contato";

class Config {
  #elements: HTMLElement[] = [];
  #navigation: [string, string][] = [];

  get elements() {
    return this.#elements;
  }

  get navigation() {
    return this.#navigation;
  }

  addSection(name: Section, element: JSX.Element) {
    const id = slugify(name);
    element.id = id;
    this.#elements.push(element);
    this.#navigation.push([`#${id}`, name]);
  }
}

export const config = new Config();
