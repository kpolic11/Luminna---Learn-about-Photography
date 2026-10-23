import type { GenreId, GenreText } from '../types';

export const GENRES_EN: Record<GenreId, GenreText> = {
  portrait: {
    title: 'Portrait',
    summary: 'The person in front of the lens: face, character, relationship.',
    body: [
      'The portrait is one of photography’s first genres: as early as the 1840s, daguerreotype studios offered the middle classes a portrait that had once been the privilege of those who could pay a painter. From Julia Margaret Cameron and Nadar to Avedon and Annie Leibovitz, the question remains the same: can a photograph show character?',
      'A good portrait depends not only on light and lens, but also on the relationship with the person: how much trust there is, how much time you have, whether you photograph them in their own surroundings or against a neutral background.',
    ],
  },
  landscape: {
    title: 'Landscape & nature',
    summary: 'Mountains, sea, cities and whatever people leave on the land.',
    body: [
      'Nineteenth-century photographers carried heavy cameras and glass plates to photograph the American West, the Alps and the Middle East. In the 20th century, Ansel Adams made the wild landscape a symbol of nature conservation, while later the New Topographics turned the lens on the landscape as altered by people.',
      'In landscape photography, what counts is patience, the light of the hour, depth of field and a sense of scale. Often a person or a tree is enough to show how vast the landscape is.',
    ],
  },
  street: {
    title: 'Street photography',
    summary: 'The street as a stage: spontaneous moments of everyday life in public spaces.',
    body: [
      'Street photography became possible when cameras became small and fast. Atget photographed an empty Paris early in the morning. Cartier-Bresson, Kertész and Brassaï went out into the street with a Leica or the larger Voigtländer, Vivian Maier with a Rolleiflex. Lisette Model, Frank and Winogrand in New York and Moriyama in Tokyo developed more nervous, personal styles.',
      'The street photographer waits, observes and reacts quickly. Today the limits are also debated: the privacy of passers-by, the laws on image rights in each country, respect for vulnerable people.',
    ],
  },
  documentary: {
    title: 'Documentary',
    summary: 'Photography as testimony: series of images to understand a society, an era, an injustice.',
    body: [
      'Documentary does not chase the news of the day, but the deeper reality: working conditions, poverty, communities, change. From Riis and Hine to Lange, Salgado and contemporary photographers, it often works for years on a single subject.',
      'Documentary raises questions: how “objective” can a photograph be? How do you photograph people in difficult circumstances without exposing them? Who is speaking, and for whom?',
    ],
  },
  photojournalism: {
    title: 'Photojournalism & war',
    summary: 'News, conflicts, disasters: the image that reaches the world the same day.',
    body: [
      'From Fenton in the Crimea and the photographers of the American Civil War to Capa, McCullin, Nachtwey and Behrakis, war photographers showed the face of war to those far away. Some images changed public opinion.',
      'Photojournalism is bound by codes of ethics: you do not stage, you do not add or remove elements, you respect the victims. Today, with phones and social media, witnesses often become photographers themselves.',
    ],
  },
  fashion: {
    title: 'Fashion',
    summary: 'Clothes, style and fantasy: the photography that sells dreams and often becomes art.',
    body: [
      'Fashion photography was born in magazines (Vogue, Harper’s Bazaar) in the early 20th century. Steichen, Penn and Avedon turned it into a field of experiment. Martin Munkácsi (1933) and later Avedon took models out into the street and set them in motion; Helmut Newton brought tension and provocation.',
      'Fashion photography demands teamwork: stylists, make-up artists, models, lighting assistants. Today it influences and is influenced by Instagram, and faces questions about beauty standards and digital retouching.',
    ],
  },
  architecture: {
    title: 'Architecture',
    summary: 'Buildings, cities, lines and spaces, with straight verticals and careful light.',
    body: [
      'Buildings were ideal subjects for the first slow cameras: they do not move. From the first photographs of monuments to Atget’s record of Paris and Berenice Abbott’s New York, architecture has been a constant genre. The Bechers turned industrial structures into systematic “typologies”.',
      'Architectural photographers often use perspective-control (shift) lenses or correct in editing, so verticals stay parallel. The time of day, the direction of the light and reflections are crucial.',
    ],
  },
  'still-life': {
    title: 'Still life & objects',
    summary: 'Objects, fruit, flowers: control of light and composition in its purest form.',
    body: [
      'Talbot was already photographing shelves of china and glasses. In the 20th century, Weston’s peppers and shells, Blossfeldt’s plants, Sudek’s windows and glasses and Penn’s still lifes showed how expressive simple things can become.',
      'In still life the photographer has all the time in the world: moving objects, changing the light, trying again and again. It is an excellent exercise for learning lighting, and the basis of product and food photography.',
    ],
  },
  experimental: {
    title: 'Experimental photography',
    summary: 'Photograms, solarisation, multiple exposures, alternative processes: photography as a laboratory.',
    body: [
      'Experimental photography explores the medium itself: images without a camera (the photograms of Man Ray and Moholy-Nagy), tonal reversal (solarisation), multiple exposures, collage, old processes such as cyanotype, and today digital or algorithmic images.',
      'The goal is not faithful recording, but discovery: what can light, chemistry, the sensor do? Many experimental techniques are easy at home, e.g. a cyanotype made with objects in the sun.',
    ],
  },
  conceptual: {
    title: 'Conceptual photography',
    summary: 'The idea first: photographs that work as thoughts, series, questions.',
    body: [
      'From the 1960s, conceptual artists used photography to record ideas, actions and systems: series of petrol stations, instructions, typologies. Aesthetic “beauty” was not the goal.',
      'Today conceptual photography is part of contemporary art: Cindy Sherman examines identity, Hiroshi Sugimoto time, Thomas Ruff the medium itself. The question “what does this image mean?” is as important as “what does it look like?”.',
    ],
  },
  color: {
    title: 'Colour',
    summary: 'From autochromes to Kodachrome and digital: when colour becomes the subject itself.',
    body: [
      'Experiments in colour photography were being made as early as 1861, and the first widely used process, the autochrome, was released in 1907. Until the 1970s, though, artists considered colour commercial. Saul Leiter, Eggleston, Shore and later Martin Parr showed that colour can be emotion, irony, poetry.',
      'In contemporary photography, colour is a choice: warm or cool, saturated or soft, harmonious or contrasting. White balance and editing make it a tool of expression.',
    ],
  },
  greek: {
    title: 'Greek photography',
    summary: 'From the first daguerreotypes of the Acropolis to contemporary Greek photographers.',
    body: [
      'The history of photography in Greece begins with foreign travellers who photographed the monuments (1839) and Philippos Margaritis, one of the first Greek professionals. In the 20th century, Nelly’s, Boissonnas, Voula Papaioannou and Spyros Meletzis recorded a country caught between antiquity, war and rural life.',
      'Today the Benaki Museum, the Thessaloniki Museum of Photography and other institutions hold important archives, and Greek photographers work all over the world, in documentary, photojournalism and art.',
    ],
  },
};
