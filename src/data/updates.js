/**
 * Updates / changelog data.
 *
 * Each entry:
 *   id        – URL-safe identifier
 *   date      – ISO date string (used for display + sorting)
 *   version   – semantic version label
 *   tag       – short category label
 *   tagColor  – accent color for the tag badge
 *   emoji     – visual icon (used in cover placeholder)
 *   color     – primary brand color for this update
 *   image     – URL to a cover image, or null (shows styled placeholder)
 *   title     – short headline
 *   summary   – 1–2 sentence teaser (used on overview + detail)
 *   body      – array of content blocks for the detail page
 *
 * body block types:
 *   { type: 'h2', text }
 *   { type: 'h3', text }
 *   { type: 'p', text }
 *   { type: 'ul', items: [string] }
 *   { type: 'table', head: [string], rows: [[string]] }
 */

export const updates = [
  {
    id: 'horizontal-approach',
    date: '2026-04-13',
    version: 'v1.3',
    tag: 'UX',
    tagColor: '#4361EE',
    emoji: '🔄',
    color: '#4361EE',
    image: null,
    title: 'Vernieuwde aanpak-sectie met horizontaal scrollen',
    summary:
      'De vier stappen van de YouLab-aanpak zijn nu te ontdekken via een interactieve scroll-sectie — op desktop beweeg je horizontaal door de fases, op mobiel swipe je tussen kaarten.',
    body: [
      { type: 'h2', text: 'Wat is er nieuw?' },
      {
        type: 'p',
        text: 'De aanpak-sectie op de homepagina is volledig vernieuwd. In plaats van een statische kaartjesweergave kun je nu op je eigen tempo door de vier fases van de YouLab-aanpak bewegen.',
      },
      { type: 'h3', text: 'Desktop — scroll-driven horizontal track' },
      {
        type: 'p',
        text: 'Op desktop stuur je met verticaal scrollen de horizontale beweging. Terwijl je door de pagina scrollt, bewegen de kaarten vloeiend van links naar rechts via een sticky-paneel. De eerste en laatste kaart beginnen en eindigen gecentreerd dankzij symmetrische CSS calc()-padding.',
      },
      { type: 'h3', text: 'Mobiel — swipe carousel' },
      {
        type: 'p',
        text: 'Op mobiel swipe je horizontaal door de kaarten — een vertrouwde beweging die goed werkt op touchschermen. De animatie gebruikt dezelfde cubic-bezier-curve als iOS voor een native gevoel. Tikken op de puntjes springt direct naar die stap.',
      },
      { type: 'h3', text: 'Wat staat er op elke kaart?' },
      {
        type: 'ul',
        items: [
          'Faseomschrijving — wat doe je in deze fase?',
          'Kernvraag — de centrale vraag van de fase',
          'Werkvormen — welke tools horen hierbij?',
          'Groot ghost-nummer als decoratief element op de achtergrond',
        ],
      },
      { type: 'h3', text: 'Technische details' },
      {
        type: 'p',
        text: 'De scroll-animatie gebruikt requestAnimationFrame en directe DOM-manipulatie (geen React re-renders) voor maximale vloeiendheid. useLayoutEffect zorgt dat de wrapper-hoogte vóór de eerste paint wordt gezet, zodat er geen zichtbare layout-sprong is bij het laden.',
      },
    ],
  },
  {
    id: 'annual-billing',
    date: '2026-03-20',
    version: 'v1.2',
    tag: 'Prijzen',
    tagColor: '#10B981',
    emoji: '💰',
    color: '#10B981',
    image: null,
    title: 'Jaarlijks abonnement: bespaar 20%',
    summary:
      'Vanaf nu kun je kiezen voor een jaarlijks abonnement op YouLab. Hiermee bespaar je 20% ten opzichte van maandelijks betalen.',
    body: [
      { type: 'h2', text: 'Jaarlijks abonneren' },
      {
        type: 'p',
        text: 'We introduceren een jaarlijkse betalingsoptie voor YouLab. Kies je voor jaarlijks betalen, dan bespaar je 20% op je maandelijkse kosten. Ideaal voor teams die weten dat ze YouLab structureel willen inzetten.',
      },
      { type: 'h3', text: 'Hoe wissel je?' },
      {
        type: 'p',
        text: 'Op de prijzenpagina vind je een schakelaar om tussen maandelijks en jaarlijks te wisselen. De prijzen worden direct aangepast, zodat je precies ziet wat je betaalt.',
      },
      { type: 'h3', text: 'Overzicht' },
      {
        type: 'table',
        head: ['Plan', 'Maandelijks', 'Jaarlijks (per maand)', 'Besparing'],
        rows: [
          ['Standaard', '€15', '€12', '20%'],
          ['Onderwijs', '€10', '€8', '20%'],
          ['Expert', 'Gratis', 'Gratis', '—'],
        ],
      },
      { type: 'h3', text: 'Facturering' },
      {
        type: 'p',
        text: 'Bij een jaarlijks abonnement ontvang je één factuur per jaar voor het volledige bedrag. Je ontvangt een herinnering 30 dagen voor de verlengdatum.',
      },
    ],
  },
  {
    id: 'platform-launch',
    date: '2026-01-15',
    version: 'v1.0',
    tag: 'Launch',
    tagColor: '#F59E0B',
    emoji: '🚀',
    color: '#F59E0B',
    image: null,
    title: 'YouLab is live',
    summary:
      'Na een uitgebreide testperiode is YouLab officieel gelanceerd. Het platform is nu beschikbaar voor gemeenten, onderwijsinstellingen en bedrijven.',
    body: [
      { type: 'h2', text: 'Welkom bij YouLab' },
      {
        type: 'p',
        text: 'Na maanden van ontwikkeling en testen lanceren we vandaag officieel YouLab — het online platform voor teams die samen aan impactvolle projecten werken.',
      },
      { type: 'h3', text: 'Wat is YouLab?' },
      {
        type: 'p',
        text: 'YouLab biedt teams een gestructureerde manier om vraagstukken aan te pakken. Met een bewezen aanpak in vier stappen (Ontmoeten, Ontdekken, Ontwikkelen, Organiseren), een bibliotheek van werkvormen en alles op één plek.',
      },
      { type: 'h3', text: 'Wat zit er in v1.0?' },
      {
        type: 'ul',
        items: [
          'Projectbord — taken, subtaken en mijlpalen bijhouden',
          'Toolbox — 9 werkvormen met uitleg en begeleiding',
          'Berichten — communicatie op taak- en projectniveau',
          'Gebruikersbeheer — rollen en rechten per project',
          'Expert-rol — externe partners werken altijd gratis mee',
        ],
      },
      { type: 'h3', text: 'Voor wie?' },
      {
        type: 'p',
        text: 'YouLab is gebouwd voor gemeenten, onderwijsinstellingen, MKB en ZZP\'ers die samenwerken aan maatschappelijke vraagstukken. Externe experts (zoals partners, adviseurs of stakeholders) kunnen altijd gratis meewerken.',
      },
      { type: 'h3', text: 'Wat komt er aan?' },
      {
        type: 'ul',
        items: [
          'Meer werkvormen in de toolbox',
          'AI-assistent voor projectinzichten en samenvattingen',
          'Integraties met bestaande tools',
          'Challenge-module voor onderwijsinstellingen',
        ],
      },
    ],
  },
];
