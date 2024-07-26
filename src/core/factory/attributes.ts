import { is, formatDataAttr } from "../utils";
import { inline } from "../dom/inline";

export const attributes = <
  K extends keyof JSXElementTagNameMap,
  E extends JSXElementTagNameMap[K],
>(
  element: E,
  attrs: Partial<E>,
) => {
  for (const [attr, value] of Object.entries(attrs ?? {})) {
    if (value !== undefined) {
      if (is.writable(element, attr)) {
        if (typeof value === "function") {
          if (attr === 'ref') {
            value(element)
          } else if (attr.startsWith("on")) {
            element[attr.toLowerCase() as keyof E] = value;
          } else {
            element[attr as keyof E] = value;
          }
        } else if (attr.startsWith("data-")) {
          element.dataset[formatDataAttr(attr)] = value;
        } else if (attr === "style") {
          element.setAttribute("style", inline(value));
        } else if (element instanceof SVGElement) {
          element.setAttribute(attr, value);
        } else {
          element[attr as keyof E] = value;
        }
      } else {
        element.setAttribute(attr, value);
      }
    }
  }

  return element as JSX.Element;
};
