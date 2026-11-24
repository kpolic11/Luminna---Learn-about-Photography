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
};
