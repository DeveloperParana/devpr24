export function counter(date: Date) {
  const distance = date.getTime() - new Date().getTime()
  const base = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    min: 1000 * 60,
    sec: 1000,
  }

  const days = Math.floor(distance / base.day)
  const hours = Math.floor((distance % base.day) / base.hour)
  const mins = Math.floor((distance % base.hour) / base.min)
  const secs = Math.floor((distance % base.min) / base.sec)

  return {distance, days, hours, mins, secs}
}
