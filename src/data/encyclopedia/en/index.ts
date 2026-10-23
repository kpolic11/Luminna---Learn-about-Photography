import type { PhotographerText } from '../types';
import { P1_EN } from './p1';
import { P2_EN } from './p2';
import { P3_EN } from './p3';
import { P4_EN } from './p4';
import { P5_EN } from './p5';
import { P6_EN } from './p6';
import { P7_EN } from './p7';

export { MOVEMENTS_EN } from './movements';
export { GENRES_EN } from './genres';

export const PHOTOGRAPHERS_EN: Record<string, PhotographerText> = {
  ...P1_EN,
  ...P2_EN,
  ...P3_EN,
  ...P4_EN,
  ...P5_EN,
  ...P6_EN,
  ...P7_EN,
};
