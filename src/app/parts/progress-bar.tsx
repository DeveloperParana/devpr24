import { formatCurrency } from "../utils";

export interface ProgressBarAttts {
  colors: string[];
  value: number;
  max: number;
}
export const ProgressBar = ({ colors, max, value }: ProgressBarAttts) => {
  const linearGradientStops = colors
    .map((color, index) => ({ color, index }))
    .reverse()
    .map(({ color, index }) => {
      const offset = (100 / (index + 1)).toFixed();
      return { color, offset };
    });

  const percent = +((value / max) * 100).toFixed();

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
            <rect id="clipRect" width={`${percent}%`} height="100%" rx={24} />
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
      <h3>{formatCurrency(value)} de {formatCurrency(max)}</h3>
    </div>
  );
};
