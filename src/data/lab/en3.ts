import type { LessonText, LessonModule, ModuleText } from '../types';

/**
 * School — lessons and material aligned with the author's course
 * presentations (light, metering, phone).
 */
export const LAB3_EN: Record<string, LessonText> = {
  'light-portrait': {
    title: 'The 4 portrait lighting patterns',
    tagline: 'Loop, Rembrandt, Butterfly, Split: what the light says about the person.',
    body: [
      'When you light a face with one main source, such as a window or a lamp, the position of the source creates characteristic shadow patterns on the face. Portrait photographers, from the Hollywood studios to today, have given them names, because each one creates a different mood.',
      'Butterfly (or “Paramount”): the source is in front and high, above the camera. A small butterfly-shaped shadow forms under the nose. The light is glamorous and flattering, and brings out the cheekbones. It was the favourite light of old Hollywood stars.',
      'Loop: the source moves a little to the side, about 30° to 45°, and a little higher than the eyes. The nose shadow becomes a small “loop” towards the cheek, without joining the cheek shadow. It is natural, pleasant light that suits most people.',
      'Rembrandt: the source moves a little further to the side and higher. The nose shadow joins the cheek shadow, and on the dark side a small bright triangle remains under the eye. It is named after the Dutch painter, who lit many of his portraits this way. It is dramatic, serious, painterly. Split: the source is fully to the side, at 90°. Half the face is lit and half disappears into shadow. It is the most dramatic and mysterious, often harsh.',
    ],
    bullets: [
      'Butterfly: in front and high → glamour, beauty, fashion.',
      'Loop: 30° – 45° to the side → natural, friendly.',
      'Rembrandt: ~45°–60° and high, a bright triangle on the dark cheek → dramatic, painterly.',
      'Split: 90° to the side → mystery, tension.',
      'A white card on the opposite side (a reflector) softens the shadows in every pattern.',
    ],
    mistakes: [
      'The source too low, below the face: it gives “scary” light, like a torch under the chin.',
      'The Rembrandt triangle too big or too small: move the source or the head slightly.',
    ],
    phone:
      'With a phone: stand facing the person, with the window to their side. Turn their head slowly towards the window and you get Split, Rembrandt and Loop without moving anything else. For Butterfly you need light in front and higher than the eyes, for example a high window or a lamp above the camera. Stand a little to the side of or below the source, so you do not block its light. Tap on the bright cheek and lower the sun icon ☀ a little, so the shadows deepen.',
    keyIdea: 'The position of the source paints the shadow of the nose. From the shadow you recognise the pattern, and the pattern tells you the mood.',
    tryIt: 'With a window or a desk lamp, photograph the same person in Butterfly, Loop, Rembrandt and Split. Put the four photographs side by side and write one word for the mood of each.',
    check: [
      {
        id: 'lp-1',
        question: 'Which lighting pattern leaves a small bright triangle under the eye, on the dark side of the face?',
        options: ['Butterfly', 'Loop', 'Rembrandt', 'Split'],
        correctIndex: 2,
        explanation: 'The nose shadow joins the cheek shadow and leaves the characteristic triangle.',
      },
      {
        id: 'lp-2',
        question: 'Where is the source in the Butterfly pattern?',
        options: ['To the side, at 90°', 'In front and high, above the camera', 'Behind the subject', 'Below the face'],
        correctIndex: 1,
        explanation: 'It gives a small butterfly-shaped shadow under the nose.',
      },
    ],
  },

  'light-key': {
    title: 'High key and low key',
    tagline: 'Neither “overexposed” nor “underexposed”: a conscious choice of mood.',
    body: [
      'A high-key photograph is dominated by light tones: whites, soft greys, soft light, low contrast. It is usually made with a bright background, very soft light and light-coloured clothes. It conveys lightness, purity, optimism. We often see it in children’s portraits, fashion and advertising.',
      'A low-key photograph is dominated by dark tones. There is usually a single directional light, from the side, that “carves out” only what is needed, while the rest disappears into darkness. The background is black or dark and away from the light, and the shadows are not filled. It conveys mystery, drama, seriousness. The technique has roots in the painting of “chiaroscuro” (light and shade), as in Caravaggio’s pictures.',
      'The important thing is that the camera’s light meter does not know what you want. It will try to make both pictures “middle grey”: it will darken the high key and lighten the low key. So you have to correct it yourself with exposure compensation, which we will see in the Metering module.',
    ],
    bullets: [
      'High key: bright background, soft light from the front or diffused, + EV.',
      'Low key: dark background, one light from the side, no fill, − EV.',
      'Clothes and objects: light for high key, dark for low key.',
    ],
    mistakes: [
      'Letting the camera “correct” high key into grey.',
      'Low key with light falling on the background as well: the black and the tension are lost.',
    ],
    phone:
      'With a phone: for high key, tap on the face and drag the sun icon ☀ up until the background turns white without “burning” the skin. For low key, tap on the lit part of the face and drag the sun down: the background will “sink” into black.',
    keyIdea: 'High key = light tones, lightness. Low key = dark tones, drama. Both are a choice, not a mistake.',
    tryIt: 'Photograph the same subject twice: once in front of a white wall in soft light (high key) and once in a dark room with a lamp from the side (low key).',
    check: [
      {
        id: 'lk-1',
        question: 'What will the light meter usually do with a high-key scene if you do not correct it?',
        options: ['Leave it bright', 'Darken it towards grey', 'Make it black and white', 'Nothing'],
        correctIndex: 1,
        explanation: 'The meter “wants” middle grey. That is why high key needs + EV.',
      },
    ],
  },

  'phone-workflow': {
    title: 'Exposure on a phone: a 5-step workflow',
    tagline: 'Everything we have learned about exposure, as it applies to the phone camera.',
    body: [
      'Most phones have a fixed aperture, for example f/1.8: it does not change. Brightness is set only with shutter speed and ISO, usually automatically. A blurred background is not made with the aperture, but “painted” digitally in portrait mode. And features such as HDR and night mode merge many frames into one.',
      'But the phone’s light meter makes exactly the same mistakes as the meter in a large camera: it turns snow grey, “burns out” faces in front of a dark background, makes silhouettes against the light. And it is corrected in the same way. The five-step workflow below solves most problems.',
    ],
    bullets: [
      '1. Clean the lens: a fingerprint blurs the image and creates “halos” around lights. A cloth is enough.',
      '2. Tap on the subject: focus and metering with emphasis on the point you tapped, something like spot metering.',
      '3. Press and hold to lock (AE/AF lock): reframe without the exposure changing.',
      '4. Drag the sun ☀: + for whites and high key, − for sunsets, silhouettes and low key.',
      '5. Check the highlights: zoom into the preview. Do the clouds and the skin have detail?',
    ],
    mistakes: [
      'Trusting HDR blindly: it can “flatten” the mood of a scene with strong light and shadow.',
      'Pinch-zooming between the lenses (for example 2×): often it is just a digital crop.',
    ],
    phone:
      'In Pro (or “Manual”) mode, leave ISO on auto and change only the compensation (EV). Then try setting the shutter speed yourself, for example 1/4 or slower on a steady support to blur water, or 1/1000 to freeze a jump.',
    keyIdea: 'Clean, tap, lock, drag, check. Five moves that make the phone photograph the way you want.',
    tryIt: 'At sunset, tap first on a friend’s face, then on the sky. Then darken with the sun ☀. Compare the three photographs: which mood do you like?',
    check: [
      {
        id: 'pw-1',
        question: 'Since the aperture is fixed, what controls brightness on most phones?',
        options: ['The aperture', 'Shutter speed and ISO', 'The zoom', 'White balance'],
        correctIndex: 1,
        explanation: 'Usually automatically, but you can influence them with the “sun” or in Pro mode.',
      },
    ],
  },

  'metering-modes': {
    title: 'Metering modes and exposure lock (AE-L)',
    tagline: 'Where the light meter “looks” when it decides, and how to tell it where to look.',
    body: [
      'The light meter does not always measure in the same way. Most cameras have at least three modes, which differ in how much of the frame they take into account.',
      'Multi-zone metering (Evaluative, Matrix or Multi, depending on the maker) divides the frame into many zones and “guesses” what kind of scene it is, often giving weight to the focus point. It is the “smartest” and works well in most scenes. Centre-weighted metering measures the whole frame but gives more weight to the centre, like old film cameras. It is predictable. Spot metering measures only a small part of the frame, usually a few per cent, in the centre or at the focus point. It is the most precise, but you need to know where you are measuring.',
      'The classic example where “smart” metering fails: an actor in a spotlight in front of a black stage. Multi-zone metering sees a huge black frame and opens up the exposure: the face “burns out”. Spot metering measures only the skin: the face comes out right (for light skin, often with +2/3 to +1 EV) and the stage stays black, as it really is.',
      'This is where exposure lock (AE-L) comes in. You meter on the point you care about, for example the face, press the AE-L button (or hold the shutter button half-pressed, depending on the camera), reframe, for example placing the face on a third, and shoot. The exposure stays as you measured it.',
    ],
    bullets: [
      'Evaluative / Matrix: for most scenes.',
      'Centre-weighted: predictable, good for portraits with the subject in the centre.',
      'Spot: concerts, theatre, the moon, silhouettes, a face in front of a window.',
      'AE-L: meter → lock → reframe → shoot.',
    ],
    mistakes: [
      'Spot metering on the wrong point, for example the sky instead of the face: the whole image goes dark.',
      'Reframing without locking: the camera meters again and the exposure changes.',
    ],
    phone:
      'With a phone: tapping the screen makes the metering emphasise the point you tap, something like spot metering. If you keep your finger pressed, it locks focus and exposure (AE/AF lock) and you can reframe.',
    keyIdea: 'The harder the light, the smaller the point you should meter. Meter, lock, reframe.',
    tryIt: 'Photograph a friend in front of a bright window: once with the default metering and once metering (or tapping on the phone) on their face, with a lock. Compare.',
    check: [
      {
        id: 'mm-1',
        question: 'An actor in a spotlight, in front of a black stage. Which metering gives a correct face?',
        options: ['Multi-zone (Evaluative)', 'Spot metering on the face', 'Centre-weighted', 'None'],
        correctIndex: 1,
        explanation: 'Spot metering measures only the skin and ignores the black background that would “fool” multi-zone metering.',
      },
      {
        id: 'mm-2',
        question: 'What does AE-L do?',
        options: ['It locks the exposure so it does not change when you reframe', 'It locks the screen', 'It raises the ISO', 'It changes the lens'],
        correctIndex: 0,
        explanation: 'You meter on one point and keep that exposure, however you change the frame.',
      },
    ],
  },

  'exp-compensation': {
    title: 'Exposure compensation (±EV) and bracketing',
    tagline: 'How you tell the camera: “your reading is correct, but I want it different”.',
    body: [
      'EV (exposure value) is a scale of exposure in stops: 1 EV = 1 stop = twice or half the light. In compensation, + means more light. Exposure compensation, the ± button, tells the camera to make the image brighter or darker than the light meter thinks is right. It usually changes in steps of 1/3 of a stop.',
      'When do you need it? Whenever the scene is not “average”. In snow, on sand, with white walls and in high key, the meter will darken the image: give +1 to +2 EV. In dark scenes, in low key or when you want to save a bright sky, it will brighten the image too much: give −1 to −2 EV. Against the light, if you want a correct face, give +; if you want a silhouette, give −.',
      'Compensation works in the semi-automatic modes A/Av, S/Tv and P, and on a phone with the “sun” ☀. In manual mode M with a fixed ISO it has no effect on exposure, because there you set everything yourself; with auto ISO, however, many cameras apply it by changing the ISO.',
      'When you are not sure, “bracket”: shoot the same scene at −1, 0 and +1 EV, and choose later on the computer. Many cameras do it automatically with one press. Remember that none of the versions is “wrong”: the same scene from −2 to +2 EV can give five different moods.',
    ],
    bullets: [
      '+ EV: snow, sand, whites, high key, a face against the light.',
      '− EV: dark scenes, low key, a bright sky, silhouettes, sunsets.',
      'Bracketing: −1, 0, +1 EV, and you choose afterwards.',
    ],
    mistakes: [
      'Forgetting compensation switched on, so all the following photographs come out dark or bright.',
      'Looking for compensation in M mode with a fixed ISO, where it does not affect exposure.',
    ],
    phone:
      'With a phone: tap the screen and drag the sun ☀ up or down. That is exposure compensation. In Pro mode you will find it as “EV” on a scale, for example from −2 to +2.',
    keyIdea: 'The meter wants grey. Compensation is your way of telling it “no, I want it brighter or darker”.',
    tryIt: 'Photograph a scene five times, from −2 to +2 EV. Put the photographs in order and write down the mood of each.',
    check: [
      {
        id: 'ec-1',
        question: 'You photograph snow and it comes out grey. What do you do?',
        options: ['−1 EV', '+1 to +2 EV', 'Raise only the ISO', 'Change the white balance'],
        correctIndex: 1,
        explanation: 'The meter turned the snow middle grey. With + EV it goes back to white.',
      },
      {
        id: 'ec-2',
        question: 'What is bracketing?',
        options: ['A focus mode', 'Shooting the same scene at different exposures, for example −1, 0, +1 EV', 'A filter', 'A way of holding the camera'],
        correctIndex: 1,
        explanation: 'That way you make sure one of the shots has the exposure you want.',
      },
    ],
  },

  'dynamic-range': {
    title: 'Dynamic range',
    tagline: 'When the scene has more light and darkness than the camera can “fit”.',
    body: [
      'Dynamic range is the distance between the darkest and the brightest tones a sensor can record while keeping detail, and it is measured in stops. The human eye, which adapts constantly as we look from point to point, comfortably sees detail both in the shadows and in the sky. The camera, in a single shot, has a limited range. Modern cameras reach about 12 to 15 stops at their lowest ISO, depending on the camera and how it is measured. The small sensors in phones have less, but they make up for it by combining many frames.',
      'When the scene exceeds the dynamic range, for example a dark room with a sunny window or a face in shade with a bright sky behind, you have to choose: either the highlights will “burn out” or the shadows will “drown”. On the histogram this shows as the graph “sticking” to both ends.',
      'What do you do? You usually protect the highlights, because a burnt-out sky cannot be fixed, while the shadows, especially in RAW, can be opened up a good deal in editing. You can also reduce the contrast of the scene: wait for different light, fill the shadows with a reflector or flash, or use a graduated neutral density filter for the sky. Or merge several frames into an HDR, as the phone does automatically. And of course you can embrace the limit: a silhouette is a choice too.',
    ],
    bullets: [
      'Dynamic range = how many stops from dark to bright fit with detail.',
      'Priority usually goes to the highlights: whatever burns out is lost for good.',
      'Solutions: RAW, a reflector, fill flash, a graduated filter, HDR, a different time of day.',
    ],
    mistakes: [
      'Exposing for the shadows so the whole sky “burns out”.',
      'Overdone HDR that makes the image grey and unnatural.',
    ],
    phone:
      'With a phone: HDR is usually on automatically and works wonders in high-contrast scenes. But if you want dramatic light or a silhouette, lower the sun ☀ or switch HDR off, so it does not “flatten” the mood.',
    keyIdea: 'When the scene does not fit, choose what to save, usually the highlights, or reduce the contrast of the scene.',
    tryIt: 'Photograph a room with a sunny window: once exposing for the room, once for the window, and once with HDR. Look at the histograms.',
    check: [
      {
        id: 'dr-1',
        question: 'The scene exceeds the camera’s dynamic range. What do you usually protect?',
        options: ['The shadows', 'The highlights, because whatever burns out cannot be fixed', 'The midtones', 'Nothing'],
        correctIndex: 1,
        explanation: '“Burnt-out” highlights contain no information. Shadows can often be opened up in editing.',
      },
    ],
  },
};

/** “With a phone” tips for the existing lessons */
export const PHONE_EN: Record<string, string> = {
  'exp-light': 'With a phone: walk around your subject or turn the subject. See how the shadows change with the light in front, to the side and behind. Against the light, tap on the sky for a silhouette or on the face for a “rim” of light.',
  'exp-whitebalance': 'With a phone: auto white balance is very good, but it often “corrects” the warm light of sunset. In Pro mode set WB to “Daylight” (~5500K) to keep the warmth, or change the “temperature” when editing.',
  'exp-what': 'With a phone: tap on the subject to meter the light there, and drag the sun ☀ for a brighter or darker image. These two control exposure in most situations.',
  'exp-aperture': 'With a phone: the aperture is fixed. For a blurred background, get closer to the subject, move it away from the background or use portrait mode (see the Depth of field module).',
  'exp-shutter': 'With a phone: in Pro mode set, for example, 1/1000 to freeze motion, or 1/15 – 1/2 on a steady support to blur it. Without Pro, the “Long exposure” mode or Live Photo do something similar.',
  'exp-iso': 'With a phone: in low light the phone raises the ISO by itself and takes many frames. If you rest it on something steady, night mode gives a much cleaner result.',
  'exp-equivalent': 'With a phone: the aperture does not change, so you “play” with shutter and ISO in Pro mode. For example, 1/500 at ISO 400 gives the same brightness as 1/125 at ISO 100: less noise, but more risk of shake.',
  'exp-metering': 'With a phone: the meter makes the same mistakes. In snow, tap and drag the sun ☀ up. In a dark scene, down.',
  'exp-histogram': 'With a phone: many camera apps and Pro mode show a histogram. If there is none, zoom into the preview and check whether the clouds and the skin have detail.',
  'comp-thirds': 'With a phone: switch on the grid in the camera settings. You will see the rule-of-thirds lines over the image.',
  'comp-horizon': 'With a phone: the grid and the “straighten” tool in editing help you. Many phones also show a level indicator when you hold the camera straight.',
  'comp-viewpoint': 'With a phone: turn the phone upside down so the lens is at the bottom, to get a very low viewpoint without lying down.',
  'lens-focal': 'With a phone: use the 0.5× / 1× / 3× buttons, which really switch cameras, instead of pinch-zooming. The main lens (1×) usually has the best sensor and gives the cleanest image in low light.',
  'lens-perspective': 'With a phone: for portraits prefer 2× or 3× from a little further away. The 0.5× distorts faces, especially at the edges of the frame.',
  'focus-how': 'With a phone: tap on the point you want sharp. Hold to lock focus and exposure before you reframe.',
  'dof-what': 'With a phone: the main camera has a very deep depth of field. To see a blurred background without portrait mode, get within 10–15 centimetres of a flower.',
  'edit-basics': 'With a phone: the built-in photo editor is enough for all the basic steps. If your phone shoots RAW (ProRAW / Expert RAW), try it in difficult light.',
};

/** Checklists and field assignments per module */
export const MODULE_EXTRAS_EN: Partial<Record<LessonModule, Pick<ModuleText, 'checklist' | 'fieldwork'>>> = {
  light: {
    checklist: {
      title: 'Before you press the shutter: 5 questions about light',
      items: [
        ['Where is it coming from?', 'Front, side, behind? Move yourself or move the subject.'],
        ['Hard or soft?', 'Does it suit the subject? Look for shade, a window or a diffuser.'],
        ['What colour is it?', 'Warm, cool, mixed? Set the white balance on purpose.'],
        ['What time is it?', 'Midday, golden hour, blue hour, overcast? Is it worth waiting?'],
        ['High or low key?', 'What mood do I want the picture to have?'],
      ],
    },
    fieldwork: {
      title: 'Field assignment: chasing the light',
      intro: 'With a camera or a phone. One week, one subject. Note the time, the source, the white balance and the lighting pattern.',
      items: [
        ['① Golden hour', 'a portrait in warm side light'],
        ['② Blue hour', 'a street or harbour with lights'],
        ['③ White balance', 'the same white paper under 3 light sources'],
        ['④ Mixed light', 'window and lamp in the same frame'],
        ['⑤ Loop & Rembrandt', 'with one window'],
        ['⑥ Butterfly & Split', 'with one lamp'],
        ['⑦ Reflector', 'with and without a white card'],
        ['⑧ High & low key', 'the same subject, two moods'],
      ],
      share: 'Presentation: for each photograph, someone else guesses where the light was, and then the photographer explains.',
    },
  },
  metering: {
    fieldwork: {
      title: 'Field assignment: taking control of exposure',
      intro: 'With a camera or a phone. Keep notes: mode, metering, compensation. Check the histogram where available.',
      items: [
        ['① Snow or white', 'correct white with + EV'],
        ['② Dark scene', 'a real black with − EV'],
        ['③ Backlight', 'one silhouette and one correctly exposed face'],
        ['④ Spot', 'a lit face in front of darkness'],
        ['⑤ Bracketing', '−1, 0, +1 EV, choose the best'],
        ['⑥ AE-L / lock', 'meter on the face, face on a third'],
        ['⑦ Histogram', 'one photograph for each of the 4 types'],
        ['⑧ Dynamic range', 'a window: for inside, for outside, HDR'],
      ],
    },
  },
  exposure: {
    checklist: {
      title: 'Quick exposure check',
      items: [
        ['What do I want sharp?', 'Shallow or deep depth of field → aperture.'],
        ['Is anything moving?', 'Freeze or blur → shutter speed.'],
        ['How much light do I have?', 'ISO as low as possible, as high as necessary.'],
        ['Is the meter fooling me?', 'Snow, darkness, backlight → compensation.'],
        ['Are the highlights safe?', 'Histogram or zooming into the preview.'],
      ],
    },
  },
};
