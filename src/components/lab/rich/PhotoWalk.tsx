import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, RotateCcw } from 'lucide-react';
import type { Ann, AnnColor, Photo, PhotoWalk as Walk } from './types';
import { useRichStrings } from './strings';

const COL: Record<AnnColor, string> = { y: '#e0b062', g: '#8fb59a', r: '#c96a5e', b: '#8ea4c0', w: '#f5f5f4' };

export const photoUrl = (p: Photo, w = 1400) =>
  p.src.includes('images.unsplash.com') ? `${p.src}?auto=format&fit=crop&q=78&w=${w}` : p.src;

export const Credit: React.FC<{ photo: Photo; simulated?: boolean }> = ({ photo, simulated }) => {
  const T = useRichStrings();
  return (
    <p className="text-[11px] text-stone-500 mt-1.5">
      {simulated && <span className="text-amber-400/90 font-semibold mr-1.5">{T.simulated} ·</span>}
      <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {photo.credit}
      </a>
    </p>
  );
};

/** Label pill drawn in SVG units (viewBox width 1000). */
const Label: React.FC<{ x: number; y: number; text: string; color: string; anchor?: 'start' | 'middle' | 'end' }> = ({ x, y, text, color, anchor = 'middle' }) => {
  const w = text.length * 15 + 26;
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  return (
    <g>
      <rect x={x0} y={y - 21} width={w} height={32} rx={9} fill="rgba(12,10,9,.82)" stroke={color} strokeWidth={2} />
      <text x={x0 + w / 2} y={y + 2} textAnchor="middle" fontSize={23} fontWeight={700} fill={color} fontFamily="Inter, system-ui, sans-serif">
        {text}
      </text>
    </g>
  );
};

export const AnnLayer: React.FC<{ ann: Ann[]; ratio: number; upTo?: number }> = ({ ann, ratio, upTo = 99 }) => {
  const W = 1000;
  const H = W / ratio;
  const m = Math.min(W, H);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <marker id="ah" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
        </marker>
      </defs>
      {ann
        .filter((a) => (a.step ?? 0) <= upTo)
        .map((a, i) => {
          const c = COL[a.c ?? 'y'];
          const st = { stroke: c, strokeWidth: 5, fill: 'none', filter: 'drop-shadow(0 0 3px rgba(0,0,0,.8))' } as const;
          switch (a.t) {
            case 'circle':
              return (
                <g key={i} className="ann-in">
                  <circle cx={a.x * W} cy={a.y * H} r={a.r * m} {...st} />
                  {a.label && <Label x={a.x * W} y={a.y * H + a.r * m + 34} text={a.label} color={c} />}
                </g>
              );
            case 'ellipse':
              return (
                <g key={i} className="ann-in">
                  <ellipse cx={a.x * W} cy={a.y * H} rx={a.rx * W} ry={a.ry * H} {...st} />
                  {a.label && <Label x={a.x * W} y={a.y * H + a.ry * H + 34} text={a.label} color={c} />}
                </g>
              );
            case 'box':
              return (
                <g key={i} className="ann-in">
                  <rect x={a.x * W} y={a.y * H} width={(a.x2 - a.x) * W} height={(a.y2 - a.y) * H} rx={8} {...st} />
                  {a.label && <Label x={((a.x + a.x2) / 2) * W} y={a.y2 * H - 22} text={a.label} color={c} />}
                </g>
              );
            case 'arrow':
              return (
                <g key={i} className="ann-in" style={{ color: c }}>
                  <line x1={a.x * W} y1={a.y * H} x2={a.x2 * W} y2={a.y2 * H} {...st} markerEnd="url(#ah)" />
                  {a.label && <Label x={a.x * W} y={a.y * H - 16} text={a.label} color={c} />}
                </g>
              );
            case 'text':
              return (
                <g key={i} className="ann-in">
                  <Label x={a.x * W} y={a.y * H} text={a.label} color={c} />
                </g>
              );
            case 'num':
              return (
                <g key={i} className="ann-in">
                  <circle cx={a.x * W} cy={a.y * H} r={24} fill={c} stroke="#0c0a09" strokeWidth={3} />
                  <text x={a.x * W} y={a.y * H + 9} textAnchor="middle" fontSize={26} fontWeight={800} fill="#0c0a09">
                    {a.n}
                  </text>
                </g>
              );
          }
        })}
    </svg>
  );
};

/** A real photograph, read step by step: each «Next step» reveals a mark and a line of text. */
export const PhotoWalk: React.FC<{ walk: Walk }> = ({ walk }) => {
  const T = useRichStrings();
  const [step, setStep] = useState(0);
  const n = walk.steps.length;
  return (
    <div className="rounded-2xl bg-stone-950 border border-stone-800 p-4 keep-dark">
      <p className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
        <Eye className="w-3.5 h-3.5" />
        {T.readIt}
      </p>
      <h5 className="font-display font-bold text-stone-100 mt-1">{walk.title}</h5>
      <p className="text-sm text-stone-300 mt-1 font-serif-reading">{walk.intro}</p>
      <div className="relative mt-3 rounded-xl overflow-hidden bg-black" style={{ aspectRatio: String(walk.photo.ratio), maxWidth: `calc(62vh * ${walk.photo.ratio})`, marginInline: 'auto' }}>
        <img src={photoUrl(walk.photo)} alt={walk.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <AnnLayer ann={walk.ann} ratio={walk.photo.ratio} upTo={step} />
      </div>
      <Credit photo={walk.photo} simulated={walk.simulated} />
      <ol className="mt-3 space-y-1.5">
        {walk.steps.map((s, i) => (
          <li
            key={i}
            className={`flex gap-2 text-sm rounded-lg px-2 py-1 transition-colors ${
              i < step ? 'text-stone-300' : i === step - 1 ? '' : 'text-stone-600'
            } ${i === step - 1 ? 'bg-amber-500/10 text-stone-100' : ''}`}
          >
            <span className="font-mono text-amber-400 shrink-0">{i + 1}.</span>
            <span>{i < step ? s : '…'}</span>
          </li>
        ))}
      </ol>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-stone-300 disabled:opacity-30 inline-flex items-center gap-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          {T.back}
        </button>
        {step < n ? (
          <button
            onClick={() => setStep((s) => Math.min(n, s + 1))}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-stone-950 inline-flex items-center gap-1"
          >
            {step === 0 ? T.startReading : T.nextStep}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button onClick={() => setStep(0)} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-stone-300 inline-flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" />
            {T.again}
          </button>
        )}
        <span className="ml-auto text-[11px] text-stone-500 font-mono">
          {step}/{n}
        </span>
      </div>
    </div>
  );
};
