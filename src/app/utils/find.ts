function find<K extends keyof HTMLElementTagNameMap>(selector: K, parent?: HTMLElement | ShadowRoot): HTMLElementTagNameMap[K]
function find<K extends keyof HTMLElementTagNameMap>(selector: `${K}.${string}`, parent?: HTMLElement | ShadowRoot): HTMLElementTagNameMap[K]
function find<K extends keyof HTMLElementTagNameMap>(selector: `${K}#${string}`, parent?: HTMLElement | ShadowRoot): HTMLElementTagNameMap[K]
function find<K extends keyof HTMLElementTagNameMap>(selector: `${K}[${string}]`, parent?: HTMLElement | ShadowRoot): HTMLElementTagNameMap[K]
function find<K extends keyof HTMLElementTagNameMap>(selector: `${string}`, parent?: HTMLElement | ShadowRoot): HTMLElement
function find<T extends string>(selector: T, parent: HTMLElement | ShadowRoot = document.body) {
  return parent.querySelector(selector)
};

function findAll<K extends keyof HTMLElementTagNameMap>(selector: K, parent?: HTMLElement | ShadowRoot): NodeListOf<HTMLElementTagNameMap[K]>
function findAll<K extends keyof HTMLElementTagNameMap>(selector: `${K}.${string}`, parent?: HTMLElement | ShadowRoot): NodeListOf<HTMLElementTagNameMap[K]>
function findAll<K extends keyof HTMLElementTagNameMap>(selector: `${K}#${string}`, parent?: HTMLElement | ShadowRoot): NodeListOf<HTMLElementTagNameMap[K]>
function findAll<K extends keyof HTMLElementTagNameMap>(selector: `${K}[${string}]`, parent?: HTMLElement | ShadowRoot): NodeListOf<HTMLElementTagNameMap[K]>
function findAll<K extends keyof HTMLElementTagNameMap>(selector: `${string}`, parent?: HTMLElement | ShadowRoot): NodeListOf<HTMLElement>
function findAll<T extends string>(selector: T, parent: HTMLElement | ShadowRoot = document.body) {
  return parent.querySelectorAll(selector)
};

export { find, findAll }