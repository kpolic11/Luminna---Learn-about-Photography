import React, { useEffect, useMemo, useState } from 'react';
import {
  FlaskConical, Sun, Grid3X3, CheckCircle2, Circle, ChevronLeft, ChevronRight, Lightbulb, Target, Smartphone, ListChecks, MapPin,
  Aperture, Focus, Gauge, Shapes, ScanSearch, SlidersHorizontal, Eye, Palette, BookOpen, Camera, Cpu, RectangleHorizontal, Crosshair,
  Timer, Zap, Pipette, WandSparkles, Layers, Moon, Lamp, Users, Brush, FolderTree, Printer, Briefcase, Wrench, Sparkles, Trophy, ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lesson, LessonModule, ModuleKind, SchoolLevel } from '../data/types';
import type { Module } from '../data';
import { getEncyclopedia } from '../data/encyclopedia';
import { href } from '../router';
import { LessonDiagram, HAS_DIAGRAM } from './lab/LessonDiagram';
import {
  StopsWidget, EquivalentWidget, HistogramWidget, MeteringWidget, WhiteBalanceWidget, ModesWidget, DofWidget, FocalWidget, LightDirWidget,
} from './lab/LabWidgets';
import { NoiseWidget, DiffractionWidget, InverseSquareWidget, AspectWidget, ColorWheelWidget } from './lab/LabWidgets2';
import { QuizReview } from './QuizReview';
import { PlacementTest } from './lab/PlacementTest';
import { useNarration } from '../narration';

const STORE = 'lumina.lab.learned';
const STORE_CANDO = 'lumina.lab.cando';
const capFirst = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

function readJSON(key: string): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function writeJSON(key: string, v: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(v));
  } catch {
    /* ignore */
  }
}

const WIDGETS: Record<NonNullable<Lesson['widget']>, React.FC<{ lessonId?: string }>> = {
  dof: DofWidget,
  focal: FocalWidget,
  lightdir: LightDirWidget,
  stops: StopsWidget,
  equivalent: EquivalentWidget,
  histogram: HistogramWidget,
  metering: MeteringWidget,
  whitebalance: WhiteBalanceWidget,
  modes: ModesWidget,
  noise: NoiseWidget,
  diffraction: DiffractionWidget,
  inverse: InverseSquareWidget,
  aspect: AspectWidget,
  colorwheel: ColorWheelWidget,
};

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  Sun, Aperture, Grid3X3, Eye, Focus, Gauge, Shapes, ScanSearch, Palette, SlidersHorizontal, BookOpen, Camera, Cpu, RectangleHorizontal,
  Crosshair, Timer, Zap, Pipette, WandSparkles, Layers, Moon, Lamp, Users, Brush, FolderTree, Printer, Briefcase, Wrench, Sparkles,
};

const KIND_STYLE: Record<ModuleKind, { on: string; off: string; dot: string }> = {
  tech: { on: 'bg-amber-500 text-stone-950 border-amber-500', off: 'border-amber-500/30 hover:border-amber-500/70', dot: 'bg-amber-400' },
  eye: { on: 'bg-purple-500 text-stone-950 border-purple-500', off: 'border-purple-500/30 hover:border-purple-500/70', dot: 'bg-purple-400' },
  practice: { on: 'bg-emerald-500 text-stone-950 border-emerald-500', off: 'border-emerald-500/30 hover:border-emerald-500/70', dot: 'bg-emerald-400' },
  pro: { on: 'bg-sky-500 text-stone-950 border-sky-500', off: 'border-sky-500/30 hover:border-sky-500/70', dot: 'bg-sky-400' },
};

interface LearningLabProps {
  moduleId?: string;
  lessonId?: string;
  onOpenSimulator?: () => void;
  onOpenComposition?: () => void;
}

export const LearningLab: React.FC<LearningLabProps> = ({ moduleId, lessonId, onOpenSimulator, onOpenComposition }) => {
  const { ui, content, lang } = useLanguage();
  const L = ui.lab;
  const S = ui.school;
  const enc = useMemo(() => getEncyclopedia(lang), [lang]);
  const modules = content.modules;
  const modById = useMemo(() => Object.fromEntries(modules.map((m) => [m.id, m])) as Record<string, Module>, [modules]);

  const initialModule = (moduleId && modById[moduleId] ? moduleId : modules[0]?.id) as LessonModule;
  const [track, setTrack] = useState<LessonModule>(initialModule);
  const mod = modById[track] ?? modules[0];
  const lessons = mod?.lessons ?? [];
  const [idx, setIdx] = useState(() => Math.max(0, lessons.findIndex((l) => l.id === lessonId)));
  const [level, setLevel] = useState<SchoolLevel>(mod?.level ?? 1);
  const [learned, setLearned] = useState<Record<string, boolean>>(() => readJSON(STORE));
  const [cando, setCando] = useState<Record<string, boolean>>(() => readJSON(STORE_CANDO));

  // Follow external links (#/school/<module>/<lesson>)
  useEffect(() => {
    if (moduleId && modById[moduleId]) {
      setTrack(moduleId as LessonModule);
      setLevel(modById[moduleId].level);
      const i = modById[moduleId].lessons.findIndex((l) => l.id === lessonId);
      setIdx(Math.max(0, i));
      requestAnimationFrame(() => document.getElementById(lessonId ? 'lab-lesson' : 'lab-modules')?.scrollIntoView({ block: 'start' }));
    }
  }, [moduleId, lessonId, modById]);

  useEffect(() => writeJSON(STORE, learned), [learned]);
  useEffect(() => writeJSON(STORE_CANDO, cando), [cando]);

  const lesson = lessons[Math.min(idx, lessons.length - 1)];

  // Keep the address bar shareable without re-rendering the page
  useEffect(() => {
    if (!lesson) return;
    const to = href('school', track, lesson.id);
    if (window.location.hash !== to) {
      try {
        window.history.replaceState(null, '', to);
      } catch {
        /* ignore */
      }
    }
  }, [track, lesson]);

  useNarration(
    lesson
      ? {
          id: 'lesson-' + lesson.id,
          title: lesson.title,
          subtitle: lesson.tagline,
          sections: [
            ...(lesson.quick ? [{ heading: S.quick, paragraphs: [lesson.quick] }] : []),
            { paragraphs: lesson.body },
            ...(lesson.bullets?.length ? [{ paragraphs: lesson.bullets }] : []),
            ...(lesson.mistakes?.length ? [{ heading: S.mistakes, paragraphs: lesson.mistakes }] : []),
            ...(lesson.phone ? [{ heading: S.phone, paragraphs: [lesson.phone] }] : []),
            { heading: L.keyIdea, paragraphs: [lesson.keyIdea] },
            { heading: L.tryIt, paragraphs: [lesson.tryIt] },
            ...(lesson.challenge ? [{ heading: S.challenge, paragraphs: [lesson.challenge] }] : []),
          ],
        }
      : null
  );

  if (!mod || !lesson) return null;
  const Widget = lesson.widget ? WIDGETS[lesson.widget] : null;
  const doneCount = lessons.filter((l) => learned[l.id]).length;
  const levelMods = modules.filter((m) => m.level === level);
  const levelText = content.levels[level];
  const orderedIdx = modules.findIndex((m) => m.id === mod.id);
  const nextMod = modules[orderedIdx + 1];
  const levelCount = (lv: SchoolLevel) => {
    const ls = modules.filter((m) => m.level === lv).flatMap((m) => m.lessons);
    return [ls.filter((l) => learned[l.id]).length, ls.length] as const;
  };

  const go = (i: number) => {
    setIdx(i);
    document.getElementById('lab-lesson')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const openModule = (id: LessonModule, scroll = false) => {
    setTrack(id);
    setLevel(modById[id].level);
    setIdx(0);
    if (scroll) requestAnimationFrame(() => document.getElementById('lab-modules')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const openLevel = (lv: SchoolLevel) => {
    setLevel(lv);
    const first = modules.find((m) => m.level === lv);
    if (first) openModule(first.id);
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-3xl p-5 md:p-8 shadow-2xl">
      <div className="pb-5 border-b border-stone-800 max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <FlaskConical className="w-3.5 h-3.5" />
          {L.badge}
        </span>
        <h3 className="text-xl md:text-3xl font-display font-bold text-stone-100 mt-2">{L.title}</h3>
        <p className="text-sm text-stone-400 mt-1 leading-relaxed">{L.desc}</p>
        <a href={href('glossary')} className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline">
          <BookOpen className="w-3.5 h-3.5" />
          {ui.site.glossary}
        </a>
        <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-stone-400">
          {(Object.keys(KIND_STYLE) as ModuleKind[]).map((k) => (
            <span key={k} className="inline-flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${KIND_STYLE[k].dot}`} />
              {S.kinds[k]}
            </span>
          ))}
        </div>
      </div>

      <PlacementTest
        levelName={(lv) => content.levels[lv].name}
        moduleTitle={(id) => modById[id]?.title}
        onGoLevel={(lv) => {
          openLevel(lv);
          requestAnimationFrame(() => document.getElementById('lab-modules')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        }}
        onGoModule={(id) => modById[id] && openModule(id, true)}
      />

      {/* Levels */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {([1, 2, 3, 4] as const).map((lv) => {
          const [d, t] = levelCount(lv);
          const active = lv === level;
          return (
            <button
              key={lv}
              onClick={() => openLevel(lv)}
              aria-pressed={active}
              data-level={lv}
              className={`text-left rounded-2xl p-4 border transition-colors min-w-0 ${
                active ? 'bg-stone-950 border-amber-500/70' : 'bg-stone-950/40 border-stone-800 hover:border-stone-600'
              }`}
            >
              <p className="text-[11px] font-mono text-amber-400">{S.level(lv)}</p>
              <p className="font-display font-bold text-stone-100 leading-tight mt-0.5">{content.levels[lv].name}</p>
              <div className="h-1 rounded-full bg-stone-800 overflow-hidden mt-3">
                <div className="h-full bg-amber-500" style={{ width: `${t ? (d / t) * 100 : 0}%` }} />
              </div>
              <p className="text-[11px] text-stone-500 mt-1">{L.learned(d, t)}</p>
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-stone-400 font-serif-reading">{levelText.who}</p>

      {/* Modules of this level */}
      <div id="lab-modules" className="scroll-mt-28 mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">{S.modulesIn}</p>
        <div className="flex flex-wrap gap-2">
          {levelMods.map((m) => {
            const Icon = ICONS[m.icon] ?? Circle;
            const on = m.id === track;
            const done = m.lessons.length > 0 && m.lessons.every((l) => learned[l.id]);
            return (
              <button
                key={m.id}
                data-module={m.id}
                onClick={() => openModule(m.id)}
                aria-pressed={on}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors inline-flex items-center gap-1.5 ${
                  on ? KIND_STYLE[m.kind].on : `bg-stone-950 text-stone-300 ${KIND_STYLE[m.kind].off}`
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {m.title}
                <span className="opacity-60 font-normal">· {m.lessons.length}</span>
                {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-sm text-stone-300 font-serif-reading">{mod.desc}</p>
        {mod.requires && mod.requires.filter((r) => modById[r]).length > 0 && (
          <p className="text-xs text-stone-400 flex flex-wrap items-center gap-1.5">
            <span>{S.requires}</span>
            {mod.requires
              .filter((r) => modById[r])
              .map((r) => (
                <button key={r} onClick={() => openModule(r, true)} className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-300">
                  {modById[r].title}
                  {modById[r].lessons.every((l) => learned[l.id]) ? ' ✓' : ''}
                </button>
              ))}
          </p>
        )}
        {(mod.checklist || mod.fieldwork) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {mod.checklist && (
              <details className="rounded-2xl bg-stone-950/60 border border-stone-800 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-amber-300 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 shrink-0" />
                  {mod.checklist.title}
                </summary>
                <ol className="mt-3 space-y-2 text-sm">
                  {mod.checklist.items.map(([q, a], i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-mono text-amber-400 shrink-0">{i + 1}.</span>
                      <span>
                        <strong className="text-stone-100">{q}</strong> <span className="text-stone-400">{a}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </details>
            )}
            {mod.fieldwork && (
              <details className="rounded-2xl bg-stone-950/60 border border-stone-800 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-emerald-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {mod.fieldwork.title}
                </summary>
                <p className="mt-3 text-sm text-stone-400">{mod.fieldwork.intro}</p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {mod.fieldwork.items.map(([t, d], i) => (
                    <li key={i}>
                      <strong className="text-stone-100">{t}</strong> <span className="text-stone-400">· {d}</span>
                    </li>
                  ))}
                </ul>
                {mod.fieldwork.share && <p className="mt-3 text-xs italic text-stone-400">{mod.fieldwork.share}</p>}
              </details>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Lesson list */}
        <aside className="min-w-0">
          <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
            <span>{L.learned(doneCount, lessons.length)}</span>
          </div>
          <div className="h-1.5 rounded-full bg-stone-800 overflow-hidden mb-3">
            <div className="h-full bg-amber-500 transition-all" style={{ width: `${(doneCount / lessons.length) * 100}%` }} />
          </div>
          <ol className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:max-h-[640px] lg:overflow-y-auto pr-1">
            {lessons.map((l, i) => (
              <li key={l.id} className="shrink-0 lg:shrink">
                <button
                  onClick={() => go(i)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 border transition-colors whitespace-nowrap lg:whitespace-normal ${
                    i === idx ? 'bg-stone-950 border-amber-500/60 text-stone-100' : 'bg-stone-950/40 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {learned[l.id] ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <Circle className="w-4 h-4 text-stone-600 shrink-0" />}
                  <span className="font-mono text-stone-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-medium">{l.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </aside>

        {/* Lesson */}
        <article id="lab-lesson" className="scroll-mt-28 min-w-0">
          <p className="text-xs font-mono text-amber-400">{L.lessonOf(idx + 1, lessons.length)}</p>
          <h4 className="text-xl md:text-2xl font-display font-bold text-stone-100 mt-1">{lesson.title}</h4>
          <p className="text-sm italic font-serif-reading text-amber-300/90 mt-1">{lesson.tagline}</p>

          {(lesson.quick || lesson.challenge) && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {lesson.quick && (
                <div className="rounded-2xl bg-stone-950 border border-amber-500/40 p-4">
                  <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    {S.quick}
                  </p>
                  <p className="text-sm text-stone-200 leading-relaxed">{lesson.quick}</p>
                </div>
              )}
              {lesson.challenge && (
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/40 p-4">
                  <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                    <Timer className="w-3.5 h-3.5" />
                    {S.challenge}
                  </p>
                  <p className="text-sm text-stone-200 leading-relaxed">{lesson.challenge}</p>
                </div>
              )}
            </div>
          )}

          {HAS_DIAGRAM.has(lesson.id) && (
            <div className="keep-dark mt-5 rounded-2xl bg-stone-950 border border-stone-800 p-3">
              <LessonDiagram id={lesson.id} labels={lesson.diagramLabels} />
            </div>
          )}
          {Widget && (
            <div className="mt-5">
              <Widget lessonId={lesson.id} />
            </div>
          )}

          <div className="mt-5 space-y-3 text-stone-300 text-sm md:text-base leading-relaxed font-serif-reading">
            {lesson.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {lesson.bullets && lesson.bullets.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-stone-300">
              {lesson.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {lesson.mistakes && lesson.mistakes.length > 0 && (
            <div className="mt-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4">
              <p className="text-xs font-semibold text-rose-300 mb-1.5">{S.mistakes}</p>
              <ul className="space-y-1 text-sm text-stone-300">
                {lesson.mistakes.map((m, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-rose-400">✕</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {lesson.phone && (
            <div className="mt-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 p-4">
              <p className="text-xs font-semibold text-sky-300 flex items-center gap-1.5 mb-1">
                <Smartphone className="w-3.5 h-3.5" />
                {S.phone}
              </p>
              <p className="text-sm text-stone-200">{capFirst(lesson.phone.replace(/^(Με το κινητό|With a phone|On a phone|On your phone):\s*/, ''))}</p>
            </div>
          )}
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4">
              <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                <Lightbulb className="w-3.5 h-3.5" />
                {L.keyIdea}
              </p>
              <p className="text-sm text-stone-200">{lesson.keyIdea}</p>
            </div>
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4">
              <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                <Target className="w-3.5 h-3.5" />
                {L.tryIt}
              </p>
              <p className="text-sm text-stone-200">{lesson.tryIt}</p>
            </div>
          </div>

          {lesson.see && lesson.see.filter((id) => enc.byId[id]).length > 0 && (
            <p className="mt-4 text-xs text-stone-400 flex flex-wrap items-center gap-1.5">
              <span>{S.seeAlso}</span>
              {lesson.see
                .filter((id) => enc.byId[id])
                .map((id) => (
                  <a key={id} href={href('encyclopedia', 'p', id)} className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-300">
                    {enc.byId[id].name}
                  </a>
                ))}
            </p>
          )}

          {lesson.check && lesson.check.length > 0 && (
            <div className="mt-5">
              <QuizReview key={lesson.id} questions={lesson.check} title={S.check} compact />
            </div>
          )}
          <div className="mt-6 pt-5 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-stone-300 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 accent-emerald-500"
                checked={!!learned[lesson.id]}
                onChange={() => setLearned((p) => ({ ...p, [lesson.id]: !p[lesson.id] }))}
              />
              {L.done}
            </label>
            <div className="flex items-center gap-2">
              {(track === 'exposure' || track === 'metering' || track === 'focus-dof') && onOpenSimulator && (
                <button onClick={onOpenSimulator} className="px-3 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/40 hover:bg-amber-500/25">
                  {L.openSimulator}
                </button>
              )}
              {(track === 'comp-basics' || track === 'comp-advanced') && onOpenComposition && (
                <button onClick={onOpenComposition} className="px-3 py-2 rounded-xl text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/25">
                  {L.openComposition}
                </button>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2">
            <button
              onClick={() => go(idx - 1)}
              disabled={idx === 0}
              className="px-3 py-2 rounded-xl text-xs font-semibold bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              {L.prev}
            </button>
            {idx < lessons.length - 1 ? (
              <button
                onClick={() => {
                  setLearned((p) => ({ ...p, [lesson.id]: true }));
                  go(idx + 1);
                }}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center gap-1"
              >
                {L.next}
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : nextMod ? (
              <button
                onClick={() => {
                  setLearned((p) => ({ ...p, [lesson.id]: true }));
                  openModule(nextMod.id, true);
                }}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center gap-1 text-right"
              >
                {S.nextModule}: {nextMod.title}
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ) : (
              <button
                onClick={() => setLearned((p) => ({ ...p, [lesson.id]: true }))}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center gap-1"
              >
                {L.done}
              </button>
            )}
          </div>
        </article>
      </div>

      {/* Level project & self-check */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5">
          <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
            <Trophy className="w-4 h-4" />
            {S.project} · {S.level(level)}
          </p>
          <h5 className="font-display font-bold text-lg text-stone-100 mt-1">{levelText.project.title}</h5>
          <p className="text-sm text-stone-300 mt-1 font-serif-reading">{levelText.project.brief}</p>
          <ol className="mt-3 space-y-1.5 text-sm text-stone-300">
            {levelText.project.steps.map((st, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono text-amber-400 shrink-0">{i + 1}.</span>
                <span>{st}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl bg-stone-950/60 border border-stone-800 p-5">
          <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <ListChecks className="w-4 h-4" />
            {S.canDo}
          </p>
          <p className="text-xs text-stone-500 mt-1">{S.canDoHint}</p>
          <ul className="mt-3 space-y-2">
            {levelText.canDo.map((c, i) => {
              const key = `${level}.${i}`;
              return (
                <li key={key}>
                  <label className="flex gap-2 text-sm text-stone-300 cursor-pointer">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 accent-emerald-500 shrink-0" checked={!!cando[key]} onChange={() => setCando((p) => ({ ...p, [key]: !p[key] }))} />
                    <span>{c}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
