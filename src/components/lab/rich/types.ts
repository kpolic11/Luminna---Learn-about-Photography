/**
 * "Rich" teaching layer for School lessons, modelled on the classroom slides:
 * real photographs read step by step, hands-on simulations on photographs,
 * varied mini-tests, and per-module recall / keep / missions / final test.
 * All coordinates are fractions of the image (0–1).
 */

export type AnnColor = 'y' | 'g' | 'r' | 'b' | 'w';

export type Ann =
  | { t: 'circle'; x: number; y: number; r: number; label?: string; c?: AnnColor; step?: number }
  | { t: 'ellipse'; x: number; y: number; rx: number; ry: number; label?: string; c?: AnnColor; step?: number }
  | { t: 'box'; x: number; y: number; x2: number; y2: number; label?: string; c?: AnnColor; step?: number }
  | { t: 'arrow'; x: number; y: number; x2: number; y2: number; label?: string; c?: AnnColor; step?: number }
  | { t: 'text'; x: number; y: number; label: string; c?: AnnColor; step?: number }
  | { t: 'num'; x: number; y: number; n: number; c?: AnnColor; step?: number };

export interface Photo {
  /** images.unsplash.com/photo-… base URL, or a public-domain URL */
  src: string;
  /** width / height */
  ratio: number;
  credit: string;
  creditUrl: string;
}

export interface PhotoWalk {
  photo: Photo;
  title: string;
  intro: string;
  /** annotations; `step` (1-based) says when each one appears; none = from the start */
  ann: Ann[];
  /** «Read it step by step» — one line per step */
  steps: string[];
  /** true when the image is altered to demonstrate something */
  simulated?: boolean;
}

export type Play =
  | { kind: 'exposure'; photo: Photo; title: string; intro: string }
  | { kind: 'shutter'; title: string; intro: string }
  | { kind: 'iso'; photo: Photo; title: string; intro: string }
  | { kind: 'aperture'; title: string; intro: string }
  /** white balance on a photo lit by a lamp (scene ≈ sceneK) */
  | { kind: 'wb'; photo: Photo; sceneK: number; title: string; intro: string }
  /** slide a square crop over a wide photo; the subject sits at subjectX (0–1) */
  | { kind: 'crop'; photo: Photo; subjectX: number; title: string; intro: string }
  /** move a light around a face: direction and size of the source */
  | { kind: 'light'; title: string; intro: string };

export type Test =
  | { kind: 'mc'; q: string; options: string[]; answer: number; why: string }
  | { kind: 'tap'; q: string; photo: Photo; target: { x: number; y: number; r: number }; why: string }
  | { kind: 'order'; q: string; items: string[]; why: string; /** labels for the two ends */ ends?: [string, string] }
  | { kind: 'match'; q: string; pairs: [string, string][]; why: string };

export interface RichLesson {
  walks?: PhotoWalk[];
  plays?: Play[];
  tests?: Test[];
  /** fills in the phone box when the base lesson has none */
  phone?: string;
}

export interface RichModule {
  /** «Do you remember?» — warm-up questions from earlier modules */
  recall?: [string, string][];
  /** extra missions besides the lessons' «Try it» */
  missions?: [string, string][];
  /** final module test (falls back to the lessons' check questions) */
  final?: Test[];
}

export interface RichPack {
  lessons: Record<string, RichLesson>;
  modules: Record<string, RichModule>;
}
