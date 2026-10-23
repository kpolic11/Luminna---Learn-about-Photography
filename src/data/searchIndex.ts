/**
 * Site-wide search: a paragraph-level index over chapters, lessons, the
 * Encyclopedia, «Πώς φτιάχτηκε», the glossary and the community page.
 * Built once per language, in the browser, with no server and no cost.
 */
import type { Lang } from './types';
import { getContent } from './index';
import { getEncyclopedia, fold } from './encyclopedia';
import { getHowMade } from './encyclopedia/howmade';
import { GLOSSARY_EL, GLOSSARY_EN } from './glossary';
import { COMMUNITY, REGION_NAMES, type RegionId } from './community';
import { href } from '../router';

export type HitKind = 'chapter' | 'lesson' | 'photographer' | 'movement' | 'genre' | 'howmade' | 'glossary' | 'community';

export interface IndexEntry {
  kind: HitKind;
  /** Page title (chapter, lesson, entry …) */
  title: string;
  /** Section inside the page, if any */
  where?: string;
  /** The paragraph itself */
  text: string;
  href: string;
  /** folded title + text, for matching */
  f: string;
  ft: string;
}

const cache: Partial<Record<Lang, IndexEntry[]>> = {};

export function getSearchIndex(lang: Lang): IndexEntry[] {
  const hit = cache[lang];
  if (hit) return hit;
  const out: IndexEntry[] = [];
  const add = (kind: HitKind, title: string, where: string | undefined, text: string | undefined, link: string) => {
    if (!text || !text.trim()) return;
    out.push({ kind, title, where, text, href: link, f: fold(text), ft: fold(title) });
  };

  const content = getContent(lang);
  for (const ch of content.chapters) {
    const link = href('history', ch.id);
    const t = `${ch.number}. ${ch.title}`;
    add('chapter', t, undefined, ch.summary, link);
    for (const s of ch.sections) for (const p of s.paragraphs) add('chapter', t, s.heading, p, link);
    for (const d of ch.didYouKnow ?? []) add('chapter', t, undefined, d, link);
  }

  const modTitle = Object.fromEntries(content.modules.map((m) => [m.id, m.title]));
  for (const l of content.lessons) {
    const link = href('school', l.module, l.id);
    add('lesson', l.title, modTitle[l.module], l.tagline, link);
    add('lesson', l.title, modTitle[l.module], l.quick, link);
    for (const p of l.body) add('lesson', l.title, modTitle[l.module], p, link);
    for (const b of l.bullets ?? []) add('lesson', l.title, modTitle[l.module], b, link);
    add('lesson', l.title, modTitle[l.module], l.keyIdea, link);
    add('lesson', l.title, modTitle[l.module], l.phone, link);
  }

  const enc = getEncyclopedia(lang);
  for (const p of enc.photographers) {
    const link = href('encyclopedia', 'p', p.id);
    add('photographer', p.name, p.latin + (p.handle ? ` · @${p.handle}` : ''), p.oneLine, link);
    for (const x of [...p.life, ...p.style, ...p.learn]) add('photographer', p.name, undefined, x, link);
    for (const w of p.works) add('photographer', p.name, w.title, `${w.title} (${w.year}). ${w.note}`, link);
  }
  for (const m of enc.movements) {
    const link = href('encyclopedia', 'm', m.id);
    add('movement', m.title, m.years, m.summary, link);
    for (const x of m.body) add('movement', m.title, undefined, x, link);
  }
  for (const g of enc.genres) {
    const link = href('encyclopedia', 'g', g.id);
    add('genre', g.title, undefined, g.summary, link);
    for (const x of g.body) add('genre', g.title, undefined, x, link);
  }

  for (const h of getHowMade(lang)) {
    const link = href('encyclopedia', 'h', h.id);
    const t = `${h.title} (${h.photographerName}, ${h.year})`;
    add('howmade', t, undefined, h.oneLine, link);
    for (const x of [...h.context, ...h.technique, ...h.decisions, ...h.learn]) add('howmade', t, undefined, x, link);
  }

  const gl = lang === 'en' && GLOSSARY_EN.length ? GLOSSARY_EN : GLOSSARY_EL;
  for (const g of gl) add('glossary', g.term, g.aka, g.def, href('glossary', g.id));

  for (const r of Object.keys(COMMUNITY) as RegionId[]) {
    for (const c of COMMUNITY[r]) {
      add('community', (lang === 'en' && c.nameEn) || c.name, REGION_NAMES[r][lang], `${(lang === 'en' && c.nameEn) || c.name}${lang === 'en' && c.nameEn ? ` (${c.name})` : ''} · ${lang === 'en' ? c.cityEn : c.city} · ${REGION_NAMES[r][lang]}`, href('community', r));
    }
  }

  cache[lang] = out;
  return out;
}

export interface SearchHit extends IndexEntry {
  score: number;
  /** [start, end] of the first match inside text */
  at: [number, number];
}

/** All query terms must appear (accent- and case-insensitive). */
export function searchSite(lang: Lang, query: string, limit = 120): SearchHit[] {
  const terms = fold(query).split(/\s+/).filter((t) => t.length > 1 || /\d/.test(t));
  if (!terms.length) return [];
  const hits: SearchHit[] = [];
  for (const e of getSearchIndex(lang)) {
    const hay = e.ft + ' ' + e.f;
    if (!terms.every((t) => hay.includes(t))) continue;
    let score = 0;
    for (const t of terms) {
      if (e.ft.includes(t)) score += e.ft.startsWith(t) ? 8 : 5;
      const i = e.f.indexOf(t);
      if (i >= 0) score += 2 + (/\s/.test(e.f[i - 1] ?? ' ') ? 1 : 0);
    }
    if (e.kind === 'glossary') score += 2;
    const first = terms.map((t) => e.f.indexOf(t)).filter((i) => i >= 0).sort((a, b) => a - b)[0] ?? -1;
    const len = first >= 0 ? terms.find((t) => e.f.indexOf(t) === first)!.length : 0;
    hits.push({ ...e, score, at: [first, first + len] });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Remember which paragraph to highlight after navigation. */
export function rememberFind(text: string) {
  try {
    sessionStorage.setItem('lumina.find', text.slice(0, 70));
  } catch {
    /* storage unavailable: just navigate */
  }
}
