import type { LessonText } from '../types';
import { LAB7B_EN } from './en7b';
import { LAB7C_EN } from './en7c';

/** School — Level 3: flash, colour management */
const LAB7A_EN: Record<string, LessonText> = {
  /* ───────── Flash & artificial light ───────── */
  'fl-inverse': {
    title: 'The inverse square law',
    tagline: 'The most important law of artificial light: twice the distance, a quarter of the light.',
    quick:
      'Light from a source “spreads out” as it travels: at twice the distance only 1/4 arrives, that is, 2 stops less. Light close to the subject = a dark background. Light far away = more even light on subject and background.',
    challenge:
      'In a dark room, light an object with your phone’s torch from 30 cm and then from 1.5 metres, with the wall behind it. When does the wall get darker relative to the object?',
    body: [
      'Light from a small source, such as a flash or a lamp, spreads in all directions. At twice the distance, the same amount of light is shared over four times the area. So brightness falls with the square of the distance: at twice the distance 1/4 of the light arrives (2 stops less), at three times 1/9 (about 3.2 stops less).',
      'This has a consequence photographers use all the time. If the light is very close to the subject, say half a metre, and the background is a metre and a half further back, the background is four times further from the light, so 4 stops darker: almost black. If the light is three metres away, the background is only 4.5 metres away, that is only about 1.2 stops darker. Put simply: close light = dramatic fall-off, distant light = evenness.',
      'The sun is so far away that the subject–background distance plays no role at all: subject and background are lit equally. That is why sunlight is “even” and the light of a window or lamp is not. The law holds strictly for point sources. With large softboxes very close, the fall-off is a little gentler, but the logic stays the same.',
    ],
    bullets: [
      'Twice the distance = 1/4 of the light = −2 stops.',
      'Close light: dark background, dramatic fall-off.',
      'Distant light: even on subject and background.',
      'The sun does not fall off with subject–background distance.',
    ],
    mistakes: [
      'A group photo with flash from close up: those at the front “burn out”, those at the back go dark.',
      'Wanting a white background with the light very close to the subject: the background will come out grey.',
    ],
    keyIdea: 'Light falls off with the square of the distance. Bring the light close for drama, move it away for evenness.',
    tryIt: 'Make two portraits with one lamp: one with the lamp 50 cm from the face and one with it 2 m away (raising ISO or time so the face has the same brightness). Compare the background.',
    see: ['weegee', 'arbus', 'parr'],
    check: [
      {
        id: 'fi-1',
        question: 'If you double the distance of the flash from the subject, how much light arrives?',
        options: ['1/2', '1/4', 'The same', 'Twice as much'],
        correctIndex: 1,
        explanation: '1/2² = 1/4, that is, 2 stops less.',
      },
      {
        id: 'fi-2',
        question: 'You want the background to go almost black without changing location. What do you do with the light?',
        options: ['Move it further away', 'Bring it very close to the subject', 'Put it behind the background', 'Raise the ISO'],
        correctIndex: 1,
        explanation: 'Close light = a large difference between subject and background distance relative to the light.',
      },
    ],
  },

  'fl-guide': {
    title: 'Guide number: how “powerful” a flash is',
    tagline: 'A number that tells you how far the flash reaches at each aperture.',
    quick:
      'Guide number (GN) = distance × f-number, at ISO 100. A flash with GN 40 (in metres) correctly lights a subject at 5 m at f/8, or at 10 m at f/4. Manufacturers often quote the GN at the head’s longest zoom setting: in practice it is lower.',
    challenge:
      'Work it out: a flash has GN 28 (in metres, ISO 100). What aperture do you need for a subject at 3.5 metres? (Answer: 28 ÷ 3.5 = f/8.)',
    body: [
      'Before automatic flashes, photographers calculated flash exposure with the guide number (GN). The definition is simple: GN = distance × f-number, at ISO 100. If you know the GN and the distance, you find the aperture. If you know the aperture, you find how far the flash reaches. The number is usually given in metres, sometimes in feet (a number about 3.3 times larger for the same flash).',
      'The GN changes with ISO (each doubling of ISO multiplies the GN by about 1.4, that is, one stop) and with flash power: at half power, the GN is divided by 1.4. Manufacturers usually quote the GN with the flash head in the telephoto position, where the beam is narrow and brighter. That is why “GN 60” on the box can be noticeably lower at wide angle or with a diffuser.',
      'Today, TTL (through-the-lens metering) calculates the power automatically: the camera sends a small pre-flash, measures and adjusts. It is excellent for fast situations, such as weddings and events. Manual flash, though, gives perfectly repeatable results, and understanding the GN helps you know whether a flash will “reach” before you even try it.',
    ],
    bullets: [
      'GN = distance × f (ISO 100).',
      'Aperture = GN ÷ distance. Distance = GN ÷ aperture.',
      'Half power or half ISO: GN ÷ 1.4.',
      'The GN on the box is usually at the telephoto setting.',
      'TTL for speed, manual for consistency.',
    ],
    mistakes: [
      'Expecting a small flash to light a large hall: the GN tells you in advance.',
      'Forgetting that a diffuser “eats” light, often 1–2 stops.',
    ],
    keyIdea: 'The guide number is simple arithmetic: distance × f. It tells you how far your flash reaches and what aperture you need.',
    tryIt: 'Find your flash’s GN. Photograph a wall at 2 and 4 metres at full manual power, with the aperture the formula gives. Was the exposure correct?',
    check: [
      {
        id: 'fg-1',
        question: 'A flash with GN 32 (metres, ISO 100), subject at 4 metres. Which aperture?',
        options: ['f/4', 'f/8', 'f/16', 'f/32'],
        correctIndex: 1,
        explanation: '32 ÷ 4 = 8.',
      },
    ],
  },

  'fl-sync': {
    title: 'Sync speed and HSS',
    tagline: 'Why you cannot go to 1/2000 with flash, and how to get around it.',
    quick:
      'With a mechanical shutter, flash only works up to a certain speed, usually 1/160–1/250 (the sync speed). Faster, a black band appears in the image. HSS (high-speed sync) gets around it, but with much less power.',
    challenge:
      'If you have a flash and camera, photograph a wall with flash at 1/250 and at 1/1000 (without HSS). Do you see the dark band?',
    body: [
      'Remember the mechanical shutter: two curtains. At slow speeds there is a moment when the sensor is fully open, and that is when the flash “fires”, lasting about a thousandth of a second at full power and much less at low power. At fast speeds, though, the second curtain starts before the first has finished, and the sensor is never fully open: only a slit passes over it. The flash would light only that strip. The fastest speed at which the sensor opens completely is called the sync speed, usually 1/160 to 1/250.',
      'Why would you want faster? Usually to use a wide aperture in strong sun: a portrait at f/2 at midday needs 1/2000 or more. The solution is HSS (high-speed sync): the flash does not make one burst but a very rapid series of pulses, which acts like continuous light while the slit crosses the sensor. The price is power: in HSS the flash loses several stops, and each additional stop of speed costs another one.',
      'Alternatives: an ND filter on the lens, which lets you stay at the sync speed with a wide aperture and full flash power. Or cameras with a shutter in the lens (leaf shutter), which sync at all speeds. With a fully electronic shutter, the sync speed is usually much slower, or the flash does not work at all, because reading the sensor takes time. The exception is cameras with very fast “stacked” sensors or a global shutter.',
    ],
    bullets: [
      'Sync speed: usually 1/160–1/250.',
      'Faster with normal flash: a dark band.',
      'HSS: allows fast speeds, with a large loss of power.',
      'Alternatively: an ND filter or a leaf shutter.',
      'Electronic shutter: usually slower sync or no flash at all (except very fast sensors).',
    ],
    mistakes: [
      'Raising the speed above sync without HSS and not understanding the black band.',
      'Expecting the same range from HSS as from normal flash.',
    ],
    keyIdea: 'Flash and the mechanical shutter only meet up to the sync speed. For a wide aperture in the sun: HSS, an ND filter or a leaf shutter.',
    tryIt: 'Go out in strong sun and make a portrait with fill flash at f/2.8: once with HSS and once with an ND filter at the sync speed. Which gives you more flash power?',
    check: [
      {
        id: 'fs-1',
        question: 'What does HSS do?',
        options: ['It makes one stronger burst', 'It emits many fast pulses, like continuous light, for speeds above sync', 'It changes the colour of the flash', 'It lowers the speed'],
        correctIndex: 1,
        explanation: 'The pulses light the slit as it crosses the sensor, at a cost in power.',
      },
    ],
  },

  'fl-ambient': {
    title: 'Balancing flash and ambient light',
    tagline: 'The most important secret of flash: two exposures in one photograph.',
    quick:
      'Every flash photograph contains two exposures: the ambient light and the flash. Shutter speed controls (almost) only the ambient. Aperture, ISO and flash power control the flash. That way you decide separately how bright the background is and how bright the subject is.',
    challenge:
      'At dusk, photograph someone with flash (or with your phone’s torch) in front of a darkening sky: first with a fast speed (black sky), then a slower one (blue sky). The face should stay roughly the same.',
    body: [
      'A flash lasts a very short time: about a thousandth of a second at full power, much less at low power. So, as long as you are below the sync speed, whether the shutter stays open for 1/200 or 1/20 hardly changes the flash light reaching the sensor. But it changes the ambient light a lot: ten times more gets in at 1/20 than at 1/200. Aperture and ISO, on the other hand, affect both, and flash power only the flash.',
      'A simple procedure follows from this. First set the exposure for the background, that is, the ambient light: how bright or dark do you want it? Often a little darker than “correct”, e.g. −1 stop, so the subject stands out. Then add the flash and adjust its power or flash compensation (FEC) until the subject looks the way you want. If you want to change the background, change the speed. If the subject, change the flash power.',
      'Fill flash is the most common use: against the light or in harsh midday sun, a low-power flash, often −1 to −2 stops in TTL, “opens up” the shadows on the face without it showing that a flash was used. “Dragging the shutter” is the opposite use: a slow speed in a dark place, so the atmosphere and the room’s lights show, and the flash to “freeze” the subject.',
    ],
    bullets: [
      'Shutter speed → ambient light (background).',
      'Flash power / FEC → flash light (subject).',
      'Aperture and ISO → both.',
      'Background first, then flash.',
      'Fill flash: −1 to −2 stops for a natural result.',
    ],
    mistakes: [
      'Flash in a dark place with a fast speed: a lit face in a black void, the classic “party photo”.',
      'Changing the aperture to fix the background: the flash exposure changes too.',
    ],
    keyIdea: 'Two exposures in one: shutter speed controls the ambient, flash power the subject. Set the background first, then the flash.',
    tryIt: 'In a room lit by lamps, keep aperture, ISO and flash constant and photograph the same subject at 1/200, 1/50 and 1/15. Note what changes and what does not.',
    see: ['newton', 'leibovitz', 'parr'],
    check: [
      {
        id: 'fa-1',
        question: 'You want a brighter background without changing the subject’s brightness from the flash. What do you change?',
        options: ['The aperture', 'The flash power', 'The shutter speed (slower)', 'The ISO'],
        correctIndex: 2,
        explanation: 'Shutter speed affects the ambient light, not the brief burst of the flash.',
      },
      {
        id: 'fa-2',
        question: 'What is fill flash?',
        options: ['A flash that fills the whole frame with light', 'Low-power flash that opens up shadows without dominating', 'Flash on the background only', 'Flash with a coloured filter'],
        correctIndex: 1,
        explanation: 'Usually −1 to −2 stops, for a natural result.',
      },
    ],
  },

  'fl-offcamera': {
    title: 'Off-camera flash, bounce and modifiers',
    tagline: 'On top of the camera is the worst place for a light. Move it.',
    quick:
      'Flash on the camera gives flat, hard light from the front. Turn its head towards a ceiling or wall (bounce) for soft light, or take it off the camera with a wireless trigger and put it to the side, in an umbrella or softbox.',
    challenge:
      'If your flash head swivels, photograph someone in a room with a white ceiling: once with the flash pointing straight ahead and once with the head aimed at the ceiling, slightly behind you. Compare shadows and skin.',
    body: [
      'The built-in flash, or a flash pointed straight ahead, is a small source right next to the lens. It gives hard light, a flat face, shiny skin, red eyes and a shadow behind the head on the wall. The first and cheapest step towards better light is bounce: if your flash has a swivelling head, aim it at a white ceiling or wall. The surface becomes a large, soft source, and the light comes from above or the side, not from the lens. Just watch the colour of the surface: a green wall gives green light.',
      'The second step is to take the flash off the camera. With a wireless transmitter on the camera and a receiver on the flash, or with flashes that have a built-in radio system, the flash goes on a stand wherever you like: to the side for Rembrandt, high and in front for Butterfly, behind the subject for a rim. Then everything we learned about lighting patterns applies, with the added power of flash to “beat” the sun.',
      'Modifiers change the size of the source, and so the hardness of the light. An umbrella is cheap, quick and spreads light everywhere. A softbox gives more controlled, soft light. A reflector fills the shadows from the other side. And remember the inverse square law: the closer you bring the softbox to the subject, the softer the light and the darker the background.',
    ],
    bullets: [
      'Flash straight ahead: hard, flat light.',
      'Bounce off a white ceiling or wall: soft light from above or the side.',
      'Wireless trigger: the flash wherever you want.',
      'Umbrella, softbox, reflector: source size = softness.',
    ],
    mistakes: [
      'Bouncing off a coloured surface: coloured light on the skin.',
      'Bouncing off a very high ceiling: shadows under the eyes. Aim slightly behind you or use a small white card on the head.',
      'A softbox too far away: it becomes a small source and the light hardens.',
    ],
    keyIdea: 'Flash on the camera is a starting point, not a destination. Bounce it or take it off the camera, and make the source large and close for soft light.',
    tryIt: 'With an off-camera flash (or even a lamp), recreate the four portrait lighting patterns from Level 1. Add a reflector on the opposite side.',
    see: ['avedon', 'leibovitz', 'penn'],
    check: [
      {
        id: 'fo-1',
        question: 'Why does bouncing the flash off a white ceiling give softer light?',
        options: ['Because it reduces the power', 'Because the ceiling becomes a large light source', 'Because it changes the colour', 'Because it is closer to the subject'],
        correctIndex: 1,
        explanation: 'A large source relative to the subject = soft light.',
      },
    ],
  },

  'fl-curtain': {
    title: 'First and second curtain, and coloured filters (gels)',
    tagline: 'When the flash fires within the exposure, and how to match its colour to the room.',
    quick:
      'At a slow speed with flash, the subject is “frozen” by the flash and leaves a blurred trail from the ambient light. If the flash fires at the end (second curtain), the trail stays behind the subject, naturally. Orange filters (CTO) make the flash match incandescent bulbs.',
    challenge:
      'In a dark place, have someone walk holding a lit phone. Photograph at 1 second with flash, once on first curtain and once on second. Where does the light trail fall?',
    body: [
      'Normally the flash fires at the start of the exposure, as soon as the first curtain opens. At fast speeds it does not matter. But at slow ones, say 1/4, with something that moves and has its own light, the flash “freezes” the subject at the start, and then the subject keeps moving, leaving a trail in front of it. Result: a car that seems to be moving backwards. With second-curtain (rear-curtain) sync, the flash fires at the end. The trail forms first and the subject “freezes” at its end, so the trail stays behind it, as the eye expects.',
      'The colour of flash is roughly that of daylight, around 5500 K. In a room with incandescent bulbs or warm LEDs, around 2700–3200 K, this creates a clash: the face lit by the flash looks blue-cold, or, if you correct for the flash, the room turns orange. The solution is an orange filter on the flash (CTO, colour temperature orange), which brings the flash to the temperature of the bulbs. Then you set the white balance for the bulbs, and everything comes out neutral.',
      'Gels also have a creative use. A blue filter (CTB) on the flash, with white balance set for bulbs, gives a very blue, cinematic light. Coloured gels on the background, e.g. magenta or cyan, create coloured backgrounds without paper. And a gel on the flash combined with the opposite white balance makes a dusk sky a deeper blue while keeping the skin natural.',
    ],
    bullets: [
      'First curtain: flash at the start, the trail in front of the subject.',
      'Second curtain: flash at the end, the trail behind the subject.',
      'Flash ≈ 5500 K. Incandescent bulbs ≈ 2700–3200 K.',
      'CTO: the flash “becomes” a bulb. CTB: the opposite.',
      'Coloured gels for creative backgrounds.',
    ],
    mistakes: [
      'Flash without a gel in a room with warm bulbs: blue faces or an orange background.',
      'Forgetting the second-curtain setting when making exposures with trails.',
    ],
    keyIdea: 'Second curtain for motion trails that look natural. Gels to match the colour of the flash to the room, or to clash with it on purpose.',
    tryIt: 'In a room with warm bulbs, photograph someone with flash: without a gel and with white balance for flash, and with a piece of orange gel (or clear orange plastic) on the flash and white balance for bulbs.',
    check: [
      {
        id: 'fc2-1',
        question: 'You want the light trails from a cyclist to be behind them. What do you set?',
        options: ['First curtain', 'Second curtain (rear curtain)', 'HSS', 'A faster speed'],
        correctIndex: 1,
        explanation: 'Flash at the end “freezes” the subject in front of its trail.',
      },
      {
        id: 'fc2-2',
        question: 'Which filter do you put on the flash to match incandescent bulbs?',
        options: ['Blue (CTB)', 'Orange (CTO)', 'Green', 'Neutral ND'],
        correctIndex: 1,
        explanation: 'CTO lowers the colour temperature of the flash towards that of the bulbs.',
      },
    ],
  },

  /* ───────── Colour management ───────── */
  'cm-spaces': {
    title: 'Colour spaces: sRGB, Adobe RGB, Display P3, ProPhoto',
    tagline: 'Why the same photograph looks “washed out” or “neon” on different screens and apps.',
    quick:
      'A colour space defines which colours an image can contain. sRGB is the standard of the web. Adobe RGB and Display P3 are wider. ProPhoto RGB is very wide, for editing. For the web, the safest choice is sRGB.',
    challenge:
      'Open the export settings of your editing app. Which colour space is selected? If it is not sRGB for images you upload to the internet, change it.',
    body: [
      'A number like “red = 255” means nothing by itself: which red? The colour space is the “dictionary” that says what colour each combination of numbers means, and which are the most saturated colours that can be described (the gamut). sRGB, defined by HP and Microsoft in the 1990s, is the smallest of the common spaces, and it is the standard of the web and of most screens.',
      'Adobe RGB (1998) is wider, mainly in the greens and cyans, and is often used in printing. Display P3, based on a cinema standard, is the space of many modern screens, phones and tablets. ProPhoto RGB is very wide, including colours that no screen or printer can show, and is used mainly as a working space for 16-bit editing, so that colours are not lost in the intermediate steps.',
      'The rule in practice: a RAW has no colour space until you “develop” it. Edit in a wide space, which is usually the programs’ default. For the web, social media and email, export in sRGB, because many apps and screens ignore the other spaces and the image looks washed out. For printing, follow the lab’s instructions, which often ask for sRGB or Adobe RGB.',
    ],
    bullets: [
      'sRGB: the standard of the web, the safest space.',
      'Adobe RGB: wider, often for printing.',
      'Display P3: many modern screens and phones.',
      'ProPhoto RGB: very wide, for 16-bit editing.',
      'Export for the web: sRGB, the safest choice.',
    ],
    mistakes: [
      'Exporting in Adobe RGB or ProPhoto for the internet: “washed out”, dull colours in many apps.',
      'ProPhoto in an 8-bit JPEG: a risk of “steps” in gradients.',
    ],
    keyIdea: 'Edit in a wide space, export in sRGB for screens, and ask the lab about printing.',
    tryIt: 'Export the same photograph in sRGB and in ProPhoto RGB and upload them to a messaging app or social network. Compare the colours on your phone.',
    check: [
      {
        id: 'cms-1',
        question: 'Which colour space do you export a photograph in for social media?',
        options: ['ProPhoto RGB', 'Adobe RGB', 'sRGB', 'CMYK'],
        correctIndex: 2,
        explanation: 'sRGB is the standard of the web; other spaces are often displayed wrongly.',
      },
    ],
  },

  'cm-profiles': {
    title: 'Camera profiles and colour targets',
    tagline: 'Why the same RAW has different colours in every program, and how to get accurate colour when it matters.',
    quick:
      'The “camera profile” is the “recipe” a program uses to turn RAW data into colours. Different profiles give different skin tones and saturation. For accuracy, e.g. with artworks or products, you photograph a colour target and build your own profile.',
    challenge:
      'Open a RAW in your program and change the “profile” (e.g. Standard, Portrait, Landscape, Neutral or the manufacturer’s equivalents). How much do the skin and sky change?',
    body: [
      'As we saw, the sensor records one value per pixel, through three kinds of filter (Bayer). How these become the “right” colours is a decision of the software, and that decision is called the camera profile. Manufacturers have their own styles, e.g. “Standard”, “Portrait”, “Landscape”, and editing programs have their own profiles, often including ones that mimic the manufacturers’ styles. That is why the same RAW does not look the same in every program, nor the same as the camera’s JPEG.',
      'For most photographs, the profile is an aesthetic choice: pick the one you like, especially for skin. But when accuracy matters, as when photographing artworks, products, fabrics or archives, you use a colour target: a card with known colours, such as the well-known “ColorChecker”. You photograph it in the same light as the subject, and special software builds a profile that corrects that particular camera’s deviations in that light.',
      'Even without a target, a grey card or a neutral grey spot in the scene helps you set correct white balance with one click of the “eyedropper”. And a good habit: on important shoots, take one frame with the card at the start, and apply the correction to all the rest.',
    ],
    bullets: [
      'Camera profile = how the RAW becomes colours.',
      'For most photographs: an aesthetic choice.',
      'For accuracy: a colour target and your own profile.',
      'Grey card: quick, correct white balance.',
    ],
    mistakes: [
      '“Fixing” skin colour with many sliders when another profile would solve it in one click.',
      'Photographing the target in different light from the subject.',
    ],
    keyIdea: 'The profile is the first colour decision in RAW. For aesthetics, choose. For accuracy, measure with a target.',
    tryIt: 'If you have a grey card or a neutral white sheet of paper, photograph it at the start of a series. In editing, click the white balance eyedropper on it and sync the setting to all the photographs.',
    check: [
      {
        id: 'cmp-1',
        question: 'Why does the same RAW have different colours in two programs?',
        options: ['Because the file changes', 'Because each program uses a different profile to turn the data into colours', 'Because the screen changes', 'It does not happen'],
        correctIndex: 1,
        explanation: 'The profile and the demosaicing differ from program to program.',
      },
    ],
  },

  'cm-calibration': {
    title: 'Monitor calibration',
    tagline: 'If your screen “lies”, all your editing rests on lies.',
    quick:
      'Every screen shows colour and brightness a little differently. A calibration device (colorimeter) measures the screen and builds a profile that corrects it. Common targets: D65 white (6500 K), gamma 2.2, and for printing a lower brightness, about 100–120 cd/m².',
    challenge:
      'Open one of your photographs on your phone, your computer and a TV or third screen. How much do they differ? That difference is the reason for calibration.',
    body: [
      'Two screens can show the same photograph with noticeably different colour and brightness. If yours is too cool, you will “warm up” all your photographs, and they will look orange to everyone else. If it is too bright, you will darken them, and they will print like caves. Most screens come set too bright and too cool, to look impressive in the shop.',
      'Calibration is done with a small device, the colorimeter, which rests on the screen and measures a series of colours. Its software builds an ICC profile that tells the operating system how to correct the screen. Common targets are a D65 white point (about 6500 K) and gamma 2.2. For brightness, if you work for print, a lower value, often around 100–120 cd/m², helps the screen look more like paper. Calibration is repeated every few months, because screens change over time.',
      'Without a device, you can at least lower the brightness, turn off “auto brightness” and “night light” while editing, and work in steady, not too intense room lighting. And remember that most people will see your photograph on uncalibrated phones. Calibration ensures your own starting point is correct, not that everyone will see exactly the same thing.',
    ],
    bullets: [
      'Screens usually come too bright and too cool.',
      'Colorimeter + software = ICC profile.',
      'Targets: D65, gamma 2.2, ~100–120 cd/m² for print.',
      'Repeat every few months.',
      'Without a device: low brightness, no “night light”.',
    ],
    mistakes: [
      'Editing with the laptop’s “night light” or “auto” mode on: yellow, unstable colours.',
      'Judging exposure with the screen at maximum brightness: prints come out dark.',
    ],
    keyIdea: 'A calibrated screen is the “scale” of editing. Without it, you correct the screen’s errors, not the photograph’s.',
    tryIt: 'Today, turn off auto brightness and “night light” on the computer you edit on, and lower the brightness. Look again at your latest edited photographs: do they look different?',
    check: [
      {
        id: 'cmc-1',
        question: 'Your prints keep coming out darker than on screen. What is the most likely cause?',
        options: ['The printer', 'The screen is too bright', 'The ISO', 'The lens'],
        correctIndex: 1,
        explanation: 'On a very bright screen, you darken photographs without realising it.',
      },
    ],
  },
};

export const LAB7_EN: Record<string, LessonText> = { ...LAB7A_EN, ...LAB7B_EN, ...LAB7C_EN };
