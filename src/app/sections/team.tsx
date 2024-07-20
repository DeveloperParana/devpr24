import { team } from "../../data";
import { Link } from "../parts";
import { shuffle } from "../utils";

export const Team = () => {
  return (
    <section className="team" id="team">
      <div className="title white">
        <h2 className="titleText">Organização</h2>
      </div>
      <div className="marquee-container">
        <div className="marquee__wrapper">
          <div className="marquee">
            <div className="marquee__group" data-animate="20s">
              {shuffle(team).map((trueAngel) => {
                return (
                  <Link href={trueAngel.html_url} target="_blank">
                    <figure>
                      <img src={trueAngel.avatar_url} alt={trueAngel.name} />
                      <figcaption>{trueAngel.name}</figcaption>
                    </figure>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
