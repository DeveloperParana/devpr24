export interface ObserverEvent<T extends object, K extends keyof T> {
  target: T;
  prop: K;
  value: T[K];
}

export interface Subscriber<T extends object> {
  <K extends keyof T>(value: ObserverEvent<T, K>): void;
}

export interface Observer<T extends object> {
  next<K extends keyof T>(property: K, value: T[K]): void;
  subscribe(callback: Subscriber<T>): void;
}

const normalize = (...keys: string[]) => {
  return <T extends object>(value: T) => {
    return Object.entries(value).reduce((prev, [key, val]) => {
      return !keys.includes(key) ? { ...prev, [key]: val } : { ...prev };
    }, {} as T);
  };
};

const assign = <T extends object>(value: T, partial: object) => {
  return Object.assign(value, partial);
};

export const observer = <T extends object>(value: T) => {
  const subscribers = new Set<Subscriber<T>>();

  const omit = normalize("subscribe", "next");

  const notifier = <K extends keyof T>(_target: T, prop: K, value: T[K]) => {
    for (const subscriber of subscribers) {
      subscriber({ target: omit(_target), prop, value });
    }
    return true;
  };

  const handler: ProxyHandler<T> = {
    get<K extends keyof T>(target: T, p: K & string) {
      return target[p];
    },
    set<K extends keyof T>(target: T, prop: K & string, value: T[K]) {
      return notifier(assign(target, { [prop]: value }), prop, value);
    },
  };

  const observed = new Proxy(value, handler);

  Reflect.defineProperty(observed, "next", {
    value<K extends keyof T>(prop: K, value: T[K]) {
      observed[prop] = value;
    },
    configurable: false,
    enumerable: false,
    writable: false,
  });

  Reflect.defineProperty(observed, "subscribe", {
    value(callback: Subscriber<T>) {
      subscribers.add(callback);
    },
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return observed as T & Observer<T>;
};
