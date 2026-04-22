/**
 * Gedocumenteerde datastructuur voor een sectorpagina.
 * Kopieer dit als startpunt voor een nieuwe sector.
 *
 * Verplichte velden: sector, label, accentColor, hero, recognition,
 *   applications, toolbox, faq, cta
 * Optionele velden: storySlug (null = lege staat), partnerIds ([] = alle partners)
 *
 * Nieuwe sector toevoegen:
 *   1. Kopieer dit bestand naar src/data/use-cases/<slug>.js
 *   2. Vul alle velden in
 *   3. Importeer en registreer in src/data/use-cases/index.js
 */
export const useCaseTemplate = {
  sector: 'slug',               // url-slug, bijv. 'gemeenten'
  label: 'Naam',                // weergavenaam, bijv. 'Gemeenten'
  accentColor: '#4057ff',       // sector-accentkleur

  hero: {
    tagline: '',                // grote headline boven de vouw
    subclaim: '',               // ondersteunende alinea (max ~150 tekens)
    primaryCta: { label: '', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [                   // exact 3 items
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
    ],
  },

  applications: [               // exact 3 items
    { title: '', description: '', image: null },
    { title: '', description: '', image: null },
    { title: '', description: '', image: null },
  ],

  toolbox: {
    intro: '',                  // alinea boven de tool-chips
    toolSlugs: [],              // verwijst naar tool.id in src/data/tools.js
                                // beschikbaar: '5w1h', 'systeemmap', 'empathy-map',
                                // 'customer-journey', 'business-model', 'value-proposition',
                                // 'service-blueprint', 'prototype-canvas', 'actieplan'
  },

  storySlug: null,              // slug van verhaal, of null voor lege staat

  faq: [                        // 3–5 items
    { question: '', answer: '' },
  ],

  partnerIds: [],               // subselectie van partners; [] = toon alle (fallback)

  cta: {
    heading: '',
    body: '',
    primaryCta: { label: '', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
