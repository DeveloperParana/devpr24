export interface Size {
  width?: number;
  height?: number;
}

export type Unit = "px" | "em" | "%" | "vw" | "vh";
export type SizeType = `${number}${Unit}`;
