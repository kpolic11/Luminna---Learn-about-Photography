import type { RichPack } from './types';
import { PH } from './photos';

/** Rich content — English. Modules «Light» and «Composition: the basics». */
export const RICH2_EN: RichPack = {
  lessons: {
    /* ─────────────────────────── LIGHT ─────────────────────────── */
    'exp-light': {
      walks: [
        {
          photo: PH.sidelight2,
          title: 'Light from the side',
          intro: 'A portrait with a single light, from a window on the right. See what is lit and what stays in shadow.',
          ann: [
            { t: 'arrow', x: 0.97, y: 0.12, x2: 0.7, y2: 0.24, c: 'y', label: 'the light', step: 1 },
            { t: 'ellipse', x: 0.6, y: 0.27, rx: 0.12, ry: 0.13, c: 'g', label: 'lit side', step: 1 },
            { t: 'text', x: 0.25, y: 0.62, c: 'w', label: 'shadow = volume', step: 2 },
          ],
          steps: [
            'The light comes from the right. It only catches the edge of the face: nose, lips, cheek.',
            'The other side sinks into shadow. That play of light and shadow gives the face volume, like a sculpture. Lit from the front, the same face would look «flat».',
          ],
        },
        {
          photo: PH.silhouette2,
          title: 'Backlight: a silhouette',
          intro: 'Here the light is behind the subject, in the sunset sky.',
          ann: [
            { t: 'ellipse', x: 0.52, y: 0.5, rx: 0.08, ry: 0.3, c: 'y', label: 'silhouette', step: 1 },
            { t: 'text', x: 0.5, y: 0.1, c: 'w', label: 'the source is behind', step: 2 },
          ],
          steps: [
            'The camera metered the bright sky. The subject, far darker, stayed black: only its shape remains.',
            'A silhouette works when the outline «says» something: here the profile and the hair in the wind. Keep the subject away from other dark shapes so it does not merge with them.',
          ],
        },
      ],
      plays: [
        {
          kind: 'light',
          title: 'Move the lamp',
          intro: 'Bring the light from the front, the side and behind. Then change its size and watch the shadows soften.',
        },
      ],
      tests: [
        {
          kind: 'match',
          q: 'Light direction → what it gives',
          pairs: [
            ['From the front', 'Clean but flat result'],
            ['From the side', 'Volume and texture'],
            ['From behind', 'Rim or silhouette'],
          ],
          why: 'The more sideways the light, the more shadows carve out the volume. From behind, only the outline is lit.',
        },
      ],
    },
    'light-quality': {
      walks: [
        {
          photo: PH.hardshadow0,
          title: 'Hard light: shadows with crisp edges',
          intro: 'The shadow of a tree on the pavement, in cloudless sun.',
          ann: [
            { t: 'circle', x: 0.62, y: 0.3, r: 0.09, c: 'y', label: 'crisp edge', step: 1 },
            { t: 'text', x: 0.5, y: 0.9, c: 'w', label: 'a small source: the sun', step: 2 },
          ],
          steps: [
            'Light turns to shadow abruptly, within a few millimetres. That is «hard» light.',
            'The sun is huge but so far away that it covers a tiny spot in the sky. For the subject it is a small source, so it gives hard light.',
          ],
        },
        {
          photo: PH.softportrait2,
          title: 'Soft light: gentle transitions',
          intro: 'A portrait with a large, close source, such as a window without direct sun.',
          ann: [{ t: 'ellipse', x: 0.4, y: 0.4, rx: 0.22, ry: 0.14, c: 'g', label: 'gradual shadow', step: 1 }],
          steps: [
            'Look at the cheek and the nose: the shadow has no edge, it fades out slowly. Skin flaws are not emphasised. That is why soft light flatters faces.',
          ],
        },
      ],
      plays: [
        {
          kind: 'light',
          title: 'Small or large source?',
          intro: 'Put the light to the side and change only its size. Watch the edges of the shadow on the nose and cheek.',
        },
      ],
      tests: [
        {
          kind: 'match',
          q: 'Source → what light it gives',
          pairs: [
            ['Midday sun, no clouds', 'Hard'],
            ['Overcast sky', 'Soft'],
            ['Bare on-camera flash', 'Hard'],
            ['Large window, no direct sun', 'Soft'],
          ],
          why: 'What counts is the size of the source relative to the subject. Clouds turn the whole sky into one huge source, which is why they soften the light.',
        },
        {
          kind: 'mc',
          q: 'You have a softbox and want even softer light. What do you do?',
          options: ['Move it further from the subject', 'Move it closer to the subject', 'Turn up its power', 'Stop down the aperture'],
          answer: 1,
          why: 'Closer, the source «looks» bigger from where the subject is, so the light gets softer. Power and aperture only change brightness.',
        },
      ],
      phone: 'On a phone: for a portrait, put the person next to a window without direct sun. If the sun is harsh, step into the shade of a building: you will get soft light from the sky.',
    },
    'light-time': {
      walks: [
        {
          photo: PH.golden2,
          title: 'Golden hour',
          intro: 'Mountains just before sunset. The sun is low, near the horizon.',
          ann: [
            { t: 'circle', x: 0.95, y: 0.18, r: 0.09, c: 'y', label: 'low sun', step: 1 },
            { t: 'text', x: 0.38, y: 0.72, c: 'w', label: 'warm light, raking shadows', step: 2 },
          ],
          steps: [
            'The sun is so low that its light passes through a lot of atmosphere. It becomes warmer and gentler.',
            'Because it comes in sideways, slopes and ridges stand out with shadows. The same landscape at noon would look flat and washed out.',
          ],
        },
        {
          photo: PH.bluehour2,
          title: 'Blue hour',
          intro: 'A city just after sunset, when the sun has dropped below the horizon.',
          ann: [
            { t: 'box', x: 0.02, y: 0.02, x2: 0.98, y2: 0.24, c: 'b', label: 'deep blue', step: 1 },
            { t: 'box', x: 0.03, y: 0.26, x2: 0.97, y2: 0.4, c: 'y', label: 'city lights', step: 2 },
          ],
          steps: [
            'The sky still has light, but only the blue of scattered light. It lasts a few minutes.',
            'The city lights are about as bright as the sky. So both show: no black sky, no burnt-out lights.',
          ],
        },
      ],
      tests: [
        {
          kind: 'order',
          q: 'Put the moments of a day in order, from before dawn to evening.',
          items: ['Morning blue hour', 'Sunrise and morning golden hour', 'Noon', 'Afternoon golden hour and sunset', 'Evening blue hour'],
          ends: ['Before dawn', 'Evening'],
          why: 'Blue hour comes when the sun is just below the horizon, golden hour when it is just above. So in the morning blue comes first, in the evening it comes last.',
        },
        {
          kind: 'mc',
          q: 'You want the city with its lights on and a sky that is not black. When do you go?',
          options: ['At 12 noon', 'An hour before sunset', 'Just after sunset', 'At 2 a.m.'],
          answer: 2,
          why: 'Just after sunset (blue hour) the sky and the lights are close in brightness. Later the sky turns black.',
        },
      ],
      phone: 'On a phone: at golden hour slide the sun ☀ down a little so the highlights do not burn. At blue hour rest the phone on something: night mode needs a few seconds of stillness.',
    },
    'exp-whitebalance': {
      walks: [
        {
          photo: PH.tungsten0,
          title: 'The colour of a lamp',
          intro: 'A desk at night, lit only by an incandescent lamp.',
          ann: [
            { t: 'circle', x: 0.5, y: 0.45, r: 0.12, c: 'y', label: 'about 2,700–3,000 K', step: 1 },
            { t: 'text', x: 0.28, y: 0.62, c: 'w', label: 'orange cast', step: 2 },
          ],
          steps: [
            'An incandescent lamp gives «warm» light, about 2,700–3,000 K. Our eyes get used to it within minutes and see it as almost white.',
            'A camera set to daylight (about 5,500 K) records it as it is: orange. Here the photographer kept it on purpose, for the warm mood.',
          ],
        },
      ],
      plays: [
        {
          kind: 'wb',
          photo: PH.tungsten0,
          sceneK: 2900,
          title: 'Correct the colour',
          intro: 'The light in the room is about 2,900 K. Change the camera setting and find where it turns neutral. See what happens if you leave it on «daylight».',
        },
      ],
      tests: [
        {
          kind: 'match',
          q: 'Light source → roughly how many kelvin?',
          pairs: [
            ['Candle', '≈ 1,900 K'],
            ['Incandescent lamp', '≈ 2,700–3,200 K'],
            ['Midday sun', '≈ 5,500 K'],
            ['Shade under a clear sky', '≈ 7,500 K and up'],
          ],
          why: 'Low kelvin = warm, orange light. High kelvin = cool, blue light. Shade is lit only by the blue sky.',
        },
        {
          kind: 'mc',
          q: 'You shoot in a room with incandescent lamps and the image comes out orange. Which white balance setting fixes it?',
          options: ['Cloudy (≈ 6,500 K)', 'Daylight (≈ 5,500 K)', 'Tungsten (≈ 3,200 K)', 'Shade (≈ 7,500 K)'],
          answer: 2,
          why: 'You tell the camera the light is warm, and it adds blue to neutralise it. Higher settings would make it even more orange.',
        },
      ],
    },
    'light-portrait': {
      walks: [
        {
          photo: PH.rembrandt1,
          title: 'Read where the light comes from',
          intro: 'A portrait with one main source. You do not need to see the lamp: you find it from the shadows.',
          ann: [
            { t: 'arrow', x: 0.08, y: 0.08, x2: 0.4, y2: 0.24, c: 'y', label: 'main light', step: 1 },
            { t: 'circle', x: 0.56, y: 0.37, r: 0.04, c: 'g', label: 'nose shadow', step: 2 },
            { t: 'text', x: 0.78, y: 0.55, c: 'w', label: 'shadow side', step: 3 },
          ],
          steps: [
            'The left side of the face (as we see it) is bright: the source is to the left and a little high.',
            'The nose shadow falls to the right and down. The shape of that shadow tells you the lighting pattern.',
            'The other side almost disappears into darkness, because there is no second light or reflector. That gives a dramatic, painterly mood.',
          ],
        },
      ],
      plays: [
        {
          kind: 'light',
          title: 'Paint the nose shadow',
          intro: 'Move the light from the front to the side and watch the nose shadow grow. The order is: butterfly, loop, Rembrandt, split.',
        },
      ],
      tests: [
        {
          kind: 'order',
          q: 'Put the lighting patterns in order as the source moves from the front to the side.',
          items: ['Butterfly', 'Loop', 'Rembrandt', 'Split'],
          ends: ['Front', 'Side'],
          why: 'The more sideways the source, the bigger the nose shadow. In split lighting half the face is in shadow.',
        },
        {
          kind: 'match',
          q: 'Lighting pattern → how you recognise it',
          pairs: [
            ['Butterfly', 'A small shadow right under the nose'],
            ['Loop', 'The nose shadow tilts slightly towards the cheek'],
            ['Rembrandt', 'A bright triangle on the dark cheek'],
            ['Split', 'The face divided in half: half light, half shadow'],
          ],
          why: 'The nose shadow is the «signature» of each pattern. The Rembrandt triangle is named after the painter’s portraits.',
        },
      ],
    },
    'light-key': {
      walks: [
        {
          photo: PH.highkey0,
          title: 'High key',
          intro: 'White background, white clothes, soft light everywhere.',
          ann: [{ t: 'box', x: 0.02, y: 0.02, x2: 0.98, y2: 0.98, c: 'w', label: 'almost every tone is light', step: 1 }],
          steps: [
            'Hardly anything is dark except the hair. Low contrast, a light, calm mood. To get this you usually need +1 to +2 stops of compensation: otherwise the meter will turn it grey.',
          ],
        },
        {
          photo: PH.lowkey1,
          title: 'Low key',
          intro: 'A face emerging from darkness.',
          ann: [{ t: 'ellipse', x: 0.33, y: 0.45, rx: 0.14, ry: 0.3, c: 'y', label: 'only the outline', step: 1 }],
          steps: [
            'A single side light carves out the profile and the hair. Everything else is black. Here you need negative compensation, say −1 to −2 stops, or the camera will lift the black to a noisy grey.',
          ],
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'You shoot a high-key portrait on a white background and it comes out greyish. What do you do?',
          options: ['Negative compensation (−1)', 'Positive compensation (+1 to +2)', 'Change white balance', 'Stop down the aperture'],
          answer: 1,
          why: 'The meter wants to make everything «middle grey». With +1 to +2 stops you tell it the scene is meant to be bright.',
        },
      ],
    },

    /* ─────────────────────────── COMPOSITION: THE BASICS ─────────────────────────── */
    'comp-thirds': {
      walks: [
        {
          photo: PH.thirds2,
          title: 'One tree, a lot of silence',
          intro: 'A lone tree in an open field. Where did the photographer put it?',
          ann: [
            { t: 'box', x: 0.333, y: 0.01, x2: 0.334, y2: 0.99, c: 'w', step: 1 },
            { t: 'box', x: 0.666, y: 0.01, x2: 0.667, y2: 0.99, c: 'w', step: 1 },
            { t: 'box', x: 0.01, y: 0.333, x2: 0.99, y2: 0.334, c: 'w', step: 1 },
            { t: 'box', x: 0.01, y: 0.666, x2: 0.99, y2: 0.667, c: 'w', step: 1 },
            { t: 'circle', x: 0.6, y: 0.57, r: 0.11, c: 'y', label: 'the subject', step: 2 },
            { t: 'text', x: 0.25, y: 0.2, c: 'g', label: 'space to «breathe»', step: 3 },
          ],
          steps: [
            'Two vertical and two horizontal lines divide the frame into nine parts.',
            'The tree is not in the centre. It sits near the right vertical line, with the horizon low, below the bottom line. It does not have to land exactly on it: the rule is a guide, not a ruler.',
            'The empty sky on the left is not «wasted» space. It gives the subject loneliness and calm.',
          ],
        },
      ],
      plays: [
        {
          kind: 'crop',
          photo: PH.thirds2,
          subjectX: 0.6,
          title: 'Crop a square frame',
          intro: 'Slide the frame left and right. Put the tree in the centre, then on a third line. Which do you like better?',
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'A portrait in a horizontal frame, the person looks to the right. Where do you put them?',
          options: ['On the right third, looking out of the frame', 'On the left third, looking into the open space', 'Dead centre, always', 'At the bottom edge'],
          answer: 1,
          why: 'Leave room in front of the gaze. The viewer follows the gaze and wants to «see» where the subject is looking.',
        },
      ],
    },
    'comp-horizon': {
      walks: [
        {
          photo: PH.horizon2,
          title: 'Two thirds sky',
          intro: 'A sea with a heavy, dramatic sky.',
          ann: [
            { t: 'box', x: 0.01, y: 0.68, x2: 0.99, y2: 0.685, c: 'y', label: 'horizon on the lower third', step: 1 },
            { t: 'text', x: 0.5, y: 0.3, c: 'w', label: 'this is where the interest is', step: 2 },
          ],
          steps: [
            'The horizon is straight and falls on the lower third line.',
            'The clouds are the subject, so they get two thirds. If the sea had something interesting, the horizon would move up.',
          ],
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'A sunset with spectacular clouds and an empty, dark sea. Where do you put the horizon?',
          options: ['On the upper third', 'Exactly in the middle', 'On the lower third', 'It does not matter'],
          answer: 2,
          why: 'Give most of the space to what is most interesting: here, the sky. The middle splits the image into two equal, «undecided» halves.',
        },
        {
          kind: 'tap',
          q: 'Tap the horizon.',
          photo: PH.horizon2,
          target: { x: 0.5, y: 0.68, r: 0.12 },
          why: 'The horizon is at 68% of the height, almost on the lower third line.',
        },
      ],
    },
    'comp-lines': {
      walks: [
        {
          photo: PH.lines2,
          title: 'A road that pulls you in',
          intro: 'A straight road across the desert, to the mountains.',
          ann: [
            { t: 'arrow', x: 0.47, y: 0.97, x2: 0.5, y2: 0.5, c: 'y', label: 'the eye follows', step: 1 },
            { t: 'circle', x: 0.5, y: 0.46, r: 0.06, c: 'g', label: 'vanishing point', step: 2 },
            { t: 'text', x: 0.5, y: 0.2, c: 'w', label: 'the destination', step: 3 },
          ],
          steps: [
            'The yellow lines start at the bottom edge, right in front of us. That is where the eye enters the photo.',
            'The lines of the road converge on one point: the vanishing point. They give depth to a flat image.',
            'And they end at the mountains. The line is not the subject; it is the road to the subject.',
          ],
        },
      ],
      tests: [
        {
          kind: 'tap',
          q: 'Tap the point the road leads you to.',
          photo: PH.lines2,
          target: { x: 0.5, y: 0.47, r: 0.12 },
          why: 'All the lines of the road converge on the vanishing point, just below the mountains.',
        },
      ],
      phone: 'On a phone: bring the phone down low, close to the ground or the rails. The line will start more strongly from the bottom edge. The 0.5× (ultra-wide) lens exaggerates the convergence even more.',
    },
    'comp-framing': {
      walks: [
        {
          photo: PH.framing0,
          title: 'An arch as a frame',
          intro: 'A park, photographed through a stone arch.',
          ann: [
            { t: 'box', x: 0.17, y: 0.18, x2: 0.83, y2: 0.62, c: 'y', label: 'the bright subject', step: 1 },
            { t: 'text', x: 0.5, y: 0.8, c: 'w', label: 'dark frame', step: 2 },
          ],
          steps: [
            'The subject, the bright landscape, sits inside the opening.',
            'The arch is darker and closes the view on every side. The eye goes where the light is. It also adds depth: foreground, subject, sky.',
          ],
        },
      ],
      tests: [
        {
          kind: 'tap',
          q: 'Tap the «frame within the frame».',
          photo: PH.framing0,
          target: { x: 0.5, y: 0.4, r: 0.22 },
          why: 'The opening of the arch encloses the landscape like a second frame.',
        },
      ],
      phone: 'On a phone: tap the bright subject inside the opening so the phone meters there. The frame will darken, as it should.',
    },
    'comp-fill': {
      walks: [
        {
          photo: PH.fill0,
          title: 'Fill the frame',
          intro: 'A face so close that nothing else is left.',
          ann: [
            { t: 'circle', x: 0.35, y: 0.42, r: 0.06, c: 'y', step: 1 },
            { t: 'circle', x: 0.62, y: 0.42, r: 0.06, c: 'y', label: 'the eyes', step: 1 },
            { t: 'text', x: 0.5, y: 0.06, c: 'w', label: 'cropped forehead: allowed', step: 2 },
          ],
          steps: [
            'The eyes are close to the upper third and look straight at us. There is no background to distract us.',
            'The head is cropped at the forehead. When you get very close, crop the forehead or hair, never the chin or the eyes.',
          ],
        },
      ],
      tests: [
        {
          kind: 'mc',
          q: 'You want a very tight portrait and the whole head does not fit. What do you crop?',
          options: ['The chin', 'The top of the forehead and the hair', 'One eye', 'The ears and the nose'],
          answer: 1,
          why: 'The viewer fills in the forehead and hair mentally. The chin and eyes matter more for the expression.',
        },
      ],
      phone: 'On a phone: get closer with your feet. Digital zoom (say 10×) just crops the image and ruins the quality. 2× or 3×, if your phone has such a lens, is fine.',
    },
    'comp-simplicity': {
      walks: [
        {
          photo: PH.simple1,
          title: 'One lemon, one colour',
          intro: 'The simplest photograph you can imagine.',
          ann: [
            { t: 'ellipse', x: 0.47, y: 0.69, rx: 0.25, ry: 0.2, c: 'y', label: 'one subject', step: 1 },
            { t: 'text', x: 0.5, y: 0.15, c: 'w', label: 'clean background', step: 2 },
          ],
          steps: [
            'One object, one shape, one colour. The eye finds it instantly.',
            'The background is a single blue surface, nearly complementary to the yellow. The colour contrast makes the subject pop with nothing else needed.',
          ],
        },
      ],
      tests: [
        {
          kind: 'order',
          q: 'Put the checks before you press the shutter in order.',
          items: ['Say in one sentence what you are photographing', 'Move closer or change position to lose what is not needed', 'Check the four edges of the frame', 'Shoot'],
          why: 'First you know the subject, then you remove what does not help it, then you check the edges for cut-off hands, signs or bins.',
        },
      ],
      phone: 'On a phone: before you tap, look at the four edges of the screen. Whatever creeps in at the edge, remove it with one step or a small change of angle.',
    },
    'comp-viewpoint': {
      walks: [
        {
          photo: PH.lowangle0,
          title: 'From below',
          intro: 'The camera is low, looking up.',
          ann: [
            { t: 'ellipse', x: 0.5, y: 0.6, rx: 0.3, ry: 0.32, c: 'y', label: 'a subject that towers', step: 1 },
            { t: 'text', x: 0.5, y: 0.12, c: 'w', label: 'clean background: the sky', step: 2 },
          ],
          steps: [
            'From low down, the person looks taller, stronger, almost monumental.',
            'A gift of the low angle: the background becomes the sky. Cars, signs and clutter disappear.',
          ],
        },
        {
          photo: PH.topdown0,
          title: 'From above',
          intro: 'A beach from high up, looking straight down.',
          ann: [{ t: 'text', x: 0.5, y: 0.5, c: 'w', label: 'the world becomes a pattern', step: 1 }],
          steps: ['From above, depth disappears and people become coloured dots. The image does not show «a beach»; it shows a pattern.'],
        },
      ],
      tests: [
        {
          kind: 'match',
          q: 'Viewpoint → what it gives',
          pairs: [
            ['Low (worm’s-eye view)', 'The subject looks big and strong'],
            ['High (bird’s-eye view)', 'The subject shrinks, patterns appear'],
            ['At the subject’s eye level', 'An equal, honest relationship'],
          ],
          why: 'That is why we photograph children and animals at their height: the relationship becomes equal.',
        },
      ],
    },
    'comp-aspect': {
      tests: [
        {
          kind: 'match',
          q: 'Subject → which frame shape suits it?',
          pairs: [
            ['Panoramic landscape', 'Horizontal, e.g. 16:9'],
            ['Tall building or full-length portrait', 'Vertical'],
            ['Calm, symmetrical composition', 'Square 1:1'],
          ],
          why: 'A wide frame leads the eye sideways, a tall one upwards, a square one keeps it in the centre.',
        },
      ],
    },
  },
  modules: {
    light: {
      missions: [
        ['One face, three lights', 'Photograph someone by a window: with the light in front, at the side and behind them. Which do you like?'],
        ['Hard and soft', 'The same object in the sun and in the shade of a wall. Compare the shadows.'],
        ['Same view, three hours', 'From the same spot: golden hour, noon, blue hour.'],
        ['The colour of home', 'One photo under a lamp with auto white balance and one with «daylight». Which is more truthful? Which has the warmer mood?'],
      ],
      final: [
        {
          kind: 'mc',
          q: 'What makes light «soft»?',
          options: ['Low intensity', 'A large source relative to the subject', 'A warm colour', 'A small aperture'],
          answer: 1,
          why: 'A large source lights the subject from many angles at once, so shadows fade gradually.',
        },
        {
          kind: 'tap',
          q: 'Where is the light source in this photo? Tap the side it comes from.',
          photo: PH.sidelight2,
          target: { x: 0.9, y: 0.25, r: 0.25 },
          why: 'The lit side of the face faces right: that is where the window is.',
        },
        {
          kind: 'order',
          q: 'From the warmest to the coolest light:',
          items: ['Candle', 'Incandescent lamp', 'Midday sun', 'Overcast', 'Shade under a blue sky'],
          ends: ['Warm', 'Cool'],
          why: 'From about 1,900 K to above 7,500 K. Low kelvin = orange, high = blue.',
        },
        {
          kind: 'mc',
          q: 'You want a silhouette at sunset. Where do you meter?',
          options: ['On the subject’s face', 'On the bright sky behind the subject', 'On the ground', 'I use flash'],
          answer: 1,
          why: 'Metering the sky keeps its colours right and leaves the subject as a black shape.',
        },
        {
          kind: 'match',
          q: 'Time → character of the light',
          pairs: [
            ['Golden hour', 'Warm, raking, long shadows'],
            ['Noon', 'Hard, from above, short shadows'],
            ['Blue hour', 'Cool, soft, city lights'],
          ],
          why: 'The height of the sun changes the direction, hardness and colour of the light.',
        },
        {
          kind: 'mc',
          q: 'A low-key portrait on a black background: the camera renders the black as grey. What do you change?',
          options: ['+1 stop compensation', '−1 to −2 stops compensation', 'White balance', 'Nothing, it is right'],
          answer: 1,
          why: 'The meter makes everything middle grey. With negative compensation the black stays black.',
        },
        {
          kind: 'mc',
          q: 'In Rembrandt lighting, what do you see on the shadow side of the face?',
          options: ['Nothing, it is all dark', 'A small bright triangle under the eye', 'A butterfly-shaped shadow', 'A glow on the outline'],
          answer: 1,
          why: 'The nose shadow joins the cheek shadow and leaves a bright triangle. If the triangle disappears, it becomes split lighting.',
        },
      ],
    },
    'comp-basics': {
      missions: [
        ['Centre and thirds', 'One subject, two shots: in the centre and on a third line (turn on the grid in your camera).'],
        ['Line hunting', 'Find three lines that lead you to a subject: a road, a railing, a shoreline.'],
        ['Frame within a frame', 'A subject through a door, a window or branches.'],
        ['Three heights', 'The same subject from low, from eye level and from above.'],
      ],
      final: [
        {
          kind: 'mc',
          q: 'What is the rule of thirds?',
          options: ['Three photos of every subject', 'The subject on a line or intersection of a 3×3 grid', 'The subject filling one third of the image', 'Three colours in every frame'],
          answer: 1,
          why: 'Two horizontal and two vertical lines. The lines and their four intersections are strong positions for the subject.',
        },
        {
          kind: 'tap',
          q: 'Where do the lines of the road lead? Tap the point.',
          photo: PH.lines2,
          target: { x: 0.5, y: 0.47, r: 0.12 },
          why: 'To the vanishing point, in front of the mountains.',
        },
        {
          kind: 'mc',
          q: 'A sea with a flat grey sky and beautiful rocks in the foreground. Where does the horizon go?',
          options: ['On the upper third', 'In the middle', 'On the lower third', 'Out of the frame, always'],
          answer: 0,
          why: 'The interest is below, so you give it two thirds.',
        },
        {
          kind: 'match',
          q: 'Problem → fix',
          pairs: [
            ['The subject is lost, too small', 'Get closer, fill the frame'],
            ['Busy background behind the head', 'Change angle or position'],
            ['Tilted horizon', 'Grid or level'],
            ['The image has no depth', 'Foreground or leading lines'],
          ],
          why: 'Most composition problems are solved with your feet, before you press the shutter.',
        },
        {
          kind: 'mc',
          q: 'You want a child to look like an equal, not «small». Where do you shoot from?',
          options: ['From your own eye level', 'From the child’s eye level', 'From very high', 'From behind'],
          answer: 1,
          why: 'Get down to their height. From above the child shrinks and the relationship becomes unequal.',
        },
        {
          kind: 'mc',
          q: 'What is the most common mistake with frame shape?',
          options: ['Always square', 'Always horizontal, even for tall subjects', 'Always vertical', 'Changing the ratio in editing'],
          answer: 1,
          why: 'The camera «wants» to be held horizontally. Before you shoot, ask: is my subject tall or wide?',
        },
      ],
    },
  },
};
