import type {Control} from '../control'

export function createControl(): Control {
  const control = {
    KeyQ: false,
    KeyW: false,
    keyE: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    Space: false,
    ShiftLeft: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
  }

  const isKey = (code: string): code is keyof Control => {
    return Object.keys(control).includes(code)
  }

  addEventListener('keydown', ({code}) => {
    if (isKey(code)) control[code] = true
  })

  addEventListener('keyup', ({code}) => {
    if (isKey(code)) control[code] = false
  })

  return control
}
