import React, { useEffect, useMemo, useRef, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type { Play } from './types';
import { Credit, photoUrl } from './PhotoWalk';
import { useRichStrings } from './strings';

const Frame: React.FC<{ title: string; intro: string; children: React.ReactNode }> = ({ title, intro, children }) => {
  const T = useRichStrings();
  return (
    <div className="rounded-2xl bg-stone-950 border border-amber-500/30 p-4 keep-dark">
      <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
        <SlidersHorizontal className="w-3.5 h-3.5" />
        {T.tryHere}
      </p>
      <h5 className="font-display font-bold text-stone-100 mt-1">{title}</h5>
      <p className="text-sm text-stone-300 mt-1 font-serif-reading">{intro}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
};

const Slider: React.FC<{ label: string; value: number; max: number; onChange: (v: number) => void; shown: string; marks?: string[] }> = ({ label, value, max, onChange, shown, marks }) => (
  <div className="mt-3">
    <div className="flex items-baseline justify-between text-sm">
      <span className="text-stone-400">{label}</span>
      <span className="font-mono font-bold text-amber-300 text-base">{shown}</span>
    </div>
    <input type="range" min={0} max={max} step={1} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-amber-500 mt-1" aria-label={label} />
    {marks && (
      <div className="flex justify-between text-[10px] text-stone-500 font-mono">
        {marks.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    )}
  </div>
);

/* ───────────── Exposure: the same photograph from −3 to +3 stops ───────────── */
const ExposurePlay: React.FC<{ p: Extract<Play, { kind: 'exposure' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [i, setI] = useState(6);
  const ev = (i - 6) / 2; // −3 … +3 in half stops
  const factor = Math.pow(2, ev);
  const state = ev <= -1 ? T.under : ev >= 1 ? T.over : T.ok;
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: String(p.photo.ratio), maxWidth: `calc(62vh * ${p.photo.ratio})`, marginInline: 'auto' }}>
        <img src={photoUrl(p.photo)} alt="" className="absolute inset-0 w-full h-full object-cover transition-[filter] duration-200" style={{ filter: `brightness(${factor}) contrast(${ev > 0 ? 1 - ev * 0.06 : 1})` }} />
        <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold ${Math.abs(ev) >= 1 ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-stone-950'}`}>{state}</span>
      </div>
      <Credit photo={p.photo} simulated />
      <Slider label={T.ev} value={i} max={12} onChange={setI} shown={`${ev > 0 ? '+' : ev < 0 ? '−' : '±'}${Math.abs(ev)} stop${Math.abs(ev) === 1 ? '' : 's'}`} marks={['−3', '−2', '−1', '0', '+1', '+2', '+3']} />
    </Frame>
  );
};

/* ───────────── Shutter: a cyclist crossing the frame ───────────── */
const SPEEDS: [string, number][] = [
  ['1/4000', 1 / 4000], ['1/2000', 1 / 2000], ['1/1000', 1 / 1000], ['1/500', 1 / 500], ['1/250', 1 / 250], ['1/125', 1 / 125],
  ['1/60', 1 / 60], ['1/30', 1 / 30], ['1/15', 1 / 15], ['1/8', 1 / 8], ['1/4', 1 / 4], ['1/2', 1 / 2], ['1″', 1],
];
const Cyclist: React.FC<{ x: number; o?: number }> = ({ x, o = 1 }) => (
  <g transform={`translate(${x} 0)`} opacity={o}>
    <circle cx={-34} cy={182} r={22} fill="none" stroke="#f5f5f4" strokeWidth={5} />
    <circle cx={34} cy={182} r={22} fill="none" stroke="#f5f5f4" strokeWidth={5} />
    <path d="M-34 182 L-6 140 L22 140 L34 182 M-6 140 L6 182 L-34 182" stroke="#fbbf24" strokeWidth={5} fill="none" />
    <path d="M6 100 L-2 140 M6 100 L22 128" stroke="#f87171" strokeWidth={8} strokeLinecap="round" />
    <circle cx={10} cy={86} r={11} fill="#fbbf24" />
  </g>
);
const ShutterPlay: React.FC<{ p: Extract<Play, { kind: 'shutter' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [i, setI] = useState(5);
  const [label, t] = SPEEDS[i];
  const speedPx = 700; // pixels per second across the frame
  const len = Math.min(560, speedPx * t);
  const ghosts = Math.max(1, Math.min(40, Math.round(len / 4)));
  const shake = t > 1 / 60;
  const shakePx = shake ? Math.min(14, 2 + Math.log2(t * 60) * 3) : 0;
  return (
    <Frame title={p.title} intro={p.intro}>
      <svg viewBox="0 0 800 260" className="w-full rounded-xl bg-[#3e6f9a]">
        <rect x="0" y="205" width="800" height="55" fill="#4b4540" />
        {[90, 230, 520, 690].map((x, k) => (
          <g key={k} opacity={shake ? 0.55 : 1}>
            <rect x={x - 5} y={120} width={10} height={85} fill="#6b4a2f" />
            <circle cx={x} cy={105} r={36} fill="#5a8f3e" />
            {shake && (
              <g transform={`translate(${shakePx} ${shakePx / 2})`} opacity={0.6}>
                <rect x={x - 5} y={120} width={10} height={85} fill="#6b4a2f" />
                <circle cx={x} cy={105} r={36} fill="#5a8f3e" />
              </g>
            )}
          </g>
        ))}
        {Array.from({ length: ghosts }).map((_, k) => (
          <Cyclist key={k} x={260 + (ghosts === 1 ? 0 : (k / (ghosts - 1)) * len)} o={ghosts === 1 ? 1 : Math.max(0.08, 1.6 / ghosts)} />
        ))}
      </svg>
      <p className="mt-2 text-sm">
        <span className={len < 4 ? 'text-emerald-400 font-semibold' : 'text-amber-300 font-semibold'}>{len < 4 ? T.frozen : T.blurred}</span>
        {shake && <span className="text-rose-400"> · {T.shake}</span>}
      </p>
      <Slider label={T.shutterLbl} value={i} max={SPEEDS.length - 1} onChange={setI} shown={`${label} s`} marks={['1/4000', '1/250', '1/15', '1″']} />
    </Frame>
  );
};

/* ───────────── ISO: grain on a night photograph ───────────── */
const ISOS = [100, 200, 400, 800, 1600, 3200, 6400, 12800];
const IsoPlay: React.FC<{ p: Extract<Play, { kind: 'iso' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [i, setI] = useState(0);
  const ref = useRef<HTMLCanvasElement>(null);
  const iso = ISOS[i];
  const strength = Math.log2(iso / 100) / 7; // 0 … 1
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const w = (c.width = 480);
    const h = (c.height = Math.round(480 / p.photo.ratio));
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const img = ctx.createImageData(w, h);
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let k = 0; k < w * h; k++) {
      const l = (rnd() - 0.5) * 255;
      img.data[k * 4] = 128 + l + (rnd() - 0.5) * 120;
      img.data[k * 4 + 1] = 128 + l + (rnd() - 0.5) * 120;
      img.data[k * 4 + 2] = 128 + l + (rnd() - 0.5) * 120;
      img.data[k * 4 + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }, [p.photo.ratio]);
  const base = 1 / 15;
  const t = base / (iso / 100);
  const shutter = t >= 1 ? `${t}″` : `1/${Math.round(1 / t)}`;
  const state = strength < 0.3 ? T.noiseLow : strength < 0.65 ? T.noiseMid : T.noiseHigh;
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: String(p.photo.ratio), maxWidth: `calc(62vh * ${p.photo.ratio})`, marginInline: 'auto' }}>
        <img src={photoUrl(p.photo)} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'overlay', opacity: strength * 0.95, imageRendering: 'pixelated' }} />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold bg-stone-950/80 text-amber-300">ISO {iso}</span>
      </div>
      <Credit photo={p.photo} simulated />
      <p className="mt-2 text-sm text-stone-300">
        <span className={strength < 0.3 ? 'text-emerald-400 font-semibold' : 'text-amber-300 font-semibold'}>{state}</span> · {T.isoSame(shutter + ' s')}
      </p>
      <Slider label={T.isoLbl} value={i} max={ISOS.length - 1} onChange={setI} shown={String(iso)} marks={['100', '800', '12800']} />
    </Frame>
  );
};

/* ───────────── Aperture: the blades and the background ───────────── */
const FS = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16];
const AperturePlay: React.FC<{ p: Extract<Play, { kind: 'aperture' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [i, setI] = useState(2);
  const N = FS[i];
  const r = 70 * (1.4 / N); // opening radius
  const blur = Math.max(0, 9 * (2.8 / N) - 0.6);
  const lightPct = Math.round(100 * Math.pow(1.4 / N, 2));
  const blades = useMemo(() => Array.from({ length: 7 }, (_, k) => (k * 360) / 7), []);
  const state = N <= 2.8 ? T.apWide : N >= 8 ? T.apNarrow : T.apMid;
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="grid sm:grid-cols-[180px_1fr] gap-3 items-center">
        <svg viewBox="-100 -100 200 200" className="w-40 h-40 mx-auto">
          <circle r="96" fill="#1c1917" stroke="#44403c" strokeWidth="4" />
          <circle r="86" fill="#0c0a09" />
          <circle r={r} fill="#fde68a" />
          {blades.map((a, k) => (
            <path key={k} d={`M ${r} 0 L 90 -40 L 90 90 Z`} transform={`rotate(${a})`} fill="#292524" stroke="#57534e" strokeWidth="1.5" opacity={0.92} />
          ))}
          <text y="-72" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fbbf24">f/{N}</text>
        </svg>
        <svg viewBox="0 0 400 240" className="w-full rounded-xl">
          <defs>
            <filter id="apblur">
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
          <g filter="url(#apblur)">
            <rect width="400" height="240" fill="#3e6f9a" />
            <path d="M0 170 Q120 120 400 160 L400 240 L0 240 Z" fill="#4c7d3a" />
            {[40, 110, 300, 360].map((x, k) => (
              <g key={k}>
                <rect x={x - 4} y={110} width={8} height={60} fill="#6b4a2f" />
                <circle cx={x} cy={100} r={26} fill="#5a8f3e" />
              </g>
            ))}
            {[60, 150, 250, 330].map((x, k) => (
              <circle key={'l' + k} cx={x} cy={40 + (k % 2) * 20} r={7} fill="#fff5c0" />
            ))}
          </g>
          <g>
            <circle cx="200" cy="120" r="22" fill="#e8c29a" />
            <rect x="174" y="144" width="52" height="96" rx="20" fill="#f2b33d" />
          </g>
        </svg>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-stone-400">
        <span>{T.light}</span>
        <div className="h-2 flex-1 rounded-full bg-stone-800 overflow-hidden">
          <div className="h-full bg-amber-400 transition-all" style={{ width: `${lightPct}%` }} />
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-amber-300">{state}</p>
      <Slider label={T.apLbl} value={i} max={FS.length - 1} onChange={setI} shown={`f/${N}`} marks={FS.map((f) => String(f))} />
    </Frame>
  );
};

export const PlayView: React.FC<{ play: Play }> = ({ play }) => {
  switch (play.kind) {
    case 'exposure':
      return <ExposurePlay p={play} />;
    case 'shutter':
      return <ShutterPlay p={play} />;
    case 'iso':
      return <IsoPlay p={play} />;
    case 'aperture':
      return <AperturePlay p={play} />;
  }
};
