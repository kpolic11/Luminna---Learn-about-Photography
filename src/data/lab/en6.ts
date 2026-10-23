import type { LessonText } from '../types';
import { LAB6B_EN } from './en6b';
import { LAB6C_EN } from './en6c';

/** School — Level 3: sensor, formats, sharpness, shutter */
const LAB6A_EN: Record<string, LessonText> = {
  /* ───────── Sensor & noise ───────── */
  'sensor-pixel': {
    title: 'How a pixel “measures” light',
    tagline: 'Inside the camera: from photons to electrons, and from there to numbers.',
    quick:
      'Every pixel on the sensor is a small “bucket” of light: the photons that land on it become electrons, and in the end they are converted into a number. The more light it collects, the cleaner the signal.',
    challenge:
      'With your phone, photograph a very dark room and a bright window. Zoom into the shadows of both. Where do you see more “grain”? Where the pixels collected less light.',
    body: [
      'A digital sensor is a grid of millions of tiny photodiodes, one for each pixel (or “photosite”). When a photon strikes the photodiode, it can release an electron: the photoelectric effect. During the exposure, each pixel collects electrons, like a bucket filling with rain. Above each pixel there is usually a tiny lens that “gathers” light towards the photodiode.',
      'When the exposure ends, each pixel’s charge is read as a small voltage, amplified, and an analogue-to-digital converter (ADC) turns it into a number, usually with 12 or 14 bits. These numbers are the RAW data. The “bucket” has a limit: once it is full, nothing more fits. That is the “clipping” of the highlights: all full pixels give the same maximum number and the detail is lost.',
      'Modern sensors are almost all CMOS. In the past CCDs dominated, which were read out differently. Technologies such as “backside illumination” (BSI), where the circuitry sits behind the photodiodes so it does not steal light, and “stacked” sensors with built-in memory for very fast readout, explain many of the improvements of recent years, especially in phones.',
    ],
    bullets: [
      'Photons → electrons → voltage → amplification → number (ADC).',
      'Every pixel has a maximum capacity: once full, the highlights “clip”.',
      'Almost all modern sensors are CMOS.',
      'BSI and stacked sensors: more light, faster readout.',
    ],
    mistakes: [
      'Believing the sensor “sees” colour: each pixel measures only the amount of light. Colour comes from filters (next lesson).',
      'Thinking a clipped area can be “saved” in RAW: once the pixels of all three colours are full, the information does not exist. If only one colour has clipped, software can recover part of it.',
    ],
    keyIdea: 'The sensor is a grid of “buckets” that measure light. More light = a cleaner signal, until the bucket is full.',
    tryIt: 'Photograph a scene with a very bright sky in RAW. In editing, pull down the highlights. The areas that stay white, without texture, are the “full buckets”.',
    check: [
      {
        id: 'sp-1',
        question: 'What happens when a pixel “fills up” with electrons?',
        options: ['It becomes sharper', 'The area “clips”: detail is lost', 'It changes colour', 'Noise in the shadows decreases'],
        correctIndex: 1,
        explanation: 'All full pixels give the same maximum value.',
      },
    ],
  },

  'sensor-bayer': {
    title: 'The Bayer filter: how colour is “born”',
    tagline: 'Each pixel sees only one colour. Software “guesses” the rest.',
    quick:
      'Above the pixels sits a mosaic of red, green and blue filters, the Bayer filter: half green, a quarter red, a quarter blue. The full colour of each pixel is calculated from its neighbours.',
    challenge:
      'Photograph a fabric with very fine stripes, or a screen, from close up. If you see strange coloured waves that are not really there, you have seen moiré: a side effect of the way colour is made.',
    body: [
      'As we saw, a photodiode measures only the amount of light, not its colour. To record colour, a tiny coloured filter is placed above each pixel. The most widespread arrangement is the Bayer filter, from Bryce Bayer of Kodak, who patented it in 1976: a mosaic in which 50% of the pixels see green, 25% red and 25% blue. There are twice as many green ones because the human eye is most sensitive to green, and perceives the most detail there.',
      'So each pixel has only one of the three colours. The other two are calculated from neighbouring pixels, in a process called demosaicing. That is what editing software does when it opens a RAW file, or the camera itself when it makes a JPEG. Different programs do this calculation slightly differently, which is why the same RAW does not look identical in all of them.',
      'The process has side effects. In very fine repeating patterns, such as fabrics or grids, moiré can appear: false coloured waves. That is why many cameras had a slightly “blurring” filter in front of the sensor (anti-aliasing). Many newer ones leave it out for more sharpness. There are also alternative arrangements, such as Fujifilm’s X-Trans, with a more irregular pattern, and Sigma’s Foveon sensors, with three layers.',
    ],
    bullets: [
      'Bayer mosaic: 50% green, 25% red, 25% blue.',
      'Each pixel measures one colour; the others are calculated (demosaicing).',
      'Different programs = slightly different rendering of the same RAW.',
      'Moiré: false colours in fine patterns.',
    ],
    mistakes: [
      'Assuming “24 megapixels” means 24 million full-colour measurements: each pixel measures only one colour.',
      'Fixing moiré with a general blur: editing programs have a dedicated tool.',
    ],
    keyIdea: 'Colour in digital photography is a calculation: each pixel sees one colour through the Bayer filter, and software “fills in” the rest.',
    tryIt: 'Open the same RAW in two different programs (for example the manufacturer’s software and another). Compare the colours and the fine detail at 100%.',
    check: [
      {
        id: 'sb-1',
        question: 'Why does the Bayer filter have twice as many green pixels?',
        options: ['Because green filters are cheaper', 'Because the eye is most sensitive to green and perceives more detail there', 'To make landscapes greener', 'By chance'],
        correctIndex: 1,
        explanation: 'Human vision relies heavily on the green part of the spectrum for detail.',
      },
    ],
  },

  'sensor-noise': {
    title: 'Where noise comes from',
    tagline: 'Noise is not a camera “error”. It is mostly the physics of too little light.',
    quick:
      'Most of the noise in a photograph is not created by ISO, but by a lack of light. Light arrives in “drops” (photons), and the fewer the drops, the more uneven the result. The sensor adds a little noise of its own as well.',
    challenge:
      'In this lesson’s interactive tool, switch the sensor from “ISO-invariant” to “ISO-variant” and raise the ISO. With which sensor is it worth raising the ISO in camera, rather than brightening the image afterwards?',
    body: [
      'Light is not a continuous “liquid”. It comes in tiny packets of energy, photons, and they arrive at random, like raindrops. If you put two buckets side by side in the rain for a few seconds, they will not hold exactly the same amount of water. The same goes for pixels: two neighbouring pixels “looking” at the same surface collect slightly different numbers of photons. This randomness is called photon noise (shot noise) and it is the main noise in most photographs.',
      'The crucial point is that this noise grows more slowly than the signal: if you collect 100 photons, the random variation is about 10 (the square root), that is 10%. If you collect 10,000, it is about 100, just 1%. That is why bright areas look clean and dark ones “grainy”. The only real cure is more light: a wider aperture, a longer exposure, a larger sensor, or more light in the scene.',
      'The sensor and its electronics add their own, smaller noise: read noise, which shows mainly in very dark areas, and in very long exposures thermal noise (dark current), which grows with temperature and duration. ISO does not “create” noise. It simply brightens an image that collected little light, and so makes visible the noise that was already there.',
    ],
    bullets: [
      'Photon noise: the randomness of light itself. The main noise.',
      'More light = a better signal-to-noise ratio.',
      'Read noise: from the electronics, mainly in very dark areas.',
      'Thermal noise: in very long exposures and heat.',
      'ISO does not create noise; it makes it visible.',
    ],
    mistakes: [
      'Fearing ISO and underexposing: a dark image you brighten afterwards usually has the same or more noise.',
      'Judging noise at 100% on screen: at normal viewing or print size it often does not show.',
    ],
    keyIdea: 'Noise is mostly a lack of light. More light is the only real cure; ISO simply shows what you collected.',
    tryIt: 'With the camera on a tripod, photograph a dark scene at ISO 3200 and 1/100, and again at ISO 100 and 1/3 (32 times more light, 5 stops). Compare the shadows.',
    see: ['moriyama'],
    check: [
      {
        id: 'sn-1',
        question: 'What is the main source of noise in most photographs?',
        options: ['ISO', 'The randomness of photons when light is scarce', 'The lens', 'The memory card'],
        correctIndex: 1,
        explanation: 'Photon noise dominates; ISO simply makes it visible by brightening the image.',
      },
      {
        id: 'sn-2',
        question: 'If you quadruple the light a pixel collects, what happens to the relative variation (noise)?',
        options: ['It quadruples', 'It stays the same', 'It halves', 'It disappears'],
        correctIndex: 2,
        explanation: 'Photon noise grows with the square root: 4 times the signal, 2 times the noise, so half the relative noise.',
      },
    ],
  },

  'sensor-iso': {
    title: 'What ISO really is: ISO-invariant and ISO-variant sensors',
    tagline: 'ISO does not make the sensor more sensitive. And on some cameras, it hardly matters when you brighten the image.',
    quick:
      'ISO is amplification of the signal, not sensitivity. On “ISO-invariant” sensors, a low-ISO photograph brightened afterwards comes out almost the same as one shot at high ISO, at least within the same “gain range” (see the next lesson). On “ISO-variant” ones, a high ISO in camera gives cleaner shadows.',
    challenge:
      'With the same aperture and shutter speed, shoot a dark scene at ISO 1600 and again at ISO 100. In your editor, brighten the second by 4 stops. Do they look the same? Then your camera is fairly ISO-invariant.',
    body: [
      'The sensor’s ability to turn photons into electrons does not change with ISO. When you raise the ISO, the camera amplifies the pixels’ electrical signal before converting it to numbers (analogue gain), or multiplies the numbers afterwards (digital gain). The ISO 12232 standard defines how the brightness of the final image relates to the exposure. In other words, ISO describes how brightly the camera “interprets” the light it collected, not how much light it collected.',
      'Whether you amplify in the camera or on the computer should be the same. The difference lies in the noise added after the amplification, in the readout electronics. If that noise is very small, it does not matter when you brighten: the camera is “ISO-invariant”, and a dark low-ISO shot brightened on the computer is almost the same as the same shot at high ISO. Many modern sensors are quite close to this, often within each of their two “gain ranges”, as we will see in the next lesson. But if the noise after amplification is significant, the camera is “ISO-variant”: amplification in camera “lifts” the signal above that noise, and the shadows come out cleaner.',
      'What does this mean in practice? First, the light you collect (aperture and time) is what determines quality. ISO is the last thing you decide. Second, on an ISO-invariant camera, a lower ISO than “normal” protects the highlights, for example concert lights, because amplification does not clip them, and then you brighten the shadows in RAW. Third, on an ISO-variant camera, do not underexpose “to keep ISO low”: raise the ISO. For your own camera, independent measurements, such as those at photonstophotos.net, show how ISO-invariant it is.',
    ],
    bullets: [
      'ISO = amplification, not sensor sensitivity.',
      'Quality is decided by the light you collected: aperture and time.',
      'ISO-invariant: the same result whether you brighten in camera or afterwards.',
      'ISO-variant: a high ISO in camera gives cleaner shadows.',
      'On an invariant camera, a lower ISO protects the highlights.',
    ],
    mistakes: [
      'Believing high ISO “adds noise”: underexposure is what brings the noise.',
      'Applying ISO-invariance logic to JPEG: it only works with RAW.',
    ],
    keyIdea: 'First collect as much light as the photograph allows. ISO is the last decision, and how much it matters depends on your sensor.',
    tryIt: 'Do the ISO-invariance test from the “Challenge” with your own camera at 2, 4 and 6 stops of difference. Note the point beyond which low ISO + brightening starts to fall behind.',
    check: [
      {
        id: 'si-1',
        question: 'What does raising the ISO really do?',
        options: ['It makes the sensor more sensitive to light', 'It amplifies the signal already collected', 'It opens the aperture', 'It reduces photon noise'],
        correctIndex: 1,
        explanation: 'The sensor’s sensitivity does not change; the amplification does.',
      },
      {
        id: 'si-2',
        question: 'On an ISO-invariant camera, you photograph a concert with bright stage lights. What helps keep the lights from clipping?',
        options: ['A very high ISO', 'A slightly lower ISO and brightening the shadows afterwards, in RAW', 'JPEG instead of RAW', 'Flash'],
        correctIndex: 1,
        explanation: 'Without extra amplification, the highlights keep their detail; the shadows can be brightened at minimal cost.',
      },
    ],
  },

  'sensor-dual-iso': {
    title: 'Dual native ISO: the “second base ISO”',
    tagline: 'Why noise suddenly drops at one particular ISO on some cameras.',
    quick:
      'Some sensors have two readout modes: one for low ISOs, which keeps maximum dynamic range, and one for high ISOs, with much lower read noise. At the point where they switch, for example from ISO 640 to 800 on some cameras, the shadows suddenly clean up.',
    challenge:
      'Look in the specifications or in independent measurements to see whether your camera has “dual native ISO” or “dual conversion gain”, and at which ISO the switch happens. If it does not, you know you do not need to think about it.',
    body: [
      'In every pixel, the charge of the electrons is converted into a voltage. How much voltage each electron produces is called the conversion gain. Some sensors have two such settings in the same pixel. With low gain, the pixel “holds” many electrons before it fills, so it keeps the highlights and gives maximum dynamic range at low ISOs. With high gain, each electron produces a bigger signal above the noise of the electronics, so read noise drops significantly, but the pixel fills more quickly.',
      'The camera switches automatically from one mode to the other at a particular ISO, which differs by model. That is why something that seems paradoxical happens on some cameras: a shot at ISO 800 can have cleaner shadows than the same shot at ISO 640. Manufacturers, mainly of video cameras, advertise this as “dual native ISO”, that is, two “base” ISOs. On stills cameras it is often not mentioned at all, and you find it only in independent measurements.',
      'The practical advice: if your camera has such a “step”, in low light choose an ISO just above the switch point, not just below it. In strong light, stay at the lower base ISO for maximum dynamic range. And as always, the most important thing remains the light you collect: dual ISO improves read noise, not photon noise.',
    ],
    bullets: [
      'Two conversion gains in the same pixel.',
      'Low gain: maximum dynamic range at low ISOs.',
      'High gain: much lower read noise at higher ISOs.',
      'The switch point differs by camera.',
      'In low light: an ISO just above the switch point.',
    ],
    mistakes: [
      'Assuming the “second base ISO” is as clean as the first: it has low read noise, but less light reaches the sensor, so the photon noise remains.',
      'Looking for dual ISO on every camera: many do not have it, or show no visible difference.',
    ],
    keyIdea: 'Dual native ISO is two ways of reading the same pixel: one for dynamic range, one for low read noise. Find out where your camera switches.',
    tryIt: 'If your camera has a switch point, photograph the same dark scene at the ISO just before and just after it, with the same exposure, and compare the shadows at 100%.',
    check: [
      {
        id: 'sd-1',
        question: 'What does the high-gain mode (the second base ISO) mainly improve?',
        options: ['Photon noise', 'Read noise in the shadows', 'Dynamic range in the highlights', 'Lens sharpness'],
        correctIndex: 1,
        explanation: 'High gain “lifts” the signal above the noise of the electronics.',
      },
    ],
  },

  'sensor-raw-ettr': {
    title: 'RAW, bit depth and ETTR (expose to the right)',
    tagline: 'How to get the maximum quality out of your sensor.',
    quick:
      'The more light you collect without clipping the important highlights, the cleaner the image. The ETTR technique says: expose as brightly as possible without clipping, and darken afterwards in RAW. It only works with RAW.',
    challenge:
      'In a low-contrast scene (for example an overcast day), take one “normal” shot and one at +1 EV in RAW. On the computer, darken the second to match the first. Compare the noise in the shadows.',
    body: [
      'A RAW file stores the sensor’s numbers, usually in 12 bits (4,096 levels) or 14 bits (16,384 levels). The sensor is linear: the brightest stops take up most of the levels, while the darkest get very few. The brightest stop of a 14-bit RAW has about 8,000 levels, the next about 4,000, and so on. The shadows are where there is the least information and the most noise.',
      'From this comes the ETTR technique (expose to the right of the histogram): in low- or moderate-contrast scenes, expose as brightly as possible without clipping anything important, and in editing bring the brightness to where you want it. That way the shadows of the final image come from more light, and so have less noise. The reason is not mainly the “extra levels” but, above all, the extra light.',
      'A practical caution: the camera’s histogram and “clipping” warnings are based on the JPEG preview, not on the RAW. Usually the RAW has a little more headroom, but how much varies by camera. Start conservatively. And remember that ETTR is a tool for quality in static scenes, not a rule: in a high-contrast scene there is no headroom, and in a low-key portrait you deliberately want a dark image. With JPEG, ETTR simply gives a bright photograph with less information.',
    ],
    bullets: [
      'RAW: 12–14 bits, linear data.',
      'The bright stops have many levels; the shadows few, and more noise.',
      'ETTR: as bright as possible without clipping, then darken.',
      'The camera histogram is based on the JPEG: test it.',
      'Only for RAW and mainly for static scenes.',
    ],
    mistakes: [
      'Clipping highlights for the sake of ETTR: whatever clips does not come back.',
      'Applying ETTR to JPEG.',
      'Forgetting to bring the brightness back down in editing, and judging the image “washed out”.',
    ],
    keyIdea: 'In RAW, more light = cleaner shadows. Expose as brightly as possible without clipping anything important, and correct afterwards.',
    tryIt: 'Find how much headroom your camera has: photograph a bright sky at +0, +1/3, +2/3 and +1 EV beyond the point where the camera shows “clipping”. How far can you recover detail in RAW?',
    check: [
      {
        id: 'se-1',
        question: 'Why does ETTR reduce noise in the shadows?',
        options: ['Because it raises the ISO', 'Because the shadows of the final image come from more light', 'Because it uses JPEG', 'Because it blurs the image'],
        correctIndex: 1,
        explanation: 'More light = a better signal-to-noise ratio.',
      },
      {
        id: 'se-2',
        question: 'What is the histogram the camera shows usually based on?',
        options: ['The RAW data', 'The JPEG preview', 'A hand-held light meter', 'The flash'],
        correctIndex: 1,
        explanation: 'That is why the RAW often has a little more headroom than the camera shows.',
      },
    ],
  },
};

export const LAB6_EN: Record<string, LessonText> = { ...LAB6A_EN, ...LAB6B_EN, ...LAB6C_EN };
