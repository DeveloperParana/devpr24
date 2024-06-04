export function timeout(fn: TimerHandler, ms = 1000) {
  const ref = window.setTimeout(fn, ms)
  const cancel = () => window.clearTimeout(ref)
  return {cancel}
}
