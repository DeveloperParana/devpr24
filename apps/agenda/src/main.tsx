import { findAll, formatDate } from "./utils";
import { schedule, speaker } from "./data";
import { Icon, Symbols } from "./parts";
import "./styles.scss";
import { ScheduleSlotType } from "./types";

export const Agenda = () => {
  function onToggle(this: HTMLElement) {
    for (const item of findAll(".agenda details")) {
      if (item.open && item !== this) item.open = false;
    }
  }

  let nextIndex = -1;

  const slotKind: Record<ScheduleSlotType, string> = {
    talk: "Palestra",
    workshop: "Workshop",
    break: "Café",
  };

  return (
    <>
      <section className="agenda" id="agenda">
        <div className="content">
          <div className="day">
            {schedule
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

                let icon: "mic" | "award" | "coffee";

                if (slot.type === "talk") {
                  icon = "mic";
                } else if (slot.type === "workshop") {
                  icon = "award";
                } else {
                  icon = "coffee";
                }

                if (slot.speaker) {
                  const slotSpeaker = Array.isArray(slot.speaker)
                    ? slot.speaker.map((s) => speaker[s])
                    : [speaker[slot.speaker]];
                  // const slotSpeaker = speaker[slot.speaker];

                  return (
                    <details onClick={onToggle} className={className}>
                      <summary>
                        <Icon name={icon} width={28} />
                        <h3>
                          {formatDate(slot.start)} - {slot.title}
                        </h3>
                      </summary>
                      <div className="flex col gap-24">
                        {slotSpeaker.map((s) => (
                          <div>
                            <h3 className="text-1-6">{s.name}</h3>
                            <div>
                              {s.bio.map((line) => (
                                <p>{line}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                        <hr />
                        <p className="flex align-center gap-16">
                          <Icon name="map" width={28} />
                          <h3>
                            {slotKind[slot.type]}, {slot.place}
                          </h3>
                        </p>
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
      </section>
      <Symbols />
    </>
  );
};

app.append(<Agenda />);
