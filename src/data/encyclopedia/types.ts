/** Encyclopedia of photographers, movements and genres. */

export type GenreId =
  | 'portrait'
  | 'landscape'
  | 'street'
  | 'documentary'
  | 'photojournalism'
  | 'fashion'
  | 'architecture'
  | 'experimental'
  | 'conceptual'
  | 'color'
  | 'still-life'
  | 'greek';

export type MovementId =
  | 'early'
  | 'pictorialism'
  | 'straight'
  | 'new-objectivity'
  | 'new-vision'
  | 'surrealism'
  | 'f64'
  | 'social-documentary'
  | 'humanist'
  | 'photojournalism'
  | 'new-york-school'
  | 'new-documents'
  | 'provoke'
  | 'new-color'
  | 'new-topographics'
  | 'dusseldorf'
  | 'staged'
  | 'diaristic'
  | 'contemporary-documentary'
  | 'greek-postwar'
  | 'social-media';

export interface PhotographerBase {
  id: string;
  /** Name in Latin script (for search) */
  latin: string;
  born: number;
  died?: number;
  /** ISO-like country codes for filtering (e.g. 'US', 'FR', 'GR') */
  countries: string[];
  genres: GenreId[];
  movements: MovementId[];
  /** major = long entry with exercise; entry = shorter entry */
  tier: 'major' | 'entry';
  /** Public-domain portrait or work, if available */
  image?: { url: string; credit: string; caption?: string };
  related: string[];
  chapter?: string;
  /** Public social-media handle (shown as «γνωστός ως @…») */
  handle?: string;
}

export interface WorkRef {
  title: string;
  year: string;
  note: string;
  /** Where to see it (museum/archive page) */
  url?: string;
}

export interface PhotographerText {
  name: string;
  nationality: string;
  /** One-sentence summary shown on cards */
  oneLine: string;
  /** "At a glance" facts */
  glance?: string[];
  life: string[];
  style: string[];
  works: WorkRef[];
  learn: string[];
  exercise?: { title: string; steps: string[] };
  sources?: { title: string; url: string }[];
}

export interface MovementBase {
  id: MovementId;
  from: number;
  to?: number;
}

export interface MovementText {
  title: string;
  years: string;
  summary: string;
  body: string[];
  traits: string[];
}

export interface GenreBase {
  id: GenreId;
  icon: string;
}

export interface GenreText {
  title: string;
  summary: string;
  body: string[];
}

export type Photographer = PhotographerBase & PhotographerText;
export type Movement = MovementBase & MovementText;
export type Genre = GenreBase & GenreText;
