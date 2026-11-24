import React, { useEffect, useMemo, useRef, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type { Play } from './types';
import { Credit, photoUrl } from './PhotoWalk';
import { useRichStrings } from './strings';

const Frame: React.FC<{ title: string; intro: string; children: React.ReactNode }> = ({ title, intro, children }) => {
  const T = useRichStrings();
  return (
    <div className="rounded-md bg-stone-950 p-4 keep-dark">
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
    <path d="M-34 182 L-6 140 L22 140 L34 182 M-6 140 L6 182 L-34 182" stroke="#e0b062" strokeWidth={5} fill="none" />
    <path d="M6 100 L-2 140 M6 100 L22 128" stroke="#c96a5e" strokeWidth={8} strokeLinecap="round" />
    <circle cx={10} cy={86} r={11} fill="#e0b062" />
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
      <svg viewBox="0 0 800 260" className="w-full rounded-xl bg-[#4f6a86]">
        <rect x="0" y="205" width="800" height="55" fill="#4b4540" />
        {[90, 230, 520, 690].map((x, k) => (
          <g key={k} opacity={shake ? 0.55 : 1}>
            <rect x={x - 5} y={120} width={10} height={85} fill="#6b4a2f" />
            <circle cx={x} cy={105} r={36} fill="#7f9a6a" />
            {shake && (
              <g transform={`translate(${shakePx} ${shakePx / 2})`} opacity={0.6}>
                <rect x={x - 5} y={120} width={10} height={85} fill="#6b4a2f" />
                <circle cx={x} cy={105} r={36} fill="#7f9a6a" />
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
          <circle r={r} fill="#ecd5a6" />
          {blades.map((a, k) => (
            <path key={k} d={`M ${r} 0 L 90 -40 L 90 90 Z`} transform={`rotate(${a})`} fill="#292524" stroke="#57534e" strokeWidth="1.5" opacity={0.92} />
          ))}
          <text y="-72" textAnchor="middle" fontSize="18" fontWeight="800" fill="#e0b062">f/{N}</text>
        </svg>
        <svg viewBox="0 0 400 240" className="w-full rounded-xl">
          <defs>
            <filter id="apblur">
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
          <g filter="url(#apblur)">
            <rect width="400" height="240" fill="#4f6a86" />
            <path d="M0 170 Q120 120 400 160 L400 240 L0 240 Z" fill="#4c7d3a" />
            {[40, 110, 300, 360].map((x, k) => (
              <g key={k}>
                <rect x={x - 4} y={110} width={8} height={60} fill="#6b4a2f" />
                <circle cx={x} cy={100} r={26} fill="#7f9a6a" />
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


/* ───────────── White balance: a lamp-lit room under different camera settings ───────────── */
const WB_STEPS = [2500, 3200, 4000, 5000, 5600, 6500, 7500, 9000];
const WbPlay: React.FC<{ p: Extract<Play, { kind: 'wb' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [i, setI] = useState(4);
  const k = WB_STEPS[i];
  // mired difference: positive → camera set too high → image turns orange
  const d = 1e6 / p.sceneK - 1e6 / k;
  const amt = Math.max(-1, Math.min(1, d / 200));
  const neutral = Math.abs(d) < 45;
  // the photo is shown corrected for the scene; the overlay re-adds the cast
  const overlay = amt > 0 ? `rgba(255,140,40,${0.42 * amt})` : `rgba(60,120,255,${0.5 * -amt})`;
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="relative rounded-xl overflow-hidden bg-black" style={{ aspectRatio: String(p.photo.ratio), maxWidth: `calc(62vh * ${p.photo.ratio})`, marginInline: 'auto' }}>
        <img src={photoUrl(p.photo)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'sepia(0.15) saturate(0.55) hue-rotate(-8deg)' }} />
        <div className="absolute inset-0 transition-colors duration-200" style={{ background: overlay, mixBlendMode: 'color' }} />
        <div className="absolute inset-0 transition-colors duration-200" style={{ background: overlay, mixBlendMode: 'soft-light' }} />
        <span className={`absolute top-2 left-2 right-2 sm:right-auto px-2 py-0.5 rounded-md text-xs font-bold ${neutral ? 'bg-emerald-500 text-stone-950' : 'bg-stone-900/85 text-stone-100'}`}>
          {neutral ? T.wbOk : amt > 0 ? T.wbWarm : T.wbCool}
        </span>
      </div>
      <Credit photo={p.photo} simulated />
      <Slider label={T.wbLbl} value={i} max={WB_STEPS.length - 1} onChange={setI} shown={`${k} K`} marks={WB_STEPS.map((x) => `${x / 1000}k`)} />
    </Frame>
  );
};

/* ───────────── Crop: move the subject from centre to a third ───────────── */
const CropPlay: React.FC<{ p: Extract<Play, { kind: 'crop' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [v, setV] = useState(50);
  const [grid, setGrid] = useState(true);
  const win = 1 / p.photo.ratio; // width of a square window, as a fraction of the photo width
  const maxOff = 1 - win;
  const off = (v / 100) * maxOff;
  const pos = (p.subjectX - off) / win; // where the subject sits inside the square (0–1)
  const near = (a: number) => Math.abs(pos - a) < 0.045;
  const state = near(1 / 3) || near(2 / 3) ? 'third' : near(0.5) ? 'center' : pos < 0.12 || pos > 0.88 ? 'edge' : '';
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="relative rounded-xl overflow-hidden bg-black aspect-square max-w-[min(100%,62vh)] mx-auto">
        <img src={photoUrl(p.photo)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: `${maxOff > 0 ? (off / maxOff) * 100 : 50}% 50%` }} />
        {grid && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="none">
            {[100, 200].map((x) => (
              <g key={x}>
                <line x1={x} y1={0} x2={x} y2={300} stroke="#fff" strokeOpacity={0.7} strokeWidth={1} />
                <line x1={0} y1={x} x2={300} y2={x} stroke="#fff" strokeOpacity={0.7} strokeWidth={1} />
              </g>
            ))}
            {[100, 200].map((x) => [100, 200].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r={4} fill="#e0b062" />))}
          </svg>
        )}
        {state && (
          <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold ${state === 'third' ? 'bg-emerald-500 text-stone-950' : 'bg-stone-900/85 text-stone-100'}`}>
            {state === 'third' ? T.onThird : state === 'center' ? T.onCenter : T.offEdge}
          </span>
        )}
      </div>
      <Credit photo={p.photo} />
      <div className="mt-2 flex justify-end">
        <label className="text-xs text-stone-400 flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" checked={grid} onChange={() => setGrid((g) => !g)} className="accent-stone-400" />
          {T.gridOn}
        </label>
      </div>
      <Slider label={T.cropLbl} value={v} max={100} onChange={setV} shown={`${Math.round(pos * 100)}%`} />
    </Frame>
  );
};

/* ───────────── Light: move a lamp around a head; small or large source ───────────── */
const LightPlay: React.FC<{ p: Extract<Play, { kind: 'light' }> }> = ({ p }) => {
  const T = useRichStrings();
  const [a, setA] = useState(3); // 0 front … 3 side … 6 back
  const [size, setSize] = useState(0); // 0 small … 4 large
  const ang = (a / 6) * Math.PI; // 0 = in front (towards camera), π = behind
  const lx = Math.sin(ang); // −1 … 1, light comes from the left side of the frame
  const lz = Math.cos(ang); // 1 = front, −1 = back
  const blur = 1 + size * 7;
  const label = a <= 1 ? T.dirFront : a >= 5 ? T.dirBack : T.dirSide;
  // shadow side: opposite to the light; strength grows when the light goes to the side/back
  const shadowX = 150 + 60 * lx;
  const darkness = Math.max(0, Math.min(0.92, 0.25 + 0.6 * (1 - lz) / 2 + (a >= 5 ? 0.3 : 0)));
  const rim = a >= 4 ? (a - 3) / 3 : 0;
  return (
    <Frame title={p.title} intro={p.intro}>
      <div className="grid sm:grid-cols-[1fr_9rem] gap-3 items-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-[340px] mx-auto rounded-xl bg-stone-800">
          <defs>
            <filter id="lp-soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={blur} />
            </filter>
            <clipPath id="lp-head">
              <ellipse cx={150} cy={140} rx={70} ry={92} />
            </clipPath>
          </defs>
          <rect width={300} height={300} fill={a >= 5 ? '#e7dccb' : '#3a3632'} />
          <ellipse cx={150} cy={140} rx={70} ry={92} fill="#d9b49a" />
          <path d="M70 300 Q150 220 230 300 Z" fill="#6b4a2f" />
          <g clipPath="url(#lp-head)">
            {/* shadow side of the face */}
            <ellipse cx={shadowX + 70} cy={150} rx={95} ry={130} fill="#000" opacity={darkness} filter="url(#lp-soft)" />
            {/* nose shadow */}
            <path d={`M150 120 L${150 + 22 * lx} 170 L150 172 Z`} fill="#000" opacity={a <= 4 ? 0.45 * Math.min(1, Math.abs(lx) + 0.2) : 0} filter="url(#lp-soft)" />
          </g>
          {rim > 0 && <ellipse cx={150} cy={140} rx={71} ry={93} fill="none" stroke="#fff5e0" strokeWidth={2 + 3 * rim} opacity={rim} />}
          <circle cx={132} cy={130} r={5} fill="#2b211b" />
          <circle cx={168} cy={130} r={5} fill="#2b211b" />
          <path d="M135 196 Q150 204 165 196" stroke="#8f3030" strokeWidth={3} fill="none" />
          {/* the lamp, seen from the camera */}
          <circle cx={150 - 125 * lx} cy={40} r={6 + size * 6} fill="#e0b062" opacity={a >= 5 ? 0.35 : 1} />
        </svg>
        <div className="text-xs text-stone-300 space-y-1.5">
          <p className="font-semibold text-stone-100">{label}</p>
          <p className="text-stone-400">{size <= 1 ? T.hard : size >= 3 ? T.soft : ''}</p>
        </div>
      </div>
      <Slider label={T.dirLbl} value={a} max={6} onChange={setA} shown={`${Math.round((a / 6) * 180)}°`} marks={['0°', '90°', '180°']} />
      <Slider label={T.sizeLbl} value={size} max={4} onChange={setSize} shown={['XS', 'S', 'M', 'L', 'XL'][size]} />
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
    case 'wb':
      return <WbPlay p={play} />;
    case 'crop':
      return <CropPlay p={play} />;
    case 'light':
      return <LightPlay p={play} />;
  }
};
