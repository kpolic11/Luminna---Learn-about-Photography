/**
 * “In 30 seconds” and “2-minute challenge” for each lesson.
 * [summary, challenge]
 */
export const QUICK_EN: Record<string, [string, string]> = {
  /* Light */
  'exp-light': [
    'Light has two qualities that matter first: how hard or soft it is, and where it comes from. Side light gives volume, front light “flattens”, backlight gives an outline.',
    'Take a piece of fruit and your phone. Put the fruit by a window and photograph it with the light in front, to the side and behind. Which has the most volume?',
  ],
  'light-quality': [
    'A large, close source = soft light with gentle shadows. A small or distant source = hard light with crisp shadows. The sun is “small” because it is far away; a cloud makes it enormous.',
    'Photograph your hand in the sun, and then in the shade of a wall. Look at the edges of the shadows: where are they crisp and where soft?',
  ],
  'light-time': [
    'The same scene changes completely with the time and the weather: harsh midday, warm golden hour, blue blue hour, soft overcast. Before asking “what shall I photograph?”, ask “when?”.',
    'Look out of the window now. Write one word for the light you see: hard, soft, warm, cool? Look at the same spot again in three hours.',
  ],
  'exp-whitebalance': [
    'Every light has a colour: orange bulbs, blue shade, neutral midday sun. White balance “neutralises” it, or, if you wish, keeps it for mood.',
    'Photograph a sheet of white paper under a lamp at home and then by the window. What colour is it in each photograph?',
  ],
  'light-portrait': [
    'Four classic patterns, depending on where the light is: Butterfly (in front and high, glamour), Loop (slightly to the side, natural), Rembrandt (further to the side, a triangle on the cheek, drama), Split (90°, mystery).',
    'Sit by a window with your phone’s front camera. Slowly turn your head from the window towards the opposite side. Can you find at least three (Split, Rembrandt, Loop)?',
  ],
  'light-key': [
    'High key: light tones, a light mood. Low key: dark tones, one light, drama. Both are choices, but you have to “correct” the camera, which wants everything grey.',
    'Photograph a cup on a white cloth, with a bright exposure (high key). Then switch off the lights and light it only with your phone’s torch from the side (low key).',
  ],

  /* Exposure */
  'exp-what': [
    'Exposure is how much light reaches the sensor. It is controlled by three “dials”: aperture (how wide the hole), shutter speed (for how long) and ISO (how much the signal is amplified).',
    'On your phone, tap a dark spot and then a bright spot in the same scene. See how the brightness of the whole image changes. That is exposure.',
  ],
  'exp-stops': [
    'A “stop” means twice or half the light. One stop wider aperture, one stop slower speed or one stop higher ISO do the same job: they double the brightness.',
    'Work it out in your head: if the speed goes from 1/250 to 1/125, how many stops of light did you gain? Then try it in the lesson’s interactive.',
  ],
  'exp-aperture': [
    'The aperture is the lens’s “pupil”. A small number (f/1.8) = a large opening, lots of light, a blurred background. A large number (f/16) = a small opening, little light, everything sharp.',
    'Hold your finger 10 cm from your eye and look at something far away. Then look at your finger. What blurs each time is your eye’s “depth of field”.',
  ],
  'exp-shutter': [
    'Shutter speed is how long the shutter stays open. Fast (1/1000) freezes movement, slow (1/15) blurs it. Blur can be a mistake or a tool.',
    'Photograph water running from the tap with your phone in Pro mode: once at 1/1000 and once at 1/15 (support the phone). Compare.',
  ],
  'exp-iso': [
    'ISO amplifies the sensor’s signal. High ISO = a bright image in little light, but more noise. Better a little noise than a blurred, shaken photograph.',
    'In a dark room, take a photograph with your phone and zoom in. Do you see the “grain”? That is noise.',
  ],
  'exp-equivalent': [
    'The same brightness comes from many combinations: f/4 at 1/250 gives the same as f/5.6 at 1/125. You choose the combination by what you want: a blurred background or frozen motion.',
    'In the lesson’s interactive, keep the brightness constant and change the combination. Find three different combinations for the same exposure.',
  ],
  'exp-modes': [
    'A/Av: you choose the aperture (depth of field). S/Tv: you choose the speed (motion). M: you choose everything. P: the camera decides, you correct. Choose by what matters to you.',
    'For each of these scenes, which mode would you choose: a portrait with a blurred background, a running child, a landscape on a tripod? (Answer: A, S, A or M.)',
  ],
  'exp-rules': [
    'Without a meter: in bright sun, f/16 and a speed equal to 1/ISO (e.g. ISO 100 → 1/100 or 1/125). Each step of cloud: one stop wider.',
    'If it is daytime, look outside: bright sun, light cloud or heavy? Work out the exposure with “Sunny 16” for ISO 200.',
  ],
  'phone-workflow': [
    'Five moves for the phone: clean the lens, tap the subject, hold to lock, slide the sun ☀ for brightness, check the bright areas.',
    'Clean your phone’s lens now with a soft cloth. Photograph a lamp before and after. See the difference in the “haze” around the light.',
  ],

  /* Composition: basics */
  'comp-thirds': [
    'Divide the frame into 3 × 3. Place the subject on a line or an intersection, not in the centre out of habit. The image gains movement and “breathes”.',
    'Turn on the grid in your phone’s camera. Photograph an object once in the centre and once on a thirds intersection.',
  ],
  'comp-horizon': [
    'The horizon should be straight, and preferably on one of the thirds: high if the land is more interesting, low if the sky is.',
    'Find a horizon from the window or the street. Shoot it on the upper third and on the lower third. Which photograph says more?',
  ],
  'comp-lines': [
    'Roads, fences, rivers, stairs: lines “lead” the eye. Find a line that starts near you and ends at your subject.',
    'At home or on the street, find a line (tiles, railings, a corridor). Lower the camera and shoot so the line leads to something.',
  ],
  'comp-framing': [
    'Doors, windows, branches, arches: a “frame within the frame” shows the eye where to look and adds depth.',
    'Photograph something through a door or window at home, with the frame visible all around.',
  ],
  'comp-fill': [
    'Most beginners’ photographs are taken from too far away. Get closer, fill the frame with the subject, and leave out whatever does not help.',
    'Photograph an object from where you are standing. Then take two steps closer, and another two. Which is strongest?',
  ],
  'comp-simplicity': [
    'Fewer elements, a clearer message. Before you press, check the four edges of the frame: is there anything that is not needed?',
    'Photograph your desk as it is. Then remove half the things and photograph it again. What changed?',
  ],
  'comp-viewpoint': [
    'The same scene from eye level, from very low or from very high is three different photographs. Your feet are the best “zoom”.',
    'Photograph a plant or a pet from three heights: standing, kneeling, lying on the floor.',
  ],
  'comp-aspect': [
    'The shape of the frame is the first composition decision: horizontal for width and movement, vertical for height, square for calm and symmetry.',
    'Photograph a person or a tree once horizontally and once vertically. Then crop one to a square.',
  ],

  /* Eye I */
  'eye-seeing': [
    'A photographer learns to see light, shapes and relationships instead of “objects”. It is not talent, it is a habit that is cultivated.',
    'Half-close your eyes and look at the room. What are the three brightest areas? Photograph one of them.',
  ],
  'eye-light-subject': [
    'Sometimes the subject is the light itself: a beam, a strip of sun, a shadow. Find the light first, meter for it, and wait for something to step in.',
    'Find a spot at home where sunlight or lamplight falls. Photograph only the light and shadow, with the exposure set on the bright area.',
  ],
  'eye-intent': [
    'Before technique, intention: what do I want to say? The answer chooses the frame, light, lens and moment.',
    'Choose a word, such as “quiet”, and photograph it inside your home, without showing anything obvious.',
  ],
  'eye-daily': [
    'Seeing is a muscle. One photograph a day and exercises with constraints (one lens, one colour) teach you more than one big trip.',
    'Day one of “30 days, 30 photographs”: photograph a shadow you find near you, now.',
  ],

  /* Focus & depth of field */
  'focus-how': [
    'Only one plane is perfectly sharp. The camera finds it with autofocus, but you decide where: in a portrait, on the eyes.',
    'Place two objects at different distances. Tap the screen first on one and then on the other. See how what is sharp changes.',
  ],
  'dof-what': [
    'Depth of field is the zone that looks acceptably sharp, in front of and behind the focus point. It is not a point, it is a region with soft edges.',
    'In the lesson’s interactive, keep the focus on the person and change the aperture. When does the tree become sharp too?',
  ],
  'dof-aperture': [
    'A wide aperture (small f-number) = shallow depth of field. A narrow one (large f-number) = deep depth of field. The simplest dial for a blurred background.',
    'If you have a camera, photograph the same flower at f/2.8 and at f/11. If you have a phone, compare photo mode and portrait mode.',
  ],
  'dof-distance': [
    'The closer you are to the subject, and the further away the background, the more blurred the background. This works with any lens, even a phone.',
    'Photograph a pencil resting on the table with the wall behind it, once with the wall close and once with the pencil far from the wall.',
  ],
  'dof-lens-sensor': [
    'A smaller sensor = more depth of field for the same frame. That is why phones struggle to blur “optically” and do it with software.',
    'In the interactive, change the sensor from “Full frame” to “Phone” without changing anything else. How much does the depth of field grow?',
  ],
  'dof-hyperfocal': [
    'In landscape, if you focus at the “hyperfocal distance”, everything from half that distance to infinity is acceptably sharp.',
    'In the interactive, press “Focus at hyperfocal” at 24 mm and f/11. From how many metres onwards is everything sharp?',
  ],

  /* Metering */
  'exp-metering': [
    'The meter wants to make everything “middle grey”. In snow it darkens the image, in the dark it brightens it. You correct it.',
    'Photograph a white sheet of paper that fills the whole frame, without correction. What colour does it come out? Then slide the sun ☀ upwards.',
  ],
  'metering-modes': [
    'Matrix metering for most things, spot for difficult light (a face in a spotlight). And the lock (AE-L): meter, lock, recompose.',
    'Photograph a friend in front of a bright window. First without anything, then pressing and holding on their face to lock.',
  ],
  'exp-compensation': [
    'The ± button (or the sun ☀ on a phone) tells the camera “brighter” or “darker” than what it measured. + for snow and whites, − for darkness and silhouettes.',
    'Photograph a scene five times, from the darkest to the brightest sun ☀ setting. Which mood do you like best?',
  ],
  'exp-histogram': [
    'The histogram shows how many pixels the image has at each brightness, from black (left) to white (right). If it “touches” the edges, something was lost.',
    'Open one of your photographs in an editing app that shows a histogram. Does it touch either edge?',
  ],
  'dynamic-range': [
    'The camera does not see as many gradations as the eye. When a scene has a lot of light and a lot of dark together, you choose what to save, usually the highlights, or use HDR.',
    'Photograph a room with a sunlit window: once tapping on the room and once on the window. What is lost in each?',
  ],

  /* Composition: advanced */
  'comp-golden': [
    'The golden ratio is a proportion slightly “tighter” than thirds, and its spiral leads the eye along a curve. It works when the scene already has a curve.',
    'Find a curve around you (a staircase, a shell, a handle, a leaf) and photograph it so the curve “winds” towards one point.',
  ],
  'comp-symmetry': [
    'When the scene is symmetrical, forget the thirds: put it in the centre, perfectly straight. Reflections in water or glass give natural symmetry.',
    'Find something symmetrical (a door, a corridor, a façade) and photograph it perfectly centred, with the grid on.',
  ],
  'comp-negative': [
    'Empty space is not “wasted” space. A small subject in a large, clean emptiness gives calm, loneliness or emphasis.',
    'Photograph a small object on a large empty wall or table, with the object taking up less than 1/10 of the frame.',
  ],
  'comp-diagonals': [
    'Diagonals give energy and movement, horizontal lines calm. Look for diagonals within the scene, instead of tilting the horizon.',
    'Photograph a staircase or a railing so it crosses the frame diagonally.',
  ],
  'comp-odds': [
    'Three elements often look more “alive” than two or four: the eye does not pair them up, but moves between them.',
    'Take some fruit or cups and photograph two, then three, then four. Which group looks most interesting?',
  ],
  'comp-layers': [
    'Foreground, middle ground, background: three layers give depth to a flat image.',
    'From a window or balcony, photograph something close (a plant pot), something in the middle (the street) and something far (buildings), all in the same frame.',
  ],
  'comp-leadroom': [
    'Leave more space in front of the subject’s gaze or movement. Otherwise the image “stumbles”.',
    'Photograph a person in profile looking right: once with the space in front of them, once with the space behind them.',
  ],
  'comp-contrast': [
    'The eye goes first to the greatest contrast: light against dark, colour against grey, sharp against blurred. Make sure your subject is there.',
    'Find a dark object and put it in front of a light background, and vice versa. In which case does it stand out more?',
  ],
  'comp-patterns': [
    'Patterns (tiles, windows, rows) are beautiful. They become powerful when something breaks them: a different element, a person.',
    'Find a pattern at home (tiles, books) and place an object in it that “breaks” the rhythm.',
  ],
  'comp-balance': [
    'A large, dark or intense element “weighs down” the frame. Balance it with a smaller one on the other side, not necessarily something equal.',
    'Put a large object on the left of the frame and a small, brightly coloured one on the right. Move the small one until the image “balances”.',
  ],
  'comp-break': [
    'Rules are tools, not laws. Break one when you know why: a horizon in the middle for calm, the subject at the edge for tension.',
    'Photograph something deliberately “breaking” a rule and write in one sentence why you did it.',
  ],

  /* Lenses */
  'lens-focal': [
    'Focal length shows how “wide” or “narrow” the frame is: 24 mm very wide, 50 mm roughly like the eye, 200 mm very narrow.',
    'On your phone, photograph the same scene from the same position at 0.5×, 1× and 3×. How much did the frame change?',
  ],
  'lens-perspective': [
    'Telephoto “compression” is not made by the lens but by distance. Your feet change the perspective. The lens only changes how much you crop.',
    'Photograph a friend from very close at 0.5× and from far away at 3×, so the face is the same size. Look at the background and the nose.',
  ],

  /* Colour theory */
  'ct-making': [
    'A screen makes colour by adding light: red, green, blue (RGB). Paper makes it by subtracting, with inks: cyan, magenta, yellow (CMYK). That is why they differ.',
    'Look at your phone screen very closely, or photograph it in macro mode. Do you see the tiny red, green and blue dots?',
  ],
  'ct-hsl': [
    'Every colour has a hue (which colour), saturation (how intense) and lightness (how light). In editing you control them separately with HSL.',
    'In an editing app, find the colour tool (HSL) and darken only the blue in a photograph with sky.',
  ],
  'ct-harmony': [
    'On the colour wheel, opposite colours (complementary) give tension, neighbouring ones (analogous) calm. Usually one colour dominates and the others serve it.',
    'Play with the lesson’s wheel. Then look at home for two objects in complementary colours and photograph them together.',
  ],
  'ct-warm-cool': [
    'Warm colours (red, orange, yellow) come forward, cool ones (blue, cyan) recede. A warm subject on a cool background = depth.',
    'At dusk, photograph a lit lamp with the blue sky behind it. See how the warm light stands out.',
  ],
  'ct-contrasts': [
    'Contrast makes colour speak. The strongest is often “contrast of extension”: a small intense colour within a large neutral area.',
    'Put a small red object on a large grey or white background and photograph it.',
  ],
  'ct-emotion': [
    'Colours bring moods (blue calm, red intensity), but associations differ from culture to culture. Use them consciously, not like a dictionary.',
    'Take one of your photographs and make a cooler and a warmer version in editing. Which mood suits the scene?',
  ],
  'ct-palette': [
    'Fewer colours, a clearer voice. An image with one dominant colour or two or three related ones is almost always stronger than a “rainbow”.',
    'Find a corner at home where one colour dominates and photograph it with nothing unrelated in the frame.',
  ],
  'ct-bw': [
    'In black and white, every colour becomes a tone of grey. With the colour mix you decide which will be light and which dark, e.g. a dark sky, light skin.',
    'Convert a colour photograph with sky to black and white and darken only the blue channel. What happens to the clouds?',
  ],

  /* Files & editing */
  'edit-files': [
    'RAW: the raw data, for maximum editing. JPEG: ready and small. HEIF: like JPEG, smaller. TIFF: lossless, for archiving and print.',
    'Check your phone camera’s settings: what format does it save in (HEIF/JPEG)? Does it have a RAW option?',
  ],
  'edit-basics': [
    'A few moves, in order: straighten and crop, exposure, contrast, highlights and shadows, colour. If the viewer can “see” the editing, it is probably too much.',
    'Take one of your photographs and make only three moves: straighten, crop, and correct the exposure. Stop there.',
  ],
  'edit-workflow': [
    'First a backup, then selection, then editing. And a naming and folder system you will still be able to navigate in ten years.',
    'Open your phone photographs from the last week and star only the best 3.',
  ],

  /* Eye II */
  'read-describe': [
    'Three steps before judging: description (what I see), analysis (how it is made), interpretation (what it says). Then, and only then, “I like it or not”.',
    'Choose a photograph from the Encyclopedia and write three sentences: one description, one analysis, one interpretation.',
  ],
  'read-punctum': [
    'Barthes: the studium is a photograph’s general interest, the punctum a detail that “pierces” you personally. The punctum differs for each person.',
    'Find an old family photograph. Which small detail touches you most?',
  ],
  'read-szarkowski': [
    'Five questions for every photograph, from MoMA’s Szarkowski: what it shows, which detail, how the frame cuts, which moment, from which vantage point.',
    'Take the last photograph you took and answer the five questions. Which one had you not thought about at all?',
  ],
  'read-light-story': [
    'Light does not just illuminate. It shows what is important (the eye goes to the brightest), what time it is and what mood the scene has.',
    'In a photograph you love, find the three brightest points. Is that where the story is?',
  ],

  /* Workshops I */
  'ws-approach': [
    'A portrait is a relationship. Talk before you photograph, give the person something to do with their hands, and keep talking with positive, specific words.',
    'Message a friend: “Could I take your portrait this week? 15 minutes, over a coffee.” That is the first step.',
  ],
  'ws-portrait': [
    'Soft light from the side, a moderate telephoto distance (or 2–3× on a phone), focus on the near eye, a calm background. Then break the recipe when you have a reason.',
    'Take a self-portrait by a window, with the light from the side. Make sure the window’s reflection shows in your eyes.',
  ],
  'ws-street-consent': [
    'Approach with a smile, say what drew you, and accept a “no” graciously. Laws on publishing people’s images differ by country, and commercial use needs written permission.',
    'Write down the sentence you would say to a stranger to photograph them. Say it aloud twice. Tomorrow, say it to someone.',
  ],
  'ws-street': [
    'Set up the camera so it does not slow you down (wide angle, f/8, zone focus), find a setting with good light, get close, and wait for the moment.',
    'From a window or a café, choose a spot on the street and wait 5 minutes until someone “steps into” it. Then shoot.',
  ],
  'ws-landscape': [
    'In landscape you anticipate the light: time, the sun’s position, the weather. A foreground gives depth, and a tripod makes you compose more carefully.',
    'Open a weather app and see what time the sun sets today. Set a reminder half an hour earlier.',
  ],
};
