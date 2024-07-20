import { companies } from "../../data";
import { Link } from "../parts";
import { shuffle } from "../utils";

export const Companies = () => {
  return (
    <section className="marquee-container" id="companies">
      <div className="marquee__wrapper">
        <div className="marquee">
          <div className="marquee__group shouldAnimate">
            {shuffle(companies).map((company) => {
              return (
                <Link href={company.link} target="_blank">
                  <img src={company.logo} alt={company.name} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
