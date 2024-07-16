import { findAll, formatDate } from "../utils";
import { speakers } from "../../data";

export const Agenda = () => {
  function onToggle(this: HTMLElement) {
    for (const item of findAll(".accordion details")) {
      if (item.open && item !== this) item.open = false;
    }
  }

  const items = speakers
    .filter((item) => item.presentation.start.getDate() > 27)
    .sort((a, b) => (a.presentation.start > b.presentation.start ? 1 : -1));

  return (
    <section className="faq" id="faq">
      <div className="title white">
        <h2 className="titleText">Programação</h2>
      </div>
      <div className="content">
        {items.map((item) => {
          return (
            <details onClick={onToggle}>
              <summary>
                {/* <Icon name="calendar" width={28} /> */}
                <h3>
                  {formatDate(item.presentation.start)} -{" "}
                  {item.presentation.title}
                </h3>
              </summary>
              <div>
                <h3>{item.name}</h3>
                <div>
                  {item.bio.map((line) => (
                    <p>{line}</p>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
};
