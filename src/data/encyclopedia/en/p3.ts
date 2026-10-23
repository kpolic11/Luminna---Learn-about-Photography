import type { PhotographerText } from '../types';

/** Humanist photography, photojournalism, street photography */
export const P3_EN: Record<string, PhotographerText> = {
  'cartier-bresson': {
    name: 'Henri Cartier-Bresson',
    nationality: 'French',
    oneLine: 'The master of the “decisive moment” and co-founder of Magnum.',
    glance: ['1908–2004', 'Leica, 50 mm lens, black and white', '“Images à la sauvette” (1952), English title “The Decisive Moment”', 'Co-founder of Magnum (1947)'],
    life: [
      'Henri Cartier-Bresson (1908–2004) was born into a wealthy family of textile manufacturers near Paris. He studied painting with the Cubist André Lhote and mixed with the Surrealists, who deeply influenced his way of seeing.',
      'In the early 1930s he discovered the Leica and travelled in Europe, Mexico and Africa. In the Second World War he was taken prisoner by the Germans, and after two failed attempts escaped in 1943. In 1947 he founded Magnum with Capa, Seymour, Rodger and Vandivert. He photographed Gandhi’s funeral (1948), China at the end of the civil war (1948–49) and the Soviet Union (1954).',
      'From the 1970s he devoted himself mainly to drawing. In 2003 the Henri Cartier-Bresson Foundation was established in Paris.',
    ],
    style: [
      'A small camera, mainly a 50 mm lens, natural light, black-and-white film. The idea of the “decisive moment” means recognising, in a fraction of a second, the significance of an event and at the same time the precise organisation of forms that gives it expression.',
      'His images are rigorously structured, with a geometry reminiscent of painting. He had a reputation for never cropping his photographs, but the most famous, behind the Gare Saint-Lazare, is cropped, because a fence post covered part of the frame.',
    ],
    works: [
      { title: 'Behind the Gare Saint-Lazare', year: '1932', note: 'A man leaps over a puddle, and his silhouette is echoed in a poster in the background.' },
      { title: 'Seville', year: '1933', note: 'Children playing inside a ruined wall, as if on a stage.' },
      { title: 'Images à la sauvette / The Decisive Moment', year: '1952', note: 'The book with a cover by Matisse that became a “gospel” for street photographers.' },
    ],
    learn: [
      'Find a fine setting and wait for a person to step into the right place.',
      'The geometry of the frame and the moment must coincide.',
      'One lens, lots of practice: learn to see “like your lens”.',
    ],
    exercise: {
      title: 'Set the trap',
      steps: [
        'Find an interesting setting: light and shadow, a staircase, a poster, a door.',
        'Frame it and wait, without moving, for someone to pass through the right spot.',
        'Take many frames. Choose just one: the one where person and geometry “lock”.',
      ],
    },
  },

  capa: {
    name: 'Robert Capa',
    nationality: 'Hungarian-American',
    oneLine: 'The war photographer of “if your pictures aren’t good enough, you’re not close enough”.',
    glance: ['1913–1954', 'Real name: Endre Friedmann', 'The Spanish Civil War, D-Day', 'Co-founder of Magnum (1947)'],
    life: [
      'Endre Ernő Friedmann (1913–1954) was born in Budapest. He left Hungary young for political reasons, passed through Berlin and Paris, where with his partner Gerda Taro he invented the name “Robert Capa”, for a supposedly successful American photographer.',
      'He photographed the Spanish Civil War, the Sino-Japanese War, the Second World War and the founding of Israel. On 6 June 1944 he landed with the first waves on Omaha Beach. In 1947 he co-founded Magnum. He was killed in 1954 in Indochina, when he stepped on a landmine.',
    ],
    style: [
      'Capa was inside events: shaky, grainy images, full of movement and danger, but also tender portraits of soldiers and civilians. The phrase “If your pictures aren’t good enough, you’re not close enough” is attributed to him.',
    ],
    works: [
      { title: 'The Falling Soldier (Death of a Loyalist Militiaman)', year: '1936', note: 'A Republican militiaman at the moment he is hit. The authenticity and location of the shot are disputed.' },
      { title: 'The Magnificent Eleven', year: '1944', note: 'The few images that survived from the Normandy landings. Much of his film did not survive, and the explanation of how it was lost is disputed.' },
    ],
    learn: [
      'Closeness (physical and emotional) gives power.',
      'Technical imperfection can convey intensity.',
      'Famous images need scrutiny: authenticity, context, history.',
    ],
    exercise: {
      title: 'Closer',
      steps: [
        'At a celebration, a match or a gathering of friends, photograph first from a distance.',
        'Then move halfway in, and then closer still, with a wide-angle lens.',
        'Compare: at what distance do you feel that “you are there”?',
      ],
    },
  },

  taro: {
    name: 'Gerda Taro',
    nationality: 'German',
    oneLine: 'One of the first women photojournalists at the front, in the Spanish Civil War.',
    life: [
      'Gerta Pohorylle (1910–1937) was born in Stuttgart into a Jewish family. She fled Nazi Germany for Paris, where she met Endre Friedmann, later Robert Capa, and learned photography. Together they created the pseudonyms “Capa” and “Taro”.',
      'She photographed the Spanish Civil War from 1936. In July 1937, at the Battle of Brunete, she was fatally injured by a Republican tank in the confusion of a retreat. She was 26. For decades, many of her photographs were attributed to Capa. The discovery of the “Mexican suitcase” containing their negatives (2007) helped her work to be recognised.',
    ],
    style: ['A brave, direct eye at the front, but also on civilians: refugees, women fighters, mothers.'],
    works: [
      { title: 'Republican militiawoman training, Barcelona', year: '1936', note: 'A woman kneeling with a gun, in high-heeled shoes.' },
      { title: 'The Battle of Brunete', year: '1937', note: 'Her last photographs from the front.' },
    ],
    learn: ['Checking attribution (who took which photograph) is part of history.', 'Women photographers were often “lost” from history and are being rediscovered.'],
  },

  doisneau: {
    name: 'Robert Doisneau',
    nationality: 'French',
    oneLine: 'The tender, humorous photographer of Paris and its suburbs.',
    life: [
      'Robert Doisneau (1912–1994) was born in Gentilly, a suburb of Paris. He studied lithography, worked as an industrial photographer at Renault, and after the war worked with the Rapho agency and Vogue.',
      'For decades he walked Paris and its suburbs photographing children, workers, couples, cafés and small everyday comedies. He was one of the leading figures of humanist photography.',
    ],
    style: ['Warm humour, tenderness, attention to detail, sometimes staged moments. He said he did not photograph life as it was, but as he would like it to be.'],
    works: [
      { title: 'The Kiss by the Hôtel de Ville (Le Baiser de l’Hôtel de Ville)', year: '1950', note: 'For Life magazine. In the 1990s it was revealed that it was staged, with actors posing.' },
      { title: 'A Sidelong Glance (Un regard oblique)', year: '1948', note: 'A man looks at a painting of a nude in a shop window, while his wife talks about something else.' },
    ],
    learn: ['Humour is precious in street photography.', 'If you stage, say so: the audience’s trust matters.'],
  },

  'smith-eugene': {
    name: 'W. Eugene Smith',
    nationality: 'American',
    oneLine: 'The master of the photo essay, from the Second World War to Minamata.',
    life: [
      'W. Eugene Smith (1918–1978) was a war correspondent in the Pacific, where he was seriously wounded on Okinawa in 1945. After the war he became known for the great “photo essays” in Life magazine: on a country doctor, a midwife, a Spanish village, Albert Schweitzer.',
      'A perfectionist and uncompromising, he clashed with editors over control of the layout. In the early 1970s, with his wife Aileen, he documented mercury poisoning in Minamata, Japan, where he was badly beaten by men connected with the polluting company.',
    ],
    style: ['Deep blacks, dramatic light, careful printing in the darkroom, and storytelling through a sequence of images.'],
    works: [
      { title: 'Country Doctor', year: '1948', note: 'A photo essay in Life about a doctor in Colorado.' },
      { title: 'Tomoko Uemura in Her Bath', year: '1971', note: 'A mother holds her daughter, a victim of Minamata. At the family’s wish and by agreement with Aileen Smith, the image was withdrawn from new publication for many years.' },
    ],
    learn: ['A photo essay needs a beginning, middle and end and different “kinds” of images.', 'Respect for the wishes of the people you photograph continues after publication.'],
  },

  weegee: {
    name: 'Weegee',
    nationality: 'American (born in Austria-Hungary)',
    oneLine: 'The photographer of crime and of New York at night, with flash and a police radio.',
    life: [
      'Arthur Fellig (1899–1968), known as Weegee, emigrated to New York as a child. From the mid-1930s he worked as a freelance photographer at night, with a police radio in his car, often arriving first at crimes, fires and accidents.',
      'His book “Naked City” (1945) was a success and inspired a film. Later he worked in Hollywood and experimented with distorting lenses.',
    ],
    style: ['Harsh, raw flash, a black background, and often the onlookers of the event become the real subject. Humour and harshness together.'],
    works: [
      { title: 'Their First Murder', year: '1941', note: 'Children looking at the scene of a crime with curiosity and fear.' },
      { title: 'Coney Island Beach', year: '1940', note: 'Thousands of bathers on the beach, looking at the camera.' },
    ],
    learn: ['The onlookers’ reactions often say more than the event itself.', 'Flash gives a dramatic, “crime-scene” style.'],
  },

  parks: {
    name: 'Gordon Parks',
    nationality: 'American',
    oneLine: 'The photographer, director and writer who made the camera a “weapon” against racism.',
    life: [
      'Gordon Parks (1912–2006) was born in Kansas, the youngest of fifteen children of a poor African American family. He bought his first camera at a pawnshop. He worked for the Farm Security Administration and later became the first African American staff photographer at Life (1948).',
      'He photographed fashion, the civil rights movement, Malcolm X, poverty in Brazil. He directed films, among them “Shaft” (1971), wrote novels and composed music.',
    ],
    style: ['Elegant composition, deep humanity, an ability to move between fashion and social documentary. He said the camera was the weapon he chose against poverty and racism.'],
    works: [
      { title: 'American Gothic, Washington, D.C.', year: '1942', note: 'Ella Watson, a cleaner in a government building, with a broom and mop in front of the American flag.' },
      { title: 'Segregation Story', year: '1956', note: 'A colour essay on the life of a family in the South under the segregation laws.' },
    ],
    learn: ['A reference to a well-known work of art can give a message power.', 'A photographer can have many voices: fashion, documentary, cinema.'],
  },

  koudelka: {
    name: 'Josef Koudelka',
    nationality: 'Czech',
    oneLine: 'From the 1968 invasion of Prague to the Roma and the panoramas of exile.',
    life: [
      'Josef Koudelka (b. 1938) trained as an aeronautical engineer and photographed for the theatre. In the 1960s he photographed the Roma of Czechoslovakia and other countries.',
      'In August 1968 he photographed the invasion of Prague by Warsaw Pact troops. His photographs were smuggled to the West and published by Magnum under the initials “P.P.” (Prague Photographer), to protect him. In 1970 he left the country and lived for years as a nomad in Europe. A Magnum member from 1971 (full member in 1974).',
    ],
    style: ['Strong contrast, deep blacks, solitude, dramatic composition. Later, panoramic views of landscapes marked by people and history.'],
    works: [
      { title: 'Invasion 68: Prague', year: '1968', note: 'The gesture of a hand with a watch in front of an empty street, tanks, crowds.' },
      { title: 'Gypsies', year: '1975', note: 'A book about the Roma.' },
      { title: 'Exiles', year: '1988', note: 'Images from the years of wandering in Europe.' },
    ],
    learn: ['Photography can be an act of courage.', 'Solitude and distance can become a style.'],
  },

  model: {
    name: 'Lisette Model',
    nationality: 'American (born in Austria)',
    oneLine: 'The bold street photographer and teacher of Diane Arbus.',
    life: [
      'Lisette Model (1901–1983) was born in Vienna and studied music before turning to photography in Paris. Her series from the Promenade des Anglais in Nice (1934), with close portraits of wealthy people sitting in deckchairs, became well known.',
      'In 1938 she moved to New York, photographed for Harper’s Bazaar and taught for decades at the New School. Among her students was Diane Arbus.',
    ],
    style: ['Close, bold, unflattering. Reflections in shop windows, the legs of passers-by, large people at Coney Island. She told her students to photograph from the “gut”, by instinct.'],
    works: [
      { title: 'Promenade des Anglais, Nice', year: '1934', note: 'Close portraits of the bourgeoisie on the Riviera.' },
      { title: 'Coney Island Bather', year: 'c. 1939–41', note: 'A large woman smiling in the surf.' },
    ],
    learn: ['Get close and do not flatter.', 'A good teacher helps the student find their own voice.'],
  },

  frank: {
    name: 'Robert Frank',
    nationality: 'American (born in Switzerland)',
    oneLine: 'The Swiss who travelled through America and made the most influential photobook of the century.',
    glance: ['1924–2019', '“The Americans” (1958/1959)', 'Guggenheim Fellowship, 1955', 'Introduction by Jack Kerouac'],
    life: [
      'Robert Frank (1924–2019) was born in Zurich and emigrated to New York in 1947, where he worked as a fashion photographer for Harper’s Bazaar.',
      'In 1955, with a Guggenheim Fellowship, he travelled across much of the USA in a second-hand car and shot more than 27,000 frames. From these he chose 83 for the book “Les Américains” (Paris, 1958), published in 1959 in the USA as “The Americans”, with an introduction by Jack Kerouac. Critics at first found it anti-American and technically sloppy. Today it is considered one of the most important photobooks. Afterwards Frank turned mainly to film.',
    ],
    style: [
      'Grainy, blurred, tilted images, showing loneliness, racism, melancholy, but also poetry: jukeboxes, flags, cars, coffins, televisions. The book’s structure, with recurring motifs, makes it read like a poem.',
    ],
    works: [
      { title: 'Trolley—New Orleans', year: '1955', note: 'Passengers on a tram, separated by the windows and, in the era of segregation, by race. The cover of the American edition.' },
      { title: 'Parade—Hoboken, New Jersey', year: '1955', note: 'Two figures at windows, one hidden by a flag. The first image in the book.' },
      { title: 'U.S. 285, New Mexico', year: '1955', note: 'An empty highway at night.' },
    ],
    learn: [
      'The “technically wrong” image can be the most honest.',
      'A book is like a poem: motifs recur, images converse.',
      'An outsider’s eye sees things locals do not notice.',
    ],
    exercise: {
      title: 'A small “The Americans”',
      steps: [
        'On a trip or a walk, photograph freely, without looking for the “perfect” image.',
        'Find 2–3 recurring motifs (e.g. flags, cars, screens).',
        'Make a sequence of 12 images in which the motifs recur. What does the sequence say about the place?',
      ],
    },
  },

  klein: {
    name: 'William Klein',
    nationality: 'American (lived in Paris)',
    oneLine: 'The revolutionary of street photography: wide angle, grain, blur, provocation.',
    life: [
      'William Klein (1926–2022) was born in New York and studied painting in Paris with Fernand Léger. Returning to New York in 1954, he photographed the city in an aggressive, entirely new way.',
      'His book “Life Is Good & Good for You in New York” (1956), published in France, won the Prix Nadar. Books on Rome, Moscow and Tokyo followed. He worked for Vogue, took models out into the streets, and made documentary and fiction films.',
    ],
    style: ['Wide-angle lenses, very close to people, grain, blur, high contrast, people looking at (or threatening) the camera. Klein deliberately broke every rule.'],
    works: [
      { title: 'Gun 1, New York', year: '1955', note: 'A boy points a toy gun at the camera, with a menacing expression.' },
      { title: 'Life Is Good & Good for You in New York', year: '1956', note: 'The book that influenced generations of photographers, especially in Japan.' },
    ],
    learn: ['Rules exist to be known and broken.', 'A wide-angle lens up close puts the viewer inside the scene.'],
  },

  leiter: {
    name: 'Saul Leiter',
    nationality: 'American',
    oneLine: 'The painter of colour on the streets of New York, recognised after the age of 80.',
    life: [
      'Saul Leiter (1923–2013) was born in Pittsburgh, the son of a rabbi. He abandoned theological studies to become a painter in New York. From the late 1940s he photographed his neighbourhood, the East Village, in colour, while earning a living from fashion photography.',
      'For decades he remained almost unknown. Major recognition came with the book “Early Color” (2006), when he was 83.',
    ],
    style: ['Misted windows, umbrellas, snow, reflections, patches of intense colour within dark surfaces. His images recall Japanese prints and abstract painting.'],
    works: [
      { title: 'Snow', year: '1960', note: 'A red figure behind misted glass with snow.' },
      { title: 'Red Umbrella', year: 'c. 1958', note: 'A red umbrella in a grey, snowy street.' },
    ],
    learn: ['You do not need to travel: your neighbourhood is enough.', 'The blurred, the hidden and the half-seen can be more poetic than the clear.'],
  },

  winogrand: {
    name: 'Garry Winogrand',
    nationality: 'American',
    oneLine: 'The tireless street photographer of 1960s–70s America.',
    life: [
      'Garry Winogrand (1928–1984) was born in the Bronx. He photographed relentlessly: the streets of New York, zoos, airports, rodeos, demonstrations and public events. In 1967 he took part in MoMA’s “New Documents” exhibition.',
      'He died suddenly at 56, leaving about 2,500 rolls of undeveloped film and even more that he had developed but never looked at.',
    ],
    style: ['A 28 mm wide angle, tilted frames, full, chaotic scenes with many people and gestures. He said he photographed to see what things look like photographed.'],
    works: [
      { title: 'The Animals', year: '1969', note: 'A book of images from zoos, where people and animals mirror each other.' },
      { title: 'Women Are Beautiful', year: '1975', note: 'A book of women in the street. Today strongly criticised for its gaze.' },
    ],
    learn: ['Lots of practice and quantity are part of learning.', 'A tilted frame gives energy, but it must be a choice.'],
  },

  friedlander: {
    name: 'Lee Friedlander',
    nationality: 'American',
    oneLine: 'The architect of the “cluttered” frame: shop windows, signs, poles and reflections.',
    life: [
      'Lee Friedlander (b. 1934) was born in Aberdeen, Washington. He began by photographing jazz musicians for record covers, and in 1967 took part in the “New Documents” exhibition.',
      'For decades he photographed the American social landscape: streets, monuments, cars, workers, self-portraits with his shadow, and later his own body and illness.',
    ],
    style: ['Complex, layered frames, where signs, poles, trees and reflections interweave. Often his own shadow or reflection appears in the image.'],
    works: [
      { title: 'Self Portrait', year: '1970', note: 'A book of self-portraits through shadows and reflections.' },
      { title: 'The American Monument', year: '1976', note: 'Monuments within the everyday space of American cities.' },
    ],
    learn: ['“Obstacles” in the frame can become structure.', 'Your shadow is also material for photography.'],
  },

  arbus: {
    name: 'Diane Arbus',
    nationality: 'American',
    oneLine: 'The photographer who looked people on the margins straight in the eye, and saw the “normal” world as strange.',
    glance: ['1923–1971', 'A student of Lisette Model', '“New Documents” (MoMA, 1967)', 'Square format, flash in daylight'],
    life: [
      'Diane Arbus (1923–1971), born Nemerov, grew up in a wealthy New York family. With her husband Allan Arbus she worked for years in fashion photography.',
      'In the late 1950s she left fashion and, encouraged by Lisette Model, photographed people society pushed aside: circus performers, giants, little people, drag performers, people with disabilities, but also the middle classes, children and twins, who in her hands looked just as strange. She took part in the “New Documents” exhibition (1967). She died by suicide in 1971. Her MoMA retrospective in 1972 was one of the most visited of its time.',
    ],
    style: [
      'Square format (a Rolleiflex and later a Mamiya), a frontal view, people looking at the camera. She often used flash even in daylight, which gives a slightly surreal intensity.',
      'Arbus usually got to know the people she photographed, visiting them again and again. Her work still provokes debate: is it compassion or exploitation? The answer often depends on the viewer.',
    ],
    works: [
      { title: 'Identical Twins, Roselle, New Jersey', year: '1967', note: 'Twin girls in identical dresses, with completely different expressions.' },
      { title: 'Child with Toy Hand Grenade in Central Park', year: '1962', note: 'A boy with a toy grenade and a clenched hand.' },
      { title: 'A Jewish Giant at Home with His Parents in the Bronx', year: '1970', note: 'Eddie Carmel, very tall, stooping in the living room in front of his parents.' },
    ],
    learn: [
      'A frontal view and time spent with people create tension and truth.',
      'The “normal” can look as strange as the “unusual”.',
      'Always ask yourself: how would the person feel if they saw their photograph?',
    ],
    exercise: {
      title: 'A frontal portrait',
      steps: [
        'Ask someone you know to stand in front of their home, as they wish, looking at the camera.',
        'Frame in a square. Try one shot with the flash on in daylight.',
        'Show them the photograph and ask: “does it represent you?”',
      ],
    },
  },

  decarava: {
    name: 'Roy DeCarava',
    nationality: 'American',
    oneLine: 'The poet of Harlem, in dark, velvety tones.',
    life: [
      'Roy DeCarava (1919–2009) was born and raised in Harlem. He began as a painter and printmaker. In 1952 he was the first African American photographer to receive a Guggenheim Fellowship.',
      'The book “The Sweet Flypaper of Life” (1955), with a text by the poet Langston Hughes, showed everyday life in Harlem with tenderness. He also photographed jazz musicians, such as John Coltrane. He taught for many years at Hunter College.',
    ],
    style: ['Deep, dark grey tones, very few bright points, quiet gestures. He wanted to render the Black experience from within, without stereotypes.'],
    works: [
      { title: 'The Sweet Flypaper of Life', year: '1955', note: 'A book with a text by Langston Hughes.' },
      { title: 'Graduation, New York', year: '1949', note: 'A girl in a white graduation dress in a poor street.' },
    ],
    learn: ['Low key can be tender, not only dramatic.', 'A view “from within” a community differs from a visitor’s view.'],
  },

  maier: {
    name: 'Vivian Maier',
    nationality: 'American',
    oneLine: 'The nanny who photographed in secret for decades, and was discovered after her death.',
    life: [
      'Vivian Maier (1926–2009) was born in New York and spent part of her childhood in France. For about 40 years she worked as a nanny for families in New York and Chicago.',
      'Meanwhile she photographed relentlessly, with a Rolleiflex and later other cameras, but almost never showed her work. In 2007, when the contents of a storage unit of hers were auctioned for unpaid rent, John Maloof bought thousands of negatives. After her death, her work became known worldwide. Who holds the rights to her work has also occupied the courts.',
    ],
    style: ['Square format, the camera at waist level, faces from close up, children, the elderly, many self-portraits in mirrors and shadows.'],
    works: [
      { title: 'Self-portraits', year: '1950–1970', note: 'Herself in shop windows, mirrors, shadows: a life hidden yet present.' },
      { title: 'Street photographs of Chicago and New York', year: '1950–1980', note: 'More than 100,000 negatives.' },
    ],
    learn: ['Photography can be a personal need, not only a profession.', 'Publishing work posthumously raises ethical questions: would the creator have wanted it?'],
  },
};
