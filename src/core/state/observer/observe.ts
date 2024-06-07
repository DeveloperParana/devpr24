import type { Observer, Subscriber } from "./interfaces";
import { assign, normalize } from "./utilities";

export const observe = <T extends object>(value: T) => {
  const subscribers = new Set<Subscriber<T>>();

  const notifier = (target: T) => {
    for (const subscriber of subscribers) {
      subscriber(normalize(target, "subscribe", "next"));
    }
    return true;
  };

  const handler: ProxyHandler<T> = {
    get<K extends keyof T>(target: T, p: K & string) {
      return target[p];
    },
    set<K extends keyof T>(target: T, prop: K & string, value: T[K]) {
      return notifier(assign(target, { [prop]: value }));
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
      const unsubscribe = () => {
        return subscribers.delete(callback);
      };
      return { unsubscribe };
    },
    configurable: false,
    enumerable: false,
    writable: false,
  });

  return observed as T & Observer<T>;
};
