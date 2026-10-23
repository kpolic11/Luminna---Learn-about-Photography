import type { LessonText } from '../types';

/** School — Level 3: shutter & motion */
export const LAB6C_EN: Record<string, LessonText> = {
  'sh-types': {
    title: 'Mechanical, EFCS and electronic shutter',
    tagline: 'Three ways for the camera to “open”, and when to use each.',
    quick:
      'The mechanical shutter has two moving curtains. EFCS starts electronically and ends mechanically, with less vibration. The electronic shutter is silent and very fast, but reads the sensor line by line, which can distort moving subjects.',
    challenge:
      'Check your camera’s menu (if you have one) to see which shutter types it supports. On a phone, everything is electronic: photograph the blades of a spinning fan. Are they bent or “melted”?',
    body: [
      'The mechanical focal-plane shutter, found in most interchangeable-lens cameras, has two “curtains” right in front of the sensor. The first opens, and after the exposure time the second closes. At fast speeds, the second starts before the first has finished, and a narrow slit “sweeps” across the sensor. That is why flash only syncs up to a certain speed, as we will see in the flash lesson. Some cameras, mainly medium format and some compacts, instead have a shutter inside the lens (leaf shutter), which syncs with flash at all speeds.',
      'Electronic first curtain (EFCS) starts the exposure electronically, “resetting” the sensor line by line, and ends it with the mechanical second curtain. This avoids the vibration caused by the movement of the first curtain. At very fast speeds with very wide apertures it can slightly affect the bokeh.',
      'The fully electronic shutter has no moving parts: the sensor is simply “read”. It is silent, does not wear out and allows very fast speeds and bursts. But most sensors are read line by line (rolling shutter), and this causes distortion with fast movement and banding under some artificial lights. The “global” sensor (global shutter), which reads all pixels at once, existed in industrial and video cameras. In 2023 it also appeared in the first full-frame mirrorless stills camera.',
    ],
    bullets: [
      'Mechanical: two curtains, a flash sync limit.',
      'Leaf shutter (in the lens): flash sync at all speeds.',
      'EFCS: less vibration.',
      'Electronic: silent, very fast, but rolling shutter.',
      'Global shutter: all pixels read at once.',
    ],
    mistakes: [
      'An electronic shutter with slow readout (non-stacked sensor) for fast sport or under LEDs: distortion and banding.',
      'Forgetting the silent electronic shutter at a wedding, in the theatre or with wildlife, where sound disturbs.',
    ],
    keyIdea: 'Mechanical for reliability and flash, EFCS for precision without vibration, electronic for silence and speed, with care around movement and lights.',
    tryIt: 'If your camera has an electronic shutter, photograph the posts at the roadside from a moving car (as a passenger!), with the mechanical and the electronic shutter. Do they lean in one of the two?',
    check: [
      {
        id: 'sht-1',
        question: 'What is the main drawback of the electronic shutter on most sensors?',
        options: ['It is noisy', 'It distorts fast-moving subjects (rolling shutter)', 'It does not allow fast speeds', 'It wears out quickly'],
        correctIndex: 1,
        explanation: 'The sensor is read line by line, so anything moving fast “leans”.',
      },
    ],
  },

  'sh-rolling': {
    title: 'Rolling shutter, flicker and banding',
    tagline: 'Bent propellers, leaning buildings and striped photographs under lamps: what causes them and how to fix them.',
    quick:
      'Rolling shutter makes anything fast “lean”. Flicker: many artificial lights pulse very fast (in Europe often 100 times a second), and at fast speeds this gives bands or uneven brightness. Fixes: mechanical shutter, a slower speed, an “anti-flicker” mode.',
    challenge:
      'Under LED or fluorescent light, photograph a white wall with your phone in Pro mode at 1/1000 and at 1/100. Do you see bands at 1/1000?',
    body: [
      'With a rolling shutter, the top line of the sensor is read slightly earlier than the bottom. If something moves fast during that interval, it appears “leaning” or distorted: vertical posts that lean when you pan, propellers that become strange curves, tennis rackets that bend. The faster the sensor readout, the smaller the problem. “Stacked” sensors greatly reduce it, and global shutters eliminate it.',
      'Flicker is a different matter. Many artificial sources, such as fluorescent tubes, many LEDs, stadium lights and screens, do not emit steady light but “pulse”, often at twice the frequency of the mains: 100 times a second in Europe (50 Hz grid), 120 in North America (60 Hz). At a fast speed, each frame catches a different phase: brightness and colour change from photograph to photograph, and with an electronic shutter horizontal bands appear.',
      'Fixes: in scenes with artificial light, a speed that covers whole cycles, e.g. 1/100 or 1/50 in Europe, smooths out the effect. Many cameras have an “anti-flicker” mode that times the exposure to the brightest phase. Some also allow very fine speed adjustment for specific LEDs. And for fast action under such lights, the mechanical shutter is usually safer than the electronic one.',
    ],
    bullets: [
      'Rolling shutter: line-by-line readout → distortion of fast motion.',
      'Flicker: artificial lights pulse, often at 100 Hz in Europe.',
      'Bands with the electronic shutter, inconsistent frames at fast speeds.',
      'Fixes: 1/100 or 1/50, anti-flicker, mechanical shutter.',
    ],
    mistakes: [
      'Burst with the electronic shutter in an indoor arena with LEDs: each frame a different brightness.',
      'Blaming white balance for colour differences that come from flicker.',
    ],
    keyIdea: 'Motion + electronic shutter = distortion. Artificial light + fast speed = flicker. Knowing this, you can avoid them.',
    tryIt: 'In a supermarket or gym with fluorescent or LED lighting, shoot a burst of 10 frames at 1/1000 and 10 at 1/100. Compare how consistent the brightness is.',
    check: [
      {
        id: 'shr-1',
        question: 'In Europe, which shutter speed usually helps avoid flicker under artificial light?',
        options: ['1/4000', '1/1000', '1/100', '1/8000'],
        correctIndex: 2,
        explanation: 'The light often pulses 100 times a second; at 1/100 the exposure covers a whole cycle.',
      },
    ],
  },

  'sh-long': {
    title: 'Long exposures and ND filters',
    tagline: 'Silky water, racing clouds, cities without people: when time becomes the subject.',
    quick:
      'A neutral density (ND) filter is “sunglasses” for the lens: it cuts light without changing colour. That way you can make exposures of seconds or minutes even in daylight. ND8 = 3 stops, ND64 = 6 stops, ND1000 ≈ 10 stops.',
    challenge:
      'Work it out: without a filter, the correct exposure is 1/60. With a 10-stop filter, what speed do you need? (Answer: about 17 seconds, 1/60 × 1024; on the camera’s scale, 15 s. Each stop doubles the time.)',
    body: [
      'In long exposures, whatever moves blurs and whatever is still stays sharp. Water becomes mist or silk, clouds become brushstrokes, people walking across a square vanish or become ghosts, car lights become lines. At night, an exposure of a few seconds is easy. In daylight, though, even at f/16 and ISO 100, the time is a fraction of a second.',
      'This is where neutral density (ND) filters come in. They are named in various ways: ND8 or 0.9 means 3 stops (8 times less light), ND64 or 1.8 means 6 stops, ND1000 or 3.0 means about 10 stops. To find the time, double the original time as many times as there are stops: 1/60 with 10 stops becomes about 15–17 seconds. There are apps that do the calculation. On most cameras, for exposures beyond 30 seconds you use Bulb mode, with a remote; some newer ones also allow longer times.',
      'In practice: a tripod and a remote or self-timer, focus and compose before fitting the dark filter, because afterwards you see nothing. On DSLRs, cover the viewfinder so light does not leak in from behind. Many very dark filters leave a slight colour cast, which is corrected in white balance. And “long exposure noise reduction” takes a second, dark frame of the same length to subtract thermal noise: it doubles the waiting time.',
    ],
    bullets: [
      'ND8 (0.9) = 3 stops · ND64 (1.8) = 6 stops · ND1000 (3.0) ≈ 10 stops.',
      'Each stop doubles the time.',
      'Focus and compose before the filter.',
      'Bulb + remote for > 30 s (on most cameras).',
      'Long exposure noise reduction = double the wait.',
    ],
    mistakes: [
      'Trying to focus through a 10-stop ND: you cannot see anything.',
      'Autofocus active when you press the button: it may “hunt” and ruin the focus.',
      'A long exposure on a subject where motion adds nothing.',
    ],
    phone:
      'With a phone: many phones have a “long exposure” mode or turn a Live Photo into a “long exposure”. They combine many frames, so they can do it even in daylight, without a filter. Support the phone well.',
    keyIdea: 'ND filters “buy” time: each stop doubles the exposure. Tripod, compose before the filter, and motion becomes the subject.',
    tryIt: 'Find moving water (sea, fountain, stream) and photograph it at 1/500, 1/15, 1 s and 10 s (with an ND or at dusk). Which mood do you like?',
    see: ['sugimoto'],
    check: [
      {
        id: 'sl-1',
        question: 'How many stops does an ND64 filter cut?',
        options: ['3', '6', '10', '64'],
        correctIndex: 1,
        explanation: '64 = 2⁶, so 6 stops.',
      },
      {
        id: 'sl-2',
        question: 'Without a filter the exposure is 1/30. With a 6-stop filter, roughly what is the time?',
        options: ['1/4', '1 s', '2 s', '30 s'],
        correctIndex: 2,
        explanation: '1/30 → 1/15 → 1/8 → 1/4 → 1/2 → 1 → 2 s.',
      },
    ],
  },

  'sh-panning': {
    title: 'Panning: a sharp subject, a background that “races”',
    tagline: 'How to show speed: follow the subject with the camera and let the world turn into lines.',
    quick:
      'In panning you follow a passing subject with the camera at a relatively slow speed (e.g. 1/30 for cars, 1/15 for cyclists), and press without stopping the movement. The subject comes out (fairly) sharp and the background becomes horizontal speed lines.',
    challenge:
      'Stand at the side of a road with your phone in Pro mode, speed 1/30. Follow a car passing from left to right and shoot while turning. Make 10 attempts: how many worked?',
    body: [
      'A fast shutter speed “freezes” a speeding car, but the result often looks as if the car were parked. Panning does the opposite: it shows speed. The camera follows the subject during a relatively slow exposure. Because the subject stays roughly in the same place in the frame, it comes out sharp, while the background, which moves relative to the camera, becomes lines.',
      'Technique: stand firmly, feet apart and pointed towards the spot where you will shoot. Start following the subject before it reaches that spot, turning from the waist, not the arms. Press the button smoothly and keep moving after the shot, as a golfer follows through after the swing. Continuous autofocus, burst mode, and lots of patience: the success rate is low even for experienced photographers.',
      'The speed depends on the subject and the distance: about 1/60–1/125 for racing cars, 1/30 for cars in town, 1/15 or 1/8 for cyclists, runners, horses. Start faster, to be safe, and work down. Many lenses and cameras have a special panning stabilisation mode that corrects only vertical movement. And combining panning with flash at the end of the exposure (second curtain) “freezes” the subject even more crisply.',
    ],
    bullets: [
      'Follow the subject from the waist, not the arms.',
      'Press smoothly and keep moving afterwards.',
      'Cars ~1/30–1/125, cyclists and runners ~1/15–1/8.',
      'Continuous focus, burst, many attempts.',
      'Panning stabilisation, or second-curtain flash.',
    ],
    mistakes: [
      'Stopping the movement at the moment of the shot: the subject blurs.',
      'Too fast a speed: the background does not “race” and the point is lost.',
      'Judging from 3 attempts: panning takes dozens.',
    ],
    keyIdea: 'Panning: follow the subject at a slow speed and keep moving. The subject stays sharp, the world becomes speed.',
    tryIt: 'Take 30 panning shots of cyclists or cars at three speeds (1/60, 1/30, 1/15). Keep the best from each speed.',
    check: [
      {
        id: 'spn-1',
        question: 'What turns the background into “lines” in panning?',
        options: ['The flash', 'The movement of the camera during a relatively slow exposure', 'High ISO', 'The wide-angle lens'],
        correctIndex: 1,
        explanation: 'The camera follows the subject, so the background moves relative to the sensor.',
      },
    ],
  },
};
