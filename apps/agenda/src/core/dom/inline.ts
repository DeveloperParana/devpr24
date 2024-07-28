import { camelToKebab } from "../utils";

type LiteralType = [string, string | number];

export const inline = (value: object, initial = "") => {
  const reduceFn = <T extends LiteralType>(prev: string, [prop, value]: T) =>
    `${prev}${camelToKebab(prop)}:${value};`;

  return Object.entries(value).reduce(reduceFn, initial);
};
