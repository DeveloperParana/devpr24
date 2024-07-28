export interface Value<T> {
  set(value: T extends number ? number : string): void;
  get(): T extends number ? number : string;
}

export function useValue<T extends string | number>(value: T) {
  const text = new Text(String(value));

  Reflect.defineProperty(text, "set", {
    value: function (this: Text, value: string) {
      this.nodeValue = value;
    },
  });

  Reflect.defineProperty(text, "get", {
    value: function (this: Text) {
      let value = this.nodeValue ?? "";
      return !isNaN(+(value ?? "")) ? +value : value;
    },
  });

  return text as unknown as T & Value<T>;
}
