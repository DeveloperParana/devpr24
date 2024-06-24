export interface MarqueeAttrs {
  initialWidth: number;
  children?: Node[]
}

export function Marquee({ initialWidth, children }: MarqueeAttrs) {
  return (
    <div className="marquee-container">
      <div className="marquee__wrapper" data-initialWidth={initialWidth}>
        <div className="marquee">
          <div className="marquee__group shouldAnimate">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
