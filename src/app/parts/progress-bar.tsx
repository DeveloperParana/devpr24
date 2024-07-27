import { useRef, createValue } from "../../core";
import { ApoiaSeResult } from "../../types";
import { formatCurrency, navEvent } from "../utils";

const fetchAPI = async (): Promise<ApoiaSeResult> => {
  return (await fetch(`progress.json`)).json();
};

export interface ProgressBarAttts {
  colors: string[];
}
export const ProgressBar = ({ colors }: ProgressBarAttts) => {
  const linearGradientStops = colors
    .map((color, index) => ({ color, index }))
    .reverse()
    .map(({ color, index }) => {
      const offset = (100 / (index + 1)).toFixed();
      return { color, offset };
    });

  const rectRef = useRef<SVGRectElement>();

  const total = createValue<string>("R$ 0,00");
  const goal = createValue<string>("R$ 0,00");
  const percent = createValue<number>(0);

  let progressIsLoaded = false;

  navEvent.on("current", (current) => {
    if (current === "#apoie" && !progressIsLoaded) {
      fetchAPI().then(({ campaigns }) => {
        progressIsLoaded = true;

        const [campaign] = campaigns;

        goal.set(formatCurrency(campaign.goals[0].value));
        total.set(formatCurrency(campaign.supports.total.value));

        const n =
          (campaign.supports.total.value / campaign.goals[0].value) * 100;
        percent.set(Math.round(n));

        rectRef.current().setAttribute("width", percent.get() + "%");
      });
    }
  });

  return (
    <section id="progress-bar">
      <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(3)">
            {linearGradientStops.map(({ offset, color }) => (
              <stop offset={`${offset}%`} stop-color={color} />
            ))}
          </linearGradient>
        </defs>
        {/* <circle cx="5" cy="5" r="4" fill="url('#gradient')" /> */}
        <rect
          x="0"
          width="100"
          height="6"
          rx="3"
          fill="#010101"
          fill-opacity=".6"
        />
        <rect
          ref={rectRef}
          x="0"
          rx="3"
          width="0"
          height="6"
          fill="url('#gradient')"
        />
      </svg>
      <h2>{percent}%</h2>
      <h3>
        {total} de {goal}
      </h3>
    </section>
  );
};
