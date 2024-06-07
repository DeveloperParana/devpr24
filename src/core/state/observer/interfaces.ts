export interface Subscriber<T extends object> {
  (value: T): void;
}

export interface Subscription {
  unsubscribe(): boolean;
}

export interface Observer<T extends object> {
  next<K extends keyof T>(property: K, value: T[K]): void;
  subscribe(callback: Subscriber<T>): Subscription;
}
