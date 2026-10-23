import type { LessonText } from '../types';

/** School — Level 4: equipment, Eye IV */
export const LAB9B_EN: Record<string, LessonText> = {
  /* ───────── Equipment ───────── */
  'gr-choose': {
    title: 'How to choose a camera and lenses',
    tagline: 'The best equipment is what suits what you photograph, and what you will actually carry.',
    quick:
      'First what you photograph, then the equipment. Lenses usually matter more than the camera body, and hold their value. A fast prime (35 or 50 mm) is an excellent start. Try before you buy, rent or buy used, and remember that your phone is already a very capable camera.',
    challenge:
      'Look at the metadata of your 50 favourite photographs: which focal length did you use most? That is “your” focal length, and a good prime at it is often the best investment.',
    body: [
      'The question “which camera should I buy?” has no answer without the question “what do you photograph?”. For travel and street, a small, light system you will carry everywhere wins. For wildlife and sport: fast autofocus, burst, telephotos. For landscape and studio: resolution and dynamic range. For weddings: reliability, two card slots, good low-light performance. Today mirrorless cameras dominate almost every category, and all the major systems are excellent. Their differences matter less than the forums say.',
      'Lenses are usually a more important investment than the body: a good lens “lives” on many bodies and holds its value better. A practical start is a versatile zoom for everyday use and a fast prime, e.g. a 35 mm or 50 mm f/1.8, which is cheap, light, good in low light and teaches you to “zoom with your feet”. The sensor, as we learned, affects noise, depth of field and size. Choose according to where you want to strike the balance.',
      'Before you buy: hold the camera in your hand. Ergonomics matter a lot for something you will hold for hours. Rent one for a weekend, or borrow from a friend. Used equipment, especially lenses, is often excellent value. And remember that modern phones are very capable cameras. Many important photographers work partly or entirely with a phone. Buy equipment when you know specifically what is limiting you.',
    ],
    bullets: [
      'First “what do I photograph?”, then “which camera?”.',
      'Mirrorless: the dominant choice. All the major systems are excellent.',
      'Lenses matter more and hold their value.',
      'A start: a versatile zoom + a fast 35/50 mm prime.',
      'Try, rent, consider used.',
    ],
    mistakes: [
      'An expensive body with a cheap, slow lens.',
      'Buying based on forums rather than on what you photograph.',
      'A system so heavy it ends up staying at home.',
    ],
    keyIdea: 'The right equipment starts from what you photograph. Invest in lenses, try before you buy, and choose something you will always have with you.',
    tryIt: 'Make a list of “what I photograph most” and “what limits me now” (e.g. “low light”, “can’t blur the background”). Then find the cheapest solution to the first problem on the list.',
    check: [
      {
        id: 'gc-1',
        question: 'What is usually the longest-lasting investment in equipment?',
        options: ['The camera body', 'The lenses', 'The memory cards', 'The bag'],
        correctIndex: 1,
        explanation: 'Good lenses are used on many bodies and hold their value.',
      },
    ],
  },

  'gr-upgrade': {
    title: 'When an upgrade is worth it (and when it is not)',
    tagline: '“Gear sickness” and how to tell need from desire.',
    quick:
      'You upgrade when your equipment limits you in something specific that you photograph often: e.g. the autofocus misses birds, or the noise at the theatre is unacceptable. Not because a new model came out. Often the money goes further on light, learning, travel or prints.',
    challenge:
      'Write down the next purchase you are considering. Complete the sentence: “This will let me photograph … which I cannot now.” If you struggle to complete it, you probably do not need it yet.',
    body: [
      'Photographers have a half-joking term: “GAS”, gear acquisition syndrome, the irresistible desire for new equipment. It is understandable: the industry releases new models constantly, videos and forums discuss technical details, and buying a new lens gives a quick feeling of progress. But photographs rarely improve as much as we hope from a new body. They improve through light, seeing, practice.',
      'An upgrade is worth it when you can name specifically what limits you, in something you photograph often. The autofocus loses subjects at the sport you cover every week. You need weather sealing because you shoot in the rain. Clients ask for big prints and the resolution is not enough. You need two card slots because you have started shooting weddings. These are real limitations.',
      'When there is no such limitation, the same money often improves your work more elsewhere: a flash and a reflector, a workshop with a photographer you admire, a trip for a project, a series of prints, a photobook. And if you do buy, sell whatever you do not use: equipment in a cupboard loses value and someone else could put it to use.',
    ],
    bullets: [
      'Upgrade = a specific limitation in something you do often.',
      'Not because a new model came out.',
      'Alternatives: light, learning, travel, prints, books.',
      'Sell what you do not use.',
    ],
    mistakes: [
      'Hoping a new camera will bring you “inspiration”.',
      'Upgrading the body when the limitation is the lens or the light.',
    ],
    keyIdea: 'Upgrade when you can name what limits you. Otherwise, invest in light, knowledge and your work.',
    tryIt: 'For one month, photograph only with the lens you use least. What did you learn about your real needs?',
    check: [
      {
        id: 'gu-1',
        question: 'Which is a good reason to upgrade?',
        options: ['A new model was released', 'The autofocus consistently loses subjects at the sport you photograph every week', 'A friend bought a new one', 'You want inspiration'],
        correctIndex: 1,
        explanation: 'A specific, frequent limitation justifies an upgrade.',
      },
    ],
  },

  'gr-care': {
    title: 'Caring for equipment: sensor, lenses, humidity, batteries',
    tagline: 'A little care makes equipment last for years.',
    quick:
      'Dust on the sensor shows as dark spots at small apertures. Start with a blower (never your mouth), and for stubborn dust, special swabs or a repair service. Lenses: blower, then a microfibre cloth. Humidity: a box with silica gel, because fungus in lenses is the greatest enemy. Firmware updates, and equipment insurance for professionals.',
    challenge:
      'Photograph a clear sky or a white wall at f/16, out of focus. Open the photograph and increase the contrast. Do you see dark spots? That is your sensor dust.',
    body: [
      'On interchangeable-lens cameras, dust inevitably gets onto the sensor when you change lenses. It shows as small dark spots, mainly at small apertures and on even surfaces such as sky and walls. To limit it: change lenses quickly, with the camera pointing down, away from wind and dust. Many cameras have automatic cleaning by vibration. For cleaning, start with a hand blower, never your mouth, because droplets make things worse, and never with canned compressed air. For stubborn dust there are special swabs and fluids, but if you do not feel confident, an authorised service centre will do it safely.',
      'Lenses: first a blower for the dust, then a clean microfibre cloth, in circular motions from the centre outwards, and if necessary a special lens-cleaning fluid. The greatest danger to lenses is not dust but humidity: in humid climates and unventilated cupboards, fungus (mould) can grow inside lenses, and it is difficult or impossible to clean. Store equipment in a dry place, ideally in a box or cabinet with silica gel packets that you replace, and do not leave it shut in a damp bag.',
      'Batteries: do not leave them completely empty for long periods, and in the cold keep them in an inside pocket, because they lose their charge quickly. Memory cards: format in the camera, and replace any that are old or give errors. Firmware updates often bring improvements and fixes. For professionals, equipment insurance is almost essential: theft or a fall can stop your work.',
    ],
    bullets: [
      'Sensor dust: test at f/16 on the sky.',
      'Blower, never your mouth or canned air. A service centre if unsure.',
      'Lenses: blower, microfibre, lens fluid.',
      'Humidity = fungus. Silica gel and a dry place.',
      'Batteries in an inside pocket in the cold. Firmware. Insurance.',
    ],
    mistakes: [
      'Blowing on the sensor with your mouth.',
      'Cleaning a lens with your T-shirt.',
      'Equipment shut in a damp bag for weeks.',
    ],
    keyIdea: 'A little care, a blower, microfibre, dry storage and insurance, keeps your equipment in good condition for years.',
    tryIt: 'Today, do the sensor dust test, clean your lenses properly, and put a silica gel packet where you store them.',
    check: [
      {
        id: 'gca-1',
        question: 'What is the greatest danger to lenses stored in a damp place?',
        options: ['Dust', 'Fungus (mould) inside the lenses', 'Scratches', 'Electric current'],
        correctIndex: 1,
        explanation: 'Fungus grows in humidity and is difficult or impossible to clean.',
      },
    ],
  },

  /* ───────── Eye IV ───────── */
  'pro-style': {
    title: 'Personal style: how to “find” your voice',
    tagline: 'You do not pick a style from a catalogue. It emerges from repeated decisions.',
    quick:
      'Your style is the sum of the decisions you make again and again: what draws you, which light, which distance, which colours, which moment. You do not “make” it with a filter. You discover it by looking at your work as a whole, and cultivate it consciously and with a lot of work.',
    challenge:
      'Put your 30 favourite photographs in a grid. Write down three things that repeat: subject, light, distance, colour, mood. That is your style, as it is today.',
    body: [
      'Many photographers worry about their “style”, and look for it in a particular edit, a filter or a “look”. But a filter is surface. Real style is deeper: it is what draws you to photograph, how close you stand, what light you wait for, how much you leave inside and outside the frame, how you relate to people. When you see a photograph by Eggleston or Koudelka and recognise it at once, you are not recognising a filter, but a way of seeing.',
      'That way of seeing emerges from repeated decisions, over a very large body of work. That is why the best way to find your style is to photograph a lot, and to look at your work as a whole: what repeats? What makes you stop? Which of your photographs feel “yours” and which as if someone else took them? Influences are natural and inevitable. All the great photographers began by imitating someone. Style is born when influences are “digested” and combined with your own life and way of seeing.',
      'Two warnings. First: do not freeze too early in a “look” that makes you easy to recognise but stops you from developing. Second: consistency, which is useful for a portfolio or a project, does not mean repetition. The most interesting photographers change over the years, but something deeper, their way of seeing, remains.',
    ],
    bullets: [
      'Style = repeated decisions, not a filter.',
      'You discover it by looking at your work as a whole.',
      'Influences are natural: “digest” them.',
      'Do not freeze early in a “look”.',
      'Consistency ≠ repetition.',
    ],
    mistakes: [
      '“Buying” a style with presets.',
      'Copying a photographer so faithfully that your work becomes imitation.',
    ],
    keyIdea: 'Your style is your way of seeing, and it emerges from a lot of work and the decisions you make again and again. Look at your work as a whole to see it.',
    tryIt: 'Write a paragraph: “My photography is…”, based on the three repetitions you found. Read it again in a year.',
    see: ['eggleston', 'koudelka', 'moriyama', 'leiter'],
    check: [
      {
        id: 'ps-1',
        question: 'What does a photographer’s personal style mainly emerge from?',
        options: ['A particular editing filter', 'Repeated decisions across a lot of work', 'The lens', 'The camera'],
        correctIndex: 1,
        explanation: 'A filter is surface; a way of seeing is decisions.',
      },
    ],
  },

  'pro-algorithm': {
    title: 'Art and the algorithm: your way of seeing beyond the likes',
    tagline: 'How to use social media without letting likes decide what you photograph.',
    quick:
      'Social media algorithms reward whatever holds attention for a second: bright colours, familiar “patterns”, trends. That is not necessarily what makes a photograph important. Publish, but measure your work by other criteria: what it says, whether you are developing, whether it satisfies you. And beware of comparing yourself with others.',
    challenge:
      'Find your photograph with the most likes and the one you consider most important. Are they the same? If not, why do you think they differ?',
    body: [
      'Social networks gave photographers something unprecedented: a global audience, without intermediaries. Many important contemporary photographers, mainly in street and documentary, became known there. But the platforms’ algorithms have their own goal: to keep you in the app as long as possible. They reward whatever grabs attention at once, such as bright colours, familiar compositions, “trends” and frequent posting, and rarely the quiet, complex, slow images that win over time.',
      'The danger is insidious: you start photographing what “does well”, editing like everyone else, posting so as not to “disappear”. Little by little, your work looks like that of thousands of others. A useful antidote: have a second space for your work, outside social media, such as a project, a book, an exhibition, prints. And judge your work by criteria you set yourself: what it says, whether it satisfies you, whether you are developing.',
      'There is also the human side. Constant comparison with the “best” photographs of thousands of others can be discouraging, especially when you are starting out. Remember that you see only the results, not the thousands of failed frames behind them. If social media make you anxious or make you stop photographing, a break is entirely legitimate. Photography existed, and will exist, outside them.',
    ],
    bullets: [
      'The algorithm rewards immediate attention, not necessarily importance.',
      'Danger: work that looks like everyone else’s.',
      'Antidote: projects, books, prints outside social media.',
      'Your own criteria: what it says, whether you are developing.',
      'Comparison sees only results. Take a break when needed.',
    ],
    mistakes: [
      'Changing subjects or style chasing likes.',
      'Judging a photograph’s worth by its reception on a single day.',
    ],
    keyIdea: 'Use social media as a shop window and a community, not as a judge. Your way of seeing is built on your own criteria, and needs spaces outside the algorithm.',
    tryIt: 'For one month, photograph a project without posting any of it. At the end of the month, choose 9 images and post them as a series. How did the way you photographed change?',
    see: ['moriyama', 'parr', 'tillmans'],
    check: [
      {
        id: 'pa-1',
        question: 'What is a good antidote to the pressure of algorithms?',
        options: ['Posting every day', 'Having projects and spaces for your work outside social media, with your own criteria', 'Copying the trends', 'Stopping photographing'],
        correctIndex: 1,
        explanation: 'Your work needs criteria that the algorithm does not set.',
      },
    ],
  },

  'pro-book': {
    title: 'Photobook, zine and exhibition',
    tagline: 'How your series becomes an object you hold in your hands, or a space you walk through.',
    quick:
      'The photobook is one of photography’s most important forms. Start with a dummy made of simple prints, work on the sequence and pairs, and then choose a route: self-publishing, print on demand, or a small zine. For exhibitions: from local venues and open calls, up to galleries.',
    challenge:
      'Make a 12-page zine from one of your projects: print on a simple printer, fold, staple. Give it to three people and see how they “read” it.',
    body: [
      'For many photographers, the book is the most complete form of their work, more important than the exhibition. In a book, the viewer controls the time, turns back, sees pairs across open spreads, and the sequence works as in a film. Many classic works of photography, from Frank’s “The Americans” to Moriyama’s books, are books first and foremost.',
      'The work starts with a dummy: small prints, a notebook or bound pages, where you try out sequence, pairs, blank pages, sizes. You make many dummies before the final one. For publication there are many routes: photobook publishers (difficult, especially at first), self-publishing with a printer (offset for larger runs, digital printing for small ones), print on demand, or a zine, a small, cheap, often handmade publication, which is an excellent first way to see your work as an object.',
      'For exhibitions, as we saw with printing, the space becomes a sequence. Most photographers start in small venues: cafés, bookshops, cultural centres, photo clubs, open calls from festivals and organisations. Galleries usually ask for a proposal: a short text, a selection of images, a CV. And for both books and exhibitions, what we learned about selection, sequencing and text is exactly the set of skills you need.',
    ],
    bullets: [
      'Book: the viewer sets the time. Pairs, rhythm.',
      'Dummy: many trials before the final one.',
      'Publisher, self-publishing, print on demand, zine.',
      'Exhibition: start with small venues and open calls.',
      'Proposal: text, selection, CV.',
    ],
    mistakes: [
      'Sending to a printer without having made even one dummy.',
      'Waiting for the “perfect” gallery instead of showing your work somewhere now.',
    ],
    keyIdea: 'Books and exhibitions turn a series into an object and an experience. Start small, with dummies and zines, and grow step by step.',
    tryIt: 'Find three places in your town where you could show a small series, and one open call for photography. Prepare a proposal for one of them.',
    see: ['frank', 'moriyama', 'goldin', 'parr'],
    check: [
      {
        id: 'pb-1',
        question: 'What is a “dummy” in photobook making?',
        options: ['A cheap printer', 'A trial mock-up of the book to test sequence and design', 'A bad photograph', 'The publisher'],
        correctIndex: 1,
        explanation: 'Photographers make many dummies before the final book.',
      },
    ],
  },

  'pro-critique': {
    title: 'How to give and receive critique',
    tagline: 'Critique is the fastest tool for growth, if you know how to use it.',
    quick:
      'When giving critique: start by asking what the photographer wanted to achieve, describe what the image does to you, say specifically what works and what does not, and suggest. When receiving it: listen, take notes, do not defend yourself, ask for clarification, and decide afterwards.',
    challenge:
      'Choose a photograph by a friend or from a club and write a three-sentence critique: one about what the image does to you, one about a specific strength, and one with a specific suggestion.',
    body: [
      'Giving critique: the most useful critique is specific, honest and respectful. Start by asking what the other person wanted to achieve: a photograph that “doesn’t work” as a portrait may work perfectly as part of a series on loneliness. Then describe what the image does to you, using the describe–analyse–interpret method: “my eye goes first to the bright window, not the face”. That is far more useful than “I don’t like it”. Say what works, honestly and specifically, and what could work better, with a suggestion.',
      'Receiving critique: it is harder, because our photographs are personal. The best way: listen without interrupting, take notes, and do not explain or defend yourself, because the viewer will not have you beside them explaining. Ask for clarification: “what exactly put you off?”. And then, calmly, decide for yourself what to keep. Not all critique is right. But if many people say the same thing, it is worth thinking about seriously.',
      'Where to find critique: photo clubs and groups, workshops, portfolio reviews at festivals, where curators, publishers and photographers look at your work for a few minutes, and a small circle of photographers you trust. Critique on social media is usually too positive or too superficial to help you develop. Lumina’s page of photo clubs and groups is a good starting point.',
    ],
    bullets: [
      'Giving: ask the intention, describe, be specific, suggest.',
      'Receiving: listen, take notes, do not defend, ask, decide afterwards.',
      'If many say the same thing, take it seriously.',
      'Where: clubs, workshops, portfolio reviews, a circle of trust.',
    ],
    mistakes: [
      'Critique like “nice!” or “I don’t like it” without explanation.',
      'Explaining to the critic what you “wanted to do” instead of listening to what they see.',
    ],
    keyIdea: 'Good critique = specific, honest, respectful. When receiving it: listen, note, do not defend, and decide for yourself.',
    tryIt: 'Organise a small “critique session” with 3–4 photographer friends: each brings 5 photographs, and the others speak using the lesson’s method while the photographer only listens.',
    check: [
      {
        id: 'pc-1',
        question: 'What is the most useful attitude when receiving critique?',
        options: ['Explaining at once what you wanted to do', 'Listening, taking notes, asking for clarification and deciding afterwards', 'Rejecting every negative comment', 'Changing whatever you are told at once'],
        correctIndex: 1,
        explanation: 'The viewer will not have you beside them to explain; listen to what they see.',
      },
    ],
  },

  'pro-ethics': {
    title: 'The ethics of photography: power, representation, honesty',
    tagline: 'Every photograph of a person is also a relationship of power. How to handle it with respect.',
    quick:
      'The photographer decides how the other person will appear, in what context, with what caption, and where it will be published. That is power. The ethics of photography is mainly respect: consent, honesty about what happened (staged or spontaneous), dignity in representing people in difficult circumstances, and accuracy in captions.',
    challenge:
      'Think of a photograph of a person that you took and published. If they saw it published, with its caption, how do you think they would feel?',
    body: [
      'When you photograph a person, you decide: the moment, the angle, the frame, which photograph is kept, with what caption and where it is published. The person in the photograph usually has none of these controls. This asymmetry is greater when you photograph people in vulnerable circumstances: poverty, war, illness, mourning. The history of photography has great works that gave a voice to such people, but also images that turned them into a “spectacle”, something critics harshly call “poverty porn”.',
      'Some questions that help: Does the person know I am photographing them and where the image will be published? Does the photograph show them with dignity, as a person with a story, or only as a “symbol” of a situation? Would I take the same photograph if it were someone from my own family? Is the caption accurate, or does it add something I do not know? The code of ethics of the US National Press Photographers Association (NPPA), for example, asks for accuracy, respect for the dignity of those photographed and special care for the vulnerable.',
      'Honesty: if a photograph is staged, it should not be presented as a spontaneous document. The history of photography has many controversies over images that were shown, or are suspected, to have been staged, from the photographs of the Crimean War to 20th-century photojournalism. In creative photography, staging is entirely legitimate. The problem begins when you mislead the viewer about what happened. Ethics is not a list of rules, but a constant question: do I respect the person in the photograph and the person who will see it?',
    ],
    bullets: [
      'The photographer has power: moment, frame, caption, publication.',
      'Greater responsibility with vulnerable people.',
      'Dignity: a person with a story, not a “spectacle”.',
      'Accurate captions.',
      'Staged ≠ document: do not mislead.',
    ],
    mistakes: [
      'Photographs of people in difficult moments only because they are “strong images”.',
      'Captions that “fill in” the story with guesswork.',
      'A staged image presented as spontaneous.',
    ],
    keyIdea: 'The ethics of photography is respect: for the person in the photograph (consent, dignity) and for the viewer (honesty, accurate captions).',
    tryIt: 'Reread the captions of your latest photographs of people. Are they accurate? Would the person pictured sign their name to them?',
    see: ['lange', 'salgado', 'smith-eugene', 'mary-ellen-mark', 'fenton'],
    check: [
      {
        id: 'pe-1',
        question: 'When does a staged photograph become an ethical problem?',
        options: ['Always', 'When it is presented as a spontaneous document and misleads the viewer', 'Never', 'Only if it is black and white'],
        correctIndex: 1,
        explanation: 'Staging is legitimate; misleading people about what happened is not.',
      },
    ],
  },

  'pro-ai': {
    title: 'Photography in the age of artificial intelligence',
    tagline: 'When a “photograph” can be made without a camera, what does it mean to be a photographer?',
    quick:
      'AI tools come in at two points: in editing (masks, noise reduction, “generative fill”) and in creating images from scratch. The basic principle is transparency: say when an image has been created or substantially altered with AI, especially in documentary work and competitions. The legal questions (copyright, model training) are still open.',
    challenge:
      'Find the rules on artificial intelligence of a major photography competition. What is allowed in editing and what is forbidden?',
    body: [
      'In chapter 20 of the History we saw how, from 2022, AI images became so realistic that many people can no longer tell them from photographs. In 2023, the German artist Boris Eldagsen won a prize at the Sony World Photography Awards with an image created with AI, and turned it down to open up the debate. For photographers, AI is already part of everyday life: in “smart” masks, in noise reduction, in autofocus with eye detection, in the computational photography of phones.',
      'The basic ethical distinction is between improving a photograph and changing or creating its content. A sky mask or noise reduction does not change what happened. AI “filling in” a part of the scene that was not there, or removing a person, does. In documentary and photojournalism, that is unacceptable. In creative imagery it is legitimate, provided you are honest. Initiatives such as C2PA and “Content Credentials”, which we saw in the History, aim to record the provenance and changes of an image.',
      'Legally, much is still open and changing. In the USA, the Copyright Office and the courts, in cases such as Thaler v. Perlmutter, have held that an image created entirely by AI without substantial human creative input is not protected as a work. There are also legal disputes over whether training models on photographs without permission is lawful, and the first rulings, e.g. Getty Images v. Stability AI in the United Kingdom in 2025, have not settled the matter. What does not change: the value of photography as testimony, that someone was there, saw and recorded, becomes perhaps more precious than ever. Honesty about how an image was made is a photographer’s most important tool of credibility.',
    ],
    bullets: [
      'AI in editing: masks, noise, subject recognition.',
      'AI in creation: images without a camera.',
      'Improvement ≠ changing content.',
      'Documentary: no change to content. Creative: transparency.',
      'C2PA / Content Credentials for provenance.',
      'Legal questions open and changing.',
    ],
    mistakes: [
      'Presenting an AI image as a photograph.',
      'Removing or adding elements with AI in a documentary photograph.',
      'Assuming legal rules are the same everywhere and fixed.',
    ],
    keyIdea: 'AI is a tool. The line runs between improving and changing what happened, and your tool of credibility is honesty.',
    tryIt: 'Take one of your photographs and make two versions: one with editing that does not change the content, and one with AI “generative fill”. Write a caption for each that says honestly what was done.',
    check: [
      {
        id: 'pai-1',
        question: 'Which use of AI is generally unacceptable in documentary photography?',
        options: ['Noise reduction', 'A sky mask for brightness', 'Removing a person from the scene', 'Eye detection in autofocus'],
        correctIndex: 2,
        explanation: 'It changes what happened, so it misleads the viewer.',
      },
    ],
  },
};
