import gemeenten from './gemeenten.js';
import onderwijs from './onderwijs.js';
import mkb from './mkb.js';
import nonProfit from './non-profit.js';
import adviesbureaus from './adviesbureaus.js';

/**
 * Map van slug → sectordataobject.
 * Nieuwe sector toevoegen: voeg een datafile toe + voeg hier een regel in.
 */
export const useCases = {
  gemeenten,
  onderwijs,
  mkb,
  'non-profit': nonProfit,
  adviesbureaus,
};

/**
 * Geordende lijst voor navigatie en sectoroverzichten.
 */
export const sectorList = [
  { slug: 'gemeenten',     label: 'Gemeenten',     accentColor: '#4057ff' },
  { slug: 'onderwijs',     label: 'Onderwijs',     accentColor: '#7c3aed' },
  { slug: 'mkb',           label: 'MKB',           accentColor: '#f59e0b' },
  { slug: 'non-profit',    label: 'Non-profit',    accentColor: '#ef4444' },
  { slug: 'adviesbureaus', label: 'Adviesbureaus', accentColor: '#10b981' },
];
