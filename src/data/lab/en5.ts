import type { LessonText } from '../types';

/** School — Level 2: Eye II and Workshops I */
export const LAB5_EN: Record<string, LessonText> = {
  /* ───────── Eye II: reading a photograph ───────── */
  'read-describe': {
    title: 'Description, analysis, interpretation',
    tagline: 'A simple three-step method for “reading” any photograph, yours or someone else’s.',
    body: [
      'When we look at a photograph, we jump straight to judgement: “nice”, “boring”. For decades, art teachers have suggested that we delay that judgement and go through three steps first. One well-known model is that of the American art educator Edmund Feldman: description, analysis, interpretation, and only at the end judgement.',
      'Description: what do I see, without interpretation? “A woman sits on a bench, looking left, light from the right, evening, a wall with posters behind her.” Analysis: how is the image made? Frame, light, colour or tones, depth of field, viewpoint, moment. Where does my eye go first, and why? Interpretation: what do I think it says? Which feeling, which idea? What role do the title, the year and the context play?',
      'This process does two things. It teaches you to look more carefully at other people’s photographs, and so to learn from them. And it teaches you to judge your own with less emotion and more clarity: “I don’t like it” becomes “the eye goes to the wrong corner, because that is where the brightest spot is”.',
    ],
    bullets: [
      '1. Description: what do I see? Facts only.',
      '2. Analysis: how is it made? Frame, light, colour, moment.',
      '3. Interpretation: what does it say? Feeling, idea, context.',
      '4. Judgement: does it work? Why, or why not?',
    ],
    mistakes: [
      'Jumping straight to “I like it / I don’t like it”.',
      'Interpreting before you have seen what is really in the frame.',
    ],
    keyIdea: 'Describe, analyse, interpret, and only then judge. That way you learn from every image.',
    tryIt: 'Choose a photograph from the Encyclopedia and write three paragraphs about it: description, analysis, interpretation. Do the same for one of your own.',
    see: ['lange', 'evans', 'cartier-bresson'],
    check: [
      {
        id: 'rd-1',
        question: '“The eye goes first to the bright window, top right” is an example of…',
        options: ['description', 'analysis', 'interpretation', 'judgement'],
        correctIndex: 1,
        explanation: 'Analysis examines how the image is made and how the eye moves through it.',
      },
    ],
  },

  'read-punctum': {
    title: 'Studium and punctum',
    tagline: 'Why we simply look at some photographs, while others “pierce” us.',
    body: [
      'The French thinker Roland Barthes, in his book “Camera Lucida” (1980), proposed two words, from Latin, for two ways a photograph touches us. The studium is the general, “cultural” interest: we understand what the image shows, its history, its subject; it interests us as it would interest any informed viewer.',
      'The punctum is something else: a detail that “pierces” us personally, often unexpectedly, and that the photographer may not even have planned. A shoe, a glance, a hand, a missing tooth. The punctum is not the same for everyone: what pierces me you may not even notice. Later in the same book, Barthes also wrote about a second kind of punctum: time, the overwhelming awareness that the person in the photograph “was there” and may no longer exist.',
      'For a photographer, these two ideas are useful in two ways. When you look at photographs, ask: what really touches me, and where exactly? And when you photograph, remember that the strongest images often leave room for unexpected details. An over-controlled image, where everything is “in its place”, often has only studium.',
    ],
    bullets: [
      'Studium: general interest. I understand it; it interests me.',
      'Punctum: the detail that touches me personally.',
      'The punctum differs from viewer to viewer.',
      'Time can be a punctum too: “this has been”.',
    ],
    mistakes: [
      'Believing the punctum can be “designed” precisely: it is usually unpredictable.',
      'Removing every “imperfection” in editing: sometimes that is where the image’s life is.',
    ],
    keyIdea: 'The studium interests us; the punctum touches us. Look in photographs for the detail that “pierces” you.',
    tryIt: 'Leaf through old family photographs. Find one that touches you and locate the punctum: which exact detail touches you?',
    see: ['arbus', 'sander', 'atget', 'goldin'],
    check: [
      {
        id: 'rp-1',
        question: 'For Barthes, the punctum is…',
        options: [
          'The general, cultural interest of an image',
          'A detail that touches us personally, often unexpectedly',
          'The technical term for the focus point',
          'The light of the photograph',
        ],
        correctIndex: 1,
        explanation: 'The studium is general interest; the punctum “pierces”.',
      },
    ],
  },

  'read-szarkowski': {
    title: 'The photographer’s eye: Szarkowski’s five ideas',
    tagline: 'What makes photography different from every other art.',
    body: [
      'John Szarkowski, director of MoMA’s department of photography from 1962 to 1991, organised the exhibition “The Photographer’s Eye” in 1964, which became a book in 1966. In it he proposed five ideas that, in his view, characterise photography as a medium. They remain among the best tools for thinking about what a photograph does.',
      'The thing itself: photography shows real things, and its first power is this relationship with reality. The detail: the photographer cannot always tell the whole story, so they choose fragments, and a fragment can become a symbol. The frame: the photographer does not compose, as a painter does, but selects. The frame cuts the world and creates relationships between things that would otherwise have none.',
      'Time: every photograph is a slice of time, from a fraction of a second to hours, and this changes what we see: frozen motion, blur, the “decisive moment”. Vantage point: the position of the camera can make the familiar strange, as with a view from directly above or a very low angle. When you look at a photograph, ask: how does it use each of these five ideas?',
    ],
    bullets: [
      'The thing itself: the relationship with reality.',
      'The detail: the fragment that becomes a symbol.',
      'The frame: selection, not composition from scratch.',
      'Time: a moment or a duration.',
      'Vantage point: the position that changes the way of seeing.',
    ],
    mistakes: [
      'Thinking only about the subject and forgetting the frame, time and angle, which are just as much your choices.',
    ],
    keyIdea: 'Thing, detail, frame, time, vantage point: five questions for understanding what a photograph does, and what you can do.',
    tryIt: 'Make five photographs, one for each of Szarkowski’s ideas: one that simply shows “the thing”, one detail, one where the frame creates an unexpected relationship, one about time, one from an unusual angle.',
    see: ['winogrand', 'friedlander', 'arbus', 'eggleston'],
    check: [
      {
        id: 'rs-1',
        question: 'Which of these is NOT one of Szarkowski’s five ideas?',
        options: ['The frame', 'Time', 'Lens sharpness', 'Vantage point'],
        correctIndex: 2,
        explanation: 'The five are: the thing itself, the detail, the frame, time, vantage point.',
      },
    ],
  },

  'read-light-story': {
    title: 'Light as narrative',
    tagline: 'How light does not just illuminate, but tells us who matters, what time it is, what we feel.',
    body: [
      'In painting, from Caravaggio and Rembrandt to Vermeer, light was used to tell a story: to show which face matters, to create tension, to make an everyday moment almost sacred. Photography inherited this language. When you read a photograph, ask what the light does, not only where it comes from.',
      'Light creates hierarchy: the eye goes first to the brightest point. If that is the face, the story is the person. If it is a window behind them, the story may be loneliness or longing. Light tells time: low golden light says afternoon, nostalgia, an ending. The blue of dawn says beginning, silence. Hard midday light says heat, exposure, tension.',
      'Light creates mood: a face half in light and half in shadow, as in split lighting, can be read as inner conflict or mystery. A face in soft, even light reads as open and calm. Important documentary photographers, such as W. Eugene Smith, worked on light in the darkroom for exactly this reason: to guide the viewer’s eye and emotion.',
    ],
    bullets: [
      'The brightest point = the first thing we see = the “subject” of the story.',
      'The quality and colour of light tell the time and the mood.',
      'Light and shadow on the same face: conflict, mystery.',
      'Control of light continues in editing: you lighten and darken to guide the eye.',
    ],
    mistakes: [
      'Letting the brightest point in the frame be something unimportant, such as a white car at the edge.',
      '“Flattening” the light with excessive HDR or shadow recovery, so the hierarchy is lost.',
    ],
    keyIdea: 'Ask not only “where does the light come from?” but “what does it say?”: what it reveals, what it hides, what time and mood it signals.',
    tryIt: 'Find a photograph that touches you. Mark its three brightest and three darkest areas. What story does this distribution tell?',
    see: ['smith-eugene', 'brassai', 'parks', 'cameron'],
    check: [
      {
        id: 'rls-1',
        question: 'Where does the eye usually go first in a photograph?',
        options: ['To the darkest area', 'To the brightest point', 'Always to the centre', 'To the bottom-left corner'],
        correctIndex: 1,
        explanation: 'That is why light creates the “hierarchy” of the image.',
      },
    ],
  },

  /* ───────── Workshops I ───────── */
  'ws-approach': {
    title: 'How to approach a person: trust and ease',
    tagline: 'The most important portrait tool is not the lens, it is the relationship.',
    body: [
      'Almost nobody feels comfortable in front of a lens. Most people believe they “are not photogenic”, tense up, smile falsely or look away. What shows in a portrait is often the relationship between the photographer and the person, more than any technique. That is why the first minutes are the most important.',
      'Start without the camera, or with the camera down. Talk about the person, not about the photograph: what they do, what they love, where they are from. Explain simply what you will do and how long it will take. Uncertainty causes anxiety. Give them something to do with their hands or somewhere to lean. People relax when they have an activity and not only the lens looking at them.',
      'While you shoot, keep talking and give positive, specific feedback: “that’s lovely, stay like that for a moment” is better than silence, which the other person reads as failure. Do not hide behind the camera: look up, smile, laugh. The first shots are almost always thrown away. Let them be the warm-up. And if something is not working, change something: position, activity, topic of conversation.',
    ],
    bullets: [
      'Conversation first, camera second.',
      'Explain what will happen and how long it will take.',
      'Give them something to do with their hands or to lean on.',
      'Keep talking, positively and specifically.',
      'The first shots are a warm-up.',
    ],
    mistakes: [
      'Fiddling with camera settings while the person waits awkwardly: prepare your equipment beforehand.',
      'Saying “relax!”: it almost always has the opposite effect. Give them something to do.',
      'Silence while shooting: the other person thinks something is going wrong.',
    ],
    phone:
      'With a phone: a phone is less “threatening” than a big camera, and that is an advantage. Show the person one good photograph on the screen early on: they almost always relax.',
    keyIdea: 'A portrait is a relationship: conversation before, guidance in words during, positive feedback always.',
    tryIt: 'Ask a friend if you can take their portrait. First talk for 10 minutes without the camera about something they love. Then photograph while you keep talking. Compare the first shots with the last.',
    see: ['avedon', 'leibovitz', 'arbus', 'karsh'],
    check: [
      {
        id: 'wa-1',
        question: 'The person in front of you is tense. What helps most?',
        options: ['Telling them to “relax”', 'Giving them something to do and talking', 'Staying silent so they can concentrate', 'Firing off many shots very fast'],
        correctIndex: 1,
        explanation: 'Activity and conversation take attention away from the lens.',
      },
    ],
  },

  'ws-portrait': {
    title: 'Portrait workshop: light, lens, background, eyes',
    tagline: 'A simple recipe for portraits that work, and when to break it.',
    body: [
      'Light: the simplest and most flattering portrait light is a large window without direct sun, or open shade outdoors, for example under a canopy, with the face turned towards the bright opening. Place the person so the light comes a little from the side, for Loop or Rembrandt lighting, and look at the reflections in the eyes: those small bright points bring the gaze to life.',
      'Lens and distance: for a head-and-shoulders portrait, stand at least one and a half to two metres away and use a moderate telephoto, about 70–135 mm on full frame. From very close with a wide-angle, the nose grows and the ears “disappear”. Always focus on the eye closer to the camera. With a wide aperture, a centimetre’s error shows.',
      'Background: a simple, calm background, well behind the person, makes the face stand out. Make sure nothing “grows” out of the head, like a pole or a tree. Camera height: at eye level for a neutral relationship, a little higher for a more “vulnerable” look, a little lower for strength. And this recipe is only the beginning: the most memorable portraits often break it, deliberately.',
    ],
    bullets: [
      'Soft side light: a window or open shade.',
      'Catchlights in the eyes.',
      '70–135 mm (on full frame) from 1.5–3 metres.',
      'Focus on the nearer eye.',
      'A simple background, well behind. Nothing “growing” out of the head.',
      'Camera height = relationship with the viewer.',
    ],
    mistakes: [
      'A wide-angle from very close: distortion of the face.',
      'Focusing on the nose or ears instead of the eye.',
      'Sun straight on the face: squinting eyes and hard shadows.',
      'Cropping at the joints, for example exactly at the elbows or knees.',
    ],
    phone:
      'With a phone: prefer the 2× or 3× lens from a little further away, not the 0.5×. Portrait mode blurs the background, but check the hair and glasses, where it often makes mistakes. Tap on the eye to focus.',
    keyIdea: 'Soft side light, a moderate telephoto from a distance, focus on the eye, a calm background. Then break the recipe when you have a reason.',
    tryIt: 'Make three portraits of the same person next to a window: with 35 mm from close up, with 85 mm (or 2–3× on a phone) from 2 metres, and one where you deliberately break a “rule”.',
    see: ['avedon', 'penn', 'karsh', 'cameron', 'keita'],
    check: [
      {
        id: 'wp-1',
        question: 'In a wide-aperture portrait, where do you focus?',
        options: ['On the nose', 'On the eye closer to the camera', 'On the background', 'On the hair'],
        correctIndex: 1,
        explanation: 'If the nearer eye is sharp, the image “reads” as sharp.',
      },
      {
        id: 'wp-2',
        question: 'Why do we avoid a wide-angle very close to the face?',
        options: ['Because it does not focus', 'Because the very short distance it requires enlarges whatever is closest, such as the nose', 'Because it is too dark', 'Because it gives no blurred background'],
        correctIndex: 1,
        explanation: 'The distortion comes from the distance, not from the lens itself.',
      },
    ],
  },

  'ws-street-consent': {
    title: 'Street portraits: permission, respect, and “no”',
    tagline: 'How to ask a stranger if you can photograph them, and what ethics and the law say.',
    body: [
      'A portrait of a stranger in the street is one of the most frightening and most rewarding exercises. The simplest approach is also the most effective: approach with a smile, say honestly what drew you (“You have a wonderful hat”, “The light is beautiful here, would you mind one photograph?”), and how long it will take. Most people are pleasantly surprised. If they like, offer to send them the photograph.',
      '“No” is part of the job. Accept it with a smile, say thank you and move on: it is not a personal rejection. Never insist, and never photograph someone who has refused. Over time, the “no”s hurt less and the “yes”es become more frequent. Street portrait photographers often say the hardest part is the first step, not the other person’s reaction.',
      'Ethics and the law: the rules on photographing, and above all on publishing, recognisable faces differ from country to country. In some countries, such as France, a person’s right to their own image is strictly protected. In the European Union the General Data Protection Regulation (GDPR) also applies, with exemptions for journalistic and artistic purposes that are interpreted differently in each member state. Almost everywhere, commercial use, for example advertising, requires written permission. And beyond the law there are ethics: special care with children, with people in vulnerable situations, in moments of pain. Ask yourself: would I mind being in this photograph, published?',
    ],
    bullets: [
      'Approach with a smile and say what drew you.',
      'Say how long it will take and offer to send the photograph.',
      'Accept “no” politely and move on.',
      'Laws differ by country. Commercial use requires written permission.',
      'Special care with children and vulnerable people.',
    ],
    mistakes: [
      'Photographing “secretly” from a distance with a telephoto to avoid contact: it usually shows, and it does not build the skill you need.',
      'Publishing photographs of people in difficult moments without thinking about the consequences.',
    ],
    keyIdea: 'Honesty, courtesy and respect for “no”. The law differs by country, ethics do not: photograph others as you would want to be photographed.',
    tryIt: 'The “10 strangers” exercise: ask ten strangers if you can photograph them. Count the “yes”es and “no”s, and write down what you said to each. What worked?',
    see: ['sander', 'mary-ellen-mark', 'arbus', 'model'],
    check: [
      {
        id: 'wsc-1',
        question: 'A stranger refuses to be photographed. What do you do?',
        options: ['Insist politely', 'Photograph them from a distance', 'Thank them and move on', 'Explain the law to them'],
        correctIndex: 2,
        explanation: '“No” is always respected.',
      },
      {
        id: 'wsc-2',
        question: 'Which use of a photograph with a recognisable face almost always requires written permission?',
        options: ['A personal keepsake', 'Commercial use, for example advertising', 'An exercise for a class', 'None'],
        correctIndex: 1,
        explanation: 'Commercial use requires a model release.',
      },
    ],
  },

  'ws-street': {
    title: 'Street workshop: the moment, patience, a ready camera',
    tagline: 'How street photographers work: settings that do not slow you down, and the art of waiting.',
    body: [
      'Street photography is the art of the unpredictable: you control neither the subject, nor the light, nor the moment. But you can prepare so that, when the moment comes, the camera does not hold you back. A classic solution is zone focusing: with a wide-angle, for example 28 or 35 mm, an aperture of f/8 and focus set at about 3 metres, anything within a large range of distances will be sharp enough, without waiting for autofocus. A shutter speed of 1/250 or faster to “freeze” people walking, and auto ISO.',
      'The other great technique is patience. Many street photographers do not “hunt” subjects, but find a stage, that is an interesting light, a wall, a corner, a poster, and wait for someone to step into it. Henri Cartier-Bresson spoke of the “decisive moment”: recognising, in a fraction of a second, the significance of an event and its right form within the frame.',
      'Get closer. The most common weakness of street photographs is that they are taken from far away, with the subject lost. With a wide-angle you are necessarily close, inside the scene. Move calmly, do not hide, and if someone sees you and is bothered, smile, show the photograph or delete it. The respect we learned in the previous lesson applies here too.',
    ],
    bullets: [
      'Wide-angle 28–35 mm, f/8, focus at ~3 m (zone).',
      '1/250 s or faster, auto ISO.',
      'Find a stage and light, and wait.',
      'Get close: inside the scene, not across the street.',
      'Respect: if someone is bothered, show or delete.',
    ],
    mistakes: [
      'A telephoto from across the street: distant, “hidden” photographs without tension.',
      'Constantly hunting subjects instead of staying with a good stage.',
      'Photographing only people who look “unusual”: you risk turning them into caricatures.',
    ],
    phone:
      'With a phone: it is ideal for the street, because it is silent and discreet. Use the main lens (1×), lock focus and exposure by pressing and holding on a point in the scene, and wait. Burst mode helps with fast moments.',
    keyIdea: 'Prepare the camera so it does not slow you down, find a stage and light, get close, and wait for the moment.',
    tryIt: 'Find a stage with interesting light, for example a strip of sun or a shop window, and stay there for 30 minutes with zone focusing. At the end, choose just one photograph.',
    see: ['cartier-bresson', 'winogrand', 'maier', 'moriyama', 'kertesz', 'doisneau'],
    check: [
      {
        id: 'wst-1',
        question: 'What is “zone focusing”?',
        options: [
          'Autofocus on faces',
          'Presetting focus, for example at 3 m with f/8, so a large zone is sharp without waiting',
          'Focusing at infinity',
          'Focusing only with a phone',
        ],
        correctIndex: 1,
        explanation: 'With a closed aperture and a wide-angle, the depth of field covers a long distance.',
      },
    ],
  },

  'ws-landscape': {
    title: 'Landscape workshop: planning, light, foreground',
    tagline: 'In landscape you do not wait for the moment, you predict it: time, weather, position.',
    body: [
      'Landscape photography is mostly planning. The same mountain is dull at midday and magical in the golden hour or after a storm. Landscape photographers use apps that show where and when the sun or moon will rise and set, weather and cloud forecasts, and often visit a spot many times before finding the right light. They often arrive before sunrise and stay until the blue hour.',
      'The biggest problem with landscape photographs is that the huge, impressive landscape becomes small and flat in the picture. The solution is usually a foreground: a rock, flowers, a waterline, which gives scale and depth and leads the eye into the distance. With a wide-angle and focus near the hyperfocal distance, for example at f/8–f/11, you keep both the foreground and the mountains sharp.',
      'Tripod: in the low light of dawn and dusk it is almost essential, and it forces you to slow down and compose carefully. A polarising filter darkens the sky and cuts reflections on water and leaves. A neutral density (ND) filter allows long exposures for silky water or moving clouds. And one rule for everyone: leave no trace, and never damage nature for a photograph.',
    ],
    bullets: [
      'Plan: time, sun position, weather. Visit many times.',
      'Golden and blue hour, or just after a storm.',
      'A foreground for scale and depth.',
      'Wide-angle, f/8–f/11, focus near the hyperfocal distance.',
      'Tripod, polariser, ND for movement.',
      'Leave no trace.',
    ],
    mistakes: [
      'The horizon in the middle and nothing in the foreground: a “flat” picture.',
      'Photographing only what you see as you arrive, without looking for a position.',
      'Over-saturating in editing: landscapes easily become unnatural.',
    ],
    phone:
      'With a phone: the ultra-wide (0.5×) makes excellent foregrounds if you get very close. Brace yourself against something in low light, and if available, use night mode or long exposure for moving water.',
    keyIdea: 'In landscape, you predict the light rather than wait for it. Foreground, depth of field and patience make the big landscape “fit” into the photograph.',
    tryIt: 'Choose a landscape near you and photograph it three times: at midday, in the golden hour and in the blue hour, always with a foreground. Compare.',
    see: ['adams', 'adams-robert', 'burtynsky', 'weston', 'osullivan'],
    check: [
      {
        id: 'wl-1',
        question: 'What usually gives a “flat” landscape depth?',
        options: ['A higher ISO', 'An interesting foreground', 'The horizon exactly in the middle', 'Flash'],
        correctIndex: 1,
        explanation: 'The foreground gives scale and leads the eye into the distance.',
      },
    ],
  },
};
