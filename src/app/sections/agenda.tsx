import { findAll, formatDate } from "../utils";
import { saturday, schedule, speaker } from "../../data";
import { Icon, Link } from "../parts";

export const Agenda = () => {
  function onToggle(this: HTMLElement) {
    for (const item of findAll(".agenda details")) {
      if (item.open && item !== this) item.open = false;
    }
  }

  let nextIndex = -1;

  return (
    <section className="agenda" id="agenda">
      <div className="title white">
        <h2 className="titleText">Programação</h2>
      </div>
      <div className="content">
        <div className="day">
          {saturday
            .sort((a, b) => (a.start > b.start ? 1 : -1))
            .map((slot, index) => {
              const now = Date.now();

              const isPrev = now > slot.end.getTime();

              const isCurrent =
                now > slot.start.getTime() && now < slot.end.getTime();

              let className = "";

              if (isPrev) {
                className = "prev";
              } else if (isCurrent) {
                nextIndex = index + 1;
                className = "current";
              } else if (index === nextIndex) {
                className = "next";
              }

              if (slot.speaker) {
                const slotSpeaker = Array.isArray(slot.speaker)
                  ? slot.speaker.map((s) => speaker[s])
                  : [speaker[slot.speaker]];
                // const slotSpeaker = speaker[slot.speaker];

                return (
                  <details onClick={onToggle} className={className}>
                    <summary>
                      <Icon name="clock" width={28} />
                      <h3>
                        {formatDate(slot.start)} - {slot.title}
                      </h3>
                    </summary>
                    <div>
                      {slotSpeaker.map((s) => (
                        <>
                          <h3>{s.name}</h3>
                          <div>
                            {s.bio.map((line) => (
                              <p>{line}</p>
                            ))}
                          </div>
                        </>
                      ))}
                    </div>
                  </details>
                );
              } else {
              }
              return (
                <details onClick={onToggle} className={className}>
                  <summary>
                    <Icon name="coffee" width={28} />
                    <h3>
                      {formatDate(slot.start)} - {slot.title}
                    </h3>
                  </summary>
                </details>
              );
            })}
        </div>
        <div className="day">
          {schedule.sort((a, b) => (a.start > b.start ? 1 : -1)).map((slot, index) => {
            const now = Date.now();

            const isPrev = now > slot.end.getTime();

            const isCurrent =
              now > slot.start.getTime() && now < slot.end.getTime();

            let className = "";

            if (isPrev) {
              className = "prev";
            } else if (isCurrent) {
              nextIndex = index + 1;
              className = "current";
            } else if (index === nextIndex) {
              className = "next";
            }

            if (slot.speaker) {
              const slotSpeaker = Array.isArray(slot.speaker)
                ? slot.speaker.map((s) => speaker[s])
                : [speaker[slot.speaker]];
              // const slotSpeaker = speaker[slot.speaker];

              return (
                <details onClick={onToggle} className={className}>
                  <summary>
                    <Icon name="clock" width={28} />
                    <h3>
                      {formatDate(slot.start)} - {slot.title}
                    </h3>
                  </summary>
                  <div>
                    {slotSpeaker.map((s) => (
                      <>
                        <h3>{s.name}</h3>
                        <div>
                          {s.bio.map((line) => (
                            <p>{line}</p>
                          ))}
                        </div>
                      </>
                    ))}
                  </div>
                </details>
              );
            } else {
            }
            return (
              <details onClick={onToggle} className={className}>
                <summary>
                  <Icon name="coffee" width={28} />
                  <h3>
                    {formatDate(slot.start)} - {slot.title}
                  </h3>
                </summary>
              </details>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="https://devpr24.eventbrite.com/"
          className="btn subscribe heartbeat"
          target="_blank"
        >
          Faça sua inscrição
        </Link>
      </div>
    </section>
  );
};
