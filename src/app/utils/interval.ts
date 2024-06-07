export function interval(handler: TimerHandler, ms = 1000) {
  const ref = window.setInterval(handler, ms);
  const cancel = () => window.clearInterval(ref);
  return { cancel };
}
