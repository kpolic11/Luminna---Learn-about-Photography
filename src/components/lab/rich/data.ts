import type { RichPack } from './types';
import { RICH_EL } from './data-el';
import { RICH_EN } from './data-en';

const PACKS: Record<string, RichPack> = { el: RICH_EL, en: RICH_EN };
export const getRich = (lang: string): RichPack => PACKS[lang] ?? RICH_EL;
