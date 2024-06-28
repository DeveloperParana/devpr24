export const parseSVG = (text) => {
  const parser = new DOMParser();
  return parser.parseFromString(text, "image/svg+xml");
}

export const loadSVG = async (path) => {
  const result = await fetch(path).then((res) => res.text());
  return parseSVG(result).documentElement
};
