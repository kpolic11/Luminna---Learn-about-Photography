import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ClipboardCheck, ArrowRight, Trophy } from 'lucide-react';
import type { Test } from './types';
import { Credit, photoUrl } from './PhotoWalk';
import { useRichStrings } from './strings';

/** Deterministic shuffle so the order is stable between renders. */
function shuffled<T>(arr: T[], seed: number): T[] {
  const a = arr.slice();
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const hash = (t: string) => Array.from(t).reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 2147483647, 7);

const Feedback: React.FC<{ ok: boolean; why: string; onRetry?: () => void }> = ({ ok, why, onRetry }) => {
  const T = useRichStrings();
  return (
    <div className={`mt-3 rounded-xl p-3 text-sm border ${ok ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-rose-500/10 border-rose-500/40'}`}>
      <p className={`font-bold flex items-center gap-1.5 ${ok ? 'text-emerald-400' : 'text-rose-300'}`}>
        {ok ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
        {ok ? T.correct : T.wrong}
      </p>
      <p className="text-stone-300 mt-1">{why}</p>
      {!ok && onRetry && (
        <button onClick={onRetry} className="mt-2 text-xs font-semibold text-stone-300 inline-flex items-center gap-1 hover:text-amber-300">
          <RotateCcw className="w-3.5 h-3.5" />
          {T.retry}
        </button>
      )}
    </div>
  );
};

type Done = (ok: boolean) => void;

const MC: React.FC<{ t: Extract<Test, { kind: 'mc' }>; onDone?: Done }> = ({ t, onDone }) => {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div>
      <p className="font-semibold text-stone-100">{t.q}</p>
      <div className="mt-2 grid gap-2">
        {t.options.map((o, i) => {
          const chosen = pick === i;
          const show = pick !== null;
          const cls = show
            ? i === t.answer
              ? 'border-emerald-500 bg-emerald-500/10 text-stone-100'
              : chosen
                ? 'border-rose-500 bg-rose-500/10 text-stone-200'
                : 'border-stone-800 text-stone-500'
            : 'border-stone-700 hover:border-amber-500/60 text-stone-200';
          return (
            <button
              key={i}
              disabled={show}
              onClick={() => {
                setPick(i);
                onDone?.(i === t.answer);
              }}
              className={`text-left px-3 py-2 rounded-xl border text-sm transition-colors ${cls}`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {pick !== null && <Feedback ok={pick === t.answer} why={t.why} onRetry={onDone ? undefined : () => setPick(null)} />}
    </div>
  );
};

const Tap: React.FC<{ t: Extract<Test, { kind: 'tap' }>; onDone?: Done }> = ({ t, onDone }) => {
  const T = useRichStrings();
  const [hit, setHit] = useState<{ x: number; y: number; ok: boolean } | null>(null);
  return (
    <div>
      <p className="font-semibold text-stone-100">{t.q}</p>
      <p className="text-xs text-stone-500 mt-0.5">{T.tapHint}</p>
      <div
        className={`relative mt-2 rounded-xl overflow-hidden bg-black ${hit ? '' : 'cursor-crosshair'}`}
        style={{ aspectRatio: String(t.photo.ratio), maxWidth: `calc(62vh * ${t.photo.ratio})`, marginInline: 'auto' }}
        onClick={(e) => {
          if (hit) return;
          const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          const dx = (x - t.target.x) * t.photo.ratio;
          const dy = y - t.target.y;
          const ok = Math.sqrt(dx * dx + dy * dy) <= t.target.r * 1.15;
          setHit({ x, y, ok });
          onDone?.(ok);
        }}
      >
        <img src={photoUrl(t.photo)} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {hit && (
          <>
            <span className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border-4" style={{ left: `${hit.x * 100}%`, top: `${hit.y * 100}%`, borderColor: hit.ok ? '#4ade80' : '#f87171' }} />
            <span
              className="absolute rounded-full border-4 border-emerald-400 border-dashed"
              style={{
                left: `${(t.target.x - t.target.r / t.photo.ratio) * 100}%`,
                top: `${(t.target.y - t.target.r) * 100}%`,
                width: `${(2 * t.target.r * 100) / t.photo.ratio}%`,
                height: `${2 * t.target.r * 100}%`,
              }}
            />
          </>
        )}
      </div>
      <Credit photo={t.photo} />
      {hit && <Feedback ok={hit.ok} why={t.why} onRetry={onDone ? undefined : () => setHit(null)} />}
    </div>
  );
};

const Order: React.FC<{ t: Extract<Test, { kind: 'order' }>; onDone?: Done }> = ({ t, onDone }) => {
  const T = useRichStrings();
  const pool = useMemo(() => shuffled(t.items, hash(t.q)), [t]);
  const [seq, setSeq] = useState<string[]>([]);
  const done = seq.length === t.items.length;
  const ok = done && seq.every((s, i) => s === t.items[i]);
  return (
    <div>
      <p className="font-semibold text-stone-100">{t.q}</p>
      <p className="text-xs text-stone-500 mt-0.5">{T.orderHint}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {pool.map((it) => {
          const used = seq.includes(it);
          return (
            <button
              key={it}
              disabled={used || done}
              onClick={() => {
                const next = [...seq, it];
                setSeq(next);
                if (next.length === t.items.length) onDone?.(next.every((s, i) => s === t.items[i]));
              }}
              className={`px-3 py-1.5 rounded-lg border text-sm font-mono ${used ? 'border-stone-800 text-stone-600' : 'border-stone-600 text-stone-100 hover:border-amber-500'}`}
            >
              {it}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 flex-wrap min-h-9 rounded-xl bg-stone-900 border border-stone-800 px-2 py-1.5">
        {t.ends && <span className="text-[11px] text-stone-500">{t.ends[0]} →</span>}
        {seq.map((s, i) => (
          <span key={i} className={`px-2 py-1 rounded-md text-sm font-mono ${done ? (s === t.items[i] ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300') : 'bg-stone-800 text-stone-100'}`}>
            {s}
          </span>
        ))}
        {t.ends && <span className="text-[11px] text-stone-500 ml-auto">→ {t.ends[1]}</span>}
      </div>
      {!done && seq.length > 0 && (
        <button onClick={() => setSeq([])} className="mt-1 text-xs text-stone-400 hover:text-amber-300">
          {T.reset}
        </button>
      )}
      {done && <Feedback ok={ok} why={ok ? t.why : `${t.items.join(' → ')}. ${t.why}`} onRetry={onDone ? undefined : () => setSeq([])} />}
    </div>
  );
};

const Match: React.FC<{ t: Extract<Test, { kind: 'match' }>; onDone?: Done }> = ({ t, onDone }) => {
  const T = useRichStrings();
  const right = useMemo(() => shuffled(t.pairs.map((p) => p[1]), hash(t.q) + 3), [t]);
  const [sel, setSel] = useState<number | null>(null);
  const [links, setLinks] = useState<Record<number, string>>({});
  const done = Object.keys(links).length === t.pairs.length;
  const ok = done && t.pairs.every((p, i) => links[i] === p[1]);
  const usedRight = new Set(Object.values(links));
  return (
    <div>
      <p className="font-semibold text-stone-100">{t.q}</p>
      <p className="text-xs text-stone-500 mt-0.5">{T.matchHint}</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {t.pairs.map((p, i) => {
            const linked = links[i] !== undefined;
            const good = done && links[i] === p[1];
            return (
              <button
                key={i}
                disabled={linked}
                onClick={() => setSel(i)}
                className={`w-full text-left px-3 py-2 rounded-xl border text-sm ${
                  sel === i ? 'border-amber-500 bg-amber-500/10 text-stone-100' : linked ? (done ? (good ? 'border-emerald-500 text-emerald-200' : 'border-rose-500 text-rose-200') : 'border-stone-700 text-stone-400') : 'border-stone-700 text-stone-200 hover:border-amber-500/60'
                }`}
              >
                {p[0]}
                {linked && <span className="block text-xs mt-0.5 text-stone-400">→ {links[i]}</span>}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {right.map((r) => (
            <button
              key={r}
              disabled={sel === null || usedRight.has(r)}
              onClick={() => {
                if (sel === null) return;
                const next = { ...links, [sel]: r };
                setLinks(next);
                setSel(null);
                if (Object.keys(next).length === t.pairs.length) onDone?.(t.pairs.every((p, i) => next[i] === p[1]));
              }}
              className={`w-full text-left px-3 py-2 rounded-xl border text-sm ${usedRight.has(r) ? 'border-stone-800 text-stone-600' : sel !== null ? 'border-amber-500/50 text-stone-100 hover:bg-amber-500/10' : 'border-stone-700 text-stone-300'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      {!done && Object.keys(links).length > 0 && (
        <button onClick={() => setLinks({})} className="mt-1 text-xs text-stone-400 hover:text-amber-300">
          {T.reset}
        </button>
      )}
      {done && <Feedback ok={ok} why={ok ? t.why : t.pairs.map((p) => `${p[0]} → ${p[1]}`).join(' · ') + '. ' + t.why} onRetry={onDone ? undefined : () => setLinks({})} />}
    </div>
  );
};

export const TestView: React.FC<{ t: Test; onDone?: Done }> = ({ t, onDone }) => {
  switch (t.kind) {
    case 'mc':
      return <MC t={t} onDone={onDone} />;
    case 'tap':
      return <Tap t={t} onDone={onDone} />;
    case 'order':
      return <Order t={t} onDone={onDone} />;
    case 'match':
      return <Match t={t} onDone={onDone} />;
  }
};

/** A single practice test inside a lesson (retry allowed). */
export const TestCard: React.FC<{ t: Test; n?: number }> = ({ t, n }) => {
  const T = useRichStrings();
  const [k, setK] = useState(0);
  return (
    <div className="rounded-2xl bg-stone-950 border border-sky-500/30 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-sky-300 flex items-center gap-1.5">
          <ClipboardCheck className="w-3.5 h-3.5" />
          {T.test}
          {n ? ` ${n}` : ''}
        </p>
        <button onClick={() => setK((x) => x + 1)} className="text-[11px] text-stone-500 hover:text-stone-300 inline-flex items-center gap-1">
          <RotateCcw className="w-3 h-3" />
          {T.again}
        </button>
      </div>
      <div className="mt-2" key={k}>
        <TestView t={t} />
      </div>
    </div>
  );
};

/** A scored run through several tests (module test). */
export const TestRun: React.FC<{ tests: Test[]; storeKey?: string }> = ({ tests, storeKey }) => {
  const T = useRichStrings();
  const [i, setI] = useState(-1);
  const [res, setRes] = useState<boolean[]>([]);
  const [answered, setAnswered] = useState(false);
  const total = tests.length;
  const score = res.filter(Boolean).length;
  if (i === -1)
    return (
      <button onClick={() => setI(0)} className="px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 text-stone-950 inline-flex items-center gap-1.5">
        {T.start}
        <ArrowRight className="w-4 h-4" />
      </button>
    );
  if (i >= total) {
    const pct = score / total;
    if (storeKey) {
      try {
        window.localStorage.setItem(storeKey, JSON.stringify({ score, total, at: Date.now() }));
      } catch {
        /* ignore */
      }
    }
    return (
      <div className="rounded-2xl bg-stone-950 border border-amber-500/40 p-5 text-center">
        <Trophy className="w-8 h-8 text-amber-400 mx-auto" />
        <p className="text-2xl font-display font-bold text-stone-100 mt-2">{T.score(score, total)}</p>
        <p className="text-sm text-stone-300 mt-1">{pct >= 0.8 ? T.great : pct >= 0.5 ? T.good : T.low}</p>
        <button
          onClick={() => {
            setI(0);
            setRes([]);
            setAnswered(false);
          }}
          className="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-stone-300 inline-flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {T.again}
        </button>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-stone-950 border border-stone-800 p-4">
      <div className="flex items-center gap-2 mb-3">
        {tests.map((_, k) => (
          <span key={k} className={`h-1.5 flex-1 rounded-full ${k < res.length ? (res[k] ? 'bg-emerald-500' : 'bg-rose-500') : k === i ? 'bg-amber-500' : 'bg-stone-800'}`} />
        ))}
      </div>
      <TestView
        key={i}
        t={tests[i]}
        onDone={(ok) => {
          setRes((r) => [...r, ok]);
          setAnswered(true);
        }}
      />
      {answered && (
        <button
          onClick={() => {
            setAnswered(false);
            setI((x) => x + 1);
          }}
          className="mt-3 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-stone-950 inline-flex items-center gap-1"
        >
          {i + 1 < total ? T.next : T.result}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
