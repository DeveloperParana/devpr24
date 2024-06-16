import { interval, timeout } from "../utils";
import type { Company } from "../../data";
import { Link } from "../parts";

export interface CompaniesAttrs {
  list: Company[];
}

const getOptions = (
  direction: PlaybackDirection
): KeyframeAnimationOptions => ({
  duration: 500,
  easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  fill: "both",
  direction,
});

interface KeyframeOptions {
  x?: number;
  y?: number;
  opacity: number;
}

function createKeyframe({ x, y, opacity }: KeyframeOptions): Keyframe {
  let transform = [];
  if (!isNaN(+String(x))) {
    transform.push(`translateX(${x}px)`);
  }
  if (!isNaN(+String(y))) {
    transform.push(`translateY(${y}px)`);
  }
  return { transform: transform.join(" "), opacity };
}

const createKeyframes = (options: KeyframeOptions[]): Keyframe[] => {
  return options.map(createKeyframe);
};

const animationList: Keyframe[][] = [
  createKeyframes([
    { y: -1000, opacity: 0 },
    { y: 0, opacity: 1 },
  ]),
  createKeyframes([
    { y: -1000, x: 1000, opacity: 0 },
    { y: 0, x: 0, opacity: 1 },
  ]),
  createKeyframes([
    { x: 1000, opacity: 0 },
    { x: 0, opacity: 1 },
  ]),
  createKeyframes([
    { y: 1000, x: 1000, opacity: 0 },
    { y: 0, x: 0, opacity: 1 },
  ]),
  createKeyframes([
    { y: 1000, opacity: 0 },
    { y: 0, opacity: 1 },
  ]),
  createKeyframes([
    { y: 1000, x: -1000, opacity: 0 },
    { y: 0, x: 0, opacity: 1 },
  ]),
  createKeyframes([
    { x: -1000, opacity: 0 },
    { x: 0, opacity: 1 },
  ]),
  createKeyframes([
    { y: -1000, x: -1000, opacity: 0 },
    { y: 0, x: 0, opacity: 1 },
  ]),
];

const getCompany = (company: Company, index: number) => {
  return (
    <Link data-index={index} hidden href={company.link} target="_blank">
      <img src={company.logo} alt={company.name} />
    </Link>
  );
};

export const Companies = (attrs: CompaniesAttrs) => {
  let counter = 0;

  const length = animationList.length;
  const companies = attrs.list.map(getCompany);

  function toggle<T extends HTMLElement>(
    element: JSX.Element<T>,
    direction: PlaybackDirection,
    keyFrames: Keyframe[]
  ) {
    element.animate(keyFrames, getOptions(direction));
    if (counter === companies.length) counter = 0;
  }

  interval(() => {
    const company = companies[counter];
    const index = +company.dataset.index!;
    const keyframes = animationList[index % length];

    toggle(company, "normal", keyframes);
    company.toggleAttribute("hidden");
    counter++;

    timeout(() => {
      toggle(company, "reverse", keyframes);

      timeout(() => {
        company.toggleAttribute("hidden");
      }, 1000);
    }, 3000);
  }, 4000);

  return (
    <section id="companies" className="companies">
      <div className="title">
        <h2 className="titleText">Empresas</h2>
      </div>
      <div className="content">{companies}</div>
    </section>
  );
};
