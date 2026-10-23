import type { LessonModule, ModuleText, LevelText, SchoolLevel } from '../types';

/** Modules added with the four-level structure */
export const MODULES3_EN: Partial<Record<LessonModule, ModuleText>> = {
  'eye-1': {
    title: 'Eye I: learning to see',
    desc: 'Before any rule, photography is a way of looking. How to observe, how to find a subject and how to train your eye every day.',
  },
  'color-theory': {
    title: 'Colour theory',
    desc: 'How colour is made, the colour wheel, harmonies and contrasts, and how colour becomes emotion and meaning in an image.',
  },
  'eye-2': {
    title: 'Eye II: reading a photograph',
    desc: 'How to describe, analyse and interpret an image: your own and those of great photographers. Light as narrative.',
  },
  'workshop-1': {
    title: 'Workshops I: portrait, street, landscape',
    desc: 'What you have learned, in practice. How to approach a person and put them at ease, how to work on the street with respect, how to plan a landscape.',
  },
  sensor: {
    title: 'Sensor & noise',
    desc: 'What happens inside the camera: how a pixel measures light, where noise comes from, what ISO really is, and what ISO invariance and dual native ISO mean.',
  },
  formats: {
    title: 'Format & sensor size',
    desc: 'From 35 mm to large format: how the size of the sensor or film changes the image, and what “equivalence” really means.',
  },
  sharpness: {
    title: 'Sharpness',
    desc: 'What makes a photograph truly sharp: resolution and contrast, diffraction, shake, autofocus, focus stacking.',
  },
  shutter: {
    title: 'Shutter & motion',
    desc: 'Mechanical and electronic shutters, rolling shutter, long exposures with ND filters and the art of panning.',
  },
  flash: {
    title: 'Flash & artificial light',
    desc: 'Flash without fear: how light falls off with distance, sync, balancing with ambient light, off-camera flash.',
  },
  'color-mgmt': {
    title: 'Colour management',
    desc: 'The technical side of colour: colour spaces, profiles, monitor calibration and mixed light, so what you see is what others get.',
  },
  'editing-adv': {
    title: 'Advanced editing',
    desc: 'Curves, local adjustments and masks, HDR and panorama merging, and the art of black-and-white conversion.',
  },
  'eye-3': {
    title: 'Eye III: from the photograph to the series',
    desc: 'How a project is born, how to research, how to select photographs and how to sequence them so they tell a story.',
  },
  'workshop-2': {
    title: 'Workshops II: night, sky, macro, product, action',
    desc: 'More demanding genres, where the technique of Level 3 becomes essential.',
  },
  studio: {
    title: 'Studio lighting',
    desc: 'From one light to three: set-ups, lighting ratios, the hand-held meter and light modifiers. Controlling light at a professional level.',
  },
  directing: {
    title: 'Directing & the psychology of the portrait',
    desc: 'How to talk to the person in front of you, how to direct them without them looking “posed”, how to work with a client.',
  },
  retouch: {
    title: 'Professional retouching',
    desc: 'Dodge & burn, skin, clean-up: professionals’ techniques, and the limits, ethical and aesthetic.',
  },
  workflow: {
    title: 'Professional workflow',
    desc: 'Tethered shooting, filing and metadata, backups, delivering files to clients.',
  },
  print: {
    title: 'Printing & presentation',
    desc: 'Resolution and dimensions, papers, soft proofing, framing and exhibiting: how a photograph becomes an object.',
  },
  business: {
    title: 'The profession',
    desc: 'Markets and specialisations, portfolio, pricing and usage licences, contracts and copyright. General information, not legal advice.',
  },
  gear: {
    title: 'Equipment',
    desc: 'How to choose a camera and lenses, when an upgrade is worth it and how to look after your equipment.',
  },
  'eye-4': {
    title: 'Eye IV: the photographer’s path',
    desc: 'Personal style, books and exhibitions, critique, ethics and photography in the age of artificial intelligence.',
  },
};

export const LEVELS_EN: Record<SchoolLevel, LevelText> = {
  1: {
    name: 'First steps',
    who: 'For anyone starting out, with a phone or a camera. You need nothing but curiosity.',
    project: {
      title: 'One day, one subject',
      brief: 'Choose a simple subject, e.g. “my neighbourhood”, “morning”, “hands”, and photograph it in one day. Keep the best 10.',
      steps: [
        'Photograph at at least three different times of day.',
        'At least one photograph with side light and one against the light.',
        'Consciously apply three framing rules: thirds, leading lines, simplicity.',
        'For each photograph, write one sentence: why did you keep it?',
      ],
    },
    canDo: [
      'I see where the light comes from and whether it is hard or soft.',
      'I know what aperture, shutter speed and ISO do.',
      'I correct a photograph that comes out too dark or too bright.',
      'I use thirds, the horizon and lines.',
      'I know what I want to show before I press the shutter.',
    ],
  },
  2: {
    name: 'Taking control',
    who: 'You know the basics and want the camera to stop deciding for you.',
    project: {
      title: 'A small series: 5 images',
      brief: 'Make a series of five photographs with a shared subject and a shared aesthetic, e.g. a person and their space, one colour in the city, a landscape in three seasons.',
      steps: [
        'At least one portrait of someone you did not know, with their permission.',
        'Choose depth of field and lens consciously for each image.',
        'Work with a limited colour palette or in black and white.',
        'Edit all the images with the same logic, so they “hang together”.',
        'Write a paragraph: what does the series say?',
      ],
    },
    canDo: [
      'I control what is sharp and what is blurred, and why.',
      'I read the histogram and know when the meter is fooling me.',
      'I choose a lens or distance based on the perspective I want.',
      'I use colour harmonies and contrasts consciously.',
      'I describe and interpret a photograph, mine or someone else’s.',
      'I approach a person for a portrait with ease and respect.',
    ],
  },
  3: {
    name: 'Technique in depth',
    who: 'You already shoot in manual and want to understand what happens inside the camera and to make complete series.',
    project: {
      title: 'A series of 12–15 images with text',
      brief: 'A personal project lasting at least a month, from the idea and research to the final selection and sequence.',
      steps: [
        'Write a sentence about the project before you start: what are you looking for?',
        'Photograph on at least five different outings.',
        'Use at least one demanding technique: flash, long exposure, night shooting or focus stacking.',
        'Make the selection in three rounds and ask someone else for their opinion.',
        'Sequence the photographs and write a text of 150–200 words.',
      ],
    },
    canDo: [
      'I explain where noise comes from and when it is worth raising the ISO.',
      'I know how format changes angle, depth of field and noise.',
      'I avoid diffraction and shake, and know when I need a tripod.',
      'I balance flash and ambient light.',
      'I work with correct colour management from capture to screen.',
      'I build a series with a beginning, middle and end.',
    ],
  },
  4: {
    name: 'Professional',
    who: 'You want to work with clients, exhibit, publish, or simply take your technique and your way of seeing to the highest level.',
    project: {
      title: 'Portfolio & assignment',
      brief: 'Two parts: a 20-image portfolio with text, and an “assignment” as if from a client, from the brief to delivery.',
      steps: [
        'Portfolio: 20 images, one specialisation, a consistent style, an artist statement.',
        'Assignment: write a brief, e.g. portraits for a small business website, and make a quote with a usage licence.',
        'Shoot with a lighting set-up you designed in advance.',
        'Retouch in moderation and deliver files for web and for print.',
        'Print three photographs on different papers and compare.',
      ],
    },
    canDo: [
      'I set up lighting with one, two or three lights for a specific result.',
      'I direct a person so they feel at ease and look natural.',
      'I have an organised archive and backups that will not let me down.',
      'I print with predictable results.',
      'I price and define usage licences with clear terms.',
      'I have a personal style and can explain it.',
    ],
  },
};
