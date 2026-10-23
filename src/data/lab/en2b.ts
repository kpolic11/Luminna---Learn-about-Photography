import type { LessonText } from '../types';

/** Newer lessons, part 2 (English) */
export const LAB2B_EN: Record<string, LessonText> = {
  'lens-perspective': {
    title: 'Perspective: the lens or your feet?',
    tagline: 'The great misunderstanding of telephoto “compression”, and why close-up wide-angle portraits distort.',
    body: [
      'We often hear that a telephoto lens “compresses” perspective, bringing the background closer, and that a wide-angle “stretches” it. In reality, perspective, that is how large near things look compared with far ones, depends only on your position: on the distances between you, the subject and the background. The lens simply decides how much of that perspective goes into the frame.',
      'You can prove it: photograph a scene from the same position with a wide-angle and a telephoto. If you crop the wide-angle photograph to the same framing as the telephoto one, the size relationships will be exactly the same. What changes perspective is moving further away or closer.',
      'So why do telephoto photographs look “compressed”? Because to keep the subject the same size with a telephoto, you have to stand much further away. From far away, the subject and the background are relatively “close” to each other compared with your distance, so the background looks large and near: a mountain towering behind a person, a huge moon above a city.',
      'The same explains the distortion of faces. A close-up portrait with a wide-angle means you are a few centimetres from the nose: the nose is much closer to the camera than the ears, so it looks disproportionately large. That is why, for portraits, photographers prefer to stand a little further back with a 70 – 135 mm lens, or on a phone with the telephoto camera (2× or 3×), rather than move in with the main camera.',
    ],
    bullets: [
      'Perspective changes with your position, not with the lens.',
      'Telephoto from far away: a large, “close” background, calm proportions.',
      'Wide-angle from close up: a dramatic foreground, a small, distant background.',
      'If you tilt the camera up at a building, the vertical lines converge. Keep the camera level or step back.',
    ],
    mistakes: [
      'A very close selfie with a wide-angle: big nose, small face. Stretch your arm or use a timer from a distance.',
      '“Zooming in” to make the background bigger while standing in the same spot: you need to step back.',
    ],
    keyIdea: 'Your feet change the perspective. The lens only changes the framing.',
    tryIt: 'Put a friend in front of a distant building. Photograph them from close up at 0.5× or 1×, then step well back and photograph them at 3×, so they are the same size. Compare how big the building looks.',
    check: [
      {
        id: 'lp1',
        question: 'What really determines the perspective of a photograph?',
        options: ['The focal length', 'The position of the camera relative to the subject and the background', 'The ISO', 'The aperture'],
        correctIndex: 1,
        explanation: 'The lens only changes how much of the scene fits. The distances change the proportions.',
      },
      {
        id: 'lp2',
        question: 'Why does a close-up wide-angle portrait make the nose look big?',
        options: ['Because the wide-angle has a defect', 'Because from very close the nose is proportionally much nearer the camera than the ears', 'Because the light falls on the nose', 'Because the depth of field is shallow'],
        correctIndex: 1,
        explanation: 'Small differences in distance become large differences in size when you are very close.',
      },
    ],
  },

  /* ------------------------------ EDITING ------------------------------ */
  'edit-basics': {
    title: 'The basics of editing',
    tagline: 'A sequence of steps that improves every photograph without “shouting” that it was edited.',
    body: [
      'Editing is not an after-the-fact “fix” for a bad photograph. It is the continuation of the shot, as the darkroom was for Ansel Adams. A good sequence of steps helps you not to get lost among the countless sliders in the apps.',
      'Start with geometry: straighten the horizon and crop out anything unnecessary, taking care not to “suffocate” the subject. Then set the overall brightness (exposure) and contrast. Next work on the highlights, to bring back detail in the sky, and the shadows, to open up the dark areas. Then the white balance: do you want neutral colours or a warm/cool mood? Then saturation, in moderation: prefer “vibrance”, which boosts muted colours without “burning” skin tones.',
      'Local adjustments come at the end: brightening a face a little, darkening the edges to lead the eye to the centre, as darkroom printers did with “dodging” and “burning”. And last of all, sharpening and noise reduction, with care.',
      'If your camera or phone can shoot RAW, try it. RAW keeps much more information than a JPEG, and lets you rescue “blown” skies and dark shadows, and change the white balance without loss. The price is bigger files and the fact that you must always edit them.',
    ],
    bullets: [
      '1. Straighten and crop.',
      '2. Exposure and contrast.',
      '3. Highlights and shadows.',
      '4. White balance.',
      '5. Vibrance / saturation, in moderation.',
      '6. Local adjustments (lightening/darkening areas).',
      '7. Sharpening and noise.',
    ],
    mistakes: [
      'Too much saturation: orange skin, “radioactive” green grass.',
      'Overdone HDR: grey, flat images with “halos” around objects.',
      'Editing on a screen at maximum brightness: the photograph looks dark on other screens and in print.',
    ],
    keyIdea: 'A few targeted adjustments, in order. If the viewer “sees” the editing, it is probably too much.',
    tryIt: 'Take one of your photographs and edit it following the 7 steps in order. Then show the original and the final version side by side. Look again the next day: would you dial anything back?',
    check: [
      {
        id: 'eb1',
        question: 'What is a sensible first step in editing?',
        options: ['Push saturation to the maximum', 'Straighten the horizon and crop what is unnecessary', 'Add grain', 'Reduce noise'],
        correctIndex: 1,
        explanation: 'First geometry and framing, then tones and colours.',
      },
      {
        id: 'eb2',
        question: 'What is the main advantage of RAW over JPEG?',
        options: ['Smaller files', 'It keeps much more information for editing', 'It needs no editing', 'It is always brighter'],
        correctIndex: 1,
        explanation: 'So you can rescue highlights and shadows and change the white balance without loss.',
      },
    ],
  },

  'edit-workflow': {
    title: 'Workflow: from the card to the archive',
    tagline: 'How not to drown in thousands of photographs, and not to lose the best ones.',
    body: [
      'A “workflow” is the path a photograph takes from the moment it is taken until it goes into your archive, is published or is printed. Without a steady path, photographs get scattered across phones, cards and computers, and one day they are lost.',
      'The first step is import and backup: move the photographs into a folder with a sensible name, for example “2026-10-22 Street market”, and make a backup immediately. The second is selection: go through the photographs one by one and mark the good ones (with stars or flags). Delete the complete failures, blurred shots and duplicates. Only then do you edit, and only the ones you selected.',
      'If you can, use “non-destructive” editing: programs that store the adjustments separately from the original file, so you can always go back. If you find a combination of settings you like, save it as a “preset”, so the photographs in a series have a consistent look.',
      'Finally, export: for the internet, smaller files (for example 2048 pixels on the long side) in the sRGB colour space. For printing, full resolution and a conversation with the lab. Add your name and copyright information to the files’ metadata. And remember the 3-2-1 rule: three copies, on two different media, one in another place.',
    ],
    bullets: [
      'Import → backup → selection → editing → export → archive.',
      'Folder names with the date first (YYYY-MM-DD), for automatic chronological order.',
      'Star ratings: 1 = keep, 3 = good, 5 = among your best.',
      'Web: sRGB, ~2048 px. Print: full resolution, ask the lab.',
    ],
    mistakes: [
      'Editing every photograph before selecting: you waste hours on images you will not keep.',
      'Keeping photographs only on your phone: a lost phone is a lost archive.',
      'Deleting the original files after editing.',
    ],
    keyIdea: 'Backup first, then selection, then editing. Never the other way round.',
    tryIt: 'Take your photographs from the past week. Make a dated folder, back it up, mark the 10 best and edit only those.',
    check: [
      {
        id: 'ew1',
        question: 'What is the right order?',
        options: ['Editing → selection → backup', 'Backup → selection → editing', 'Selection → delete everything → editing', 'Export → import → selection'],
        correctIndex: 1,
        explanation: 'First you secure the files, then you choose, and you edit only what you kept.',
      },
      {
        id: 'ew2',
        question: 'Which colour space do we usually use for photographs on the internet?',
        options: ['CMYK', 'sRGB', 'RAW', 'HDR'],
        correctIndex: 1,
        explanation: 'sRGB displays correctly on most screens and browsers.',
      },
    ],
  },
};
