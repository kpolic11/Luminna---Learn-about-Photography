/**
 * getContent(lang): merges the language-neutral bases with the text of the
 * chosen language. Anything not yet translated falls back to Greek, and
 * chapters carry `fallback: true` so the UI can say so.
 */
import type {
  Chapter,
  Lang,
  Lesson,
  ModuleBase,
  ModuleText,
  LevelText,
  SchoolLevel,
  MasterclassTip,
  Pioneer,
  QuizQuestion,
  TimelineEvent,
} from './types';
import { CHAPTER_BASE } from './chapters/base';
import { CHAPTERS_EL } from './chapters/el';
import { CHAPTERS_EN } from './chapters/en';
import { PIONEER_BASE, PIONEER_TEXT } from './pioneers';
import { TIP_BASE, TIP_TEXT, QUIZ_TEXT, TIMELINE_BASE, TIMELINE_TEXT } from './general';
import { LESSON_BASE, MODULE_BASE } from './lab/base';
import { LAB2_EL, MODULES_EL } from './lab/el2';
import { LAB2_EN, MODULES_EN } from './lab/en2';
import { LAB_EL } from './lab/el';
import { LAB3_EL, PHONE_EL, MODULE_EXTRAS_EL } from './lab/el3';
import { LAB4_EL } from './lab/el4';
import { QUICK_EL } from './lab/quick-el';
import { QUICK_EN } from './lab/quick-en';
import { LAB5_EL } from './lab/el5';
import { LAB6_EL } from './lab/el6';
import { LAB7_EL } from './lab/el7';
import { LAB8_EL } from './lab/el8';
import { LAB9_EL } from './lab/el9';
import { LAB3_EN, PHONE_EN, MODULE_EXTRAS_EN } from './lab/en3';
import { MODULES3_EL, LEVELS_EL } from './lab/levels-el';
import { MODULES3_EN, LEVELS_EN } from './lab/levels-en';
import { LAB_EN } from './lab/en';
import { LAB4_EN } from './lab/en4';
import { LAB5_EN } from './lab/en5';
import { LAB6_EN } from './lab/en6';
import { LAB7_EN } from './lab/en7';
import { LAB8_EN } from './lab/en8';
import { LAB9_EN } from './lab/en9';
import { TIMELINE_EVENTS, TimelineEventBase } from './timelines/base';
import { TIMELINE_EL } from './timelines/el';
import { TIMELINE_EN } from './timelines/en';
import type { TimelineEventText } from './timelines/types';

export type TimelineEntry = TimelineEventBase & TimelineEventText;
const TL_TEXT: Record<Lang, Record<string, TimelineEventText>> = { el: TIMELINE_EL, en: TIMELINE_EN };

export * from './types';

const CHAPTER_TEXT = { el: CHAPTERS_EL, en: CHAPTERS_EN };
const LAB_TEXT = { el: { ...LAB_EL, ...LAB2_EL, ...LAB3_EL, ...LAB4_EL, ...LAB5_EL, ...LAB6_EL, ...LAB7_EL, ...LAB8_EL, ...LAB9_EL }, en: { ...LAB_EN, ...LAB2_EN, ...LAB3_EN, ...LAB4_EN, ...LAB5_EN, ...LAB6_EN, ...LAB7_EN, ...LAB8_EN, ...LAB9_EN } };
const PHONE = { el: PHONE_EL, en: PHONE_EN };
const QUICK: Record<Lang, Record<string, [string, string]>> = { el: QUICK_EL, en: QUICK_EN };
const MODULE_EXTRAS = { el: MODULE_EXTRAS_EL, en: MODULE_EXTRAS_EN };
const MODULE_TEXT = { el: { ...MODULES_EL, ...MODULES3_EL }, en: { ...MODULES_EN, ...MODULES3_EN } };
const LEVEL_TEXT = { el: LEVELS_EL, en: { ...LEVELS_EL, ...LEVELS_EN } };

export interface Content {
  chapters: Chapter[];
  pioneers: Pioneer[];
  tips: MasterclassTip[];
  quiz: QuizQuestion[];
  timeline: TimelineEvent[];
  lessons: Lesson[];
  timelines: TimelineEntry[];
  modules: Module[];
  levels: Record<SchoolLevel, LevelText>;
}

export type Module = ModuleBase & ModuleText & { lessons: Lesson[] };

const cache = new Map<Lang, Content>();

export function getContent(lang: Lang): Content {
  const hit = cache.get(lang);
  if (hit) return hit;

  const chapters: Chapter[] = CHAPTER_BASE.map((b) => {
    const own = CHAPTER_TEXT[lang][b.id];
    const text = own ?? CHAPTERS_EL[b.id];
    // A chapter is only "full" in this language if its long text exists here
    let status = b.status;
    if (status === 'full' && text.sections.length < 3) status = text.sections.length ? 'short' : 'planned';
    return { ...b, ...text, status, fallback: !own && lang !== 'el' };
  });

  const pioneers: Pioneer[] = PIONEER_BASE.map((b) => {
    const own = PIONEER_TEXT[lang][b.id];
    return { ...b, ...(own ?? PIONEER_TEXT.el[b.id]), fallback: !own && lang !== 'el' };
  });

  const tips: MasterclassTip[] = TIP_BASE.map((b, i) => ({ ...b, ...(TIP_TEXT[lang][i] ?? TIP_TEXT.el[i]) }));

  const timeline: TimelineEvent[] = TIMELINE_BASE.map((b) => ({
    ...b,
    ...(TIMELINE_TEXT[lang][b.id] ?? TIMELINE_TEXT.el[b.id]),
  }));

  const lessons: Lesson[] = LESSON_BASE.filter((b) => LAB_TEXT.el[b.id] || LAB_TEXT[lang][b.id]).map((b) => {
    const t = LAB_TEXT[lang][b.id] ?? LAB_TEXT.el[b.id];
    const own = !!LAB_TEXT[lang][b.id];
    const phone = t.phone ?? (own ? PHONE[lang][b.id] : PHONE.el[b.id]);
    const q = (own ? QUICK[lang][b.id] : undefined) ?? QUICK.el[b.id];
    return { ...b, ...t, phone, quick: t.quick ?? q?.[0], challenge: t.challenge ?? q?.[1] };
  });
  const modules: Module[] = MODULE_BASE.map((m) => ({
    ...m,
    ...(MODULE_TEXT[lang][m.id] ?? MODULE_TEXT.el[m.id]),
    ...(MODULE_EXTRAS[lang][m.id] ?? MODULE_EXTRAS_EL[m.id]),
    lessons: lessons.filter((l) => l.module === m.id),
  })).filter((m) => m.lessons.length > 0 && m.title);
  const levels = LEVEL_TEXT[lang];

  const timelines: TimelineEntry[] = TIMELINE_EVENTS.map((b) => ({ ...b, ...(TL_TEXT[lang][b.id] ?? TIMELINE_EL[b.id]) })).sort((a, b) => a.year - b.year);

  const content: Content = { chapters, pioneers, tips, quiz: QUIZ_TEXT[lang], timeline, lessons, timelines, modules, levels };
  cache.set(lang, content);
  return content;
}

/** Plain-text paragraphs of a chapter in reading order (for narration, PDF and reading time) */
export function chapterParagraphs(ch: Chapter): string[] {
  if (ch.sections.length) return ch.sections.flatMap((s) => s.paragraphs);
  return [ch.summary];
}

export function readingMinutes(ch: Chapter): number {
  const words = chapterParagraphs(ch).join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / 160));
}
