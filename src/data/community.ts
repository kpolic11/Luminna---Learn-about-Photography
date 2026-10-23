/**
 * Φωτογραφική κοινότητα στην Ελλάδα: λέσχες, ομάδες, σύλλογοι, μουσεία,
 * αρχεία, περιοδικά και εκδόσεις, ανά Περιφέρεια. Φορείς με επίσημη σελίδα ή,
 * όπου δεν υπάρχει, με πρόσφατο δημοσίευμα (2024–2026) ως σύνδεσμο. Χωρίς φεστιβάλ και χωρίς εκδηλώσεις που αλλάζουν κάθε χρόνο.
 */
export type CommunityKind = 'club' | 'pro' | 'museum' | 'archive' | 'magazine' | 'publisher';

export type RegionId =
  | 'attiki'
  | 'kentriki-makedonia'
  | 'anatoliki-makedonia-thraki'
  | 'dytiki-makedonia'
  | 'ipeiros'
  | 'thessalia'
  | 'ionia'
  | 'dytiki-ellada'
  | 'sterea'
  | 'peloponnisos'
  | 'voreio-aigaio'
  | 'notio-aigaio'
  | 'kriti'
  | 'national';

export interface CommunityItem {
  name: string;
  /** English name, when the official name is in Greek */
  nameEn?: string;
  /** City or area, in Greek */
  city: string;
  cityEn: string;
  kind: CommunityKind;
  url: string;
}

export const REGION_NAMES: Record<RegionId, { el: string; en: string }> = {
  attiki: { el: 'Αττική', en: 'Attica' },
  'kentriki-makedonia': { el: 'Κεντρική Μακεδονία', en: 'Central Macedonia' },
  'anatoliki-makedonia-thraki': { el: 'Ανατολική Μακεδονία και Θράκη', en: 'Eastern Macedonia and Thrace' },
  'dytiki-makedonia': { el: 'Δυτική Μακεδονία', en: 'Western Macedonia' },
  ipeiros: { el: 'Ήπειρος', en: 'Epirus' },
  thessalia: { el: 'Θεσσαλία', en: 'Thessaly' },
  ionia: { el: 'Ιόνια Νησιά', en: 'Ionian Islands' },
  'dytiki-ellada': { el: 'Δυτική Ελλάδα', en: 'Western Greece' },
  sterea: { el: 'Στερεά Ελλάδα', en: 'Central Greece' },
  peloponnisos: { el: 'Πελοπόννησος', en: 'Peloponnese' },
  'voreio-aigaio': { el: 'Βόρειο Αιγαίο', en: 'North Aegean' },
  'notio-aigaio': { el: 'Νότιο Αιγαίο', en: 'South Aegean' },
  kriti: { el: 'Κρήτη', en: 'Crete' },
  national: { el: 'Πανελλαδικά και online', en: 'Nationwide and online' },
};

export const COMMUNITY: Record<RegionId, CommunityItem[]> = {
  attiki: [
    { name: 'Ελληνική Φωτογραφική Εταιρεία (ΕΦΕ)', nameEn: 'Hellenic Photographic Society (EFE)', city: 'Αθήνα', cityEn: 'Athens', kind: 'club', url: 'https://www.efe.com.gr/gr' },
    { name: 'Φωτογραφικός Κύκλος', nameEn: 'Photographic Circle (Fotografikos Kyklos)', city: 'Αθήνα', cityEn: 'Athens', kind: 'club', url: 'https://www.photocircle.gr/' },
    { name: 'Φωτογραφική Ομάδα METApolis', nameEn: 'METApolis Photography Group', city: 'Αθήνα', cityEn: 'Athens', kind: 'club', url: 'https://www.metapolis.gr/fotografiki-omada-metapolis' },
    { name: 'ΦωτοΠρολετάριοι', nameEn: 'PhotoProletarii', city: 'Δάφνη', cityEn: 'Dafni', kind: 'club', url: 'https://www.photoproletarii.gr/' },
    { name: 'Διάφραγμα 26', nameEn: 'Diafragma 26', city: 'Αθήνα', cityEn: 'Athens', kind: 'club', url: 'http://www.diafragma26.gr/' },
    { name: 'Φωτογραφική Λέσχη Ηλιούπολης', nameEn: 'Ilioupoli Photography Club', city: 'Ηλιούπολη', cityEn: 'Ilioupoli', kind: 'club', url: 'https://www.fotolesxi.com/' },
    { name: 'Φωτογραφική Λέσχη Ελευσίνας', nameEn: 'Elefsina Photography Club', city: 'Ελευσίνα', cityEn: 'Elefsina', kind: 'club', url: 'https://www.facebook.com/fotografiki.lesxi.elefsinas/' },
    { name: 'Ένωση Φωτορεπόρτερ Ελλάδας', nameEn: 'Union of Greek Photojournalists', city: 'Αθήνα', cityEn: 'Athens', kind: 'pro', url: 'https://pressphoto-union.gr/' },
    { name: 'Διεθνής Ένωση Φωτορεπόρτερ Ελλάδας (ΔΙΕΦΕ)', nameEn: 'International Union of Photojournalists of Greece (DIEFE)', city: 'Αθήνα', cityEn: 'Athens', kind: 'pro', url: 'http://www.diefe.gr/' },
    { name: 'Μουσείο Μπενάκη: Φωτογραφικά Αρχεία', nameEn: 'Benaki Museum: Photographic Archives', city: 'Αθήνα', cityEn: 'Athens', kind: 'archive', url: 'https://www.benaki.org/index.php?option=com_collections&view=collection&id=20&lang=el' },
    { name: 'ΕΛΙΑ / ΜΙΕΤ: Φωτογραφικό Αρχείο', nameEn: 'ELIA / MIET: Photographic Archive', city: 'Αθήνα', cityEn: 'Athens', kind: 'archive', url: 'https://www.elia.org.gr/' },
    { name: 'Φωτογραφική Λέσχη Αμαρουσίου – f531', nameEn: 'Marousi Photography Club – f531', city: 'Μαρούσι', cityEn: 'Marousi', kind: 'club', url: 'https://www.f531.gr/' },
    { name: 'Φωτομέτρηση – Φωτογραφική Λέσχη Σαλαμίνας', nameEn: 'Fotometrisi – Salamina Photography Club', city: 'Σαλαμίνα', cityEn: 'Salamina', kind: 'club', url: 'https://www.facebook.com/photometrisis/' },
    { name: 'Λέσχη Φωτογραφίας ν.κ. Κωνσταντινουπολιτών / artPhotoClub', nameEn: 'Neos Kyklos Konstantinoupoliton Photography Club / artPhotoClub', city: 'Φιλοθέη-Ψυχικό', cityEn: 'Filothei-Psychiko', kind: 'club', url: 'https://www.facebook.com/p/ΛΕΣΧΗ-Φωτογραφίας-Κωνσταντινουπολιτών-100063537333747/' },
    { name: 'NTUA Photography Club (φοιτητική λέσχη ΕΜΠ)', nameEn: 'NTUA Photography Club (National Technical University of Athens student club)', city: 'Αθήνα', cityEn: 'Athens', kind: 'club', url: 'https://www.instagram.com/photography.ntua/' },
  ],
  'kentriki-makedonia': [
    { name: 'MOMus-Μουσείο Φωτογραφίας Θεσσαλονίκης', nameEn: 'MOMus – Thessaloniki Museum of Photography', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'museum', url: 'https://www.momus.gr/museum/thessaloniki-museum-photography' },
    { name: 'Μουσείο Φωτογραφίας Δήμου Καλαμαριάς «Χρήστος Καλεμκερής»', nameEn: '“Christos Kalemkeris” Photography Museum of the Municipality of Kalamaria', city: 'Καλαμαριά', cityEn: 'Kalamaria', kind: 'museum', url: 'https://phmk.gr/' },
    { name: 'f14 Κοινόν Φωτογράφων', nameEn: 'f14 Photographers’ Collective (f14 Koinon Fotografon)', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'club', url: 'https://f14.gr' },
    { name: 'Out of Focus', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'club', url: 'https://outoffocus2014.blogspot.com/' },
    { name: 'Φωτογραφική Ομάδα Θεσσαλονίκης UMBRA', nameEn: 'UMBRA Thessaloniki Photography Group', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'club', url: 'https://www.facebook.com/p/Φωτογραφική-Ομάδα-Θεσσαλονίκης-UMBRA-Photography-Group-Thessaloniki-UMBRA-61556247207127/' },
    { name: 'Φωτογραφική Ομάδα Βέροιας «Αντίθεσις»', nameEn: '“Antithesis” Veria Photography Group', city: 'Βέροια', cityEn: 'Veria', kind: 'club', url: 'https://antithesisphoto.wordpress.com/' },
    { name: 'Φωτογραφική Ομάδα Κατερίνης Pixelscape', nameEn: 'Pixelscape Katerini Photography Group', city: 'Κατερίνη', cityEn: 'Katerini', kind: 'club', url: 'https://www.pixelscape.gr' },
    { name: 'Ένωση Καλλιτεχνών Φωτογράφων Κεντροδυτικής Μακεδονίας', nameEn: 'Union of Artist Photographers of West-Central Macedonia', city: 'Βέροια', cityEn: 'Veria', kind: 'pro', url: 'https://cwm-photographers.gr' },
    { name: 'Σωματείο Φωτογράφων και Εικονοληπτών Κεντρικής Μακεδονίας', nameEn: 'Association of Photographers and Camera Operators of Central Macedonia', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'pro', url: 'https://sppv.eu' },
    { name: 'PTTL – Photonews Through the Lens', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'magazine', url: 'https://www.pttl.gr/' },
    { name: 'Φωτογραφικές Ομάδες «Φωτοπόροι» & «Φ»', nameEn: '“Fotoporoi” & “F” Photography Groups', city: 'Θεσσαλονίκη', cityEn: 'Thessaloniki', kind: 'club', url: 'https://www.facebook.com/f.photographygroup/' },
    { name: 'Φωτογραφική Ομάδα Κατερίνης', nameEn: 'Katerini Photography Group', city: 'Κατερίνη', cityEn: 'Katerini', kind: 'club', url: 'https://www.politismika.gr/ekthesi-fotografias-tempi-tria-chronia-meta-ston-kapniko-stathmo-apo-tin-fotografiki-omada-katerinis/' },
    { name: 'Φωτογραφική Ομάδα Κιλκίς', nameEn: 'Kilkis Photography Group', city: 'Κιλκίς', cityEn: 'Kilkis', kind: 'club', url: 'https://www.karatzova.com/2025/07/blog-post_234.html' },
    { name: 'Σύλλογος Εδεσσαίων Καλλιτεχνών «Απελλής» (φωτογραφία)', nameEn: '“Apellis” Edessa Artists’ Association (photography)', city: 'Έδεσσα', cityEn: 'Edessa', kind: 'club', url: 'https://yessiosmuseum.com/en/ekdilosi/parousiasi-fotografikou-ergou-tou-syllogou-kallitexnon-edessas-apellis/' },
  ],
  'anatoliki-makedonia-thraki': [
    { name: 'Φωτογραφικός Όμιλος Καβάλας', nameEn: 'Kavala Photographic Club', city: 'Καβάλα', cityEn: 'Kavala', kind: 'club', url: 'https://www.photoclubkavala.gr' },
    { name: 'e.ΦΟΔ.ος – Φωτογραφική Ομάδα Δράμας', nameEn: 'e.FOD.os – Drama Photography Group', city: 'Δράμα', cityEn: 'Drama', kind: 'club', url: 'https://www.efodos.gr' },
    { name: 'Κέντρο Δημιουργικής Φωτογραφίας Θράκης', nameEn: 'Thrace Centre for Creative Photography', city: 'Αλεξανδρούπολη', cityEn: 'Alexandroupoli', kind: 'club', url: 'https://www.kedifot.gr/' },
    { name: 'Πρότυπο Φωτογραφικό Εργαστήρι Ομίλου «Ορφέας» Σερρών', nameEn: 'Model Photography Workshop of the “Orfeas” Club of Serres', city: 'Σέρρες', cityEn: 'Serres', kind: 'club', url: 'https://www.serres.gr/colours-syllogiki-ekthesi-fotografias-sto-plaisio-ton-eleytherion-2026/' },
    { name: 'Φωτογραφική Ομάδα Κομοτηνής', nameEn: 'Komotini Photography Group', city: 'Κομοτηνή', cityEn: 'Komotini', kind: 'club', url: 'https://xronos.gr/secondary-tags/fotografiki-omada-komotinis' },
  ],
  'dytiki-makedonia': [
    { name: 'Φωτογραφική Λέσχη Καστοριάς', nameEn: 'Kastoria Photography Club', city: 'Καστοριά', cityEn: 'Kastoria', kind: 'club', url: 'https://www.facebook.com/groups/photolk/' },
    { name: 'Φωτογραφική Ομάδα f22 Πτολεμαΐδας', nameEn: 'f22 Ptolemaida Photography Group', city: 'Πτολεμαΐδα', cityEn: 'Ptolemaida', kind: 'club', url: 'https://www.photologio.gr/photoclubs-exhibitions/o-topos-mou-ekthesi-fotografias-apo-tis-fotografiki-omada-f22-ptolemaidas-omada-fotografias-edessas-apellis-kai-fotografiki-omada-beroias-antithesis/' },
  ],
  ipeiros: [
    { name: 'Λέσχη Δημιουργικής Φωτογραφίας Ιωαννίνων «Φωτόραση»', nameEn: '“Fotorasi” Ioannina Creative Photography Club', city: 'Ιωάννινα', cityEn: 'Ioannina', kind: 'club', url: 'https://fotorasi.gr' },
    { name: 'Φωτογραφική Ομάδα Φιλιππιάδας «Κα.Δρώ»', nameEn: '“Ka.Dro” Filippiada Photography Group', city: 'Φιλιππιάδα', cityEn: 'Filippiada', kind: 'club', url: 'https://www.kadrw.gr' },
    { name: 'Ελληνική Φωτογραφική Εταιρεία Πρέβεζας', nameEn: 'Hellenic Photographic Society of Preveza', city: 'Πρέβεζα', cityEn: 'Preveza', kind: 'club', url: 'https://ipreveza.gr/i-elliniki-fotografiki-etaireia-prevezas-sas-proskalei-stin-17i-etisia-ekthesi-fotografias/' },
    { name: 'ΦωτΟΑρτ – Φωτογραφική Ομάδα Άρτας', nameEn: 'FotOArt – Arta Photography Group', city: 'Άρτα', cityEn: 'Arta', kind: 'club', url: 'https://www.facebook.com/fwtoart/' },
  ],
  thessalia: [
    { name: 'Φωτογραφική Λέσχη Λάρισας', nameEn: 'Larissa Photography Club', city: 'Λάρισα', cityEn: 'Larissa', kind: 'club', url: 'https://fll.gr/' },
    { name: 'Φωτογραφική Λέσχη Βόλου', nameEn: 'Volos Photography Club', city: 'Βόλος', cityEn: 'Volos', kind: 'club', url: 'https://photovolos.blogspot.com/' },
    { name: 'Λέσχη Φωτογραφίας & Κινηματογράφου Καρδίτσας (ΛΕΦΚΚ)', nameEn: 'Karditsa Photography & Film Club (LEFKK)', city: 'Καρδίτσα', cityEn: 'Karditsa', kind: 'club', url: 'https://www.lefkk.gr/' },
    { name: 'Φωτογραφική Ομάδα fplus', nameEn: 'fplus Photography Group', city: 'Λάρισα', cityEn: 'Larissa', kind: 'club', url: 'https://www.facebook.com/fplus.gr/' },
  ],
  ionia: [
    { name: 'Φωτογραφική Ομάδα ΦΩΤΟ.κύτταρο', nameEn: 'FOTO.kyttaro Photography Group', city: 'Λευκάδα', cityEn: 'Lefkada', kind: 'club', url: 'https://photokittaro.wixsite.com/photokittaro' },
    { name: 'Φωτογραφική Λέσχη Κέρκυρας (ΦΩΤΟ.ΛΕ.ΚΕ.)', nameEn: 'Corfu Photography Club (FOTO.LE.KE.)', city: 'Κέρκυρα', cityEn: 'Corfu', kind: 'club', url: 'https://photoleke.wordpress.com/' },
    { name: 'Ομάδα Φωτογραφίας 28mm', nameEn: '28mm Photography Group', city: 'Κέρκυρα', cityEn: 'Corfu', kind: 'club', url: 'https://www.life-news.gr/2026/09/16/i-poli-mou-i-kerkyra-mesa-apo-ton-fako-tis-omadas-28mm/' },
  ],
  'dytiki-ellada': [
    { name: 'Φωτογραφική Λέσχη Πάτρας «Ηδύφως»', nameEn: '“Idyfos” Patras Photography Club', city: 'Πάτρα', cityEn: 'Patras', kind: 'club', url: 'https://idifosgr.wordpress.com' },
    { name: 'Φωτογραφική Ομάδα Art8', nameEn: 'Art8 Photography Group', city: 'Αγρίνιο', cityEn: 'Agrinio', kind: 'club', url: 'https://art8.gr' },
    { name: 'ΦΩΤΑΚΤΙΣ – Σύλλογος Επαγγελματιών Φωτογράφων Ηλείας', nameEn: 'FOTAKTIS – Association of Professional Photographers of Ilia', city: 'Ηλεία', cityEn: 'Ilia', kind: 'pro', url: 'https://fotaktis.wordpress.com/' },
  ],
  sterea: [
    { name: 'Φωτογραφική Λέσχη Λιβαδειάς', nameEn: 'Livadeia Photography Club', city: 'Λιβαδειά', cityEn: 'Livadeia', kind: 'club', url: 'http://www.fotolesxilivadias.gr/' },
    { name: 'Φωτογραφική Ομάδα Λαμίας', nameEn: 'Lamia Photography Group', city: 'Λαμία', cityEn: 'Lamia', kind: 'club', url: 'https://lamiaphotogroup.blogspot.com/' },
  ],
  peloponnisos: [
    { name: 'Φ.Ο.ΚΑΛ. – Φωτογραφική Ομάδα Καλαμάτας', nameEn: 'F.O.KAL. – Kalamata Photography Group', city: 'Καλαμάτα', cityEn: 'Kalamata', kind: 'club', url: 'https://fokal.gr' },
    { name: 'Μουσείο Φωτογραφικών Μηχανών Τάκη Αϊβαλή', nameEn: 'Takis Aivalis Camera Museum', city: 'Μυστράς (Σπάρτη)', cityEn: 'Mystras (Sparta)', kind: 'museum', url: 'https://www.facebook.com/cameramuseumtakisaivalis' },
    { name: 'Φωτογραφική Λέσχη Κορίνθου', nameEn: 'Corinthian Photography Club', city: 'Κόρινθος', cityEn: 'Corinth', kind: 'club', url: 'https://corinthianphotographyclub.globalarts.gr/' },
    { name: 'Λέσχη Φωτογραφίας Σπάρτης (ΛΕΦΩΣ)', nameEn: 'Sparta Photography Club (LEFOS)', city: 'Σπάρτη', cityEn: 'Sparta', kind: 'club', url: 'https://www.facebook.com/PanousisFotios/' },
  ],
  'voreio-aigaio': [
    { name: 'Φωτογραφική Εταιρεία Μυτιλήνης (Φ.Ε.Μ.)', nameEn: 'Mytilene Photographic Society (F.E.M.)', city: 'Μυτιλήνη', cityEn: 'Mytilene', kind: 'club', url: 'http://www.fem.gr' },
    { name: 'Φωτόνησος Τεχνών & Πολιτισμού', nameEn: 'Fotonisos Arts & Culture', city: 'Σάμος', cityEn: 'Samos', kind: 'club', url: 'https://www.facebook.com/photonisosarts/' },
    { name: 'Φωτογραφική Λέσχη Χίου', nameEn: 'Chios Photography Club', city: 'Χίος', cityEn: 'Chios', kind: 'club', url: 'https://www.chiosphotoclub.gr/' },
    { name: 'Φωτογραφική Ομάδα Λήμνου', nameEn: 'Lemnos Photography Group', city: 'Λήμνος', cityEn: 'Lemnos', kind: 'club', url: 'https://www.facebook.com/lemnosphotogroup/' },
    { name: 'Φωτογραφική Ομάδα Σάμου (ΦΩΤ.Ο.Σ.)', nameEn: 'Samos Photography Group (FOT.O.S.)', city: 'Σάμος', cityEn: 'Samos', kind: 'club', url: 'https://www.facebook.com/samosphotogroup/' },
  ],
  'notio-aigaio': [
    { name: 'Φωτογραφική Ομάδα Πάρου', nameEn: 'Paros Photography Group', city: 'Πάρος', cityEn: 'Paros', kind: 'club', url: 'https://www.facebook.com/parosphotoclub/' },
    { name: 'Φωτογραφική Ομάδα Σαντορίνης (Φ.Ο.Σ.)', nameEn: 'Santorini Photography Group (F.O.S.)', city: 'Σαντορίνη', cityEn: 'Santorini', kind: 'club', url: 'https://www.facebook.com/santophotogroup.fos' },
    { name: 'C.Ro.P – Creative Rodos Photographers', city: 'Ρόδος', cityEn: 'Rhodes', kind: 'club', url: 'https://www.cropteam.gr/' },
    { name: 'Λέσχη Φωτογραφίας-Κινηματογράφου Σύρου', nameEn: 'Syros Photography & Film Club', city: 'Σύρος', cityEn: 'Syros', kind: 'club', url: 'https://www.facebook.com/LesxiPhotoSyros/' },
  ],
  kriti: [
    { name: 'Ελληνική Φωτογραφική Εταιρεία Κρήτης', nameEn: 'Hellenic Photographic Society of Crete', city: 'Ηράκλειο', cityEn: 'Heraklion', kind: 'club', url: 'https://www.efecrete.gr' },
    { name: 'Λε.Φ.Κι. – Λέσχη Φωτογραφίας και Κινηματογράφου Χανίων', nameEn: 'Le.F.Ki. – Chania Photography and Film Club', city: 'Χανιά', cityEn: 'Chania', kind: 'club', url: 'https://www.lefkichania.gr' },
    { name: 'Φωτογραφική Ομάδα Αγίου Νικολάου (Φ.Ο.Α.Ν.)', nameEn: 'Agios Nikolaos Photography Group (F.O.A.N.)', city: 'Άγιος Νικόλαος', cityEn: 'Agios Nikolaos', kind: 'club', url: 'https://www.anatolh.com/topikanea/agiosnikolaos/i-fotografiki-omada-agioy-nikolaoy-f-o-a-n-anoigei-ton-fako-tis-se-nea-meli/' },
    { name: 'Μαθήματα Φωτογραφίας Ρεθύμνου (ομάδα)', nameEn: 'Rethymno Photography Lessons (group)', city: 'Ρέθυμνο', cityEn: 'Rethymno', kind: 'club', url: 'https://www.facebook.com/learningphotographyrethimno/' },
  ],
  national: [
    { name: 'Πανελλήνια Ομοσπονδία Φωτογράφων', nameEn: 'Panhellenic Federation of Photographers', city: 'Ελλάδα', cityEn: 'Greece', kind: 'pro', url: 'https://pofphoto.gr' },
    { name: 'SearchCulture.gr (ΕΚΤ): ψηφιοποιημένα φωτογραφικά αρχεία', nameEn: 'SearchCulture.gr (EKT): digitised photographic archives', city: 'Online', cityEn: 'Online', kind: 'archive', url: 'https://www.searchculture.gr/' },
    { name: 'fmag.gr', city: 'Online', cityEn: 'Online', kind: 'magazine', url: 'https://fmag.gr/' },
    { name: 'iFocus.gr', city: 'Online', cityEn: 'Online', kind: 'magazine', url: 'https://www.ifocus.gr/' },
    { name: 'Photologio.gr', city: 'Online', cityEn: 'Online', kind: 'magazine', url: 'https://www.photologio.gr/' },
    { name: 'Εκδόσεις Ποταμός', nameEn: 'Potamos Publications', city: 'Αθήνα', cityEn: 'Athens', kind: 'publisher', url: 'https://www.potamos.com.gr/' },
    { name: 'Εκδόσεις Μέλισσα', nameEn: 'Melissa Publishing House', city: 'Αθήνα', cityEn: 'Athens', kind: 'publisher', url: 'https://www.melissabooks.com/' },
  ],
};

/** Date the list was last checked (shown on the page) */
export const COMMUNITY_CHECKED = '2026-10';
