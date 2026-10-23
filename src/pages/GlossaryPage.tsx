import React, { useEffect, useMemo, useState } from 'react';
import { BookA, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href } from '../router';
import { PageHeader } from './PageHeader';
import { GLOSSARY_EL, GLOSSARY_EN, type GlossEntry, type GlossLink } from '../data/glossary';
import { getEncyclopedia, fold } from '../data/encyclopedia';
import { getHowMade } from '../data/encyclopedia/howmade';

export const GlossaryPage: React.FC<{ termId?: string }> = ({ termId }) => {
  const { ui, lang, content } = useLanguage();
  const G = ui.glossary;
  const [q, setQ] = useState('');
  const entries = useMemo(() => {
    const own = lang === 'en' && GLOSSARY_EN.length ? GLOSSARY_EN : GLOSSARY_EL;
    return [...own].sort((a, b) => a.term.localeCompare(b.term, lang));
  }, [lang]);
  const enc = getEncyclopedia(lang);
  const how = getHowMade(lang);

  const linkInfo = (l?: GlossLink): [string, string] | null => {
    if (!l) return null;
    if (l.kind === 'lesson') {
      const lesson = content.lessons.find((x) => x.id === l.id);
      return lesson ? [`${G.lesson}: ${lesson.title}`, href('school', l.module, l.id)] : null;
    }
    if (l.kind === 'chapter') {
      const ch = content.chapters.find((c) => c.id === l.id);
      return ch ? [`${G.chapter}: ${ch.number}. ${ch.title}`, href('history', l.id)] : null;
    }
    const name =
      l.type === 'p' ? enc.byId[l.id]?.name : l.type === 'm' ? (enc.movementById as Record<string, { title: string }>)[l.id]?.title : l.type === 'g' ? (enc.genreById as Record<string, { title: string }>)[l.id]?.title : how.find((h) => h.id === l.id)?.title;
    return name ? [`${G.encyclopedia}: ${name}`, href('encyclopedia', l.type, l.id)] : null;
  };

  const filtered = useMemo(() => {
    const f = fold(q.trim());
    if (!f) return entries;
    return entries.filter((e) => fold(`${e.term} ${e.aka ?? ''} ${e.def}`).includes(f));
  }, [q, entries]);

  const groups = useMemo(() => {
    const m = new Map<string, GlossEntry[]>();
    for (const e of filtered) {
      const letter = fold(e.term.charAt(0)).toUpperCase();
      const key = /[A-Z]/.test(letter) ? 'A–Z' : letter;
      m.set(key, [...(m.get(key) ?? []), e]);
    }
    return [...m.entries()];
  }, [filtered]);

  useEffect(() => {
    if (termId) requestAnimationFrame(() => document.getElementById(`term-${termId}`)?.scrollIntoView({ block: 'center' }));
  }, [termId]);

  return (
    <div>
      <PageHeader kicker="Lumina" title={G.title} desc={G.desc} icon={<BookA className="w-4 h-4" />}>
        <p className="mt-3 text-xs text-stone-500">{G.count(entries.length)}</p>
      </PageHeader>
      <label className="relative block max-w-xl">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={G.search}
          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500/60"
        />
      </label>
      <nav className="mt-4 flex flex-wrap gap-1.5 text-xs">
        {groups.map(([letter]) => (
          <a
            key={letter}
            href={`#g-${letter}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(`g-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-2 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/50"
          >
            {letter}
          </a>
        ))}
      </nav>
      {filtered.length === 0 && <p className="mt-8 text-stone-400">{ui.enc.noResults}</p>}
      <div className="mt-6 space-y-8">
        {groups.map(([letter, items]) => (
          <section key={letter} id={`g-${letter}`} className="scroll-mt-28">
            <h2 className="text-2xl font-display font-bold text-amber-400 mb-3">{letter}</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map((e) => {
                const li = linkInfo(e.link);
                return (
                  <div
                    key={e.id}
                    id={`term-${e.id}`}
                    className={`scroll-mt-28 rounded-2xl bg-stone-900 border p-4 ${termId === e.id ? 'border-amber-500/70' : 'border-stone-800'}`}
                  >
                    <dt className="font-semibold text-stone-100">{e.term}</dt>
                    {e.aka && <p className="text-[11px] text-stone-500 mt-0.5">{e.aka}</p>}
                    <dd className="text-sm text-stone-300 mt-2 leading-relaxed">{e.def}</dd>
                    {li && (
                      <a href={li[1]} className="mt-2 inline-flex items-center gap-1 text-xs text-amber-400 hover:underline">
                        {li[0]}
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                );
              })}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
};
