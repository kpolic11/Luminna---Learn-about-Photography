import React, { createContext, useContext, useEffect, useState } from 'react';

/** Anything that can be read aloud: chapters, encyclopedia entries, lessons. */
export interface Narration {
  id: string;
  title: string;
  subtitle?: string;
  sections: { heading?: string; paragraphs: string[] }[];
}

const Ctx = createContext<{ narration: Narration | null; set: (n: Narration | null) => void }>({ narration: null, set: () => {} });

export const NarrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [narration, set] = useState<Narration | null>(null);
  return <Ctx.Provider value={{ narration, set }}>{children}</Ctx.Provider>;
};

export const useNarrationState = () => useContext(Ctx);

/** Register the current page's readable text (cleared on unmount). */
export function useNarration(n: Narration | null) {
  const { set } = useContext(Ctx);
  const key = n ? n.id + '|' + n.title + '|' + n.sections.length + '|' + (n.sections[0]?.paragraphs[0] ?? '').slice(0, 40) : '';
  useEffect(() => {
    set(n);
    return () => set(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
