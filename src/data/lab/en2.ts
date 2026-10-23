import type { LessonText, LessonModule, ModuleText } from '../types';
import { LAB2B_EN } from './en2b';

/** Photography School — modules (English) */
export const MODULES_EN: Partial<Record<LessonModule, ModuleText>> = {
  light: { title: 'Light', desc: 'Where it comes from, how hard or soft it is, what colour it has. The first thing a photographer must learn to see.' },
  exposure: { title: 'Exposure', desc: 'Aperture, shutter speed, ISO: the three “dials” of every camera and how they work together.' },
  'comp-basics': { title: 'Framing: the basics', desc: 'The first rules of composition, which instantly make a photograph stronger.' },
  'focus-dof': { title: 'Focus & depth of field', desc: 'What is sharp and what is blurred, and why. The most misunderstood topic in photography, step by step.' },
  metering: { title: 'Metering & the histogram', desc: 'How the light meter “thinks”, when it gets it wrong and how to read the histogram.' },
  'comp-advanced': { title: 'Framing: advanced', desc: 'Proportions, rhythm, balance, layers: the tools of the great photographers, and when to break them.' },
  lenses: { title: 'Lenses & perspective', desc: 'Focal length, angle of view and the great misunderstanding of “compression”.' },
  editing: { title: 'Files & editing', desc: 'File formats, basic editing in moderation and a simple workflow from capture to sharing.' },
};

const LAB2A_EN: Record<string, LessonText> = {
  /* ------------------------------ LIGHT ------------------------------ */
  'light-quality': {
    title: 'Hard and soft light',
    tagline: 'Why the midday sun “writes” differently from an overcast morning.',
    body: [
      'The “quality” of light describes the shadows it creates. Hard light gives shadows with sharp, clean edges and strong contrast between light and dark. Soft light gives shadows with a gentle transition, almost without an edge, and milder contrast.',
      'What determines quality is the size of the source relative to the subject. The sun is huge, but it is so far away that in the sky it looks like a small dot: that is why it gives hard light. When clouds cover it, the whole sky becomes the source, a vast bright surface, and the light becomes soft. The same is true of a large window without direct sun: it is a large source close to the subject.',
      'Two rules follow. First, the larger the source, the softer the light. Second, the closer it is to the subject, the softer the light, because from the subject’s position the source “looks” larger. That is why studio photographers put large softboxes and umbrellas very close to the face, and why a white sheet or a curtain in front of a sunny window instantly softens the light.',
      'Neither is “correct”. Soft light flatters faces and hides imperfections. Hard light is dramatic, brings out textures and shapes, and was loved by photographers such as Rodchenko and many street photographers, who played with the strong shadows of the city.',
    ],
    bullets: [
      'Soft: overcast sky, the shade of a building, a window without sun, light bouncing off a white wall.',
      'Hard: midday sun, flash without a diffuser, a bare bulb, a phone torch.',
      'To soften it: bring the source closer, make it larger (a diffuser), or bounce the light off a large surface.',
    ],
    mistakes: [
      'A portrait in the midday sun, with dark shadows under the eyes and nose. Move the person into the shade.',
      'The phone flash straight at the face, giving flat, hard light and “red eye”.',
    ],
    keyIdea: 'Large, close source = soft light. Small or distant source = hard light.',
    tryIt: 'Photograph a piece of fruit next to a sunny window. Then hang a white sheet or kitchen paper in front of the glass and photograph it again. Compare the edges of the shadows.',
    check: [
      {
        id: 'lq1',
        question: 'Why does an overcast day give soft light?',
        options: ['Because there is less light', 'Because the whole sky becomes one huge light source', 'Because the light is bluer', 'Because the sun is closer'],
        correctIndex: 1,
        explanation: 'Clouds diffuse the sunlight, and the source becomes the whole sky: large source = soft light.',
      },
      {
        id: 'lq2',
        question: 'You want softer light from a lamp. What do you do?',
        options: ['Move it further away', 'Bring it closer to the subject and put a diffuser in front of it', 'Use a smaller bulb', 'Raise the ISO'],
        correctIndex: 1,
        explanation: 'A closer, larger source means gentler shadows.',
      },
    ],
  },

  'light-time': {
    title: 'Time of day and weather',
    tagline: 'The same place, five different photographs: all it takes is a different hour.',
    body: [
      'Because the Earth turns, light constantly changes in height, direction, intensity and colour. Experienced landscape and city photographers do not only ask “what shall I photograph?”, but also “when?”.',
      'The “golden hour” is the time just after sunrise and just before sunset. The sun is low, the light passes through more atmosphere and becomes warmer, more orange and softer, and the shadows are long. Faces look warm, landscapes gain volume and texture. How long it lasts depends on the season and the latitude.',
      'The “blue hour” comes just before sunrise and just after sunset, when the sun is below the horizon. The sky turns deep blue, and if there are city lights, they balance beautifully with the sky. It is the best time for night photographs of a city, before the sky turns completely black.',
      'At midday, with the sun high, the light is hard, shadows fall straight down and colours often look “washed out”. It is not impossible to photograph, but it is harder: look for shade, interiors or graphic games with shadows. Weather is an ally too: fog simplifies and adds atmosphere, rain adds reflections, a storm adds a dramatic sky.',
    ],
    bullets: [
      'Golden hour: portraits, landscapes, warm atmosphere.',
      'Blue hour: the city with its lights, calm, cool colours.',
      'Midday: architecture with strong shadows, the sea, graphic shadows, interiors.',
      'Overcast: portraits, forests, flowers, street photography without strong highlights and shadows.',
      'There are apps that show where and when the sun will rise and set at any location.',
    ],
    mistakes: [
      'Going to a beautiful place only at midday and being disappointed with the photographs.',
      'Stopping when the sun sets: the blue hour is just beginning.',
    ],
    keyIdea: 'Before you ask “what”, ask “when”. The same scene changes character with the hour.',
    tryIt: 'Choose a spot near your home and photograph it from the same position at sunrise, midday, sunset and in the blue hour. Put the four photographs side by side.',
    check: [
      {
        id: 'lt1',
        question: 'When is the “blue hour”?',
        options: ['At midday', 'Just before sunrise and just after sunset', 'At midnight', 'When it rains'],
        correctIndex: 1,
        explanation: 'The sun is below the horizon and the sky takes on a deep blue colour.',
      },
      {
        id: 'lt2',
        question: 'Why is golden-hour light warmer?',
        options: ['Because the sun is hotter', 'Because it passes through more atmosphere, which filters out blue', 'Because we see it through clouds', 'Because the camera changes its settings'],
        correctIndex: 1,
        explanation: 'When the sun is low, its light travels further through the atmosphere and more of the blue is scattered.',
      },
    ],
  },

  /* ------------------------------ FOCUS & DEPTH OF FIELD ------------------------------ */
  'focus-how': {
    title: 'How a camera focuses',
    tagline: 'Only one plane is perfectly sharp. The point is to choose which.',
    body: [
      'When you focus, the lens moves some of its glass elements so that objects at a particular distance form a sharp image on the sensor. That distance defines an imaginary “plane of focus”, like an invisible pane of glass parallel to the camera. Anything on that plane is perfectly sharp. As you move away from it, forwards or backwards, the image gradually blurs.',
      'Today’s cameras and phones focus automatically (autofocus). Your phone usually chooses by itself what to focus on, often a face or the nearest object. But you can tell it: tap the screen on the spot you want. Cameras have two main modes: one that focuses once and “locks” (usually called AF-S or One Shot), ideal for still subjects, and one that follows the subject continuously (AF-C or AI Servo), for anything that moves.',
      'The most important rule for portraits: focus on the eyes, and if both are visible, on the one closer to the camera. When the eyes are sharp, the photograph “holds up”, even if other areas are soft. Most modern cameras and phones also have automatic eye detection.',
      'Sometimes autofocus gets confused: in very low light, on surfaces without texture (a white wall), through glass or a fence. Then you can focus on something else at the same distance and lock, or use manual focus. Many cameras have an aid that colours the sharp areas on the screen (focus peaking).',
    ],
    mistakes: [
      'The phone focuses on the background instead of the face. Always tap on the subject before shooting.',
      'In a wide-aperture portrait, focus lands on the nose or the ears instead of the eyes.',
      'For a subject moving towards the camera you use a focus mode that locks once, and by the time you shoot the subject has moved.',
    ],
    keyIdea: 'Only one plane is perfectly sharp. Choose it yourself, and in a portrait, choose the eyes.',
    tryIt: 'Put three objects in a row on a table, at different distances. Photograph from close up three times, tapping on a different object each time. See how the plane of focus “moves”.',
    check: [
      {
        id: 'fh1',
        question: 'In a portrait, where is it best to focus?',
        options: ['On the nose', 'On the eye closer to the camera', 'On the background', 'On the hair'],
        correctIndex: 1,
        explanation: 'When the eyes are sharp, the photograph “holds up”. The nearer eye is the safest point.',
      },
      {
        id: 'fh2',
        question: 'Which focus mode suits a dog running towards you?',
        options: ['Focus that locks once (AF-S)', 'Continuous focus that follows the subject (AF-C)', 'Manual focus at infinity', 'None'],
        correctIndex: 1,
        explanation: 'Continuous focus adjusts as the subject’s distance changes.',
      },
    ],
  },

  'dof-what': {
    title: 'What depth of field is',
    tagline: 'The “zone” that looks sharp, in front of and behind the point of focus.',
    body: [
      'We saw that only one plane is perfectly sharp. Why, then, do so many photographs show things sharp at very different distances, from a flower in front to the mountains in the distance? Because our eye cannot tell very small blurs apart. A point that is slightly out of focus becomes a tiny circle in the image instead of a dot. If the circle is small enough, the eye still sees it as a dot.',
      '“Depth of field” is therefore the range of distances, in front of and behind the plane of focus, within which things look “acceptably sharp”. If the zone is narrow, we say the depth of field is “shallow”: the subject is sharp and the background blurred. If it is wide, we say the depth of field is “deep”: almost everything is sharp.',
      'Two things are worth remembering. First, the edge of the zone is not abrupt: sharpness falls off gradually. What counts as “sharp enough” depends on how much the image is enlarged and how far away we view it: a photograph that looks sharp on a phone screen may look soft printed as a poster. Second, at normal distances the zone is not split evenly: it usually extends further behind the point of focus than in front of it. That is why people often quote the rule of thumb “one third in front, two thirds behind”, which is only approximate: very close up, the split approaches half and half.',
      'Three things change depth of field, and we will look at them one by one in the next lessons: the aperture, the distance to the subject, and the combination of lens and sensor size. In the tool below you see the camera and three subjects from above. The green zone is the depth of field.',
    ],
    bullets: [
      'Shallow depth of field: portraits, isolating a subject, details, atmosphere.',
      'Deep depth of field: landscapes, architecture, street photography, group photos.',
      '“Bokeh” is not how blurred the background is, but the quality and character of the blur: smooth or “nervous”, round or angular highlights.',
    ],
    mistakes: [
      'Believing depth of field is “one button”. It is the result of three factors together.',
      'Checking sharpness only on the small screen: zoom in to see whether the important point is really sharp.',
    ],
    keyIdea: 'Depth of field = the zone that looks acceptably sharp. It is not a point, it is an area with soft edges.',
    tryIt: 'In the tool, move the focus distance and watch the green zone “follow” and change width. Notice that the zone is usually larger behind the point of focus than in front of it.',
    check: [
      {
        id: 'dw1',
        question: 'What does “shallow” depth of field mean?',
        options: ['That the whole image is blurred', 'That a narrow zone is sharp and the rest is blurred', 'That the image is dark', 'That the photo was taken near the sea'],
        correctIndex: 1,
        explanation: 'Shallow depth of field = a narrow sharp zone, usually with a blurred background.',
      },
      {
        id: 'dw2',
        question: 'At normal distances, how is the zone of sharpness usually split around the point of focus?',
        options: ['Equally in front and behind', 'More behind the point of focus', 'More in front', 'Only behind'],
        correctIndex: 1,
        explanation: 'The rule of thumb says about one third in front and two thirds behind, although very close up the split approaches half and half.',
      },
    ],
  },

  'dof-aperture': {
    title: 'Depth of field and aperture',
    tagline: 'The best-known way to blur or “clean up” the background.',
    body: [
      'The aperture is an opening inside the lens that gets bigger and smaller. It is measured in f-numbers: a small number (f/1.8, f/2.8) means a large opening, a large number (f/11, f/16) a small opening. You already know it changes the amount of light. But it also changes the depth of field.',
      'With a large opening, light reaches the sensor in a wide cone. For anything not exactly on the plane of focus, that wide cone creates large circles of blur. With a small opening, the cone is narrow and the circles small, so more things look sharp. It is the same effect we saw in the camera obscura: a small hole, a sharper image.',
      'In practice: for a portrait with a blurred background, open the aperture (f/1.8 – f/2.8). For a landscape where you want both the foreground and the mountains sharp, close it down (f/8 – f/11). But remember that every change of aperture has a “cost” in light: closing from f/2.8 to f/11 loses four stops, which you must make up with a slower shutter speed or a higher ISO.',
      'There is also a limit. At very small apertures, such as f/16 or f/22, light “bends” at the edges of the small opening (diffraction), and the whole image loses a little sharpness. That is why many landscape photographers prefer f/8 – f/11, which give deep depth of field without noticeable loss of sharpness. Remember Group f/64? With their huge cameras, diffraction was less of a problem than it would be on your camera.',
    ],
    bullets: [
      'f/1.4 – f/2.8: very shallow, ideal for portraits and isolating a subject.',
      'f/4 – f/5.6: moderate, good for couples, small groups, street photography.',
      'f/8 – f/11: deep, for landscapes and architecture.',
      'f/16 – f/22: very deep, but with some loss of sharpness from diffraction.',
    ],
    mistakes: [
      'A group photo in two rows at f/1.8: the front row sharp, the back row blurred.',
      'A portrait at f/1.4 very close up: one eye sharp, the nose and the other eye blurred. Stop down a little to f/2.8.',
      'A landscape at f/22 “to be safe”: you lose sharpness for no reason.',
    ],
    keyIdea: 'Small f-number = large opening = shallow depth of field. Large f-number = small opening = deep depth of field.',
    tryIt: 'In the tool, keep the distance fixed and change the aperture from f/1.8 to f/11. See how much the green zone widens. Then, with a camera in mode A, photograph a face in front of trees at f/2.8 and at f/11.',
    check: [
      {
        id: 'da1',
        question: 'Which aperture gives the most blurred background, all else being equal?',
        options: ['f/16', 'f/8', 'f/1.8', 'f/22'],
        correctIndex: 2,
        explanation: 'The smallest f-number means the largest opening and the shallowest depth of field.',
      },
      {
        id: 'da2',
        question: 'Why do many landscape photographers avoid f/22?',
        options: ['Because it gives no depth of field', 'Because of diffraction, which slightly reduces sharpness across the image', 'Because it changes the colours', 'Because no lens has it'],
        correctIndex: 1,
        explanation: 'Very small openings “bend” the light. f/8–f/11 is usually a good balance.',
      },
    ],
  },

  'dof-distance': {
    title: 'Depth of field and distance',
    tagline: 'The most underrated “dial”: how close you are to the subject, and how far away the background is.',
    body: [
      'Many people think a blurred background is only a matter of aperture. In reality, the distance to the subject has just as big an effect, or even bigger. The closer you focus, the shallower the depth of field. At long distances, the zone of sharpness widens very quickly: in many cases, if you double the focus distance, the depth of field becomes roughly four times as deep.',
      'That is why macro photography, where you photograph an insect from a few centimetres away, has a depth of field of a few millimetres, even with the aperture closed down. And that is why even your phone blurs the background when you photograph a flower from very close, without portrait mode.',
      'There is a second factor, the secret of good portraits: the distance between the subject and the background. The background blurs more the further it is from the plane of focus. A face pressed against a wall will have the wall almost sharp, even at f/1.8. The same face, five metres in front of the trees of a park, will have a soft, blurred background behind it even at f/4.',
      'So before changing settings, change positions: move closer to your subject and move your subject away from the background. It is the cheapest and most effective way to isolate it.',
    ],
    bullets: [
      'Closer to the subject = shallower depth of field.',
      'Background further from the subject = more blurred background.',
      'Macro photography: depth of field of a few millimetres, focus with great care.',
    ],
    mistakes: [
      'Asking the person to lean against the wall and wondering why the wall does not blur.',
      'In macro, rocking slightly back and forth after focusing and losing the point you wanted.',
    ],
    keyIdea: 'A close subject and a distant background = the softest blurred background, even without an expensive lens.',
    tryIt: 'In the tool, keep the aperture fixed and bring the focus from 10 metres to 1 metre. Then photograph a friend first pressed against a wall and then three or four metres in front of it, with the same settings.',
    check: [
      {
        id: 'dd1',
        question: 'You want a more blurred background in a portrait without changing lens or aperture. What do you do?',
        options: ['Move away from the subject', 'Move closer to the subject and move it away from the background', 'Raise the ISO', 'Change the white balance'],
        correctIndex: 1,
        explanation: 'A short focus distance and a distant background blur the background more.',
      },
      {
        id: 'dd2',
        question: 'Why does macro photography have such shallow depth of field?',
        options: ['Because it always uses f/1.4', 'Because the focus distance is very short', 'Because insects move', 'Because there is little light'],
        correctIndex: 1,
        explanation: 'The closer you focus, the narrower the zone of sharpness.',
      },
    ],
  },

  'dof-lens-sensor': {
    title: 'Lens, sensor, and why the phone struggles to blur',
    tagline: 'Why a camera blurs the background easily, while the phone needs “portrait mode”.',
    body: [
      'The focal length of the lens (for example 24 mm, 50 mm, 85 mm) also affects depth of field. If you stay in the same place and switch from a wide-angle to a telephoto lens, the subject gets bigger in the frame and the depth of field gets shallower. But there is a subtlety: if you step back so that the subject has the same size in the frame, the depth of field around the subject stays almost the same. What changes is the background: the telephoto “sees” a much smaller piece of the background and enlarges it, so its blur looks much stronger. That is why portrait photographers love 85 mm or 135 mm lenses.',
      'Sensor size plays a big role. For the same framing, a small sensor needs a lens with a shorter focal length. And short focal lengths give deep depth of field. So, with the same framing and the same f-number, a smaller sensor gives more depth of field.',
      'Photographers express this with the “crop factor”: how many times smaller the sensor’s diagonal is than that of a “full-frame” 24 × 36 mm sensor. To estimate the depth of field you would get on full frame, you multiply the f-number by the factor. An APS-C sensor has a factor of about 1.5: an f/2 there looks, in terms of depth of field, like about f/3 on full frame. The main camera of a phone has a very small sensor, with a factor that is often 3 to 7 depending on the model. So a phone’s “f/1.8” behaves, for depth of field, somewhere between f/5.6 and f/13 on full frame.',
      'This explains why phone photographs have almost everything sharp, which is an advantage for landscapes and street photography. To imitate the portraits of large cameras, phones use “portrait mode”: they calculate the distance of every point (with a second camera, a depth sensor or artificial intelligence) and blur the background artificially. The result is often very good, but it can get confused by hair, glasses and transparent objects.',
    ],
    bullets: [
      'Full frame: factor 1.',
      'APS-C: about 1.5 – 1.6.',
      'Micro Four Thirds: 2.',
      'Main phone camera: about 3 – 7, depending on the model.',
      'Practical estimate: “equivalent f” for depth of field ≈ f × factor.',
    ],
    mistakes: [
      'Expecting a phone without portrait mode to give the blurred background of a large camera at f/1.8.',
      'Thinking a wide-angle lens “cannot” blur: from very close, it can.',
    ],
    keyIdea: 'Smaller sensor = more depth of field for the same framing. That is why phones blur the background with software.',
    tryIt: 'In the tool, choose “Phone” and then “Full frame”, with the same framing (equivalent focal length) and the same f. See how much the zone changes. Then take a portrait with your phone in normal mode and in portrait mode, and look for spots where the software “got confused”.',
    check: [
      {
        id: 'dl1',
        question: 'Why does a phone, with the same framing, give more depth of field than a large camera?',
        options: ['Because it has a slower shutter', 'Because the small sensor needs a very short focal length', 'Because it has no aperture', 'Because it is digital'],
        correctIndex: 1,
        explanation: 'Small sensor → short focal length for the same framing → deep depth of field.',
      },
      {
        id: 'dl2',
        question: 'An APS-C sensor has a factor of about 1.5. An f/2 there looks, for depth of field, like about…',
        options: ['f/1.3 on full frame', 'f/3 on full frame', 'f/8 on full frame', 'f/22 on full frame'],
        correctIndex: 1,
        explanation: '2 × 1.5 = 3: for the same framing, the depth of field looks like that of f/3 on full frame.',
      },
    ],
  },

  'dof-hyperfocal': {
    title: 'Hyperfocal distance: everything sharp in a landscape',
    tagline: 'The landscape photographer’s trick for keeping both the flower in front and the mountains sharp.',
    body: [
      'In landscapes we often want everything sharp: a rock two metres in front and the mountains on the horizon. If you focus on the horizon (“at infinity”), you waste part of the depth of field, because the zone of sharpness extends “beyond infinity”, where there is nothing. If you focus on the rock, the horizon may go soft.',
      'The solution is called the “hyperfocal distance”. For every combination of lens, aperture and sensor, there is a focus distance at which the zone of sharpness reaches exactly to infinity. If you focus there, everything is acceptably sharp from about half that distance to the horizon. It is the greatest depth of field you can get with those settings.',
      'An example: with a 24 mm lens on full frame at f/11, the hyperfocal distance is about 1.7 metres. If you focus there, everything looks sharp from about 0.9 metres to infinity. With a 50 mm lens at the same aperture, the hyperfocal distance rises to about 7.6 metres: the wide-angle is far more “forgiving”.',
      'In practice, you do not need to calculate by hand: there are apps and tables, and the tool in this lesson. Remember also that “sharp enough” depends on how large the photograph will be seen: for big prints, it is safer to focus a little beyond the hyperfocal distance. And on a phone, the main camera has such a short hyperfocal distance that, by focusing on something a few metres away, almost everything is already sharp.',
    ],
    bullets: [
      'Focusing at infinity: you lose part of the depth of field in the foreground.',
      'Focusing at the hyperfocal distance: sharp from about half that distance to infinity.',
      'Wide-angle + closed aperture = short hyperfocal distance = very deep depth of field.',
    ],
    mistakes: [
      'Always focusing on the horizon in landscapes, so the foreground comes out soft.',
      'Using hyperfocal focusing with a telephoto, where the distance is too great to help.',
    ],
    keyIdea: 'Focus at the hyperfocal distance and everything, from half that distance to infinity, will be acceptably sharp.',
    tryIt: 'In the tool, choose 24 mm and f/11 and press “Focus at hyperfocal”. See where the zone begins. Then, in a real landscape, focus once at infinity and once at the hyperfocal distance, and compare the foreground by zooming in.',
    check: [
      {
        id: 'dh1',
        question: 'If you focus at the hyperfocal distance H, which zone is acceptably sharp?',
        options: ['Only H', 'From about H/2 to infinity', 'From 0 to H', 'Only infinity'],
        correctIndex: 1,
        explanation: 'That is the greatest depth of field you can get with those settings.',
      },
      {
        id: 'dh2',
        question: 'Which combination gives the shortest hyperfocal distance (and so the deepest depth of field)?',
        options: ['50 mm at f/2', '24 mm at f/11', '85 mm at f/1.8', '200 mm at f/4'],
        correctIndex: 1,
        explanation: 'A wide-angle lens at a closed aperture has a very short hyperfocal distance.',
      },
    ],
  },

  /* ------------------------------ LENSES ------------------------------ */
  'lens-focal': {
    title: 'Focal length and angle of view',
    tagline: 'Wide-angle, normal, telephoto: what the “mm” and the phone’s “0.5× / 1× / 3×” mean.',
    body: [
      'A lens’s focal length, measured in millimetres (mm), determines how much of the world “fits” in the frame, that is, the angle of view. A short focal length means a wide angle: you see a lot. A long focal length means a narrow angle: you see little, magnified, as through binoculars.',
      'Because sensors come in different sizes, photographers usually talk about “equivalent focal length”, as if every lens were on a full-frame 24 × 36 mm sensor. In that language: about 14 – 35 mm is wide-angle, about 40 – 55 mm “normal” (close to how we feel the eye sees), and from about 70 mm upwards telephoto.',
      'On a phone, the “0.5×”, “1×”, “3×” buttons correspond to different cameras. On many current phones, the main camera (1×) is roughly 24 – 26 mm, the ultra-wide (0.5×) about 13 mm, and the telephoto (3× or 5×) about 70 – 120 mm, depending on the model. But when you pinch to zoom to values between the cameras, such as 2× or 10×, the phone often simply crops and enlarges the image digitally, and quality drops.',
      'Which lens should you choose? The wide-angle is wonderful for landscapes, interiors and for “putting you inside” the scene, but it demands that you get close and watch the edges. The normal lens is natural and honest, a favourite of street photography. The telephoto isolates, simplifies the background and lets you photograph from a distance.',
    ],
    bullets: [
      'Ultra-wide (≈ 13 – 20 mm): dramatic perspective, architecture, small spaces.',
      'Wide-angle (≈ 24 – 35 mm): landscape, street, environmental portrait.',
      'Normal (≈ 40 – 55 mm): natural view, street, everyday life.',
      'Short telephoto (≈ 70 – 135 mm): portraits, landscape details.',
      'Telephoto (≈ 200 mm and up): sports, wildlife, distant subjects.',
    ],
    mistakes: [
      'Zooming digitally with your fingers instead of getting closer.',
      'Taking a close-up portrait with an ultra-wide: the nose gets bigger, the ears smaller (see the next lesson).',
    ],
    keyIdea: 'Focal length changes how much of the world fits in the frame. Where you stand changes the perspective.',
    tryIt: 'From the same position, photograph a scene with every camera on your phone (0.5×, 1×, 2× or 3×). Put the photographs side by side and see how much the angle and the “story” change.',
    check: [
      {
        id: 'lf1',
        question: 'What does a longer focal length (for example 85 mm instead of 24 mm) mean, from the same position?',
        options: ['A wider angle of view', 'A narrower angle of view, with the subject larger in the frame', 'More light', 'Warmer colours'],
        correctIndex: 1,
        explanation: 'The telephoto “sees” a smaller piece of the world and magnifies it.',
      },
      {
        id: 'lf2',
        question: 'What usually happens when you pinch-zoom to 10× on a phone?',
        options: ['A huge optical telephoto switches on', 'The image is cropped and enlarged digitally, with a loss of quality', 'The aperture changes', 'Nothing'],
        correctIndex: 1,
        explanation: 'Beyond the optical cameras, zoom is digital. Get closer if you can.',
      },
    ],
  },
};

/** Newer lessons (English) */
export const LAB2_EN: Record<string, LessonText> = { ...LAB2A_EN, ...LAB2B_EN };
