import { GithubUser } from "../../types";
import { useRef } from "../../core";
import { navEvent, shuffle } from "../utils";
import { Link } from "../parts";

const fetchAPI = async (): Promise<GithubUser[]> => {
  return (await fetch(`team.json`)).json();
};

export const Team = () => {
  const elRef = useRef<HTMLDivElement>();

  let teamIsLoaded = false;

  navEvent.on("current", (current) => {
    if (current === "#apoie" && !teamIsLoaded) {
      fetchAPI()
        .then((team) => shuffle(team))
        .then((team) => {
          teamIsLoaded = true;

          for (const trueAngel of team) {
            elRef.current().append(
              <Link href={trueAngel.html_url} target="_blank">
                <figure>
                  <img src={trueAngel.avatar_url} alt={trueAngel.name} />
                  <figcaption>{trueAngel.name}</figcaption>
                </figure>
              </Link>
            );
          }
        });
    }
  });

  return (
    <section className="team" id="team">
      <div className="title white">
        <h2 className="titleText">Organização</h2>
      </div>
      <div className="marquee-container">
        <div className="marquee__wrapper">
          <div className="marquee">
            <div
              ref={elRef}
              className="marquee__group"
              data-animate="20s"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
