import type { GenreBase, MovementBase } from './types';

/** Movements in chronological order (approximate years, for grouping and the era view) */
export const MOVEMENT_BASE: MovementBase[] = [
  { id: 'early', from: 1839, to: 1885 },
  { id: 'pictorialism', from: 1885, to: 1915 },
  { id: 'social-documentary', from: 1888, to: 1945 },
  { id: 'straight', from: 1910, to: 1950 },
  { id: 'new-objectivity', from: 1920, to: 1935 },
  { id: 'new-vision', from: 1920, to: 1940 },
  { id: 'surrealism', from: 1924, to: 1950 },
  { id: 'f64', from: 1932, to: 1935 },
  { id: 'humanist', from: 1930, to: 1965 },
  { id: 'photojournalism', from: 1925 },
  { id: 'new-york-school', from: 1936, to: 1965 },
  { id: 'greek-postwar', from: 1940, to: 1980 },
  { id: 'new-documents', from: 1960, to: 1980 },
  { id: 'provoke', from: 1968, to: 1975 },
  { id: 'new-color', from: 1965, to: 1985 },
  { id: 'new-topographics', from: 1970, to: 1985 },
  { id: 'dusseldorf', from: 1976 },
  { id: 'staged', from: 1975 },
  { id: 'diaristic', from: 1970 },
  { id: 'contemporary-documentary', from: 1980 },
  { id: 'social-media', from: 2010 },
];

export const GENRE_BASE: GenreBase[] = [
  { id: 'portrait', icon: 'User' },
  { id: 'landscape', icon: 'Mountain' },
  { id: 'street', icon: 'Footprints' },
  { id: 'documentary', icon: 'FileText' },
  { id: 'photojournalism', icon: 'Newspaper' },
  { id: 'fashion', icon: 'Shirt' },
  { id: 'architecture', icon: 'Building2' },
  { id: 'still-life', icon: 'Apple' },
  { id: 'experimental', icon: 'Sparkles' },
  { id: 'conceptual', icon: 'Lightbulb' },
  { id: 'color', icon: 'Palette' },
  { id: 'greek', icon: 'Landmark' },
];
