# Use-case template + vijf sectorpagina's — Design Spec
*Datum: 2026-04-22*

## Doel

Één herbruikbare, datagedreven sectorpagina-template bouwen en direct vullen met plausibele voorbeeldcontent voor vijf sectoren. Het doel is een bespreekprototype waarmee het team concreet kan reageren op formulering, toon en structuur.

---

## Scope

- Nieuwe branch: `feature/use-case-template`
- Route: `/voor/:sector` (al aanwezig in router, VoorSectorPage wordt vervangen)
- Vijf sectoren: gemeenten, onderwijs, mkb, non-profit, adviesbureaus
- Onbekende sector → 404 (al aanwezig via NotFoundPage)
- Koppeling vanuit homepage: ScenarioGuide-links aanpassen

---

## Architectuur

### Databeheer

```
src/data/use-cases/
  _template.js       ← gedocumenteerde structuur + defaults
  gemeenten.js
  onderwijs.js
  mkb.js
  non-profit.js
  adviesbureaus.js
  index.js           ← exporteert useCases map + sectorList voor nav
```

### Componenten

```
src/components/use-case/
  UseCaseHero.jsx
  UseCaseRecognition.jsx
  UseCaseApplications.jsx
  UseCaseToolbox.jsx
  UseCaseStory.jsx
  UseCaseFaq.jsx
  UseCasePartners.jsx
  UseCaseCta.jsx
```

### Pagina

`src/pages/VoorSectorPage.jsx` wordt de template-controller:
- Leest `sector` param via `useParams()`
- Zoekt data op in `useCases[sector]`
- Bij onbekende sector: `<Navigate to="/404" />` of render `NotFoundPage`
- Slaagt CSS `accentColor` door als inline variabele `--sector-accent`

---

## Datastructuur

```js
// src/data/use-cases/_template.js
export const useCaseTemplate = {
  sector: "slug",
  label: "Weergavenaam",
  accentColor: null,           // bijv. '#4057ff'
  hero: {
    tagline: "",
    subclaim: "",
    heroImage: null,
    primaryCta: { label: "", href: "" },
    secondaryCta: { label: "Bekijk een projectverhaal", href: "/verhalen" },
  },
  recognition: {
    heading: "Dit speelt waarschijnlijk bij jullie…",
    points: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  },
  applications: [
    { title: "", description: "", image: null },
    { title: "", description: "", image: null },
    { title: "", description: "", image: null },
  ],
  toolbox: {
    intro: "",
    toolSlugs: [],  // verwijst naar tool.id in src/data/tools.js
  },
  storySlug: null,
  faq: [
    { question: "", answer: "" },
  ],
  partnerIds: [],
  cta: {
    heading: "",
    body: "",
    primaryCta: { label: "", href: "/kennismaken" },
    secondaryCta: { label: "Bekijk een projectverhaal", href: "/verhalen" },
  },
};
```

---

## Template-secties en visuele aanpak

### 1. UseCaseHero
- Grote tagline met `clamp(38px, 5vw, 68px)`, accent-woord in sector-kleur
- Subclaim in muted, max 600px breed
- CTA-paar: gradient button (sector-specifiek) + outline button
- Rechts: abstracte SVG-illustratie — 6-node netwerk (hergebruik hero-stijl) maar in sector-kleur
- Subtiele sector-gekleurde achtergrondvlek (radial gradient, laag opacity)
- Responsive: illustratie verbergen op mobiel < 768px

### 2. UseCaseRecognition
- Lichte achtergrond (`bg-muted/40`), border-y
- SectionHeading: eyebrow = "Herkenbaar?" / heading uit data
- 3 kaarten in grid, elke kaart: klein icoon (checkmark of gerelateerd lucide-icon) + titel + beschrijving
- Geen hover-lift — statische kaarten passen bij de "herkenning" sfeer

### 3. UseCaseApplications
- Witte achtergrond, py-24
- 3 toepassingen: afwisseling links/rechts layout
- Elke rij: beschrijving-kant (60%) + illustratie-kant (40%)
- Illustratie: abstracte gekleurde placeholder (gradient rechthoek + emoji groot)
- Nummering: groot fade-getal op achtergrond (opacity 0.06)

### 4. UseCaseToolbox
- `bg-muted/20` achtergrond
- Intro-alinea boven de chips
- Chips: klikbare links naar `/toolbox#[slug]`, pill-stijl, sector-accentkleur border
- Tooltip/onderschrift per chip optioneel (niet in v1)

### 5. UseCaseStory
- Als `storySlug === null`: vriendelijke lege staat
  - Centrale tekst: "Binnenkort delen we hier een projectverhaal uit deze sector."
  - Lichte border, gestippeld, warm grijs
- Als er wel een slug is: featured card (voor toekomstige opdracht 3)

### 6. UseCaseFaq
- Accordion-stijl: elke vraag heeft een toggle
- `useState` per item voor open/dicht
- Chevron-icoon rotateert
- Zachte border-bottom per item, geen kaart-omhulling

### 7. UseCasePartners
- Hergebruik bestaande PartnersSection-stijl
- Als `partnerIds` leeg: toon alle partners (fallback)
- Eyebrow: "Zij werken al met YouLab"

### 8. UseCaseCta
- Donkere achtergrond (`bg-foreground` of donker gradient)
- Grote heading, body-tekst, CTA-paar
- Sector-accentkleur gebruikt als glow/highlight

---

## Sector-kleurenpalet (bestaand, consistent met AudienceRouter)

| Sector       | Kleur     | Hex       |
|--------------|-----------|-----------|
| Gemeenten    | Blauw     | #4057ff   |
| Onderwijs    | Paars     | #7c3aed   |
| MKB          | Amber     | #f59e0b   |
| Non-profit   | Rood      | #ef4444   |
| Adviesbureaus| Groen     | #10b981   |

---

## Vijf sectoren — contentstrategie

### Gemeenten
Sfeer: direct, buurtgericht, warm-bestuurlijk. Gericht op ambtenaren die participatietrajecten organiseren.
- Hero: "Projecten die de wijk écht raken"
- Recognition: te weinig binding bewoners/uitvoerders; plannen die stranden; stakeholders die langs elkaar werken
- Applications: Wijkparticipatiesessie, Beleidstraject met bewoners, Integrale gebiedsontwikkeling
- Tools: 5w1h, systeemmap, empathy-map, actieplan

### Onderwijs
Sfeer: energie, nieuwsgierigheid, experimenteel-academisch. Gericht op docenten en projectcoördinatoren hbo/wo.
- Hero: "Leren door échte projecten — met structuur én vrijheid"
- Recognition: studenten die zwemmen zonder kader; opdrachtgevers die afhaken; docenten die bijsturen maar grip verliezen
- Applications: Werkveldopdracht hbo, Onderzoeksgroep met externe partner, Minor of living lab
- Tools: 5w1h, customer-journey, prototype-canvas, actieplan

### MKB
Sfeer: hands-on, pragmatisch, geen tijd voor theorie. Gericht op eigenaren/managers van bedrijven 10-250 fte.
- Hero: "Strategie die landt op de werkvloer"
- Recognition: plannen die blijven hangen in de directie; teams die niet meedoen; externe adviseur die niets achterlaat
- Applications: Strategie-sprint voor team, Klantonderzoek zonder budget, Innovatietraject met de werkvloer
- Tools: 5w1h, empathy-map, business-model, value-proposition, actieplan

### Non-profit
Sfeer: gedreven, coalitiegericht, mensgericht. Gericht op programmamanagers en directeuren van maatschappelijke organisaties.
- Hero: "Samen werken aan wat ertoe doet"
- Recognition: te veel stakeholders, te weinig richting; mooie intenties zonder concrete uitvoering; coalitie die uiteen valt
- Applications: Meerstakeholdertraject, Programma met doelgroepbetrokkenheid, Strategische heroriëntatie
- Tools: systeemmap, empathy-map, service-blueprint, actieplan

### Adviesbureaus
Sfeer: professioneel maar niet droog, methodisch-smart. Gericht op adviseurs en facilitators die met klanten werken.
- Hero: "Jouw methodiek, scherper uitgevoerd"
- Recognition: workshops zonder follow-through; klant die na afloop terugvalt; gezamenlijk beeld dat snel vervaagt
- Applications: Strategiesessie met klant, Facilitatie van complexe besluitvorming, Reeks werksessies met tussentijdse reviews
- Tools: 5w1h, systeemmap, customer-journey, service-blueprint, value-proposition

---

## Koppeling homepage

- `ScenarioGuide.jsx`: bestaande links zijn al correct (→ /voor/gemeenten, /voor/onderwijs, /voor/adviesbureaus)
- `AudienceRouter.jsx`: links zijn al correct — geen wijzigingen nodig

---

## ExampleBadge-gebruik

Alle dynamische content uit data-bestanden wordt gemarkeerd. In de subcomponenten:
- Hero tagline en subclaim: `<ExampleBadge />` naast de heading
- Recognition points: badge per punt
- Applications: badge per toepassing
- FAQ: badge per vraag
- CTA heading: badge ernaast

ExampleBadge wordt NIET op structurele elementen gezet (section headings die altijd hetzelfde zijn, navigatie-labels).

---

## Acceptatiecriteria

- [x] `/voor/[gemeenten|onderwijs|mkb|non-profit|adviesbureaus]` laden volledig
- [x] Onbekende sector toont 404
- [x] ExampleBadge consistent op voorbeeld-content
- [x] Nieuwe sector toevoegen = één datafile + index-update
- [x] Template volledig datagedreven
- [x] Responsief, geen console-errors
- [x] `npm run dev` werkt

---

## Design-beslissingen (aannames)

- Hero-illustratie: hergebruik SVG-node-network patroon uit HeroSection, maar monochroom in sector-kleur. Eenvoudig te repliceren zonder externe assets.
- Geen stockfoto's — illustraties zijn altijd code/SVG of emoji-gestijlde placeholders
- FAQ: geen externe accordion-library — simpele `useState` toggle
- Toolbox-chips linken naar `/toolbox#[id]` — hash-navigatie werkt als de toolbox pagina dit al ondersteunt
- PartnerIds leeg → toon alle 6 bestaande partners als fallback
- Geen pricing, geen AI-content, geen nep-statistieken, geen echte organisaties
