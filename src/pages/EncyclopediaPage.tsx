import React, { useMemo, useState } from 'react';
import { Library, Search, ArrowLeft, ArrowRight, BookOpen, ExternalLink, Star, Route, Lightbulb, Target, Users, Eye, Images } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href } from '../router';
import { PageHeader } from './PageHeader';
import { SafeImage } from '../components/SafeImage';
import { getEncyclopedia, fold } from '../data/encyclopedia';
import type { Genre, GenreId, Movement, MovementId, Photographer } from '../data/encyclopedia/types';
import { useNarration } from '../narration';
import { getHowMade } from '../data/encyclopedia/howmade';
import { MORE_BY_GENRE, MORE_BY_MOVEMENT, type MoreName } from '../data/encyclopedia/more';

const TABS = ['start', 'movements', 'eras', 'genres', 'greek', 'howmade', 'az'] as const;
type Tab = (typeof TABS)[number];

/** Curated reading paths (ids in order) */
const PATHS: Record<string, string[]> = {
  top10: ['talbot', 'cameron', 'atget', 'stieglitz', 'adams', 'lange', 'cartier-bresson', 'frank', 'arbus', 'sherman'],
  street: ['atget', 'kertesz', 'brassai', 'cartier-bresson', 'model', 'maier', 'frank', 'klein', 'winogrand', 'moriyama'],
  portrait: ['hill-adamson', 'cameron', 'nadar', 'sander', 'penn', 'avedon', 'arbus', 'keita', 'sherman', 'muholi'],
  greek: ['margaritis', 'papazoglou', 'boissonnas', 'nellys', 'papaioannou', 'meletzis', 'harissiadis', 'manos', 'economopoulos', 'behrakis'],
  landscape: ['osullivan', 'muybridge', 'adams', 'weston', 'adams-robert', 'shore', 'burtynsky'],
  color: ['leiter', 'eggleston', 'shore', 'parr', 'goldin', 'gursky', 'wall'],
  women: ['cameron', 'kasebier', 'cunningham', 'lange', 'abbott', 'bourke-white', 'taro', 'model', 'arbus', 'maier', 'nellys', 'papaioannou', 'goldin', 'sherman', 'iturbide', 'weems', 'muholi'],
};

const ERA_OF = (born: number) => (born < 1870 ? 'e1' : born < 1910 ? 'e2' : born < 1940 ? 'e3' : 'e4');

const years = (p: Photographer, born: string) => (p.died ? `${p.born}–${p.died}` : `${born} ${p.born}`);

/* ------------------------------------------------------------------ */

export const EncyclopediaPage: React.FC<{ id?: string; sub?: string }> = ({ id, sub }) => {
  if (id === 'p' && sub) return <PhotographerView id={sub} />;
  if (id === 'm' && sub) return <MovementView id={sub as MovementId} />;
  if (id === 'g' && sub) return <GenreView id={sub as GenreId} />;
  if (id === 'h' && sub) return <HowMadeView id={sub} />;
  const tab: Tab = (TABS as readonly string[]).includes(id ?? '') ? (id as Tab) : 'start';
  return <EncyclopediaIndex tab={tab} />;
};

/* ------------------------------ Index ------------------------------ */

const EncyclopediaIndex: React.FC<{ tab: Tab }> = ({ tab }) => {
  const { ui, lang } = useLanguage();
  const E = ui.enc;
  const enc = getEncyclopedia(lang);

  return (
    <div>
      <PageHeader kicker={ui.site.encyclopedia} title={ui.pages.encyclopedia.title} desc={ui.pages.encyclopedia.desc} icon={<Library className="w-4 h-4" />}>
        <p className="mt-3 text-xs text-stone-500">
          {E.count(enc.photographers.length)} · {enc.movements.length} {E.tabs.movements.toLowerCase()} · {enc.genres.length} {E.tabs.genres.toLowerCase()} ·{' '}
          <a href={href('glossary')} className="text-amber-400 hover:underline">
            {ui.site.glossary}
          </a>
        </p>
      </PageHeader>

      <nav className="flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1" aria-label={ui.site.encyclopedia}>
        {TABS.map((t) => (
          <a
            key={t}
            href={href('encyclopedia', t === 'start' ? undefined : t)}
            aria-current={tab === t ? 'page' : undefined}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-colors ${
              tab === t ? 'bg-amber-500 text-stone-950 border-amber-500' : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-600'
            }`}
          >
            {E.tabs[t]}
          </a>
        ))}
      </nav>

      <div className="mt-8">
        {tab === 'start' && <StartTab />}
        {tab === 'movements' && <MovementsTab />}
        {tab === 'eras' && <ErasTab />}
        {tab === 'genres' && <GenresTab />}
        {tab === 'greek' && <GreekTab />}
        {tab === 'howmade' && <HowMadeTab />}
        {tab === 'az' && <AzTab />}
      </div>
    </div>
  );
};

const PhotographerCard: React.FC<{ p: Photographer; n?: number }> = ({ p, n }) => {
  const { ui } = useLanguage();
  const initials = p.latin
    .replace(/\(.*?\)/g, '')
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
  return (
    <a
      href={href('encyclopedia', 'p', p.id)}
      className="group flex gap-3 p-3.5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-colors min-w-0"
    >
      {p.image ? (
        <SafeImage src={p.image.url} alt="" loading="lazy" className="w-14 h-14 rounded-xl object-cover shrink-0 bg-stone-800" fallbackClassName="w-14 h-14 rounded-xl shrink-0" />
      ) : (
        <div className="w-14 h-14 rounded-xl shrink-0 bg-stone-800 border border-stone-700 flex items-center justify-center font-display text-lg text-amber-300/80">
          {n !== undefined ? n : initials}
        </div>
      )}
      <div className="min-w-0">
        <p className="font-semibold text-stone-100 group-hover:text-amber-300 leading-snug flex items-center gap-1.5">
          <span className="truncate">{p.name}</span>
          {p.tier === 'major' && <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-label={ui.enc.major} />}
        </p>
        <p className="text-xs text-stone-500 mt-0.5">
          {years(p, ui.enc.living)} · {p.nationality}
        </p>
        <p className="text-xs text-stone-400 mt-1 leading-relaxed line-clamp-2">{p.oneLine}</p>
      </div>
    </a>
  );
};

const Grid: React.FC<{ items: Photographer[]; numbered?: boolean }> = ({ items, numbered }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {items.map((p, i) => (
      <PhotographerCard key={p.id} p={p} n={numbered ? i + 1 : undefined} />
    ))}
  </div>
);

const StartTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const E = ui.enc;
  const enc = getEncyclopedia(lang);
  const [path, setPath] = useState(E.paths[0][0]);
  const cur = E.paths.find((p) => p[0] === path) ?? E.paths[0];
  const items = PATHS[path].map((id) => enc.byId[id]).filter(Boolean);
  return (
    <section>
      <h2 className="text-xl font-display font-bold text-stone-100 flex items-center gap-2">
        <Route className="w-5 h-5 text-amber-400" />
        {E.pathsTitle}
      </h2>
      <p className="text-sm text-stone-400 mt-1 max-w-2xl">{E.pathsDesc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {E.paths.map(([pid, title]) => (
          <button
            key={pid}
            onClick={() => setPath(pid)}
            aria-pressed={path === pid}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
              path === pid ? 'bg-amber-500 text-stone-950 border-amber-500' : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-600'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm italic font-serif-reading text-amber-300/90">{cur[2]}</p>
      <div className="mt-4">
        <Grid items={items} numbered />
      </div>

      <h2 className="mt-12 text-xl font-display font-bold text-stone-100 flex items-center gap-2">
        <Star className="w-5 h-5 text-amber-400" />
        {E.majors}
      </h2>
      <div className="mt-4">
        <Grid items={enc.photographers.filter((p) => p.tier === 'major').sort((a, b) => a.born - b.born)} />
      </div>
    </section>
  );
};

const MovementsTab: React.FC = () => {
  const { lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  return (
    <div className="space-y-4">
      {enc.movements.map((m) => {
        const ps = enc.photographers.filter((p) => p.movements.includes(m.id)).sort((a, b) => a.born - b.born);
        return (
          <article key={m.id} className="rounded-2xl bg-stone-900 border border-stone-800 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a href={href('encyclopedia', 'm', m.id)} className="text-lg font-display font-bold text-stone-100 hover:text-amber-300">
                {m.title}
              </a>
              <span className="text-xs font-mono text-amber-400">{m.years}</span>
            </div>
            <p className="text-sm text-stone-400 mt-1 font-serif-reading">{m.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ps.map((p) => (
                <a key={p.id} href={href('encyclopedia', 'p', p.id)} className="px-2.5 py-1 rounded-lg text-xs bg-stone-950 border border-stone-800 text-stone-300 hover:border-amber-500/50 hover:text-amber-300">
                  {p.name}
                </a>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};

const ErasTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  return (
    <div className="space-y-10">
      {ui.enc.eras.map(([eid, title, sub]) => {
        const items = enc.photographers.filter((p) => ERA_OF(p.born) === eid).sort((a, b) => a.born - b.born);
        return (
          <section key={eid}>
            <h2 className="text-xl font-display font-bold text-stone-100">
              {title} <span className="text-sm font-sans font-normal text-stone-500">· {sub} · {items.length}</span>
            </h2>
            <div className="mt-4">
              <Grid items={items} />
            </div>
          </section>
        );
      })}
    </div>
  );
};

const GenresTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {enc.genres.map((g) => {
        const n = enc.photographers.filter((p) => p.genres.includes(g.id)).length;
        return (
          <a key={g.id} href={href('encyclopedia', 'g', g.id)} className="rounded-2xl bg-stone-900 border border-stone-800 p-5 hover:border-amber-500/50 group">
            <p className="text-lg font-display font-bold text-stone-100 group-hover:text-amber-300">{g.title}</p>
            <p className="text-xs text-stone-500 mt-0.5">{ui.enc.count(n)}</p>
            <p className="text-sm text-stone-400 mt-2 font-serif-reading leading-relaxed">{g.summary}</p>
          </a>
        );
      })}
    </div>
  );
};

const GreekTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  const items = enc.photographers.filter((p) => p.genres.includes('greek')).sort((a, b) => a.born - b.born);
  return (
    <section>
      <p className="text-sm text-stone-400 max-w-2xl">
        {ui.enc.greekIntro}{' '}
        <a href={href('encyclopedia', 'g', 'greek')} className="text-amber-400 hover:underline">
          {enc.genreById.greek.title} →
        </a>
      </p>
      <div className="mt-4">
        <Grid items={items} />
      </div>
    </section>
  );
};

const AzTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  const [q, setQ] = useState('');
  const index = useMemo(
    () =>
      enc.photographers.map((p) => ({
        p,
        hay: fold(
          [p.name, p.latin, p.handle ?? '', p.nationality, p.oneLine, ...p.works.map((w) => w.title), ...p.movements.map((m) => enc.movementById[m]?.title ?? ''), ...p.genres.map((g) => enc.genreById[g]?.title ?? '')].join(' ')
        ),
      })),
    [enc]
  );
  const sorted = useMemo(() => {
    const coll = new Intl.Collator(lang);
    const words = fold(q).split(/\s+/).filter(Boolean);
    return index
      .filter((x) => words.every((w) => x.hay.includes(w)))
      .map((x) => x.p)
      .sort((a, b) => coll.compare(sortKey(a), sortKey(b)));
  }, [index, q, lang]);

  const groups = useMemo(() => {
    const m = new Map<string, Photographer[]>();
    for (const p of sorted) {
      const L = fold(sortKey(p)).charAt(0).toUpperCase();
      m.set(L, [...(m.get(L) ?? []), p]);
    }
    return [...m.entries()];
  }, [sorted]);

  return (
    <section>
      <label className="relative block max-w-xl">
        <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={ui.enc.search}
          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
        />
      </label>
      {!sorted.length && <p className="mt-6 text-sm text-stone-400">{ui.enc.noResults}</p>}
      <div className="mt-6 space-y-8">
        {groups.map(([L, items]) => (
          <div key={L}>
            <h3 className="text-2xl font-display font-bold text-amber-400/90 mb-3">{L}</h3>
            <Grid items={items} />
          </div>
        ))}
      </div>
    </section>
  );
};

/** Sort by surname (last word of the display name, ignoring parentheses) */
function sortKey(p: Photographer): string {
  const base = p.name.replace(/\(.*?\)/g, '').replace(/&.*$/, '').trim();
  const parts = base.split(/\s+/);
  return parts.length > 1 ? parts[parts.length - 1] + ' ' + parts.slice(0, -1).join(' ') : base;
}

/* --------------------------- Entry pages --------------------------- */

const Breadcrumb: React.FC<{ items: [string, string?][] }> = ({ items }) => (
  <nav className="pt-6 text-xs text-stone-500 flex flex-wrap items-center gap-1.5">
    {items.map(([label, to], i) => (
      <React.Fragment key={i}>
        {i > 0 && <span>›</span>}
        {to ? (
          <a href={to} className="hover:text-amber-400">
            {label}
          </a>
        ) : (
          <span className="text-stone-400">{label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

const Section: React.FC<{ id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-28 mt-10">
    <h2 className="text-xl md:text-2xl font-display font-bold text-stone-100 flex items-center gap-2 mb-4">
      {icon}
      {title}
    </h2>
    {children}
  </section>
);

const Prose: React.FC<{ paras: string[] }> = ({ paras }) => (
  <div className="space-y-4 text-stone-300 text-base md:text-lg leading-relaxed font-serif-reading">
    {paras.map((t, i) => (
      <p key={i}>{t}</p>
    ))}
  </div>
);

const NotFound: React.FC = () => {
  const { ui } = useLanguage();
  return (
    <div className="py-20 text-center">
      <p className="text-stone-400">{ui.enc.notFound}</p>
      <a href={href('encyclopedia')} className="mt-4 inline-block text-amber-400 hover:underline">
        ← {ui.enc.back}
      </a>
    </div>
  );
};

const PhotographerView: React.FC<{ id: string }> = ({ id }) => {
  const { ui, lang, content } = useLanguage();
  const E = ui.enc;
  const enc = getEncyclopedia(lang);
  const p = enc.byId[id];

  useNarration(
    p
      ? {
          id: 'enc-' + p.id,
          title: p.name,
          subtitle: p.oneLine,
          sections: [
            { heading: E.life, paragraphs: p.life },
            { heading: E.style, paragraphs: p.style },
            { heading: E.works, paragraphs: p.works.map((w) => `${w.title}, ${w.year}. ${w.note}`) },
            { heading: E.learn, paragraphs: p.learn },
          ],
        }
      : null
  );

  if (!p) return <NotFound />;

  const chrono = [...enc.photographers].sort((a, b) => a.born - b.born || a.id.localeCompare(b.id));
  const i = chrono.findIndex((x) => x.id === p.id);
  const prev = chrono[i - 1];
  const next = chrono[i + 1];
  const chapter = p.chapter ? content.chapters.find((c) => c.id === p.chapter) : undefined;
  const toc: [string, string][] = [
    ...(p.glance?.length ? ([['glance', E.glance]] as [string, string][]) : []),
    ['life', E.life],
    ['style', E.style],
    ['works', E.works],
    ['learn', E.learn],
    ...(p.exercise ? ([['exercise', E.exercise]] as [string, string][]) : []),
    ['related', E.related],
  ];

  return (
    <article className="max-w-4xl mx-auto">
      <Breadcrumb items={[[E.back, href('encyclopedia')], [p.name]]} />
      <header className="pt-6 pb-8 border-b border-stone-800">
        <div className="flex flex-col sm:flex-row gap-6">
          {p.image && (
            <figure className="sm:w-56 shrink-0">
              <SafeImage src={p.image.url} alt={p.name} className="w-full aspect-[4/5] object-cover rounded-2xl border border-stone-800 bg-stone-900" />
              <figcaption className="text-[11px] text-stone-500 mt-1.5 leading-snug">
                {E.imageCredit}: {p.image.credit}
              </figcaption>
            </figure>
          )}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 flex items-center gap-2">
              <Users className="w-4 h-4" />
              {p.nationality} · {years(p, E.living)}
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-display font-bold text-stone-100 leading-tight">{p.name}</h1>
            <p className="mt-1 text-sm text-stone-500">
              {p.latin}
              {p.handle && (
                <>
                  {' '}({E.knownAs}{' '}
                  <a href={`https://www.instagram.com/${p.handle}/`} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
                    @{p.handle}
                  </a>
                  )
                </>
              )}
            </p>
            <p className="mt-4 text-lg text-stone-300 font-serif-reading italic leading-relaxed">{p.oneLine}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.movements.map((m) => (
                <a key={m} href={href('encyclopedia', 'm', m)} className="px-2.5 py-1 rounded-lg text-xs bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20">
                  {enc.movementById[m]?.title}
                </a>
              ))}
              {p.genres.map((g) => (
                <a key={g} href={href('encyclopedia', 'g', g)} className="px-2.5 py-1 rounded-lg text-xs bg-stone-900 border border-stone-700 text-stone-300 hover:border-stone-500">
                  {enc.genreById[g]?.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {toc.map(([a, label]) => (
            <a
              key={a}
              href={`#enc-${a}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`enc-${a}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-stone-400 hover:text-amber-400"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {p.glance && p.glance.length > 0 && (
        <Section id="enc-glance" title={E.glance} icon={<Eye className="w-5 h-5 text-amber-400" />}>
          <ul className="grid sm:grid-cols-2 gap-2">
            {p.glance.map((g, k) => (
              <li key={k} className="rounded-xl bg-stone-900 border border-stone-800 px-4 py-3 text-sm text-stone-200">
                {g}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="enc-life" title={E.life}>
        <Prose paras={p.life} />
      </Section>

      <Section id="enc-style" title={E.style}>
        <Prose paras={p.style} />
      </Section>

      <Section id="enc-works" title={E.works} icon={<Images className="w-5 h-5 text-amber-400" />}>
        <div className="space-y-3">
          {p.works.map((w, k) => (
            <div key={k} className="rounded-2xl bg-stone-900 border border-stone-800 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-stone-100">{w.title}</p>
                <span className="text-xs font-mono text-amber-400">{w.year}</span>
              </div>
              <p className="text-sm text-stone-400 mt-1 leading-relaxed">{w.note}</p>
              <a
                href={w.url ?? `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${p.latin.replace(/\(.*?\)/g, '')} ${w.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-amber-400 hover:underline"
              >
                {E.seeWork}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-stone-500 mt-3">{E.seeWorkNote}</p>
      </Section>

      <Section id="enc-learn" title={E.learn} icon={<Lightbulb className="w-5 h-5 text-amber-400" />}>
        <ul className="space-y-2">
          {p.learn.map((l, k) => (
            <li key={k} className="flex gap-2 text-stone-200">
              <span className="text-amber-400 mt-0.5">•</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Section>

      {p.exercise && (
        <Section id="enc-exercise" title={`${E.exercise}: ${p.exercise.title}`} icon={<Target className="w-5 h-5 text-emerald-400" />}>
          <ol className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-5 space-y-2">
            {p.exercise.steps.map((st, k) => (
              <li key={k} className="flex gap-3 text-stone-200 text-sm">
                <span className="font-mono text-emerald-400 shrink-0">{k + 1}.</span>
                <span>{st}</span>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {chapter && (
        <a href={href('history', chapter.id)} className="mt-10 flex items-center gap-3 rounded-2xl bg-stone-900 border border-stone-800 p-4 hover:border-amber-500/50">
          <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm text-stone-300">
            {E.chapter}: <strong className="text-stone-100">{chapter.number}. {chapter.title}</strong>
          </span>
        </a>
      )}

      <Section id="enc-related" title={E.related}>
        <Grid items={p.related.map((r) => enc.byId[r]).filter(Boolean)} />
      </Section>

      {p.sources && p.sources.length > 0 && (
        <Section id="enc-sources" title={E.sources}>
          <ul className="space-y-1.5 text-sm">
            {p.sources.map((s, k) => (
              <li key={k}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                  {s.title}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <nav className="mt-12 pt-6 border-t border-stone-800 grid grid-cols-2 gap-3">
        <div>
          {prev && (
            <a href={href('encyclopedia', 'p', prev.id)} className="group block rounded-xl p-3 hover:bg-stone-900">
              <span className="text-xs text-stone-500 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                {E.prev}
              </span>
              <span className="text-sm font-semibold text-stone-200 group-hover:text-amber-300">{prev.name}</span>
            </a>
          )}
        </div>
        <div className="text-right">
          {next && (
            <a href={href('encyclopedia', 'p', next.id)} className="group block rounded-xl p-3 hover:bg-stone-900">
              <span className="text-xs text-stone-500 flex items-center justify-end gap-1">
                {E.next}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-semibold text-stone-200 group-hover:text-amber-300">{next.name}</span>
            </a>
          )}
        </div>
      </nav>
    </article>
  );
};

const GroupView: React.FC<{
  kind: 'movement' | 'genre';
  item: Movement | Genre;
  people: Photographer[];
  years?: string;
  traits?: string[];
  others: { id: string; title: string }[];
  more?: MoreName[];
}> = ({ kind, item, people, years: yrs, traits, others, more }) => {
  const { ui } = useLanguage();
  const E = ui.enc;
  return (
    <article className="max-w-4xl mx-auto">
      <Breadcrumb items={[[E.back, href('encyclopedia')], [kind === 'movement' ? E.tabs.movements : E.tabs.genres, href('encyclopedia', kind === 'movement' ? 'movements' : 'genres')], [item.title]]} />
      <PageHeader kicker={`${kind === 'movement' ? E.movement : E.genre}${yrs ? ' · ' + yrs : ''}`} title={item.title} desc={item.summary} />
      <Prose paras={item.body} />
      {traits && traits.length > 0 && (
        <Section id="enc-traits" title={E.traits}>
          <ul className="grid sm:grid-cols-2 gap-2">
            {traits.map((t, k) => (
              <li key={k} className="rounded-xl bg-stone-900 border border-stone-800 px-4 py-3 text-sm text-stone-200">
                {t}
              </li>
            ))}
          </ul>
        </Section>
      )}
      <Section id="enc-people" title={`${E.photographersIn} (${people.length})`}>
        <Grid items={people} />
      </Section>
      {more && more.length > 0 && (
        <Section id="enc-more" title={`${E.more} (${more.length})`}>
          <p className="text-xs text-stone-500 mb-3 max-w-3xl">{E.moreNote}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            {more.map(([n, y, c, h]) => (
              <li key={n} className="flex items-center justify-between gap-2 border-b border-stone-900 py-1.5 text-sm">
                <span className="min-w-0">
                  <span className="text-stone-200">{n}</span>
                  {h && (
                    <a href={`https://www.instagram.com/${h}/`} target="_blank" rel="noreferrer" className="text-amber-400/80 hover:underline text-xs">
                      {' '}(@{h})
                    </a>
                  )}
                  <span className="text-stone-500 text-xs">
                    {' '}· {y ? `${y} · ` : ''}
                    {c}
                  </span>
                </span>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(`"${n.replace(/\s*\(.*?\)/g, '')}" photographer`)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${E.moreSearch}: ${n}`}
                  title={E.moreSearch}
                  className="shrink-0 p-1 rounded-md text-stone-500 hover:text-amber-400 hover:bg-stone-900"
                >
                  <Search className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
      <Section id="enc-others" title={kind === 'movement' ? E.allMovements : E.allGenres}>
        <div className="flex flex-wrap gap-1.5">
          {others.map((o) => (
            <a
              key={o.id}
              href={href('encyclopedia', kind === 'movement' ? 'm' : 'g', o.id)}
              className={`px-2.5 py-1 rounded-lg text-xs border ${
                o.id === item.id ? 'bg-amber-500 text-stone-950 border-amber-500' : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-600'
              }`}
            >
              {o.title}
            </a>
          ))}
        </div>
      </Section>
    </article>
  );
};

/** Drop names that already have a full entry; sort by birth year */
function moreFor(list: MoreName[] | undefined, people: Photographer[]): MoreName[] | undefined {
  if (!list) return undefined;
  const have = new Set(people.map((p) => fold(p.latin)));
  return list.filter(([n]) => !have.has(fold(n))).sort((a, b) => (parseInt(a[1]) || 9999) - (parseInt(b[1]) || 9999));
}

const MovementView: React.FC<{ id: MovementId }> = ({ id }) => {
  const { ui, lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  const m = enc.movementById[id];
  useNarration(m ? { id: 'mov-' + m.id, title: m.title, subtitle: m.summary, sections: [{ paragraphs: m.body }, { heading: ui.enc.traits, paragraphs: m.traits }] } : null);
  if (!m) return <NotFound />;
  const people = enc.photographers.filter((p) => p.movements.includes(id)).sort((a, b) => a.born - b.born);
  return <GroupView kind="movement" item={m} people={people} years={m.years} traits={m.traits} others={enc.movements} more={moreFor(MORE_BY_MOVEMENT[id], people)} />;
};

const GenreView: React.FC<{ id: GenreId }> = ({ id }) => {
  const { lang } = useLanguage();
  const enc = getEncyclopedia(lang);
  const g = enc.genreById[id];
  useNarration(g ? { id: 'gen-' + g.id, title: g.title, subtitle: g.summary, sections: [{ paragraphs: g.body }] } : null);
  if (!g) return <NotFound />;
  const people = enc.photographers.filter((p) => p.genres.includes(id)).sort((a, b) => a.born - b.born);
  return <GroupView kind="genre" item={g} people={people} others={enc.genres} more={moreFor(MORE_BY_GENRE[id], people)} />;
};


/* --------------------------- How it was made --------------------------- */

const HowMadeTab: React.FC = () => {
  const { ui, lang } = useLanguage();
  const H = ui.enc.how;
  const items = getHowMade(lang);
  return (
    <div>
      <p className="max-w-3xl text-stone-300 font-serif-reading leading-relaxed">{H.intro}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((h, i) => (
          <a key={h.id} href={href('encyclopedia', 'h', h.id)} className="group rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden hover:border-amber-500/50">
            <div className="aspect-[4/3] bg-stone-950 overflow-hidden">
              <SafeImage src={h.images[h.images.length - 1].url} alt={h.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-[11px] font-mono text-amber-400">
                {String(i + 1).padStart(2, '0')} · {h.photographerName} · {h.year}
              </p>
              <p className="font-display font-bold text-lg text-stone-100 mt-1 group-hover:text-amber-300">{h.title}</p>
              <p className="text-sm text-stone-400 mt-1 leading-snug">{h.oneLine}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const HowMadeView: React.FC<{ id: string }> = ({ id }) => {
  const { ui, lang, content } = useLanguage();
  const E = ui.enc;
  const H = E.how;
  const items = getHowMade(lang);
  const i = items.findIndex((x) => x.id === id);
  const h = items[i];
  const enc = getEncyclopedia(lang);

  useNarration(
    h
      ? {
          id: 'how-' + h.id,
          title: h.title,
          subtitle: `${h.photographerName}, ${h.year}. ${h.oneLine}`,
          sections: [
            { heading: H.context, paragraphs: h.context },
            { heading: H.technique, paragraphs: h.technique },
            { heading: H.decisions, paragraphs: h.decisions },
            { heading: E.learn, paragraphs: h.learn },
          ],
        }
      : null
  );

  if (!h) return <NotFound />;
  const prev = items[i - 1];
  const next = items[i + 1];
  const chapter = h.chapter ? content.chapters.find((c) => c.id === h.chapter) : undefined;
  const ph = enc.byId[h.photographer];
  const many = h.images.length > 1;

  return (
    <article className="max-w-4xl mx-auto">
      <Breadcrumb items={[[E.back, href('encyclopedia')], [E.tabs.howmade, href('encyclopedia', 'howmade')], [h.title]]} />
      <header className="pt-6 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          {E.tabs.howmade} · {h.photographerName} · {h.year}
        </p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-display font-bold text-stone-100 leading-tight">{h.title}</h1>
        <p className="mt-4 text-lg text-stone-300 font-serif-reading italic leading-relaxed">{h.oneLine}</p>
      </header>

      <div className={h.images.length === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-3' : many ? 'grid grid-cols-2 md:grid-cols-4 gap-3' : ''}>
        {h.images.map((im, k) => (
          <figure key={k} className={many && h.images.length > 2 && k === h.images.length - 1 ? 'col-span-full' : ''}>
            <SafeImage
              src={im.url}
              alt={h.captions[k] ?? h.title}
              className={`w-full rounded-2xl border border-stone-800 bg-stone-900 ${many && h.images.length > 2 && k < h.images.length - 1 ? 'aspect-square object-cover' : 'max-h-[70vh] object-contain'}`}
              loading={k > 0 ? 'lazy' : undefined}
            />
            <figcaption className="text-[11px] text-stone-500 mt-1.5 leading-snug">
              {many && <span className="font-mono text-amber-400 mr-1">{k + 1}.</span>}
              {h.captions[k]} <span className="text-stone-600">· {im.credit}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Section id="how-context" title={H.context}>
        <Prose paras={h.context} />
      </Section>
      <Section id="how-technique" title={H.technique}>
        <Prose paras={h.technique} />
      </Section>
      <Section id="how-decisions" title={H.decisions} icon={<Eye className="w-5 h-5 text-amber-400" />}>
        <ul className="space-y-3">
          {h.decisions.map((d, k) => (
            <li key={k} className="rounded-xl bg-stone-900 border border-stone-800 px-4 py-3 text-stone-200 font-serif-reading leading-relaxed">
              {d}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="how-learn" title={E.learn} icon={<Lightbulb className="w-5 h-5 text-amber-400" />}>
        <ul className="space-y-2">
          {h.learn.map((l, k) => (
            <li key={k} className="flex gap-2 text-stone-200">
              <span className="text-amber-400 mt-0.5">•</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="how-exercise" title={`${E.exercise}: ${h.exercise.title}`} icon={<Target className="w-5 h-5 text-emerald-400" />}>
        <ol className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-5 space-y-2">
          {h.exercise.steps.map((st, k) => (
            <li key={k} className="flex gap-3 text-stone-200 text-sm">
              <span className="font-mono text-emerald-400 shrink-0">{k + 1}.</span>
              <span>{st}</span>
            </li>
          ))}
        </ol>
      </Section>

      <div className="mt-10 grid sm:grid-cols-2 gap-3">
        {ph && (
          <a href={href('encyclopedia', 'p', ph.id)} className="flex items-center gap-3 rounded-2xl bg-stone-900 border border-stone-800 p-4 hover:border-amber-500/50">
            <Users className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-sm text-stone-300">
              {H.photographer}: <strong className="text-stone-100">{ph.name}</strong>
            </span>
          </a>
        )}
        {chapter && (
          <a href={href('history', chapter.id)} className="flex items-center gap-3 rounded-2xl bg-stone-900 border border-stone-800 p-4 hover:border-amber-500/50">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-sm text-stone-300">
              {E.chapter}: <strong className="text-stone-100">{chapter.number}. {chapter.title}</strong>
            </span>
          </a>
        )}
      </div>

      <Section id="how-sources" title={E.sources}>
        <ul className="space-y-1.5 text-sm">
          {h.sources.map((s, k) => (
            <li key={k}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline inline-flex items-center gap-1">
                {s.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <nav className="mt-12 pt-6 border-t border-stone-800 grid grid-cols-2 gap-3">
        <div>
          {prev && (
            <a href={href('encyclopedia', 'h', prev.id)} className="group block rounded-xl p-3 hover:bg-stone-900">
              <span className="text-xs text-stone-500 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                {E.prev}
              </span>
              <span className="text-sm font-semibold text-stone-200 group-hover:text-amber-300">{prev.title}</span>
            </a>
          )}
        </div>
        <div className="text-right">
          {next && (
            <a href={href('encyclopedia', 'h', next.id)} className="group block rounded-xl p-3 hover:bg-stone-900">
              <span className="text-xs text-stone-500 flex items-center justify-end gap-1">
                {E.next}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-semibold text-stone-200 group-hover:text-amber-300">{next.title}</span>
            </a>
          )}
        </div>
      </nav>
    </article>
  );
};
