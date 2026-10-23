# Lumina: Η Ιστορία & Τέχνη της Φωτογραφίας (v3)

Δίγλωσση (ελληνικά / English) εφαρμογή αναφοράς για τη φωτογραφία, από τον αρχάριο ως τον επαγγελματία.

## Τι περιέχει

- **Ιστορία**: 21 πλήρη κεφάλαια. Κάθε κεφάλαιο έχει:
  - ενότητες και «Κοίτα προσεκτικά» (ανάλυση έργου)
  - άσκηση, «Το ήξερες;» και τεστ
  - πηγές
  - σύνδεσμους προς την Εγκυκλοπαίδεια
- **Σχολή**: πρόγραμμα σπουδών σε 4 επίπεδα.
  - 29 ενότητες με 149 μαθήματα: τεχνική, βλέμμα, πρακτική και επαγγελματικά.
  - Τεστ κατάταξης στην αρχή.
  - Σε κάθε μάθημα: «Σε 30 δευτερόλεπτα», «Πρόκληση 2 λεπτών», σχέδια και διαδραστικά παραδείγματα, έλεγχος κατανόησης και αφήγηση φωνής.
  - Σε κάθε επίπεδο: project και λίστα «Μπορώ να…».
- **Εγκυκλοπαίδεια**:
  - 104 φωτογράφοι, 21 κινήματα (μαζί και η εποχή των social media) και 12 είδη
  - λίστες «Περισσότεροι φωτογράφοι» με περίπου 290 ονόματα
  - 10 αναλύσεις «Πώς φτιάχτηκε» σε έργα δημόσιου τομέα
- **Χρονολόγια** (4 οπτικές), **Εργαλεία** (προσομοιωτές έκθεσης και κάδρου) και **Κουίζ**.
- **Λεξικό όρων**: 110 όροι, με σύνδεσμο προς το μάθημα ή το λήμμα που αναλύει τον καθένα.
- **Κοινότητα**: φωτογραφικές λέσχες, σύλλογοι, μουσεία, αρχεία και περιοδικά ανά Περιφέρεια, μόνο φορείς που ελέγχθηκαν ως ενεργοί.
- **Αναζήτηση σε όλο το site** (εικονίδιο φακού πάνω δεξιά): ψάχνει σε επίπεδο παραγράφου, χωρίς τόνους, και σε πηγαίνει κατευθείαν στην παράγραφο. Λειτουργεί εξ ολοκλήρου στον browser, χωρίς κόστος.
- **Ταυτότητα έργου**: συντελεστές και όλες οι πηγές.
- **Αφήγηση φωνής**: Gemini TTS, με εφεδρική φωνή του browser.

Κάθε σελίδα έχει δικό της σύνδεσμο, π.χ. `#/history/niepce`, `#/school/sensor/sensor-iso`, `#/encyclopedia/p/lange`, `#/community/kriti`, `#/search/κολλόδιο`.

## Ακρίβεια και εικόνες

- Όλα τα κείμενα ελέγχθηκαν από ανεξάρτητους ελεγκτές. Τα ευρήματα και οι διορθώσεις καταγράφονται στο `docs/FACT-CHECK.md`.
- Οι εικόνες είναι μόνο από δημόσιο τομέα ή με ελεύθερη άδεια (Wikimedia Commons, Library of Congress και άλλα). Για τα υπόλοιπα έργα υπάρχει σύνδεσμος προς το μουσείο που τα έχει.

## Πού βρίσκεται το περιεχόμενο

| Τι | Αρχείο |
|---|---|
| Κουμπιά & μηνύματα (el/en) | `src/i18n/ui.ts` |
| Κεφάλαια | `src/data/chapters/base.ts`, `src/data/chapters/{el,en}/` |
| Σχολή (ενότητες, μαθήματα, επίπεδα) | `src/data/lab/` |
| Εγκυκλοπαίδεια | `src/data/encyclopedia/` (`more.ts` = «Περισσότεροι φωτογράφοι», `howmade.ts` = «Πώς φτιάχτηκε») |
| Λεξικό όρων | `src/data/glossary.ts` |
| Κοινότητα | `src/data/community.ts` |
| Ευρετήριο αναζήτησης | `src/data/searchIndex.ts` |
| Χρονολόγια | `src/data/timelines/` |
| Πηγές | `src/data/sources.ts`, `src/data/sourceNames.ts` |
| Ιστορικές εικόνες | `src/data/media.ts` |

Η αγγλική έκδοση είναι πλήρης: κεφάλαια, Σχολή, Εγκυκλοπαίδεια, «Πώς φτιάχτηκε», λεξικό, χρονολόγια και κοινότητα. Τα αγγλικά αρχεία βρίσκονται δίπλα στα ελληνικά (`en*.ts`, `*-en.ts`, `en/`). Αν κάποτε προστεθεί κείμενο μόνο στα ελληνικά, η εφαρμογή δείχνει το ελληνικό ως εφεδρικό.

## Εκτέλεση

1. `npm install`
2. Βάλε `GEMINI_API_KEY` στο `.env` (δες `.env.example`). Χρειάζεται μόνο για την αφήγηση φωνής.
3. `npm run dev`

---

## English

Lumina is a bilingual (Greek / English) reference on photography, from beginner to professional. The English edition is complete.

- **History**: 21 full chapters, each with sections, a close look at a key work, an exercise, “Did you know?”, a quiz, sources and links to the Encyclopedia.
- **School**: a four-level curriculum with 29 modules and 149 lessons, a placement test, 30-second summaries, 2-minute challenges, diagrams, interactive widgets, comprehension checks and voice narration. Each level has a project and a “Can do” list.
- **Encyclopedia**: 104 photographers, 21 movements and 12 genres, “More photographers” lists with about 290 names, and 10 “How it was made” analyses of public-domain works.
- **Timelines**, **Tools** (exposure and composition simulators), **Quiz**, a **Glossary** of 110 terms, a **Community** page (verified clubs, associations, museums, archives and magazines in Greece, by region) and **site-wide search**.

All texts were checked by independent reviewers (see `docs/FACT-CHECK.md`). Images are public domain or freely licensed only; for other works the app links to the museum that holds them.

Run: `npm install`, add `GEMINI_API_KEY` to `.env` (only needed for voice narration), then `npm run dev`.
