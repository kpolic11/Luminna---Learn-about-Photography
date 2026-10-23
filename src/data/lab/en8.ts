import type { LessonText } from '../types';
import { LAB8B_EN } from './en8b';

/** School — Level 4: studio, directing */
const LAB8A_EN: Record<string, LessonText> = {
  /* ───────── Studio lighting ───────── */
  'st-one-light': {
    title: 'One light: how much you can do',
    tagline: 'Before three lights, learn to do everything with one, and a reflector.',
    quick:
      'With one main light and a reflector you can make almost any classic portrait. The secrets: distance (softness and fall-off on the background), angle (lighting pattern), and “feathering”, that is, lighting with the edge of the softbox instead of its centre, for a gentler transition.',
    challenge:
      'With a lamp or a window, photograph a face three times: with the light aimed straight at it, with the light slightly “turned” so its edge lights the face, and with a white reflector on the other side.',
    body: [
      'Most beginners in the studio buy three lights and light everything. Most professionals start with one. One main light (key light) in a softbox or umbrella, in the right position, together with a reflector, is enough for all the classic patterns we learned: Butterfly, Loop, Rembrandt, Split. And it forces you to see what the light really does.',
      'Three parameters control the result. Distance: the closer the softbox, the softer the light and the darker the background (inverse square). Angle and height: they define the lighting pattern. And direction within the source: if you turn the softbox so the face is lit by its edge rather than its centre, “feathering”, the transition from light to shadow becomes gentler and the fall-off on the body smoother.',
      'The reflector is the second “light” that needs no power. White for natural fill, silver for stronger and cooler, gold for warm, which easily becomes excessive. A reflector under the face in a Butterfly pattern gives the classic “clamshell” beauty light. A black cloth or card in place of the reflector (negative fill) does the opposite: it deepens the shadows for more drama.',
    ],
    bullets: [
      'One light + reflector = all the classic patterns.',
      'Distance: softness and background brightness.',
      'Angle and height: lighting pattern.',
      'Feathering: light with the edge of the source.',
      'Reflector: white, silver, gold. Black for negative fill.',
    ],
    mistakes: [
      'Adding lights before understanding what the first one does.',
      'A softbox far away “to light the whole body”: it becomes a small source and hard light.',
      'A gold reflector on every portrait: “sunburnt”, unnatural skin.',
    ],
    keyIdea: 'One well-placed light and a reflector do more than three lights used without thought. Distance, angle and feathering are your tools.',
    tryIt: 'Make a series of 5 portraits with a single light and a reflector, one for each lighting pattern and one clamshell. Note the position of the light for each.',
    see: ['karsh', 'penn', 'avedon'],
    check: [
      {
        id: 'so-1',
        question: 'What is “feathering” a softbox?',
        options: ['A filter that makes the light warm', 'Lighting the subject with the edge of the source instead of its centre', 'Putting feathers on the background', 'Raising the power'],
        correctIndex: 1,
        explanation: 'That way the transition from light to shadow becomes gentler.',
      },
    ],
  },

  'st-three-lights': {
    title: 'Three lights: key, fill, rim (and background)',
    tagline: 'The classic set-up of cinema and portraiture: each light with one role.',
    quick:
      'Key light: gives shape and mood. Fill: opens the shadows, defining how much drama the image has. Rim (hair light): from behind, separates the subject from the background. A fourth is often added, for the background. Each light with a purpose, and you switch them on one at a time.',
    challenge:
      'On paper, draw a floor plan of a studio with three lights for a Rembrandt portrait: where does each go relative to the person and the camera?',
    body: [
      '“Three-point lighting” was born in cinema and the portrait studios of the 20th century, and remains the foundation. The key light is the largest source, usually in a softbox, to the side and high up: it defines the lighting pattern and the mood. The fill light is weaker, often close to the camera axis or on the opposite side: ideally it creates no visible shadows of its own, it just opens those the key made. Their relationship defines the contrast (see the next lesson).',
      'The rim light, or hair light, comes from behind and above, opposite the camera, and “etches” a thin line of light on the hair and shoulders. This separates the subject from a dark background and gives a three-dimensional feel. Make sure it does not hit the lens: use a flag or a grid. A fourth light on the background controls its brightness and colour, e.g. a soft “pool of light” behind the head.',
      'The working method matters more than the lights themselves: switch on one light at a time. First the key, alone, until you like it. Then the rim, then the background, and last the fill, as little as needed. If a light does not add something specific, switch it off. Most “bad” studio portraits have too many lights, which flatten the face.',
    ],
    bullets: [
      'Key: shape and mood.',
      'Fill: how much the shadows open.',
      'Rim: separation from the background.',
      'Background: brightness and colour of the background.',
      'One light at a time. Switch off whatever does not add.',
    ],
    mistakes: [
      'Fill as strong as the key: a flat face with no shape.',
      'A rim light hitting the lens: hazy, low contrast.',
      'Switching on all the lights together from the start: you do not know what each one does.',
    ],
    keyIdea: 'Each light has a role: the key gives shape, the fill sets contrast, the rim separates. One light at a time, and switch off what you do not need.',
    tryIt: 'If you have three sources (even household lamps), set up a portrait switching the lights on one by one. Photograph after each addition. Which light changed the image most?',
    see: ['leibovitz', 'newton', 'karsh'],
    check: [
      {
        id: 'st3-1',
        question: 'What is the role of the rim light?',
        options: ['To open the shadows on the face', 'To separate the subject from the background with a line of light from behind', 'To light the background', 'To define the lighting pattern'],
        correctIndex: 1,
        explanation: 'It comes from behind and above and “etches” the outlines.',
      },
    ],
  },

  'st-ratios': {
    title: 'Lighting ratios: how much contrast the face has',
    tagline: 'How much brighter the lit side is than the shadow side, measured in stops.',
    quick:
      'The lighting ratio says how much brighter the lit side of the face is than the shadow side. 1 stop difference (2:1) = soft, friendly. 2 stops (4:1) = classic, with shape. 3 stops (8:1) and above = dramatic. It is controlled with the power or distance of the fill.',
    challenge:
      'In one of your portraits with side light, measure in your editing program (with the eyedropper or histogram) the brightness of the lit cheek and the shadowed one. Roughly how many stops apart are they?',
    body: [
      'Two portraits with the same lighting pattern, e.g. Rembrandt, can have completely different moods: one soft and friendly, the other dark and dramatic. The difference is how “open” the shadows are, that is, the difference in brightness between the lit and the shadow side. Photographers express it as a lighting ratio or, more simply, in stops.',
      'Each stop doubles the ratio: a 1-stop difference corresponds to 2:1, 2 stops to 4:1, 3 stops to 8:1. In practice: around 2:1 the face is soft, almost without shadows. Suitable for beauty, children, high key. Around 3:1 to 4:1 it has clear shape, and this is the “classic” portrait. From 8:1 upwards the shadows become almost black: low key, drama, film noir. Definitions of the ratio differ slightly between manuals, but the logic in stops is the same everywhere.',
      'You control the ratio with the fill: more power, or a reflector closer, for a lower ratio. Less power, a reflector further away or a black cloth for a higher one. With a hand-held meter you measure each side exactly (next lesson). Without one, the camera screen and histogram give a good estimate, and the eye, with practice, learns to “read” them.',
    ],
    bullets: [
      '1 stop = 2:1 · 2 stops = 4:1 · 3 stops = 8:1.',
      '~2:1: soft, beauty, children.',
      '~3:1 – 4:1: classic portrait with shape.',
      '8:1+: drama, low key.',
      'Controlled with the power or distance of the fill.',
    ],
    mistakes: [
      'The same ratio in every portrait, regardless of the person and the mood.',
      'Too high a ratio on dark skin without checking: the shadows lose all detail. Measure and adjust.',
    ],
    keyIdea: 'The lighting ratio is the portrait’s “intensity”: each stop of difference doubles the contrast. You control it with the fill.',
    tryIt: 'Keep the key light fixed and photograph the same face with three fills: a white reflector close, a white reflector far, a black cloth. Rank the photographs from softest to most dramatic.',
    see: ['karsh', 'avedon', 'penn'],
    check: [
      {
        id: 'sr-1',
        question: 'A 2-stop difference between the lit and shadow side corresponds to a ratio of…',
        options: ['2:1', '4:1', '8:1', '1:1'],
        correctIndex: 1,
        explanation: 'Each stop doubles: 2 × 2 = 4.',
      },
    ],
  },

  'st-meter': {
    title: 'The hand-held light meter: incident metering',
    tagline: 'The camera’s meter measures how much light the subject reflects. A hand-held meter measures how much light falls on it.',
    quick:
      'The camera’s meter measures reflected light, so it is “fooled” by dark and light subjects. A hand-held meter, with its white dome, measures the light falling on the subject, so it gives correct exposure regardless of the subject’s colour. In the studio it also measures flash, and lets you measure the lighting ratio.',
    challenge:
      'Photograph a black and a white object side by side, with the camera metering first on one and then on the other. The exposure changes, although the light is the same. That is exactly the problem incident metering solves.',
    body: [
      'As we learned in metering, the camera’s meter measures the light reflected from the subject, and assumes the subject is “middle grey”. That is why it darkens snow and lightens a black dress. A hand-held meter in incident mode does something else: you hold it at the subject’s position, with the white dome facing the camera, and it measures how much light arrives there. The exposure it gives is correct for any subject, white, black or anything in between, because it does not depend on what the subject reflects.',
      'In the studio, a hand-held meter also measures the brief burst of studio flash, which the camera’s meter cannot measure before the shot (the camera’s TTL flashes are metered with a pre-flash). And it measures each light separately: switch on only the key and measure, only the fill and measure, and you have the lighting ratio in numbers. Metering at the background, you know whether it will come out white, grey or black before you even shoot. This makes the work repeatable: next time you set up the same numbers and get the same result.',
      'Many hand-held meters also have a reflected spot-metering mode, useful for landscapes or for the Zone System method. Do you need a hand-held meter? For natural light and everyday photography, the histogram and screen are enough. For studio flash, for film, and for anyone who wants precision and consistency, it is one of the most useful tools.',
    ],
    bullets: [
      'Reflected (camera): depends on the subject’s colour.',
      'Incident (hand-held meter): at the subject’s position, dome towards the camera.',
      'Measures flash and each light separately: lighting ratios in numbers.',
      'Also measures the background: white, grey or black?',
      'Repeatable results.',
    ],
    mistakes: [
      'Pointing the dome at the light instead of the camera when you want the overall exposure.',
      'Measuring from the camera position instead of the subject position.',
    ],
    keyIdea: 'Incident light is not fooled by the subject’s colour. With a hand-held meter you measure flash, lighting ratios and background, and repeat whatever worked.',
    tryIt: 'If you have or can borrow a hand-held meter, set up a portrait, measure key and fill separately and work out the ratio. If not, use a grey card at the face position and spot-meter on it with the camera.',
    see: ['adams'],
    check: [
      {
        id: 'sm-1',
        question: 'Why is incident metering not “fooled” by a black dress?',
        options: ['Because it uses flash', 'Because it measures the light falling on the subject, not what it reflects', 'Because it is electronically more accurate', 'Because it measures only the centre'],
        correctIndex: 1,
        explanation: 'The light reaching the subject is the same, whatever its colour.',
      },
    ],
  },

  'st-modifiers': {
    title: 'Light modifiers: softbox, umbrella, beauty dish, grid, flags',
    tagline: 'Light is shaped not only by the source, but by whatever you put in front of it.',
    quick:
      'The size of the modifier defines softness. Its shape defines the “catchlight” in the eyes and the fall-off of the light. Softbox and octabox: soft, controlled. Umbrella: soft, everywhere. Beauty dish: a little crisper, luminous. Grid and snoot: a narrow beam. Flags: cut light where you do not want it.',
    challenge:
      'Look closely at the eyes in magazine portraits or by photographers you admire. The shape of the reflection (rectangular, round, ring) tells you which modifier was used. Find three different ones.',
    body: [
      'Light modifiers change the size, shape and direction of the source. The softbox is a box with diffusing fabric: soft, directional light, with a rectangular catchlight in the eyes. The octabox, octagonal, gives a round, more natural catchlight. Long, narrow strip boxes light outlines and full-length portraits. The umbrella, either reflective or shoot-through, is cheap and quick, but spreads light everywhere, even where you do not want it.',
      'The beauty dish, a metal dish with a small reflector at its centre, gives a crisper light than a softbox of the same size, with a glow on the skin, and is used a lot in fashion and beauty. Grids go in front of softboxes or reflectors and narrow the beam: the light falls only where you aim it, without “spilling” onto the background. The snoot, a tube, makes a small, concentrated spot of light, and barn doors cut the edges of the beam.',
      'Taking light away is as important as adding it. Flags, black cloths or cards, stop light falling where you do not want it: on the lens, the background, the floor. V-flats, large free-standing panels, white on one side and black on the other, serve both as huge reflectors and as negative fill. And one last choice: continuous LED lights, where you see what you will get and which also serve for video, or studio flash, with far more power and the ability to “freeze” movement.',
    ],
    bullets: [
      'Softbox / octabox / strip: soft, controlled, different catchlights.',
      'Umbrella: cheap, quick, spreads everywhere.',
      'Beauty dish: luminous, a little crisper.',
      'Grid, snoot, barn doors: narrow and control the beam.',
      'Flags and V-flats: subtract or reflect light.',
      'LED: what you see is what you get. Flash: power and freezing motion.',
    ],
    mistakes: [
      'Buying many modifiers before learning one well.',
      'An umbrella in a small room with white walls when you want drama: the light bounces everywhere.',
      'Forgetting flags: light hitting the lens and hazing the image.',
    ],
    keyIdea: 'Size = softness, shape = catchlight and fall-off, grids and flags = control. Taking light away is as important as adding it.',
    tryIt: 'Make your own modifiers: a piece of white fabric as a diffuser, a black card as a flag, a roll of paper as a snoot. Photograph the same object with each.',
    see: ['penn', 'avedon', 'newton'],
    check: [
      {
        id: 'smd-1',
        question: 'What does a grid in front of a softbox do?',
        options: ['It makes the light softer', 'It narrows the beam so the light does not “spill” onto the background', 'It changes the colour', 'It increases the power'],
        correctIndex: 1,
        explanation: 'The grid directs the light while keeping the source’s softness.',
      },
    ],
  },

  /* ───────── Directing & the psychology of the portrait ───────── */
  'dr-language': {
    title: 'The language of directing',
    tagline: 'How to speak so the other person understands at once what you want, and feels good doing it.',
    quick:
      'Direct with few, positive and specific instructions. Show the pose with your own body (the other person becomes a “mirror”), use reference points instead of “left–right” (“turn towards the window”), and give images or actions instead of “poses”.',
    challenge:
      'Write five instructions you would give someone for a portrait, without the words “relax”, “smile” and “left/right”. E.g. “Bring your chin a little towards me.”',
    body: [
      'Directing is a communication skill, not a photographic one. Most people do not know what to do in front of the lens, and expect you to tell them clearly. The best instructions are few, one at a time, positive (“bring your shoulder back” instead of “don’t slouch”) and specific. The biggest trap is “left–right”: your right is their left. Use points in the space: “turn towards the window”, “look at the lamp”.',
      'The quickest way to explain a pose is to show it: stand the way you want them to stand, and ask them to “mirror” you. People imitate more easily than they follow descriptions. And instead of “poses”, give actions and images: “walk towards me as if you’ve spotted a friend in the distance”, “think of the last time you laughed a lot”, “lift the cup as if it’s warming you”. Actions bring natural expressions; “pose” instructions bring stiffness.',
      'Keep talking, in a positive and sincere tone. A photographer’s silence is almost always read as “something is wrong”. When something works, say so at once: “that’s lovely, stay like that”. When it does not, change something without showing disappointment: “let’s try something else”. And never touch someone to “correct” a pose without asking first. Even when you have permission, demonstrating is almost always better.',
    ],
    bullets: [
      'Few, positive, specific instructions, one at a time.',
      'Points in the space instead of “left–right”.',
      'Show the pose: they mirror you.',
      'Actions and images instead of “poses”.',
      'Keep talking. Confirm what works.',
      'Never touch without asking.',
    ],
    mistakes: [
      'Many instructions at once: “chin down, shoulder back, hand on hip, smile…”.',
      '“Smile!”: it brings a fake smile. Say something that will bring a real one.',
      'Correcting by touching without permission.',
    ],
    keyIdea: 'Directing = clear, positive communication. Show, don’t describe. Give actions, not poses. And keep talking.',
    tryIt: 'In a shoot with a friend, use only actions and images, no pose instructions, for 15 minutes. Compare the expressions with your earlier portraits.',
    see: ['leibovitz', 'avedon'],
    check: [
      {
        id: 'dl-1',
        question: 'Which instruction is most effective?',
        options: ['“Turn right”', '“Turn towards the window”', '“Relax”', '“Don’t be tense”'],
        correctIndex: 1,
        explanation: 'A point in the space cannot be confused with your own side, and it is positive and specific.',
      },
    ],
  },

  'dr-posing': {
    title: 'Poses that don’t look posed',
    tagline: 'Small changes in the body that make a person look natural, at ease and themselves.',
    quick:
      'A few simple principles: the body turned slightly away from the camera (not square on), the weight on the back foot, gaps between the arms and the body, the hands doing something, the chin slightly forward and down. The goal is not the “pose”, but for the person to look as they do at their best moments.',
    challenge:
      'Stand in front of a mirror and photograph yourself (or ask someone): once square on with your arms pressed to your body, and once turned slightly, weight on the back foot and one hand in a pocket. What changes?',
    body: [
      'The camera “widens” and “flattens” whatever stands square on to it. That is why almost all classic portraits have the body turned slightly, about 30–45°, and the face closer to the lens or turned towards it. Weight on the back foot gives a relaxed, slightly “broken” shape, instead of the stiffness of standing “to attention”. A small gap between the arms and the body makes the silhouette cleaner.',
      'Hands are most people’s biggest worry. Give them something to do: lean, hold something, go into a pocket, lightly touch the face or hair. Hands look more elegant when we see their side, not the palm or back straight on. For the face, a well-known tip is the chin slightly forward and slightly down: it stretches the jawline. And a slight “narrowing” of the lower eyelids, which photographer Peter Hurley popularised as the “squinch”, gives the gaze confidence, unlike “frightened” wide-open eyes.',
      'But these are starting points, not rules. Every body is different, and the goal is not to “fix” anyone, but to help them feel and look at ease. Never comment negatively on someone’s body. Ask what they like and dislike in photographs of themselves. And often, the best images come between the “poses”, when the person laughs, shifts position or looks away. Don’t lower the camera.',
    ],
    bullets: [
      'Body 30–45° from the camera, not square on.',
      'Weight on the back foot.',
      'Gaps between arms and body.',
      'Hands with a “job”. The side of the hand towards the camera.',
      'Chin slightly forward and down.',
      'The best moments are often between the poses.',
    ],
    mistakes: [
      'Applying the same “rules” to everyone, without asking what they like.',
      'Negative comments about someone’s body, even “for their own good”.',
      'Lowering the camera right after each pose.',
    ],
    keyIdea: 'A few principles, angle, weight, hands, chin, help anyone look at ease. The goal is the person themselves, not a pose.',
    tryIt: 'Make a series of 10 portraits of a friend, changing only one parameter each time: body angle, weight, hands, chin. Show them and ask which they like most and why.',
    see: ['avedon', 'leibovitz', 'newton'],
    check: [
      {
        id: 'dp-1',
        question: 'Why do we usually turn the body slightly away from the camera?',
        options: ['So the background shows', 'Because a square-on stance “widens” and “flattens” the silhouette', 'To fit the hands in', 'For lighting reasons only'],
        correctIndex: 1,
        explanation: 'The angle gives shape and a more relaxed silhouette.',
      },
    ],
  },

  'dr-client': {
    title: 'Working with a client: expectations, nerves, vulnerable people',
    tagline: 'A shoot begins long before the first frame and ends long after.',
    quick:
      'Before: a conversation, a brief, a moodboard, what to wear, how long it will take, what they will receive and when. During: a warm welcome, show a good frame early, “how are you doing?” check-ins. After: delivery as agreed. With children and vulnerable people: time, play, familiar people present, absolute respect for boundaries.',
    challenge:
      'Write a short half-page “preparation guide” for a portrait client: what to bring, what to wear, where and when, how long it takes, what they will receive.',
    body: [
      'Most of a client’s anxiety comes from the unknown: what will happen, what to wear, whether they will “look good”. Good preparation resolves it before you get to the shoot. A conversation or a short questionnaire: what they need the photographs for, where they will be used, what style they like. A moodboard with examples, so you are talking about the same thing. And clear practical information: clothes (plain colours, no big logos, one or two alternatives), duration, location, what they will receive and when.',
      'On the day of the shoot: welcome the person warmly, and do not start with the equipment. What we learned about approaching and directing applies here doubly. Show a good frame on the screen early: it almost always changes the mood. Make small check-ins: “how are you? want a break?”. If someone is very nervous, slow the pace, talk about other things, and start with something that requires no “pose”.',
      'Children need a different approach: get down to their height, make the shoot a game, keep it short, and make sure a parent or guardian is always present. With people in a vulnerable position, such as the ill, the elderly, people in mourning or with experiences of trauma, time, honesty about where the photographs will be used and absolute respect for their boundaries matter more than any technique. And after the shoot: deliver how and when you agreed. Reliability is the best marketing.',
    ],
    bullets: [
      'Before: brief, moodboard, practical information.',
      'During: warm welcome, a good frame early, check-ins.',
      'Nervous people: a slower pace, conversation, no poses at first.',
      'Children: their height, play, short, a parent present.',
      'Vulnerable people: time, honesty, respect for boundaries.',
      'After: delivery as agreed.',
    ],
    mistakes: [
      'Not saying in advance what the client will receive and when: misunderstandings later.',
      'Promising “I’ll fix you in Photoshop” instead of working on light and pose.',
      'Pressing a nervous person to “carry on a bit longer”.',
    ],
    keyIdea: 'A client relaxes when they know what will happen. Preparation, warmth, check-ins, respect for boundaries, and delivery as agreed.',
    tryIt: 'Do a “trial” shoot with a friend as if they were a client: a brief beforehand, a preparation guide, the shoot, and delivery on a specific day. Ask them to tell you honestly what made them nervous.',
    see: ['mary-ellen-mark', 'leibovitz'],
    check: [
      {
        id: 'dc-1',
        question: 'Where does most of a client’s anxiety before a shoot come from?',
        options: ['The equipment', 'The unknown: what will happen, what to wear, whether they will look good', 'The price', 'The weather'],
        correctIndex: 1,
        explanation: 'Good preparation answers these before the shoot.',
      },
    ],
  },
};

export const LAB8_EN: Record<string, LessonText> = { ...LAB8A_EN, ...LAB8B_EN };
