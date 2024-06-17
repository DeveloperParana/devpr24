type Direction = "up" | "right" | "down" | "left";

interface Callback {
  (state: boolean): void;
}

export const useArrow = (direction: Direction, callback: Callback) => {
  const keys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];

  const normalize = (direction: Direction) => {
    const firstLetter = direction.slice(0, 1).toUpperCase();
    return `Arrow${firstLetter}${direction.slice(1)}`;
  };

  addEventListener("keydown", ({ code }) => {
    if (keys.includes(code) && code === normalize(direction)) {
      callback(true);
    }
  });

  addEventListener("keyup", ({ code }) => {
    if (keys.includes(code) && code === normalize(direction)) {
      callback(false);
    }
  });
};
