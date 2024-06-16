export interface DetailsAttrs {
  title: string;
  content: string[];
  onToggle(this: HTMLElement, ev: Event): void;
}

export function Details({ title, content, onToggle }: DetailsAttrs) {
  return (
    <details onClick={onToggle}>
      <summary>{title}</summary>
      <div>
        {content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
