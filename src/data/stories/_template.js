/**
 * Gedocumenteerde structuur voor een projectverhaal.
 * Kopieer dit als startpunt voor een nieuw verhaal.
 *
 * Nieuw verhaal toevoegen:
 *   1. Kopieer dit bestand naar src/data/stories/<slug>.js
 *   2. Vul alle velden in
 *   3. Importeer en voeg toe aan de array in src/data/stories/index.js
 */
export const storyTemplate = {
  slug: '',                     // url-slug, bijv. 'westdal-wijkvernieuwing'
  title: '',                    // volledige verhaal-titel
  oneLineResult: '',            // bijv. "Van vastgelopen plan naar gedragen aanpak in 4 weken"
  sector: '',                   // 'gemeenten' | 'onderwijs' | 'mkb' | 'non-profit' | 'adviesbureaus'
  publishedAt: null,            // ISO date string bijv. "2026-03-15"
  featured: false,              // true = getoond als uitgelicht verhaal in StoryTeaser op homepage

  hero: {
    image: null,                // pad naar afbeelding, of null voor emoji-fallback
    imageAlt: '',
    emoji: '📋',               // fallback-emoji als image null is
    gradientFrom: '',           // CSS kleur, bijv. 'rgba(64,87,255,0.18)'
    gradientTo: '',             // CSS kleur, bijv. 'rgba(64,87,255,0.04)'
  },

  context: {
    organization: '',           // fictieve organisatienaam, markeer met ExampleBadge
    challenge: '',              // prose 150-300 woorden — alinea's scheiden met \n\n
  },

  approach: {
    phases: [],                 // subset van ['ontmoeten','ontdekken','ontwikkelen','organiseren']
    tools: [],                  // tool.id waarden uit src/data/tools.js
                                // beschikbaar: '5w1h', 'systeemmap', 'empathy-map',
                                // 'customer-journey', 'business-model', 'value-proposition',
                                // 'service-blueprint', 'prototype-canvas', 'actieplan'
    narrative: '',              // prose 150-300 woorden — alinea's scheiden met \n\n
  },

  result: {
    outcome: '',                // prose 150-300 woorden — alinea's scheiden met \n\n
    evidence: [                 // 2-4 concrete bewijspunten
      { label: '', value: '' },
    ],
  },

  quote: {
    text: '',
    author: '',                 // fictieve naam
    role: '',
    organization: '',
    image: null,                // null = toon initialen-avatar in sector-kleur
  },
};
