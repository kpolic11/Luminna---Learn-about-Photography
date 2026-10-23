import React, { useMemo, useState } from 'react';
import { Users, ExternalLink, MapPin, Camera, Briefcase, Landmark, Archive, Newspaper, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href } from '../router';
import { PageHeader } from './PageHeader';
import { COMMUNITY, COMMUNITY_CHECKED, REGION_NAMES, type CommunityKind, type RegionId } from '../data/community';

const KIND_ICON: Record<CommunityKind, React.FC<{ className?: string }>> = {
  club: Camera,
  pro: Briefcase,
  museum: Landmark,
  archive: Archive,
  magazine: Newspaper,
  publisher: BookOpen,
};
const KINDS: CommunityKind[] = ['club', 'pro', 'museum', 'archive', 'magazine', 'publisher'];

export const CommunityPage: React.FC<{ region?: string }> = ({ region }) => {
  const { ui, lang } = useLanguage();
  const C = ui.community;
  const P = ui.pages.community;
  const [kind, setKind] = useState<CommunityKind | 'all'>('all');
  const regions = Object.keys(COMMUNITY) as RegionId[];
  const total = regions.reduce((n, r) => n + COMMUNITY[r].length, 0);

  const shown = useMemo(
    () =>
      regions
        .filter((r) => !region || r === region)
        .map((r) => [r, COMMUNITY[r].filter((x) => kind === 'all' || x.kind === kind)] as const)
        .filter(([, items]) => items.length > 0),
    [region, kind]
  );

  const [y, m] = COMMUNITY_CHECKED.split('-');
  const checked = lang === 'en' ? `${new Date(+y, +m - 1).toLocaleString('en', { month: 'long' })} ${y}` : `${m}/${y}`;

  return (
    <div>
      <PageHeader kicker="Lumina" title={P.title} desc={P.desc} icon={<Users className="w-4 h-4" />}>
        <p className="mt-3 text-xs text-stone-500">{C.count(total)}</p>
      </PageHeader>

      <nav aria-label={C.regions} className="flex flex-wrap gap-1.5 text-xs">
        <a href={href('community')} className={`px-2.5 py-1 rounded-lg border ${!region ? 'bg-amber-500 text-stone-950 border-amber-500' : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-600'}`}>
          {C.all}
        </a>
        {regions.map((r) => (
          <a
            key={r}
            href={href('community', r)}
            className={`px-2.5 py-1 rounded-lg border ${region === r ? 'bg-amber-500 text-stone-950 border-amber-500' : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-600'}`}
          >
            {REGION_NAMES[r][lang]} <span className="opacity-60">{COMMUNITY[r].length}</span>
          </a>
        ))}
      </nav>

      <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
        {(['all', ...KINDS] as const).map((k) => {
          const Icon = k === 'all' ? null : KIND_ICON[k];
          return (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`px-2.5 py-1 rounded-full border flex items-center gap-1 ${kind === k ? 'bg-stone-100 text-stone-950 border-stone-100' : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'}`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {k === 'all' ? C.all : C.kinds[k]}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-10">
        {shown.map(([r, items]) => (
          <section key={r} id={`region-${r}`}>
            <h2 className="text-xl font-display font-bold text-stone-100 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              {REGION_NAMES[r][lang]}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {items.map((x) => {
                const Icon = KIND_ICON[x.kind];
                return (
                  <li key={x.name}>
                    <a
                      href={x.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-3 h-full"
                      title={C.visit}
                    >
                      <span className="mt-0.5 w-8 h-8 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-stone-100 group-hover:text-amber-300">{lang === 'en' && x.nameEn ? x.nameEn : x.name}</span>
                        {lang === 'en' && x.nameEn && <span className="block text-xs text-stone-500" lang="el">{x.name}</span>}
                        <span className="block text-xs text-stone-500 mt-0.5">
                          {C.kinds[x.kind]} · {lang === 'en' ? x.cityEn : x.city}
                        </span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-400 shrink-0 mt-1" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-stone-800 bg-stone-900/60 p-4 text-xs text-stone-400 leading-relaxed max-w-3xl">
        <p>{C.note(checked)}</p>
        <p className="mt-2">
          <a href={href('about')} className="text-amber-400 hover:underline">
            {C.suggest}
          </a>
        </p>
      </div>
    </div>
  );
};
