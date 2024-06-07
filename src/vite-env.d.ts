/// <reference types="vite/client" />

interface CustomGlobalEventHandlersEventMap<T> {
  abort: ReplaceTarget<UIEvent, T>;
  animationcancel: ReplaceTarget<AnimationEvent, T>;
  animationend: ReplaceTarget<AnimationEvent, T>;
  animationiteration: ReplaceTarget<AnimationEvent, T>;
  animationstart: ReplaceTarget<AnimationEvent, T>;
  auxclick: ReplaceTarget<MouseEvent, T>;
  beforeinput: ReplaceTarget<InputEvent, T>;
  beforetoggle: ReplaceTarget<Event, T>;
  blur: ReplaceTarget<FocusEvent, T>;
  cancel: ReplaceTarget<Event, T>;
  canplay: ReplaceTarget<Event, T>;
  canplaythrough: ReplaceTarget<Event, T>;
  change: ReplaceTarget<Event, T>;
  click: ReplaceTarget<MouseEvent, T>;
  close: ReplaceTarget<Event, T>;
  compositionend: ReplaceTarget<CompositionEvent, T>;
  compositionstart: ReplaceTarget<CompositionEvent, T>;
  compositionupdate: ReplaceTarget<CompositionEvent, T>;
  contextmenu: ReplaceTarget<MouseEvent, T>;
  copy: ReplaceTarget<ClipboardEvent, T>;
  cuechange: ReplaceTarget<Event, T>;
  cut: ReplaceTarget<ClipboardEvent, T>;
  dblclick: ReplaceTarget<MouseEvent, T>;
  drag: ReplaceTarget<DragEvent, T>;
  dragend: ReplaceTarget<DragEvent, T>;
  dragenter: ReplaceTarget<DragEvent, T>;
  dragleave: ReplaceTarget<DragEvent, T>;
  dragover: ReplaceTarget<DragEvent, T>;
  dragstart: ReplaceTarget<DragEvent, T>;
  drop: ReplaceTarget<DragEvent, T>;
  durationchange: ReplaceTarget<Event, T>;
  emptied: ReplaceTarget<Event, T>;
  ended: ReplaceTarget<Event, T>;
  error: ReplaceTarget<ErrorEvent, T>;
  focus: ReplaceTarget<FocusEvent, T>;
  focusin: ReplaceTarget<FocusEvent, T>;
  focusout: ReplaceTarget<FocusEvent, T>;
  formdata: ReplaceTarget<FormDataEvent, T>;
  gotpointercapture: ReplaceTarget<PointerEvent, T>;
  input: ReplaceTarget<Event, T>;
  invalid: ReplaceTarget<Event, T>;
  keydown: ReplaceTarget<KeyboardEvent, T>;
  keypress: ReplaceTarget<KeyboardEvent, T>;
  keyup: ReplaceTarget<KeyboardEvent, T>;
  load: ReplaceTarget<Event, T>;
  loadeddata: ReplaceTarget<Event, T>;
  loadedmetadata: ReplaceTarget<Event, T>;
  loadstart: ReplaceTarget<Event, T>;
  lostpointercapture: ReplaceTarget<PointerEvent, T>;
  mousedown: ReplaceTarget<MouseEvent, T>;
  mouseenter: ReplaceTarget<MouseEvent, T>;
  mouseleave: ReplaceTarget<MouseEvent, T>;
  mousemove: ReplaceTarget<MouseEvent, T>;
  mouseout: ReplaceTarget<MouseEvent, T>;
  mouseover: ReplaceTarget<MouseEvent, T>;
  mouseup: ReplaceTarget<MouseEvent, T>;
  paste: ReplaceTarget<ClipboardEvent, T>;
  pause: ReplaceTarget<Event, T>;
  play: ReplaceTarget<Event, T>;
  playing: ReplaceTarget<Event, T>;
  pointercancel: ReplaceTarget<PointerEvent, T>;
  pointerdown: ReplaceTarget<PointerEvent, T>;
  pointerenter: ReplaceTarget<PointerEvent, T>;
  pointerleave: ReplaceTarget<PointerEvent, T>;
  pointermove: ReplaceTarget<PointerEvent, T>;
  pointerout: ReplaceTarget<PointerEvent, T>;
  pointerover: ReplaceTarget<PointerEvent, T>;
  pointerup: ReplaceTarget<PointerEvent, T>;
  progress: ReplaceTarget<ProgressEvent, T>;
  ratechange: ReplaceTarget<Event, T>;
  reset: ReplaceTarget<Event, T>;
  resize: ReplaceTarget<UIEvent, T>;
  scroll: ReplaceTarget<Event, T>;
  scrollend: ReplaceTarget<Event, T>;
  securitypolicyviolation: ReplaceTarget<SecurityPolicyViolationEvent, T>;
  seeked: ReplaceTarget<Event, T>;
  seeking: ReplaceTarget<Event, T>;
  select: ReplaceTarget<Event, T>;
  selectionchange: ReplaceTarget<Event, T>;
  selectstart: ReplaceTarget<Event, T>;
  slotchange: ReplaceTarget<Event, T>;
  stalled: ReplaceTarget<Event, T>;
  submit: ReplaceTarget<SubmitEvent, T>;
  suspend: ReplaceTarget<Event, T>;
  timeupdate: ReplaceTarget<Event, T>;
  toggle: ReplaceTarget<Event, T>;
  touchcancel: ReplaceTarget<TouchEvent, T>;
  touchend: ReplaceTarget<TouchEvent, T>;
  touchmove: ReplaceTarget<TouchEvent, T>;
  touchstart: ReplaceTarget<TouchEvent, T>;
  transitioncancel: ReplaceTarget<TransitionEvent, T>;
  transitionend: ReplaceTarget<TransitionEvent, T>;
  transitionrun: ReplaceTarget<TransitionEvent, T>;
  transitionstart: ReplaceTarget<TransitionEvent, T>;
  volumechange: ReplaceTarget<Event, T>;
  waiting: ReplaceTarget<Event, T>;
  webkitanimationend: ReplaceTarget<Event, T>;
  webkitanimationiteration: ReplaceTarget<Event, T>;
  webkitanimationstart: ReplaceTarget<Event, T>;
  webkittransitionend: ReplaceTarget<Event, T>;
  wheel: ReplaceTarget<WheelEvent, T>;
}

interface CustomGlobalEventHandlers<T> {
  onAbort: ((this: T, ev: ReplaceTarget<UIEvent, T>) => unknown) | null;
  onAnimationCancel:
    | ((this: T, ev: ReplaceTarget<AnimationEvent, T>) => unknown)
    | null;
  onAnimationEnd:
    | ((this: T, ev: ReplaceTarget<AnimationEvent, T>) => unknown)
    | null;
  onAnimationIteration:
    | ((this: T, ev: ReplaceTarget<AnimationEvent, T>) => unknown)
    | null;
  onAnimationStart:
    | ((this: T, ev: ReplaceTarget<AnimationEvent, T>) => unknown)
    | null;
  onAuxClick: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onBeforeInput:
    | ((this: T, ev: ReplaceTarget<InputEvent, T>) => unknown)
    | null;
  onBeforeToggle: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onBlur: ((this: T, ev: ReplaceTarget<FocusEvent, T>) => unknown) | null;
  onCancel: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onCanPlay: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onCanPlayThrough: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onClick: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onClose: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onContextMenu:
    | ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown)
    | null;
  onCopy: ((this: T, ev: ReplaceTarget<ClipboardEvent, T>) => unknown) | null;
  onCueChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onCut: ((this: T, ev: ReplaceTarget<ClipboardEvent, T>) => unknown) | null;
  onDblClick: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onDrag: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDragEnd: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDragEnter: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDragLeave: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDragOver: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDragStart: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDrop: ((this: T, ev: ReplaceTarget<DragEvent, T>) => unknown) | null;
  onDurationChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onEmptied: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onEnded: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onError: OnErrorEventHandler;
  onFocus: ((this: T, ev: ReplaceTarget<FocusEvent, T>) => unknown) | null;
  onFormData:
    | ((this: T, ev: ReplaceTarget<FormDataEvent, T>) => unknown)
    | null;
  onGotPointerCapture:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onInput: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onInvalid: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onKeyDown: ((this: T, ev: ReplaceTarget<KeyboardEvent, T>) => unknown) | null;
  onKeyPress:
    | ((this: T, ev: ReplaceTarget<KeyboardEvent, T>) => unknown)
    | null;
  onKeyUp: ((this: T, ev: ReplaceTarget<KeyboardEvent, T>) => unknown) | null;
  onLoad: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onLoadedData: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onLoadedMetadata: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onLoadStart: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onLostPointerCapture:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onMouseDown: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseEnter: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseLeave: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseMove: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseOut: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseOver: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onMouseUp: ((this: T, ev: ReplaceTarget<MouseEvent, T>) => unknown) | null;
  onPaste: ((this: T, ev: ReplaceTarget<ClipboardEvent, T>) => unknown) | null;
  onPause: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onPlay: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onPlaying: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onPointerCancel:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerDown:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerEnter:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerLeave:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerMove:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerOut:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerOver:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onPointerUp:
    | ((this: T, ev: ReplaceTarget<PointerEvent, T>) => unknown)
    | null;
  onProgress:
    | ((this: T, ev: ReplaceTarget<ProgressEvent, T>) => unknown)
    | null;
  onRateChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onReset: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onResize: ((this: T, ev: ReplaceTarget<UIEvent, T>) => unknown) | null;
  onScroll: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onScrollEnd: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSecurityPolicyViolation:
    | ((this: T, ev: ReplaceTarget<SecurityPolicyViolationEvent, T>) => unknown)
    | null;
  onSeeked: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSeeking: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSelect: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSelectionChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSelectStart: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSlotChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onStalled: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onSubmit: ((this: T, ev: ReplaceTarget<SubmitEvent, T>) => unknown) | null;
  onSuspend: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onTimeUpdate: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onToggle: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onTouchCancel?:
    | ((this: T, ev: ReplaceTarget<TouchEvent, T>) => unknown)
    | null
    | undefined;
  onTouchEnd?:
    | ((this: T, ev: ReplaceTarget<TouchEvent, T>) => unknown)
    | null
    | undefined;
  onTouchMove?:
    | ((this: T, ev: ReplaceTarget<TouchEvent, T>) => unknown)
    | null
    | undefined;
  onTouchStart?:
    | ((this: T, ev: ReplaceTarget<TouchEvent, T>) => unknown)
    | null
    | undefined;
  onTransitionCancel:
    | ((this: T, ev: ReplaceTarget<TransitionEvent, T>) => unknown)
    | null;
  onTransitionEnd:
    | ((this: T, ev: ReplaceTarget<TransitionEvent, T>) => unknown)
    | null;
  onTransitionRun:
    | ((this: T, ev: ReplaceTarget<TransitionEvent, T>) => unknown)
    | null;
  onTransitionStart:
    | ((this: T, ev: ReplaceTarget<TransitionEvent, T>) => unknown)
    | null;
  onVolumeChange: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
  onWaiting: ((this: T, ev: ReplaceTarget<Event, T>) => unknown) | null;
}

type ReplaceTarget<T, U> = T & {
  target: U;
};

type JSXNode<T> = {
  ref?: { current: JSX.Element | null };
} & T;

interface JSXFactory<T> {
  (...params: any[]): JSXNode<T>;
}

type JSXAnimatedLength<S> = {
  [A in keyof S]: S[A] extends SVGAnimatedLength ? number | `${number}` : S[A];
};

type JSXPointList<S> = {
  [A in keyof S]: S[A] extends SVGPointList ? string : S[A];
};

type JSXAnimatedString<S> = {
  [A in keyof S]: S[A] extends SVGAnimatedString ? string : S[A];
};

type JSXAnimatedEnumeration<S> = {
  [A in keyof S]: S[A] extends SVGAnimatedEnumeration
    ? "userSpaceOnUse" | "objectBoundingBox" | string
    : S[A];
};

interface SVGSymbolElement {
  width: `${number}px`;
  height: `${number}px`;
}

interface SVGLineElement {
  strokeDasharray: string;
  strokeWidth: number;
}

interface SVGPathElement {
  strokeDasharray: string;
  strokeWidth: number;
}

interface SVGEllipseElement {
  strokeDasharray: string;
  strokeWidth: number;
}

interface SVGElement {
  viewBox: `${number} ${number} ${number} ${number}`;
  xmlns: "http://www.w3.org/2000/svg";
  style: Partial<CSSStyleDeclaration>;
  stroke: string;
  fill: string;
  d: string;
  mask: string;
}

interface HTMLElement {
  style: Partial<CSSStyleDeclaration>;
}

interface HTMLIFrameElement {
  style?: Partial<CSSStyleDeclaration>;
  allowfullscreen?: boolean;
  referrerpolicy?: string;
  frameborder?: number;
  marginheight?: number;
  marginwidth?: number;
}

type JSXElementTagNameMap = HTMLElementTagNameMap &
  SVGElementTagNameMap &
  MathMLElementTagNameMap;

type JSXElementEventMap = HTMLElementEventMap &
  SVGElementEventMap &
  MathMLElementEventMap;

declare const gtag: (param: string, value: Date | string) => void;

interface Window {
  dataLayer: IArguments[];
  gtag: typeof gtag;
}

declare global {
  interface GlobalEventHandlers<T> {
    onclose: (<T extends HTMLElement>(this: T, ev: Event) => any) | null;
    oninput: (<T extends HTMLElement>(this: T, ev: Event) => any) | null;
  }
}

type ToEvent<T extends string> = T extends `on${infer K}` ? `on:${K}` : never;
type FromEvent<T extends string> = T extends `on:${infer K}` ? `on${K}` : never;
type OnlyEvent<T extends string> = T extends `on${infer K}`
  ? Lowercase<K>
  : never;

type EventHandlers<T> = {
  [K in keyof CustomGlobalEventHandlers<T>]:
    | ((
        this: T,
        ev: CustomGlobalEventHandlersEventMap<T>[OnlyEvent<K>],
      ) => unknown)
    | null;
};

declare namespace JSX {
  // interface Element extends HTMLElement {}
  type Element<T extends Element = Element> = HTMLElement & T;

  type Factory<P extends {}, T extends HTMLElement> = (
    props: P,
  ) => JSX.Element<T>;

  interface Component<T> {
    (props: T, children?: Node[]): Node;
  }

  interface IntrinsicElements extends IntrinsicElementsMap {}

  type IntrinsicElementsMap = {
    [K in keyof JSXElementTagNameMap]: Partial<
      JSXNode<
        K extends keyof HTMLElementTagNameMap
          ? HTMLElementTagNameMap[K]
          : K extends keyof SVGElementTagNameMap
            ? JSXAnimatedEnumeration<
                JSXPointList<
                  JSXAnimatedString<JSXAnimatedLength<SVGElementTagNameMap[K]>>
                >
              >
            : K extends keyof MathMLElementTagNameMap
              ? MathMLElementTagNameMap[K]
              : Element
      > &
        EventHandlers<JSXElementTagNameMap[K]>
    >;
  };

  interface IntrinsicElements extends IntrinsicElementsMap {}
}
