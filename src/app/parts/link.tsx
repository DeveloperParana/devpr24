export interface LinkAttrs
  extends Partial<
    Omit<
      HTMLAnchorElement,
      keyof CustomGlobalEventHandlersEventMap<HTMLAnchorElement>
    > &
      CustomGlobalEventHandlers<HTMLAnchorElement>
  > {
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const Link = (props: LinkAttrs) => {
  /**
   * Mais detalhes aqui
   * @see https://mathiasbynens.github.io/rel-noopener/
   */
  if (props.target && props.target === "_blank") {
    props.rel = "noopener noreferrer";
  }

  return <a {...props} />;
};
