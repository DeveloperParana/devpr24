export const children = <K extends keyof JSXElementTagNameMap>(
  element: JSXElementTagNameMap[K],
  ...children: Element[]
) => {
  const nodes = children.flatMap((child) =>
    typeof child === "string" ? new Text(child) : child,
  );

  element.append(...nodes);

  return element;
};
