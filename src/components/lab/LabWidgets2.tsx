import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

/* Interactive widgets for the advanced School levels.
 * All numbers are teaching models: simplified, but with the right physics and proportions. */

const T = {
  el: {
    model: 'Απλοποιημένο εκπαιδευτικό μοντέλο: οι αναλογίες είναι σωστές, τα ακριβή νούμερα διαφέρουν από κάμερα σε κάμερα.',
    noiseTitle: 'ISO στην κάμερα ή φωτεινότητα στην επεξεργασία;',
    noiseIso: 'ISO (ίδιο διάφραγμα και ταχύτητα: λιγότερο φως)',
    noiseSensor: 'Αισθητήρας',
    sensors: { invariant: 'ISO-invariant', variant: 'ISO-variant', dual: 'Dual native ISO' },
    leftLabel: (iso: number) => `ISO ${iso} στην κάμερα`,
    rightLabel: (st: number) => `ISO 100, +${st} στοπ στην επεξεργασία`,
    noiseShadow: 'Θόρυβος στις σκιές',
    noiseVerdict: {
      same: 'Σχεδόν ίδιο αποτέλεσμα: σε αυτόν τον αισθητήρα το ISO δεν «κερδίζει» σχεδόν τίποτα στις σκιές.',
      camera: 'Το ISO στην κάμερα βγάζει καθαρότερες σκιές: σε αυτόν τον αισθητήρα αξίζει να ανεβάσεις το ISO.',
      base: 'Στο βασικό ISO οι δύο εικόνες είναι ίδιες.',
    },
    diffTitle: 'Διάφραγμα, περίθλαση και το «γλυκό σημείο»',
    diffAperture: 'Διάφραγμα',
    diffSensor: 'Αισθητήρας',
    diffSensors: { ff24: 'Πλήρης, 24 MP', ff45: 'Πλήρης, 45 MP', apsc: 'APS-C, 24 MP', mft: 'Micro 4/3, 20 MP' },
    airy: 'Δίσκος Airy',
    pixel: 'Πίξελ',
    sharpness: 'Συνολική ευκρίνεια (ενδεικτικά)',
    diffVerdict: {
      wide: 'Ανοιχτό διάφραγμα: οι ατέλειες του φακού (εκτροπές) ρίχνουν λίγο την ευκρίνεια.',
      sweet: 'Κοντά στο «γλυκό σημείο» του φακού.',
      diff: 'Η περίθλαση αρχίζει να μαλακώνει την εικόνα: ο δίσκος Airy είναι πια μεγαλύτερος από δύο πίξελ.',
      heavy: 'Έντονη περίθλαση: η εικόνα μαλακώνει ορατά, όσο καλός κι αν είναι ο φακός.',
    },
    invTitle: 'Ο νόμος του αντίστροφου τετραγώνου',
    invDist: 'Απόσταση φωτός από το θέμα',
    invBg: 'Το φόντο είναι 1,5 m πίσω από το θέμα',
    invSubject: 'Θέμα',
    invBackground: 'Φόντο',
    invLight: 'Φως',
    invVsOne: (s: string) => `Σε σχέση με 1 m: ${s} στοπ`,
    invBgDiff: (s: string) => `Το φόντο είναι ${s} στοπ πιο σκοτεινό από το θέμα`,
    aspTitle: 'Το σχήμα του κάδρου',
    aspPos: 'Θέση κάδρου',
    aspNotes: {
      '3:2': 'Το κλασικό σχήμα του φιλμ 35 mm και των περισσότερων καμερών.',
      '4:3': 'Το σχήμα των κινητών και του Micro 4/3: λίγο πιο «ψηλό» από το 3:2.',
      '1:1': 'Τετράγωνο: ήρεμο, σταθερό, χωρίς κατεύθυνση. Το σχήμα του μεσαίου φορμά 6×6.',
      '16:9': 'Πανοραμικό, «κινηματογραφικό»: δίνει χώρο και κίνηση στον ορίζοντα.',
      '4:5': 'Κάθετο σχήμα που κυριαρχεί στα social και στο μεγάλο φορμά 4×5.',
      '9:16': 'Πολύ στενό κάθετο: stories, κινητό σε όρθια θέση.',
    } as Record<string, string>,
    cwTitle: 'Χρωματικός τροχός και αρμονίες',
    cwHue: 'Βασική απόχρωση',
    cwMode: 'Αρμονία',
    cwModes: { comp: 'Συμπληρωματικά', analog: 'Ανάλογα', triad: 'Τριαδικά', split: 'Διχασμένα συμπληρωματικά' },
    cwNotes: {
      comp: 'Απέναντι στον τροχό: η πιο δυνατή αντίθεση. Το ένα κάνει το άλλο να «χτυπά».',
      analog: 'Γειτονικά χρώματα: ήρεμη, ενιαία διάθεση, συχνά στη φύση.',
      triad: 'Τρία χρώματα σε ίσες αποστάσεις: ζωντανό και ισορροπημένο, αλλά δύσκολο. Συνήθως ένα κυριαρχεί.',
      split: 'Ένα χρώμα και οι δύο γείτονες του συμπληρωματικού του: αντίθεση πιο μαλακή από τα καθαρά συμπληρωματικά.',
    },
    cwNote: 'Ο τροχός εδώ είναι ο «φωτογραφικός» (RGB): το συμπληρωματικό του μπλε είναι το κίτρινο, όχι το πορτοκαλί του ζωγραφικού τροχού.',
  },
  en: {
    model: 'Simplified teaching model: the proportions are right, exact numbers vary from camera to camera.',
    noiseTitle: 'ISO in camera, or brightness in editing?',
    noiseIso: 'ISO (same aperture and shutter speed: less light)',
    noiseSensor: 'Sensor',
    sensors: { invariant: 'ISO-invariant', variant: 'ISO-variant', dual: 'Dual native ISO' },
    leftLabel: (iso: number) => `ISO ${iso} in camera`,
    rightLabel: (st: number) => `ISO 100, +${st} stops in editing`,
    noiseShadow: 'Shadow noise',
    noiseVerdict: {
      same: 'Almost the same result: on this sensor, ISO gains you almost nothing in the shadows.',
      camera: 'In-camera ISO gives cleaner shadows: on this sensor it is worth raising the ISO.',
      base: 'At base ISO the two images are identical.',
    },
    diffTitle: 'Aperture, diffraction and the “sweet spot”',
    diffAperture: 'Aperture',
    diffSensor: 'Sensor',
    diffSensors: { ff24: 'Full frame, 24 MP', ff45: 'Full frame, 45 MP', apsc: 'APS-C, 24 MP', mft: 'Micro 4/3, 20 MP' },
    airy: 'Airy disk',
    pixel: 'Pixel',
    sharpness: 'Overall sharpness (indicative)',
    diffVerdict: {
      wide: 'Wide open: lens aberrations lower sharpness a little.',
      sweet: 'Near the lens “sweet spot”.',
      diff: 'Diffraction starts to soften the image: the Airy disk is now larger than two pixels.',
      heavy: 'Strong diffraction: the image is visibly softer, however good the lens.',
    },
    invTitle: 'The inverse square law',
    invDist: 'Distance from light to subject',
    invBg: 'The background is 1.5 m behind the subject',
    invSubject: 'Subject',
    invBackground: 'Background',
    invLight: 'Light',
    invVsOne: (s: string) => `Compared with 1 m: ${s} stops`,
    invBgDiff: (s: string) => `The background is ${s} stops darker than the subject`,
    aspTitle: 'The shape of the frame',
    aspPos: 'Frame position',
    aspNotes: {
      '3:2': 'The classic shape of 35 mm film and most cameras.',
      '4:3': 'The shape of phones and Micro 4/3: a little “taller” than 3:2.',
      '1:1': 'Square: calm, stable, without direction. The shape of 6×6 medium format.',
      '16:9': 'Wide, “cinematic”: gives space and movement along the horizon.',
      '4:5': 'A vertical shape that dominates social media, and the shape of 4×5 large format.',
      '9:16': 'Very narrow vertical: stories, a phone held upright.',
    } as Record<string, string>,
    cwTitle: 'Colour wheel and harmonies',
    cwHue: 'Base hue',
    cwMode: 'Harmony',
    cwModes: { comp: 'Complementary', analog: 'Analogous', triad: 'Triadic', split: 'Split-complementary' },
    cwNotes: {
      comp: 'Opposite each other on the wheel: the strongest contrast. Each makes the other “pop”.',
      analog: 'Neighbouring colours: a calm, unified mood, common in nature.',
      triad: 'Three colours at equal distances: lively and balanced, but difficult. Usually one dominates.',
      split: 'One colour plus the two neighbours of its complement: a softer contrast than pure complements.',
    },
    cwNote: 'This is the “photographic” (RGB) wheel: the complement of blue is yellow, not the orange of the painter’s wheel.',
  },
};

const useT = () => {
  const { lang } = useLanguage();
  return T[lang as 'el' | 'en'] ?? T.el;
};

const Card: React.FC<{ children: React.ReactNode; title?: string; note?: string }> = ({ children, title, note }) => (
  <div className="keep-dark rounded-2xl bg-stone-950 border border-stone-800 p-4">
    {title && <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">{title}</p>}
    {children}
    {note && <p className="mt-3 text-[11px] text-stone-500 leading-snug">{note}</p>}
  </div>
);

const Seg: React.FC<{ options: [string, string][]; value: string; onChange: (v: string) => void }> = ({ options, value, onChange }) => (
  <div className="flex flex-wrap gap-1.5">
    {options.map(([k, label]) => (
      <button
        key={k}
        onClick={() => onChange(k)}
        aria-pressed={value === k}
        className={`px-2.5 py-1 rounded-lg text-xs border transition-colors ${
          value === k ? 'bg-amber-500 text-stone-950 border-amber-500 font-semibold' : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-stone-500'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

/* ---------------- Noise / ISO invariance ---------------- */

/** deterministic pseudo-random gaussian */
function makeRng(seed: number) {
  let s = seed >>> 0;
  const u = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return (s + 0.5) / 4294967296;
  };
  return () => Math.sqrt(-2 * Math.log(u())) * Math.cos(2 * Math.PI * u());
}

const NW = 200;
const NH = 125;
/** linear scene luminance 0..1: a dim interior with a window */
const SCENE: Float32Array = (() => {
  const a = new Float32Array(NW * NH);
  for (let y = 0; y < NH; y++)
    for (let x = 0; x < NW; x++) {
      let v = 0.03 + 0.05 * (1 - y / NH); // dark wall
      if (x > 120 && x < 180 && y > 15 && y < 70) v = 0.6 + 0.2 * (1 - y / 70); // window
      if (x > 120 && x < 180 && (Math.abs(x - 150) < 1.5 || Math.abs(y - 42) < 1.5)) v = 0.05; // frame
      if (y > 95) v = 0.02 + 0.015 * ((x >> 3) % 2); // floor
      const dx = x - 55, dy = y - 70;
      if (dx * dx + dy * dy < 22 * 22) v = 0.12 + 0.05 * (-dx / 22); // object (vase)
      if (x > 20 && x < 40 && y > 20 && y < 45) v = 0.08; // picture on wall
      a[y * NW + x] = v;
    }
  return a;
})();

type SensorKind = 'invariant' | 'variant' | 'dual';
/** input-referred read noise in electrons for a given ISO */
function readNoise(kind: SensorKind, iso: number) {
  const g = iso / 100;
  if (kind === 'invariant') return Math.hypot(3, 4 / g);
  if (kind === 'variant') return Math.hypot(3, 28 / g);
  // dual conversion gain: switches to high gain at ISO 800
  return iso >= 800 ? Math.hypot(1.6, 2.5 / (g / 8)) : Math.hypot(6, 8 / g);
}

function renderNoise(canvas: HTMLCanvasElement | null, kind: SensorKind, iso: number, pushStops: number, readIso: number, seed: number) {
  if (!canvas) return 0;
  const ctx = canvas.getContext('2d');
  if (!ctx) return 0;
  const FW = 40000; // full well at base ISO (electrons) for scene value 1
  const gain = 2 ** pushStops; // brightness multiplication needed to get a normal image
  const rn = readNoise(kind, readIso);
  const rng = makeRng(seed);
  const img = ctx.createImageData(NW, NH);
  let shadowSum = 0;
  let shadowSq = 0;
  let shadowN = 0;
  for (let i = 0; i < SCENE.length; i++) {
    const e = (SCENE[i] * FW) / gain; // electrons actually collected
    const meas = e + rng() * Math.sqrt(e + rn * rn);
    let v = (meas * gain) / FW;
    if (SCENE[i] < 0.05) {
      shadowSum += v;
      shadowSq += v * v;
      shadowN++;
    }
    v = Math.max(0, Math.min(1, v));
    const c = Math.round(255 * Math.pow(v, 1 / 2.2));
    img.data[i * 4] = c;
    img.data[i * 4 + 1] = Math.round(c * 0.97);
    img.data[i * 4 + 2] = Math.round(c * 0.92);
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const mean = shadowSum / shadowN;
  return Math.sqrt(Math.max(0, shadowSq / shadowN - mean * mean));
}

export const NoiseWidget: React.FC = () => {
  const t = useT();
  const [stops, setStops] = useState(4); // ISO 1600
  const [kind, setKind] = useState<SensorKind>('invariant');
  const iso = 100 * 2 ** stops;
  const left = useRef<HTMLCanvasElement>(null);
  const right = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const a = renderNoise(left.current, kind, iso, stops, iso, 7);
    const b = renderNoise(right.current, kind, iso, stops, 100, 7);
    setN([a, b]);
  }, [kind, iso, stops]);
  const ratio = n[0] > 0 ? n[1] / n[0] : 1;
  const verdict = stops === 0 ? t.noiseVerdict.base : ratio < 1.25 ? t.noiseVerdict.same : t.noiseVerdict.camera;
  const bar = (v: number) => `${Math.min(100, v * 900)}%`;
  return (
    <Card title={t.noiseTitle} note={t.model}>
      <div className="grid grid-cols-2 gap-2">
        {[
          [left, t.leftLabel(iso), n[0]],
          [right, t.rightLabel(stops), n[1]],
        ].map(([ref, label, val], i) => (
          <div key={i} className="min-w-0">
            <canvas ref={ref as React.RefObject<HTMLCanvasElement>} width={NW} height={NH} className="w-full rounded-lg bg-black" style={{ imageRendering: 'pixelated' }} />
            <p className="text-[11px] text-stone-300 mt-1">{label as string}</p>
            <div className="h-1.5 rounded-full bg-stone-800 overflow-hidden mt-1">
              <div className="h-full bg-rose-500 transition-all" style={{ width: bar(val as number) }} />
            </div>
            <p className="text-[10px] text-stone-500">{t.noiseShadow}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-3 text-xs">
        <label className="flex items-center gap-3">
          <span className="w-40 text-stone-400 shrink-0">{t.noiseIso}</span>
          <input type="range" min={0} max={6} step={1} value={stops} onChange={(e) => setStops(+e.target.value)} className="flex-1 accent-amber-500 min-w-0" />
          <span className="w-16 text-right text-amber-300 font-mono">ISO {iso}</span>
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-40 text-stone-400 shrink-0">{t.noiseSensor}</span>
          <Seg options={(Object.keys(t.sensors) as SensorKind[]).map((k) => [k, t.sensors[k]])} value={kind} onChange={(v) => setKind(v as SensorKind)} />
        </div>
        <p className="text-stone-200 text-sm">{verdict}</p>
      </div>
    </Card>
  );
};

/* ---------------- Diffraction ---------------- */
const STOPS_F = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32];
const PITCH: Record<string, number> = { ff24: 5.9, ff45: 4.4, apsc: 3.9, mft: 3.3 }; // micrometres

export const DiffractionWidget: React.FC = () => {
  const t = useT();
  const { lang } = useLanguage();
  const num = (x: number) => (Number.isInteger(x) ? String(x) : x.toFixed(1).replace('.', lang === 'el' ? ',' : '.'));
  const [i, setI] = useState(5);
  const [sensor, setSensor] = useState('ff24');
  const N = STOPS_F[i];
  const airy = 2.44 * 0.55 * N; // µm, green light
  const p = PITCH[sensor];
  // indicative sharpness: aberrations shrink as you stop down, diffraction grows
  const blurAt = (n: number) => Math.hypot(14 / (n * n) + 1.2, (2.44 * 0.55 * n) / p / 1.6, 1);
  const curve = STOPS_F.map((n) => 1 / blurAt(n));
  const maxC = Math.max(...curve);
  const sharp = curve.map((c) => c / maxC);
  const ratio = airy / p;
  const verdict = N <= 2 ? t.diffVerdict.wide : ratio <= 2 ? t.diffVerdict.sweet : ratio <= 4 ? t.diffVerdict.diff : t.diffVerdict.heavy;
  const scale = 4; // px per µm in the drawing
  const blurPx = Math.max(0, (1 - sharp[i]) * 3.2);
  return (
    <Card title={t.diffTitle} note={t.model}>
      <div className="grid sm:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 160 120" className="w-full rounded-lg bg-stone-900">
          {Array.from({ length: Math.ceil(160 / (p * scale)) + 1 }).map((_, k) => (
            <line key={`v${k}`} x1={k * p * scale} y1={0} x2={k * p * scale} y2={120} stroke="#44403c" strokeWidth="0.5" />
          ))}
          {Array.from({ length: Math.ceil(120 / (p * scale)) + 1 }).map((_, k) => (
            <line key={`h${k}`} x1={0} y1={k * p * scale} x2={160} y2={k * p * scale} stroke="#44403c" strokeWidth="0.5" />
          ))}
          <defs>
            <radialGradient id="airyG">
              <stop offset="0%" stopColor="#fde68a" stopOpacity="1" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="80" cy="60" r={Math.min(75, (airy * scale) / 2)} fill="url(#airyG)" />
          <circle cx="80" cy="60" r={Math.min(75, (airy * scale) / 2)} fill="none" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="2 2" />
          <rect x={0} y={92} width={160} height={28} fill="#0c0a09" opacity="0.75" />
          <rect x={6} y={98} width={Math.min(10, p * scale)} height={Math.min(10, p * scale)} fill="#78716c" />
          <text x={20} y={106} fontSize="7" fill="#a8a29e">
            {t.pixel} {num(p)} µm
          </text>
          <circle cx={11} cy={113} r={3} fill="#fbbf24" />
          <text x={20} y={116} fontSize="7" fill="#fbbf24">
            {t.airy} {num(airy)} µm
          </text>
        </svg>
        <div className="min-w-0">
          <div className="rounded-lg bg-stone-100 p-2 overflow-hidden">
            <svg viewBox="0 0 120 50" className="w-full" style={{ filter: `blur(${blurPx}px)` }}>
              {Array.from({ length: 24 }).map((_, k) => (
                <line key={k} x1={4 + k * 2.4} y1={4} x2={4 + k * 2.4} y2={30} stroke="#111" strokeWidth={0.9} />
              ))}
              <text x={66} y={20} fontSize="9" fontFamily="serif" fill="#111">
                Lumina
              </text>
              <text x={66} y={30} fontSize="5" fill="#111">
                f/{num(N)} · {num(airy)} µm
              </text>
              <circle cx="20" cy="42" r="5" fill="none" stroke="#111" strokeWidth="0.6" />
              <circle cx="20" cy="42" r="2.5" fill="none" stroke="#111" strokeWidth="0.6" />
            </svg>
          </div>
          <p className="text-[11px] text-stone-400 mt-2">{t.sharpness}</p>
          <svg viewBox="0 0 200 50" className="w-full">
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              points={sharp.map((s, k) => `${10 + (k * 180) / (STOPS_F.length - 1)},${44 - s * 38}`).join(' ')}
            />
            {STOPS_F.map((n, k) => (
              <g key={n}>
                <text x={10 + (k * 180) / (STOPS_F.length - 1)} y={50} fontSize="5.5" textAnchor="middle" fill={k === i ? '#fbbf24' : '#78716c'}>
                  {num(n)}
                </text>
              </g>
            ))}
            <circle cx={10 + (i * 180) / (STOPS_F.length - 1)} cy={44 - sharp[i] * 38} r="3" fill="#fbbf24" />
          </svg>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-xs">
        <label className="flex items-center gap-3">
          <span className="w-24 text-stone-400 shrink-0">{t.diffAperture}</span>
          <input type="range" min={0} max={STOPS_F.length - 1} value={i} onChange={(e) => setI(+e.target.value)} className="flex-1 accent-amber-500 min-w-0" />
          <span className="w-12 text-right text-amber-300 font-mono">f/{num(N)}</span>
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-24 text-stone-400 shrink-0">{t.diffSensor}</span>
          <Seg options={Object.entries(t.diffSensors)} value={sensor} onChange={setSensor} />
        </div>
        <p className="text-stone-200 text-sm">{verdict}</p>
      </div>
    </Card>
  );
};

/* ---------------- Inverse square ---------------- */
export const InverseSquareWidget: React.FC = () => {
  const t = useT();
  const [d, setD] = useState(1);
  const bgD = d + 1.5;
  const subjStops = -2 * Math.log2(d);
  const bgDiff = 2 * Math.log2(bgD / d);
  const lum = (stops: number) => Math.max(0.04, Math.min(1, 0.75 * 2 ** stops));
  const subjL = lum(0); // subject correctly exposed (we expose for the subject)
  const bgL = lum(-bgDiff);
  const tone = (v: number) => {
    const c = Math.round(255 * Math.pow(v, 1 / 2.2));
    return `rgb(${c},${Math.round(c * 0.93)},${Math.round(c * 0.85)})`;
  };
  const dec = (x: number) => x.toFixed(1).replace('.', t === T.el ? ',' : '.');
  const fmt = (x: number) => (Math.abs(x) < 0.05 ? '0' : (x > 0 ? '+' : '−') + dec(Math.abs(x)));
  const px = (m: number) => 20 + m * 34; // metres → svg x
  return (
    <Card title={t.invTitle} note={t.model}>
      <svg viewBox="0 0 220 110" className="w-full rounded-lg bg-stone-900">
        <rect x={px(bgD)} y={10} width={220 - px(bgD)} height={88} fill={tone(bgL)} />
        <text x={Math.min(212, px(bgD) + 4)} y={20} fontSize="7" fill={bgL > 0.4 ? '#1c1917' : '#d6d3d1'}>
          {t.invBackground}
        </text>
        {/* light cone */}
        <polygon points={`${px(0) + 6},55 ${px(bgD)},${55 - 18 * bgD} ${px(bgD)},${55 + 18 * bgD}`} fill="#fde68a" opacity="0.08" />
        <rect x={px(0) - 4} y={45} width={10} height={20} rx={2} fill="#fbbf24" />
        <text x={px(0) - 6} y={76} fontSize="7" fill="#fbbf24">
          {t.invLight}
        </text>
        <circle cx={px(d)} cy={42} r={7} fill={tone(subjL)} />
        <rect x={px(d) - 7} y={50} width={14} height={30} rx={4} fill={tone(subjL)} />
        <text x={px(d) - 10} y={92} fontSize="7" fill="#d6d3d1">
          {t.invSubject}
        </text>
        <line x1={px(0)} y1={102} x2={px(d)} y2={102} stroke="#a8a29e" strokeWidth="0.6" />
        <text x={(px(0) + px(d)) / 2} y={100} fontSize="6" textAnchor="middle" fill="#a8a29e">
          {dec(d)} m
        </text>
      </svg>
      <div className="mt-4 space-y-2 text-xs">
        <label className="flex items-center gap-3">
          <span className="w-40 text-stone-400 shrink-0">{t.invDist}</span>
          <input type="range" min={0.5} max={4} step={0.1} value={d} onChange={(e) => setD(+e.target.value)} className="flex-1 accent-amber-500 min-w-0" />
          <span className="w-12 text-right text-amber-300 font-mono">{dec(d)} m</span>
        </label>
        <p className="text-stone-500">{t.invBg}</p>
        <p className="text-stone-200 text-sm">{t.invVsOne(fmt(subjStops))}</p>
        <p className="text-stone-200 text-sm">{t.invBgDiff(fmt(bgDiff).replace('+', ''))}</p>
      </div>
    </Card>
  );
};

/* ---------------- Aspect ratio ---------------- */
const RATIOS: [string, number][] = [
  ['3:2', 3 / 2],
  ['4:3', 4 / 3],
  ['1:1', 1],
  ['16:9', 16 / 9],
  ['4:5', 4 / 5],
  ['9:16', 9 / 16],
];
export const AspectWidget: React.FC = () => {
  const t = useT();
  const [r, setR] = useState('3:2');
  const [pos, setPos] = useState(50);
  const ratio = RATIOS.find(([k]) => k === r)![1];
  const W = 240;
  const H = 150;
  const fh = ratio >= W / H ? W / ratio : H;
  const fw = ratio >= W / H ? W : H * ratio;
  const fx = ((W - fw) * pos) / 100;
  const fy = ((H - fh) * pos) / 100;
  const scene = useMemo(
    () => (
      <g>
        <rect width={W} height={H} fill="#7dd3fc" />
        <rect y={92} width={W} height={58} fill="#65a30d" />
        <path d="M0 92 L40 60 L80 85 L130 50 L180 88 L240 70 L240 92 Z" fill="#475569" />
        <circle cx={200} cy={30} r={12} fill="#fde047" />
        <rect x={52} y={70} width={6} height={30} fill="#78350f" />
        <circle cx={55} cy={62} r={16} fill="#166534" />
        <circle cx={150} cy={102} r={4} fill="#fcd34d" />
        <rect x={146} y={106} width={8} height={18} rx={2} fill="#b91c1c" />
        <path d="M0 150 Q120 110 240 140 L240 150 Z" fill="#a16207" opacity="0.6" />
      </g>
    ),
    [],
  );
  return (
    <Card title={t.aspTitle}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-lg">
        {scene}
        <path d={`M0 0 H${W} V${H} H0 Z M${fx} ${fy} v${fh} h${fw} v${-fh} Z`} fill="#0c0a09" opacity="0.7" fillRule="evenodd" />
        <rect x={fx} y={fy} width={fw} height={fh} fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        {[1, 2].map((k) => (
          <g key={k} stroke="#fbbf24" strokeWidth="0.4" opacity="0.6">
            <line x1={fx + (fw * k) / 3} y1={fy} x2={fx + (fw * k) / 3} y2={fy + fh} />
            <line x1={fx} y1={fy + (fh * k) / 3} x2={fx + fw} y2={fy + (fh * k) / 3} />
          </g>
        ))}
      </svg>
      <div className="mt-4 space-y-3 text-xs">
        <Seg options={RATIOS.map(([k]) => [k, k])} value={r} onChange={setR} />
        <label className="flex items-center gap-3">
          <span className="w-24 text-stone-400 shrink-0">{t.aspPos}</span>
          <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} className="flex-1 accent-amber-500 min-w-0" />
        </label>
        <p className="text-stone-200 text-sm">{t.aspNotes[r]}</p>
      </div>
    </Card>
  );
};

/* ---------------- Colour wheel ---------------- */
type Harmony = 'comp' | 'analog' | 'triad' | 'split';
const OFFSETS: Record<Harmony, number[]> = { comp: [0, 180], analog: [-30, 0, 30], triad: [0, 120, 240], split: [0, 150, 210] };

export const ColorWheelWidget: React.FC = () => {
  const t = useT();
  const [hue, setHue] = useState(210);
  const [mode, setMode] = useState<Harmony>('comp');
  const hues = OFFSETS[mode].map((o) => (((hue + o) % 360) + 360) % 360);
  const pt = (h: number, r: number) => {
    const a = ((h - 90) * Math.PI) / 180;
    return [60 + r * Math.cos(a), 60 + r * Math.sin(a)];
  };
  return (
    <Card title={t.cwTitle} note={t.cwNote}>
      <div className="grid sm:grid-cols-[180px_1fr] gap-4 items-center">
        <div className="relative w-[180px] h-[180px] mx-auto">
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: 'conic-gradient(hsl(0 90% 55%), hsl(60 90% 55%), hsl(120 90% 45%), hsl(180 90% 45%), hsl(240 90% 60%), hsl(300 90% 55%), hsl(360 90% 55%))' }}
          />
          <div className="absolute inset-[30%] rounded-full bg-stone-950" />
          <svg viewBox="0 0 120 120" className="absolute inset-0">
            {hues.length > 1 && <polygon points={hues.map((h) => pt(h, 50).join(',')).join(' ')} fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />}
            {hues.map((h, k) => {
              const [x, y] = pt(h, 50);
              return <circle key={k} cx={x} cy={y} r={k === OFFSETS[mode].indexOf(0) ? 6 : 4.5} fill={`hsl(${h} 90% 55%)`} stroke="#fff" strokeWidth="1.5" />;
            })}
          </svg>
        </div>
        <div className="min-w-0">
          <div className="flex rounded-xl overflow-hidden h-16">
            {hues.map((h, k) => (
              <div key={k} className="flex-1" style={{ background: `hsl(${h} 75% 50%)`, flexGrow: OFFSETS[mode][k] === 0 ? 3 : 1 }} />
            ))}
          </div>
          <p className="text-sm text-stone-200 mt-3">{t.cwNotes[mode]}</p>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-xs">
        <label className="flex items-center gap-3">
          <span className="w-28 text-stone-400 shrink-0">{t.cwHue}</span>
          <input type="range" min={0} max={359} value={hue} onChange={(e) => setHue(+e.target.value)} className="flex-1 accent-amber-500 min-w-0" />
          <span className="w-6 h-6 rounded-full border border-stone-600" style={{ background: `hsl(${hue} 90% 55%)` }} />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-28 text-stone-400 shrink-0">{t.cwMode}</span>
          <Seg options={(Object.keys(t.cwModes) as Harmony[]).map((k) => [k, t.cwModes[k]])} value={mode} onChange={(v) => setMode(v as Harmony)} />
        </div>
      </div>
    </Card>
  );
};
