export const allSettled = async <T extends Promise<unknown>>(values: T[]) => {
  return Promise.allSettled<T>(values).then((results) => {
    return results.map((result) => {
      return result.status === "fulfilled" ? result.value : {};
    });
  });
};
