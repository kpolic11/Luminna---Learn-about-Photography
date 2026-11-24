import React, { useMemo } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { href } from '../router';
import { MEDIA } from '../data/media';
import type { SchoolLevel } from '../data/types';

/* ── Copy for the home page (kept here: it is the page's own voice) ── */
const COPY = {
  el: {
    label: 'Lumina · Σχολή φωτογραφίας',
    title: 'Μάθε φωτογραφία όπως την ανακάλυψαν.',
    intro:
      'Κάθε ρύθμιση της κάμερας σου είναι η λύση σε ένα πρόβλημα που κάποιος αντιμετώπισε πρώτος. Εδώ μαθαίνεις έκθεση, φως και σύνθεση με τη σειρά που τα ανακάλυψαν οι άνθρωποι: δοκιμάζεις με τα χέρια σου, τα βλέπεις πάνω σε αληθινές φωτογραφίες και βγαίνεις να φωτογραφίσεις.',
    start: 'Ξεκίνα το πρώτο μάθημα',
    resume: (n: number) => `Συνέχισε · ${n} μαθήματα ολοκληρωμένα`,
    history: (n: number) => `Ή ξεκίνα από την ιστορία · ${n} κεφάλαια`,
    facts: ['Δωρεάν', 'Ελληνικά & English', 'Για κινητό και κάμερα'],
    plate: 'Αρ. 001',
    plateTitle: 'Θέα από το παράθυρο στο Le Gras',
    plateBy: 'Joseph Nicéphore Niépce, π. 1826–27',
    plateNote: 'Η παλαιότερη φωτογραφία που σώζεται. Χρόνος έκθεσης: πολλές ώρες, ίσως μέρες. Σήμερα το κινητό σου θέλει 1/1000 του δευτερολέπτου.',
    sheetLabel: 'Φύλλο επαφής',
    sheetTitle: 'Κάθε τεχνική έχει μια ιστορία',
    sheetSub: 'Πέντε στιγμές που άλλαξαν τη φωτογραφία, και το μάθημα που γεννήθηκε από την καθεμιά.',
    frames: [
      ['1826', 'Ώρες ολόκληρες για μία εικόνα', 'Τι είναι η έκθεση', 'exp-what'],
      ['1838', 'Ο πρώτος άνθρωπος σε φωτογραφία: στάθηκε ακίνητος', 'ISO: γιατί χρειάζονταν λεπτά', 'exp-iso'],
      ['1878', 'Το άλογο του Muybridge παγώνει στον αέρα', 'Ταχύτητα κλείστρου', 'exp-shutter'],
      ['1888', '«Εσύ πατάς το κουμπί, εμείς κάνουμε τα υπόλοιπα»', 'Η έκθεση στο κινητό', 'phone-workflow'],
      ['1942', 'Ο Ansel Adams και η Ομάδα f/64', 'Διάφραγμα & βάθος πεδίου', 'exp-aperture'],
    ] as [string, string, string, string][],
    lesson: 'Μάθημα',
    schoolLabel: 'Η σχολή',
    schoolTitle: 'Τέσσερα επίπεδα, από το πρώτο κλικ ως το προσωπικό σου ύφος',
    level: 'Επίπεδο',
    modules: (m: number, l: number) => `${m} ενότητες · ${l} μαθήματα`,
    placement: 'Δεν ξέρεις από πού να ξεκινήσεις; Κάνε το τεστ κατάταξης',
    archiveLabel: 'Το αρχείο',
    archiveTitle: 'Η βιβλιοθήκη της σχολής',
    archiveSub: 'Ό,τι συναντάς στα μαθήματα, εδώ σε βάθος. Κάθε λήμμα σε γυρνά στο μάθημα όπου το χρησιμοποιείς.',
    archive: [
      ['history', 'Ιστορία', 'Από τον σκοτεινό θάλαμο στο κινητό, σε κεφάλαια.'],
      ['encyclopedia', 'Εγκυκλοπαίδεια', 'Φωτογράφοι, ρεύματα, τεχνικές και μηχανές.'],
      ['timelines', 'Χρονολόγια', 'Ποιος, τι και πότε, με μια ματιά.'],
      ['glossary', 'Λεξικό όρων', 'Από το stop ως το bokeh, με απλά λόγια.'],
    ] as [string, string, string][],
    tools: 'Εργαλεία & κουίζ',
    toolsSub: 'Προσομοιωτής έκθεσης, εργαλείο σύνθεσης, ερωτήσεις για εξάσκηση.',
  },
  en: {
    label: 'Lumina · School of photography',
    title: 'Learn photography the way it was discovered.',
    intro:
      'Every setting on your camera is the answer to a problem someone faced first. Here you learn exposure, light and composition in the order people discovered them: you try things with your own hands, see them in real photographs and go out to shoot.',
    start: 'Start the first lesson',
    resume: (n: number) => `Continue · ${n} lessons done`,
    history: (n: number) => `Or begin with the history · ${n} chapters`,
    facts: ['Free', 'English & Ελληνικά', 'For phone and camera'],
    plate: 'No. 001',
    plateTitle: 'View from the Window at Le Gras',
    plateBy: 'Joseph Nicéphore Niépce, c. 1826–27',
    plateNote: 'The oldest surviving photograph. Exposure time: many hours, perhaps days. Your phone today needs 1/1000 of a second.',
    sheetLabel: 'Contact sheet',
    sheetTitle: 'Every technique has a story',
    sheetSub: 'Five moments that changed photography, and the lesson each one gave us.',
    frames: [
      ['1826', 'Hours for a single image', 'What exposure is', 'exp-what'],
      ['1838', 'The first person in a photograph: he stood still', 'ISO: why it took minutes', 'exp-iso'],
      ['1878', "Muybridge's horse freezes in mid-air", 'Shutter speed', 'exp-shutter'],
      ['1888', '«You press the button, we do the rest»', 'Exposure on a phone', 'phone-workflow'],
      ['1942', 'Ansel Adams and Group f/64', 'Aperture & depth of field', 'exp-aperture'],
    ] as [string, string, string, string][],
    lesson: 'Lesson',
    schoolLabel: 'The school',
    schoolTitle: 'Four levels, from the first click to a style of your own',
    level: 'Level',
    modules: (m: number, l: number) => `${m} modules · ${l} lessons`,
    placement: 'Not sure where to start? Take the placement test',
    archiveLabel: 'The archive',
    archiveTitle: "The school's library",
    archiveSub: 'Everything you meet in the lessons, in depth. Every entry leads back to the lesson where you use it.',
    archive: [
      ['history', 'History', 'From the dark chamber to the phone, in chapters.'],
      ['encyclopedia', 'Encyclopedia', 'Photographers, movements, techniques and cameras.'],
      ['timelines', 'Timelines', 'Who, what and when, at a glance.'],
      ['glossary', 'Glossary', 'From stop to bokeh, in plain words.'],
    ] as [string, string, string][],
    tools: 'Tools & quizzes',
    toolsSub: 'Exposure simulator, composition tool, practice questions.',
  },
};

const FRAME_IMG = [MEDIA.leGras, MEDIA.boulevardDuTemple, MEDIA.muybridgeGallop, MEDIA.kodakAd1888, MEDIA.adamsTetons];

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">{children}</p>
);

function learnedCount(): number {
  try {
    const raw = window.localStorage.getItem('lumina.lab.learned');
    return raw ? Object.values(JSON.parse(raw) as Record<string, boolean>).filter(Boolean).length : 0;
  } catch {
    return 0;
  }
}

export const HomePage: React.FC = () => {
  const { content, lang } = useLanguage();
  const C = lang === 'el' ? COPY.el : COPY.en;
  const historyCount = content.chapters.filter((c) => c.part !== 'guide').length;
  const done = useMemo(learnedCount, []);
  const levels = useMemo(
    () =>
      ([1, 2, 3, 4] as SchoolLevel[]).map((lv) => {
        const mods = content.modules.filter((m) => m.level === lv);
        return { lv, text: content.levels[lv], mods, lessons: mods.reduce((a, m) => a + m.lessons.length, 0) };
      }),
    [content]
  );

  return (
    <div className="pb-6">
      {/* ── HERO: a sentence and a plate ── */}
      <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 pt-12 sm:pt-16 pb-14 border-b border-stone-800 items-end">
        <div className="lg:col-span-7">
          <Label>{C.label}</Label>
          <h1 className="mt-5 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] font-display font-bold text-stone-100 max-w-[15ch]">{C.title}</h1>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed max-w-[58ch]">{C.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <a href={href('school')} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 font-semibold text-[15px]">
              {done > 0 ? C.resume(done) : C.start}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={href('history', 'camera-obscura')} className="text-[15px] font-medium text-stone-200 underline decoration-stone-600 underline-offset-[6px] hover:decoration-amber-400">
              {C.history(historyCount)}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-400">
            {C.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <figure className="lg:col-span-5">
          <div className="bg-stone-900 border border-stone-800 p-3 sm:p-4 rounded-sm shadow-sm">
            <img src={MEDIA.leGras.url} alt={C.plateTitle} className="w-full aspect-[4/3] object-cover" />
          </div>
          <figcaption className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 text-sm">
            <span className="font-mono text-amber-400 text-xs pt-0.5">{C.plate}</span>
            <div>
              <p className="font-semibold text-stone-100">{C.plateTitle}</p>
              <p className="text-stone-400">{C.plateBy}</p>
              <p className="text-stone-300 mt-2 leading-relaxed">{C.plateNote}</p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* ── CONTACT SHEET: history → lesson ── */}
      <section className="pt-14 pb-14 border-b border-stone-800">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <Label>{C.sheetLabel}</Label>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-stone-100">{C.sheetTitle}</h2>
          </div>
          <p className="lg:col-span-5 text-stone-400 leading-relaxed">{C.sheetSub}</p>
        </div>
        <div className="keep-dark mt-8 -mx-4 sm:mx-0 bg-stone-950 sm:rounded-md p-3 sm:p-4 overflow-x-auto">
          <ol className="grid grid-flow-col auto-cols-[78%] sm:auto-cols-[42%] lg:grid-flow-row lg:grid-cols-5 gap-3">
            {C.frames.map(([year, moment, lesson, id], i) => (
              <li key={id}>
                <a href={href('school', 'exposure', id)} className="group block h-full bg-stone-900 hover:bg-stone-800 transition-colors">
                  <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono text-amber-400/90">
                    <span>{String(i + 1).padStart(2, '0')}A</span>
                    <span>{year}</span>
                  </div>
                  <img src={FRAME_IMG[i].url} alt={moment} loading="lazy" className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500" />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-stone-100 leading-snug">{moment}</p>
                    <p className="mt-3 text-xs text-stone-400">{C.lesson}</p>
                    <p className="text-sm text-amber-300 font-medium flex items-center gap-1">
                      {lesson}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── THE SCHOOL: levels as an index ── */}
      <section className="pt-14 pb-14 border-b border-stone-800">
        <Label>{C.schoolLabel}</Label>
        <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-stone-100 max-w-[24ch]">{C.schoolTitle}</h2>
        <ol className="mt-8 border-t border-stone-800">
          {levels.map(({ lv, text, mods, lessons }) => (
            <li key={lv} className="border-b border-stone-800">
              <a href={href('school', mods[0]?.id)} className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[5rem_1.1fr_1.7fr_auto] gap-x-4 gap-y-1 py-5 items-baseline hover:bg-stone-900/60 px-1">
                <span className="font-display text-3xl sm:text-4xl font-bold text-stone-600 group-hover:text-amber-400 transition-colors">{lv}</span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-stone-500">{C.level} {lv}</span>
                  <span className="block text-lg sm:text-xl font-semibold text-stone-100">{text.name}</span>
                </span>
                <span className="col-start-2 col-span-2 sm:col-span-1 sm:col-start-auto text-sm text-stone-400 leading-relaxed">
                  {text.who}
                  <span className="block mt-1 text-stone-500">{C.modules(mods.length, lessons)}</span>
                </span>
                <ArrowUpRight className="row-start-1 col-start-3 sm:col-start-4 w-5 h-5 text-stone-500 group-hover:text-amber-400" />
              </a>
            </li>
          ))}
        </ol>
        <a href={href('school')} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200">
          {C.placement}
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      {/* ── THE ARCHIVE ── */}
      <section className="pt-14">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <Label>{C.archiveLabel}</Label>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-stone-100">{C.archiveTitle}</h2>
          </div>
          <p className="lg:col-span-5 text-stone-400 leading-relaxed">{C.archiveSub}</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800 border border-stone-800">
          {C.archive.map(([id, title, desc], i) => (
            <a key={id} href={href(id as 'history')} className="group bg-stone-950 hover:bg-stone-900 p-5 flex flex-col min-h-[150px]">
              <span className="font-mono text-[10px] text-stone-500">
                {['A', 'B', 'C', 'D'][i]} · {String(i + 1).padStart(3, '0')}
              </span>
              <span className="mt-3 text-lg font-semibold text-stone-100 group-hover:text-amber-300">{title}</span>
              <span className="mt-1 text-sm text-stone-400 leading-relaxed flex-1">{desc}</span>
              <ArrowRight className="mt-3 w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
        <a href={href('tools')} className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-stone-800 p-5 hover:bg-stone-900 group">
          <span className="font-semibold text-stone-100">{C.tools}</span>
          <span className="text-sm text-stone-400 flex items-center gap-2">
            {C.toolsSub}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </section>
    </div>
  );
};
