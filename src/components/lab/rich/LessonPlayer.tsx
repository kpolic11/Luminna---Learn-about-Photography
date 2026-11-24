import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Target, Smartphone, Zap, Timer, Rows3, GalleryHorizontal, Image as ImageIcon, SlidersHorizontal, ClipboardCheck } from 'lucide-react';
import type { Lesson } from '../../../data/types';
import { useLanguage } from '../../../i18n/LanguageContext';
import { LessonDiagram, HAS_DIAGRAM } from '../LessonDiagram';
import { QuizReview } from '../../QuizReview';
import { PhotoWalk } from './PhotoWalk';
import { PlayView } from './Plays';
import { TestCard } from './Tests';
import { useRichStrings } from './strings';
import { getRich } from './data';

const capFirst = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const MODE_KEY = 'lumina.lab.onepage';

interface Props {
  lesson: Lesson;
  Widget: React.FC<{ lessonId?: string }> | null;
  /** rendered under the key-idea screen (e.g. «see also» links) */
  extras?: React.ReactNode;
}

interface Screen {
  key: string;
  kind: 'intro' | 'read' | 'photo' | 'try' | 'rules' | 'phone' | 'key' | 'test';
  node: React.ReactNode;
}

const Box: React.FC<{ tone: string; icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ tone, icon, label, children }) => (
  <div className={`rounded-2xl border p-4 ${tone}`}>
    <p className="text-xs font-semibold flex items-center gap-1.5 mb-1">
      {icon}
      {label}
    </p>
    <div className="text-sm md:text-base text-stone-200 leading-relaxed">{children}</div>
  </div>
);

export const LessonPlayer: React.FC<Props> = ({ lesson, Widget, extras }) => {
  const { ui, lang } = useLanguage();
  const L = ui.lab;
  const S = ui.school;
  const T = useRichStrings();
  const rich = getRich(lang).lessons[lesson.id] ?? {};
  const phone = lesson.phone ?? rich.phone;
  const [onePage, setOnePage] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem(MODE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [at, setAt] = useState(0);
  const top = useRef<HTMLDivElement>(null);
  useEffect(() => setAt(0), [lesson.id]);
  useEffect(() => {
    try {
      window.localStorage.setItem(MODE_KEY, onePage ? '1' : '0');
    } catch {
      /* ignore */
    }
  }, [onePage]);

  const screens = useMemo<Screen[]>(() => {
    const out: Screen[] = [];
    const walks = rich.walks ?? [];
    const plays = rich.plays ?? [];
    const tests = rich.tests ?? [];
    const hasDiagram = HAS_DIAGRAM.has(lesson.id);
    // 1 · opening
    out.push({
      key: 'intro',
      kind: 'intro',
      node: (
        <div className="space-y-3">
          {lesson.quick && (
            <Box tone="bg-stone-950 border-amber-500/40 text-amber-400" icon={<Zap className="w-3.5 h-3.5" />} label={S.quick}>
              {lesson.quick}
            </Box>
          )}
          {lesson.challenge && (
            <Box tone="bg-emerald-500/10 border-emerald-500/40 text-emerald-400" icon={<Timer className="w-3.5 h-3.5" />} label={S.challenge}>
              {lesson.challenge}
            </Box>
          )}
          <div className="rounded-2xl bg-stone-950/60 border border-stone-800 p-4">
            <p className="text-xs font-semibold text-stone-400 mb-2">{T.intro}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-stone-800 text-stone-200">📖 {lesson.body.length}</span>
              {walks.length > 0 && (
                <span className="px-2 py-1 rounded-md bg-amber-500/15 text-amber-300 inline-flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> {walks.length} · {T.readIt}
                </span>
              )}
              {(plays.length > 0 || Widget) && (
                <span className="px-2 py-1 rounded-md bg-amber-500/15 text-amber-300 inline-flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3" /> {plays.length + (Widget ? 1 : 0)} · {T.tryHere}
                </span>
              )}
              {(tests.length > 0 || (lesson.check?.length ?? 0) > 0) && (
                <span className="px-2 py-1 rounded-md bg-sky-500/15 text-sky-300 inline-flex items-center gap-1">
                  <ClipboardCheck className="w-3 h-3" /> {tests.length + (lesson.check?.length ?? 0)} · {T.test}
                </span>
              )}
            </div>
          </div>
        </div>
      ),
    });
    // 2 · one idea per screen
    let widgetShown = false;
    lesson.body.forEach((p, i) => {
      let visual: React.ReactNode = null;
      if (i === 0 && hasDiagram)
        visual = (
          <div className="keep-dark rounded-2xl bg-stone-950 border border-stone-800 p-3">
            <LessonDiagram id={lesson.id} labels={lesson.diagramLabels} />
          </div>
        );
      else if (i === 0 && Widget && plays.length === 0) {
        visual = <Widget lessonId={lesson.id} />;
        widgetShown = true;
      }
      out.push({
        key: 'read' + i,
        kind: 'read',
        node: (
          <div className="space-y-4">
            {visual}
            <p className="text-base md:text-lg text-stone-200 leading-relaxed font-serif-reading">{p}</p>
          </div>
        ),
      });
    });
    // 3 · see it in real photographs
    walks.forEach((w, i) => out.push({ key: 'walk' + i, kind: 'photo', node: <PhotoWalk walk={w} /> }));
    // 4 · try it with your own hands
    plays.forEach((pl, i) => out.push({ key: 'play' + i, kind: 'try', node: <PlayView play={pl} /> }));
    if (Widget && !widgetShown) out.push({ key: 'widget', kind: 'try', node: <Widget lessonId={lesson.id} /> });
    // 5 · rules of thumb & mistakes
    if ((lesson.bullets?.length ?? 0) > 0 || (lesson.mistakes?.length ?? 0) > 0)
      out.push({
        key: 'rules',
        kind: 'rules',
        node: (
          <div className="space-y-4">
            {lesson.bullets && lesson.bullets.length > 0 && (
              <ul className="space-y-2 text-base text-stone-200">
                {lesson.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 rounded-xl bg-stone-950/60 border border-stone-800 px-3 py-2">
                    <span className="text-amber-400">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {lesson.mistakes && lesson.mistakes.length > 0 && (
              <div className="rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4">
                <p className="text-xs font-semibold text-rose-300 mb-1.5">{S.mistakes}</p>
                <ul className="space-y-1.5 text-sm md:text-base text-stone-200">
                  {lesson.mistakes.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-rose-400">✕</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ),
      });
    // 6 · with a phone
    if (phone)
      out.push({
        key: 'phone',
        kind: 'phone',
        node: (
          <Box tone="bg-sky-500/10 border-sky-500/30 text-sky-300" icon={<Smartphone className="w-3.5 h-3.5" />} label={S.phone}>
            {capFirst(phone.replace(/^(Με το κινητό|With a phone|On a phone|On your phone):\s*/, ''))}
          </Box>
        ),
      });
    // 7 · the one thing to keep + a task
    out.push({
      key: 'key',
      kind: 'key',
      node: (
        <div className="space-y-3">
          <Box tone="bg-amber-500/10 border-amber-500/40 text-amber-400" icon={<Lightbulb className="w-3.5 h-3.5" />} label={L.keyIdea}>
            <span className="text-lg md:text-xl font-semibold text-stone-100">{lesson.keyIdea}</span>
          </Box>
          <Box tone="bg-emerald-500/10 border-emerald-500/30 text-emerald-400" icon={<Target className="w-3.5 h-3.5" />} label={L.tryIt}>
            {lesson.tryIt}
          </Box>
          {extras}
        </div>
      ),
    });
    // 8 · tests
    tests.forEach((t, i) => out.push({ key: 'test' + i, kind: 'test', node: <TestCard t={t} n={tests.length > 1 ? i + 1 : undefined} /> }));
    if (lesson.check && lesson.check.length > 0)
      out.push({ key: 'check', kind: 'test', node: <QuizReview key={lesson.id} questions={lesson.check} title={S.check} compact /> });
    return out;
  }, [lesson, rich, Widget, phone, extras, S, L, T]);

  const n = screens.length;
  const cur = Math.min(at, n - 1);
  const go = (i: number) => {
    setAt(Math.max(0, Math.min(n - 1, i)));
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  const KIND_COL: Record<Screen['kind'], string> = {
    intro: 'bg-stone-400',
    read: 'bg-stone-300',
    photo: 'bg-amber-400',
    try: 'bg-orange-400',
    rules: 'bg-stone-400',
    phone: 'bg-sky-400',
    key: 'bg-emerald-400',
    test: 'bg-sky-500',
  };

  const toggle = (
    <button onClick={() => setOnePage((v) => !v)} className="text-[11px] text-stone-400 hover:text-amber-300 inline-flex items-center gap-1">
      {onePage ? <GalleryHorizontal className="w-3.5 h-3.5" /> : <Rows3 className="w-3.5 h-3.5" />}
      {onePage ? T.screens : T.onePage}
    </button>
  );

  if (onePage)
    return (
      <div className="mt-4">
        <div className="flex justify-end">{toggle}</div>
        <div className="mt-2 space-y-6">
          {screens.map((s) => (
            <section key={s.key}>{s.node}</section>
          ))}
        </div>
      </div>
    );

  return (
    <div ref={top} className="mt-4 scroll-mt-28">
      <div className="flex items-center gap-1" role="tablist" aria-label={T.screen(cur + 1, n)}>
        {screens.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === cur}
            aria-label={`${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 flex-1 rounded-full transition-all ${i === cur ? KIND_COL[s.kind] + ' ring-2 ring-amber-300/60' : i < cur ? KIND_COL[s.kind] + ' opacity-70' : 'bg-stone-800 hover:bg-stone-700'}`}
          />
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-stone-500">{T.screen(cur + 1, n)}</span>
        {toggle}
      </div>
      <div className="mt-3 min-h-[260px]" key={screens[cur].key}>
        {screens[cur].node}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => go(cur - 1)}
          disabled={cur === 0}
          className="px-3 py-2 rounded-xl text-sm font-semibold bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-30 inline-flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          {T.prevScreen}
        </button>
        {cur < n - 1 && (
          <button onClick={() => go(cur + 1)} className="px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 inline-flex items-center gap-1">
            {T.nextScreen}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
