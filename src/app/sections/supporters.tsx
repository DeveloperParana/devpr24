import { supporters } from "../../data";

export const Supporters = () => {
  return (
    <section className="marquee-container supporters" id="supporters">
      <div className="marquee__wrapper">
        <div className="marquee">
          <div className="marquee__group shouldAnimate">
            {supporters.map((supporter) => {
              return (
                <h3>{supporter.name}</h3>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
