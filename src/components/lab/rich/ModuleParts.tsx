import React, { useState } from 'react';
import { RotateCw, Lightbulb, Flag, Trophy, CheckSquare, Square } from 'lucide-react';
import type { Lesson, QuizQuestion } from '../../../data/types';
import type { Test } from './types';
import { TestRun } from './Tests';
import { useRichStrings } from './strings';

/** Converts the existing lesson checks into scored module-test items. */
export const checksToTests = (qs: QuizQuestion[]): Test[] =>
  qs.map((q) => ({ kind: 'mc', q: q.question, options: q.options, answer: q.correctIndex, why: q.explanation }));

/** «Θυμάσαι;» — flip cards that warm up what the previous module taught. */
export const ModuleRecall: React.FC<{ items: [string, string][] }> = ({ items }) => {
  const T = useRichStrings();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  if (items.length === 0) return null;
  return (
    <section className="mt-4 rounded-2xl bg-violet-500/10 border border-violet-500/30 p-4">
      <p className="text-sm font-bold text-violet-200 flex items-center gap-1.5">
        <RotateCw className="w-4 h-4" />
        {T.recallTitle}
      </p>
      <p className="text-xs text-stone-400 mt-0.5">{T.recallSub}</p>
      <div className="mt-3 grid sm:grid-cols-3 gap-2">
        {items.map(([q, a], i) => (
          <button
            key={i}
            onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
            className={`text-left rounded-xl border p-3 min-h-[92px] transition-colors ${open[i] ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-stone-950/70 border-stone-800 hover:border-violet-400/50'}`}
          >
            <p className="text-sm font-semibold text-stone-100">{q}</p>
            {open[i] ? <p className="text-sm text-emerald-200 mt-1.5">{a}</p> : <p className="text-[11px] text-violet-300 mt-1.5">{T.reveal} →</p>}
          </button>
        ))}
      </div>
    </section>
  );
};

const MSTORE = 'lumina.lab.missions';
function readMissions(): Record<string, boolean> {
  try {
    return JSON.parse(window.localStorage.getItem(MSTORE) || '{}');
  } catch {
    return {};
  }
}

/** End of module: what we keep, missions, final scored test. */
export const ModuleEnd: React.FC<{ moduleId: string; lessons: Lesson[]; missions?: [string, string][]; final: Test[] }> = ({ moduleId, lessons, missions, final }) => {
  const T = useRichStrings();
  const [done, setDone] = useState<Record<string, boolean>>(readMissions);
  const toggle = (k: string) =>
    setDone((d) => {
      const n = { ...d, [k]: !d[k] };
      try {
        window.localStorage.setItem(MSTORE, JSON.stringify(n));
      } catch {
        /* ignore */
      }
      return n;
    });
  return (
    <section className="mt-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-4 md:p-5 space-y-5">
      <p className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
        <Flag className="w-3.5 h-3.5" />
        {T.moduleEnd}
      </p>
      <div>
        <h5 className="text-base font-bold text-stone-100 flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          {T.keepTitle}
        </h5>
        <ol className="mt-2 space-y-1.5">
          {lessons.map((l, i) => (
            <li key={l.id} className="flex gap-2 text-sm text-stone-200">
              <span className="font-mono text-amber-400 shrink-0">{i + 1}.</span>
              <span>
                <span className="font-semibold text-stone-100">{l.title}:</span> {l.keyIdea}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {missions && missions.length > 0 && (
        <div>
          <h5 className="text-base font-bold text-stone-100">{T.missionsTitle}</h5>
          <p className="text-xs text-stone-400">{T.missionsSub}</p>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">
            {missions.map(([t, d], i) => {
              const k = moduleId + ':' + i;
              return (
                <button
                  key={k}
                  onClick={() => toggle(k)}
                  className={`text-left rounded-xl border p-3 flex gap-2 ${done[k] ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-stone-950/70 border-stone-800 hover:border-emerald-500/40'}`}
                >
                  {done[k] ? <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> : <Square className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />}
                  <span>
                    <span className="block text-sm font-semibold text-stone-100">{t}</span>
                    <span className="block text-sm text-stone-300">{d}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      {final.length > 0 && (
        <div>
          <h5 className="text-base font-bold text-stone-100 flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            {T.finalTitle}
          </h5>
          <p className="text-xs text-stone-400 mb-2">{T.finalSub}</p>
          <TestRun key={moduleId} tests={final} storeKey={'lumina.lab.final.' + moduleId} />
        </div>
      )}
    </section>
  );
};
