import type { Photo } from './types';

const u = (src: string, ratio: number, user: string, page: string): Photo => ({ src, ratio, credit: `@${user} / Unsplash`, creditUrl: 'https://unsplash.com' + page });

/** Free photos from Unsplash (Unsplash License), hot-linked from images.unsplash.com */
export const PH = {
  splash1: u('https://images.unsplash.com/photo-1784544306898-a0a4f7647606', 1.667, 'hamburgmeinefreundin', '/photos/a-reddish-drop-creating-ripples-on-a-calm-surface-fAecnVvmhvc'),
  waterfall0: u('https://images.unsplash.com/photo-1482685945432-29a7abf2f466', 1.532, 'mikeanywhere', '/photos/waterfall-at-daytime-waAAaeC9hns'),
  pan0: u('https://images.unsplash.com/photo-1606927131353-c0ad17d60b56', 0.667, 'electerious', '/photos/man-in-black-jacket-riding-motorcycle-_MkukMMe36E'),
  shallow2: u('https://images.unsplash.com/photo-1609103249962-2af5bee38da3', 1.501, 'oliverengel', '/photos/white-and-black-short-coated-dog-tIj4T8WJnOc'),
  deep1: u('https://images.unsplash.com/photo-1611080402167-ed75bae6df32', 1.501, 'ferdinand8a', '/photos/brown-rocky-mountain-under-white-clouds-and-blue-sky-during-daytime-rj6P1M_fz6M'),
  night0: u('https://images.unsplash.com/photo-1748550009077-1b01cb9bbe68', 1.575, 'jahan_photobox', '/photos/man-runs-across-a-street-at-night-16T5AbXD4N0'),
  dial0: u('https://images.unsplash.com/photo-1775258533575-694a2bf34bfa', 1.501, 'faz_islam', '/photos/close-up-of-a-cameras-mode-dial-AsTLmF-RdsA'),
  shutterdial0: u('https://images.unsplash.com/photo-1765294029173-a609fda742fa', 1.504, 'isoten', '/photos/close-up-of-a-vintage-cameras-shutter-speed-dial-1PswupGLdhA'),
  beach0: u('https://images.unsplash.com/photo-1471922694854-ff1b63b20054', 1.502, 'frankiefoto', '/photos/five-birds-flying-on-the-sea-OD9EOzfSOh0'),
  beach1: u('https://images.unsplash.com/photo-1763113975476-e9037317497f', 0.75, 'philippeb', '/photos/coastal-town-with-boats-in-turquoise-water-and-beach-eA4MG86OCWA'),
  overcast1: u('https://images.unsplash.com/photo-1583458006012-cb6e59c4322a', 0.665, 'thezaya98', '/photos/gray-concrete-road-between-high-rise-buildings-during-daytime-p6vPLxc1tL4'),
  phone1: u('https://images.unsplash.com/photo-1727334291061-fd29582ef9dc', 1.501, 'lucianooliveira', '/photos/a-person-taking-a-picture-with-a-cell-phone-LX3YF0Rv524'),
  aperture1: u('https://images.unsplash.com/photo-1594783761623-a910ffddede4', 1.501, 'wansan_99', '/photos/black-and-blue-round-logo-tLK02oHjT8c'),
  sidelight2: u('https://images.unsplash.com/photo-1567939088820-04045d38a862', 0.667, 'xokvictor', '/photos/woman-in-black-tank-top-OIygAYb9sbc'),
  silhouette2: u('https://images.unsplash.com/photo-1542533450-52ccfdc39aba', 1.5, 'johnwolf3', '/photos/silhouette-photography-of-woman-standing-near-seashore-QvGrVbbOB6M'),
  hardshadow0: u('https://images.unsplash.com/photo-1623739601167-556ec5d07a98', 0.667, 'onh', '/photos/blue-and-white-floral-textile-GH_DBboPx1U'),
  softportrait2: u('https://images.unsplash.com/photo-1637325262485-5cf1abb98c05', 0.667, 'mihaiteslariu0', '/photos/a-woman-in-a-turtle-neck-sweater-posing-for-a-picture-UWUlKFicthA'),
  golden2: u('https://images.unsplash.com/photo-1704192257598-be5cb6e710e7', 1.5, 'michelangeloam', '/photos/the-sun-is-setting-over-a-mountain-range-qkjy7Cbvyh0'),
  bluehour2: u('https://images.unsplash.com/photo-1564823532751-94fbd9c54053', 1.5, 'florianwehde', '/photos/silhouette-photography-of-city-SMdW5DIZ4ko'),
  tungsten0: u('https://images.unsplash.com/photo-1621177555452-bedbe4c28879', 0.663, 'piensaenpixel', '/photos/black-laptop-computer-on-brown-wooden-table-1HcK5xQoUKQ'),
  rembrandt1: u('https://images.unsplash.com/photo-1714462396037-1cf060ec3be9', 0.667, 'esseye', '/photos/a-woman-is-posing-for-a-picture-in-a-dark-room-_d0Uv9sIEmY'),
  highkey0: u('https://images.unsplash.com/photo-1582557492456-c53214c03e18', 0.8, 'fannygustafsson', '/photos/woman-in-white-scoop-neck-shirt-G0oxf0bjrB8'),
  lowkey1: u('https://images.unsplash.com/photo-1515138692129-197a2c608cfd', 0.667, 'pixelatelier', '/photos/womans-face-on-black-background-kEXMAGTivXA'),
  thirds2: u('https://images.unsplash.com/photo-1609625741166-c5514c5f32a6', 1.5, 'jan_huber', '/photos/grayscale-photo-of-tree-on-grass-field-aal3ym1EIaA'),
  horizon2: u('https://images.unsplash.com/photo-1529068013378-fcf8e321cb92', 1.333, 'billyberg', '/photos/calm-sea-under-blue-sky-zYRe9UKL3s4'),
  lines2: u('https://images.unsplash.com/photo-1510414148252-a2c44206f94b', 1.5, 'derekthomson', '/photos/long-exposure-photography-of-black-concrete-road-on-open-area-during-daytime-mgfcRci18So'),
  framing0: u('https://images.unsplash.com/photo-1616187039821-422a9f2bfe4b', 0.667, 'jannerboy62', '/photos/green-grass-field-under-white-sky-during-daytime-XkjM6VYkJhE'),
  fill0: u('https://images.unsplash.com/photo-1557296387-5358ad7997bb', 0.787, 'itsomidarmin', '/photos/womans-face-xOjzehJ49Hk'),
  simple1: u('https://images.unsplash.com/photo-1768122466154-07d4d6ebb802', 1.5, 'mirukser', '/photos/a-single-yellow-lemon-on-a-blue-background-RLH9IZPyriE'),
  lowangle0: u('https://images.unsplash.com/photo-1772927253232-91fb2e5c30b0', 0.667, 'christopherstites', '/photos/man-wearing-a-beanie-and-jacket-against-the-sky-6uC4VMXM280'),
  topdown0: u('https://images.unsplash.com/photo-1643400812627-288aa24ccd29', 1.333, 'luisdy18', '/photos/a-group-of-people-standing-on-top-of-a-sandy-beach-rXkvnIliIGs'),
};
