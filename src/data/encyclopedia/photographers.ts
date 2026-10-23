import type { PhotographerBase } from './types';
import { MEDIA } from '../media';

const img = (m: { url: string; credit: string; caption?: string }) => ({ url: m.url, credit: m.credit, caption: m.caption });

/**
 * The 100 encyclopedia entries (language-neutral data).
 * Images: only public-domain / freely licensed files already verified for the chapters.
 */
export const PHOTOGRAPHER_BASE: PhotographerBase[] = [
  /* ---------- Pioneers ---------- */
  { id: 'niepce', latin: 'Nicéphore Niépce', born: 1765, died: 1833, countries: ['FR'], genres: ['experimental', 'landscape'], movements: ['early'], tier: 'entry', image: img(MEDIA.leGras), related: ['daguerre', 'talbot'], chapter: 'niepce' },
  { id: 'daguerre', latin: 'Louis Daguerre', born: 1787, died: 1851, countries: ['FR'], genres: ['architecture', 'still-life'], movements: ['early'], tier: 'entry', image: img(MEDIA.boulevardDuTemple), related: ['niepce', 'talbot', 'nadar'], chapter: 'daguerre' },
  { id: 'talbot', latin: 'William Henry Fox Talbot', born: 1800, died: 1877, countries: ['GB'], genres: ['still-life', 'architecture', 'experimental'], movements: ['early'], tier: 'major', image: img(MEDIA.openDoor), related: ['daguerre', 'hill-adamson', 'cameron'], chapter: 'talbot' },
  { id: 'hill-adamson', latin: 'David Octavius Hill & Robert Adamson', born: 1802, died: 1870, countries: ['GB'], genres: ['portrait', 'documentary'], movements: ['early'], tier: 'entry', related: ['talbot', 'cameron'], chapter: 'talbot' },
  { id: 'cameron', latin: 'Julia Margaret Cameron', born: 1815, died: 1879, countries: ['GB'], genres: ['portrait'], movements: ['early'], tier: 'major', image: img(MEDIA.cameronHerschel), related: ['nadar', 'hill-adamson', 'kasebier'], chapter: 'collodion-portrait' },
  { id: 'nadar', latin: 'Nadar (Gaspard-Félix Tournachon)', born: 1820, died: 1910, countries: ['FR'], genres: ['portrait', 'experimental'], movements: ['early'], tier: 'major', image: img(MEDIA.pNadar), related: ['cameron', 'daguerre'], chapter: 'collodion-portrait' },
  { id: 'fenton', latin: 'Roger Fenton', born: 1819, died: 1869, countries: ['GB'], genres: ['photojournalism', 'landscape', 'still-life'], movements: ['early'], tier: 'entry', image: img(MEDIA.fentonValley), related: ['osullivan', 'capa'], chapter: 'travel-war' },
  { id: 'muybridge', latin: 'Eadweard Muybridge', born: 1830, died: 1904, countries: ['GB', 'US'], genres: ['experimental', 'landscape'], movements: ['early'], tier: 'major', image: img(MEDIA.muybridgeGallop), related: ['osullivan', 'moholy-nagy'], chapter: 'motion' },
  { id: 'osullivan', latin: 'Timothy O’Sullivan', born: 1840, died: 1882, countries: ['US'], genres: ['landscape', 'photojournalism'], movements: ['early'], tier: 'entry', related: ['fenton', 'muybridge', 'adams-robert'], chapter: 'travel-war' },
  { id: 'atget', latin: 'Eugène Atget', born: 1857, died: 1927, countries: ['FR'], genres: ['street', 'architecture', 'documentary'], movements: ['early', 'surrealism'], tier: 'major', related: ['abbott', 'evans', 'brassai'], chapter: 'straight' },

  /* ---------- Pictorialism & straight photography ---------- */
  { id: 'emerson', latin: 'Peter Henry Emerson', born: 1856, died: 1936, countries: ['GB'], genres: ['landscape', 'documentary'], movements: ['pictorialism'], tier: 'entry', related: ['stieglitz', 'kasebier'], chapter: 'pictorialism' },
  { id: 'kasebier', latin: 'Gertrude Käsebier', born: 1852, died: 1934, countries: ['US'], genres: ['portrait'], movements: ['pictorialism'], tier: 'entry', related: ['stieglitz', 'steichen', 'cameron'], chapter: 'pictorialism' },
  { id: 'steichen', latin: 'Edward Steichen', born: 1879, died: 1973, countries: ['US', 'LU'], genres: ['portrait', 'fashion', 'landscape'], movements: ['pictorialism', 'straight'], tier: 'entry', image: img(MEDIA.steichenPond), related: ['stieglitz', 'kasebier', 'penn'], chapter: 'pictorialism' },
  { id: 'stieglitz', latin: 'Alfred Stieglitz', born: 1864, died: 1946, countries: ['US'], genres: ['street', 'portrait', 'experimental'], movements: ['pictorialism', 'straight'], tier: 'major', image: img(MEDIA.steerage), related: ['steichen', 'strand', 'kasebier'], chapter: 'straight' },
  { id: 'strand', latin: 'Paul Strand', born: 1890, died: 1976, countries: ['US'], genres: ['street', 'portrait', 'documentary'], movements: ['straight'], tier: 'major', image: img(MEDIA.strandWallStreet), related: ['stieglitz', 'hine', 'weston'], chapter: 'straight' },
  { id: 'weston', latin: 'Edward Weston', born: 1886, died: 1958, countries: ['US'], genres: ['still-life', 'landscape', 'portrait'], movements: ['straight', 'f64'], tier: 'major', related: ['adams', 'cunningham', 'strand'], chapter: 'f64' },
  { id: 'adams', latin: 'Ansel Adams', born: 1902, died: 1984, countries: ['US'], genres: ['landscape'], movements: ['straight', 'f64'], tier: 'major', image: img(MEDIA.adamsTetons), related: ['weston', 'cunningham', 'adams-robert'], chapter: 'f64' },
  { id: 'cunningham', latin: 'Imogen Cunningham', born: 1883, died: 1976, countries: ['US'], genres: ['still-life', 'portrait'], movements: ['f64', 'pictorialism'], tier: 'entry', related: ['weston', 'adams'], chapter: 'f64' },

  /* ---------- Social documentary ---------- */
  { id: 'riis', latin: 'Jacob Riis', born: 1849, died: 1914, countries: ['US', 'DK'], genres: ['documentary'], movements: ['social-documentary'], tier: 'entry', image: img(MEDIA.banditsRoost), related: ['hine', 'lange'], chapter: 'documentary' },
  { id: 'hine', latin: 'Lewis Hine', born: 1874, died: 1940, countries: ['US'], genres: ['documentary', 'portrait'], movements: ['social-documentary'], tier: 'entry', image: img(MEDIA.pHine), related: ['riis', 'strand', 'lange'], chapter: 'documentary' },
  { id: 'lange', latin: 'Dorothea Lange', born: 1895, died: 1965, countries: ['US'], genres: ['documentary', 'portrait'], movements: ['social-documentary'], tier: 'major', image: img(MEDIA.migrantMother), related: ['evans', 'hine', 'parks'], chapter: 'documentary' },
  { id: 'evans', latin: 'Walker Evans', born: 1903, died: 1975, countries: ['US'], genres: ['documentary', 'architecture', 'street'], movements: ['social-documentary', 'straight'], tier: 'major', related: ['lange', 'atget', 'frank'], chapter: 'documentary' },
  { id: 'bourke-white', latin: 'Margaret Bourke-White', born: 1904, died: 1971, countries: ['US'], genres: ['photojournalism', 'documentary', 'architecture'], movements: ['photojournalism', 'social-documentary'], tier: 'entry', related: ['capa', 'lange'], chapter: 'photojournalism' },

  /* ---------- Interwar Europe ---------- */
  { id: 'sander', latin: 'August Sander', born: 1876, died: 1964, countries: ['DE'], genres: ['portrait', 'documentary'], movements: ['new-objectivity'], tier: 'major', related: ['renger-patzsch', 'becher', 'arbus'], chapter: 'avant-garde' },
  { id: 'renger-patzsch', latin: 'Albert Renger-Patzsch', born: 1897, died: 1966, countries: ['DE'], genres: ['still-life', 'architecture'], movements: ['new-objectivity'], tier: 'entry', related: ['sander', 'becher', 'weston'], chapter: 'avant-garde' },
  { id: 'moholy-nagy', latin: 'László Moholy-Nagy', born: 1895, died: 1946, countries: ['HU', 'DE', 'US'], genres: ['experimental', 'architecture'], movements: ['new-vision'], tier: 'major', related: ['rodchenko', 'man-ray', 'kertesz'], chapter: 'avant-garde' },
  { id: 'rodchenko', latin: 'Alexander Rodchenko', born: 1891, died: 1956, countries: ['RU'], genres: ['experimental', 'architecture', 'portrait'], movements: ['new-vision'], tier: 'major', related: ['moholy-nagy', 'kertesz'], chapter: 'avant-garde' },
  { id: 'man-ray', latin: 'Man Ray', born: 1890, died: 1976, countries: ['US', 'FR'], genres: ['experimental', 'portrait', 'fashion'], movements: ['surrealism'], tier: 'major', related: ['moholy-nagy', 'abbott', 'brassai'], chapter: 'avant-garde' },
  { id: 'kertesz', latin: 'André Kertész', born: 1894, died: 1985, countries: ['HU', 'FR', 'US'], genres: ['street', 'experimental', 'still-life'], movements: ['new-vision', 'humanist'], tier: 'major', related: ['brassai', 'cartier-bresson', 'moholy-nagy'], chapter: 'street' },
  { id: 'brassai', latin: 'Brassaï (Gyula Halász)', born: 1899, died: 1984, countries: ['HU', 'FR'], genres: ['street', 'documentary'], movements: ['surrealism', 'humanist'], tier: 'entry', related: ['kertesz', 'atget', 'cartier-bresson'], chapter: 'street' },
  { id: 'abbott', latin: 'Berenice Abbott', born: 1898, died: 1991, countries: ['US'], genres: ['architecture', 'documentary', 'portrait'], movements: ['straight'], tier: 'entry', related: ['atget', 'man-ray', 'evans'], chapter: 'straight' },
  { id: 'sudek', latin: 'Josef Sudek', born: 1896, died: 1976, countries: ['CZ'], genres: ['still-life', 'landscape', 'architecture'], movements: ['straight'], tier: 'entry', related: ['weston', 'kertesz'] },

  /* ---------- Humanist photography & photojournalism ---------- */
  { id: 'cartier-bresson', latin: 'Henri Cartier-Bresson', born: 1908, died: 2004, countries: ['FR'], genres: ['street', 'photojournalism'], movements: ['humanist', 'photojournalism'], tier: 'major', related: ['kertesz', 'capa', 'doisneau'], chapter: 'street' },
  { id: 'capa', latin: 'Robert Capa', born: 1913, died: 1954, countries: ['HU', 'US'], genres: ['photojournalism'], movements: ['photojournalism'], tier: 'major', related: ['taro', 'cartier-bresson', 'mccullin'], chapter: 'photojournalism' },
  { id: 'taro', latin: 'Gerda Taro', born: 1910, died: 1937, countries: ['DE'], genres: ['photojournalism'], movements: ['photojournalism'], tier: 'entry', related: ['capa'], chapter: 'photojournalism' },
  { id: 'doisneau', latin: 'Robert Doisneau', born: 1912, died: 1994, countries: ['FR'], genres: ['street'], movements: ['humanist'], tier: 'entry', related: ['cartier-bresson', 'brassai'], chapter: 'street' },
  { id: 'smith-eugene', latin: 'W. Eugene Smith', born: 1918, died: 1978, countries: ['US'], genres: ['photojournalism', 'documentary'], movements: ['photojournalism'], tier: 'entry', related: ['capa', 'salgado', 'mary-ellen-mark'], chapter: 'photojournalism' },
  { id: 'weegee', latin: 'Weegee (Arthur Fellig)', born: 1899, died: 1968, countries: ['US'], genres: ['photojournalism', 'street'], movements: ['new-york-school'], tier: 'entry', related: ['model', 'arbus'], chapter: 'street' },
  { id: 'parks', latin: 'Gordon Parks', born: 1912, died: 2006, countries: ['US'], genres: ['documentary', 'fashion', 'portrait'], movements: ['social-documentary', 'photojournalism'], tier: 'entry', related: ['lange', 'decarava'], chapter: 'documentary' },
  { id: 'koudelka', latin: 'Josef Koudelka', born: 1938, countries: ['CZ', 'FR'], genres: ['photojournalism', 'documentary', 'landscape'], movements: ['photojournalism', 'contemporary-documentary'], tier: 'entry', related: ['cartier-bresson', 'economopoulos'] },

  /* ---------- New York & new documents ---------- */
  { id: 'model', latin: 'Lisette Model', born: 1901, died: 1983, countries: ['US', 'AT'], genres: ['street', 'portrait'], movements: ['new-york-school'], tier: 'entry', related: ['arbus', 'weegee'], chapter: 'street' },
  { id: 'frank', latin: 'Robert Frank', born: 1924, died: 2019, countries: ['US', 'CH'], genres: ['street', 'documentary'], movements: ['new-york-school'], tier: 'major', related: ['evans', 'klein', 'winogrand'], chapter: 'street' },
  { id: 'klein', latin: 'William Klein', born: 1926, died: 2022, countries: ['US', 'FR'], genres: ['street', 'fashion'], movements: ['new-york-school'], tier: 'entry', related: ['frank', 'moriyama'], chapter: 'street' },
  { id: 'leiter', latin: 'Saul Leiter', born: 1923, died: 2013, countries: ['US'], genres: ['street', 'color'], movements: ['new-york-school', 'new-color'], tier: 'entry', related: ['eggleston', 'frank'], chapter: 'color-contemporary' },
  { id: 'winogrand', latin: 'Garry Winogrand', born: 1928, died: 1984, countries: ['US'], genres: ['street'], movements: ['new-documents'], tier: 'entry', related: ['friedlander', 'arbus', 'frank'], chapter: 'street' },
  { id: 'friedlander', latin: 'Lee Friedlander', born: 1934, countries: ['US'], genres: ['street', 'architecture'], movements: ['new-documents'], tier: 'entry', related: ['winogrand', 'arbus', 'evans'], chapter: 'street' },
  { id: 'arbus', latin: 'Diane Arbus', born: 1923, died: 1971, countries: ['US'], genres: ['portrait'], movements: ['new-documents'], tier: 'major', related: ['model', 'winogrand', 'sander'], chapter: 'fashion-portrait' },
  { id: 'decarava', latin: 'Roy DeCarava', born: 1919, died: 2009, countries: ['US'], genres: ['street', 'portrait'], movements: ['new-york-school'], tier: 'entry', related: ['parks', 'frank'] },
  { id: 'maier', latin: 'Vivian Maier', born: 1926, died: 2009, countries: ['US'], genres: ['street', 'portrait'], movements: ['new-york-school'], tier: 'entry', related: ['model', 'winogrand'], chapter: 'street' },

  /* ---------- Portrait & fashion ---------- */
  { id: 'avedon', latin: 'Richard Avedon', born: 1923, died: 2004, countries: ['US'], genres: ['portrait', 'fashion'], movements: [], tier: 'major', related: ['penn', 'arbus', 'leibovitz'], chapter: 'fashion-portrait' },
  { id: 'penn', latin: 'Irving Penn', born: 1917, died: 2009, countries: ['US'], genres: ['portrait', 'fashion', 'still-life'], movements: [], tier: 'entry', related: ['avedon', 'steichen'], chapter: 'fashion-portrait' },
  { id: 'newton', latin: 'Helmut Newton', born: 1920, died: 2004, countries: ['AU', 'DE'], genres: ['fashion', 'portrait'], movements: ['staged'], tier: 'entry', related: ['avedon', 'penn'], chapter: 'fashion-portrait' },
  { id: 'mapplethorpe', latin: 'Robert Mapplethorpe', born: 1946, died: 1989, countries: ['US'], genres: ['portrait', 'still-life'], movements: [], tier: 'entry', related: ['penn', 'weston'], chapter: 'fashion-portrait' },
  { id: 'leibovitz', latin: 'Annie Leibovitz', born: 1949, countries: ['US'], genres: ['portrait', 'fashion'], movements: [], tier: 'entry', related: ['avedon', 'goldin'], chapter: 'fashion-portrait' },

  /* ---------- Japan ---------- */
  { id: 'tomatsu', latin: 'Shōmei Tōmatsu', born: 1930, died: 2012, countries: ['JP'], genres: ['documentary'], movements: ['provoke'], tier: 'entry', related: ['moriyama', 'araki'] },
  { id: 'moriyama', latin: 'Daidō Moriyama', born: 1938, countries: ['JP'], genres: ['street', 'experimental'], movements: ['provoke'], tier: 'major', related: ['klein', 'tomatsu', 'araki'], chapter: 'street' },
  { id: 'araki', latin: 'Nobuyoshi Araki', born: 1940, countries: ['JP'], genres: ['portrait', 'street'], movements: ['diaristic', 'provoke'], tier: 'entry', related: ['moriyama', 'goldin'] },
  { id: 'sugimoto', latin: 'Hiroshi Sugimoto', born: 1948, countries: ['JP', 'US'], genres: ['conceptual', 'landscape', 'architecture'], movements: ['staged'], tier: 'entry', related: ['becher', 'gursky'], chapter: 'color-contemporary' },

  /* ---------- Colour & new topographics ---------- */
  { id: 'eggleston', latin: 'William Eggleston', born: 1939, countries: ['US'], genres: ['color', 'street'], movements: ['new-color'], tier: 'major', related: ['shore', 'leiter', 'evans'], chapter: 'color-contemporary' },
  { id: 'shore', latin: 'Stephen Shore', born: 1947, countries: ['US'], genres: ['color', 'landscape', 'architecture'], movements: ['new-color', 'new-topographics'], tier: 'entry', related: ['eggleston', 'adams-robert', 'becher'], chapter: 'color-contemporary' },
  { id: 'adams-robert', latin: 'Robert Adams', born: 1937, countries: ['US'], genres: ['landscape'], movements: ['new-topographics'], tier: 'entry', related: ['shore', 'adams', 'becher'], chapter: 'color-contemporary' },

  /* ---------- Düsseldorf ---------- */
  { id: 'becher', latin: 'Bernd & Hilla Becher', born: 1931, died: 2015, countries: ['DE'], genres: ['architecture', 'conceptual'], movements: ['new-topographics', 'dusseldorf'], tier: 'major', related: ['gursky', 'struth', 'sander'], chapter: 'color-contemporary' },
  { id: 'gursky', latin: 'Andreas Gursky', born: 1955, countries: ['DE'], genres: ['color', 'architecture', 'conceptual'], movements: ['dusseldorf'], tier: 'entry', related: ['becher', 'struth', 'burtynsky'], chapter: 'color-contemporary' },
  { id: 'struth', latin: 'Thomas Struth', born: 1954, countries: ['DE'], genres: ['architecture', 'portrait', 'color'], movements: ['dusseldorf'], tier: 'entry', related: ['becher', 'gursky'], chapter: 'color-contemporary' },

  /* ---------- Staged, conceptual, diaristic ---------- */
  { id: 'sherman', latin: 'Cindy Sherman', born: 1954, countries: ['US'], genres: ['conceptual', 'portrait'], movements: ['staged'], tier: 'major', related: ['wall', 'woodman', 'crewdson'], chapter: 'color-contemporary' },
  { id: 'wall', latin: 'Jeff Wall', born: 1946, countries: ['CA'], genres: ['conceptual', 'color'], movements: ['staged'], tier: 'entry', related: ['sherman', 'crewdson'], chapter: 'color-contemporary' },
  { id: 'crewdson', latin: 'Gregory Crewdson', born: 1962, countries: ['US'], genres: ['conceptual', 'color'], movements: ['staged'], tier: 'entry', related: ['wall', 'sherman'] },
  { id: 'woodman', latin: 'Francesca Woodman', born: 1958, died: 1981, countries: ['US'], genres: ['experimental', 'portrait'], movements: ['staged'], tier: 'entry', related: ['sherman', 'cameron'] },
  { id: 'goldin', latin: 'Nan Goldin', born: 1953, countries: ['US'], genres: ['portrait', 'color', 'documentary'], movements: ['diaristic'], tier: 'major', related: ['araki', 'tillmans', 'arbus'], chapter: 'color-contemporary' },
  { id: 'tillmans', latin: 'Wolfgang Tillmans', born: 1968, countries: ['DE'], genres: ['portrait', 'experimental', 'still-life'], movements: ['diaristic'], tier: 'entry', related: ['goldin'], chapter: 'color-contemporary' },

  /* ---------- Contemporary documentary & global voices ---------- */
  { id: 'salgado', latin: 'Sebastião Salgado', born: 1944, died: 2025, countries: ['BR', 'FR'], genres: ['documentary', 'landscape', 'photojournalism'], movements: ['contemporary-documentary'], tier: 'major', related: ['smith-eugene', 'burtynsky', 'nachtwey'] },
  { id: 'mccullin', latin: 'Don McCullin', born: 1935, countries: ['GB'], genres: ['photojournalism', 'landscape'], movements: ['photojournalism'], tier: 'entry', related: ['capa', 'nachtwey'], chapter: 'photojournalism' },
  { id: 'nachtwey', latin: 'James Nachtwey', born: 1948, countries: ['US'], genres: ['photojournalism'], movements: ['photojournalism', 'contemporary-documentary'], tier: 'entry', related: ['mccullin', 'capa', 'behrakis'], chapter: 'photojournalism' },
  { id: 'mary-ellen-mark', latin: 'Mary Ellen Mark', born: 1940, died: 2015, countries: ['US'], genres: ['documentary', 'portrait'], movements: ['contemporary-documentary'], tier: 'entry', related: ['arbus', 'smith-eugene'] },
  { id: 'parr', latin: 'Martin Parr', born: 1952, died: 2025, countries: ['GB'], genres: ['color', 'documentary', 'street'], movements: ['contemporary-documentary', 'new-color'], tier: 'entry', related: ['eggleston', 'winogrand'], chapter: 'color-contemporary' },
  { id: 'alvarez-bravo', latin: 'Manuel Álvarez Bravo', born: 1902, died: 2002, countries: ['MX'], genres: ['street', 'portrait'], movements: ['surrealism'], tier: 'entry', related: ['iturbide', 'weston', 'cartier-bresson'] },
  { id: 'iturbide', latin: 'Graciela Iturbide', born: 1942, countries: ['MX'], genres: ['documentary', 'portrait'], movements: ['contemporary-documentary'], tier: 'entry', related: ['alvarez-bravo'] },
  { id: 'keita', latin: 'Seydou Keïta', born: 1921, died: 2001, countries: ['ML'], genres: ['portrait'], movements: [], tier: 'entry', related: ['muholi', 'sander'] },
  { id: 'muholi', latin: 'Zanele Muholi', born: 1972, countries: ['ZA'], genres: ['portrait', 'documentary'], movements: ['contemporary-documentary'], tier: 'entry', related: ['keita', 'weems'] },
  { id: 'weems', latin: 'Carrie Mae Weems', born: 1953, countries: ['US'], genres: ['conceptual', 'portrait'], movements: ['staged'], tier: 'entry', related: ['parks', 'muholi', 'sherman'] },
  { id: 'burtynsky', latin: 'Edward Burtynsky', born: 1955, countries: ['CA'], genres: ['landscape', 'color'], movements: ['new-topographics', 'contemporary-documentary'], tier: 'entry', related: ['gursky', 'adams-robert', 'salgado'] },

  /* ---------- Greek photography ---------- */
  { id: 'margaritis', latin: 'Filippos Margaritis', born: 1810, died: 1892, countries: ['GR'], genres: ['greek', 'portrait', 'architecture'], movements: ['early'], tier: 'entry', related: ['boissonnas', 'paraskeva'], chapter: 'greece-1' },
  { id: 'paraskeva', latin: 'Mary Paraskeva', born: 1882, died: 1951, countries: ['GR'], genres: ['greek', 'documentary'], movements: [], tier: 'entry', related: ['margaritis', 'nellys'], chapter: 'greece-1' },
  { id: 'papazoglou', latin: 'Leonidas Papazoglou', born: 1872, died: 1918, countries: ['GR'], genres: ['greek', 'portrait'], movements: [], tier: 'entry', related: ['fatseas', 'sander'], chapter: 'greece-1' },
  { id: 'boissonnas', latin: 'Fred Boissonnas', born: 1858, died: 1946, countries: ['CH', 'GR'], genres: ['greek', 'landscape', 'architecture'], movements: ['pictorialism'], tier: 'entry', image: img(MEDIA.boissonnasPropylaea), related: ['nellys', 'margaritis'], chapter: 'greece-1' },
  { id: 'fatseas', latin: 'Panayotis Fatseas', born: 1888, died: 1938, countries: ['GR'], genres: ['greek', 'portrait'], movements: [], tier: 'entry', related: ['papazoglou', 'keita'] },
  { id: 'nellys', latin: 'Nelly’s (Elli Souyioultzoglou-Seraidari)', born: 1899, died: 1998, countries: ['GR'], genres: ['greek', 'portrait', 'landscape'], movements: ['pictorialism', 'new-vision'], tier: 'major', related: ['boissonnas', 'papaioannou'], chapter: 'greece-1' },
  { id: 'embirikos', latin: 'Andreas Embirikos', born: 1901, died: 1975, countries: ['GR'], genres: ['greek', 'portrait', 'street'], movements: ['surrealism', 'greek-postwar'], tier: 'entry', related: ['man-ray', 'nellys'] },
  { id: 'papaioannou', latin: 'Voula Papaioannou', born: 1898, died: 1990, countries: ['GR'], genres: ['greek', 'documentary'], movements: ['greek-postwar', 'social-documentary'], tier: 'major', related: ['meletzis', 'nellys', 'lange'], chapter: 'greece-2' },
  { id: 'meletzis', latin: 'Spyros Meletzis', born: 1906, died: 2003, countries: ['GR'], genres: ['greek', 'photojournalism', 'documentary'], movements: ['greek-postwar'], tier: 'major', related: ['papaioannou', 'balafas', 'capa'], chapter: 'greece-2' },
  { id: 'harissiadis', latin: 'Dimitris Harissiadis', born: 1911, died: 1993, countries: ['GR'], genres: ['greek', 'documentary'], movements: ['greek-postwar', 'humanist'], tier: 'entry', related: ['papadimos', 'tloupas', 'balafas'], chapter: 'greece-2' },
  { id: 'papadimos', latin: 'Dimitris Papadimos', born: 1918, died: 1994, countries: ['GR', 'EG'], genres: ['greek', 'documentary'], movements: ['greek-postwar'], tier: 'entry', related: ['harissiadis', 'manos'] },
  { id: 'balafas', latin: 'Kostas Balafas', born: 1920, died: 2011, countries: ['GR'], genres: ['greek', 'documentary'], movements: ['greek-postwar', 'humanist'], tier: 'entry', related: ['meletzis', 'tloupas'], chapter: 'greece-2' },
  { id: 'tloupas', latin: 'Takis Tloupas', born: 1920, died: 2003, countries: ['GR'], genres: ['greek', 'documentary'], movements: ['greek-postwar', 'humanist'], tier: 'entry', related: ['balafas', 'harissiadis'], chapter: 'greece-2' },
  { id: 'manos', latin: 'Constantine Manos', born: 1934, died: 2025, countries: ['US', 'GR'], genres: ['greek', 'documentary', 'color'], movements: ['greek-postwar', 'photojournalism'], tier: 'major', related: ['economopoulos', 'cartier-bresson'], chapter: 'greece-2' },
  { id: 'economopoulos', latin: 'Nikos Economopoulos', born: 1953, countries: ['GR'], genres: ['greek', 'documentary', 'photojournalism'], movements: ['contemporary-documentary'], tier: 'entry', related: ['manos', 'koudelka'], chapter: 'greece-2' },
  { id: 'behrakis', latin: 'Yannis Behrakis', born: 1960, died: 2019, countries: ['GR'], genres: ['greek', 'photojournalism'], movements: ['photojournalism'], tier: 'entry', related: ['messinis', 'nachtwey'], chapter: 'greece-2' },
  { id: 'messinis', latin: 'Aris Messinis', born: 1977, countries: ['GR'], genres: ['greek', 'photojournalism'], movements: ['photojournalism'], tier: 'entry', related: ['behrakis'] },
  { id: 'kokkinias', latin: 'Panos Kokkinias', born: 1965, countries: ['GR'], genres: ['greek', 'conceptual', 'color'], movements: ['staged'], tier: 'entry', related: ['crewdson', 'wall'] },
  { id: 'kalafatis', latin: 'Stratos Kalafatis', born: 1966, countries: ['GR'], genres: ['greek', 'color', 'portrait'], movements: ['contemporary-documentary'], tier: 'entry', related: ['economopoulos', 'nellys'] },
  /* ---------- The social-media era ---------- */
  { id: 'stanton', latin: 'Brandon Stanton', handle: 'humansofny', born: 1984, countries: ['US'], genres: ['portrait', 'documentary', 'street'], movements: ['social-media'], tier: 'entry', related: ['arnold-daniel', 'sander', 'mary-ellen-mark'], chapter: 'digital-ai' },
  { id: 'arnold-daniel', latin: 'Daniel Arnold', handle: 'arnold_daniel', born: 1980, countries: ['US'], genres: ['street'], movements: ['social-media'], tier: 'entry', related: ['winogrand', 'arbus', 'stanton'], chapter: 'digital-ai' },
  { id: 'osmann', latin: 'Murad Osmann', handle: 'muradosmann', born: 1985, countries: ['RU'], genres: ['color', 'portrait'], movements: ['social-media'], tier: 'entry', related: ['collins', 'stanton'], chapter: 'digital-ai' },
  { id: 'collins', latin: 'Petra Collins', handle: 'petrafcollins', born: 1992, countries: ['CA'], genres: ['fashion', 'portrait', 'color'], movements: ['social-media'], tier: 'entry', related: ['goldin', 'tillmans', 'osmann'], chapter: 'digital-ai' },
];
