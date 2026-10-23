import type { LessonText } from '../types';

/** School — Level 3: mixed light, advanced editing, Eye III (part 1) */
export const LAB7B_EN: Record<string, LessonText> = {
  'cm-mixed': {
    title: 'Mixed light: when a scene has many “temperatures”',
    tagline: 'Window and lamp, LED and sun: how to handle lights of different colours in the same image.',
    quick:
      'When a scene is lit by sources of different colour, e.g. a cool window and a warm lamp, no white balance makes everything neutral. Choose which light is the “main” one, match or remove the others, or keep the clash as mood. In editing, local white balance helps.',
    challenge:
      'Find a spot at home where light falls from both a window and a lamp. Photograph it with white balance set to “Daylight” and to “Tungsten”. Which parts of the image become neutral in each?',
    body: [
      'Our brain adapts so well to different lights that we rarely notice that a room at dusk has blue light from the window and orange light from the lamps. The camera records it, though: whatever white balance you choose, some area will come out blue or orange. The same happens with fluorescent light (often greenish), with cheap LEDs, or with light bouncing off coloured walls.',
      'There are three strategies. The first: choose the light that falls on the important subject, usually the face, and set the white balance for it. If you can, switch off or remove the other sources. The second: make the lights match, e.g. with gels on the flash (CTO) as we saw, or, in professional productions, with filters on the windows. The third: embrace the clash. The warm light of a lamp within a blue dusk is one of the most beautiful colour relationships, warm–cool, and many photographers seek it out.',
      'When editing the RAW, you can set an overall white balance for the main light and then correct locally, with masks, the areas lit differently: for example, “cooling” a very orange table under a lamp a little. Be careful with skin: it is the colour the eye judges most strictly.',
    ],
    bullets: [
      'Mixed light = no white balance corrects everything.',
      'Strategy 1: balance for the main subject, switch off the rest.',
      'Strategy 2: match the lights with gels.',
      'Strategy 3: keep the warm–cool clash as mood.',
      'Editing: overall balance and local masks.',
    ],
    mistakes: [
      'Auto white balance in mixed light: an “average” that satisfies nothing, and changes from frame to frame.',
      'Green skin from fluorescent light you did not notice while shooting.',
    ],
    keyIdea: 'In mixed light, decide: which light is the main one, will you match the rest, or keep the clash? In RAW, correct locally.',
    tryIt: 'Photograph a portrait by a window at dusk, with a lit lamp in the background. Make three versions in editing: neutral face, neutral lamp, and one in between. Which do you like?',
    see: ['leiter', 'crewdson', 'eggleston'],
    check: [
      {
        id: 'cmm-1',
        question: 'In mixed window and lamp light, what is usually the first decision?',
        options: ['To raise the saturation', 'Which light falls on the main subject, so you can set white balance for it', 'To shoot JPEG', 'To use HDR'],
        correctIndex: 1,
        explanation: 'The main subject, usually skin, determines the basic white balance.',
      },
    ],
  },

  /* ───────── Advanced editing ───────── */
  'ed-curves': {
    title: 'Curves',
    tagline: 'The most powerful tonal tool: a graph that changes each brightness separately.',
    quick:
      'The curve shows how each brightness in the image (horizontal) becomes a new brightness (vertical). A gentle “S” increases contrast. Raising the bottom-left end makes the blacks “matte”. In the red, green and blue channels, the curve changes the colours in the tones.',
    challenge:
      'Open a photograph in the Curves tool and make a gentle “S”: a little down at the shadows point, a little up at the highlights point. What changes?',
    body: [
      'The tone curve is a graph: the horizontal axis is the image’s original brightnesses, from black on the left to white on the right, and the vertical axis the new ones. At first it is a straight diagonal: nothing changes. If you raise a point, all tones around it get brighter. If you lower it, they get darker. Unlike the simple “contrast” and “brightness” sliders, the curve lets you control each tonal range separately.',
      'The basic shapes: the “S” curve, shadows a little darker and highlights a little brighter, increases contrast in the midtones. The steeper the slope in a region, the more contrast there. Raising the bottom-left end turns the darkest points grey instead of black: the “matte”, “filmic” look. Lowering the top-right end “softens” the whites. And if you want to brighten only the shadows without touching the highlights, you add points that “lock” the rest of the curve.',
      'In the colour channels, the curve changes colours by tone: for example a little blue in the shadows and a little yellow in the highlights, a classic “filmic” tint. Small moves are enough: the curve is very powerful and easily “breaks” gradients, especially in 8-bit JPEG.',
    ],
    bullets: [
      'Horizontal: original tone. Vertical: new tone.',
      'Gentle “S”: more contrast in the midtones.',
      'Bottom-left raised: matte blacks.',
      '“Lock” points for changes in specific tones.',
      'Per-channel curves: colour tinting by tone.',
    ],
    mistakes: [
      'Too steep an “S”: blown highlights, crushed shadows, unnatural colours.',
      'Matte blacks on every photograph because they are “in fashion”.',
    ],
    keyIdea: 'The curve controls each tone separately. A small “S” for contrast, always small moves.',
    tryIt: 'Take a photograph and make three versions using curves only: strong contrast, soft and matte, and one with a colour tint (blue shadows, warm highlights).',
    check: [
      {
        id: 'ec-1',
        question: 'What does a gentle S-shaped curve do?',
        options: ['It reduces contrast', 'It increases contrast in the midtones', 'It converts to black and white', 'It changes only the colour'],
        correctIndex: 1,
        explanation: 'Darker shadows, brighter highlights, a steeper slope in the middle.',
      },
    ],
  },

  'ed-local': {
    title: 'Local adjustments and masks: dodge & burn',
    tagline: 'From the darkroom to smart masks: how to guide the viewer’s eye.',
    quick:
      'Global adjustments change the whole image. Local ones, with a brush, gradient, circle or “smart” masks that recognise sky or people, change only a part. You lighten (dodge) what you want the eye to see first, and darken (burn) what distracts.',
    challenge:
      'In one of your portraits, use a radial (circular) mask to lighten the face slightly by +0.3 stops, and an inverted one to darken the edges a little. The change should not show, but be “felt”.',
    body: [
      'In the darkroom, photographers “held back” light from some areas of the print with a piece of card or their hands, to make them lighter (dodge), and gave extra light to others to darken them (burn). The famous prints of many great photographers were the result of hours of such work. The principle is simple: the eye goes to the brightest, most contrasty spot, so you “guide” it by lightening the subject and darkening the superfluous.',
      'Today the same is done with masks: a brush for free-form areas, a linear gradient for skies and ground, a radial (circular) one to light the subject or gently darken the edges. Newer versions of the programs have AI “smart” masks that select the sky, the subject, the eyes or the skin with one click. In each mask you can change exposure, contrast, colour, sharpness, separately from the rest of the image.',
      'The art is in moderation. Good local adjustments do not show: the viewer simply “feels” that the image is clear and that they are looking at the right spot. If you see halos around a building, or a face that “glows” as if it had its own light, you have gone too far. Toggle the mask on and off often to compare.',
    ],
    bullets: [
      'Dodge = lighten, burn = darken, locally.',
      'Brush, linear, radial, “smart” masks.',
      'Lighten the subject, darken what distracts.',
      'Good local adjustments do not show.',
    ],
    mistakes: [
      'Halos at the edges of the mask (e.g. around mountains against the sky).',
      'A face much brighter than its surroundings, with no natural light source.',
      'An exaggerated “vignette” at the edges.',
    ],
    keyIdea: 'Local adjustments guide the eye: light where you want it to look, shadow where you do not. Always in moderation.',
    tryIt: 'Take a landscape photograph and make one sky mask (darken a little, add contrast) and one radial on the main subject (a little light). Compare with the before, toggling back and forth.',
    see: ['adams', 'smith-eugene'],
    check: [
      {
        id: 'el-1',
        question: 'What does “burn” mean in editing?',
        options: ['Lighten locally', 'Darken locally', 'Increase saturation', 'Crop the image'],
        correctIndex: 1,
        explanation: 'From the darkroom: extra light on the paper darkens the area.',
      },
    ],
  },

  'ed-merge': {
    title: 'HDR and panorama merging',
    tagline: 'When one frame is not enough: more dynamic range, or more space.',
    quick:
      'HDR: you photograph the same scene at different exposures (e.g. −2, 0, +2 EV) and merge them, to keep detail in both highlights and shadows. Panorama: you photograph sections with overlap and “stitch” them into one wide image.',
    challenge:
      'With your phone in panorama mode, photograph a room by rotating your body around the phone, not the phone around you. Do you see “breaks” in lines and doors?',
    body: [
      'As we learned with dynamic range, some scenes have more difference between bright and dark than fits in one frame. HDR (high dynamic range) merging solves this: on a tripod, or with a steady hand and burst, shoot the same scene at different exposures, usually with bracketing, e.g. −2, 0, +2 EV. Programs such as Lightroom or Photoshop merge the frames into one file, often a DNG, that holds the whole range, and you then edit it like a normal RAW.',
      'The old “HDR look”, with grey skies, halos and exaggerated detail, gave the technique a bad name. Modern HDR aims to look like what the eye saw: a bright window with a view, an interior with detail, without the technique “showing”. Phones do it automatically in almost every shot.',
      'A panorama joins many frames side by side, usually vertical, with about 30% overlap between them, for a wider angle or more pixels. Keep exposure, focus and white balance fixed for all of them. For scenes with nearby objects, the camera must rotate around a specific point of the lens, the entrance pupil (often called, not quite accurately, the “nodal point”). Otherwise near and far objects shift relative to each other (parallax) and the stitching fails.',
    ],
    bullets: [
      'HDR: bracketing (e.g. −2, 0, +2) and merging into one RAW/DNG.',
      'Goal: a natural result, not the old “HDR look”.',
      'Panorama: ~30% overlap, fixed exposure, focus, white balance.',
      'Nearby objects: rotate around the lens’s entrance pupil.',
    ],
    mistakes: [
      'People or branches moving between frames: “ghosts” (programs have correction, but it does not always succeed).',
      'Auto exposure in a panorama: strips of different brightness.',
      'Excessive local “tone mapping”: grey skies and halos.',
    ],
    keyIdea: 'When one frame cannot hold the scene, merge several: in exposure for dynamic range (HDR), in space for a panorama. The goal is for the technique not to show.',
    tryIt: 'Photograph a room with a sunlit window at three exposures (−2, 0, +2) and merge them. Compare with the single middle frame, opening the shadows and lowering the highlights as far as you can.',
    see: ['gursky'],
    check: [
      {
        id: 'em-1',
        question: 'How much overlap do we usually leave between the frames of a panorama?',
        options: ['0%', 'About 30%', '90%', 'None needed'],
        correctIndex: 1,
        explanation: 'Enough for the program to find common points, without wasting frames.',
      },
    ],
  },

  'ed-bw': {
    title: 'Black-and-white conversion in depth',
    tagline: 'Channel mixing, local contrast, toning, grain: from a “grey” image to a living black and white.',
    quick:
      'A strong black and white is built in steps: the right colour mix for the tones (e.g. a dark sky), a curve for clean blacks and whites, local dodge & burn to guide the eye, and optionally light toning and grain.',
    challenge:
      'Take one of your colour photographs and convert it to black and white with the simple button. Then go to the black-and-white mix and move the red, orange and blue. How different can the same image become?',
    body: [
      'In Level 2 we saw that in black and white every colour becomes a tone, and that with the colour mix you decide which will be light and which dark, like the coloured filters of the film era. That is the first step. A professional black and white, though, goes further. Ansel Adams developed, with Fred Archer, the “Zone System”: a way of planning at the moment of exposure where each tone of the scene will fall in the final print. The same logic holds today: think about which area you want truly black, which white with texture, and where the important midtones are.',
      'Second step, the curve and contrast. Black-and-white images often need more contrast than colour ones, because they lack colour contrast to separate the elements. Local contrast, called “clarity”, “texture” or “structure”, makes textures “pop”, but easily becomes excessive. Third step, dodge & burn. In black and white it is even more important, because light is the eye’s only guide.',
      'Finally, “toning”: a very light tint, warm, e.g. sepia, or cool, e.g. blue toning, in the blacks or the highlights, imitating darkroom chemistry; classic selenium toning, for example, deepened the blacks with a slight purple-brown tone. And grain, if you want a more “filmic” texture. Both: very little. Important: work your black and white starting from a colour RAW, so you have all the colour information for the mix.',
    ],
    bullets: [
      'Colour mix: which colour becomes which tone.',
      'Think in “zones”: what is black, what white with texture, where the midtones are.',
      'Curve and local contrast, in moderation.',
      'Dodge & burn: the eye’s only guide.',
      'Toning and grain: very little.',
    ],
    mistakes: [
      'A grey, “muddy” black and white with no real blacks or whites.',
      'Too much clarity: “dirty” textures and halos.',
      'Converting from JPEG instead of RAW: less freedom in the mix.',
    ],
    keyIdea: 'Black and white is built: colour mix for the tones, curve for contrast, dodge & burn for the eye, and a little toning if it suits.',
    tryIt: 'Take a portrait and a landscape and make a black-and-white version with all the steps. Note for each: which area is the blackest black and which the whitest white?',
    see: ['adams', 'salgado', 'koudelka', 'moriyama'],
    check: [
      {
        id: 'ebw-1',
        question: 'Which system, developed by Ansel Adams with Fred Archer, helps you plan the tones from exposure to print?',
        options: ['The Zone System', 'The rule of thirds', 'HDR', 'The Bayer filter'],
        correctIndex: 0,
        explanation: 'The Zone System divides tones into zones and links metering to the final print.',
      },
    ],
  },

  /* ───────── Eye III: from the photograph to the series ───────── */
  'series-project': {
    title: 'How a project is born',
    tagline: 'From the single “good photograph” to a body of work that says something bigger.',
    quick:
      'A project is a group of photographs with a shared subject, question or way of seeing. Start from something you know or that really concerns you, set limits (place, time, rule), and write in one sentence what you are looking for. The sentence will change along the way, and that is good.',
    challenge:
      'Write three ideas for a project you could start in your town or village within the next month. For each, one sentence: “I photograph … because …”.',
    body: [
      'Most photographers begin with single photographs: whatever they find interesting, wherever it is. At some point, though, the next challenge is the series: a group of images that together say something none would say alone. Many of the most important works in photography are projects: Robert Frank’s “The Americans”, Koudelka’s “Gypsies”, the Bechers’ “industrial buildings”, Goldin’s “The Ballad of Sexual Dependency”.',
      'The best starting point is usually something close: a place you know well, a person, a community you have access to, a question that concerns you. Familiarity gives you access and time, two things an “exotic” subject rarely gives. Set limits: a specific place, a period of time, a rule, e.g. “only portraits on their doorstep”, “only at night”. Limits make a project manageable and give it unity.',
      'Write a sentence about what you are looking for: “I photograph the shops closing in my neighbourhood, because I want to understand what is being lost.” This sentence will change, probably many times, as the photographs show you what you are really finding. That is not failure: it is how a project works. Give it time. Most important works took months or years.',
    ],
    bullets: [
      'Project = many images, one subject or question.',
      'Start from something close: access and time.',
      'Set limits: place, time, rule.',
      'One sentence: “I photograph … because …”. It will change.',
      'Give it time: months, not days.',
    ],
    mistakes: [
      'A subject so general it never ends, e.g. “people”.',
      'Giving up after two outings because “nothing is coming out”.',
      'Copying a well-known project instead of finding your own access.',
    ],
    keyIdea: 'A project is born from something close, with limits and a sentence that changes as you photograph. Time is one of its ingredients.',
    tryIt: 'Choose one of the three ideas from the challenge and make the first outing this week. Do not judge anything yet: just photograph.',
    see: ['frank', 'koudelka', 'goldin', 'becher', 'mary-ellen-mark'],
    check: [
      {
        id: 'spr-1',
        question: 'Why is a subject close to you usually a good starting point for a project?',
        options: ['Because it is easier to photograph with a phone', 'Because it gives access and time', 'Because it needs no research', 'Because it is more impressive'],
        correctIndex: 1,
        explanation: 'Familiarity lets you return, go deeper and be trusted.',
      },
    ],
  },

  'series-research': {
    title: 'Research: before, during and after shooting',
    tagline: 'A series does not come from the camera alone. It comes from looking, reading, talking and returning.',
    quick:
      'Research in a project has three parts: seeing what others have done on similar subjects, learning about your subject (reading, people, history), and returning to the place again and again. Contact sheets, seeing all your frames together, are the basic tool for reflection.',
    challenge:
      'For the project idea you chose, find three photographers (in the Encyclopedia or elsewhere) who worked on something similar. Write one phrase about what you would keep and what you would do differently.',
    body: [
      'First: look. Before and during a project, it is worth seeing what has been done. Not to copy, but to understand what has been said and what is missing. Photobooks, exhibitions, archives. Lumina’s Encyclopedia is a starting point. Ask: how did they approach this subject? From a distance or from inside? In colour or black and white? With people or without?',
      'Second: learn about your subject. Read the history of the place, talk to the people, search local archives and old photographs. The best documentary photographers spend a lot of time without a camera: listening, asking, building trust. Often the strongest images come from a piece of information or a relationship found this way.',
      'Third: return, and look at your work as a whole. Film photographers printed “contact sheets”: all the frames of a roll on one sheet of paper, where they could see how they approached an image, what they tried, where they found the moment. Magnum has published many of its members’ contact sheets, and they are among the most instructive documents in photography. Digitally, you do the same by viewing all the frames of an outing as thumbnails. After each outing ask: what worked? What is missing? Where do I need to go back?',
    ],
    bullets: [
      'See what others have done: what has been said, what is missing.',
      'Learn about the subject: history, people, archives.',
      'Time without a camera: listen, ask, build trust.',
      'Contact sheets: see each outing as a whole.',
      'After each outing: what worked, what is missing, where to return.',
    ],
    mistakes: [
      'Being afraid to look at others’ work “so as not to be influenced”: you will be influenced anyway, better consciously.',
      'Looking only at the “good” photographs and not the whole sequence of frames.',
    ],
    keyIdea: 'Look at what has been done, learn your subject, and look at your work as a whole after each outing. Research is half the photograph.',
    tryIt: 'After the next outing for your project, view all the frames as thumbnails. Mark in red the moments where “something started to happen”. What do they have in common?',
    see: ['cartier-bresson', 'koudelka', 'salgado', 'lange'],
    check: [
      {
        id: 'sre-1',
        question: 'What were “contact sheets” in the film era?',
        options: ['Contracts with models', 'All the frames of a roll printed on one sheet, to see them together', 'Lens filters', 'Cards for light metering'],
        correctIndex: 1,
        explanation: 'They showed the whole process of shooting, not only the chosen photograph.',
      },
    ],
  },

  'series-edit': {
    title: 'Selection: the art of throwing away',
    tagline: 'Choosing 12 out of 2,000 photographs is perhaps harder than taking them.',
    quick:
      'Selection (editing in the curator’s sense) happens in rounds: first you keep whatever has life, then whatever says something about the project, and finally whatever holds up next to the others. Ask for opinions, let time pass, and sacrifice photographs you love that do not belong.',
    challenge:
      'Take all the photographs from your last outing and choose only 5, in three rounds: first 30, then 12, then 5. Each round with a break of at least an hour.',
    body: [
      'In English, the word “editing” means two things: processing the image and selecting the images. Here we mean the second, which professionals often consider the most crucial skill. A project with 12 strong images is far more powerful than one with 40, where the 12 “get lost” among 28 mediocre ones.',
      'Work in rounds. In the first, keep whatever has “life”: a moment, a glance, a light, even if technically imperfect. In the second, keep whatever connects to the project’s subject. In the third, look at the photographs together: which hold up next to the others, which repeat each other, which are missing. Put the photographs as small prints on the wall or the floor: it is the oldest and still one of the best ways to see a series.',
      'Two truths that hurt. First: the photograph that cost you most, because you waited hours, travelled far or took a risk, is not necessarily the best. The viewer does not know what it cost you. Second: you need other eyes. A friend, a teacher, your club will see things that you, emotionally attached, do not. Listen, take notes, and then decide for yourself.',
    ],
    bullets: [
      'Round 1: life. Round 2: connection to the subject. Round 3: how they stand together.',
      'Fewer, stronger images.',
      'Small prints on the wall.',
      'The “difficult” photograph is not necessarily the best.',
      'Ask for other eyes, decide yourself.',
    ],
    mistakes: [
      'Keeping two almost identical photographs “because you cannot choose”.',
      'Selecting right after shooting, while you are still emotionally attached.',
    ],
    keyIdea: 'Selection is half the work. In rounds, with time, with other eyes, and with the courage to throw away what you love but does not belong.',
    tryIt: 'Print 20 small photographs (even on a simple printer) from your project, lay them on the floor and keep 8. Ask someone else to do the same without seeing your choice. Compare.',
    see: ['frank', 'evans', 'shore'],
    check: [
      {
        id: 'sed-1',
        question: 'What is a common mistake when selecting photographs for a series?',
        options: ['Asking others for their opinion', 'Keeping photographs because they cost you a lot, not because they are strong', 'Letting time pass', 'Printing small proofs'],
        correctIndex: 1,
        explanation: 'The viewer sees the image, not the effort behind it.',
      },
    ],
  },
};
