import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href } from '../router';
import { PageHeader } from './PageHeader';
import { searchSite, rememberFind, type HitKind, type SearchHit } from '../data/searchIndex';

const KIND_TONE: Record<HitKind, string> = {
  chapter: 'text-amber-400 border-amber-500/40',
  lesson: 'text-emerald-400 border-emerald-500/40',
  photographer: 'text-sky-400 border-sky-500/40',
  movement: 'text-sky-300 border-sky-400/40',
  genre: 'text-sky-300 border-sky-400/40',
  howmade: 'text-purple-300 border-purple-400/40',
  glossary: 'text-rose-300 border-rose-400/40',
  community: 'text-cyan-300 border-cyan-400/40',
};

function Snippet({ hit }: { hit: SearchHit }) {
  const { text, at } = hit;
  if (at[0] < 0) return <>{text.length > 220 ? text.slice(0, 220) + '…' : text}</>;
  const from = Math.max(0, at[0] - 90);
  const to = Math.min(text.length, at[1] + 140);
  return (
    <>
      {from > 0 && '…'}
      {text.slice(from, at[0])}
      <mark className="bg-amber-500/25 text-amber-200 rounded px-0.5">{text.slice(at[0], at[1])}</mark>
      {text.slice(at[1], to)}
      {to < text.length && '…'}
    </>
  );
}

export const SearchPage: React.FC<{ q?: string }> = ({ q: initial }) => {
  const { ui, lang } = useLanguage();
  const S = ui.search;
  const [q, setQ] = useState(initial ?? '');
  const [kind, setKind] = useState<HitKind | 'all'>('all');
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  // keep the query in the link so results can be shared
  useEffect(() => {
    const t = setTimeout(() => {
      const target = q.trim() ? href('search', q.trim()) : href('search');
      if (window.location.hash !== target) history.replaceState(null, '', target);
    }, 300);
    return () => clearTimeout(t);
  }, [q]);

  const hits = useMemo(() => searchSite(lang, q), [lang, q]);
  const counts = useMemo(() => {
    const c: Partial<Record<HitKind, number>> = {};
    for (const h of hits) c[h.kind] = (c[h.kind] ?? 0) + 1;
    return c;
  }, [hits]);
  const shown = kind === 'all' ? hits : hits.filter((h) => h.kind === kind);

  return (
    <div>
      <PageHeader kicker="Lumina" title={S.title} desc={S.desc} icon={<Search className="w-4 h-4" />} />
      <label className="relative block max-w-2xl">
        <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
        <input
          ref={input}
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setKind('all');
          }}
          placeholder={S.placeholder}
          aria-label={S.title}
          className="w-full pl-11 pr-3 py-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-base text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500/60"
        />
      </label>

      {q.trim() && (
        <div className="mt-4 flex flex-wrap gap-1.5 text-xs">
          <button
            onClick={() => setKind('all')}
            className={`px-2.5 py-1 rounded-full border ${kind === 'all' ? 'bg-stone-100 text-stone-950 border-stone-100' : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'}`}
          >
            {S.all} {hits.length}
          </button>
          {(Object.keys(counts) as HitKind[]).map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`px-2.5 py-1 rounded-full border ${kind === k ? 'bg-stone-100 text-stone-950 border-stone-100' : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'}`}
            >
              {S.kinds[k]} {counts[k]}
            </button>
          ))}
        </div>
      )}

      {q.trim() && hits.length === 0 && <p className="mt-8 text-stone-400">{S.none}</p>}
      {!q.trim() && (
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="text-stone-500">{S.try}</span>
          {S.examples.map((x) => (
            <button key={x} onClick={() => setQ(x)} className="px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/50">
              {x}
            </button>
          ))}
        </div>
      )}

      <ol className="mt-6 space-y-2 max-w-4xl">
        {shown.map((h, i) => (
          <li key={i}>
            <a href={h.href} onClick={() => rememberFind(h.text)} className="group block rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded-full border ${KIND_TONE[h.kind]}`}>{S.kinds[h.kind]}</span>
                <span className="font-semibold text-stone-100 group-hover:text-amber-300">{h.title}</span>
                {h.where && <span className="text-stone-500">· {h.where}</span>}
                <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400 ml-auto" />
              </div>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                <Snippet hit={h} />
              </p>
            </a>
          </li>
        ))}
      </ol>
      {hits.length >= 120 && <p className="mt-4 text-xs text-stone-500">{S.more}</p>}
    </div>
  );
};
