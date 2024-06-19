export interface KeyAttrs {
  value: string;
  path: string;
  onClick(): void;
}

export function Key({ value, path, onClick }: KeyAttrs) {
  return (
    <button className="key" type="button" onClick={onClick} value={value}>
      <img src={path} />
    </button>
  );
}
