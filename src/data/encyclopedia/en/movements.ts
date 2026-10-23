import type { MovementId, MovementText } from '../types';

export const MOVEMENTS_EN: Record<MovementId, MovementText> = {
  early: {
    title: 'The pioneers',
    years: '1839 – 1885',
    summary: 'The inventors and the first photographers, who had to invent the technique and the way of seeing at the same time.',
    body: [
      'In the first decades, every photographer was also a chemist. Daguerreotypes, calotypes, collodion glass plates: exposures lasted seconds or minutes, and plates were often prepared and developed on the spot, in portable darkrooms.',
      'Despite the limitations, the pioneers tried almost every genre we know today: portrait, landscape, architecture, war reporting, scientific recording, even staged artistic images. Many of their questions, such as whether photography is art or mere recording, still concern us.',
    ],
    traits: ['Long exposures, still subjects', 'Handmade materials, chemistry on the spot', 'Studio portraits, monuments, landscapes', 'Experiment in every genre'],
  },
  pictorialism: {
    title: 'Pictorialism',
    years: '1885 – 1915',
    summary: 'The movement that set out to prove photography is art by making it look like painting.',
    body: [
      'Around 1890, when Kodak made photography accessible to everyone, many ambitious photographers wanted to set themselves apart from “press the button”. They organised into clubs and “secessions” in London (the Linked Ring, 1892), Vienna, Paris and New York (the Photo-Secession, 1902) and held rigorously selected exhibitions.',
      'Their images were often soft and atmospheric, with blurred outlines. They used “soft-focus” lenses and handmade printing processes such as platinum, gum bichromate and bromoil, in which the photographer could “paint” on the image. The subjects recalled painting: mist, dusk, allegories, family scenes.',
      'The movement won the battle for recognition: photographs entered museums and galleries. Around 1915, however, its own leading figures, first among them Stieglitz, turned towards a clean, “straight” photography.',
    ],
    traits: ['Soft focus, atmosphere', 'Handmade, unique prints', 'Subjects inspired by painting', 'Clubs, “secessions” and exhibitions'],
  },
  'social-documentary': {
    title: 'Social documentary',
    years: '1888 – 1945',
    summary: 'The camera as a tool for showing injustice and changing society.',
    body: [
      'In the late 19th century, Jacob Riis photographed the slums of New York, using the new magnesium flash to light dark basements. A little later, Lewis Hine recorded child labour in factories and mines for a committee lobbying for legislation. Photography became evidence.',
      'The peak came in the 1930s, with the US government’s Farm Security Administration (FSA) programme. Photographers such as Dorothea Lange and Walker Evans recorded the poverty of rural America during the Great Depression, and their images circulated in newspapers and magazines across the country.',
    ],
    traits: ['Aim: to inform and to change', 'Series of images with captions and texts', 'Respect and directness', 'Collaboration with organisations, the state, the press'],
  },
  straight: {
    title: 'Straight photography',
    years: '1910 – 1950',
    summary: 'A clean, sharp image without painterly tricks: photography as photography.',
    body: [
      'Around 1915, Alfred Stieglitz and the younger photographers around him decided that photography did not need to imitate painting. Paul Strand’s abstract, geometric images, published in the last issues of the magazine “Camera Work” (1916–1917), became the symbol of the change.',
      'Straight photography calls for sharpness, rich tones, careful composition and clean prints, with no manual intervention on the negative or the print. Its power comes from choice: what, when and from where you photograph. This idea influenced almost all 20th-century photography.',
    ],
    traits: ['Full sharpness', 'No painterly intervention', 'Geometry, texture, light', 'Choosing the frame as creation'],
  },
  'new-objectivity': {
    title: 'New Objectivity',
    years: '1920 – 1935',
    summary: 'The cool, precise eye of interwar Germany: things, people and industry, as they are.',
    body: [
      'In Weimar Germany, photographers such as Albert Renger-Patzsch and Karl Blossfeldt turned to objective, almost scientific recording: plants, machines, industrial objects, photographed close up, in full sharpness and neutral light. Renger-Patzsch’s book “The World Is Beautiful” (1928) became the manifesto of this way of seeing.',
      'August Sander applied the same rigour to people: he wanted to photograph every type in German society, from the farmer to the artist. In 1936 the Nazis, who did not want such a varied image of Germany, seized and destroyed the printing plates of his book “Face of Our Time” (1929).',
    ],
    traits: ['Precision and neutrality', 'Close-up, isolated subjects', 'Series and typologies', 'Admiration for the forms of industry'],
  },
  'new-vision': {
    title: 'New Vision',
    years: '1920 – 1940',
    summary: 'The photography of the avant-garde: steep angles, photograms, experiments, to see the world as never before.',
    body: [
      'At the Bauhaus, László Moholy-Nagy argued that the camera could extend human vision. He experimented with photograms (images without a camera), with shots from above and below, with collage. In the Soviet Union, Alexander Rodchenko photographed buildings and people with strong diagonals, wanting to “wash” the eye clean of old habits.',
      'The great “Film und Foto” exhibition in Stuttgart (1929) showed the movement’s range. New Vision influenced advertising, graphic design and magazines, and many of its ideas are commonplace today: the low-angle shot, the unusual frame, photography as abstraction.',
    ],
    traits: ['Shots from above or below, diagonals', 'Photograms, photomontage', 'Photography as a new vision', 'Links with design and advertising'],
  },
  surrealism: {
    title: 'Surrealism',
    years: '1924 – 1950',
    summary: 'Dream, the absurd and the unconscious in photographs, often within plain everyday reality.',
    body: [
      'The Surrealist movement, launched with André Breton’s manifesto in 1924, loved photography. Man Ray made “rayographs” (photograms) and, together with Lee Miller, rediscovered the Sabattier effect, which they called solarisation, in which tones are partly reversed and outlines light up.',
      'But the Surrealists also admired photographs that had not been staged at all: Atget’s shop windows with mannequins and empty streets, Brassaï’s night images of Paris, strange close-ups of objects. For them, the camera could reveal the uncanny hidden in reality.',
    ],
    traits: ['Dream and the absurd', 'Solarisation, photograms, montage', 'Strange objects and close-ups', 'The uncanny in everyday life'],
  },
  f64: {
    title: 'Group f/64',
    years: '1932 – 1935',
    summary: 'A small Californian group that made absolute sharpness a manifesto.',
    body: [
      'In 1932, in the San Francisco area, Edward Weston, Ansel Adams, Imogen Cunningham, Willard Van Dyke and others founded Group f/64. The name comes from the very small aperture that gave great depth of field with their large-format cameras.',
      'The group held one major exhibition, at the M. H. de Young Memorial Museum (1932), and disbanded within a few years. But its aesthetic (large format, full sharpness from near to far, contact prints, simple natural subjects) became the norm for generations of landscape photographers.',
    ],
    traits: ['Large-format cameras', 'Great depth of field, full sharpness', 'Contact prints on glossy paper', 'Nature, rocks, shells, vegetables'],
  },
  humanist: {
    title: 'Humanist photography',
    years: '1930 – 1965',
    summary: 'Ordinary people in their everyday lives, with tenderness and humour, mainly in France.',
    body: [
      'In interwar and postwar Paris, photographers such as Robert Doisneau, Willy Ronis, Édouard Boubat and Henri Cartier-Bresson went out into the streets with small cameras. They photographed children playing, couples, workers, fairs: life as it happens.',
      'Their images were published in illustrated magazines and books, and many reached the great exhibition “The Family of Man” (MoMA, 1955), which travelled all over the world. Their view is optimistic and warm. Critics later argued that it often idealised reality.',
    ],
    traits: ['Everyday life, ordinary people', 'Small cameras, available light', 'Tenderness and humour', 'Publication in magazines and books'],
  },
  photojournalism: {
    title: 'Photojournalism',
    years: 'from 1925',
    summary: 'Photography as news: the photographers who brought the world and its wars into magazines.',
    body: [
      'Photojournalism was born of two inventions: small 35 mm film cameras, such as the Leica (1925), and illustrated magazines, first in Germany and then in France, Britain and the USA (Life, 1936). Photographers could now be inside events.',
      'In 1947, Robert Capa, Henri Cartier-Bresson, David “Chim” Seymour, George Rodger, William and Rita Vandivert and Maria Eisner founded Magnum Photos, an agency owned by the photographers themselves. From the Spanish Civil War to Vietnam and today’s wars, photojournalism shaped how we see history, and raised difficult questions about the ethics of the image.',
    ],
    traits: ['Small cameras, quick reactions', 'Publication in magazines and newspapers', 'Stories told in series of images', 'Ethical questions: truth, respect, danger'],
  },
  'new-york-school': {
    title: 'New York School',
    years: '1936 – 1965',
    summary: 'The lively, nervous, often blurred street photography of New York.',
    body: [
      'The term describes a group of photographers who worked in New York from the late 1930s to the 1960s. Many passed through the Photo League (1936–1951), a socially oriented club and school that was dissolved after accusations during the McCarthy era.',
      'Lisette Model, Weegee, William Klein, Saul Leiter and Robert Frank broke the rules of “good” photography: blur, grain, tilted frames, harsh contrasts. Frank’s book “The Americans” (1958 in France, 1959 in the USA) was the high point: a personal, melancholy view of America.',
    ],
    traits: ['Street, city, crowd', 'Grain, blur, tilted frames', 'A personal, subjective view', 'The photobook as a work'],
  },
  'greek-postwar': {
    title: 'Greek photography, 1940–1980',
    years: '1940 – 1980',
    summary: 'From war and Occupation to a changing countryside: the Greek photographers who recorded a country in transition.',
    body: [
      'The Occupation and the wars of the 1940s brought Greek photography close to documentary: Voula Papaioannou photographed the famine in Athens and Spyros Meletzis the National Resistance in the mountains.',
      'After the war, photographers such as Dimitris Harissiadis, Kostas Balafas and Takis Tloupas recorded the Greek countryside, the works of reconstruction and working people, with a humanist eye akin to the French. Constantine Manos, with “A Greek Portfolio” (1972), gave an image of the Greek village that became a classic.',
    ],
    traits: ['War, Occupation, reconstruction', 'The countryside and its people', 'A humanist eye', 'Black and white, natural light'],
  },
  'new-documents': {
    title: 'New Documents',
    years: '1960 – 1980',
    summary: 'From the MoMA exhibition (1967): documentary without a social message, with a personal and often uncomfortable eye.',
    body: [
      'In 1967, the curator John Szarkowski presented the exhibition “New Documents” at MoMA, with work by Diane Arbus, Garry Winogrand and Lee Friedlander. Szarkowski wrote that the new photographers did not want to reform society, but to know it.',
      'Their images look like snapshots, but are very carefully structured: Winogrand fills the frame with movement and tension, Friedlander layers shop windows, reflections and poles, Arbus looks people on the margins straight in the eye. Their view is ambiguous, and leaves the viewer to decide.',
    ],
    traits: ['No social or political message', 'The snapshot with complex structure', 'The marginal, the strange, the everyday', 'Ambiguity'],
  },
  provoke: {
    title: 'Provoke (Japan)',
    years: '1968 – 1975',
    summary: '“Are, bure, boke”: grainy, blurred, out-of-focus images from radical Japan.',
    body: [
      '“Provoke” was a magazine published in three issues (1968–1969), with Takuma Nakahira, Daidō Moriyama (from the second issue), Yutaka Takanashi, the critic Kōji Taki and the poet Takahiko Okada. It wanted to “provoke” thought through photography, in an era of student uprisings and protest.',
      'Its aesthetic is described by three Japanese words: are (rough, grainy), bure (shaken, blurred), boke (out of focus). The images reject clean, “correct” photography, to convey the tension and uncertainty of the modern city.',
    ],
    traits: ['Rough grain, blur, out of focus', 'High contrast', 'City, night, motion', 'A political and philosophical context'],
  },
  'new-color': {
    title: 'New Color Photography',
    years: '1965 – 1985',
    summary: 'When artists took colour from advertising and family albums and made it art.',
    body: [
      'Until the 1970s, in art circles colour was considered “vulgar” and commercial. William Eggleston changed that with his MoMA exhibition in 1976 and with images such as a tricycle or a red ceiling: everyday things in intense, rich colour.',
      'Stephen Shore, Joel Meyerowitz, Joel Sternfeld and others used colour, often with large-format cameras, to describe the American landscape. Saul Leiter, who had been photographing in colour in New York since the 1940s, was recognised much later.',
    ],
    traits: ['Colour as essence, not decoration', 'Everyday, “insignificant” subjects', 'Often large format', 'The American landscape'],
  },
  'new-topographics': {
    title: 'New Topographics',
    years: '1970 – 1985',
    summary: 'The landscape altered by people: suburbs, car parks, warehouses, photographed neutrally.',
    body: [
      'The exhibition “New Topographics: Photographs of a Man-Altered Landscape” at George Eastman House (1975) presented Robert Adams, Lewis Baltz, Bernd and Hilla Becher, Stephen Shore and others. Instead of Ansel Adams’s pristine mountains, it showed standardised houses, industrial zones and roads.',
      'The style is cool: neutral light, a frontal view, no drama. But behind the neutrality lies a question about the environment and the way we build, which became even more pressing in the decades that followed.',
    ],
    traits: ['Landscape altered by people', 'Neutral light, a frontal view', 'No drama or idealisation', 'An environmental question'],
  },
  dusseldorf: {
    title: 'Düsseldorf School',
    years: 'from 1976',
    summary: 'The Bechers’ students: large, cool, completely controlled images that hang like paintings.',
    body: [
      'In 1976 Bernd Becher became professor of photography at the Düsseldorf Art Academy. Together with Hilla Becher, with whom he had photographed industrial structures in strict series (“typologies”) for decades, he taught a generation that dominated the art of the 1990s.',
      'Andreas Gursky, Thomas Struth, Thomas Ruff and Candida Höfer kept their teachers’ neutral, analytical eye, but added colour and enormous size. Their works, often digitally processed, sold at record prices and helped photography to be exhibited and valued on an equal footing with painting.',
    ],
    traits: ['Huge prints', 'A neutral, analytical eye', 'Series and system', 'Colour, often digital processing'],
  },
  staged: {
    title: 'Staged photography',
    years: 'from 1975',
    summary: 'Instead of finding the moment, the photographer constructs it: sets, actors, film lighting.',
    body: [
      'From the late 1970s, many artists stopped “hunting” the moment and began to stage it. Cindy Sherman photographed herself as the heroine of non-existent films (“Untitled Film Stills”, 1977–1980). Jeff Wall staged large scenes, like paintings, and presented them in lightboxes.',
      'Later Gregory Crewdson worked with entire film crews, and Philip-Lorca diCorcia hid flashes in the streets. Staged photography reminds us that every photograph is, to some degree, a construction.',
    ],
    traits: ['Sets, actors, lighting', 'References to cinema and painting', 'Identity and roles', 'Photography as construction'],
  },
  diaristic: {
    title: 'Diaristic photography',
    years: 'from 1970',
    summary: 'The life of the photographers themselves and their friends, unfiltered: tenderness, passion, loss.',
    body: [
      'For years Nan Goldin photographed her friends in New York and elsewhere: love affairs, parties, violence, addiction, and later the loss to AIDS. “The Ballad of Sexual Dependency” was first presented as a slide show with music, and became a book in 1986.',
      'Even before her, Larry Clark (“Tulsa”, 1971) in the USA and Nobuyoshi Araki (“Sentimental Journey”, 1971) in Japan, and later Wolfgang Tillmans in Europe, worked in different ways with the same idea: photography as a diary, where intimacy matters more than technical perfection.',
    ],
    traits: ['Personal, intimate life', 'Flash, vivid colours, snapshots', 'Friends, relationships, loss', 'Slide shows, books, installations'],
  },
  'contemporary-documentary': {
    title: 'Contemporary documentary',
    years: 'from 1980',
    summary: 'Long-term projects, books and exhibitions on big subjects: labour, migration, war, the environment.',
    body: [
      'As illustrated magazines lost their power, many documentary photographers turned to long-term projects presented in books and museums. Sebastião Salgado worked for years on manual labourers and on nature. Martin Parr showed mass tourism and consumption with humour and irony.',
      'Today documentary combines photography, text, archives and video, and often collaborates with the very people it photographs. The question “who has the right to tell a story” is now central.',
    ],
    traits: ['Long-term projects', 'The book and the exhibition as the final work', 'Big social subjects', 'Questions of representation and ethics'],
  },
  'social-media': {
    title: 'Photography in the age of social media',
    years: 'from 2010',
    summary: 'With the phone and Instagram, photographers without a gallery or agency found an audience directly. Some became important voices in contemporary photography.',
    body: [
      'Instagram appeared in 2010. Within a few years, a photographer could show their work every day to thousands of people, without going through a magazine, gallery or agency. Street photography, portraiture and travel photography found a huge audience, and a new generation learned photography by looking at and commenting on other people’s images.',
      'The same ease also brought problems: algorithms that reward what pleases quickly, imitation, images that look alike. That is why our rule here is strict: we do not count followers. We include photographers who, starting from social media, gained lasting recognition, with books, exhibitions, commissions from major publications or awards. We give their real name and, in brackets, the username by which they became known.',
    ],
    traits: ['A direct relationship with the audience', 'Series with a consistent, recognisable form', 'Phones and small cameras', 'From the screen to the book and the exhibition'],
  },
};
