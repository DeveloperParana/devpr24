export interface Type<T> extends Function {
  new (...params: unknown[]): T;
}
