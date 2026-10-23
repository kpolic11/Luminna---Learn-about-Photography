import type { LessonText } from '../types';

/** School — Level 2 · Colour theory (English) */
export const LAB4B_EN: Record<string, LessonText> = {
  'ct-making': {
    title: 'How colour is “made”: light and ink',
    tagline: 'Additive and subtractive mixing: why the screen and the paper “think” in opposite ways.',
    body: [
      'Colour is not inside objects. It is the way the eye and brain interpret light of different wavelengths. In the 17th century Newton showed, with a prism, that white sunlight contains all the colours of the rainbow. A red apple looks red because it absorbs most wavelengths and reflects mainly the “red” ones.',
      'The human eye has three kinds of cones, sensitive to long, medium and short wavelengths (roughly: red, green, blue). That is why almost all the colours we see can be “made” from three primaries. But there are two ways. In additive mixing you start from black and add light: red, green and blue (RGB). All together they make white. That is how screens and projectors work, and the camera sensor records light through the same three primaries.',
      'In subtractive mixing you start from white paper and add inks that “subtract” light: cyan, magenta and yellow (CMY). All together they make, in theory, black. In practice black ink (K) is added too, which is why we say CMYK. That is how printers work. The two systems are “inverse”: cyan is the opposite of red, magenta of green, yellow of blue. This is also why an image never looks exactly the same on screen and on paper.',
    ],
    bullets: [
      'Additive (RGB): light. Screens, cameras. All together = white.',
      'Subtractive (CMY/CMYK): ink. Printing. All together = dark.',
      'Opposite pairs: red–cyan, green–magenta, blue–yellow.',
      'The painter’s wheel (red-yellow-blue) is an older tradition and does not match the photographic one.',
    ],
    mistakes: [
      'Expecting a print to be as bright and saturated as the screen: paper reflects light, it does not emit it.',
      'Confusing the painter’s wheel with the photographic one: in editing, the opposite of blue is yellow.',
    ],
    keyIdea: 'The screen adds light (RGB), paper subtracts it (CMYK). The opposite pairs, red–cyan, green–magenta and blue–yellow, are the sliders you edit with.',
    tryIt: 'Open a photograph in an editing app and move the “temperature” (blue–yellow) and “tint” (green–magenta) sliders. Notice that they are exactly the opposite pairs.',
    see: ['eggleston', 'leiter'],
    check: [
      {
        id: 'ctm-1',
        question: 'What colour do red, green and blue light make together?',
        options: ['Black', 'White', 'Brown', 'Grey'],
        correctIndex: 1,
        explanation: 'In additive mixing, all the primaries together make white.',
      },
      {
        id: 'ctm-2',
        question: 'On the photographic (RGB) wheel, what is the opposite of blue?',
        options: ['Orange', 'Yellow', 'Green', 'Red'],
        correctIndex: 1,
        explanation: 'That is why the temperature slider runs from blue to yellow.',
      },
    ],
  },

  'ct-hsl': {
    title: 'The three dimensions of colour: hue, saturation, lightness',
    tagline: 'Three words that describe every colour, and the three sliders you will find in every editing app.',
    body: [
      'Every colour can be described by three properties. Hue is what we call “colour” in everyday language: red, yellow, green, blue. Saturation is how “pure” or intense it is: a highly saturated red is fire, a low-saturation one is a dusty pinkish brown. Lightness (or luminance) is how light or dark it is.',
      'These three dimensions work independently, and that is valuable in photography. Two colours with very different hues can have the same lightness. Then, in black and white, they become the same grey and “disappear”. A red flower and dark green leaves, for example a poppy in the grass, can have a similar lightness and almost merge in black and white.',
      'In editing apps, the HSL tool (hue, saturation, luminance) lets you change the three dimensions for each colour range separately. You can, for example, darken only the blue of the sky, soften only the green, or correct skin tones, which lie mainly in the oranges, without touching anything else.',
    ],
    bullets: [
      'Hue: which colour it is.',
      'Saturation: how intense or “pure” it is.',
      'Lightness: how light or dark it is.',
      'HSL in editing: you change each colour separately.',
    ],
    mistakes: [
      'Raising overall saturation: everything turns “fluorescent”, especially faces. Prefer vibrance or per-colour changes.',
      'Forgetting that two different colours with the same lightness will become the same grey in black and white.',
    ],
    phone:
      'With a phone: many editing apps (for example Lightroom Mobile, Snapseed) have an HSL or “selective colour” tool. Try darkening only the blue sky.',
    keyIdea: 'Every colour = hue + saturation + lightness. With HSL you control them separately, for each colour.',
    tryIt: 'In a photograph with sky and greenery, use HSL to darken the sky and reduce the saturation of the green. How does the mood change?',
    see: ['eggleston', 'shore'],
    check: [
      {
        id: 'cth-1',
        question: 'Which property of colour changes if an intense red becomes a “dusty”, faded red?',
        options: ['Saturation', 'Focal length', 'Shutter speed', 'The hue turns blue'],
        correctIndex: 0,
        explanation: 'Saturation describes how intense or “pure” a colour is.',
      },
    ],
  },

  'ct-harmony': {
    title: 'The colour wheel and harmonies',
    tagline: 'Complementary, analogous, triadic: the combinations that “work”, and why.',
    body: [
      'If you arrange hues in a circle, you get the colour wheel. The relationships between colours on that circle describe combinations the eye perceives as “harmonious”. In photography you do not make colours as a painter does. You find them in the world, but you can look for them, compose them in the frame and strengthen them in editing.',
      'Complementary colours sit opposite each other on the wheel, such as blue and yellow or red and cyan. They give maximum colour contrast: each makes the other “pop”. A yellow window in the blue hour is a classic example. Analogous colours are neighbours, like the yellow, orange and red of an autumn forest. They give a calm, unified mood. Triadic colours are evenly spaced on the wheel, every 120°. They are lively but tricky. They work when one colour dominates and the other two accompany it.',
      'Split-complementary colours take one colour and, instead of its exact opposite, the two neighbours of that opposite. They give a softer, “richer” contrast. But remember that harmonies are tools, not laws. A photograph is not good because it “has complementaries”. It is good when colour serves what you want to say.',
    ],
    bullets: [
      'Complementary (opposite): maximum contrast, intensity.',
      'Analogous (neighbours): calm, unity.',
      'Triadic (every 120°): liveliness, with one dominant.',
      'Split-complementary: a softer contrast.',
    ],
    mistakes: [
      'Giving two complementary colours equal area: the image “splits” in two. Usually one dominates and the other accents.',
      '“Making” harmonies with heavy editing, for example the familiar “orange and teal” on every photograph.',
    ],
    keyIdea: 'The wheel shows relationships: opposite = contrast, adjacent = calm. One colour dominates, the others serve it.',
    tryIt: 'Find and photograph three pairs of complementary colours in your neighbourhood, and one scene with analogous colours. Compare their moods.',
    see: ['leiter', 'eggleston', 'alvarez-bravo'],
    check: [
      {
        id: 'cth2-1',
        question: 'Which harmony gives the greatest colour contrast?',
        options: ['Analogous', 'Complementary', 'Monochrome', 'None'],
        correctIndex: 1,
        explanation: 'Complementary colours sit opposite each other on the wheel.',
      },
      {
        id: 'cth2-2',
        question: 'An autumn forest with yellow, orange and red leaves is an example of…',
        options: ['complementary colours', 'triadic colours', 'analogous colours', 'split-complementary colours'],
        correctIndex: 2,
        explanation: 'Neighbouring hues on the wheel: analogous colours.',
      },
    ],
  },

  'ct-warm-cool': {
    title: 'Warm and cool colours',
    tagline: 'Warm colours come forward, cool ones recede: how colour creates depth.',
    body: [
      'We often divide colours into warm (reds, oranges, yellows) and cool (blues, cyans, purples, many greens). The distinction is linked to experience: fire and sun on one side, water, sky and shade on the other. In a picture, warm colours tend to “come forward” and attract attention, while cool colours tend to “recede”.',
      'You can see this in nature: distant mountains look bluer and paler, an effect painters call aerial perspective. In photography you can use it: a subject in a warm colour in front of a cool background stands out and gains depth, even without a blurred background.',
      'Careful: “warm” and “cool” in white balance are measured in kelvin the other way round. Light of a low colour temperature, for example the 2700K of a bulb, is orange, that is “warm” in appearance. Light of a high one, for example 7000K in shade, is blue, that is “cool” in appearance. Do not be confused: “warm” here is an impression, not a physical temperature.',
    ],
    bullets: [
      'Warm: red, orange, yellow. They come forward; energy.',
      'Cool: blue, cyan, purple. They recede; calm, distance.',
      'A warm subject on a cool background = separation and depth.',
      'Kelvin: low = orange, high = blue.',
    ],
    mistakes: [
      '“Warming up” every photograph in editing: you lose the warm–cool contrast that gives depth.',
      'Confusing the “warm” of appearance with degrees kelvin.',
    ],
    keyIdea: 'Warm in front, cool behind: contrast of colour temperature is one of the simplest ways to give depth.',
    tryIt: 'In the blue hour, photograph a friend under a lamp with warm light, with the blue sky or the shade behind them. Set the white balance to ~4000K and see the difference.',
    see: ['leiter', 'sternfeld', 'shore'],
    check: [
      {
        id: 'cwc-1',
        question: 'Which colour tends to “come forward” in a picture?',
        options: ['Blue', 'Red', 'Cyan', 'Purple'],
        correctIndex: 1,
        explanation: 'Warm colours draw the eye and look closer.',
      },
    ],
  },

  'ct-contrasts': {
    title: 'Colour contrasts',
    tagline: 'How a small red spot dominates a green frame: Itten’s contrasts.',
    body: [
      'Johannes Itten, a teacher at the Bauhaus, described seven kinds of colour contrast, which are still used in art schools today. You do not need to memorise them. But it is worth recognising them, because they explain why some photographs “hit” you with their colour.',
      'The most useful for photography: contrast of hue, that is clean, different colours side by side. Light–dark contrast, which is the basis of every image, and in black and white the only one. Warm–cool contrast. Complementary contrast. Contrast of saturation: an intense colour among faded ones. And contrast of extension: a small area of one colour within a large area of another.',
      'There is also simultaneous contrast: a grey looks slightly greenish on a red background and slightly reddish on a green one. The eye “creates” the opposite colour. In photography, contrast of extension is perhaps the most powerful: a small red coat in a grey, snowy landscape dominates the whole frame, precisely because it is small and unique.',
    ],
    bullets: [
      'Hue: different clean colours side by side.',
      'Light–dark: the basis of every image.',
      'Warm–cool and complementary.',
      'Saturation: an intense colour among faded ones.',
      'Extension: a little of one colour within a lot of another.',
      'Simultaneous: the eye “tints” a neutral with the opposite of the background.',
    ],
    mistakes: [
      'Having many intense colours in equal areas: everything shouts and nothing is heard.',
      'Judging a colour on its own, without seeing what is next to it: its surroundings change it.',
    ],
    keyIdea: 'Contrast makes colour speak. A small, unique, intense colour in a calm setting dominates.',
    tryIt: 'Look for and photograph “contrast of extension”: a small, intensely coloured spot, such as an umbrella, a door or a piece of clothing, in a large neutral frame.',
    see: ['leiter', 'parr', 'eggleston'],
    check: [
      {
        id: 'cc-1',
        question: 'A small red coat in a grey snowy landscape is mainly an example of contrast of…',
        options: ['extension', 'light–dark only', 'analogy', 'speed'],
        correctIndex: 0,
        explanation: 'A small area of an intense colour within a large neutral area.',
      },
    ],
  },

  'ct-emotion': {
    title: 'Colour, emotion and culture',
    tagline: 'What each colour “says”, and why it does not say the same everywhere.',
    body: [
      'Colours are linked to feelings and associations. Red with intensity, passion, danger. Blue with calm, distance, melancholy. Yellow with joy and light, but also warning. Green with nature and growth. These associations are a tool: an image dominated by cool blues will be “read” differently from the same image in warm oranges.',
      'But these associations are not universal laws. They depend on culture, era and personal experience. In many Western countries white is linked with weddings and black with mourning. In parts of East Asia white is traditionally a colour of mourning. Red is a colour of joy and good luck in China. Research on colour and emotion shows some tendencies, but also great differences between people.',
      'For a photographer the conclusion is practical: use colour consciously for the mood you want, but do not treat it like a dictionary. What matters is how colour works within your own image: what dominates, what contrasts, what is missing. Many important photographers build their style on a specific, recognisable colour palette.',
    ],
    bullets: [
      'Colour affects mood: use it consciously.',
      'Associations differ between cultures and people.',
      'Look at what dominates, what contrasts and what is missing in your frame.',
    ],
    mistakes: [
      '“Reading” colour like a dictionary, for example “red = love”, without seeing the context of the image.',
      'Changing the colour in editing to be “on trend” when the photograph needed a different mood.',
    ],
    keyIdea: 'Colour conveys mood, but always within a context. Use it consciously, not like a dictionary.',
    tryIt: 'Take one of your photographs and make two versions in editing: one cooler and one warmer. Show them to three people and ask what they feel with each.',
    see: ['eggleston', 'goldin', 'parks'],
    check: [
      {
        id: 'ce-1',
        question: 'Which statement about colour and emotion is most accurate?',
        options: [
          'Every colour has one fixed meaning everywhere',
          'There are tendencies, but associations depend on culture and context',
          'Colour does not affect mood at all',
          'Only red has an emotional effect',
        ],
        correctIndex: 1,
        explanation: 'The associations are real but not universal.',
      },
    ],
  },

  'ct-palette': {
    title: 'A limited palette and monochrome',
    tagline: 'Fewer colours, a stronger picture.',
    body: [
      'One of the most effective “secrets” of colour is restraint. An image with two or three colours, or with one dominant colour in various shades, is almost always stronger than an image in which every colour coexists. The eye knows where to go, and the mood is clear.',
      'A monochromatic image, not black and white, but for example everything in shades of blue, green or ochre, has a special unity and calm. You often find it in nature: fog, snow, desert, the blue hour. In the city, look for walls and surfaces in one colour, and wait for someone to step in wearing clothes of a similar or opposite colour.',
      'Many photographers built their way of seeing on colour. Saul Leiter photographed New York through misted windows and snow, with small spots of intense colour on dark, quiet surfaces. William Eggleston made the very colour of everyday things his central subject, as in the famous “Red Ceiling”. And in editing, a limited palette is often what makes a series of photographs “hang together”.',
    ],
    bullets: [
      'Two or three colours, or one dominant: a clearer mood.',
      'Monochrome: many shades of one colour, not black and white.',
      'Look for surfaces in one colour and wait for the subject.',
      'A shared palette ties a series of photographs together.',
    ],
    mistakes: [
      'Keeping something very colourful in the frame that has nothing to do with the subject, such as a red sign at the edge: it pulls the eye away.',
      'Saturating every colour, instead of choosing which ones to keep.',
    ],
    keyIdea: 'Whatever you take away from the colour strengthens what remains. Fewer colours, a clearer voice.',
    tryIt: 'A “one colour” week: each day, photograph one scene dominated by a single colour, in many shades.',
    see: ['leiter', 'eggleston', 'sugimoto'],
    check: [
      {
        id: 'cp-1',
        question: 'What is a “monochromatic” colour photograph?',
        options: ['A black-and-white photograph', 'An image with many shades of one dominant colour', 'A photograph with no saturation', 'A photograph with flash'],
        correctIndex: 1,
        explanation: 'For example a scene entirely in shades of blue.',
      },
    ],
  },

  'ct-bw': {
    title: 'Black and white as a choice',
    tagline: 'How colours become tones, and when colour distracts.',
    body: [
      'Black and white is not “missing colour”. It is another language. When you remove colour, what remains is light, shadow, shape, texture and gesture. It suits scenes where colour is chaotic or distracting, portraits where you want only the face to remain, and images with strong light and graphic shapes.',
      'In black and white, every colour becomes a tone of grey, according to its lightness. Here lie both the power and the trap: two colours with the same lightness, for example a red flower and green leaves, can become the same grey and “disappear”. In the film era, photographers used coloured filters in front of the lens. A red filter darkens the blue sky and makes the clouds “pop”. Ansel Adams used a deep red filter for his famous photograph “Monolith” (1927), in which the sky turns almost black.',
      'Today the same thing is done in editing, with the black-and-white mix sliders: you darken the blues for a dramatic sky, lighten the oranges for bright skin, separate the red from the green. If you can, shoot in RAW or keep the colour version. Converting to black and white afterwards gives you far more control than a ready-made black-and-white JPEG.',
    ],
    bullets: [
      'Black and white: light, shape, texture, gesture.',
      'Every colour becomes a tone, according to its lightness.',
      'A red filter or dark blues in the mix: a dramatic sky.',
      'Lighter oranges: cleaner skin in a portrait.',
      'Converting from a colour RAW = more control.',
    ],
    mistakes: [
      'Converting a failed photograph to black and white “to save it”: black and white needs strong light and shapes.',
      'A grey, “muddy” image with no real blacks and whites: it usually needs contrast and local adjustments.',
    ],
    phone:
      'With a phone: shoot in colour and convert afterwards, or use a monochrome mode that shows you the image in black and white while you shoot. It helps you “see” the tones.',
    keyIdea: 'Black and white turns colours into tones. With the colour mix, you decide which colour becomes light and which dark.',
    tryIt: 'Take a colour photograph with sky and people. Make two black-and-white versions: one with a dark sky and bright skin, and one the other way round. Which is stronger?',
    see: ['adams', 'cartier-bresson', 'koudelka', 'salgado'],
    check: [
      {
        id: 'cbw-1',
        question: 'What does a red filter do to a blue sky in a black-and-white photograph?',
        options: ['Makes it brighter', 'Darkens it', 'Makes it red', 'Changes nothing'],
        correctIndex: 1,
        explanation: 'A red filter blocks blue light, so the sky darkens and the clouds stand out.',
      },
      {
        id: 'cbw-2',
        question: 'Why can a red flower in the grass “disappear” in black and white?',
        options: ['Because red is not recorded', 'Because the red and the green may have similar lightness', 'Because black and white blurs', 'Because it needs flash'],
        correctIndex: 1,
        explanation: 'Same lightness = same grey. With the colour mix you can separate them.',
      },
    ],
  },
};
