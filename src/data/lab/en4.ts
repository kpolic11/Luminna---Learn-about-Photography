import type { LessonText } from '../types';
import { LAB4B_EN } from './en4b';

/** School — new Level 1–2 lessons (framing, Eye I, files, colour theory) */
const LAB4A_EN: Record<string, LessonText> = {
  /* ───────── Level 1 · Framing ───────── */
  'comp-aspect': {
    title: 'The shape of the frame: aspect ratios, horizontal and vertical',
    tagline: 'Before any rule of composition, there is the rectangle itself. Its shape changes the picture.',
    body: [
      'Every photograph has a shape, described by the ratio of width to height. 3:2 is the shape of 35 mm film (36 × 24 mm) and of most cameras today. 4:3 is the shape of most phones and of Micro 4/3 cameras. 1:1, the square, was the shape of many medium-format cameras (6 × 6). 16:9 is the shape of television and video. And on social media, vertical shapes such as 4:5 and 9:16 now dominate.',
      'The shape is not neutral. A wide frame leads the eye horizontally: it suits landscapes, horizons, movement from left to right. A vertical frame leads the eye up and down: it suits standing people, trees and buildings, and gives a sense of height. The square has no direction: it is calm and stable, and makes symmetry and the centre work better than in a rectangle.',
      'The most common beginner’s mistake is always to hold the camera horizontally, because “that is how you hold it”. Before you shoot, ask: is my subject “tall” or “wide”? Try both. And when you crop in editing, remember that by changing the ratio you also change the composition: the thirds, the lines and the “breathing room” around the subject all move.',
    ],
    bullets: [
      '3:2: the classic ratio, flexible for almost everything.',
      '4:3: slightly “taller”, good for portraits and vertical subjects.',
      '1:1: calm, symmetrical, with emphasis on the centre.',
      '16:9: panoramic, cinematic, for landscapes and streets.',
      '4:5 and 9:16: vertical shapes for phones and social media.',
    ],
    mistakes: [
      'Always photographing vertical subjects, such as a standing person, in a horizontal frame, with empty space at the sides.',
      'Cropping an image to a square without rethinking the composition: the subject often ends up “stuck” at the edge.',
    ],
    phone:
      'With a phone: in the camera settings you can choose the aspect ratio (usually 4:3, 16:9, 1:1). 4:3 uses the whole sensor; the other shapes usually crop from it. If you are not sure, shoot in 4:3 and crop later.',
    keyIdea: 'The shape of the frame is the first composition decision: horizontal for width and movement, vertical for height, square for calm.',
    tryIt: 'Photograph the same subject in three shapes: horizontal, vertical and square. Which one best says what you wanted?',
    see: ['cartier-bresson', 'avedon', 'sugimoto'],
    check: [
      {
        id: 'ca-1',
        question: 'What is the aspect ratio of classic 35 mm film?',
        options: ['1:1', '4:3', '3:2', '16:9'],
        correctIndex: 2,
        explanation: 'The frame is 36 × 24 mm, that is 3:2.',
      },
      {
        id: 'ca-2',
        question: 'Which shape best suits a symmetrical composition with the subject in the centre?',
        options: ['Square (1:1)', '16:9', '9:16', 'None'],
        correctIndex: 0,
        explanation: 'The square has no direction and supports the centre and symmetry.',
      },
    ],
  },

  /* ───────── Level 1 · Eye I ───────── */
  'eye-seeing': {
    title: 'Learning to see',
    tagline: 'The camera does not see. You do. And seeing can be trained.',
    body: [
      'Most people look without seeing: we recognise objects (“a tree”, “a person”) and move on. A photographer learns to see differently: not objects, but light, shapes, colours, lines, relationships. A tree becomes a dark vertical line against a bright sky. A person becomes a silhouette walking towards a strip of light.',
      'This way of seeing is not a talent. It is a habit, and it can be cultivated. A simple way to start is to “squint”: the details disappear and you are left with the big light and dark masses, that is, the composition. Another is to look through a paper “window” or through your fingers, like a frame: the world stops being continuous and becomes “pictures”.',
      'Great photographers often talk about walking, patience and attention more than about equipment. Go out without a goal, walk more slowly than usual, stop when something touches you, and ask yourself what exactly touched you: the light? the colour? a gesture? That answer is your photograph.',
    ],
    bullets: [
      'See light and shadow before objects.',
      'Squint to see the big masses.',
      'Walk slowly, stop, look again from another position.',
      'Ask “what exactly touched me?” before you press the shutter.',
    ],
    mistakes: [
      'Looking for “spectacular” subjects and passing by the everyday, where most good photographs are.',
      'Shooting straight away, before looking at what is actually in the frame.',
    ],
    keyIdea: 'Photography starts before you raise the camera: when you begin to see light, shapes and relationships instead of objects.',
    tryIt: 'Take a 20-minute walk without photographing anything. Note on your phone five things you “saw”: for example “light passing through railings and making stripes on the wall”. The next day, go back and photograph them.',
    see: ['cartier-bresson', 'kertesz', 'maier', 'sudek'],
    check: [
      {
        id: 'es-1',
        question: 'What helps you see the big light and dark masses of a scene?',
        options: ['Squinting', 'Raising the ISO', 'Getting very close', 'Using a wide-angle'],
        correctIndex: 0,
        explanation: 'The details disappear and the structure of the image remains: the composition.',
      },
    ],
  },

  'eye-light-subject': {
    title: 'Light as the subject',
    tagline: 'Sometimes the subject of a photograph is not what is lit, but the light itself.',
    body: [
      'In the lessons on light we learned to control how a subject is lit. But there is another way to think: light can be the subject itself. A beam of light falling into a dark room, a strip of sun on a wall, the shadows of a window on a bed, a reflection in a shop window. In photographs like these, everything else in the frame is there to “hold” the light.',
      'Here the way of working is reversed. You do not look for a subject and then light. You look for light, and then you wait. Many street photographers find a “stage”, for example a strip of light on a pavement, and wait for someone to walk through it. The meter must read the light, not the shadow: that way the shadows turn black and the bright area is “carved out”.',
      'The same goes for shadows. A shadow can be more interesting than the object casting it: long, distorted, graphic. The low light of morning and afternoon gives the longest shadows. And the Czech photographer Josef Sudek photographed the same window of his studio for years, with the light, the condensation and the seasons changing the picture every time.',
    ],
    bullets: [
      'Look for the light first, then the subject.',
      'Meter on the bright area: let the shadows go black.',
      'Find a “stage” of light and wait for someone to step into it.',
      'Shadows can be a stronger subject than objects.',
    ],
    mistakes: [
      'Letting the camera “open up” the shadows: you lose the contrast that made the scene interesting.',
      'Leaving straight away: the best light often lasts a few minutes, but the right moment within it takes patience.',
    ],
    phone:
      'With a phone: tap on the bright area and lower the sun ☀ until the shadows are almost black. If the phone opens them up too much, try switching off HDR.',
    keyIdea: 'Look for the light first. Meter on the light, keep the shadows dark, and wait for the moment.',
    tryIt: 'Find a spot where a strip of sun or a beam of light falls. Stay there for 15 minutes and photograph whatever passes through it: people, animals, leaves.',
    see: ['sudek', 'moriyama', 'leiter', 'kertesz'],
    check: [
      {
        id: 'els-1',
        question: 'In a scene with a strip of light on a dark street, where do you meter?',
        options: ['In the shadow', 'On the bright strip', 'On the sky', 'It does not matter'],
        correctIndex: 1,
        explanation: 'That way the bright area is correctly exposed and the shadows stay dark.',
      },
    ],
  },

  'eye-intent': {
    title: 'What do I want to say?',
    tagline: 'The question that separates a “nice photo” from a photograph that stays with you.',
    body: [
      'A technically correct photograph is not necessarily a good photograph. What makes an image stay in the memory is usually that it says something: a feeling, an idea, a story, a question. Before you press the shutter, it is worth asking: why am I photographing this? What do I want the person who sees it to feel or think?',
      'The answer affects every technical decision. If you want to show a person’s loneliness in a big city, perhaps you make them small in a large frame, with plenty of negative space. If you want to show the tenderness of two hands, you get very close, with soft light and shallow depth of field. The same subject, with a different intention, becomes a completely different photograph.',
      'This does not mean you must always know in advance what you want to say. Often you discover it while shooting, or later, looking at your photographs. But the habit of asking “what does this picture say?” is what gradually builds your own way of seeing.',
    ],
    bullets: [
      'Ask: why am I photographing this?',
      'Ask: what do I want the viewer to feel?',
      'Let the answer choose the frame, the lens, the light and the moment.',
      'After the shot: what does the photograph actually say? Is it what you wanted?',
    ],
    mistakes: [
      'Filling the frame with lots of things “so that everything is in”: the photograph loses its voice.',
      'Judging your photographs only technically (sharp, correct exposure) and not by what they say.',
    ],
    keyIdea: 'Intention first, technique second. The question “what do I want to say?” chooses the frame, the light and the moment.',
    tryIt: 'Choose one word, for example “loneliness”, “hurry”, “tenderness”, and make three photographs that express it without showing it “literally”.',
    see: ['frank', 'lange', 'arbus', 'goldin'],
    check: [
      {
        id: 'ei-1',
        question: 'You want to show a person’s loneliness in a big city. Which choice helps most?',
        options: ['A very close-up of their face', 'The person small in a large frame with plenty of empty space', 'Flash from the front', 'Many people in the frame'],
        correctIndex: 1,
        explanation: 'Negative space and scale “say” isolation.',
      },
    ],
  },

  'eye-daily': {
    title: 'A daily workout for the eye',
    tagline: 'As a musician practises scales, a photographer trains the eye.',
    body: [
      'Your eye improves through continuity, not big expeditions. One photograph a day for a month will teach you more than a trip with a thousand shots. Because it forces you to find something to say within the ordinary: at home, on the way to work, in your neighbourhood.',
      'Exercises with constraints are among the most effective. One lens or one focal length for a week. Only black and white. Only one colour. Only shadows. The constraint forces you to look for solutions you would not otherwise look for. Another good tool is to look at many photographs by others: books, exhibitions, museums, asking each time what drew you in and why.',
      'Keep a simple diary: the photograph of the day and one sentence about what you tried. After a month, look at them all together. You will see what attracts you, which subjects keep coming back, which light you love. That is the beginning of your personal style.',
    ],
    bullets: [
      'One photograph a day, for 30 days.',
      'A week with a single constraint: one lens, one colour, only shadows.',
      'Look at others’ work and ask “why did it draw me in?”.',
      'Diary: a photograph and one sentence.',
    ],
    mistakes: [
      'Waiting for “inspiration” or a trip before you photograph.',
      'Keeping every photograph: choosing the one is part of the exercise.',
    ],
    keyIdea: 'The eye is a muscle: it needs daily exercise, constraints and lots of looking at other people’s work.',
    tryIt: 'Start a “30 days, 30 photographs” today. Each week with one constraint: week 1 only shadows, week 2 only red, week 3 only human hands, week 4 free.',
    see: ['shore', 'maier', 'tillmans'],
    check: [
      {
        id: 'ed-1',
        question: 'Why do exercises with constraints, such as “one lens only”, help?',
        options: ['Because the camera works better', 'Because they force you to find solutions you would not look for', 'Because they make photographs sharper', 'They do not help'],
        correctIndex: 1,
        explanation: 'Constraints activate creativity.',
      },
    ],
  },

  /* ───────── Level 2 · Files ───────── */
  'edit-files': {
    title: 'File formats: RAW, JPEG, HEIF, DNG, TIFF, PNG',
    tagline: 'What each file keeps, what it throws away, and when to use which.',
    body: [
      'When you press the shutter, the sensor records raw data. If the camera saves a JPEG, it processes that data immediately: it sets white balance, contrast, sharpening and colour, and then compresses the image, throwing away information it judges invisible. A JPEG is small, opens everywhere and is ready to use. But it has 8 bits per channel (256 tones), and whatever was thrown away does not come back.',
      'RAW is the sensor data almost as it is, usually with 12 or 14 bits (4,096 or 16,384 tones per channel). It is not yet an “image”: it needs editing software to be displayed. But it gives you much more latitude: you correct white balance without loss, open up shadows, rescue highlights. Every manufacturer has its own RAW (for example .CR3, .NEF, .ARW). DNG, introduced by Adobe in 2004, is an open RAW format, also used by some cameras and phones.',
      'HEIF (.HEIC on iPhones) is a newer format used by many phones. It gives about the same quality as JPEG in a smaller file and can hold more than 8 bits, but it does not open everywhere. TIFF is a lossless format, in 8 or 16 bits, ideal for archiving and printing, but very large. PNG is also lossless, and is used mainly for graphics and images with transparency and rarely for photographs, because the files are very large. For the web there are also newer formats, such as WebP and AVIF.',
    ],
    bullets: [
      'RAW: for when you want maximum control. Needs editing.',
      'JPEG: ready, small, everywhere. 8-bit, lossy.',
      'HEIF/HEIC: smaller than JPEG at the same quality, usually on phones.',
      'DNG: an open RAW format.',
      'TIFF: lossless, 16-bit, for archiving and printing.',
      'PNG: lossless, mainly for graphics and transparency; rarely for photographs (large files).',
    ],
    mistakes: [
      'Re-saving a JPEG many times: every save recompresses it and loses quality.',
      'Shooting only in RAW without the time or software to edit.',
      'Sending TIFF or RAW files for the web: they are huge and often will not open.',
    ],
    phone:
      'With a phone: most save HEIF or JPEG. Many also offer RAW (for example “ProRAW”, “Expert RAW” or DNG in Pro mode). Use it in difficult light, when you know you will edit the photograph.',
    keyIdea: 'RAW keeps all the information for editing; JPEG is the finished result. TIFF is for archiving and printing, and every format has its place.',
    tryIt: 'If your camera or phone allows it, shoot the same scene in difficult light in RAW and JPEG. Try to “open up” the shadows by 2 stops in both. Compare.',
    check: [
      {
        id: 'ef-1',
        question: 'Why does RAW give more editing latitude than JPEG?',
        options: ['Because it is always sharper', 'Because it keeps more tones (12–14 bits) and has not thrown information away', 'Because it has more vivid colours', 'Because it is smaller'],
        correctIndex: 1,
        explanation: 'JPEG has 8 bits and lossy compression; RAW keeps the sensor data.',
      },
      {
        id: 'ef-2',
        question: 'Which format do you choose to archive an edited photograph for printing, without loss?',
        options: ['JPEG', 'Lossy WebP', '16-bit TIFF', 'GIF'],
        correctIndex: 2,
        explanation: '16-bit TIFF keeps all the tones without lossy compression.',
      },
    ],
  },
};

export const LAB4_EN: Record<string, LessonText> = { ...LAB4A_EN, ...LAB4B_EN };
