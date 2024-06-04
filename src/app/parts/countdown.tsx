import {createValue} from '../../core/state'
import {counter, interval} from '../utils'

export interface CountdownAttrs {
  date: Date
}

export const Countdown = ({date}: CountdownAttrs) => {
  const time = counter(date)

  const days = createValue(time.days)
  const hours = createValue(time.hours)
  const mins = createValue(time.mins)
  const secs = createValue(time.secs)

  const updater = interval(() => {
    const time = counter(date)
    days.set(time.days)
    hours.set(time.hours)
    mins.set(time.mins)
    secs.set(time.secs)

    if (time.distance < 0) {
      updater.cancel()
    }
  })

  return (
    <h4 className="text-2 countdown">
      <small>Faltam </small>
      <div>
        <var>{days}</var>
        <small>dias,</small>
      </div>
      <div>
        <var>{hours}</var>
        <small>horas,</small>
      </div>
      <div>
        <var>{mins}</var>
        <small>minutos e</small>
      </div>

      <div>
        <var>{secs}</var>
        <small>segundos</small>
      </div>
    </h4>
  )
}
