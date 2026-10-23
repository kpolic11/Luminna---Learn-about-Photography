import React, { useState } from 'react';
import { Compass, RotateCcw, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { LessonModule, SchoolLevel } from '../../data/types';

/** «Από ποιο επίπεδο να ξεκινήσω;» — 8 quick self-assessment questions, each option scored 0–3. */

type Q = { q: string; a: [string, string, string, string]; weak: LessonModule };

const DATA: Record<'el' | 'en', { title: string; intro: string; start: string; of: (i: number, n: number) => string; result: (lv: number, name: string) => string; why: string; weakest: string; go: string; again: string; qs: Q[] }> = {
  el: {
    title: 'Από ποιο επίπεδο να ξεκινήσω;',
    intro: '8 γρήγορες ερωτήσεις, περίπου ένα λεπτό. Απάντησε ειλικρινά: δεν υπάρχει «λάθος», μόνο σωστό σημείο εκκίνησης.',
    start: 'Ξεκίνα το τεστ',
    of: (i, n) => `Ερώτηση ${i} από ${n}`,
    result: (lv, name) => `Πρόταση: ξεκίνα από το Επίπεδο ${lv} · ${name}`,
    why: 'Μπορείς πάντα να γυρίσεις πίσω σε ό,τι θέλεις να φρεσκάρεις. Η σειρά είναι πρόταση, όχι υποχρέωση.',
    weakest: 'Αξίζει να δεις πρώτα και την ενότητα:',
    go: 'Πήγαινε εκεί',
    again: 'Ξανά από την αρχή',
    qs: [
      { q: 'Πώς φωτογραφίζεις συνήθως;', a: ['Με το κινητό, απλώς πατάω το κουμπί', 'Με το κινητό, πατάω στο θέμα και αλλάζω τη φωτεινότητα', 'Με κάμερα, σε A, S ή P', 'Με κάμερα σε M, σε RAW'], weak: 'exposure' },
      { q: 'Τι σημαίνει «ένα στοπ»;', a: ['Δεν ξέρω', 'Κάτι σχετικό με το κλείστρο', 'Διπλάσιο ή μισό φως', 'Διπλάσιο ή μισό φως, και υπολογίζω ισοδύναμες εκθέσεις από μνήμης'], weak: 'exposure' },
      { q: 'Φωτογραφίζεις χιόνι και βγαίνει γκρίζο. Ξέρεις γιατί;', a: ['Όχι', 'Υποψιάζομαι ότι φταίει η κάμερα', 'Ναι: το φωτόμετρο θέλει γκρι, δίνω + EV', 'Ναι, και ξέρω πότε να μετρήσω σημειακά ή να εκθέσω «προς τα δεξιά»'], weak: 'metering' },
      { q: 'Πώς ελέγχεις τι είναι καθαρό και τι θολό;', a: ['Δεν το ελέγχω', 'Ξέρω ότι το ανοιχτό διάφραγμα θολώνει το φόντο', 'Ελέγχω συνειδητά διάφραγμα, απόσταση και εστιακή', 'Χρησιμοποιώ υπερεστιακή, και focus stacking όταν χρειάζεται'], weak: 'focus-dof' },
      { q: 'Τι κάνεις με τις φωτογραφίες μετά τη λήψη;', a: ['Τίποτα, ή ένα φίλτρο', 'Βασικές διορθώσεις στο κινητό', 'Επεξεργασία RAW σε πρόγραμμα όπως το Lightroom', 'Καμπύλες, μάσκες, διαχείριση χρώματος, τύπωμα'], weak: 'editing' },
      { q: 'Πώς σχετίζεσαι με το φως;', a: ['Φωτογραφίζω όποτε τύχει', 'Προσέχω από πού έρχεται', 'Διαλέγω ώρα και σχήμα φωτισμού', 'Δουλεύω και με φλας ή φωτισμό στούντιο'], weak: 'light' },
      { q: 'Πώς είναι η δουλειά σου ως σύνολο;', a: ['Μεμονωμένες φωτογραφίες', 'Έχω ένα-δύο αγαπημένα θέματα', 'Έχω φτιάξει μικρές σειρές', 'Δουλεύω projects, έχω εκθέσει ή δημοσιεύσει'], weak: 'eye-1' },
      { q: 'Φωτογραφίζεις ανθρώπους;', a: ['Σχεδόν ποτέ', 'Φίλους και οικογένεια', 'Ζητώ και από αγνώστους', 'Δουλεύω με πελάτες ή μοντέλα'], weak: 'workshop-1' },
    ],
  },
  en: {
    title: 'Which level should I start from?',
    intro: '8 quick questions, about a minute. Answer honestly: there is no “wrong”, only the right starting point.',
    start: 'Start the quiz',
    of: (i, n) => `Question ${i} of ${n}`,
    result: (lv, name) => `Suggestion: start from Level ${lv} · ${name}`,
    why: 'You can always go back to anything you want to refresh. The order is a suggestion, not an obligation.',
    weakest: 'It is also worth looking first at:',
    go: 'Go there',
    again: 'Start over',
    qs: [
      { q: 'How do you usually take photos?', a: ['With a phone, I just press the button', 'With a phone, I tap the subject and adjust brightness', 'With a camera, in A, S or P', 'With a camera in M, shooting RAW'], weak: 'exposure' },
      { q: 'What does “one stop” mean?', a: ['I don’t know', 'Something to do with the shutter', 'Double or half the light', 'Double or half the light, and I can work out equivalent exposures in my head'], weak: 'exposure' },
      { q: 'You photograph snow and it comes out grey. Do you know why?', a: ['No', 'I suspect the camera is at fault', 'Yes: the meter wants grey, so I dial in + EV', 'Yes, and I know when to spot-meter or expose to the right'], weak: 'metering' },
      { q: 'How do you control what is sharp and what is blurred?', a: ['I don’t', 'I know a wide aperture blurs the background', 'I consciously control aperture, distance and focal length', 'I use hyperfocal distance, and focus stacking when needed'], weak: 'focus-dof' },
      { q: 'What do you do with photos after shooting?', a: ['Nothing, or a filter', 'Basic edits on my phone', 'RAW editing in software such as Lightroom', 'Curves, masks, colour management, printing'], weak: 'editing' },
      { q: 'How do you work with light?', a: ['I shoot whenever', 'I notice where it comes from', 'I choose the time of day and the lighting pattern', 'I also work with flash or studio lighting'], weak: 'light' },
      { q: 'What does your work look like as a whole?', a: ['Single photos', 'I have one or two favourite subjects', 'I have made small series', 'I work on projects and have exhibited or published'], weak: 'eye-1' },
      { q: 'Do you photograph people?', a: ['Almost never', 'Friends and family', 'I also ask strangers', 'I work with clients or models'], weak: 'workshop-1' },
    ],
  },
};

interface Props {
  levelName: (lv: SchoolLevel) => string;
  moduleTitle: (id: LessonModule) => string | undefined;
  onGoLevel: (lv: SchoolLevel) => void;
  onGoModule: (id: LessonModule) => void;
}

export const PlacementTest: React.FC<Props> = ({ levelName, moduleTitle, onGoLevel, onGoModule }) => {
  const { lang } = useLanguage();
  const D = DATA[lang as 'el' | 'en'] ?? DATA.el;
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= D.qs.length;

  const avg = answers.length ? answers.reduce((a, b) => a + b, 0) / answers.length : 0;
  const level: SchoolLevel = avg < 0.75 ? 1 : avg < 1.6 ? 2 : avg < 2.4 ? 3 : 4;
  // weakest area: the lowest-scoring answer below the recommended level
  let weakIdx = -1;
  answers.forEach((v, i) => {
    if (v < level - 1 && (weakIdx < 0 || v < answers[weakIdx])) weakIdx = i;
  });
  const weak = weakIdx >= 0 ? D.qs[weakIdx].weak : undefined;

  const reset = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <details className="mt-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 p-4 group" data-placement>
      <summary className="cursor-pointer font-semibold text-sky-300 flex items-center gap-2">
        <Compass className="w-4 h-4 shrink-0" />
        {D.title}
      </summary>
      <div className="mt-3">
        {step < 0 && (
          <div>
            <p className="text-sm text-stone-300">{D.intro}</p>
            <button onClick={reset} className="mt-3 px-3 py-2 rounded-xl text-xs font-bold bg-sky-500 text-stone-950 hover:bg-sky-400">
              {D.start}
            </button>
          </div>
        )}
        {step >= 0 && !done && (
          <div>
            <p className="text-[11px] font-mono text-sky-300">{D.of(step + 1, D.qs.length)}</p>
            <p className="font-display font-bold text-stone-100 mt-1">{D.qs[step].q}</p>
            <div className="mt-3 grid gap-2">
              {D.qs[step].a.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAnswers((p) => [...p, i]);
                    setStep((s) => s + 1);
                  }}
                  className="text-left px-3 py-2 rounded-xl text-sm bg-stone-950 border border-stone-800 text-stone-200 hover:border-sky-500/60"
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="h-1 rounded-full bg-stone-800 overflow-hidden mt-3">
              <div className="h-full bg-sky-500" style={{ width: `${(step / D.qs.length) * 100}%` }} />
            </div>
          </div>
        )}
        {done && (
          <div>
            <p className="font-display font-bold text-lg text-stone-100">{D.result(level, levelName(level))}</p>
            <p className="text-sm text-stone-400 mt-1">{D.why}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <button onClick={() => onGoLevel(level)} className="px-3 py-2 rounded-xl text-xs font-bold bg-sky-500 text-stone-950 hover:bg-sky-400 inline-flex items-center gap-1">
                {D.go}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={reset} className="px-3 py-2 rounded-xl text-xs font-semibold bg-stone-800 text-stone-300 hover:bg-stone-700 inline-flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" />
                {D.again}
              </button>
            </div>
            {weak && moduleTitle(weak) && (
              <p className="text-sm text-stone-300 mt-3">
                {D.weakest}{' '}
                <button onClick={() => onGoModule(weak)} className="underline decoration-sky-500/60 hover:text-sky-300">
                  {moduleTitle(weak)}
                </button>
              </p>
            )}
          </div>
        )}
      </div>
    </details>
  );
};
