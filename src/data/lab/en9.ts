import type { LessonText } from '../types';
import { LAB9B_EN } from './en9b';

/** School — Level 4: the profession */
const LAB9A_EN: Record<string, LessonText> = {
  /* ───────── The profession ───────── */
  'bz-markets': {
    title: 'Markets and specialisations: where photographers work',
    tagline: '“Professional photography” is not one profession, it is many different ones.',
    quick:
      'Weddings, families and portraits, commercial and product photography, architecture and real estate, events, press and publishing, stock, art, teaching. Each has different clients, different rhythms and different skills. Most successful professionals specialise, at least at the start.',
    challenge:
      'Write down three photography markets that interest you. For each, answer: who pays, for what result, and which of Lumina’s lessons will you need most?',
    body: [
      'The wedding photographer, the product photographer for an online shop and the photojournalist do almost different jobs. Weddings and events demand stamina, speed, discretion and ease with people, and are strongly seasonal. Portraits and family work rely on relationships and referrals. Commercial and product photography demand technical precision, a studio and collaboration with companies and agencies. Architecture and real estate need wide angles and control of lines and light.',
      'Press and publishing, e.g. magazines, newspapers, agencies, carry real prestige, but often lower fees and fierce competition. Stock, that is, selling usage licences through image banks, has become very competitive, and artificial intelligence is pushing prices down further. Art photography, with exhibitions, sales of work, grants and books, rarely supports someone on its own at first. And teaching, with workshops, courses and trips, is an important part of income for many photographers.',
      'Most professionals combine two or three markets, but start with one, because that is where they build a portfolio, a reputation and referrals. A good criterion is where three questions intersect: what do I enjoy photographing, what am I really good at, and what result will someone pay for in my area or network.',
    ],
    bullets: [
      'Weddings / events: stamina, speed, seasonality.',
      'Portraits / family: relationships and referrals.',
      'Commercial / product: technical precision, studio.',
      'Architecture / real estate: lines and light.',
      'Press, stock, art, teaching.',
      'Specialise at first, combine later.',
    ],
    mistakes: [
      'Advertising “all kinds of photography”: nobody remembers you for anything specific.',
      'Choosing a market only because it “pays”, without enjoying it: the fatigue shows in the work.',
    ],
    keyIdea: 'Professional photography is many professions. Start at the intersection: what you love, what you are good at, and what someone pays for.',
    tryIt: 'Talk to a professional photographer in the market that interests you. Ask three things: how they find clients, what they did not expect when they started, what they would do differently.',
    check: [
      {
        id: 'bm-1',
        question: 'Why do most professionals start with one specialisation?',
        options: ['Because the law requires it', 'Because that is where they build a portfolio, reputation and referrals', 'Because their equipment is not enough', 'Because it is easier for tax'],
        correctIndex: 1,
        explanation: 'Clients remember and recommend photographers for something specific.',
      },
    ],
  },

  'bz-portfolio': {
    title: 'Portfolio: fewer, stronger, for a specific audience',
    tagline: 'A portfolio is not an archive. It is the clearest answer to “what do you do?”',
    quick:
      'A good portfolio has 15–25 images, one specialisation, a consistent style, a strong first and last photograph, and nothing mediocre. It is made for whoever will see it, e.g. a couple looking for a wedding photographer or an art director. It is updated, and drops whatever no longer represents you.',
    challenge:
      'Choose 40 photographs you think represent you. Then keep only 15, using the rounds process from Level 3. Which did you “sacrifice” with the greatest difficulty?',
    body: [
      'A portfolio is judged by its weakest photograph. A client or curator who sees 20 excellent images and 5 mediocre ones remembers the mediocre ones and wonders: “which of the two will I get?” That is why fewer, stronger images, usually 15–25, are almost always better than many. Selection follows what we learned in Eye III: rounds, time, other eyes.',
      'A portfolio is aimed at a specific audience. A wedding portfolio shows emotions, people, intensity and a variety of moments across a whole day. A commercial portfolio shows technical precision and consistency. An art portfolio shows a way of seeing and a project. If you do many things, make separate portfolios, e.g. separate sections on your website, instead of a “mix”.',
      'Order matters: start with a photograph that says at once “this is what I do”, and end with one that stays. In between, work on rhythm and variety within a consistent style. And update it: a portfolio that has not changed in three years shows a photographer who has stopped. Keep only the work you want to do more of, because it will bring you more of it.',
    ],
    bullets: [
      '15–25 images, nothing mediocre.',
      'One portfolio per specialisation and audience.',
      'Consistent style, rhythm, variety.',
      'A strong first and last image.',
      'Update: show the work you want to do.',
    ],
    mistakes: [
      'Including “all the good” photographs: 80 images that tire the viewer.',
      'Weddings, products and landscapes on the same page.',
      'Work you do not want to do again: it will bring you more of it.',
    ],
    keyIdea: 'A portfolio is judged by its weakest image. Few, strong, for a specific audience, and the work you want to do.',
    tryIt: 'Show your 15-image portfolio to three people (a photographer, a potential client, a friend) and ask: “What do you think I do? Which photograph would you remove?”',
    check: [
      {
        id: 'bp-1',
        question: 'Why do we say a portfolio is judged by its weakest photograph?',
        options: ['Because judges are strict', 'Because the client wonders whether they will get the photographer’s good or mediocre version', 'Because it is always at the start', 'It is not true'],
        correctIndex: 1,
        explanation: 'The mediocre photograph shows the “floor” of your work.',
      },
    ],
  },

  'bz-social': {
    title: 'Photography and social media',
    tagline: 'How to use social media to show your work, without your work becoming something that “performs” on social media.',
    quick:
      'Social media are a shop window, a community and, for many, the main way clients find you. Work with the platform’s shapes (vertical, e.g. 4:5 or 3:4, and 9:16), show consistent work and series, write captions that say something, and take care: copyright, location in files, and what you publish about other people.',
    challenge:
      'Look at your last 12 posts as if you were a stranger: what do you think this photographer does? If the answer is “a bit of everything”, think about which you would remove.',
    body: [
      'From the mid-2000s, with Flickr and Facebook, and especially after 2010, when Instagram appeared, social networks changed photography: how we see it (on a phone, vertically, for a second), how we share it, and how new photographers emerge. Many street, documentary and portrait photographers became known there first, and then reached books, exhibitions and collectives. For a professional, social media are often the first contact with a client.',
      'In practice: work with each platform’s shapes. Vertical formats, such as 4:5 or 3:4 for posts and 9:16 for stories and video, take up more of the phone screen. Platform specifications change often, so check the current ones. If you show something specific, e.g. street photography in Thessaloniki, show it consistently: people follow a way of seeing, not a series of random images. Carousels with several photographs are ideal for small series. Write captions that add something: a story, a context, what you were thinking. And reply to comments: community is built through dialogue.',
      'Cautions. Copyright: your photographs “circulate” and get copied. Put your details in the metadata, and if you see a stolen photograph, the platforms have reporting procedures. Privacy: remove the location from files, especially for homes and children. People in your photographs: remember what we learned about consent, and that posting on a public profile is publishing. And, most important, as we will see in Eye IV: do not let likes decide what you photograph.',
    ],
    bullets: [
      'Social = shop window, community, first contact with clients.',
      'Vertical formats: 4:5 or 3:4, and 9:16 (specifications change).',
      'Consistency: a way of seeing, not “a bit of everything”.',
      'Carousels for small series. Captions with substance.',
      'Copyright, location, consent.',
    ],
    mistakes: [
      'Posting everything, every day, without selection.',
      'Horizontal photographs that become tiny on the phone.',
      'Photographs of people, especially children, without thinking about consent.',
    ],
    phone:
      'With a phone: before posting, check whether the camera app saves location, and if you wish, turn it off in the settings or remove it in the sharing options.',
    keyIdea: 'Social media are a tool: show a consistent way of seeing, in the right formats and with captions of substance, protecting your rights and other people’s privacy.',
    tryIt: 'Plan 9 posts for next month from one of your projects: in 4:5, with one carousel, and captions that say something. Post them consistently and see what changes.',
    check: [
      {
        id: 'bs-1',
        question: 'Why do we often prefer vertical formats (4:5, 9:16) on social media?',
        options: ['Because they are sharper', 'Because they take up more of the phone screen, which is held upright', 'Because they are smaller files', 'Because the law requires it'],
        correctIndex: 1,
        explanation: 'Most people view social media on a phone held upright.',
      },
    ],
  },

  'bz-pricing': {
    title: 'Pricing and usage licences',
    tagline: 'You are not selling hours of shooting. You are selling a result and the right to use it.',
    quick:
      'First work out your “cost of doing business”: all annual expenses and the income you need, divided by the days you actually invoice. Remember that editing and communication often take more time than shooting. In commercial photography, the price also includes the usage licence: where, for how long, how exclusively.',
    challenge:
      'Do a quick calculation: write down the annual cost of equipment, software, travel, insurance, and the income you would like. Divide by 100 “working days”. That is the minimum per day, before adding anything else.',
    body: [
      'The most common mistake of new professionals is pricing by shooting hours. A two-hour portrait session often means an hour of communication and preparation, travel, two hours of shooting, three to five hours of selection and editing, and time for delivery. Moreover, a photographer does not shoot five days a week: part of the time goes on promotion, accounts, learning, waiting. That is why the price must come from the cost of doing business: annual expenses and desired income, divided by the number of days you actually invoice.',
      'In commercial photography, the price usually has two parts: the production fee, that is, time, equipment and crew, and the usage licence. The licence describes how the photographs will be used: in which media (website, social media, print, outdoor posters), for how long, in which countries, and whether it will be exclusive. A photograph for a small business website for one year has a different value from the same photograph in a national advertising campaign.',
      'Practical advice: always give a written quote, stating what is and is not included. Ask for a deposit to secure a date. Do not compete on low price alone: you will attract clients looking only for the cheapest. And because tax and social-insurance obligations differ by country and change, talk to an accountant before you start. This lesson is general information, not financial or legal advice.',
    ],
    bullets: [
      'Cost of doing business: (expenses + income) ÷ days you invoice.',
      'Editing and communication are part of the job.',
      'Commercial: production fee + usage licence.',
      'Licence: media, duration, territory, exclusivity.',
      'Written quote, deposit, accountant.',
    ],
    mistakes: [
      'A price “per shooting hour” that ignores all the other time.',
      'Giving “all rights forever” without charging for it.',
      'Cutting prices to “get into the market” and then being unable to raise them.',
    ],
    keyIdea: 'The price comes from the cost of doing business, not shooting hours. In commercial work, you also sell a usage licence. Always in writing.',
    tryIt: 'Write a hypothetical quote for “staff portraits for a small company’s website”: what it includes, how many images, delivery time, usage licence (media, duration), deposit.',
    check: [
      {
        id: 'bpr-1',
        question: 'Which two parts does the price of a commercial shoot usually have?',
        options: ['Camera and lens', 'Production fee and usage licence', 'Travel and food', 'Shooting and printing'],
        correctIndex: 1,
        explanation: 'The licence defines where, for how long and how exclusively the photographs will be used.',
      },
    ],
  },

  'bz-contracts': {
    title: 'Contracts and releases',
    tagline: 'A simple written agreement prevents most misunderstandings.',
    quick:
      'Every professional job needs a written agreement: what will happen, what will be delivered, when, what it costs, the deposit, what happens on cancellation, which usage licence is granted. For commercial use of recognisable people you need a written model release, and for private spaces or works sometimes a property release.',
    challenge:
      'List the 8–10 points you would include in a simple agreement for a portrait shoot. Compare them with those mentioned in the lesson.',
    body: [
      'Most problems between photographers and clients come not from bad faith but from different expectations: “I thought I’d get all the photographs”, “I thought they’d be ready in a week”, “I didn’t know you’d put them in your portfolio”. A simple written agreement, even a clear email that is confirmed, settles these in advance. The key points: what will happen, where and when, exactly what will be delivered (how many photographs, in what format), within what time, the cost and the deposit, what happens on cancellation or postponement, which usage licence the client receives, and whether you may use the photographs for your own promotion.',
      'A model release is a document in which the person photographed agrees that their image may be used for specific purposes. For commercial use, e.g. advertising or product promotion, it is considered necessary almost everywhere. For minors it is signed by a parent or guardian. A property release concerns private spaces, and sometimes recognisable works or objects, when used commercially. Image banks, for example, usually ask for both.',
      'In the European Union, photographing recognisable people also counts as processing personal data under the GDPR (except for purely personal or household use), with exemptions for journalistic and artistic purposes that each country applies differently. In practice: tell people how the photographs will be used, keep files securely, and respect deletion requests where they apply. Because laws differ and change, for serious collaborations or standard agreements consult a lawyer. This lesson is general information, not legal advice.',
    ],
    bullets: [
      'Written agreement: what, where, when, what is delivered, by when, cost.',
      'Deposit, cancellation, usage licence, use in your portfolio.',
      'Model release for commercial use of people. A parent for minors.',
      'Property release for private spaces and objects.',
      'GDPR in the EU: information, security, respect for requests.',
      'For serious matters: a lawyer.',
    ],
    mistakes: [
      'A verbal agreement for a big job.',
      'Commercial use of a photograph of a person without a release.',
      'Assuming you can put client photographs in your portfolio without having agreed it.',
    ],
    keyIdea: 'Write it down beforehand, so you do not have to explain yourself afterwards. A release for commercial use of people, and a lawyer for serious matters.',
    tryIt: 'Find a model release template from a photographers’ organisation or an image bank and read it carefully. Which points did you not expect?',
    check: [
      {
        id: 'bc-1',
        question: 'When do you almost certainly need a model release?',
        options: ['For a personal keepsake', 'For commercial use of a photograph with a recognisable person', 'For a landscape photograph', 'For a photograph without people'],
        correctIndex: 1,
        explanation: 'Commercial use of someone’s image requires their consent, and a written release is both the practice and the proof.',
      },
    ],
  },

  'bz-rights': {
    title: 'Copyright: what belongs to you and what to do when it is “stolen”',
    tagline: 'Your photographs are usually protected automatically. Proving it and enforcing it is another matter.',
    quick:
      'In most countries, including Greece, an original photograph is protected automatically, without registration. The creator has an economic right (exploitation, licences) and a moral right (attribution, integrity of the work), which in Greece cannot be transferred during the creator’s lifetime. Exceptions: work for an employer, contracts. Keep RAWs and metadata as proof.',
    challenge:
      'Do a “reverse image search” (e.g. with Google Lens or TinEye) for two or three of your published photographs. Do they appear anywhere without your permission?',
    body: [
      'Under the Berne Convention, signed by almost every country, copyright in a work arises automatically when it is created, without registration. In Greece, the main legal framework is Law 2121/1993. The creator has two kinds of rights: the economic right, that is, the right to decide how the work will be reproduced and used and to grant licences for a fee, and the moral right, that is, the right to be recognised as the creator and to protect the integrity of the work. Under Greek law, the moral right cannot be transferred during the creator’s lifetime; after death it passes to the heirs.',
      'There are, however, exceptions and nuances. Protection requires originality. As an employee you remain the creator, but the economic powers needed for the purpose of the employment pass automatically to the employer (in the public sector, as a rule, the whole economic right), unless agreed otherwise. And by contract you can also assign rights to clients. Protection also has a duration: generally the creator’s whole life plus 70 years after their death. That is why many of the 19th-century photographs in Lumina are now in the public domain, while for more recent ones we link to museums.',
      'If you find one of your photographs being used without permission: keep evidence, such as dated screenshots, your RAW and the metadata. Usually start with a polite message asking for removal or payment. The big platforms have copyright infringement report forms. For commercial use without permission, you can seek compensation, ideally with a lawyer’s help. And to make it easier for those who want to use your work legally, you can state your terms clearly, e.g. with a Creative Commons licence. This lesson is general information, not legal advice.',
    ],
    bullets: [
      'Automatic protection (Berne Convention). Greece: Law 2121/1993.',
      'Economic right (use, licences) and moral right (attribution, integrity).',
      'The moral right cannot be transferred during the creator’s lifetime (Greek law).',
      'Exceptions: employees, contracts. Originality is required.',
      'Duration: generally the creator’s life + 70 years.',
      'Infringement: evidence, a message, a platform report, a lawyer.',
    ],
    mistakes: [
      'Believing that whatever is on the internet is free to use.',
      'Not keeping the original files: they are the best proof the photograph is yours.',
      'An aggressive first reaction, when a polite message often settles the matter.',
    ],
    keyIdea: 'Your photographs are usually protected automatically. Keep evidence, state your terms, and for serious matters seek legal help.',
    tryIt: 'Decide the terms of use for your work: “all rights reserved” or a Creative Commons licence, e.g. non-commercial use with attribution. Write it on your website or profile.',
    check: [
      {
        id: 'br-1',
        question: 'As a rule, does an original photograph need to be registered to be protected in Greece?',
        options: ['Yes, with a public authority', 'No, protection arises automatically on creation', 'Only if it is sold', 'Only if it has a watermark'],
        correctIndex: 1,
        explanation: 'Under the Berne Convention and Law 2121/1993.',
      },
    ],
  },
};

export const LAB9_EN: Record<string, LessonText> = { ...LAB9A_EN, ...LAB9B_EN };
