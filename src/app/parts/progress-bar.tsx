import { useRef, createValue } from "../../core";
import { ApoiaSeResult } from "../../types";
import { formatCurrency } from "../utils";

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

  fetchAPI().then(({ campaigns }) => {
    const [campaign] = campaigns;

    goal.set(formatCurrency(campaign.goals[0].value));
    total.set(formatCurrency(campaign.supports.total.value));

    const n = (campaign.supports.total.value / campaign.goals[0].value) * 100;
    percent.set(Math.round(n));

    rectRef.current().setAttribute("width", percent.get() + "%");
  });

  return (
    <div id="progress-bar">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient">
            {linearGradientStops.map(({ offset, color }) => (
              <stop offset={`${offset}%`} stop-color={color} />
            ))}
          </linearGradient>

          <clipPath id="clip">
            <rect
              ref={rectRef}
              id="clipRect"
              width="0%"
              height="100%"
              rx={24}
            />
          </clipPath>
        </defs>
        <rect rx={24} width="100%" height="100%" fill="#45474b" />
        <rect
          width="100%"
          height="100%"
          clip-path="url(#clip)"
          fill="url(#gradient)"
        />
      </svg>
      <h2>{percent}%</h2>
      <h3>
        {total} de {goal}
      </h3>
    </div>
  );
};
