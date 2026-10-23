import { SOURCES } from '../data/sources';
import { SOURCE_NAMES, SOURCE_NAMES_EN } from '../data/sourceNames';
import React from 'react';
import { GraduationCap, Library, Clock, Sliders, HelpCircle, Heart, Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href, navigate } from '../router';
import { PageHeader } from './PageHeader';
import { LearningLab } from '../components/LearningLab';
import { MasterclassTips } from '../components/MasterclassTips';
import { ExposureSimulator } from '../components/ExposureSimulator';
import { CompositionTool } from '../components/CompositionTool';
import { Timelines } from '../components/Timelines';
import { QuizReview } from '../components/QuizReview';

export const SchoolPage: React.FC<{ moduleId?: string; lessonId?: string }> = ({ moduleId, lessonId }) => {
  const { ui } = useLanguage();
  return (
    <div>
      <PageHeader kicker={ui.site.school} title={ui.pages.school.title} desc={ui.pages.school.desc} icon={<GraduationCap className="w-4 h-4" />} />
      <LearningLab moduleId={moduleId} lessonId={lessonId} onOpenSimulator={() => navigate(href('tools', 'exposure'))} onOpenComposition={() => navigate(href('tools', 'composition'))} />
      <div className="mt-16">
        <MasterclassTips
          onOpenSimulator={() => navigate(href('tools', 'exposure'))}
          onOpenComposition={() => navigate(href('tools', 'composition'))}
          onOpenLab={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
};

export const ToolsPage: React.FC<{ tool?: string }> = ({ tool }) => {
  const { ui } = useLanguage();
  React.useEffect(() => {
    if (tool) requestAnimationFrame(() => document.getElementById(`tool-${tool}`)?.scrollIntoView({ block: 'start' }));
  }, [tool]);
  return (
    <div>
      <PageHeader kicker={ui.site.tools} title={ui.pages.tools.title} desc={ui.pages.tools.desc} icon={<Sliders className="w-4 h-4" />} />
      <section id="tool-exposure" className="scroll-mt-24">
        <ExposureSimulator />
      </section>
      <section id="tool-composition" className="mt-16 scroll-mt-24">
        <CompositionTool />
      </section>
    </div>
  );
};

export const TimelinesPage: React.FC<{ tab?: string }> = ({ tab }) => {
  const { ui } = useLanguage();
  return (
    <div>
      <PageHeader kicker={ui.site.timelines} title={ui.pages.timelines.title} desc={ui.pages.timelines.desc} icon={<Clock className="w-4 h-4" />} />
      <Timelines tab={tab} />
    </div>
  );
};

export const QuizPage: React.FC = () => {
  const { ui } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader kicker={ui.site.quiz} title={ui.pages.quiz.title} desc={ui.pages.quiz.desc} icon={<HelpCircle className="w-4 h-4" />} />
      <QuizReview />
    </div>
  );
};

export const AboutPage: React.FC = () => {
  const { ui } = useLanguage();
  const A = ui.about;
  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader kicker="Lumina" title={A.title} desc={A.desc} icon={<Heart className="w-4 h-4" />} />
      <dl className="space-y-4">
        {A.credits.map(([role, who, what], i) => (
          <div key={role} className={`rounded-2xl border p-5 ${i === 0 ? 'bg-amber-500/10 border-amber-500/40' : 'bg-stone-900/70 border-stone-800'}`}>
            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">{role}</dt>
            <dd>
              <p className={`font-display font-bold text-stone-100 mt-1 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{who}</p>
              <p className="text-sm text-stone-400 mt-1.5 leading-relaxed">{what}</p>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm text-stone-500 flex gap-2">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        {A.note}
      </p>
      <SourcesBox />
    </div>
  );
};

/** All institutions and publications used as sources or for fact-checking, in small print */
const SourcesBox: React.FC = () => {
  const { ui, lang } = useLanguage();
  const A = ui.about;
  const groups = React.useMemo(() => {
    const m = new Map<string, { name: string; home: string; urls: string[] }>();
    for (const { host, urls } of SOURCES) {
      const name = (lang === 'en' && SOURCE_NAMES_EN[host]) || SOURCE_NAMES[host] || host;
      const g = m.get(name) ?? { name, home: `https://${host}`, urls: [] };
      g.urls.push(...urls);
      m.set(name, g);
    }
    return [...m.values()].sort((a, b) => a.name.localeCompare(b.name, lang));
  }, [lang]);
  const total = groups.reduce((n, g) => n + g.urls.length, 0);
  return (
    <section className="mt-8 rounded-2xl bg-stone-900/50 border border-stone-800 p-5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">{A.sourcesTitle}</h3>
      <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">{A.sourcesDesc}</p>
      <p className="mt-3 text-[11px] leading-relaxed text-stone-400">
        {groups.map((g, i) => (
          <React.Fragment key={g.name}>
            <a href={g.home} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              {g.name}
            </a>
            {i < groups.length - 1 && <span className="text-stone-600"> · </span>}
          </React.Fragment>
        ))}
      </p>
      <details className="mt-3">
        <summary className="cursor-pointer text-[11px] text-stone-500 hover:text-stone-300">{A.sourcesAll(total)}</summary>
        <ul className="mt-2 space-y-2 text-[10.5px] leading-snug text-stone-500">
          {groups.map((g) => (
            <li key={g.name}>
              <span className="text-stone-400">{g.name}</span>
              {g.urls.map((u) => (
                <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="block truncate hover:text-amber-300">
                  {u.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};

export const NotFoundPage: React.FC = () => {
  const { ui } = useLanguage();
  return (
    <div className="py-24 text-center">
      <p className="text-stone-400">{ui.site.notFound}</p>
      <a href="#/" className="inline-block mt-4 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-semibold text-sm">
        {ui.site.goHome}
      </a>
    </div>
  );
};
