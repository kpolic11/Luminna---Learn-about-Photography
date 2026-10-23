import type { ChapterText } from '../../types';
import { MEDIA } from '../../media';

/** Chapter 20 — full version */
export const ch20: ChapterText = {
  title: 'Digital, Phones and Artificial Intelligence',
  subtitle: 'From a cassette holding 10,000 pixels to images a machine makes from words',
  era: '1957 – today',
  summary:
    'In half a century, photography went from film to sensors, from cameras to phones, from albums to social media. Today the phone thinks with us before we press the button, and artificial intelligence can make “photographs” that were never taken. What does a photograph mean any more?',
  sections: [
    {
      heading: 'The first pixels',
      paragraphs: [
        'In 1957, at the US National Bureau of Standards, the computer scientist Russell Kirsch put a photograph of his baby son into a scanner his team had built. The computer turned it into a grid of small squares, each one black or white. The image was only 176 by 176 squares, but it was one of the first digital images in history. Today we call those squares “pixels”, from “picture element”.',
        'The basic idea of digital photography is simple: the image is divided into many small points, and for each point a number is stored that says how bright it is or, in colour, how much red, green and blue it has. A photograph becomes a big block of numbers. And numbers can be copied, sent and changed without any loss.',
      ],
    },
    {
      heading: 'The sensor and the first digital camera',
      paragraphs: [
        'To build a digital camera, something had to replace film: an electronic “eye”. In 1969, at Bell Labs, Willard Boyle and George Smith designed the CCD sensor, a chip that converts light into electric charge. For this invention they received the 2009 Nobel Prize in Physics.',
        'In December 1975 a young Kodak engineer, Steven Sasson, assembled the first digital camera on historical record. It weighed about three to four kilos (8 pounds), produced black-and-white images of 100 by 100 pixels, that is 0.01 megapixels, and needed about 23 seconds to record one photograph onto an audio cassette. To see it, you had to connect the cassette to a television.',
        'Kodak patented the invention, but was in no hurry: the company made huge sums from film, and a camera without film threatened its own business. Shortly afterwards, in 1976, another Kodak scientist, Bryce Bayer, patented the filter that bears his name: a mosaic of tiny red, green and blue filters over the sensor, which makes it possible to record colour. Almost every digital camera today uses a version of it, the same idea as Maxwell’s three filters.',
      ],
    },
    {
      heading: 'Photoshop and the malleable image',
      paragraphs: [
        'In February 1990 the first version of Photoshop came out, an image-editing program developed by the brothers Thomas and John Knoll and released by Adobe. Suddenly, what photographers did in the darkroom with hours of work, lightening and darkening areas, changing contrast, could be done on screen. And much more: erasing an object, joining two images, changing a face.',
        'Photoshop became so dominant that its name became a verb. At the same time, it brought an old question back to the fore, one we saw with Fenton and Rejlander: how much can a photograph be changed before it stops being true? The answer depends on the use: in art and advertising, manipulation is acceptable; in documentary and news, it is not.',
      ],
    },
    {
      heading: 'The digital revolution',
      paragraphs: [
        'In the 1990s the first digital cameras for professionals and amateurs appeared. They were expensive and low in resolution, but they had a huge advantage: you saw the photograph immediately and could send it. News agencies were among the first to adopt them. In 1999 Nikon launched the D1, a digital SLR at a price many professionals could afford, and within a few years newspapers abandoned film.',
        'By the mid-2000s digital cameras had overtaken film in sales. Photo labs closed one after another. In January 2012 Kodak, the company that had brought photography to millions and had invented the digital camera, filed for bankruptcy. It became the most famous example of a company that failed to keep up with a technological change.',
        'Film did not die, though. Today many young photographers are rediscovering it, for its texture, the waiting and the thought every shot demands.',
      ],
    },
    {
      heading: 'The camera in your pocket',
      paragraphs: [
        'Around 2000, in Japan, the first mobile phones with built-in cameras appeared, such as the Sharp J-SH04, which could send photographs. The quality was very low, but the idea was revolutionary: the camera was always with you.',
        'In 2007 the iPhone came out, followed by many other smartphones, with large touchscreens and internet access. In 2010 Instagram appeared, an app for sharing square photographs with filters that recalled old film. Within a few years, people were taking a huge share of all the photographs ever taken within a single year.',
        'This abundance changed what a photograph means. It is no longer only a memory or art: it is a way of communicating, like a language. We send a photo of our plate the way we once would have sent a message. At the same time, citizens with phones became witnesses to events no professional would have caught, and their images sparked major public debates.',
      ],
    },
    {
      heading: 'Computational photography: the phone that thinks',
      paragraphs: [
        'A phone’s sensor is much smaller than that of a professional camera, and its lens is tiny. Normally, its photographs would be noisy in the dark and could not blur the background. So why do they produce such impressive pictures?',
        'The answer is “computational photography”. When you press the button, the phone does not take one photograph. It takes many, very quickly, with different settings, and merges them with algorithms: it takes the shadows from one, the sky from another, reduces noise, brightens faces. “Night mode” combines dozens of frames to see in the dark. “Portrait mode”, which became widespread around 2016, calculates how far away each point of the scene is and blurs the background artificially.',
        'This means that your phone’s photograph is, to some extent, the software’s interpretation of the scene. Usually it is very faithful. But it is good to know that between the light and the image there is now a computer making decisions. In the School we will see how to take control yourself, with Pro mode and RAW files.',
      ],
    },
    {
      heading: 'Images without a camera: artificial intelligence',
      paragraphs: [
        'In 2022, tools such as DALL·E 2, Midjourney and Stable Diffusion became available to the public. You write a description, for example “a girl in an Athens market, black-and-white photograph from 1950”, and within seconds you get an image that looks like a photograph. But there is no girl, no market, no camera. The image has been generated by a program that has “learned” from millions of existing images.',
        'The consequences appeared quickly. In March 2023 a fake image of the Pope in a fashionable white puffer jacket went viral, and many people believed it. In April of the same year the German artist Boris Eldagsen won a major international photography award with an image he had created with artificial intelligence, and turned the award down, saying he wanted to open the debate on whether such images belong in photography competitions.',
        'There are serious ethical issues too: images used to “train” these tools without their creators’ permission, fake images of real people, disinformation in wars and elections.',
      ],
    },
    {
      heading: 'How do we know what is real?',
      paragraphs: [
        'To tackle this crisis of trust, technology and media companies (Adobe, Microsoft, Intel, the BBC and others) founded the C2PA coalition in 2021 to create an open standard; the information it records is shown as “Content Credentials”. Camera makers joined later. The idea is that the camera digitally “signs” the image at the moment of capture, and every change during editing is recorded, so you can check where a photograph comes from and what was done to it. Cameras with this capability have been on sale since 2023.',
        'But no technology replaces critical thinking. When you see a striking image, especially of a serious event, ask: who published it first? Are there other images of the same event, from other sources? Does anything look unnatural, hands, text, shadows? And before you share it: am I sure it is real?',
      ],
    },
    {
      heading: 'What stays the same',
      paragraphs: [
        'On this journey we have seen photography change form again and again: metal plates, paper, glass, film, sensors, algorithms. Each time, some people feared that the new technology would kill photography. Each time, photography changed and carried on.',
        'What stays the same is the way of seeing. A machine can make an image from words, but it cannot be there, see your grandmother laugh, wait for the light over the sea, or respect the person in front of it. As long as there are people who look at the world with attention and want to keep something of it, photography will exist. And now it is your turn.',
      ],
    },
  ],
  keyConcepts: ['Pixel', 'CCD/CMOS sensor', 'Bayer filter', 'Image editing', 'Computational photography', 'AI-generated images', 'Content Credentials', 'Critical reading of images'],
  historicalFigures: ['Russell Kirsch', 'Willard Boyle & George Smith', 'Steven Sasson', 'Bryce Bayer', 'Thomas & John Knoll', 'Boris Eldagsen'],
  imageCaption: 'Steven Sasson’s first digital camera (Kodak, 1975).',
  featuredWork: {
    title: 'The first digital camera',
    author: 'Steven Sasson (Kodak)',
    year: '1975',
    description:
      'A prototype assembled from parts: a lens from a movie camera, electronic circuits, a CCD sensor and a cassette recorder. It was never sold.',
    observe: [
      'Look at the size: it is a big box of circuits, not an elegant camera. Every revolution starts out ugly.',
      'The image was 100 × 100 pixels. Compare it with your phone: how many times more pixels does a photograph have today?',
      'Storage was on an audio cassette, and you needed a television to see the photograph. “Instant” did not exist yet.',
      'Think about it: why was a company that lived on film in no hurry to launch this invention?',
    ],
    imageUrl: MEDIA.sassonCamera.url,
    credit: MEDIA.sassonCamera.credit,
  },
  exercise: {
    title: 'Find out what your phone does “behind your back”',
    intro:
      'You will run experiments to understand how much software intervenes in your photographs, and how to take control.',
    steps: [
      'In a fairly dark room, photograph the same scene with night mode on and off. What changed?',
      'Take a portrait in portrait mode. Zoom in on the hair and ears: find spots where the software “got confused”.',
      'Photograph a scene with a very bright sky and dark areas. See how “smooth” the image is compared with what your eyes saw.',
      'If your phone supports it, shoot in RAW (or “ProRAW” / “Expert RAW”) and compare with the normal photograph.',
      'Try an object-removal tool and erase something from a photograph. Is it still “true”?',
      'Write a personal rule: when will you say that an image of yours has been altered or generated with artificial intelligence?',
    ],
    takeaway:
      'You will understand that modern photography is a collaboration between people and software, and that honesty about how an image was made is now part of the art.',
  },
  didYouKnow: [
    'The first digital camera (1975) took about 23 seconds to store one black-and-white photograph on a cassette.',
    'The inventors of the CCD sensor, Willard Boyle and George Smith, received the Nobel Prize in Physics in 2009.',
    'The Bayer filter, found in almost every digital camera, has twice as many green filters as red or blue, because the human eye is most sensitive to green.',
    'In 2023 Boris Eldagsen turned down an international photography award, revealing that his image had been made with artificial intelligence.',
  ],
  quiz: [
    {
      id: 'c20q1',
      question: 'What is a “pixel”?',
      options: [
        'A kind of lens',
        'The smallest element of a digital image, with one brightness or colour value',
        'A unit for measuring light',
        'An Instagram filter',
      ],
      correctIndex: 1,
      explanation: 'A digital image is a grid of pixels, each stored as a number.',
    },
    {
      id: 'c20q2',
      question: 'Why was Kodak in no hurry to launch the digital camera it invented in 1975?',
      options: [
        'It was illegal',
        'It threatened the company’s profitable film business',
        'It did not work',
        'Another company invented it',
      ],
      correctIndex: 1,
      explanation: 'A classic example of a company afraid to “cannibalise” its own product. In 2012 Kodak filed for bankruptcy.',
    },
    {
      id: 'c20q3',
      question: 'What does “computational photography” do in phones?',
      options: [
        'It counts how many photographs you have',
        'It combines many frames with algorithms for a better image',
        'It prints photographs',
        'It deletes bad photographs',
      ],
      correctIndex: 1,
      explanation: 'Night mode, HDR, portrait: all are based on combining frames and calculations.',
    },
    {
      id: 'c20q4',
      question: 'What are “Content Credentials”?',
      options: [
        'A social network',
        'An image’s provenance information (C2PA standard): where it comes from and what changes were made',
        'A filter for portraits',
        'A photography award',
      ],
      correctIndex: 1,
      explanation: 'The idea is to be able to check where a photograph comes from and whether it has been altered.',
    },
    {
      id: 'c20q5',
      question: 'What is the first thing worth asking about a striking image of a serious event?',
      options: [
        'How many likes it has',
        'Who published it first, and whether there are other sources',
        'Whether it is in colour',
        'Which phone took it',
      ],
      correctIndex: 1,
      explanation: 'Cross-checking sources is the best weapon against fake images.',
    },
  ],
  sources: [
    { title: 'First digital image (Russell Kirsch) — NIST', url: 'https://www.nist.gov/news-events/news/2007/05/fiftieth-anniversary-first-digital-image-marked' },
    { title: 'The 2009 Nobel Prize in Physics (CCD) — NobelPrize.org', url: 'https://www.nobelprize.org/prizes/physics/2009/summary/' },
    { title: 'Content Credentials (C2PA)', url: 'https://contentcredentials.org/' },
    { title: 'Sony World Photography Award 2023: winner refuses award after revealing AI creation — whynow', url: 'https://whynow.co.uk/read/sony-world-photography-award-2023-winner-refuses-award-after-revealing-ai-creation' },
  ],
};
