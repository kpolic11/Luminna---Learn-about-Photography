import type { RichPack } from './types';
import { RICH_EL } from './data-el';
import { RICH_EN } from './data-en';
import { RICH2_EL } from './data2-el';
import { RICH2_EN } from './data2-en';

const merge = (...packs: RichPack[]): RichPack => ({
  lessons: Object.assign({}, ...packs.map((p) => p.lessons)),
  modules: Object.assign({}, ...packs.map((p) => p.modules)),
});

const PACKS: Record<string, RichPack> = { el: merge(RICH_EL, RICH2_EL), en: merge(RICH_EN, RICH2_EN) };
export const getRich = (lang: string): RichPack => PACKS[lang] ?? PACKS.el;
