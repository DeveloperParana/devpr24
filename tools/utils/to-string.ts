export const toString = <T>(data: T) => {
  return JSON.stringify(data, null, 2);
};
