
export interface CountdownAttrs {
  date: Date
}

export const Countdown = () => {
  // const time = counter(date)

  // // const days = createValue(time.days)
  // const hours = createValue(time.hours)
  // const mins = createValue(time.mins)
  // const secs = createValue(time.secs)

  // const updater = interval(() => {
  //   const time = counter(date)
  //   // days.set(time.days)
  //   hours.set(time.hours)
  //   mins.set(time.mins)
  //   secs.set(time.secs)

  //   if (time.distance < 0) {
  //     updater.cancel()
  //   }
  // })

  return (
    <h4 className="text-2 countdown">
      <h2>CHEGOU !!!</h2>
    </h4>
  )
}
