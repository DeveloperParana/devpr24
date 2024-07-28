import { isHTMLTag, isMathMLTag, isSVGTag } from "../dom/tags";

export const namespace = <K extends keyof JSXElementTagNameMap>(name: K) => {
  if (isHTMLTag(name)) {
    return "http://www.w3.org/1999/xhtml";
  } else if (isSVGTag(name)) {
    return "http://www.w3.org/2000/svg";
  } else if (isMathMLTag(name)) {
    return "http://www.w3.org/1998/Math/MathML";
  }
};

export const element = <K extends keyof JSXElementTagNameMap>(name: K) => {
  const ns = namespace(name);

  if (!ns) throw `Unknown element: ${name}`;

  return document.createElementNS(ns, name) as JSXElementTagNameMap[K];
};
