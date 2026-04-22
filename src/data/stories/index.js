import westdalWijkvernieuwing from './westdal-wijkvernieuwing.js';
import noordwijkOnderzoeksgroep from './noordwijk-onderzoeksgroep.js';

/**
 * Alle verhalen, meest recent eerst.
 * Nieuw verhaal toevoegen: importeer en voeg toe aan het begin van de array.
 */
export const stories = [
  westdalWijkvernieuwing,
  noordwijkOnderzoeksgroep,
];

/** Zoek verhaal op slug — geeft undefined als niet gevonden */
export function getBySlug(slug) {
  return stories.find(s => s.slug === slug);
}

/** Alle verhalen van een bepaalde sector */
export function getBySector(sector) {
  return stories.filter(s => s.sector === sector);
}

/**
 * Tot `limit` andere verhalen (voor StoryRelated).
 * Sortering: andere sector eerst, zodat StoryRelated breedte toont.
 */
export function getRelated(currentSlug, limit = 2) {
  const current = getBySlug(currentSlug);
  const others = stories.filter(s => s.slug !== currentSlug);
  const otherSector = others.filter(s => s.sector !== current?.sector);
  const sameSector  = others.filter(s => s.sector === current?.sector);
  return [...otherSector, ...sameSector].slice(0, limit);
}
