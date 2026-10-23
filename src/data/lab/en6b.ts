import type { LessonText } from '../types';

/** School — Level 3: formats & sharpness */
export const LAB6B_EN: Record<string, LessonText> = {
  /* ───────── Format & sensor size ───────── */
  'fmt-history': {
    title: 'Film and sensor formats: 35 mm, medium, large',
    tagline: 'From Leica’s tiny negatives to 8 × 10 inch sheets: how size changes the image and the way you work.',
    quick:
      '“Format” is the size of the film or sensor. 35 mm (24 × 36 mm) brought the freedom of the street. Medium format (6 × 4.5 to 6 × 9 cm) gives more detail. Large format (4 × 5 and 8 × 10 inches) gives enormous detail, but needs time and a tripod.',
    challenge:
      'Find Ansel Adams and Cartier-Bresson in the Encyclopedia. One often worked in large format, the other in 35 mm. How does this show in their photographs?',
    body: [
      'For most of photography’s history, the size of the negative determined how one photographed. The first cameras used large plates, and photographers often printed “by contact”, meaning the photograph was the same size as the negative. In 1925, Leica popularised 35 mm film with a 24 × 36 mm frame. The small, fast camera changed street photography and photojournalism: the photographer could move, blend into the crowd, catch the moment.',
      'Medium format uses 120 film, about 6 cm wide, in frames of 6 × 4.5, 6 × 6, 6 × 7 or 6 × 9 cm. It gives far more detail and smoother tones than 35 mm, and it was the format of fashion, portraiture and many documentary photographers. Large format uses individual sheets of film, usually 4 × 5 or 8 × 10 inches, in bellows cameras that allow “movements”: tilting and shifting the lens to control perspective and the plane of focus. It is slow, heavy and expensive, but gives a detail and feel that no other format reaches.',
      'In the digital age, “full frame” is the 36 × 24 mm sensor, equal to the 35 mm frame. Smaller are APS-C (about 23.5 × 15.6 mm) and Micro Four Thirds (17.3 × 13 mm). Phone sensors are much smaller still. There are also digital medium-format cameras, with sensors such as 44 × 33 mm or larger. Format affects three things: how much total light the sensor collects, the depth of field for the same image, and the way you work.',
    ],
    bullets: [
      '35 mm / full frame: 24 × 36 mm, flexibility, speed.',
      'Medium format: 120 film (6 × 4.5 to 6 × 9 cm), digital from ~44 × 33 mm.',
      'Large format: 4 × 5 and 8 × 10 inch sheets, lens movements.',
      'APS-C and Micro 4/3: smaller digital sensors.',
      'Format changes light, depth of field and the way you work.',
    ],
    mistakes: [
      'Believing a bigger format is always “better”: for street, travel or action, small and fast often wins.',
      'Comparing formats without thinking about the size of the final print.',
    ],
    keyIdea: 'Every format is a way of working: small for speed and movement, large for time, detail and control.',
    tryIt: 'For one day, work “like a large-format photographer”: tripod, one exposure per scene, 15 minutes of composing before you press. How many photographs did you keep, compared with an ordinary day?',
    see: ['adams', 'avedon', 'cartier-bresson', 'becher', 'gursky', 'shore'],
    check: [
      {
        id: 'fh-1',
        question: 'What is the size of the 35 mm frame and of digital “full frame”?',
        options: ['24 × 36 mm', '6 × 6 cm', '4 × 5 inches', '17.3 × 13 mm'],
        correctIndex: 0,
        explanation: '17.3 × 13 mm is Micro 4/3; 6 × 6 cm and 4 × 5 inches are medium and large format.',
      },
      {
        id: 'fh-2',
        question: 'What do the “movements” of a large-format camera allow?',
        options: ['Faster autofocus', 'Control of perspective and the plane of focus', 'Video', 'Higher ISO'],
        correctIndex: 1,
        explanation: 'Tilting and shifting the lens correct lines and “tilt” the plane of focus.',
      },
    ],
  },

  'fmt-crop': {
    title: 'Crop factor: why the same lens “sees” differently',
    tagline: 'A 50 mm lens on a smaller sensor crops the centre of the image.',
    quick:
      'A smaller sensor “crops” the centre of the lens’s image. The crop factor tells you how much: about 1.5 on APS-C, 1.6 on Canon APS-C, 2 on Micro 4/3. A 50 mm on APS-C gives a frame like a 75 mm on full frame.',
    challenge:
      'On your phone, note the “equivalent” focal length of each lens (usually in the photo info or the specifications): e.g. 0.5× ≈ 13 mm, 1× ≈ 24–26 mm. The real lens is only a few millimetres!',
    body: [
      'The lens projects a circular “image circle” onto the sensor. The sensor cuts a rectangle out of it. If the sensor is smaller, it cuts a smaller piece from the centre, so the angle of view narrows: the image looks as if it were taken with a longer focal length. The focal length of the lens does not change. Only how much of its image is “used” changes.',
      'The crop factor is the ratio of the full-frame diagonal (about 43.3 mm) to the diagonal of the smaller sensor. For most manufacturers’ APS-C it is about 1.5, for Canon APS-C about 1.6, for Micro 4/3 it is 2. Multiplying the focal length by it gives the “equivalent” full-frame focal length, which is the one that describes the angle of view: a 35 mm on APS-C “sees” like ~52 mm, a 25 mm on Micro 4/3 like 50 mm.',
      'On phones, the lenses have a real focal length of only a few millimetres, because the sensors are very small. That is why manufacturers almost always quote the equivalent focal length. This is useful, because it lets us speak a common language: “24 mm” means the same angle of view on any camera, when we are talking about equivalent focal length.',
    ],
    bullets: [
      'Smaller sensor = narrower angle with the same lens.',
      'Crop factor ≈ 1.5 (APS-C), 1.6 (Canon APS-C), 2 (Micro 4/3).',
      'Equivalent focal length = focal length × crop factor.',
      'Phones almost always quote the equivalent focal length.',
    ],
    mistakes: [
      'Saying the lens “becomes” 75 mm on APS-C: its focal length does not change, only the crop does.',
      'Comparing lenses from different systems by their real focal length instead of the equivalent.',
    ],
    keyIdea: 'A smaller sensor crops the centre of the image. Multiply by the crop factor to find the equivalent focal length, that is, the angle of view.',
    tryIt: 'If your camera has an “APS-C crop” mode or a 1.5× digital zoom, photograph the same scene with and without it. Compare the angle of view with a lens 1.5 times longer.',
    check: [
      {
        id: 'fc-1',
        question: 'A 25 mm lens on Micro 4/3 (crop 2) gives an angle of view like…',
        options: ['12.5 mm on full frame', '25 mm on full frame', '50 mm on full frame', '100 mm on full frame'],
        correctIndex: 2,
        explanation: '25 × 2 = 50 mm equivalent focal length.',
      },
    ],
  },

  'fmt-equivalence': {
    title: 'Equivalence: angle, depth of field and total light',
    tagline: 'Why f/1.4 on a small sensor “isn’t” f/1.4 on full frame, and in what sense it is.',
    quick:
      'f/1.4 gives the same brightness (exposure) on every sensor. But for the same image, a smaller sensor gives more depth of field and collects less total light, so more noise. To compare, multiply the f-number by the crop factor too.',
    challenge:
      'Work it out: a 25 mm f/1.4 lens on Micro 4/3 (crop 2) corresponds to which full-frame lens, in angle and depth of field? (Answer: 50 mm f/2.8.)',
    body: [
      'The f-number describes the density of light on the sensor: at f/2.8 every square millimetre receives the same amount of light, whatever the size of the sensor. That is why, for the same scene, f/2.8 and 1/125 give the same brightness on a phone and on a medium-format camera. For exposure, f/2.8 is always f/2.8.',
      'But a larger sensor has more square millimetres, so it collects more total light for the same image, and, as we saw, more light means less noise. At the same time, to get the same angle, the larger sensor needs a longer focal length, so at the same f-number it gives shallower depth of field. “Equivalence” sums up these relationships: multiply the focal length and the f-number by the crop factor, and the ISO by its square, to find the equivalent full-frame combination.',
      'Example: Micro 4/3 (crop 2) at 25 mm, f/1.4, ISO 100 ≈ full frame at 50 mm, f/2.8, ISO 400, in angle, depth of field and noise, at the same shutter speed. This does not mean the small sensor is “worse”: it means the same image needs a smaller, lighter and cheaper lens. If you want a lot of depth of field, for example in macro or landscape, the small sensor is actually an advantage.',
    ],
    bullets: [
      'Exposure (brightness): the f-number is the same on every sensor.',
      'Total light and noise: depend on sensor size.',
      'Equivalence: focal length × crop, f-number × crop, ISO × crop².',
      '25 mm f/1.4 ISO 100 on M4/3 ≈ 50 mm f/2.8 ISO 400 on full frame.',
      'Small sensor: smaller gear, more depth of field.',
    ],
    mistakes: [
      'Saying an f/1.4 lens on a small sensor “is really” f/2.8: for exposure it is f/1.4. Only for depth of field and total light is it equivalent to f/2.8.',
      'Judging a sensor by its megapixels alone, without its size.',
    ],
    keyIdea: 'The f-number sets the brightness. Sensor size sets how much total light you collect and how much depth of field you get for the same image.',
    tryIt: 'In the “Depth of field” interactive (Level 2), keep the equivalent focal length and the aperture the same and change the sensor. Then multiply the f-number by the crop factor and see the depth of field even out.',
    check: [
      {
        id: 'fe-1',
        question: 'At f/2.8, 1/125 and the same ISO, a phone and a full-frame camera see the same scene. What is the same?',
        options: ['The depth of field', 'The brightness (exposure) of the image', 'The noise', 'The focal length'],
        correctIndex: 1,
        explanation: 'The f-number sets the light density; the rest depends on sensor size.',
      },
      {
        id: 'fe-2',
        question: 'Which full-frame combination is equivalent to APS-C (crop 1.5) 35 mm f/2 ISO 200?',
        options: ['35 mm f/2 ISO 200', '52 mm f/3 ISO 450', '24 mm f/1.4 ISO 100', '70 mm f/4 ISO 800'],
        correctIndex: 1,
        explanation: '35 × 1.5 ≈ 52 mm, 2 × 1.5 = f/3, 200 × 1.5² = 450.',
      },
    ],
  },

  'fmt-pixels': {
    title: 'Megapixels, pixel size and the myth of “big pixels”',
    tagline: 'How many megapixels you need, and why big pixels are not magic.',
    quick:
      'For noise, what matters first is sensor size and technology, not the size of each pixel. At the same print size, a 24 and a 45 megapixel sensor of the same size give similar noise. More megapixels give detail and room to crop.',
    challenge:
      'Work it out: a 6000 × 4000 pixel photograph (24 MP), printed at 300 ppi, comes out how big? (Answer: 20 × 13.3 inches, about 51 × 34 cm.)',
    body: [
      'A widespread belief says “big pixels” give less noise. If you look at a single pixel, it is true: a big pixel collects more light than a small one. But we do not view a photograph pixel by pixel. We view it at a particular size, say on a screen or a 30 × 45 cm print. At that same size, the many small pixels “add up” and the total light the sensor collected is almost the same.',
      'That is why two sensors of the same size and similar generation, one with 24 and one with 45 megapixels, give similar noise when compared at the same print size. The sensor with more pixels looks “noisier” only if you zoom to 100%, because there you are looking at a much larger final size. Small differences exist, for example in read noise in very low light, but the big criterion is sensor size and its technology.',
      'How many megapixels do you need? For screens, even a 4K screen has only about 8 megapixels. For prints, a common target is 240–300 pixels per inch at close viewing distance: 24 MP is enough for a print of about 50 × 34 cm, and much larger if seen from a distance. Many megapixels give room to crop and detail in landscape and architecture, but they demand better lenses, steadier hands and more storage.',
    ],
    bullets: [
      'Judge noise at the same viewing size, not at 100%.',
      'What matters most is sensor size and technology.',
      '4K screen ≈ 8 MP.',
      '24 MP at 300 ppi ≈ 50 × 34 cm.',
      'Many MP: cropping and detail, but demanding on lenses and shake.',
    ],
    mistakes: [
      'Comparing cameras by looking at noise at 100%: you are unfair to the one with more megapixels.',
      'Buying a camera for its megapixels when you only share photographs on your phone.',
    ],
    keyIdea: 'Megapixels are detail, not light quality. Noise is judged at the final size, and there sensor size is what counts.',
    tryIt: 'Take a high-ISO photograph, shrink it to half size and compare it with the original at 100%. The noise has largely “disappeared”: the same happens when we look at photographs at normal size.',
    check: [
      {
        id: 'fp-1',
        question: 'Two full-frame sensors of the same generation, 24 and 45 MP, are compared at the same print size. The noise is…',
        options: ['Much higher on the 45 MP', 'Similar', 'Much higher on the 24 MP', 'Zero on both'],
        correctIndex: 1,
        explanation: 'The total light the sensor collects is almost the same; the difference shows only at 100%.',
      },
    ],
  },

  /* ───────── Sharpness ───────── */
  'sharp-what': {
    title: 'What “sharp” means: resolution and contrast',
    tagline: 'Sharpness is not one thing: it is detail, contrast at the edges, and viewing distance.',
    quick:
      'An image looks sharp when it has detail (resolution) and clean, crisp edges (edge contrast). “Sharpening” in editing boosts only the second. And what looks sharp depends on viewing size and distance.',
    challenge:
      'Take a slightly blurry photograph and push the sharpening a long way. Did it really become more detailed, or did the edges just get harsher, with bright “outlines”?',
    body: [
      'When we say a photograph is “sharp” or “crisp”, we are talking about two different things that the eye confuses. Resolution is how small the details that can be distinguished are: individual hairs, letters on a sign. Edge contrast (acutance) is how abruptly brightness changes at the boundaries of an object. An image with moderate resolution but crisp edges can look “sharper” than one with more detail but soft edges.',
      'Lens makers describe sharpness with MTF (modulation transfer function) charts: how much of the contrast of fine lines the lens preserves, from the centre to the edges. The sharpness you finally see is a chain: lens, focus, shake, sensor, processing. Each link takes away a little sharpness, and the weakest usually dominates.',
      'And above all, sharpness is relative to how the image is viewed. A photograph that looks perfect on a phone screen can look soft in a 60 cm print seen up close. That is why “pixel peeping”, examining at 100%, is useful as a technical check but misleading as a measure of quality. And remember that many of the most important photographs in history are not perfectly sharp.',
    ],
    bullets: [
      'Resolution: how small a detail can be distinguished.',
      'Edge contrast: how “crisp” the boundaries are.',
      'MTF: how manufacturers describe a lens’s sharpness.',
      'A chain: lens, focus, shake, sensor, processing.',
      'Judge at the final viewing size.',
    ],
    mistakes: [
      'Oversharpening: bright “halos” around edges and a gritty texture.',
      'Looking for a new lens when the problem is shake or focus.',
    ],
    keyIdea: 'Sharpness is detail and edge contrast, judged at the size someone will see the image. Find the weakest link first.',
    tryIt: 'Print (or show on a large screen) one of your photographs at two sizes. Look at them from the same distance. At what size does it start to look “soft”?',
    check: [
      {
        id: 'sw-1',
        question: 'What does sharpening in editing mainly boost?',
        options: ['Real resolution', 'Edge contrast', 'Depth of field', 'Dynamic range'],
        correctIndex: 1,
        explanation: 'It creates no new detail; it makes existing edges more pronounced.',
      },
    ],
  },

  'sharp-diffraction': {
    title: 'Diffraction and the lens’s “sweet spot”',
    tagline: 'Why f/22 does not give the sharpest photograph, even if everything is within the depth of field.',
    quick:
      'When light passes through a very small hole, it “spreads” a little (diffraction). At small apertures, e.g. f/16–f/22, this softens the whole image. Most lenses are sharpest 1–3 stops down from wide open.',
    challenge:
      'Play with the lesson’s interactive: at what aperture does the Airy disk become larger than two pixels on the “Full frame, 45 MP” sensor? And on “Micro 4/3”?',
    body: [
      'Light also behaves like a wave. When it passes through an opening, it “bends” slightly at the edges, and a point of light is not imaged as a perfect point but as a small bright disk with faint rings around it, the Airy disk. The smaller the opening, that is, the larger the f-number, the larger the disk. For green light, its diameter is about 1.34 micrometres (μm) times the f-number: about 11 μm at f/8 and 21 μm at f/16.',
      'As long as the disk is smaller than the sensor’s pixels, diffraction does not show. When it becomes considerably larger, as a practical rule about two to three pixels, the image starts to soften visibly. That is why sensors with many small pixels, and small sensors, show diffraction sooner. On the other hand, at very wide apertures the lens’s flaws (aberrations) are more visible. The result is a “sweet spot”: for most lenses on full frame, somewhere between f/4 and f/8.',
      'What does this mean in practice? If you need a lot of depth of field, e.g. in landscape, it is not wrong to stop down to f/11 or f/16: a little loss of sharpness from diffraction is better than a blurry foreground. But do not stop down to f/22 “to be safe” without reason. And if you need both huge depth of field and maximum sharpness, the answer is focus stacking, which we will see shortly.',
    ],
    bullets: [
      'Airy disk ≈ 1.34 μm × f-number (green light).',
      'Visible softening once the disk exceeds roughly 2–3 pixels.',
      'Small pixels and small sensors: diffraction sooner.',
      'Sweet spot: usually 1–3 stops down from wide open.',
      'Depth of field > a little diffraction. But not f/22 “to be safe”.',
    ],
    mistakes: [
      'Always shooting landscapes at f/22 “so everything is sharp”: often f/11 with correct focus gives a sharper result.',
      'Blaming the lens for a soft image at f/16 on a high-megapixel camera.',
    ],
    keyIdea: 'Too wide: aberrations. Too narrow: diffraction. The sweet spot is in between, but the depth of field you need comes first.',
    tryIt: 'With the camera on a tripod, photograph a newspaper page or a flat, detailed surface at every aperture from wide open to f/22. Compare at 100%. Where is your lens’s sweet spot?',
    check: [
      {
        id: 'sdf-1',
        question: 'Why does a 45 MP sensor show diffraction at a wider aperture than a 24 MP sensor of the same size?',
        options: ['Because it has a worse lens', 'Because its pixels are smaller, so the Airy disk exceeds them sooner', 'Because it has more noise', 'Because it has a larger sensor'],
        correctIndex: 1,
        explanation: 'At the final image size the difference is smaller than it looks at 100%, but the limit arrives sooner.',
      },
      {
        id: 'sdf-2',
        question: 'Roughly what is the diameter of the Airy disk at f/16 (green light)?',
        options: ['2 μm', '21 μm', '200 μm', '2 mm'],
        correctIndex: 1,
        explanation: '≈ 1.34 μm × 16 ≈ 21 μm.',
      },
    ],
  },

  'sharp-shake': {
    title: 'Shake, the 1/focal-length rule and stabilisation',
    tagline: 'The most common cause of a blurry photograph is not the lens, but the hands.',
    quick:
      'Old rule: without stabilisation, the shutter speed should be at least 1/(focal length), e.g. 1/50 for 50 mm. With many megapixels, make it twice as fast. Stabilisation gains a few stops against hand shake, but does not “freeze” a moving subject.',
    challenge:
      'Photograph some text on a wall with your phone or camera at slower and slower shutter speeds (Pro mode): 1/60, 1/30, 1/15, 1/8. From which point do the letters start to blur?',
    body: [
      'When you hold the camera in your hand, it always moves a little: breathing, pulse, pressing the button. If the shutter speed is slow, this movement “drags” the image across the sensor. The old film rule says the speed should be at least 1/(focal length): 1/50 for 50 mm, 1/200 for 200 mm. Telephotos magnify shake too. On crop digital sensors, use the equivalent focal length. And with many megapixels, which show everything at 100%, it is wise to double the speed.',
      'Image stabilisation, in the lens (OIS), in the sensor (IBIS) or both, compensates for these small movements. Manufacturers quote the benefit in stops, based on the CIPA standard. Many modern systems claim 5 stops or more, although in practice the benefit is usually a little smaller and depends on your hands and the focal length. This means you can photograph a still subject at 1/4 or even slower. But stabilisation does nothing for subject movement: a person walking will blur at 1/4, however steady the camera.',
      'Holding technique: elbows against your body, camera to your eye (not out in front of your face), lean on a wall or column, press the button gently, at the end of an exhale. Burst mode helps: out of three frames, the second is often the sharpest, because pressing the button shakes the first.',
    ],
    bullets: [
      'Rule: shutter speed ≥ 1/(equivalent focal length).',
      'Many megapixels: double the speed to be safe.',
      'Stabilisation: a few stops for the hands, nothing for a moving subject.',
      'Elbows in, support, gentle press, burst.',
    ],
    mistakes: [
      'Trusting stabilisation for people who are moving.',
      'Holding the phone in one hand, arm outstretched, in low light.',
      'Slowing the shutter “for fear” of ISO: a slightly noisy but sharp result is better than a blurry one.',
    ],
    keyIdea: 'Camera shake: solved with speed, stabilisation and technique. Subject movement: solved only with speed.',
    tryIt: 'Find your personal limit: at the same focal length, take 5 shots at each speed from 1/60 to 1/4, with and without stabilisation. At what speed do you keep at least 3 out of 5 sharp?',
    check: [
      {
        id: 'ss-1',
        question: 'You photograph a person walking at 1/8 with excellent stabilisation. What will you see?',
        options: ['Everything perfectly sharp', 'A sharp background, a blurred person', 'A blurred background, a sharp person', 'None of the above'],
        correctIndex: 1,
        explanation: 'Stabilisation corrects the movement of the camera, not of the subject.',
      },
    ],
  },

  'sharp-af': {
    title: 'Autofocus: modes, areas, eye detection',
    tagline: 'The camera focuses fast. Focusing where you want is your job.',
    quick:
      'Two basic modes: single (AF-S / One-Shot) for still subjects, continuous (AF-C / AI Servo) for moving subjects. Choose a focus area (point, zone, whole frame) and use eye detection where available.',
    challenge:
      'Ask someone to walk towards you. Photograph them in burst mode, once in single AF and once in continuous. How many frames came out sharp in each?',
    body: [
      'Modern cameras focus with two basic techniques, often combined. Phase detection measures in which direction and how far the subject is out of focus, and is very fast. Contrast detection searches for the position where the image has maximum contrast, and is accurate but slower. In mirrorless cameras and phones, both happen on the sensor itself, and are combined with subject recognition: faces, eyes, animals, vehicles.',
      'The first decision is the mode. In single AF (AF-S, One-Shot), the camera focuses once and locks: ideal for still subjects and for “focus and recompose”. In continuous AF (AF-C, AI Servo), the camera tracks the subject as long as you hold the button: essential for anything that moves, from children to athletes. The second decision is the area: a single point for precision, a zone for subjects that move unpredictably, the whole frame with subject recognition for convenience.',
      'Many professionals use “back-button focus”: focusing is done with a button on the back of the camera, while the shutter button only takes the picture. That way you can focus once, release the button and shoot freely, or keep it pressed for continuous tracking, without changing modes. And when autofocus struggles, in very low light, with no contrast or in macro, manual focus with magnification on screen and “focus peaking” is often more reliable.',
    ],
    bullets: [
      'AF-S / One-Shot: still subjects.',
      'AF-C / AI Servo: moving subjects.',
      'Area: point (precision), zone (movement), whole frame (with recognition).',
      'Eye detection for portraits and animals.',
      'Back-button focus: focusing separate from shooting.',
      'Manual with magnification and peaking for macro and low light.',
    ],
    mistakes: [
      'Single AF on a subject moving towards the camera: it focuses where the subject was, not where it is.',
      'Letting the camera choose a focus point across the whole frame without recognition: it often focuses on the nearest or most contrasty object.',
    ],
    phone:
      'With a phone: tap the subject to focus. On many phones, if you tap a moving subject, it “follows” it. To lock, keep your finger pressed. Pro mode often also offers manual focus with peaking.',
    keyIdea: 'Mode according to movement, area according to subject. The camera focuses fast; you decide where.',
    tryIt: 'Try back-button focus for a day (if your camera supports it). Photograph both still and moving subjects. Does it suit you?',
    check: [
      {
        id: 'sa-1',
        question: 'Which focus mode do you choose for a running child?',
        options: ['AF-S / One-Shot', 'AF-C / AI Servo', 'Manual at infinity', 'None'],
        correctIndex: 1,
        explanation: 'Continuous focus tracks the subject as it moves.',
      },
    ],
  },

  'sharp-stacking': {
    title: 'Focus stacking: everything sharp, without diffraction',
    tagline: 'When one aperture is not enough, you merge several frames with different focus.',
    quick:
      'You take several photographs of the same scene, focusing a little further each time, and a program keeps the sharp part of each one. That way you get depth of field no aperture can give, without the diffraction of f/22.',
    challenge:
      'With your phone or camera supported, photograph a small object from very close three times: focus at the front, in the middle, at the back. You will merge them in the advanced editing lesson, or right away if you have a program with “focus stack”.',
    body: [
      'In macro photography, depth of field is only a few millimetres even at a small aperture, and fractions of a millimetre wide open. In landscapes with a foreground one metre away and mountains at infinity, even f/16 may not be enough, and it brings diffraction. The solution is focus stacking: several frames, the same composition, a different focus point, and then software that “stitches” the sharp areas together.',
      'In practice: camera on a tripod, manual exposure, so all frames have the same brightness, and the aperture at the lens’s sweet spot, e.g. f/5.6–f/8. Start by focusing on the nearest point and move gradually backwards, with overlaps, so each zone of sharpness “steps” a little into the next. In macro you may need dozens of frames, in landscape often 2–5. Many cameras have a “focus bracketing” mode that does it automatically.',
      'The “stitching” is done in programs such as Photoshop, or in specialised programs such as Helicon Focus and Zerene Stacker. Problems come from anything that moves between frames: leaves in the wind, water, an insect that shifts. There you need patience, fewer frames or manual correction with masks.',
    ],
    bullets: [
      'Several frames, different focus, one image.',
      'Tripod, manual exposure, sweet-spot aperture.',
      'From front to back, with overlap.',
      'Macro: dozens of frames. Landscape: 2–5.',
      'Software: Photoshop, Helicon Focus, Zerene Stacker.',
    ],
    mistakes: [
      'Auto exposure between frames: the brightness “jumps” and the seams show.',
      'Gaps in focus: blurred strips between sharp ones.',
      'Not accounting for moving leaves or water.',
    ],
    keyIdea: 'When the depth of field is not enough, do not stop down all the way: take several frames with different focus and merge them.',
    tryIt: 'Make a stack of 5–10 frames of a flower or small object, on a tripod, with manual exposure. Compare it with a single frame at f/22.',
    check: [
      {
        id: 'sst-1',
        question: 'Why do we prefer focus stacking at f/8 to a single frame at f/22?',
        options: ['Because it is faster', 'Because we avoid diffraction and get more depth of field', 'Because it needs less light', 'Because it needs no tripod'],
        correctIndex: 1,
        explanation: 'f/8 is usually close to the sweet spot; stacking provides the depth of field.',
      },
    ],
  },

  'sharp-support': {
    title: 'Tripod, self-timer and vibration',
    tagline: 'When the shutter speed is not enough, the camera needs support, and the support needs technique.',
    quick:
      'A tripod solves shake at slow speeds, but brings its own vibrations: pressing the button, the wind, the shutter. Use a 2-second self-timer or a remote, and electronic first curtain if available.',
    challenge:
      'Rest your phone or camera on something steady (books, a wall) and photograph a dark scene at 1 second: once pressing the button, once with a 2-second self-timer. Compare.',
    body: [
      'The tripod is the simplest sharpness tool: it allows slow shutter speeds, low ISO and careful composition. But it is not magic. A light tripod in the wind, with its legs fully extended and the centre column raised high, can tremble. Keep the centre column low, extend the thicker leg sections first, and if it is windy, hang a weight, e.g. your bag, from the hook underneath.',
      'Pressing the button itself shakes the camera. That is why, at slow speeds on a tripod, use a 2-second self-timer, a remote or the phone app. On DSLRs, the movement of the mirror causes vibration, solved with mirror lock-up or shooting from the screen (live view). And on mirrorless cameras, the mechanical shutter can cause a small “shutter shock” at certain speeds, solved with electronic first curtain (EFCS) or the electronic shutter.',
      'Stabilisation and tripods: many systems detect the tripod and adapt. On some older ones, stabilisation on a tripod could cause slight blur, which is why manufacturers often suggest turning it off. Check your camera’s manual. Without a tripod, any steady surface helps: a wall, a railing, a bag of rice on a bench.',
    ],
    bullets: [
      'Centre column low, thick leg sections first.',
      'A weight hung in the wind.',
      '2 s self-timer or remote.',
      'DSLR: mirror lock-up or live view. Mirrorless: EFCS.',
      'Stabilisation on a tripod: see what the manufacturer recommends.',
    ],
    mistakes: [
      'Pressing the button with your finger for a 1/2 s exposure on a tripod.',
      'A tripod with the centre column fully raised in the wind.',
    ],
    phone:
      'With a phone: a small tripod or stand costs little and transforms night photographs. Use the 3-second self-timer or the volume buttons on your earphones as a “remote”.',
    keyIdea: 'The tripod stops hand shake. The self-timer and electronic shutter stop the rest.',
    tryIt: 'Go out one evening with a tripod or support and photograph a lit building at 2 seconds, with the self-timer. Try it with the centre column raised too: do you see a difference?',
    check: [
      {
        id: 'sup-1',
        question: 'Why do we use a 2-second self-timer on a tripod?',
        options: ['To have time to get into the picture', 'To let the vibration from pressing the button die down', 'To meter the light better', 'To focus'],
        correctIndex: 1,
        explanation: 'Pressing shakes the camera; within 2 seconds the vibration has died away.',
      },
    ],
  },
};
