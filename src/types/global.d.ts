import Lenis from "lenis";

declare global {
  interface LenisWindow extends Window {
    lenis?: Lenis;
  }
}
