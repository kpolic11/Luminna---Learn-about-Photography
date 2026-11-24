import type { RichPack } from './types';
import { PH } from './photos';

/** Rich content (photos, interactives, tests) — English. Pilot: the «Exposure» module. */
export const RICH_EN: RichPack = {
  lessons: {
    'exp-what': {
      plays: [
        {
          kind: 'exposure',
          photo: PH.beach0,
          title: 'Set the exposure yourself',
          intro: 'Drag the slider. Each step is half a stop. At −3 the sea sinks into darkness; at +3 the sky burns out to pure white. Find the point where you can see both the birds and the clouds.',
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'Your photo came out far too dark. What happened?',
          options: ['Too little light was gathered: underexposure', 'Too much light was gathered: overexposure', 'The lens did not focus', 'The white balance was wrong'],
          answer: 0,
          why: 'A dark image means too little light reached the sensor: underexposure. Focus and white balance do not change brightness.',
        },
        {
          kind: 'match',
          q: 'Match each setting to its part of the «tap and bucket» analogy.',
          pairs: [
            ['Aperture', 'How far you open the tap'],
            ['Shutter speed', 'How long you leave it open'],
            ['ISO', 'How big the bucket is'],
          ],
          why: 'Aperture sets how much light passes, the shutter for how long, and ISO how much light is «needed» to fill the image.',
        },
      ],
    },
    'exp-stops': {
      walks: [
        {
          photo: PH.shutterdial0,
          title: 'A shutter-speed dial, counted in stops',
          intro: 'This dial on an old camera shows shutter speeds. The numbers are fractions: 125 means 1/125 of a second.',
          ann: [
            { t: 'circle', x: 0.245, y: 0.555, r: 0.04, c: 'y', step: 1 },
            { t: 'circle', x: 0.285, y: 0.625, r: 0.045, c: 'y', step: 1 },
            { t: 'arrow', x: 0.33, y: 0.76, x2: 0.5, y2: 0.8, c: 'g', label: '½ light per click', step: 2 },
            { t: 'circle', x: 0.61, y: 0.7, r: 0.05, c: 'r', label: '1/4000', step: 3 },
          ],
          steps: [
            'Side by side: 60 and 125. 1/125 is about half of 1/60, so each click of the dial is one stop.',
            'Moving right (250, 500, 1000…) the time halves each time: half the light per click.',
            'From 1/60 to 1/4000 there are six clicks: six stops, i.e. 64 times less light (2×2×2×2×2×2).',
          ],
        },
      ],
      tests: [
        {
          kind: 'order',
          q: 'Put the apertures in order, from the one that lets in the most light to the one that lets in the least.',
          items: ['f/2', 'f/2.8', 'f/4', 'f/5.6', 'f/8'],
          ends: ['Most light', 'Least light'],
          why: 'Small f-number = big opening. Each step in the series (×1.4) halves the light: one stop.',
        },
        {
          kind: 'match',
          q: 'How much does the light change? Match them.',
          pairs: [
            ['1/250 → 1/125 s', 'Double the light (+1 stop)'],
            ['f/8 → f/11', 'Half the light (−1 stop)'],
            ['ISO 100 → ISO 400', 'Four times as bright (+2 stops)'],
          ],
          why: 'Double the time = double the light. One step along the f-number series = half the light. ISO 100 to 400 doubles twice: +2 stops.',
        },
      ],
      phone:
        'On a phone: the sun ☀ slider next to the focus box also counts in stops. In Pro mode, EV +1.0 means one stop more light, i.e. double.',
    },
    'exp-aperture': {
      walks: [
        {
          photo: PH.aperture1,
          title: 'The aperture inside the lens',
          intro: 'This is a lens seen from the front. Inside it, thin metal blades form a hole that opens and closes.',
          ann: [
            { t: 'arrow', x: 0.85, y: 0.12, x2: 0.62, y2: 0.33, c: 'g', label: 'blades', step: 1 },
            { t: 'circle', x: 0.4, y: 0.57, r: 0.12, c: 'y', label: 'the opening', step: 1 },
            { t: 'text', x: 0.4, y: 0.88, c: 'w', label: 'big hole = small f', step: 2 },
          ],
          steps: [
            'The dark hole in the centre is the aperture. All the light passes through here.',
            'The trap: a small f-number (e.g. f/1.8) means a big hole. The f-number is a fraction: f/2 is bigger than f/8, just as ½ is bigger than ⅛.',
          ],
        },
        {
          photo: PH.shallow2,
          title: 'Shallow depth of field: the subject stands out',
          intro: 'A dog portrait at a wide aperture. Look at what is sharp and what is not.',
          ann: [
            { t: 'circle', x: 0.51, y: 0.48, r: 0.07, c: 'g', label: 'focus: the eye', step: 1 },
            { t: 'box', x: 0.72, y: 0.04, x2: 0.97, y2: 0.4, c: 'y', label: 'blurred background (bokeh)', step: 2 },
          ],
          steps: [
            'The photographer focused on the eye. Every hair is visible there.',
            'A little further back everything melts into soft colour. That comes from a wide aperture (small f-number) at close range.',
          ],
        },
        {
          photo: PH.deep1,
          title: 'Deep depth of field: everything sharp',
          intro: 'Mountains from near to the horizon. Here the photographer wants everything visible.',
          ann: [{ t: 'box', x: 0.2, y: 0.3, x2: 0.95, y2: 0.75, c: 'g', label: 'sharp front to back', step: 1 }],
          steps: ['Landscape: usually f/8 – f/11. The peaks, the slopes and the clouds are all sharp. (The long distance to the subject helps too.)'],
        },
      ],
      plays: [
        {
          kind: 'aperture',
          title: 'Open and close the aperture',
          intro: 'Change the f-number. Watch the blades, the background behind the subject and how much light gets through, all at once.',
        },
      ],
      tests: [
        {
          kind: 'tap',
          q: 'Tap the photo where the photographer focused.',
          photo: PH.shallow2,
          target: { x: 0.51, y: 0.48, r: 0.12 },
          why: 'Focus is on the eye: it is the sharpest point. In portraits (animals included) we almost always focus on the eye.',
        },
        {
          kind: 'mc',
          q: 'You are shooting a landscape and want both the flowers in front and the mountains behind sharp. Which aperture?',
          options: ['f/1.8', 'f/2.8', 'f/11', 'It does not matter'],
          answer: 2,
          why: 'Large f-number = small opening = deep depth of field. f/11 is a classic landscape choice.',
        },
      ],
    },
    'exp-shutter': {
      walks: [
        {
          photo: PH.splash1,
          title: 'A frozen moment',
          intro: 'A drop falls into water. Our eyes cannot see it like this; the camera can.',
          ann: [
            { t: 'circle', x: 0.49, y: 0.12, r: 0.08, c: 'y', label: 'the drop in mid-air', step: 1 },
            { t: 'ellipse', x: 0.49, y: 0.63, rx: 0.22, ry: 0.14, c: 'g', label: 'splash', step: 2 },
          ],
          steps: [
            'The drop is sharp, as if it stopped in mid-air. That takes a very fast speed, 1/1000 s or faster.',
            'The rings and the splash have crisp edges. At a slow speed they would be a blurry mass.',
          ],
        },
        {
          photo: PH.waterfall0,
          title: 'Silky water',
          intro: 'The opposite: the photographer left the shutter open for a long time.',
          ann: [
            { t: 'ellipse', x: 0.35, y: 0.45, rx: 0.12, ry: 0.25, c: 'y', label: 'water like silk', step: 1 },
            { t: 'text', x: 0.72, y: 0.12, c: 'g', label: 'rocks: sharp', step: 2 },
          ],
          steps: [
            'The water moved while the shutter was open and spread into white streaks. This needs roughly 1/4 s to 2 s.',
            'But the rocks are sharp. So the camera did not move: it was on a tripod. Only what moves gets blurred.',
          ],
        },
        {
          photo: PH.pan0,
          title: 'Panning',
          intro: 'The photographer swung the camera to follow the passing motorbike, at a moderately slow speed.',
          ann: [
            { t: 'ellipse', x: 0.5, y: 0.54, rx: 0.23, ry: 0.17, c: 'g', label: 'subject sharp', step: 1 },
            { t: 'box', x: 0.05, y: 0.05, x2: 0.95, y2: 0.3, c: 'y', label: 'background streaks', step: 2 },
          ],
          steps: [
            'The rider is fairly sharp, because the camera was moving with him.',
            'The background turned into horizontal streaks: it shows speed. Try it at 1/30 – 1/60 s.',
          ],
        },
      ],
      plays: [
        {
          kind: 'shutter',
          title: 'Freeze or blur the cyclist',
          intro: 'Change the shutter speed. Faster than 1/500 the cyclist freezes. Slower than 1/60 he blurs, and below 1/30 your hands start to shake too.',
        },
      ],
      tests: [
        {
          kind: 'tap',
          q: 'Tap the spot that proves the shutter speed was very fast.',
          photo: PH.splash1,
          target: { x: 0.49, y: 0.12, r: 0.13 },
          why: 'The drop froze in mid-air. Only a very fast speed (1/1000 s and up) stops something that is falling.',
        },
        {
          kind: 'match',
          q: 'Which speed for which photo?',
          pairs: [
            ['Athlete jumping', '1/1000 s'],
            ['Person walking', '1/250 s'],
            ['Silky waterfall (tripod)', '1 s'],
            ['Car light trails at night', '15 s'],
          ],
          why: 'The faster the motion, the faster the speed needed to freeze it. For motion trails you need a slow speed and a steady camera.',
        },
      ],
    },
    'exp-iso': {
      walks: [
        {
          photo: PH.night0,
          title: 'A street at night',
          intro: 'Little light, a person running. This is why ISO exists.',
          ann: [
            { t: 'circle', x: 0.45, y: 0.55, r: 0.14, c: 'y', label: 'blurred by motion', step: 1 },
            { t: 'text', x: 0.5, y: 0.1, c: 'w', label: 'little light: street lamps', step: 2 },
          ],
          steps: [
            'The runner is blurred. The shutter speed was slow because there was not enough light. (Here the photographer wanted it, to show movement.)',
            'To freeze him you would need, say, 1/250 s instead of 1/15 s: 4 stops less light. You «pay» for them by raising ISO 4 stops, e.g. from 400 to 6400, at the price of more noise.',
          ],
        },
      ],
      plays: [
        {
          kind: 'iso',
          photo: PH.night0,
          title: 'Raise the ISO',
          intro: 'Each doubling of ISO = one stop. See how the shutter speed gets faster (same brightness) while grain appears.',
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'In a dark sports hall the kids are running and come out blurred at 1/60 s. What do you do?',
          options: ['Lower the ISO for less noise', 'Raise the ISO so I can use 1/500 s', 'Stop down to f/16', 'Slow the shutter to 1/15 s'],
          answer: 1,
          why: 'You need a faster shutter speed. 1/60 to 1/500 is 3 stops; you get them by raising ISO 3 stops (e.g. 800 → 6400). A little grain beats a blurred photo.',
        },
      ],
    },
    'exp-equivalent': {
      tests: [
        {
          kind: 'match',
          q: 'All give the same exposure as f/5.6 – 1/250 s. What does each one achieve?',
          pairs: [
            ['f/2.8 – 1/1000 s', 'Blurred background and frozen motion'],
            ['f/11 – 1/60 s', 'More in focus from front to back'],
            ['f/22 – 1/15 s', 'Motion blur (needs support)'],
          ],
          why: 'Same amount of light, a different photo. Every stop you open the aperture, you win back in shutter speed, and vice versa.',
        },
        {
          kind: 'mc',
          q: 'The camera suggests f/8 – 1/125 s. You want f/4 for a blurred background. Which speed keeps the exposure the same?',
          options: ['1/30 s', '1/125 s', '1/250 s', '1/500 s'],
          answer: 3,
          why: 'f/8 to f/4 is 2 stops more light (f/8 → f/5.6 → f/4). You take them away with a 2-stop faster speed: 1/125 → 1/250 → 1/500.',
        },
      ],
    },
    'exp-modes': {
      walks: [
        {
          photo: PH.dial0,
          title: 'The mode dial',
          intro: 'The dial on top of the camera. The letters say who decides what.',
          ann: [{ t: 'circle', x: 0.57, y: 0.5, r: 0.17, c: 'y', label: 'P · A · S · M', step: 1 }, { t: 'arrow', x: 0.3, y: 0.78, x2: 0.47, y2: 0.52, c: 'g', label: 'index mark: now on M', step: 1 }],
          steps: [
            'M = you decide everything. A (or Av) = you set the aperture, the camera the speed. S (or Tv) = you set the speed, the camera the aperture. P = the camera sets both, but you can shift the combination.',
          ],
        },
      ],
      tests: [
        {
          kind: 'match',
          q: 'Which mode for which situation?',
          pairs: [
            ['Portrait with a blurred background', 'A / Av'],
            ['Football match', 'S / Tv'],
            ['Night landscape on a tripod, steady light', 'M'],
            ['Quick street snapshot', 'P'],
          ],
          why: 'Choose what matters: depth of field → A, motion → S, full control in steady light → M, speed of reaction → P.',
        },
        {
          kind: 'mc',
          q: 'You are in A at f/2.8 and ISO 100. It is getting dark and the camera shows 1/8 s. What is most sensible?',
          options: ['Switch to M', 'Raise the ISO (or use Auto ISO)', 'Stop down to f/8', 'Nothing, 1/8 is fine handheld'],
          answer: 1,
          why: 'At 1/8 s handheld the photo will shake. The aperture is already wide open, so ISO is all that is left.',
        },
      ],
      phone:
        'On a phone: the normal camera is something like «P». Pro/Manual mode is the «M» (shutter speed and ISO, since the aperture is fixed). Leave only ISO on Auto and you have something like «S».',
    },
    'exp-rules': {
      walks: [
        {
          photo: PH.beach1,
          title: 'Bright sun: Sunny 16',
          intro: 'Clear sky, hard shadows, vivid colours. This is the light the rule is about.',
          ann: [
            { t: 'box', x: 0.03, y: 0.02, x2: 0.97, y2: 0.25, c: 'y', label: 'clear sun', step: 1 },
            { t: 'text', x: 0.5, y: 0.6, c: 'w', label: 'ISO 100 · f/16 · 1/125', step: 2 },
          ],
          steps: [
            'Look at the sky and the shadows: no clouds, shadows with crisp edges. Bright sun.',
            'The rule: f/16 and shutter speed ≈ 1/ISO. At ISO 100 → f/16 at 1/125 s (the closest speed to 1/100).',
          ],
        },
        {
          photo: PH.overcast1,
          title: 'Overcast: f/8',
          intro: 'Grey sky, almost no shadows.',
          ann: [{ t: 'text', x: 0.5, y: 0.12, c: 'w', label: 'overcast → f/8', step: 1 }],
          steps: ['Overcast gives about 2 stops less light than bright sun. So keep the speed at 1/ISO and open up 2 stops: f/16 → f/11 → f/8.'],
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'Bright sun, ISO 200. What does Sunny 16 say?',
          options: ['f/16 – 1/200 s (or 1/250)', 'f/16 – 1/100 s', 'f/8 – 1/200 s', 'f/22 – 1/16 s'],
          answer: 0,
          why: 'Speed ≈ 1/ISO: at ISO 200 → 1/200 s, and the nearest on the camera is 1/250 s, at f/16.',
        },
        {
          kind: 'order',
          q: 'Put the conditions in order, from most to least light.',
          items: ['Bright sun (f/16)', 'Slight overcast (f/11)', 'Overcast (f/8)', 'Heavy overcast (f/5.6)', 'Open shade / dusk (f/4)'],
          ends: ['Lots of light', 'Little light'],
          why: 'Each step has about one stop less light, so you open the aperture one stop each time.',
        },
      ],
      phone:
        'On a phone: you cannot set f/16, but the rule teaches you to «read» light. Look at the sky and the shadows and guess how much sun ☀ correction you will need before you shoot.',
    },
    'phone-workflow': {
      walks: [
        {
          photo: PH.phone1,
          title: 'Tap, lock, slide',
          intro: 'The exposure workflow on a phone is three finger moves.',
          ann: [
            { t: 'circle', x: 0.63, y: 0.52, r: 0.16, c: 'y', label: 'the screen', step: 1 },
            { t: 'num', x: 0.82, y: 0.3, n: 1, c: 'g', step: 1 },
            { t: 'num', x: 0.82, y: 0.45, n: 2, c: 'g', step: 2 },
            { t: 'num', x: 0.82, y: 0.6, n: 3, c: 'g', step: 3 },
          ],
          steps: [
            'Tap the subject: that is where it focuses and measures the light.',
            'Press and hold for «AE/AF lock»: now you can reframe without the exposure changing.',
            'Slide the sun ☀ up or down: that is exposure compensation, in stops.',
          ],
        },
      ],
      tests: [
        {
          kind: 'order',
          q: 'Put the phone exposure steps in the right order.',
          items: ['Clean the lens', 'Tap the subject', 'Press and hold (lock)', 'Slide the sun ☀', 'Check the highlights'],
          why: 'First a clean lens, then metering on the subject, lock, brightness correction, and finally a check of the highlights.',
        },
        {
          kind: 'mc',
          q: 'You photograph a friend in front of a bright window and the face comes out dark. What do you do first?',
          options: ['Tap on the face', 'Turn on the flash', 'Tap on the window', 'Add a filter'],
          answer: 0,
          why: 'Tapping the face makes the phone meter the light there and brighten the image. If needed, slide the sun ☀ up a little as well.',
        },
      ],
    },
  },
  modules: {
    exposure: {
      recall: [
        ['Where does soft light come from?', 'From a large source: an overcast sky, a big window, open shade.'],
        ['What does side light do?', 'It brings out texture and volume.'],
        ['Why do indoor photos come out orange?', 'Lamp light is «warm» (about 3,000 K) and the white balance did not correct it.'],
      ],
      missions: [
        ['Three brightnesses', 'Shoot the same scene with the sun ☀ at −1, 0 and +1. Which do you like, and why?'],
        ['Freeze and blur', 'A running tap: one shot that freezes the drops, one that turns them to silk (phone resting on something steady).'],
        ['Blurred background', 'A flower from 10–15 cm with the background far away. Then the same from a metre. Compare.'],
        ['Night', 'Photograph a lit street handheld, then with the phone resting on something. Zoom in and compare noise and shake.'],
      ],
      final: [
        {
          kind: 'mc',
          q: 'Which change gives double the light?',
          options: ['f/8 → f/11', '1/125 → 1/250 s', 'ISO 400 → ISO 200', '1/250 → 1/125 s'],
          answer: 3,
          why: 'Double the time = double the light. The other three changes halve the light.',
        },
        {
          kind: 'order',
          q: 'From the largest to the smallest opening:',
          items: ['f/1.4', 'f/2.8', 'f/5.6', 'f/11', 'f/22'],
          ends: ['Large opening', 'Small opening'],
          why: 'The smaller the f-number, the bigger the hole. Here each step is 2 stops.',
        },
        {
          kind: 'tap',
          q: 'Where is the motion blur in this photo? Tap it.',
          photo: PH.waterfall0,
          target: { x: 0.35, y: 0.45, r: 0.2 },
          why: 'The water is silky because it moved during a slow shutter speed. The rocks, which do not move, stay sharp.',
        },
        {
          kind: 'mc',
          q: 'You want a portrait with a blurred background. Which aperture?',
          options: ['f/2', 'f/8', 'f/16', 'f/22'],
          answer: 0,
          why: 'Wide aperture (small f-number) = shallow depth of field = blurred background.',
        },
        {
          kind: 'mc',
          q: 'f/4 – 1/500 s – ISO 100 is a correct exposure. Which gives the same brightness?',
          options: ['f/8 – 1/125 s – ISO 100', 'f/8 – 1/500 s – ISO 100', 'f/2.8 – 1/125 s – ISO 100', 'f/4 – 1/250 s – ISO 200'],
          answer: 0,
          why: 'f/4 to f/8 loses 2 stops; 1/500 to 1/125 gains 2 stops. They cancel out. The other options change the brightness.',
        },
        {
          kind: 'match',
          q: 'Setting → its «price»',
          pairs: [
            ['Very high ISO', 'Noise / grain'],
            ['Very slow shutter speed', 'Shake / blur'],
            ['Very wide aperture', 'Shallow depth: little in focus'],
          ],
          why: 'Every setting that gives you light has a side effect. The art is choosing the one that bothers you least.',
        },
        {
          kind: 'mc',
          q: 'A basketball game in a gym. Which mode?',
          options: ['A, f/8', 'S, 1/500 s with Auto ISO', 'M, 1/30 s', 'P with flash'],
          answer: 1,
          why: 'Motion comes first: shutter priority at 1/500 s, and Auto ISO finds the exposure.',
        },
        {
          kind: 'mc',
          q: 'Overcast, ISO 100, Sunny 16 rule. What do you set?',
          options: ['f/16 – 1/125 s', 'f/8 – 1/125 s', 'f/4 – 1/1000 s', 'f/22 – 1/60 s'],
          answer: 1,
          why: 'Overcast = f/8 with speed ≈ 1/ISO. At ISO 100 → 1/125 s.',
        },
      ],
    },
  },
};
