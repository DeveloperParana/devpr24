import { Icon } from "../parts";

export interface DetailsAttrs {
  title: string;
  content: string[];
  onToggle(this: HTMLElement, ev: Event): void;
}

export function Details({ title, content, onToggle }: DetailsAttrs) {
  return (
    <details onClick={onToggle}>
      <summary>
        <h4>{title}</h4>
        <Icon name="plus-circle" width={28} />
      </summary>
      <div>
        {content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
