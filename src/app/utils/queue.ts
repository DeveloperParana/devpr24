export const queue = (fn: VoidFunction) => {
  queueMicrotask(fn);
};
