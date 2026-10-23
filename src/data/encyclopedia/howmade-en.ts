import type { HowMadeText } from './howmade';

/** “How it was made”: English text */
export const HOWMADE_EN: Record<string, HowMadeText> = {
  'le-gras': {
    title: 'View from the Window at Le Gras',
    photographerName: 'Nicéphore Niépce',
    oneLine: 'The oldest surviving camera photograph: roofs and walls, as “seen” by a bitumen-coated plate for hours or days.',
    captions: ['Nicéphore Niépce, “View from the Window at Le Gras”, c. 1826–27 (reproduction).'],
    context: [
      'Niépce, an inventor from Burgundy, experimented for years with ways to “fix” the image of the camera obscura. At his estate at Le Gras, he set up a camera at an upstairs window and pointed it at the roofs and outbuildings opposite.',
      'The plate was forgotten for many decades and rediscovered in 1952 by the photography historian Helmut Gernsheim. Today it is kept at the Harry Ransom Center of the University of Texas, in Austin.',
    ],
    technique: [
      'Niépce used a polished pewter plate (an alloy of tin and lead), coated with bitumen of Judea, a material that hardens in light. After the exposure, he washed the plate with a solvent that dissolved the parts of the bitumen that had not hardened. The method was called heliography.',
      'The exposure was extremely long. Estimates vary widely, from about eight hours to several days. That is why, according to one interpretation, the sun seems to light the buildings from both sides: it moved across the sky while the plate was “looking”.',
    ],
    decisions: [
      'The subject was not chosen for its beauty, but because it was still and bright: in an exposure of hours, anything that moved would not be recorded.',
      'The high window gave a fixed position and a clear view. The image is, in a sense, the first “photograph from a window”, a subject photographers have repeated countless times.',
    ],
    learn: [
      'Technique determines what can be photographed: with an exposure of hours, only what stays still exists.',
      'Time is part of every photograph, even if we do not see it.',
    ],
    exercise: {
      title: 'The view from your own window',
      steps: [
        'Set up your phone or camera at a window, in the same spot, for a whole day.',
        'Take a photograph every two hours.',
        'Put the photographs side by side: how do the light and shadows change?',
      ],
    },
  },

  'boulevard-du-temple': {
    title: 'Boulevard du Temple',
    photographerName: 'Louis Daguerre',
    oneLine: 'A busy Paris street that looks empty, except for one man who stood still long enough.',
    captions: ['Louis Daguerre, “Boulevard du Temple”, Paris, 1838.'],
    context: [
      'In 1838, a year before the official presentation of the daguerreotype, Daguerre photographed the Boulevard du Temple in Paris from his window. It was one of the busiest boulevards in the city, full of carriages and pedestrians.',
    ],
    technique: [
      'The daguerreotype was a silver-plated copper plate, sensitised with iodine fumes and developed with mercury vapour. It was far more sensitive than Niépce’s heliography, but the exposure still lasted minutes.',
      'In that time, everything that moved, carriages and pedestrians, passed without leaving a trace. But one man, at the lower left, stood still while his boots were being polished. And so, in all likelihood, he became the first person ever recorded in a photograph.',
    ],
    decisions: [
      'The high position gave a broad view of the boulevard and the depth of the city.',
      'The result, an “empty” street, was not a choice but a limit of the technique. Today we reproduce it deliberately with ND filters, to make the crowd “disappear” from a monument.',
    ],
    learn: [
      'Long exposures “erase” what moves and keep what stays.',
      'A technical weakness can become, years later, an expressive tool.',
    ],
    exercise: {
      title: 'The “empty” street',
      steps: [
        'With an ND filter (or your phone’s long-exposure mode), photograph a busy street with an exposure of 30 seconds or longer.',
        'Ask a friend to stand completely still in the frame.',
        'Compare with a shot at 1/250.',
      ],
    },
  },

  herschel: {
    title: 'Portrait of Sir John Herschel',
    photographerName: 'Julia Margaret Cameron',
    oneLine: 'A face emerging from darkness: one of photography’s first “psychological” portraits.',
    captions: ['Julia Margaret Cameron, “Sir John Herschel”, 1867.'],
    context: [
      'Cameron began photographing at about 48, when she was given a camera as a present. Within a few years she became one of the most original portraitists of the 19th century, photographing friends, family and famous figures of the time.',
      'John Herschel, astronomer and chemist, was her friend and one of the pioneers of photography itself: he is credited with establishing terms such as “negative” and “positive”.',
    ],
    technique: [
      'Cameron worked with the wet collodion process: glass plates that had to be prepared, exposed and developed while still wet. Exposures lasted from several seconds to minutes, and the sitter had to stay still.',
      'She used lenses at very close range, with minimal depth of field, and did not hide the soft focus or small movements that her contemporaries considered “mistakes”.',
    ],
    decisions: [
      'A very close frame: the face fills the image, something unusual for the portraits of the time, which usually showed the whole body in a staged setting.',
      'A dark background and light from above and to the side: the face “emerges” from the darkness, with the hair catching the light.',
      'Soft focus as a choice: Cameron was interested in character, not technical perfection.',
    ],
    learn: [
      'Distance changes the relationship with the person: very close = intimacy, intensity.',
      'A technical “mistake” can become a signature of style.',
      'A dark background and side light are the simplest “studio” there is.',
    ],
    exercise: {
      title: 'A portrait out of the dark',
      steps: [
        'Place a person beside a window, with a dark space behind them.',
        'Get close enough that the face fills the frame.',
        'Meter on the bright cheek and let the background go black.',
      ],
    },
  },

  'valley-shadow': {
    title: 'The Valley of the Shadow of Death',
    photographerName: 'Roger Fenton',
    oneLine: 'Two photographs from the same position, with one difference: where the cannonballs are. The first great controversy over “staged” war photography.',
    captions: [
      'Roger Fenton, “The Valley of the Shadow of Death”, 1855: the version with the cannonballs at the sides of the road.',
      'The same view, the version with the cannonballs on the road.',
    ],
    context: [
      'In 1855, Fenton photographed the Crimean War. He was one of the first to photograph war systematically. Soldiers had named a valley near Sevastopol “the valley of the shadow of death”, from Psalm 23, because it was constantly under bombardment. Fenton set up there and made two exposures from the same position.',
    ],
    technique: [
      'Fenton worked with wet collodion in a mobile darkroom, a carriage-laboratory, in difficult conditions of heat and dust. Exposures lasted seconds. So he could not photograph battles, only places, people posing, and the traces of war.',
    ],
    decisions: [
      'In one version the cannonballs are mainly in the ditches at the sides of the road. In the other, they are scattered on the road. For years it was debated which was taken first. The filmmaker Errol Morris, comparing the position of small stones that had moved between the two exposures, concluded in 2007 that the “empty” road came first. That means someone moved cannonballs onto the road before the second exposure.',
      'Why? Perhaps for a more dramatic image, perhaps for other reasons. We do not know for certain. But the question remains central to the ethics of documentary photography: how much intervention is allowed, and must it be declared?',
    ],
    learn: [
      'Documentary photographs are read as testimony, so every intervention carries ethical weight.',
      'Comparing two versions is an excellent way to see a photographer’s decisions.',
    ],
    exercise: {
      title: 'Two versions',
      steps: [
        'Photograph a scene as you find it. Then change just one element: move an object or ask someone to step into the frame.',
        'Show the two versions to someone: which “says” more?',
        'Write how you would publish it, so as to be honest about what happened.',
      ],
    },
  },

  'horse-in-motion': {
    title: 'The Horse in Motion',
    photographerName: 'Eadweard Muybridge',
    oneLine: 'Twelve cameras, a galloping horse, and the answer to a question the eye could not see.',
    captions: ['Eadweard Muybridge, “The Horse in Motion”, 1878 (animated reproduction).'],
    context: [
      'The industrialist and former governor of California Leland Stanford, an owner of racehorses, wanted to know whether at some moment in the gallop a horse lifts all four feet off the ground. It is often said that it all began with a bet, but that story is disputed. Stanford gave the problem to the photographer Muybridge.',
    ],
    technique: [
      'In 1878, on Stanford’s estate at Palo Alto, Muybridge placed twelve cameras in a row, facing a white wall marked with lines. The shutters were triggered in sequence as the horse passed, by threads and an electrical mechanism, and were much faster than was usual at the time.',
      'The sequence of images proved that the horse does indeed float in the air, but when its legs are gathered under its body, not stretched out front and back, as it had been painted for centuries.',
    ],
    decisions: [
      'The white wall with lines gave contrast and scale: it made the horse’s silhouette clear and allowed the motion to be measured.',
      'The sequence, not the single image, was the work. Muybridge later projected such sequences in motion with a device he invented, the zoopraxiscope, an ancestor of cinema.',
    ],
    learn: [
      'A fast shutter speed shows us the world the eye cannot catch.',
      'A sequence of images can say something none says alone.',
    ],
    exercise: {
      title: 'Motion in sequence',
      steps: [
        'Photograph someone jumping, running or dancing in burst mode, against a clean background.',
        'Choose 6–8 consecutive frames and put them in a row.',
        'Find the frame at the “peak” of the movement.',
      ],
    },
  },

  'bandits-roost': {
    title: 'Bandit’s Roost',
    photographerName: 'Jacob Riis (and Richard Hoe Lawrence)',
    oneLine: 'A narrow New York alley full of people looking at the camera: one of the foundations of social documentary photography.',
    captions: ['“Bandit’s Roost”, 59½ Mulberry Street, New York, c. 1887–88.'],
    context: [
      'Jacob Riis, a Danish immigrant and journalist, documented the wretched living conditions in Manhattan’s slums. In 1890 he published his book “How the Other Half Lives”, which influenced public opinion and housing reforms. Riis worked with amateur photographers, and this photograph is now often attributed to his collaborator Richard Hoe Lawrence.',
    ],
    technique: [
      'The dark alleys and rooms of the slums could not be photographed by available light. Shortly before, magnesium flash powder had appeared in Germany: an explosive flash that for an instant lit spaces that had been impossible to photograph. Riis and his collaborators adopted it almost at once.',
      'In “Bandit’s Roost” the light is probably natural, from the opening of the alley, but the logic is the same: to get the camera where it had never been.',
    ],
    decisions: [
      'The narrow alley works as a leading line into depth, and the people on both sides “frame” the scene.',
      'The people look at the camera: this is not a hidden photograph, but an encounter, which makes the image more direct and more disturbing.',
      'The purpose was social: photography as evidence to change something.',
    ],
    learn: [
      'Photography can become a tool for social change.',
      'New techniques, like flash then, open up new subjects.',
      'The attribution of photographs is not always simple. Archival research can change the names.',
    ],
    exercise: {
      title: 'A place we do not see',
      steps: [
        'Think of a place in your town that most people pass by or do not see.',
        'Photograph it with respect, asking permission from those pictured.',
        'Write a two-sentence caption with precise facts.',
      ],
    },
  },

  steerage: {
    title: 'The Steerage',
    photographerName: 'Alfred Stieglitz',
    oneLine: 'A scene on a ship’s deck that Stieglitz saw as a composition of shapes, and considered one of his most important photographs.',
    captions: ['Alfred Stieglitz, “The Steerage”, 1907.'],
    context: [
      'In 1907, Stieglitz was travelling to Europe on the liner Kaiser Wilhelm II. Bored in first class, he walked to the end of the deck and looked down at the “steerage” passengers. The photograph is often presented as an image of immigrants arriving in America, but the ship was sailing from America to Europe.',
    ],
    technique: [
      'As he later told it, he ran to his cabin for his camera, afraid the scene would have changed by the time he returned. The photograph was published in 1911 in his magazine, “Camera Work”, and later became emblematic of “straight” photography.',
    ],
    decisions: [
      'Stieglitz described seeing shapes first: a round straw hat, a funnel leaning one way, a stairway leaning the other, and the white gangway dividing the frame in two.',
      'The gangway divides the image into an upper and a lower level, and the composition also becomes a social structure.',
      'Nothing was staged: “straight” photography depended on seeing the composition within reality.',
    ],
    learn: [
      'See shapes and lines, not only “subjects”.',
      'Composition can say something about the relationship between the people in the frame.',
      'A title or caption can change how an image is read: always check the facts.',
    ],
    exercise: {
      title: 'Geometry in reality',
      steps: [
        'Find a high point with a view of people (a balcony, a bridge, a staircase).',
        'Look for a line that divides the frame in two.',
        'Wait until the people “complete” the composition.',
      ],
    },
  },

  'wall-street': {
    title: 'Wall Street',
    photographerName: 'Paul Strand',
    oneLine: 'Tiny people beneath the huge dark windows of a bank: the city as abstract form.',
    captions: ['Paul Strand, “Wall Street”, New York, 1915.'],
    context: [
      'Strand, a young photographer influenced by Stieglitz and by the abstraction of modern painting, photographed pedestrians in the morning passing in front of the J.P. Morgan & Co. bank building on Wall Street. The photograph was published in “Camera Work” no. 48 (October 1916). Stieglitz devoted the magazine’s last issue (no. 49/50, 1917) entirely to Strand.',
    ],
    technique: [
      'The low morning light casts very long shadows on the pavement, echoing the shapes of the people. The building, in shadow, becomes a series of huge dark rectangles.',
    ],
    decisions: [
      'A high viewpoint and great distance: the people become small, almost symbols, before the mass of the building.',
      'A contrast of scale: small bodies and huge windows, life and the power of money.',
      'The image crops the building, so it reads not as a “building” but as a pattern.',
    ],
    learn: [
      'Morning or afternoon light makes shadows that become part of the composition.',
      'Scale, small against large, is a powerful means of expression.',
      'Abstraction can exist within documentary too.',
    ],
    exercise: {
      title: 'People and architecture',
      steps: [
        'Find a large building with repeating patterns and low light.',
        'Position yourself high up or far away, so the people are small in the frame.',
        'Wait until the shadows and the pedestrians form a rhythm.',
      ],
    },
  },

  'migrant-mother': {
    title: 'Migrant Mother',
    photographerName: 'Dorothea Lange',
    oneLine: 'The best-known photograph of the American Depression is not a single shot, but the end of a short series in which the photographer moves closer step by step.',
    captions: [
      'The scene from a distance: the tent and the family.',
      'Closer: the mother with the children, a plate on the box.',
      'Closer still: the mother nursing.',
      'The mother with the children, a tighter frame.',
      'The final, iconic shot.',
    ],
    context: [
      'In March 1936, Lange was photographing for the government’s Resettlement Administration, later the Farm Security Administration (FSA), documenting the lives of poor farmers and workers during the Depression. On her way back from an assignment, she stopped at a camp of pea pickers in Nipomo, California.',
      'The woman in the photograph is Florence Owens Thompson. Her name only became public in 1978. She later said the photograph brought her no benefit, while it became one of the most reproduced images in the world: a question about the ethics of documentary photography that is still debated.',
    ],
    technique: [
      'Lange made a short series of exposures, five or six (she herself spoke of five), with a large-format camera, within a few minutes. The frames held at the Library of Congress show how the photographer moved gradually closer: from the tent with the family, to the mother with the children, and finally to the close-up of the iconic photograph. The exact order of the exposures is not entirely certain.',
      'In the final image, the two children turn their faces away from the camera and “frame” the mother. Around 1939, on Lange’s instructions, the negative itself was retouched to remove the mother’s thumb in the lower right corner. According to later accounts, Roy Stryker, head of the photographic section, disagreed.',
    ],
    decisions: [
      'Approaching in steps: from the surroundings to the face. The first exposures say “where”, the last says “who” and “what she feels”.',
      'The gesture: the hand at the chin and the gaze beyond the camera turn the image from a document of poverty into a portrait of worry.',
      'The frame removes every detail of place, so the image becomes almost “timeless”.',
    ],
    learn: [
      'Do not stop at the first shot: get closer, try things, find the image through a series.',
      'Contact sheets, the whole series, teach far more than the one “good” photograph.',
      'Photographing people in difficult circumstances has ethical consequences that live on long after the shot.',
    ],
    exercise: {
      title: 'The approach series',
      steps: [
        'Find a subject with people (with their permission) or an object in a space.',
        'Take 6 photographs: from a wide shot that shows the space to a very close one.',
        'Put them in order and choose one. What do you gain and what do you lose at each step?',
      ],
    },
  },

  tetons: {
    title: 'The Tetons and the Snake River',
    photographerName: 'Ansel Adams',
    oneLine: 'One of the best-known American landscapes, made for a government commission, now travelling through interstellar space.',
    captions: ['Ansel Adams, “The Tetons and the Snake River”, Grand Teton National Park, 1942.'],
    context: [
      'In 1941–42, Ansel Adams photographed the US national parks for the Department of the Interior, for a series of murals (the Mural Project). Because they were made for the government, these photographs are now in the public domain and are held at the US National Archives.',
      'The photograph was included on the “Golden Record” of the Voyager spacecraft, launched in 1977 with images and sounds of Earth.',
    ],
    technique: [
      'Adams worked mainly with large-format cameras and black-and-white film, and had developed, with Fred Archer, the Zone System: he planned at the moment of exposure where each tone would fall in the final print, controlling exposure and development.',
      'In printing, Adams worked extensively with “dodge & burn” in the darkroom, to control the intensity of the sky, the water and the mountains.',
    ],
    decisions: [
      'The curve of the river works as a leading line that takes the eye from the foreground towards the mountains.',
      'A high position: the view from above shows the whole course of the water.',
      'The light: the river “shines” within the dark land, and the clouds give drama to the sky.',
      'Black and white with a full range of tones, from deep blacks to whites with detail.',
    ],
    learn: [
      'A landscape needs a line that leads the eye, and light that brings out the forms.',
      'Planning the tones, from exposure to print, is part of the image.',
      'The position, high up, with a view of the whole “shape” of the scene, is often half the photograph.',
    ],
    exercise: {
      title: 'The line of the landscape',
      steps: [
        'Find a landscape with an element that forms a curve: a road, a river, a coastline, a path.',
        'Climb higher so the whole curve shows.',
        'Photograph at two times of day with different light and make a black-and-white version with a full range of tones.',
      ],
    },
  },
};
