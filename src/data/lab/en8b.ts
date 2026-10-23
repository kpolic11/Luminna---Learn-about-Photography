import type { LessonText } from '../types';

/** School — Level 4: retouching, workflow, print */
export const LAB8B_EN: Record<string, LessonText> = {
  /* ───────── Professional retouching ───────── */
  'rt-dodge-burn': {
    title: 'Dodge & burn at portrait level',
    tagline: 'The technique professionals use for skin, shape and volume, without it “showing”.',
    quick:
      'In professional retouching, dodge & burn is done at two scales. At a large scale, to “sculpt” the face (cheekbones, jaw, eyes). At a small scale, to even out small irregularities in the skin by lightening the dark spots and darkening the light ones, without touching the texture.',
    challenge:
      'In a portrait, use a very soft lightening brush (exposure or flow at 5–10%) to lighten the cheekbones and nose slightly, and gently darken beneath the cheekbones. Compare before and after from a distance.',
    body: [
      'We saw dodge & burn as a way to guide the eye across the whole image. In portraiture, professionals also use it at a much smaller scale. At the “large” scale, they slightly lighten the points that stand out, such as cheekbones, forehead, nose and chin, and darken the hollows, enhancing the shape of the face as better light would. At the “small” scale, they even out small irregularities in the skin, such as tiny dips, fine lines and marks, by lightening the small dark spots and darkening the small light ones.',
      'The advantage over blurring the skin is that the texture stays intact: pores, hairs and skin detail remain, and only the distribution of light changes. That is why the result looks natural. Technically, it is done on separate layers, e.g. curves layers or a grey layer in “Soft Light” blend mode, with a very soft brush at low flow or opacity.',
      'It is slow work, and needs restraint and practice. A good trick is a temporary black-and-white “helper” layer with increased contrast on top of everything, which makes brightness irregularities much more visible while you work. And a golden rule: look often at the whole image at normal size. At 200% everything looks imperfect. At normal size you can see whether the change looks natural.',
    ],
    bullets: [
      'Large scale: the shape of the face.',
      'Small scale: evening out skin, without blurring.',
      'The texture stays. Only the light changes.',
      'Separate layers, soft brush, low flow.',
      'A black-and-white helper layer with contrast.',
      'Judge at normal size.',
    ],
    mistakes: [
      'Blurring the skin instead of dodge & burn: a “plastic” result with no pores.',
      'Very strong “contouring” that looks like stage make-up.',
    ],
    keyIdea: 'Professional retouching works on light, not texture: you lighten and darken gently, at two scales, and skin stays skin.',
    tryIt: 'Retouch a portrait using only dodge & burn, with no blurring tool at all. Show the before and after to someone without telling them what you did. Do they see a difference? Do they see “editing”?',
    check: [
      {
        id: 'rd-1',
        question: 'Why does dodge & burn give a more natural result than blurring the skin?',
        options: ['Because it is faster', 'Because it keeps the texture (pores, detail) and changes only the distribution of light', 'Because it changes the colour', 'Because it needs no layers'],
        correctIndex: 1,
        explanation: 'Blurring erases texture; dodge & burn leaves it intact.',
      },
    ],
  },

  'rt-skin': {
    title: 'Skin, eyes, details: what to change and what to leave',
    tagline: 'Good retouching removes what is temporary and leaves what is the person.',
    quick:
      'A useful rule: remove what is temporary (a spot, a red mark, a stray hair on the face), and leave what is permanent (moles, scars, wrinkles), unless the person asks otherwise. On eyes and teeth: very little. Reshaping the body (liquify) needs great care and honesty.',
    challenge:
      'In one of your portraits, mark in red what is “temporary” and in green what is a “permanent” feature. Retouch only the red.',
    body: [
      'The starting point of all portrait retouching is cleaning up: “healing” tools remove dust, small marks, spots and stray hairs. A rule many professionals follow is to remove what is temporary and leave what is a permanent part of the person, such as moles, scars, freckles and expression lines, unless the person asks for something else. People must recognise themselves in the photograph.',
      'One technique you will come across is “frequency separation”: the image is split into a layer with the texture and one with the colour and tones, so you can correct colour unevenness without touching the texture. It is powerful, but it is also the most common cause of “plastic” skin when overdone. Many professionals use it only locally, for specific problems, and do the rest with dodge & burn.',
      'Eyes: a very slight brightening of the iris and a little sharpness on the lashes are enough. Overly white or “glowing” eyes show at once. Teeth: a minimal reduction of yellow, never pure white. Changing the shape of the body or face (liquify) is the most sensitive part: ethically, because it promotes unnatural ideals, and aesthetically, because it leaves “bent” lines in the background. If it is done, it should be only with the person’s consent and in moderation.',
    ],
    bullets: [
      'Remove the temporary, leave the permanent (unless asked).',
      'Healing for dust, marks, hairs.',
      'Frequency separation: locally, in moderation.',
      'Eyes and teeth: very little.',
      'Liquify: only with consent and in moderation.',
    ],
    mistakes: [
      'Erasing features, such as moles, scars, freckles, without asking.',
      'Bright-white eyes and teeth.',
      'Liquify that bends doors and walls in the background.',
    ],
    keyIdea: 'People must recognise themselves. Remove the temporary, leave the permanent, and for anything that changes the body, ask first.',
    tryIt: 'Make two retouched versions of the same portrait: one “minimal” and one “magazine”. Show them to the person you photographed and ask which they prefer. Most prefer the more natural one.',
    check: [
      {
        id: 'rs-1',
        question: 'According to the “temporary–permanent” rule, what do you usually leave in a portrait (unless asked otherwise)?',
        options: ['A spot', 'A mole or a scar', 'Sensor dust', 'A hair on the face'],
        correctIndex: 1,
        explanation: 'Permanent features are part of the person.',
      },
    ],
  },

  'rt-ethics': {
    title: 'Retouching and ethics: documentary, advertising, self-image',
    tagline: 'Where “correction” stops and deception begins.',
    quick:
      'In photojournalism and documentary, changing the content of an image is forbidden: only basic tonal and colour corrections are allowed. In advertising, some countries, such as France and Norway, require a label when the body has been digitally altered (in Norway, even the skin). And everywhere, excessive “perfecting” affects viewers’ self-image.',
    challenge:
      'Find the editing rules of a major photojournalism competition or a news agency. Write three things that are allowed and three that are forbidden.',
    body: [
      'In photojournalism and documentary photography, the photograph is testimony. News agencies, newspapers and major competitions have strict rules: usually only basic tonal, colour and cropping corrections that do not change the content are allowed. Adding or removing elements, even a small object at the edge, is considered a serious violation. Photographers have lost awards and commissions for such changes, and many competitions ask for the RAW files for checking. The code of ethics of the US National Press Photographers Association (NPPA), for example, asks that images not be manipulated in ways that mislead the viewer.',
      'In advertising and fashion, retouching is accepted and expected. But there is growing concern about the effect of “perfect” bodies on self-image, especially among young people. Some countries have legislated: in France, since 2017, commercial photographs in which a model’s silhouette has been digitally made thinner or larger must carry the label “photographie retouchée”. In Norway, since July 2022, advertisements, including on social media (e.g. by influencers), in which the shape, size or skin of the body or face has been digitally altered, even by removing a single spot, must carry a standardised label. The law differs from country to country and changes. If you work professionally, check the rules of the country where the work will be published.',
      'For portraits of people, ethics is mainly a relationship of trust: ask what the person wants, do not “correct” their body without their consent, and think about the message sent by an image in which every wrinkle and every curve has been erased. And be honest about what you did when asked. A photographer’s reputation is built on trust.',
    ],
    bullets: [
      'Documentary / news: no change to content.',
      'Competitions: often ask for RAW files to check.',
      'France (2017): a label when the silhouette has been digitally thinned or enlarged. Norway (2022): a label for any digital change to shape, size or skin, including on social media.',
      'The law differs by country: check.',
      'Portraits: consent and honesty.',
    ],
    mistakes: [
      'Removing “distracting” elements from a news photograph.',
      'Assuming one country’s rules apply everywhere.',
    ],
    keyIdea: 'In documentary, content is sacred. In advertising, know the law. And in portraiture, consent and honesty are your ethics.',
    tryIt: 'Take one of your documentary photographs and check every change you made in editing: would a news agency allow it? If not, write down why.',
    see: ['lange', 'nachtwey', 'mccullin'],
    check: [
      {
        id: 're-1',
        question: 'In a news photograph, which change is generally considered unacceptable?',
        options: ['A small brightness correction', 'A crop that does not change the meaning', 'Removing an object from the frame', 'A white balance correction'],
        correctIndex: 2,
        explanation: 'Changing the content misleads the viewer.',
      },
    ],
  },

  /* ───────── Professional workflow ───────── */
  'wf-tether': {
    title: 'Tethered shooting',
    tagline: 'Every photograph appears at once on a big screen: for you, for the client, for the team.',
    quick:
      'In tethering, the camera is connected by cable or wirelessly to a computer, and every frame appears at once in a program such as Lightroom or Capture One. You see focus, light and details the small screen hides, apply settings automatically, and the client sees the result live.',
    challenge:
      'Find out whether your camera supports tethering (by cable or the manufacturer’s app) and with which programs. Many cameras also connect to a phone or tablet for remote control.',
    body: [
      'The camera screen is small and misleading: a photograph that looks sharp there can be slightly out of focus, and light that looks right can have “blown” details. In tethering, every frame is transferred at once to a computer and shown on a big screen. It is the usual way of working in product, fashion and portrait studios and in advertising productions.',
      'The advantages: checking focus and detail at 100% immediately. Automatic application of settings, e.g. profile and white balance, so you see something close to the final result. Comparison with previous frames. Automatic naming and filing. And, perhaps most important, the client or art director sees live what is happening and approves on the spot, instead of discovering problems later.',
      'The practicalities: a good USB cable, with a lock so it does not disconnect, or a wireless connection for freer movement. Saving to the camera card too, if supported, as a backup. And beware: it is not for every shoot. In portraits of people, a big screen can make someone nervous who sees themselves every second. It is often better to turn it away and show selected frames.',
    ],
    bullets: [
      'Every frame at once on a big screen.',
      'Focus checked at 100%, settings applied automatically.',
      'The client approves on the spot.',
      'A locking cable or wireless, and a copy on the card.',
      'In portraits, make sure it does not make the person nervous.',
    ],
    mistakes: [
      'The cable disconnecting mid-shoot with no copy on the card.',
      'A screen in front of a nervous model, who corrects themselves at every frame.',
    ],
    keyIdea: 'Tethering shows you the truth at once and makes the client part of the process. Use it where precision matters.',
    tryIt: 'If you can, do a product shoot tethered. Compare how often you corrected focus or light with a shoot without it.',
    check: [
      {
        id: 'wt-1',
        question: 'What is one key advantage of tethering?',
        options: ['Less battery use', 'Immediate checking of focus and detail on a big screen', 'Higher ISO', 'Smaller files'],
        correctIndex: 1,
        explanation: 'The camera’s small screen hides mistakes a big one shows at once.',
      },
    ],
  },

  'wf-catalog': {
    title: 'Filing, naming, metadata, keywords',
    tagline: 'How to find a photograph in ten years’ time, among 200,000.',
    quick:
      'A consistent folder system (e.g. Year / Year-Month-Day_Subject), renaming on import, basic IPTC metadata (name, copyright, contact) added to every file automatically, and keywords, ratings and collections in the catalogue program.',
    challenge:
      'In the program you use, create a “metadata preset” with your full name, copyright and an email, so it is added automatically to every new photograph.',
    body: [
      'Professionals do not rely on memory. They rely on a system they always apply the same way. The foundation is the folder structure: a simple, chronological approach that works for many is one folder per year, and inside it folders with the date and a short description, e.g. “2026-10-22_Portraits_Maria”. The date at the start, in year-month-day format, makes the folders sort correctly automatically.',
      'Catalogue programs, such as Lightroom Classic and Capture One, keep a database of all your photographs, their settings and metadata. On import, they can rename the files, e.g. “2026-10-22_Maria_0001”, and automatically add your details to the IPTC metadata: creator, copyright, contact information. These travel inside the file, and if someone finds your photograph, they know whom it belongs to. If you do not use a catalogue, many programs store changes in small XMP sidecar files next to the RAWs.',
      'Keywords, e.g. “portrait”, “Thessaloniki”, “window”, “black and white”, are what make your archive searchable. Add them on import, or right after selection, while you remember. Use star ratings for quality, colour labels for status, e.g. “delivered”, and collections for projects that include photographs from many folders. What matters is not a “perfect” system, but a system you always apply.',
    ],
    bullets: [
      'Folders: Year / Year-Month-Day_Subject.',
      'Renaming on import.',
      'IPTC: creator, copyright, contact, automatically.',
      'Keywords while you remember.',
      'Stars for quality, colours for status, collections for projects.',
      'A system you always apply.',
    ],
    mistakes: [
      'Folders with names like “New folder (3)” or “Misc”.',
      'Moving folders outside the catalogue program: the links are lost.',
      'No copyright metadata at all on the photographs you publish.',
    ],
    keyIdea: 'A simple, consistent system: chronological folders, renaming, automatic metadata, keywords while you remember. The system is your memory.',
    tryIt: 'Take last month’s photographs and organise them with the lesson’s system: folders, names, metadata, five keywords per folder.',
    check: [
      {
        id: 'wc-1',
        question: 'Why do we put the date at the start of the folder name, as year-month-day?',
        options: ['To look professional', 'So folders sort correctly in chronological order automatically', 'Because the camera requires it', 'To take up less space'],
        correctIndex: 1,
        explanation: 'Alphabetical sorting then matches chronological order.',
      },
    ],
  },

  'wf-backup': {
    title: 'Backups: the 3-2-1 rule',
    tagline: 'It is not a question of “if” a drive will fail, but “when”.',
    quick:
      'The 3-2-1 rule: three copies of every photograph, on two different kinds of media, and one of them away from home or the office (e.g. the cloud or a drive at another house). A RAID drive is not a backup. And never format the card before confirming that two copies exist.',
    challenge:
      'Count now: how many copies do your photographs have, on how many different media, and how many away from home? If the answer is “one, on the computer”, today is the day to change that.',
    body: [
      'Hard drives fail, computers get stolen, houses flood, and files get deleted by mistake. Every professional photographer has a story of loss, their own or someone they know. The 3-2-1 rule is the most widespread answer: three copies of every file, on two different kinds of media, e.g. an internal and an external drive, or a drive and the cloud, with one copy in another location. The fire or theft that takes your computer usually takes the drive next to it too.',
      'A few misunderstandings. A RAID system with mirrored drives protects against the failure of one drive, not against deletion, ransomware or theft: if you delete a file, it is deleted on both. Cloud sync has the same problem, which is why you need a service that keeps older versions. And a backup you have never checked can be restored is not a safe backup.',
      'On the shoot: if the camera has two card slots, write to both at once, as a backup. After the shoot, copy the cards to two media before doing anything else, and format the card, in the camera and not on the computer, only once you have confirmed this. For client photographs, keep copies for as long as you agreed, and tell clients how long you will keep them.',
    ],
    bullets: [
      '3 copies, 2 kinds of media, 1 off-site.',
      'RAID and sync are not backup.',
      'Test the restore.',
      'Two card slots: write to both.',
      'Format the card only after a double copy.',
    ],
    mistakes: [
      'A single copy on one external drive that always sits next to the computer.',
      'Deleting the card right after copying to the computer.',
      'Never having checked whether the backup opens.',
    ],
    keyIdea: 'Three copies, two media, one elsewhere. And a backup you have not tested is not a backup.',
    tryIt: 'Today, set up a full 3-2-1 for your archive: the computer, an external drive, and the cloud or a second drive at another house. Try restoring one photograph from each copy.',
    check: [
      {
        id: 'wb-1',
        question: 'Why is a RAID with mirrored drives not a complete backup?',
        options: ['Because it is slow', 'Because a deletion or ransomware affects both drives', 'Because it does not accept RAW', 'Because it is expensive'],
        correctIndex: 1,
        explanation: 'It only protects against the failure of one drive.',
      },
    ],
  },

  'wf-delivery': {
    title: 'Delivering files: for screen, for print, for clients',
    tagline: 'The same photograph needs a different file for each use.',
    quick:
      'For screens: sRGB, a good-quality JPEG, a size suited to the use (e.g. 2048 pixels on the long side). For print: full resolution, maximum quality or TIFF, the colour space the lab asks for. Output sharpening differs for screen and paper. And remove location data when necessary.',
    challenge:
      'Create two “export presets” in your program: one for the web (sRGB, 2048 px, JPEG ~80%) and one for print (full size, maximum quality). Export the same photograph with both and compare the file sizes.',
    body: [
      'There is no “one correct file”. For the web and social media, a JPEG in sRGB, sized to the use, e.g. 2048 pixels on the long side for websites and social media, or smaller for email, at quality around 75–85%, gives a good image with a small file. Many platforms recompress whatever you upload: check their guidance for ideal sizes. For print, follow the lab’s instructions: usually full resolution, maximum-quality JPEG or TIFF, and the colour space they ask for.',
      'Output sharpening is an often forgotten step. An image reduced for screen needs a little sharpening to look crisp. An image for print usually needs more, especially on matte paper, which “softens” detail. Export programs usually have options “for screen”, “for matte” or “for glossy” paper.',
      'For clients: deliver the way you agreed, often through a private online gallery, with clearly named files in two versions, for screen and for print. Watch the metadata: keep your copyright and details, but remove GPS coordinates when publishing photographs of homes, children or private spaces. The location can reveal where someone lives.',
    ],
    bullets: [
      'Screen: sRGB, JPEG 75–85%, size suited to the use.',
      'Print: full resolution, maximum quality or TIFF, lab instructions.',
      'Output sharpening: different for screen, matte, glossy.',
      'Clients: online gallery, two versions, clear names.',
      'Keep the copyright, remove GPS when necessary.',
    ],
    mistakes: [
      'Sending 50 MB files for a post.',
      'Sending the lab a small JPEG that “looked fine on the phone”.',
      'Publishing photographs with the GPS location of someone’s home.',
    ],
    keyIdea: 'Each use needs its own file: size, colour space, quality, sharpening. And metadata that protects you and others.',
    tryIt: 'Check the metadata of a photograph from your phone (in “info”). Does it have a location? Find out how to remove it before sending.',
    check: [
      {
        id: 'wd-1',
        question: 'Which information do you usually remove from photographs of private spaces before publishing?',
        options: ['The copyright', 'The GPS coordinates', 'The photographer’s name', 'The date'],
        correctIndex: 1,
        explanation: 'The location can reveal where someone lives.',
      },
    ],
  },

  /* ───────── Printing & presentation ───────── */
  'pr-resolution': {
    title: 'Resolution and dimensions: ppi, dpi, and how big it prints',
    tagline: 'How many pixels you need for each size, and why the paper’s shape does not always match the photograph.',
    quick:
      'ppi = image pixels per inch of print. For close viewing, aim for 240–300 ppi. For large prints seen from a distance, fewer are enough. dpi is the printer’s ink droplets, something else. And A4/A3 paper has a different ratio (1:1.41) from the camera’s 3:2: you will crop or leave a margin.',
    challenge:
      'Work it out: your photograph is 6000 × 4000 pixels. How big does it print at 300 ppi and at 200 ppi? (Answer: about 51 × 34 cm and 76 × 51 cm.)',
    body: [
      'The resolution of a print is expressed in ppi (pixels per inch): how many image pixels “fit” in each inch, that is 2.54 cm, of paper. To find the size: pixels ÷ ppi = inches. A file 6000 pixels wide, at 300 ppi, becomes 20 inches, about 51 cm. dpi (dots per inch) is something else: the tiny droplets of ink the printer sprays. The two terms are often confused, even by labs.',
      'How many ppi do you need? It depends on the viewing distance. A print you hold in your hands, or a small frame, is seen up close: there 240–300 ppi give maximum detail. A large print on the wall is seen from a metre or two, and 150–200 ppi is usually enough. Street posters have far fewer. Modern programs can also enlarge an image with fairly good results, but they do not create real detail.',
      'The shape: A-series papers (A4, A3, A2) have a ratio of about 1:1.41, while the camera is usually 3:2 (1:1.5) and the phone 4:3 (1:1.33). So a 3:2 photograph does not fit A4 exactly: either it gets cropped slightly, or a white margin remains. Many labs also offer sizes that match 3:2, e.g. 20 × 30 cm or 40 × 60 cm. Decide the crop yourself before sending the file, instead of leaving it to the lab.',
    ],
    bullets: [
      'ppi = pixels per inch of print. dpi = printer droplets.',
      'Size (inches) = pixels ÷ ppi. 1 inch = 2.54 cm.',
      'Close viewing: 240–300 ppi. Large, from a distance: 150–200.',
      'A paper ≈ 1:1.41 · camera 3:2 · phone 4:3.',
      'Decide the crop yourself.',
    ],
    mistakes: [
      'Changing only the “ppi” number in the file thinking you increase quality: the pixels stay the same.',
      'Sending 3:2 for A4 and finding heads cut off.',
    ],
    keyIdea: 'Pixels ÷ ppi = size. The viewing distance sets how many ppi you need. And the paper’s ratio rarely matches the photograph’s: crop it yourself.',
    tryIt: 'Take one of your photographs and prepare it for an A4 print: choose a crop or a margin, work out the ppi, and write down what you would tell the lab.',
    check: [
      {
        id: 'pr-1',
        question: 'An image 4500 pixels wide, at 300 ppi, prints how wide?',
        options: ['15 cm', 'About 38 cm (15 inches)', '45 cm', '1.5 m'],
        correctIndex: 1,
        explanation: '4500 ÷ 300 = 15 inches × 2.54 ≈ 38 cm.',
      },
      {
        id: 'pr-2',
        question: 'What is the difference between ppi and dpi?',
        options: ['They are exactly the same', 'ppi: image pixels per inch; dpi: the printer’s ink droplets', 'ppi: for phones; dpi: for cameras', 'dpi: for screens only'],
        correctIndex: 1,
        explanation: 'They are often confused, but they describe different things.',
      },
    ],
  },

  'pr-papers': {
    title: 'Papers and inks: glossy, satin, matte, cotton',
    tagline: 'Paper is not just a surface: it changes the blacks, the colours and the feel of the photograph.',
    quick:
      'Glossy: deep blacks, vivid colours, but reflections. Satin or pearl: the “middle way”, very popular. Matte, often cotton “fine art”: no reflections, a velvety feel, softer blacks. Pigment inks last much longer than dye inks.',
    challenge:
      'Many labs and manufacturers sell “paper sample packs”. Ask for or buy one, and print the same photograph on three different papers.',
    body: [
      'Paper changes the result dramatically. Glossy papers give the deepest blacks (highest Dmax) and the most saturated colours, but reflect the room’s light and fingerprints. Satin papers, also called pearl or luster, have a slight texture and fewer reflections, and are the most common choice for portraits and exhibitions. Matte papers, especially cotton “fine art” ones, have no reflections at all, a velvety texture and warmth, but their blacks are softer and the colours a little gentler.',
      'There are also “baryta” papers, which imitate the surface of traditional darkroom black-and-white papers, with deep blacks and a slight sheen. They are much loved for black-and-white photography. Many papers contain “optical brightening agents” (OBAs) that make them look very white, but over time these lose their effect and the paper returns to its warmer, yellowish natural tone. OBA-free papers are warmer but more stable. For exhibitions and prints you want to last decades, ask for “archival quality” (acid-free) papers.',
      'Inks: printers with pigment inks produce prints that, on good papers and in the right conditions, last many decades. Dye inks give vivid colours but fade faster. The term “giclée”, which you will see in galleries, usually describes a high-quality inkjet print on fine-art paper. It is more a marketing term than a technical standard.',
    ],
    bullets: [
      'Glossy: deep blacks, reflections.',
      'Satin / pearl / luster: the middle way.',
      'Matte / cotton: no reflections, soft blacks, velvety texture.',
      'Baryta: for “darkroom” black and white.',
      'OBA-free and acid-free for longevity.',
      'Pigment inks > dye for longevity.',
    ],
    mistakes: [
      'Glossy paper for an exhibition in a room with many windows: reflections everywhere.',
      'Editing for matte paper with the same contrast as for glossy: it comes out dull.',
    ],
    keyIdea: 'Paper is part of the photograph: glossy for intensity, satin for balance, matte for velvety warmth. And for longevity: pigment inks, archival papers.',
    tryIt: 'Print the same black-and-white and the same colour photograph on glossy and on matte paper. Hang them side by side for a week. Which wins you over?',
    see: ['adams', 'salgado'],
    check: [
      {
        id: 'pp-1',
        question: 'Which type of paper usually gives the deepest blacks?',
        options: ['Matte cotton', 'Glossy', 'Photocopy paper', 'All the same'],
        correctIndex: 1,
        explanation: 'Glossy has a higher Dmax, at the cost of reflections.',
      },
    ],
  },

  'pr-proof': {
    title: 'Soft proofing: seeing on screen how it will print',
    tagline: 'How to avoid surprises: dark prints, colours that “vanished”, blacks without detail.',
    quick:
      'Soft proofing uses the ICC profile of the specific printer and paper to show you on screen roughly how the print will come out: darker, gentler, with colours that may not fit. You make a copy specifically for that paper, and you always make a test print.',
    challenge:
      'In your editing program, find the “Soft Proofing” or “Proof Colors” function. Turn it on with a matte paper profile. How much does the image change?',
    body: [
      'A screen emits light, paper reflects it. That is why a print is almost always darker and less saturated than what you see on screen, and some very saturated colours, e.g. an intense cyan or a neon orange, may not be reproducible at all on a particular paper. Soft proofing shows you these differences before you print. You need a calibrated screen and the ICC profile of the printer–paper combination, provided by paper manufacturers and good labs.',
      'With the proof active, you make a “virtual copy” of the photograph specifically for that paper and correct it: usually a little more brightness and contrast, and a gentle reduction of saturation in the colours that fall outside. The “rendering intent” option defines how the program handles colours that do not fit: “perceptual” compresses all colours proportionally, “relative colorimetric” keeps exactly those that fit and “clips” the rest. Look at both and choose per photograph.',
      'Soft proofing is an approximation, not a guarantee. So before a large or expensive print, make a test at a small size or a strip of the most critical area of the image. And look at prints in the right light: the standard for evaluating prints is about 5000 K. Under a yellow bulb, every print will look wrong.',
    ],
    bullets: [
      'Print = darker and gentler than the screen.',
      'Soft proofing: the printer + paper ICC profile.',
      'A separate copy per paper.',
      'Perceptual or relative colorimetric: look at both.',
      'Always a test print. Evaluate in ~5000 K light.',
    ],
    mistakes: [
      'Printing without a soft proof from a very bright screen: dark disappointment.',
      'Judging the print under the kitchen light.',
    ],
    keyIdea: 'Soft proofing shows you on screen what the paper will do to your photograph. Correct per paper, make a test print, and judge in the right light.',
    tryIt: 'Ask a lab for the ICC profile of the paper you prefer. Soft-proof, correct, and print a small test. How close was it?',
    check: [
      {
        id: 'ppf-1',
        question: 'Why does a print usually look darker than the screen?',
        options: ['Because the printer is broken', 'Because the screen emits light while paper reflects it', 'Because the file is a JPEG', 'Because pixels are missing'],
        correctIndex: 1,
        explanation: 'And most screens are brighter than paper in normal light.',
      },
    ],
  },

  'pr-present': {
    title: 'Frame, mount, exhibition',
    tagline: 'How a photograph becomes an object on the wall.',
    quick:
      'A mount (passe-partout) gives the photograph “air” and keeps it away from the glass. For longevity: acid-free materials and UV-protective glass. In an exhibition: a common centre height (often around 145–150 cm), consistent spacing between works, and an order as in a book.',
    challenge:
      'Take one of your prints and try holding it against the wall with and without a large sheet of white paper around it (like a mount). Which version “breathes” more?',
    body: [
      'A photograph on the wall is a different experience from a photograph on a screen: it has size, material, and a relationship with the space. The mount, a board with a window cut around the photograph, does two things. Aesthetically, it gives “air” and isolates the image from the wall. Practically, it keeps the photograph at a distance from the glass, so it does not stick to it with humidity. Often the bottom margin is slightly larger than the top, for visual balance.',
      'For prints you want to last: “archival quality” acid-free materials for the mount and backing, so the photograph does not yellow. Glass or acrylic with protection against ultraviolet light. And hanging away from direct sun and humidity. Simple frames, black, white or natural wood, are almost always better than decorative ones, because they do not compete with the photograph.',
      'In an exhibition, what we learned about sequencing applies to space. Photographs are usually hung with their centres at a common height. Many museums and galleries use somewhere around 145–150 cm from the floor, so the eye “runs” along an imaginary line. The spacing between works should be consistent. The first and last photographs, the “corners” and the wall opposite the entrance are the strongest positions. And lighting: steady, even, without reflections on the glass.',
    ],
    bullets: [
      'Mount: air and distance from the glass.',
      'Acid-free materials, UV-protective glass.',
      'Simple frames that do not compete.',
      'Exhibition: common centre height, consistent spacing.',
      'An order in space as in a book.',
    ],
    mistakes: [
      'A photograph pressed against the glass without a mount.',
      'Heavy, decorative frames that draw attention.',
      'Works hung at different heights for no reason.',
    ],
    keyIdea: 'Presentation is part of the work: a mount for air, archival materials for longevity, a simple frame, and in an exhibition a common line, rhythm and the right light.',
    tryIt: 'Hang three of your printed photographs on a wall at home with a common centre height and equal spacing. Try two different orders. Which one “works”?',
    check: [
      {
        id: 'ppr-1',
        question: 'What is one practical role of a mount?',
        options: ['To make the photograph brighter', 'To keep the photograph at a distance from the glass', 'To change its colour', 'To make the frame lighter'],
        correctIndex: 1,
        explanation: 'That way the photograph does not stick to the glass with humidity.',
      },
    ],
  },
};
