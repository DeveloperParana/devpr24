import { attributes } from "./attributes";
import { children } from "./children";
import { element } from "./element";
import { is } from "../utils/is";

export function factory<K extends keyof JSXElementTagNameMap>(
  nameOfFactory: K | JSXFactory<JSXElementTagNameMap[K]>,
  attrs: Partial<JSXElementTagNameMap[K]> = {},
  ...nodes: Element[]
) {
  let component;

  if (is.factory(nameOfFactory)) {
    if (is.type<JSX.Element>(nameOfFactory)) {
      component = new nameOfFactory(attrs ?? {});
    } else {
      component = nameOfFactory(attrs ?? {});
    }
  } else {
    component = attributes(element(nameOfFactory), attrs ?? {});
  }

  return children(component, ...nodes);
}
