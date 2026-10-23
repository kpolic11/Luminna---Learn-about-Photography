import type { PhotographerText } from '../types';

/** Pioneers & pictorialism */
export const P1_EN: Record<string, PhotographerText> = {
  niepce: {
    name: 'Nicéphore Niépce',
    nationality: 'French',
    oneLine: 'The inventor who made the oldest surviving photograph from nature.',
    life: [
      'Joseph Nicéphore Niépce (1765–1833) was an inventor from Chalon-sur-Saône in Burgundy. With his brother Claude he designed, among other things, one of the first internal combustion engines, the “Pyréolophore”.',
      'From the 1810s he tried to fix the image of the camera obscura. Around 1826–27, using a pewter plate (an alloy of tin and lead) coated with bitumen of Judea, which hardens in light, he recorded the view from the window of his estate at Le Gras, with an exposure that probably lasted several hours or even days. He called the method “heliography”. In 1829 he went into partnership with Daguerre, but died before seeing photography announced in 1839.',
    ],
    style: [
      'Niépce’s images are experiments, not works of art: blurred, low in contrast, often copies of engravings. Their importance is that they proved light could “write” an image permanently.',
    ],
    works: [
      { title: 'View from the Window at Le Gras', year: 'c. 1826–27', note: 'The oldest surviving photograph from nature. Held at the Harry Ransom Center of the University of Texas.' },
      { title: 'Heliographs of engravings', year: '1820s', note: 'Contact copies of images, on metal or glass.' },
    ],
    learn: ['Photography began as a chemical experiment: without failures there is no discovery.', 'Exposure time decides what “fits” in the image: in exposures lasting hours, the sun lights both sides of the buildings.'],
  },

  daguerre: {
    name: 'Louis Daguerre',
    nationality: 'French',
    oneLine: 'The scene painter who gave the world the daguerreotype in 1839.',
    life: [
      'Louis Jacques Mandé Daguerre (1787–1851) was a painter of theatre scenery and creator of the “Diorama”, a spectacle of huge painted canvases and changing lighting, in Paris (1822).',
      'After Niépce’s death he continued the experiments and discovered that a silver-plated copper plate, sensitised with iodine fumes, could record a “latent” image brought out with mercury vapour. The French government bought the invention and presented it publicly in August 1839, giving it “to the world” (except England, where Daguerre had taken out a patent).',
    ],
    style: [
      'The daguerreotype is a unique object, with no negative, of astonishing detail, like a mirror “with a memory”. Daguerre’s images show mainly still lifes in the studio and views of Paris.',
    ],
    works: [
      { title: 'Boulevard du Temple', year: '1838', note: 'A man having his boots polished stayed still long enough to be recorded: probably the first photograph of a person.' },
      { title: 'Still life with plaster casts', year: '1837', note: 'One of the first successful daguerreotypes.' },
    ],
    learn: ['The daguerreotype showed the power of detail, but could not be reproduced: each image was unique.', 'In long exposures, whatever moves disappears. You can do the same today with an ND filter.'],
  },

  talbot: {
    name: 'William Henry Fox Talbot',
    nationality: 'English',
    oneLine: 'The inventor of the negative and of the first book illustrated with photographs.',
    glance: ['1800–1877', 'Invented the calotype (negative–positive)', '“The Pencil of Nature” (1844–46)', 'Home: Lacock Abbey'],
    life: [
      'Talbot (1800–1877) was born in Melbury, Dorset, and inherited Lacock Abbey in Wiltshire. He was a mathematician, linguist, botanist and Fellow of the Royal Society, a man of immense curiosity.',
      'In 1833, frustrated that he could not draw Lake Como well with the help of an optical instrument, he thought of making light draw by itself. In the following years he made “photogenic drawings” on paper soaked in silver salts. In 1840 he discovered the latent image on paper and named the method the “calotype” (from the Greek “kalos”, beautiful).',
      'His great innovation was the negative: from a paper negative he could print as many positives as he wished. This idea dominated photography for almost 150 years, until the digital age.',
    ],
    style: [
      'Calotypes have soft detail, because light passes through the fibres of the paper, and warm brown tones. Talbot photographed his home, shelves of books and china, plants, the people of the estate. His images have a quiet, poetic simplicity.',
      'In “The Pencil of Nature”, the first commercially published book with photographs, he wrote texts for each image, explaining what photography could do: record, copy, serve as evidence, become art.',
    ],
    works: [
      { title: 'Latticed Window at Lacock Abbey', year: '1835', note: 'The oldest surviving photographic negative.' },
      { title: 'The Open Door', year: '1844', note: 'From “The Pencil of Nature”: a broom in a doorway, and the first discussion of photography as art.' },
      { title: 'The Pencil of Nature', year: '1844–46', note: 'A book in six instalments, with 24 calotypes pasted onto the pages.' },
    ],
    learn: [
      'The negative–positive idea meant reproduction: something we now take for granted.',
      'You do not need exotic subjects: Talbot found art at his own front door.',
      'Photograph and text together say more than the photograph alone.',
    ],
    exercise: {
      title: 'Your own “Open Door”',
      steps: [
        'Find a door or window at home where light comes from the side.',
        'Place a simple object (a broom, a chair, a jug) and photograph it in a quiet, balanced composition.',
        'Write a paragraph, as Talbot did, about what made you stop at this image.',
      ],
    },
  },

  'hill-adamson': {
    name: 'David Octavius Hill & Robert Adamson',
    nationality: 'Scottish',
    oneLine: 'The painter and the chemist who made the first great photographic portraits.',
    life: [
      'In 1843 the painter David Octavius Hill (1802–1870) wanted to paint a huge group picture of the hundreds of ministers who founded the Free Church of Scotland. To have portraits of them all, he teamed up with the young chemist Robert Adamson (1821–1848), who had a calotype studio in Edinburgh.',
      'In less than five years, until Adamson’s early death, they made around 3,000 calotypes: portraits, scenes of Edinburgh and a historic series on the fishermen and fishwives of Newhaven.',
    ],
    style: [
      'They photographed outdoors, in strong sunlight, often with reflectors, and their portraits have a painterly atmosphere, with deep shadows reminiscent of Rembrandt. The slight softness of the calotype becomes a virtue in their hands.',
    ],
    works: [
      { title: 'Newhaven fishwives', year: 'c. 1845', note: 'One of the first series with a social subject: working women of a fishing community.' },
      { title: 'Portraits for the Disruption painting', year: '1843–47', note: 'The portraits that served as “sketches” for Hill’s huge painting.' },
    ],
    learn: ['Collaboration between an artist and a technician can create something new.', 'Strong, directional light with deep shadows gives a portrait character.'],
  },

  cameron: {
    name: 'Julia Margaret Cameron',
    nationality: 'British',
    oneLine: 'The photographer who broke the rules of sharpness to capture the soul.',
    glance: ['1815–1879', 'Started at the age of 48', 'Soft focus, very close portraits', 'Portraits of Tennyson, Herschel, Darwin'],
    life: [
      'Julia Margaret Cameron (1815–1879) was born in Calcutta and lived in India before settling in England. In 1863, when she was 48, her daughter and son-in-law gave her a camera. She turned a henhouse into a studio and a coal store into a darkroom, at her home in Freshwater on the Isle of Wight.',
      'In about twelve years she created hundreds of portraits and allegorical scenes. She photographed friends and neighbours, among them the poet Alfred Tennyson, the astronomer John Herschel and Charles Darwin.',
    ],
    style: [
      'The professionals of the time accused her of “bad” technique: blurred faces, scratches, fingerprints. But she deliberately chose soft focus and very close framing, to show not only appearance but also the inner world.',
      'The light usually falls from above and to the side, the backgrounds are dark, the faces fill the frame. She also created staged images on themes from the Bible and literature.',
    ],
    works: [
      { title: 'Sir John Herschel', year: '1867', note: 'The astronomer with tousled white hair against a dark background. One of the most powerful portraits of the 19th century.' },
      { title: 'Julia Jackson', year: '1867', note: 'A portrait of her niece, the mother of Virginia Woolf.' },
      { title: 'Illustrations to Tennyson’s “Idylls of the King”', year: '1874–75', note: 'Staged images from the Arthurian legends.' },
    ],
    learn: [
      '“Perfect” technique is not always the goal: expression can matter more.',
      'Get closer! A face that fills the frame speaks more strongly.',
      'It is never too late to start.',
    ],
    exercise: {
      title: 'A portrait like Cameron’s',
      steps: [
        'Place your subject near a window, with a dark background behind them.',
        'Get so close that the face fills almost the whole frame.',
        'Try one shot in full focus and one slightly out of focus. Which says more?',
      ],
    },
  },

  nadar: {
    name: 'Nadar',
    nationality: 'French',
    oneLine: 'The photographer of the great Parisians, and the first to photograph from a balloon.',
    glance: ['1820–1910', 'Real name: Gaspard-Félix Tournachon', 'Portraits of Baudelaire, Sarah Bernhardt, Delacroix', 'Aerial photography, photography by artificial light'],
    life: [
      'Gaspard-Félix Tournachon (1820–1910), known as Nadar, was a journalist and caricaturist before opening a photography studio in Paris in the early 1850s.',
      'Almost the entire artistic and intellectual elite passed through his studio: Baudelaire, Delacroix, Sarah Bernhardt, Hugo. In 1874 he lent his premises for the first Impressionist exhibition. He was also an inventor and a daredevil: in 1858 he photographed Paris from a balloon, and in the early 1860s the catacombs and sewers of Paris by artificial light.',
    ],
    style: [
      'Nadar’s portraits are simple: a neutral background, almost no props, light from above. Attention falls on the face and posture. He said that what cannot be taught is a feeling for light and immediate contact with the person you photograph.',
    ],
    works: [
      { title: 'Sarah Bernhardt', year: 'c. 1864', note: 'The young actress wrapped in a length of fabric, with utter simplicity.' },
      { title: 'Charles Baudelaire', year: 'c. 1855', note: 'One of many portraits of the poet, Nadar’s friend.' },
      { title: 'The Catacombs of Paris', year: 'c. 1861', note: 'Among the first photographs by artificial light, with long exposures and mannequins in place of workers.' },
    ],
    learn: [
      'Fewer props, more attention to the face.',
      'The relationship with the person you photograph shows in the image.',
      'Curiosity leads to new techniques: the air, the underground, artificial light.',
    ],
    exercise: {
      title: 'A portrait without props',
      steps: [
        'Place your subject in front of a plain wall, with light from a high or side window.',
        'Talk to them before you photograph: ask them to tell you a story.',
        'Photograph them from the waist up, with nothing else in the frame.',
      ],
    },
  },

  fenton: {
    name: 'Roger Fenton',
    nationality: 'English',
    oneLine: 'One of the first war photographers, in the Crimean War.',
    life: [
      'Roger Fenton (1819–1869) studied law and painting and was one of the founders of the Photographic Society of London (1853). In 1855 he travelled to the Crimea with a darkroom wagon and photographed the war.',
      'The slow wet collodion process did not allow photographs of battle. He photographed officers, camps and landscapes. Later he made important photographs of architecture, landscape and still life, but in 1862 he gave up photography and returned to the law.',
    ],
    style: [
      'His images from the Crimea are calm, almost without violence, partly because of the technique and partly because of the context: his mission had the backing of the state and of a publisher. In his still lifes he shows rich texture and a painterly feel.',
    ],
    works: [
      { title: 'The Valley of the Shadow of Death', year: '1855', note: 'A road strewn with cannonballs. There are two versions, with and without cannonballs on the road, and it is debated whether Fenton moved them.' },
      { title: 'Still lifes with fruit and flowers', year: '1860', note: 'Rich compositions reminiscent of Dutch painting.' },
    ],
    learn: ['Technique and context (who pays, for whom) affect what a photographer shows.', 'From the very beginning there were questions about staging in photojournalism.'],
  },

  muybridge: {
    name: 'Eadweard Muybridge',
    nationality: 'English (lived in the USA)',
    oneLine: 'The photographer who “froze” motion and opened the way to cinema.',
    glance: ['1830–1904', 'The Horse in Motion (1878)', 'Zoopraxiscope: projecting moving images', '“Animal Locomotion” (1887)'],
    life: [
      'Eadweard Muybridge (1830–1904), born Edward Muggeridge in Kingston upon Thames, England, emigrated to the USA. In California he became known for his landscape photographs, under the pseudonym “Helios”, including views of Yosemite.',
      'The businessman Leland Stanford asked him to prove whether a galloping horse at some moment lifts all four feet off the ground. In 1878, with a row of cameras triggered in sequence, he succeeded in recording it: yes, all four feet are in the air, but tucked under the body, not stretched out as in paintings.',
      'His life also had a dark side: in 1874 he killed his wife’s lover and was acquitted by a jury on grounds of “justifiable homicide”. Later, at the University of Pennsylvania, he photographed thousands of sequences of people and animals in motion.',
    ],
    style: [
      'His sequences are scientific: a grid in the background for measurement, successive frames, neutral presentation. But they also have a strange, almost artistic interest, and influenced painters (Degas, Bacon) and filmmakers.',
    ],
    works: [
      { title: 'The Horse in Motion', year: '1878', note: 'The sequence with the horse “Sallie Gardner” that settled the question of the gallop.' },
      { title: 'Animal Locomotion', year: '1887', note: 'More than 780 plates with motion sequences of people and animals.' },
      { title: 'Panorama of San Francisco', year: '1878', note: 'A large panorama made from 13 plates.' },
    ],
    learn: [
      'Photography can show what the eye cannot see: very fast motion, very slow change.',
      'Sequences of images tell stories that a single image cannot.',
      'Science and art often meet.',
    ],
    exercise: {
      title: 'Motion in frames',
      steps: [
        'Set your camera or phone to burst mode with a fast speed, e.g. 1/1000.',
        'Photograph a friend jumping or running, side-on, in front of a plain background.',
        'Choose 6–8 frames and lay them out in a row, like Muybridge. What do you see that you could not see with your eye?',
      ],
    },
  },

  osullivan: {
    name: 'Timothy O’Sullivan',
    nationality: 'American',
    oneLine: 'The photographer of the American Civil War and the wild West.',
    life: [
      'Timothy O’Sullivan (c. 1840–1882) worked in the American Civil War for the studios of Mathew Brady and Alexander Gardner. His photograph of the dead at Gettysburg is among the best known of the war.',
      'After the war he took part in government geological surveys of the West (with Clarence King and George Wheeler), carrying glass plates and a darkroom through deserts and canyons. He died young, of tuberculosis.',
    ],
    style: [
      'His landscape photographs are spare, almost modern: bare rocks, strong light, a small figure or a wagon for scale. Their aesthetic influenced 20th-century photographers such as the New Topographics.',
    ],
    works: [
      { title: 'A Harvest of Death, Gettysburg', year: '1863', note: 'Dead soldiers on the battlefield. Published in Gardner’s “Photographic Sketch Book of the War”.' },
      { title: 'Ancient Ruins in the Cañon de Chelle', year: '1873', note: 'The ancient Pueblo buildings beneath a huge cliff, known as the White House Ruin.' },
    ],
    learn: ['A person or an object of known size gives a landscape scale.', 'Strict, spare compositions stand the test of time.'],
  },

  atget: {
    name: 'Eugène Atget',
    nationality: 'French',
    oneLine: 'The solitary photographer who recorded Paris before it vanished.',
    glance: ['1857–1927', 'Around 10,000 negatives of Paris', '“Documents for artists”', 'Discovered by the Surrealists and Berenice Abbott'],
    life: [
      'Jean-Eugène-Auguste Atget (1857–1927) was a sailor and an actor before turning to photography around 1890. Above his door he wrote “Documents pour artistes”: he sold photographs to painters, architects, decorators, museums and libraries.',
      'For about thirty years, with a bulky glass-plate camera, he systematically photographed old Paris: lanes, courtyards, shops, shop windows, staircases, parks, street vendors. Much of it disappeared with the modernisation of the city.',
      'He died almost unknown. The young American photographer Berenice Abbott, who had met him, bought a large part of his archive and made it known. In 1968 Abbott’s Atget archive passed to MoMA.',
    ],
    style: [
      'Atget’s photographs are often empty of people: he photographed early in the morning, with long exposures. This gives a dreamlike, melancholy atmosphere. The reflections in shop windows and the shop mannequins thrilled the Surrealists, who published his images.',
      'He did not consider himself an artist. But his persistent, systematic eye influenced Walker Evans, street photography and the idea of the “archive” in contemporary art.',
    ],
    works: [
      { title: 'Rue Mouffetard (shops and street vendors)', year: 'c. 1900–1925', note: 'From the great series on the trades and streets of old Paris.' },
      { title: 'Shop window with mannequins, Avenue des Gobelins', year: '1925', note: 'The reflections merge with the mannequins. A favourite image of the Surrealists.' },
      { title: 'Parc de Sceaux', year: '1925', note: 'Misty statues and trees, from the last years of his life.' },
    ],
    learn: [
      'Persistence counts: thousands of images of the same place become a city’s memory.',
      'Empty streets, early in the morning, have their own poetry.',
      'Reflections in shop windows create layers and mystery.',
    ],
    exercise: {
      title: 'Your neighbourhood, early in the morning',
      steps: [
        'Go out into your neighbourhood in the first hour after sunrise.',
        'Photograph 10 places that may change or disappear: an old shop, a door, a shop window.',
        'Keep the images with their dates. In ten years they will be documents.',
      ],
    },
  },

  emerson: {
    name: 'Peter Henry Emerson',
    nationality: 'British (born in Cuba)',
    oneLine: 'The doctor who championed the “naturalistic” photography of rural England.',
    life: [
      'Peter Henry Emerson (1856–1936) was born in Cuba to an American father and an English mother and studied medicine in England. In the 1880s he photographed rural life in the marshes of the Norfolk Broads.',
      'In his book “Naturalistic Photography” (1889) he argued that photography is an art and should imitate human vision: slightly soft at the edges, sharp at the centre of interest, without tricks or montage. In 1890, however, he wrote a pamphlet titled “The Death of Naturalistic Photography”, in which he retracted some of his views.',
    ],
    style: [
      'Poetic images of farmers, fishermen and reeds in the water, printed in platinum or photogravure, with soft tones. A forerunner of the pictorialist movement.',
    ],
    works: [
      { title: 'Life and Landscape on the Norfolk Broads', year: '1886', note: 'An album of platinum prints, made with the painter Thomas Goodall.' },
      { title: 'Gathering Water-Lilies', year: '1886', note: 'A couple in a boat gathering water lilies: his best-known image.' },
    ],
    learn: ['Selective focus leads the eye to what matters.', 'Our theories may change, and that is part of thinking.'],
  },

  kasebier: {
    name: 'Gertrude Käsebier',
    nationality: 'American',
    oneLine: 'The portraitist of motherhood and a founding member of the Photo-Secession.',
    life: [
      'Gertrude Käsebier (1852–1934) studied painting and turned to photography in middle age, after raising her children. She opened a portrait studio in New York in 1897 and became one of the best-known portraitists of the time.',
      'She was a founding member of the Photo-Secession (1902), and the first issue of “Camera Work” (1903) was devoted to her work. Later she distanced herself from Stieglitz, and in 1916 she helped found the Pictorial Photographers of America.',
    ],
    style: [
      'Soft light, simple backgrounds, compositions inspired by Renaissance painting. A frequent subject is the mother–child relationship. She also photographed members of “Buffalo Bill’s Wild West” show, with respect and without the stereotypes of the time.',
    ],
    works: [
      { title: 'Blessed Art Thou Among Women', year: '1899', note: 'Mother and daughter in a doorway: an emblematic image of pictorialism.' },
      { title: 'Portraits from the Wild West show', year: '1898', note: 'Portraits of the show’s Native American performers.' },
    ],
    learn: ['Simple backgrounds and soft light let the relationship between people speak.', 'Respect for the subject shows in the photograph.'],
  },

  steichen: {
    name: 'Edward Steichen',
    nationality: 'American (born in Luxembourg)',
    oneLine: 'From pictorialism to fashion, war and the largest photography exhibition in history.',
    life: [
      'Edward Steichen (1879–1973) was born in Luxembourg and grew up in the USA. A painter and photographer, he was a founding member of the Photo-Secession and helped Stieglitz open the “291” gallery in New York.',
      'In the First World War he organised aerial photography for the US Army. In the 1920s and 1930s he was the chief photographer for Vogue and Vanity Fair. From 1947 to 1962 he directed MoMA’s photography department, where he organised the exhibition “The Family of Man” (1955), which travelled all over the world.',
    ],
    style: [
      'From the atmospheric, painterly works of the early century he moved to a clean, modern, graphic style, with strong studio light for portraits and fashion.',
    ],
    works: [
      { title: 'The Pond—Moonlight', year: '1904', note: 'A handmade print with coloured layers. A copy sold in 2006 for almost 3 million dollars, a record at the time.' },
      { title: 'Rodin—Le Penseur', year: '1902', note: 'A combination of two negatives: the sculptor with his works.' },
      { title: 'Gloria Swanson', year: '1924', note: 'The actress’s face behind a lace veil.' },
    ],
    learn: ['A photographer can change style and role many times.', 'Curating an exhibition is also creation: the order of the images tells a story.'],
  },

  stieglitz: {
    name: 'Alfred Stieglitz',
    nationality: 'American',
    oneLine: 'The photographer, publisher and gallerist who made photography modern art.',
    glance: ['1864–1946', 'Photo-Secession (1902), the magazine “Camera Work”', 'The “291” gallery', '“The Steerage” (1907), “Equivalents”'],
    life: [
      'Alfred Stieglitz (1864–1946) was born in Hoboken, New Jersey, and studied in Berlin, where he discovered photography. Back in New York, he became the most active champion of photography as art.',
      'He founded the Photo-Secession (1902) and the magazine “Camera Work” (1903–1917), with superb photogravures. In his “291” gallery he showed not only photographs but also, for the first time in America, works by Matisse, Picasso, Rodin and Brâncuși.',
      'Later he married the painter Georgia O’Keeffe, whom he photographed in a long-running “composite portrait” of hundreds of images. In the 1920s he photographed clouds, the “Equivalents”, considered among the first abstract photographs.',
    ],
    style: [
      'He began with pictorialism but moved to straight photography: a clean frame, geometry, intensity. He believed a photograph could express emotions, like music, even without a recognisable subject.',
    ],
    works: [
      { title: 'The Steerage', year: '1907', note: 'Third-class passengers on an ocean liner. He later considered it one of his most important images, for its composition of shapes and people.' },
      { title: 'Winter, Fifth Avenue', year: '1893', note: 'A carriage in a snowstorm, after hours of waiting in the cold.' },
      { title: 'Equivalents', year: '1925–1934', note: 'A series of photographs of clouds, as images of emotions.' },
    ],
    learn: [
      'Patience brings the moment: wait for the right combination of light and movement.',
      'A photograph can be an emotion, not just a description.',
      'Photographers need spaces, magazines and communities to develop.',
    ],
    exercise: {
      title: 'Your own “Equivalents”',
      steps: [
        'Photograph clouds for a week, with no horizon in the frame.',
        'Choose three images that fit three emotions: calm, tension, melancholy.',
        'Show them to friends without titles. Can they guess which emotion is which?',
      ],
    },
  },
};
