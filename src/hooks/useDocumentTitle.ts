import { useEffect } from 'react';
import { person } from '../data/content';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${person.name}` : `${person.name} — ${person.tagline}`;
  }, [title]);
}
