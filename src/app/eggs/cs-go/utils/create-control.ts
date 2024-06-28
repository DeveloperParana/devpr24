export interface Control {
  KeyW: boolean;
  KeyD: boolean;
  KeyS: boolean;
  KeyA: boolean;
  Space: boolean;
  Escape: boolean
}

export function createControl() {
  const control: Control = {
    KeyW: false,
    KeyD: false,
    KeyS: false,
    KeyA: false,
    Space: false,
    Escape: false
  };

  const isKey = (code: string): code is keyof Control => {
    return Object.keys(control).includes(code);
  };

  addEventListener("keydown", ({ code }) => {
    if (isKey(code)) control[code] = true;
  });

  addEventListener("keyup", ({ code }) => {
    if (isKey(code)) control[code] = false;
  });

  return control;
}
