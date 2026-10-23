import type { Lang } from '../types';
import type { Genre, GenreId, Movement, MovementId, Photographer } from './types';
import { GENRE_BASE, MOVEMENT_BASE } from './base';
import { PHOTOGRAPHER_BASE } from './photographers';
import { MOVEMENTS_EL } from './el/movements';
import { GENRES_EL } from './el/genres';
import { P1_EL } from './el/p1';
import { P2_EL } from './el/p2';
import { P3_EL } from './el/p3';
import { P4_EL } from './el/p4';
import { P5_EL } from './el/p5';
import { P6_EL } from './el/p6';
import { P7_EL } from './el/p7';
import { GENRES_EN, MOVEMENTS_EN, PHOTOGRAPHERS_EN } from './en';

const PHOTOGRAPHERS_EL = { ...P1_EL, ...P2_EL, ...P3_EL, ...P4_EL, ...P5_EL, ...P6_EL, ...P7_EL };

export interface Encyclopedia {
  photographers: Photographer[];
  movements: Movement[];
  genres: Genre[];
  byId: Record<string, Photographer>;
  movementById: Record<MovementId, Movement>;
  genreById: Record<GenreId, Genre>;
}

const cache: Partial<Record<Lang, Encyclopedia>> = {};

export function getEncyclopedia(lang: Lang): Encyclopedia {
  const hit = cache[lang];
  if (hit) return hit;
  const P = lang === 'en' ? PHOTOGRAPHERS_EN : PHOTOGRAPHERS_EL;
  const M = lang === 'en' ? MOVEMENTS_EN : MOVEMENTS_EL;
  const G = lang === 'en' ? GENRES_EN : GENRES_EL;
  const photographers: Photographer[] = PHOTOGRAPHER_BASE.map((b) => ({ ...b, ...(P[b.id] ?? PHOTOGRAPHERS_EL[b.id]) }));
  const movements: Movement[] = MOVEMENT_BASE.map((b) => ({ ...b, ...(M[b.id] ?? MOVEMENTS_EL[b.id]) }));
  const genres: Genre[] = GENRE_BASE.map((b) => ({ ...b, ...(G[b.id] ?? GENRES_EL[b.id]) }));
  const enc: Encyclopedia = {
    photographers,
    movements,
    genres,
    byId: Object.fromEntries(photographers.map((p) => [p.id, p])),
    movementById: Object.fromEntries(movements.map((m) => [m.id, m])) as Record<MovementId, Movement>,
    genreById: Object.fromEntries(genres.map((g) => [g.id, g])) as Record<GenreId, Genre>,
  };
  cache[lang] = enc;
  return enc;
}

/** Strip accents/diacritics for search (Greek and Latin) */
export function fold(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ς/g, 'σ');
}
