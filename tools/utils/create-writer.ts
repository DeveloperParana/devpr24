import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { toString } from "./to-string";

export const createWriter = (...segments: string[]) => {
  const path = resolve(...segments);
  return <T>(value: T) => {
    return writeFileSync(path, toString(value), "utf-8");
  };
};
