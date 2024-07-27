export interface Callback<T> {
  (value: T): void;
}

export class EventEmitter<T> {
  #listeners = new Map();

  emit<K extends keyof T>(key: K, value: T[K]) {
    const listeners = this.#getListeners(key);
    for (const cb of listeners) cb(value);
  }

  on<K extends keyof T>(key: K, callback: Callback<T[K]>) {
    const listeners = this.#getListeners(key);
    this.#listeners.set(key, listeners.add(callback));
    return { off: () => this.off(key, callback) };
  }

  off<K extends keyof T>(key: K, callback: Callback<T[K]>) {
    const listeners = this.#getListeners(key);
    listeners.delete(callback);
    this.#listeners.set(key, listeners);
  }

  #getListeners<K extends keyof T>(key: K): Set<Callback<T[K]>> {
    return this.#listeners.get(key) ?? new Set();
  }
}
