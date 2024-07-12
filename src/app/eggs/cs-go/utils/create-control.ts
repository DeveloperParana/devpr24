interface Off {
  off(): void;
}

interface Callback<T> {
  (value: T): void;
}

export interface Control {
  KeyW: boolean;
  KeyD: boolean;
  KeyS: boolean;
  KeyA: boolean;
  Space: boolean;
  Escape: boolean;
  on(cb: Callback<string>): Off;
}

export function createControl() {
  const callbacks = new Set<Callback<string>>();

  const control: Control = {
    KeyW: false,
    KeyD: false,
    KeyS: false,
    KeyA: false,
    Space: false,
    Escape: false,
    on(cb) {
      callbacks.add(cb);
      return {
        off() {
          callbacks.delete(cb);
        },
      };
    },
  };

  const isKey = (code: string): code is keyof Control => {
    return Object.keys(control).includes(code);
  };

  addEventListener("keydown", ({ code }) => {
    if (isKey(code) && code !== "on") control[code] = true;
    for (const cb of callbacks) cb(code);
  });

  addEventListener("keyup", ({ code }) => {
    if (isKey(code) && code !== "on") control[code] = false;
  });

  return control;
}
