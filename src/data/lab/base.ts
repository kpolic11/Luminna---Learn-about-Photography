import type { LessonBase, ModuleBase } from '../types';

/**
 * Structure of the Photography School: 4 levels, each with technique (tech), eye (eye),
 * practice (practice) and profession (pro) modules, in the recommended order.
 * Lesson texts live in el*.ts / en*.ts.
 */
export const MODULE_BASE: ModuleBase[] = [
  /* Level 1 — First steps */
  { id: 'light', level: 1, kind: 'tech', icon: 'Sun' },
  { id: 'exposure', level: 1, kind: 'tech', icon: 'Aperture', requires: ['light'] },
  { id: 'comp-basics', level: 1, kind: 'tech', icon: 'Grid3X3' },
  { id: 'eye-1', level: 1, kind: 'eye', icon: 'Eye' },

  /* Level 2 — Taking control */
  { id: 'focus-dof', level: 2, kind: 'tech', icon: 'Focus', requires: ['exposure'] },
  { id: 'metering', level: 2, kind: 'tech', icon: 'Gauge', requires: ['exposure'] },
  { id: 'comp-advanced', level: 2, kind: 'tech', icon: 'Shapes', requires: ['comp-basics'] },
  { id: 'lenses', level: 2, kind: 'tech', icon: 'ScanSearch', requires: ['focus-dof'] },
  { id: 'color-theory', level: 2, kind: 'eye', icon: 'Palette', requires: ['light'] },
  { id: 'editing', level: 2, kind: 'tech', icon: 'SlidersHorizontal', requires: ['metering'] },
  { id: 'eye-2', level: 2, kind: 'eye', icon: 'BookOpen', requires: ['eye-1'] },
  { id: 'workshop-1', level: 2, kind: 'practice', icon: 'Camera', requires: ['exposure', 'comp-basics'] },

  /* Level 3 — Technique in depth */
  { id: 'sensor', level: 3, kind: 'tech', icon: 'Cpu', requires: ['exposure', 'metering'] },
  { id: 'formats', level: 3, kind: 'tech', icon: 'RectangleHorizontal', requires: ['sensor', 'lenses'] },
  { id: 'sharpness', level: 3, kind: 'tech', icon: 'Crosshair', requires: ['focus-dof'] },
  { id: 'shutter', level: 3, kind: 'tech', icon: 'Timer', requires: ['exposure'] },
  { id: 'flash', level: 3, kind: 'tech', icon: 'Zap', requires: ['light', 'exposure'] },
  { id: 'color-mgmt', level: 3, kind: 'tech', icon: 'Pipette', requires: ['color-theory', 'editing'] },
  { id: 'editing-adv', level: 3, kind: 'tech', icon: 'Wand2', requires: ['editing'] },
  { id: 'eye-3', level: 3, kind: 'eye', icon: 'Layers', requires: ['eye-2'] },
  { id: 'workshop-2', level: 3, kind: 'practice', icon: 'Moon', requires: ['workshop-1'] },

  /* Level 4 — Professional */
  { id: 'studio', level: 4, kind: 'pro', icon: 'Lamp', requires: ['flash'] },
  { id: 'directing', level: 4, kind: 'pro', icon: 'Users', requires: ['workshop-1'] },
  { id: 'retouch', level: 4, kind: 'pro', icon: 'Brush', requires: ['editing-adv'] },
  { id: 'workflow', level: 4, kind: 'pro', icon: 'FolderTree', requires: ['editing'] },
  { id: 'print', level: 4, kind: 'pro', icon: 'Printer', requires: ['color-mgmt'] },
  { id: 'business', level: 4, kind: 'pro', icon: 'Briefcase' },
  { id: 'gear', level: 4, kind: 'pro', icon: 'Wrench', requires: ['sensor', 'formats'] },
  { id: 'eye-4', level: 4, kind: 'eye', icon: 'Sparkles', requires: ['eye-3'] },
];

const L = (module: LessonBase['module'], ...items: (string | [string, NonNullable<LessonBase['widget']>])[]): LessonBase[] =>
  items.map((it) => (typeof it === 'string' ? { id: it, module } : { id: it[0], module, widget: it[1] }));

export const LESSON_BASE: LessonBase[] = [
  /* ───── Level 1 ───── */
  ...L('light', ['exp-light', 'lightdir'], 'light-quality', 'light-time', ['exp-whitebalance', 'whitebalance'], 'light-portrait', 'light-key'),
  ...L('exposure', 'exp-what', ['exp-stops', 'stops'], 'exp-aperture', 'exp-shutter', 'exp-iso', ['exp-equivalent', 'equivalent'], ['exp-modes', 'modes'], 'exp-rules', 'phone-workflow'),
  ...L('comp-basics', 'comp-thirds', 'comp-horizon', 'comp-lines', 'comp-framing', 'comp-fill', 'comp-simplicity', 'comp-viewpoint', ['comp-aspect', 'aspect']),
  ...L('eye-1', 'eye-seeing', 'eye-light-subject', 'eye-intent', 'eye-daily'),

  /* ───── Level 2 ───── */
  ...L('focus-dof', 'focus-how', ['dof-what', 'dof'], ['dof-aperture', 'dof'], ['dof-distance', 'dof'], ['dof-lens-sensor', 'dof'], ['dof-hyperfocal', 'dof']),
  ...L('metering', ['exp-metering', 'metering'], 'metering-modes', 'exp-compensation', ['exp-histogram', 'histogram'], 'dynamic-range'),
  ...L('comp-advanced', 'comp-golden', 'comp-symmetry', 'comp-negative', 'comp-diagonals', 'comp-odds', 'comp-layers', 'comp-leadroom', 'comp-contrast', 'comp-patterns', 'comp-balance', 'comp-break'),
  ...L('lenses', ['lens-focal', 'focal'], 'lens-perspective'),
  ...L('color-theory', 'ct-making', 'ct-hsl', ['ct-harmony', 'colorwheel'], 'ct-warm-cool', 'ct-contrasts', 'ct-emotion', 'ct-palette', 'ct-bw'),
  ...L('editing', 'edit-files', 'edit-basics', 'edit-workflow'),
  ...L('eye-2', 'read-describe', 'read-punctum', 'read-szarkowski', 'read-light-story'),
  ...L('workshop-1', 'ws-approach', 'ws-portrait', 'ws-street-consent', 'ws-street', 'ws-landscape'),

  /* ───── Level 3 ───── */
  ...L('sensor', 'sensor-pixel', 'sensor-bayer', ['sensor-noise', 'noise'], 'sensor-iso', 'sensor-dual-iso', 'sensor-raw-ettr'),
  ...L('formats', 'fmt-history', 'fmt-crop', 'fmt-equivalence', 'fmt-pixels'),
  ...L('sharpness', 'sharp-what', ['sharp-diffraction', 'diffraction'], 'sharp-shake', 'sharp-af', 'sharp-stacking', 'sharp-support'),
  ...L('shutter', 'sh-types', 'sh-rolling', 'sh-long', 'sh-panning'),
  ...L('flash', ['fl-inverse', 'inverse'], 'fl-guide', 'fl-sync', 'fl-ambient', 'fl-offcamera', 'fl-curtain'),
  ...L('color-mgmt', 'cm-spaces', 'cm-profiles', 'cm-calibration', 'cm-mixed'),
  ...L('editing-adv', 'ed-curves', 'ed-local', 'ed-merge', 'ed-bw'),
  ...L('eye-3', 'series-project', 'series-research', 'series-edit', 'series-sequence', 'series-text'),
  ...L('workshop-2', 'ws-night', 'ws-astro', 'ws-macro', 'ws-product', 'ws-action'),

  /* ───── Level 4 ───── */
  ...L('studio', 'st-one-light', 'st-three-lights', 'st-ratios', 'st-meter', 'st-modifiers'),
  ...L('directing', 'dr-language', 'dr-posing', 'dr-client'),
  ...L('retouch', 'rt-dodge-burn', 'rt-skin', 'rt-ethics'),
  ...L('workflow', 'wf-tether', 'wf-catalog', 'wf-backup', 'wf-delivery'),
  ...L('print', 'pr-resolution', 'pr-papers', 'pr-proof', 'pr-present'),
  ...L('business', 'bz-markets', 'bz-portfolio', 'bz-social', 'bz-pricing', 'bz-contracts', 'bz-rights'),
  ...L('gear', 'gr-choose', 'gr-upgrade', 'gr-care'),
  ...L('eye-4', 'pro-style', 'pro-algorithm', 'pro-book', 'pro-critique', 'pro-ethics', 'pro-ai'),
];
