# Use-case Template + Vijf Sectorpagina's — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw één datagedreven sector-template (`/voor/:sector`) en vul hem met voorbeeldcontent voor 5 sectoren, zodat het bespreekprototype volledig rijdbaar is.

**Architecture:** Data-first aanpak — vijf sector-databestanden exporteren een gestandaardiseerde structuur, `VoorSectorPage` laadt de juiste dataset via de URL-param en geeft hem door aan 8 pure presentatie-componenten in `src/components/use-case/`. Geen hardcoded content in componenten.

**Tech Stack:** React 19, React Router v7, Tailwind CSS 4, Lucide React, shadcn-geïnspireerde Button/Badge-componenten.

---

## File Map

| Actie   | Pad                                         | Verantwoordelijkheid                              |
|---------|---------------------------------------------|---------------------------------------------------|
| Create  | `src/data/use-cases/_template.js`           | Gedocumenteerde datastructuur + defaults           |
| Create  | `src/data/use-cases/gemeenten.js`           | Sector-data Gemeenten                              |
| Create  | `src/data/use-cases/onderwijs.js`           | Sector-data Onderwijs                              |
| Create  | `src/data/use-cases/mkb.js`                 | Sector-data MKB                                    |
| Create  | `src/data/use-cases/non-profit.js`          | Sector-data Non-profit                             |
| Create  | `src/data/use-cases/adviesbureaus.js`       | Sector-data Adviesbureaus                          |
| Create  | `src/data/use-cases/index.js`               | Exporteert `useCases` map + `sectorList`           |
| Create  | `src/components/use-case/UseCaseHero.jsx`   | Hero-sectie: tagline, subclaim, CTAs, illustratie  |
| Create  | `src/components/use-case/UseCaseRecognition.jsx` | 3 herkenpunten                               |
| Create  | `src/components/use-case/UseCaseApplications.jsx`| 3 toepassingen, afwisselend links/rechts     |
| Create  | `src/components/use-case/UseCaseToolbox.jsx`| Tool-chips + intro                                 |
| Create  | `src/components/use-case/UseCaseStory.jsx`  | Featured story of lege staat                       |
| Create  | `src/components/use-case/UseCaseFaq.jsx`    | Accordion-FAQ                                      |
| Create  | `src/components/use-case/UseCasePartners.jsx`| Partnerlogobalk                                   |
| Create  | `src/components/use-case/UseCaseCta.jsx`    | Donkere eindcall-to-action                         |
| Modify  | `src/pages/VoorSectorPage.jsx`              | Template-controller: data laden + componenten tonen |
| Modify  | `src/components/ScenarioGuide.jsx`          | Links al correct — geen wijziging nodig            |

---

## Task 1: Data-laag — _template.js + index.js

**Files:**
- Create: `src/data/use-cases/_template.js`
- Create: `src/data/use-cases/index.js`

- [ ] **Step 1: Maak de templatestructuur**

```js
// src/data/use-cases/_template.js

/**
 * Gedocumenteerde datastructuur voor een sectorpagina.
 * Kopieer dit als startpunt voor een nieuwe sector.
 *
 * Verplichte velden: sector, label, accentColor, hero, recognition,
 *   applications, toolbox, faq, cta
 * Optionele velden: storySlug (null = lege staat), partnerIds ([] = alle partners)
 */
export const useCaseTemplate = {
  sector: "slug",               // url-slug, bijv. "gemeenten"
  label: "Naam",                // weergavenaam, bijv. "Gemeenten"
  accentColor: "#4057ff",       // sector-accentkleur, zie index.js voor gekozen kleuren

  hero: {
    tagline: "",                // grote headline boven de vouw
    subclaim: "",               // ondersteunende alinea (max ~150 tekens)
    primaryCta: { label: "", href: "/kennismaken" },
    secondaryCta: { label: "Bekijk een projectverhaal", href: "/verhalen" },
  },

  recognition: {
    heading: "Dit speelt waarschijnlijk bij jullie…",
    points: [                   // exact 3 items
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  },

  applications: [               // exact 3 items
    { title: "", description: "", image: null },
    { title: "", description: "", image: null },
    { title: "", description: "", image: null },
  ],

  toolbox: {
    intro: "",                  // alinea boven de tool-chips
    toolSlugs: [],              // verwijst naar tool.id in src/data/tools.js
                                // beschikbaar: '5w1h', 'systeemmap', 'empathy-map',
                                // 'customer-journey', 'business-model', 'value-proposition',
                                // 'service-blueprint', 'prototype-canvas', 'actieplan'
  },

  storySlug: null,              // slug van verhaal uit src/data/stories, of null voor lege staat

  faq: [                        // 3–5 items
    { question: "", answer: "" },
  ],

  partnerIds: [],               // subselectie uit gedeelde partners-lijst
                                // [] = toon alle partners (fallback)

  cta: {
    heading: "",
    body: "",
    primaryCta: { label: "", href: "/kennismaken" },
    secondaryCta: { label: "Bekijk een projectverhaal", href: "/verhalen" },
  },
};
```

- [ ] **Step 2: Maak index.js (leeg skelet — sectoren worden na Task 2-6 toegevoegd)**

```js
// src/data/use-cases/index.js
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
```

- [ ] **Step 3: Commit**
```bash
git add src/data/use-cases/_template.js src/data/use-cases/index.js
git commit -m "feat(data): voeg use-case datastructuur en index toe"
```

---

## Task 2: Data — gemeenten.js

**Files:**
- Create: `src/data/use-cases/gemeenten.js`

- [ ] **Step 1: Schrijf volledige gemeentedata**

```js
// src/data/use-cases/gemeenten.js
export default {
  sector: 'gemeenten',
  label: 'Gemeenten',
  accentColor: '#4057ff',

  hero: {
    tagline: 'Projecten die de wijk écht raken',
    subclaim: 'Van bewonersavond naar gedragen uitvoering — YouLab geeft structuur aan participatie, gebiedsontwikkeling en beleidstrajecten waarbij veel partijen betrokken zijn.',
    primaryCta: { label: 'Verken YouLab voor gemeenten', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [
      {
        title: 'Bewoners haken af',
        description: 'Participatietrajecten die goed starten maar uitlopen op dezelfde vijf actieve bewoners. De rest ziet niets terug van hun inbreng.',
      },
      {
        title: 'Plannen die stranden',
        description: 'Mooie beleidsdocumenten die worden vastgesteld maar niet landen in de uitvoeringspraktijk. Teams weten niet wat ze ermee moeten.',
      },
      {
        title: 'Partijen die langs elkaar werken',
        description: 'Gemeente, corporatie, welzijnswerk en bewoners zitten ieder op een eigen eiland. Afstemming kost meer tijd dan de inhoud.',
      },
    ],
  },

  applications: [
    {
      title: 'Wijkparticipatiesessie',
      description: 'Betrek bewoners en professionals in een gezamenlijke werksessie rondom de herinrichting van een straat of buurt. YouLab biedt kant-en-klare werkvormen die iedereen — ook mensen zonder vergaderervaring — laat meedoen.',
      image: null,
    },
    {
      title: 'Beleidstraject met bewoners',
      description: 'Van een beleidsvraag naar een gedragen antwoord. Gebruik YouLab om inzichten van bewoners te vertalen naar concrete beleidsaanbevelingen, stap voor stap.',
      image: null,
    },
    {
      title: 'Integrale gebiedsontwikkeling',
      description: 'Breng partijen met verschillende belangen samen in één gedeelde werkruimte. Maak afspraken traceerbaar, zichtbaar voor iedereen en koppel ze direct aan een actieplan.',
      image: null,
    },
  ],

  toolbox: {
    intro: 'YouLab biedt tools die passen bij elk moment van een participatietraject — van probleemverkenning tot uitvoering.',
    toolSlugs: ['5w1h', 'systeemmap', 'empathy-map', 'actieplan'],
  },

  storySlug: null,

  faq: [
    {
      question: 'Werkt YouLab ook voor kleine gemeenten?',
      answer: 'Ja. YouLab is schaalbaar — je kunt het inzetten voor een project van 20 bewoners tot een traject met honderden deelnemers. De structuur past zich aan aan de schaal.',
    },
    {
      question: 'Hoe betrek je moeilijk bereikbare groepen?',
      answer: 'YouLab biedt werkvormen die zijn ontworpen voor laagdrempelig meedoen. Je hoeft geen vergadertijger te zijn om een zinvolle bijdrage te leveren.',
    },
    {
      question: 'Kan de gemeente zelf modereren, zonder externe facilitator?',
      answer: 'Absoluut. YouLab is zo opgebouwd dat een ambtenaar of gebiedsmanager de sessies zelf kan begeleiden — mét houvast en structuur, zonder afhankelijk te zijn van externe bureaus.',
    },
    {
      question: 'Hoe zorgen we dat de uitkomsten niet in een lade belanden?',
      answer: 'Elke sessie eindigt met een concrete samenvatting en vervolgstappen. YouLab koppelt inzichten direct aan actiepunten en maakt voortgang zichtbaar voor alle betrokkenen.',
    },
  ],

  partnerIds: [],

  cta: {
    heading: 'Verken YouLab voor gemeenten',
    body: 'Wil je weten hoe YouLab past bij jouw participatietraject of gebiedsontwikkeling? Plan een korte kennismaking.',
    primaryCta: { label: 'Plan een kennismaking', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/use-cases/gemeenten.js
git commit -m "feat(data): voeg sectordata Gemeenten toe"
```

---

## Task 3: Data — onderwijs.js

**Files:**
- Create: `src/data/use-cases/onderwijs.js`

- [ ] **Step 1: Schrijf volledige onderwijsdata**

```js
// src/data/use-cases/onderwijs.js
export default {
  sector: 'onderwijs',
  label: 'Onderwijs',
  accentColor: '#7c3aed',

  hero: {
    tagline: 'Leren door échte projecten — met structuur én vrijheid',
    subclaim: 'YouLab verbindt studenten, docenten en opdrachtgevers in één werkruimte. Met begeleide fasen en concrete deliverables — zodat leren en leveren samengaan.',
    primaryCta: { label: 'Verken YouLab voor onderwijs', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [
      {
        title: 'Studenten die zwemmen zonder kader',
        description: 'Vrije opdrachten klinken mooi, maar zonder structuur spenderen studenten weken aan oriëntatie en verliezen ze richting precies als het spannend wordt.',
      },
      {
        title: 'Opdrachtgevers die afhaken',
        description: 'Externe partners doen mee met enthousiasme, maar raken het overzicht kwijt. Ze weten niet wat studenten doen, en studenten weten niet wat er van hen verwacht wordt.',
      },
      {
        title: 'Docenten die bijsturen maar grip verliezen',
        description: 'Als begeleider wil je ondersteunen, niet overnemen. Maar zonder gedeeld beeld van de voortgang wordt bijsturen al snel ingrijpen.',
      },
    ],
  },

  applications: [
    {
      title: 'Werkveldopdracht hbo',
      description: 'Koppel studenten aan een echt vraagstuk van een externe opdrachtgever. YouLab geeft structuur aan elke fase — van probleemverkenning tot eindpresentatie — zodat studenten én opdrachtgever weten waar ze aan toe zijn.',
      image: null,
    },
    {
      title: 'Onderzoeksgroep met externe partner',
      description: 'Begeleid een interdisciplinaire onderzoeksgroep die werkt aan een maatschappelijk vraagstuk. YouLab maakt samenwerking tussen onderzoekers, studenten en praktijkpartners zichtbaar en gestructureerd.',
      image: null,
    },
    {
      title: 'Minor of living lab',
      description: 'Zet een dynamisch leertraject op met meerdere opdrachten en reflectiemomenten. YouLab biedt een gedeelde werkruimte voor alle betrokkenen, van intake tot eindpresentatie.',
      image: null,
    },
  ],

  toolbox: {
    intro: 'Deze tools uit YouLab sluiten aan bij de fasen van een projectmatig leertraject — van vraagverkenning tot oplevering.',
    toolSlugs: ['5w1h', 'customer-journey', 'prototype-canvas', 'actieplan'],
  },

  storySlug: null,

  faq: [
    {
      question: 'Is YouLab bedoeld voor studenten of voor docenten?',
      answer: 'Beide. Studenten werken in YouLab, docenten houden overzicht en begeleiden vanuit hetzelfde platform. Opdrachtgevers kunnen meekijken en feedback geven.',
    },
    {
      question: 'Kunnen we YouLab koppelen aan Canvas of Brightspace?',
      answer: 'YouLab staat los van bestaande leerplatforms en richt zich op projectsamenwerking, niet op toetsing of cursusinhoud. Koppeling met LMS-systemen maakt geen deel uit van de huidige versie.',
    },
    {
      question: 'Hoe gaan we om met groepswerk en individuele beoordeling?',
      answer: 'YouLab richt zich op het gezamenlijke proces, niet op beoordeling. Bijdragen zijn zichtbaar per deelnemer — docenten kunnen dit gebruiken als input voor hun eigen beoordelingsproces.',
    },
    {
      question: 'Wat als een opdrachtgever halverwege afhaakt?',
      answer: 'YouLab maakt alle gemaakte keuzes en afspraken inzichtelijk, ook voor nieuwe betrokkenen. Zo kun je het traject voortzetten ook als de contactpersoon wisselt.',
    },
  ],

  partnerIds: [],

  cta: {
    heading: 'Verken YouLab voor onderwijs',
    body: 'Wil je weten hoe YouLab past bij jouw leertraject of werkveldopdracht? Plan een korte kennismaking.',
    primaryCta: { label: 'Plan een kennismaking', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/use-cases/onderwijs.js
git commit -m "feat(data): voeg sectordata Onderwijs toe"
```

---

## Task 4: Data — mkb.js

**Files:**
- Create: `src/data/use-cases/mkb.js`

- [ ] **Step 1: Schrijf volledige MKB-data**

```js
// src/data/use-cases/mkb.js
export default {
  sector: 'mkb',
  label: 'MKB',
  accentColor: '#f59e0b',

  hero: {
    tagline: 'Strategie die landt op de werkvloer',
    subclaim: 'YouLab helpt teams in het MKB om samen richting te kiezen en meteen door te pakken. Geen dik rapport, geen langdradig traject — wél concrete stappen die iedereen begrijpt.',
    primaryCta: { label: 'Verken YouLab voor MKB', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [
      {
        title: 'Plannen die hangen in de directie',
        description: 'De directie heeft een duidelijk beeld. Het team niet. Besluiten worden genomen boven de hoofden van mensen die ze moeten uitvoeren.',
      },
      {
        title: 'Teams die niet meedoen',
        description: 'Medewerkers zijn niet gehoord bij de strategievorming en voelen de urgentie niet. Verandering loopt vast op weerstand of desinteresse.',
      },
      {
        title: 'Externe adviseur die niets achterlaat',
        description: 'Een bureau schrijft een mooi rapport, presenteert het, en vertrekt. Drie maanden later weet niemand meer wat de aanbevelingen precies waren.',
      },
    ],
  },

  applications: [
    {
      title: 'Strategie-sprint voor het team',
      description: 'Breng de directie en sleutelfiguren uit het team samen in een compacte sessie. Van vraagstuk tot uitvoerbare keuzes in één dag — met YouLab als gedeelde werkruimte en geheugen.',
      image: null,
    },
    {
      title: 'Klantonderzoek zonder groot budget',
      description: 'Leer je klant echt kennen zonder duur onderzoeksbureau. YouLab biedt kant-en-klare werkvormen waarmee je zelf inzichten ophaalt en direct vertaalt naar productverbeteringen.',
      image: null,
    },
    {
      title: 'Innovatietraject met de werkvloer',
      description: 'Betrek medewerkers die het dagelijkse werk kennen bij de zoektocht naar nieuwe producten of processen. YouLab geeft structuur aan creativiteit — zodat ideeën niet verdampen maar leiden tot concrete stappen.',
      image: null,
    },
  ],

  toolbox: {
    intro: 'YouLab biedt tools die passen bij strategische sessies en klantgericht werken in het MKB — snel inzetbaar, direct bruikbaar.',
    toolSlugs: ['5w1h', 'empathy-map', 'business-model', 'value-proposition', 'actieplan'],
  },

  storySlug: null,

  faq: [
    {
      question: 'Wij hebben geen tijd voor lange trajecten — past YouLab ook bij korte sprints?',
      answer: 'Absoluut. YouLab is ontworpen om ook bij compacte sessies van een halve dag of enkele weken direct waarde op te leveren.',
    },
    {
      question: 'Hebben we een facilitator nodig?',
      answer: 'Nee. YouLab is zo opgebouwd dat een interne trekker — een eigenaar, manager of enthousiast teamlid — de sessies zelf kan begeleiden.',
    },
    {
      question: 'Wat als ons team niet gewend is aan dit soort werkvormen?',
      answer: 'Dat is juist waarom YouLab bestaat. De tools zijn laagdrempelig en hebben duidelijke instructies. Je hoeft niet te weten wat een "Customer Journey" is om er gebruik van te maken.',
    },
    {
      question: 'Kan ik YouLab ook gebruiken voor klantgesprekken?',
      answer: 'Ja. Meerdere tools zijn specifiek ontworpen om inzichten uit klantgesprekken te structureren en te delen met het team.',
    },
  ],

  partnerIds: [],

  cta: {
    heading: 'Verken YouLab voor MKB',
    body: 'Wil je weten hoe YouLab past bij jouw strategie- of innovatietraject? Plan een korte kennismaking.',
    primaryCta: { label: 'Plan een kennismaking', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/use-cases/mkb.js
git commit -m "feat(data): voeg sectordata MKB toe"
```

---

## Task 5: Data — non-profit.js

**Files:**
- Create: `src/data/use-cases/non-profit.js`

- [ ] **Step 1: Schrijf volledige non-profit data**

```js
// src/data/use-cases/non-profit.js
export default {
  sector: 'non-profit',
  label: 'Non-profit',
  accentColor: '#ef4444',

  hero: {
    tagline: 'Samen werken aan wat ertoe doet',
    subclaim: 'YouLab helpt maatschappelijke organisaties om ambitieuze programma\'s echt van de grond te krijgen — met alle betrokkenen aan tafel en een helder pad vooruit.',
    primaryCta: { label: 'Verken YouLab voor non-profit', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [
      {
        title: 'Te veel stakeholders, te weinig richting',
        description: 'Iedereen heeft een mening, maar niemand durft knopen door te hakken. Vergaderingen over vergaderingen, zonder dat er echt iets beslist wordt.',
      },
      {
        title: 'Mooie intenties, geen uitvoering',
        description: 'De missie is helder, de energie is er, maar de stap naar concrete acties lukt niet. Plannen verzanden in de uitwerking of verdwijnen na de eerste presentatie.',
      },
      {
        title: 'Coalitie die uit elkaar valt',
        description: 'Partners die bij de start enthousiast zijn, haken halverwege af. Onduidelijke rollen, te weinig eigenaarschap, te veel afhankelijkheid van de kartrekker.',
      },
    ],
  },

  applications: [
    {
      title: 'Meerstakeholdertraject',
      description: 'Breng organisaties met verschillende belangen samen rondom een gedeeld vraagstuk. YouLab geeft structuur aan het proces — van een eerste verkenning tot gezamenlijke afspraken die alle partijen dragen.',
      image: null,
    },
    {
      title: 'Programma met doelgroepbetrokkenheid',
      description: 'Betrek mensen voor wie je werkt bij het ontwerp van je programma. YouLab biedt werkvormen die participatie eerlijk en concreet maken — niet als check-the-box, maar als inhoudelijke bijdrage.',
      image: null,
    },
    {
      title: 'Strategische heroriëntatie',
      description: 'Staat de organisatie op een kruispunt? YouLab helpt het team en de stakeholders samen keuzes te maken over richting, focus en prioriteiten — met een proces dat recht doet aan ieders inbreng.',
      image: null,
    },
  ],

  toolbox: {
    intro: 'Deze YouLab-tools sluiten aan bij complexe, meerstakeholder-omgevingen waar draagvlak en helderheid hand in hand moeten gaan.',
    toolSlugs: ['systeemmap', 'empathy-map', 'service-blueprint', 'actieplan'],
  },

  storySlug: null,

  faq: [
    {
      question: 'Wij werken met vrijwilligers — is YouLab ook voor hen toegankelijk?',
      answer: 'Ja. YouLab is ontworpen voor iedereen die bijdraagt aan een project, ongeacht achtergrond of werkverband. De werkvormen zijn laagdrempelig en vragen geen voorkennis.',
    },
    {
      question: 'We moeten verantwoording afleggen aan een subsidieverstrekker — helpt YouLab daarbij?',
      answer: 'YouLab maakt het werkproces zichtbaar en documenteert beslissingen en afspraken. Dat biedt een goede basis voor rapportage, al is het geen specifiek verantwoordingstool.',
    },
    {
      question: 'Hoe houd je partijen betrokken over een langere periode?',
      answer: 'YouLab maakt voortgang zichtbaar voor alle betrokkenen. Regelmatige terugkoppeling en gedeelde mijlpalen helpen om de energie erin te houden.',
    },
    {
      question: 'Kunnen we YouLab gebruiken met partijen die minder digitaal vaardig zijn?',
      answer: 'De complexiteit van de tools is aanpasbaar. YouLab werkt het beste als er een begeleider is die de digitale omgeving beheert, terwijl deelnemers inhoudelijk bijdragen.',
    },
  ],

  partnerIds: [],

  cta: {
    heading: 'Verken YouLab voor non-profit',
    body: 'Wil je weten hoe YouLab past bij jouw coalitietraject of programma? Plan een korte kennismaking.',
    primaryCta: { label: 'Plan een kennismaking', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/use-cases/non-profit.js
git commit -m "feat(data): voeg sectordata Non-profit toe"
```

---

## Task 6: Data — adviesbureaus.js

**Files:**
- Create: `src/data/use-cases/adviesbureaus.js`

- [ ] **Step 1: Schrijf volledige adviesbureaudata**

```js
// src/data/use-cases/adviesbureaus.js
export default {
  sector: 'adviesbureaus',
  label: 'Adviesbureaus',
  accentColor: '#10b981',

  hero: {
    tagline: 'Jouw methodiek, scherper uitgevoerd',
    subclaim: 'YouLab versterkt wat je al doet. Als adviseur of facilitator krijg je een gedeelde werkruimte die jouw aanpak ondersteunt — van intakegesprek tot eindpresentatie.',
    primaryCta: { label: 'Verken YouLab voor adviesbureaus', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },

  recognition: {
    heading: 'Dit speelt waarschijnlijk bij jullie…',
    points: [
      {
        title: 'Workshops zonder follow-through',
        description: 'De sessie zit goed in elkaar, de energie is er. Maar twee weken later is er niets meer van te zien. De uitkomsten leven niet bij de klant.',
      },
      {
        title: 'Klant die terugvalt op oud gedrag',
        description: 'Verandering vraagt meer dan een goede dag. Zonder gedeeld geheugen en concrete vervolgstappen valt een team al snel terug in vertrouwde patronen.',
      },
      {
        title: 'Gezamenlijk beeld dat snel vervaagt',
        description: 'Na een intensieve sessie is er eensgezindheid. Drie maanden later herinnert niemand meer wat er precies is afgesproken — en waarom.',
      },
    ],
  },

  applications: [
    {
      title: 'Strategiesessie met klant',
      description: 'Gebruik YouLab als gedeelde werkruimte voor je strategische sessies. Van vraagstelling tot uitvoerplan — alle inzichten, keuzes en afspraken staan voor iedereen zichtbaar.',
      image: null,
    },
    {
      title: 'Facilitatie van complexe besluitvorming',
      description: 'Bij vraagstukken met meerdere belangen en perspectieven biedt YouLab structuur die het proces eerlijk en transparant maakt — zonder dat je als facilitator constant moet ingrijpen.',
      image: null,
    },
    {
      title: 'Reeks werksessies met tussentijdse reviews',
      description: 'Begeleid een traject van meerdere maanden met gestructureerde sessies en reviews. YouLab houdt de rode draad vast en maakt zichtbaar hoe de klant zich door het traject beweegt.',
      image: null,
    },
  ],

  toolbox: {
    intro: 'Deze tools passen bij de fasering van een advies- of begeleidingstraject — van probleemanalyse tot uitvoerbaar plan.',
    toolSlugs: ['5w1h', 'systeemmap', 'customer-journey', 'service-blueprint', 'value-proposition'],
  },

  storySlug: null,

  faq: [
    {
      question: 'Kunnen we YouLab wit-labelen met onze eigen naam?',
      answer: 'In de huidige versie van het prototype is dat nog niet beschikbaar. Het is een veelgevraagde feature die we meenemen in de doorontwikkeling.',
    },
    {
      question: 'Werkt YouLab ook als klanten op afstand zitten?',
      answer: 'Ja. YouLab is ontworpen voor hybride en digitale samenwerking. Deelnemers kunnen vanuit verschillende locaties bijdragen.',
    },
    {
      question: 'Kunnen wij onze eigen werkvormen toevoegen?',
      answer: 'In de huidige versie werk je met de YouLab-toolset. Maatwerk-templates zijn iets dat we verkennen voor de professionele variant.',
    },
    {
      question: 'Hoe laten we klanten zien wat we hebben opgebouwd?',
      answer: 'YouLab biedt een deelbare weergave van het werkproces en de uitkomsten. Je kunt dit gebruiken als onderdeel van je eindpresentatie of als naslagwerk voor de klant.',
    },
    {
      question: 'Wij faciliteren soms met twintig of meer deelnemers — kan dat?',
      answer: 'YouLab is schaalbaar. Voor grote groepen adviseren we om sub-sessies op te zetten en de uitkomsten samen te voegen in een gedeelde werkruimte.',
    },
  ],

  partnerIds: [],

  cta: {
    heading: 'Verken YouLab voor adviesbureaus',
    body: 'Wil je weten hoe YouLab past bij jouw klanttrajecten en werkwijze? Plan een korte kennismaking.',
    primaryCta: { label: 'Plan een kennismaking', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk een projectverhaal', href: '/verhalen' },
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/use-cases/adviesbureaus.js
git commit -m "feat(data): voeg sectordata Adviesbureaus toe"
```

---

## Task 7: Component — UseCaseHero.jsx

**Files:**
- Create: `src/components/use-case/UseCaseHero.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseHero.jsx
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function HeroIllustration({ color }) {
  const nodes = [
    { cx: 80,  cy: 60,  r: 22, label: 'Vraag',    emoji: '❓' },
    { cx: 220, cy: 40,  r: 18, label: 'Inzicht',  emoji: '💡' },
    { cx: 340, cy: 80,  r: 20, label: 'Aanpak',   emoji: '🗺️' },
    { cx: 120, cy: 170, r: 18, label: 'Team',     emoji: '🤝' },
    { cx: 260, cy: 160, r: 22, label: 'Actie',    emoji: '⚡' },
    { cx: 380, cy: 150, r: 18, label: 'Resultaat',emoji: '✅' },
  ];
  const edges = [
    [0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],
  ];
  return (
    <svg viewBox="0 0 460 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 460 }}>
      <defs>
        <radialGradient id={`hg-${color.replace('#','')}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="230" cy="110" rx="210" ry="100" fill={`url(#hg-${color.replace('#','')})`} />
      {edges.map(([a,b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={color} strokeOpacity="0.25" strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={color} fillOpacity="0.12" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" />
          <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontSize="12" fill={color} fontWeight="600" style={{ fontFamily: 'system-ui' }}>
            {n.emoji}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function UseCaseHero({ data, accentColor, label }) {
  const { tagline, subclaim, primaryCta, secondaryCta } = data.hero;
  return (
    <section
      style={{
        paddingTop: 68,
        background: `radial-gradient(ellipse 900px 500px at 75% 40%, ${accentColor}14, transparent 70%)`,
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 py-20 grid gap-12 items-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        {/* Text side */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-6">
            Voor {label}
            <ExampleBadge />
          </span>
          <h1
            className="text-foreground font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
          >
            <span style={{ color: accentColor }}>{tagline.split('—')[0].trim()}</span>
            {tagline.includes('—') && (
              <> <span className="text-foreground">— {tagline.split('—')[1].trim()}</span></>
            )}
            {!tagline.includes('—') && null}
          </h1>
          <p
            className="text-muted-foreground leading-relaxed mb-10"
            style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', maxWidth: 520 }}
          >
            {subclaim} <ExampleBadge />
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" size="lg" asChild>
              <Link to={primaryCta.href} className="no-underline">{primaryCta.label}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={secondaryCta.href} className="no-underline">{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        {/* Illustration side */}
        <div className="hidden lg:flex items-center justify-center">
          <HeroIllustration color={accentColor} />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseHero.jsx
git commit -m "feat(ui): voeg UseCaseHero component toe"
```

---

## Task 8: Component — UseCaseRecognition.jsx

**Files:**
- Create: `src/components/use-case/UseCaseRecognition.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseRecognition.jsx
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';
import { Section } from '../ui.jsx';

export default function UseCaseRecognition({ data, accentColor }) {
  const { heading, points } = data.recognition;
  return (
    <section className="bg-muted/40 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Herkenbaar?"
          title={<>{heading} <ExampleBadge /></>}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${accentColor}14` }}
              >
                <CheckCircle size={20} style={{ color: accentColor }} />
              </div>
              <div>
                <h3 className="font-bold text-[16px] mb-2 text-foreground">
                  {point.title} <ExampleBadge />
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseRecognition.jsx
git commit -m "feat(ui): voeg UseCaseRecognition component toe"
```

---

## Task 9: Component — UseCaseApplications.jsx

**Files:**
- Create: `src/components/use-case/UseCaseApplications.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseApplications.jsx
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const EMOJIS = ['🗂️', '🔍', '🚀'];

function ApplicationBlock({ app, index, accentColor }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className="grid gap-12 items-center py-16 border-b border-border last:border-0"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
    >
      {/* Text side */}
      <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
        <div
          className="text-[80px] font-black leading-none mb-4 select-none"
          style={{ color: accentColor, opacity: 0.07 }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3
          className="font-bold text-[22px] mb-3 text-foreground leading-snug"
          style={{ marginTop: -40 }}
        >
          {app.title} <ExampleBadge />
        </h3>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          {app.description}
        </p>
      </div>

      {/* Illustration side */}
      <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            height: 200,
            background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}06)`,
            border: `1px solid ${accentColor}25`,
          }}
        >
          <span style={{ fontSize: 64 }}>{EMOJIS[index] || '📋'}</span>
        </div>
      </div>
    </div>
  );
}

export default function UseCaseApplications({ data, accentColor }) {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Zo wordt YouLab gebruikt"
          title={<>Drie concrete toepassingen <ExampleBadge /></>}
          subtitle="Herkenbare situaties, direct inzetbaar."
          center={false}
        />
        {data.applications.map((app, i) => (
          <ApplicationBlock
            key={i}
            app={app}
            index={i}
            accentColor={accentColor}
          />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseApplications.jsx
git commit -m "feat(ui): voeg UseCaseApplications component toe"
```

---

## Task 10: Component — UseCaseToolbox.jsx

**Files:**
- Create: `src/components/use-case/UseCaseToolbox.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseToolbox.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';
import { tools } from '../../data/tools.js';

export default function UseCaseToolbox({ data, accentColor }) {
  const { intro, toolSlugs } = data.toolbox;

  // Resolve tool objects from slugs
  const selectedTools = toolSlugs
    .map(slug => tools.find(t => t.id === slug))
    .filter(Boolean);

  return (
    <section className="bg-muted/20 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="YouLab Toolbox"
          title={<>Welke tools passen hierbij <ExampleBadge /></>}
        />
        <p
          className="text-muted-foreground text-[16px] leading-relaxed mb-8 text-center"
          style={{ maxWidth: 600, margin: '0 auto 2rem' }}
        >
          {intro}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {selectedTools.map(tool => (
            <Link
              key={tool.id}
              to={`/toolbox#${tool.id}`}
              className="no-underline group"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                style={{
                  borderColor: `${accentColor}40`,
                  color: accentColor,
                  background: `${accentColor}0a`,
                }}
              >
                {tool.name}
                <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/toolbox"
            className="text-sm font-semibold no-underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle tools in de Toolbox →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseToolbox.jsx
git commit -m "feat(ui): voeg UseCaseToolbox component toe"
```

---

## Task 11: Component — UseCaseStory.jsx

**Files:**
- Create: `src/components/use-case/UseCaseStory.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseStory.jsx
import SectionHeading from '../SectionHeading.jsx';

export default function UseCaseStory({ data }) {
  const { storySlug, label } = data;

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Projectverhaal"
          title="Uit de praktijk"
        />
        {storySlug === null ? (
          <div
            className="max-w-[600px] mx-auto text-center rounded-2xl p-12"
            style={{
              border: '2px dashed var(--border)',
              background: 'var(--muted)',
            }}
          >
            <div className="text-4xl mb-4">📖</div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Binnenkort delen we hier een projectverhaal uit de sector <strong>{label}</strong>.
            </p>
          </div>
        ) : (
          // Placeholder voor toekomstig verhalensysteem (opdracht 3)
          <div className="text-center text-muted-foreground">Verhaal: {storySlug}</div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseStory.jsx
git commit -m "feat(ui): voeg UseCaseStory component toe (met lege staat)"
```

---

## Task 12: Component — UseCaseFaq.jsx

**Files:**
- Create: `src/components/use-case/UseCaseFaq.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseFaq.jsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function FaqItem({ question, answer, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 bg-transparent border-0 cursor-pointer"
      >
        <span className="font-semibold text-[15px] text-foreground leading-snug">
          {question} <ExampleBadge />
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 text-muted-foreground transition-transform duration-200"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            color: open ? accentColor : undefined,
          }}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function UseCaseFaq({ data, accentColor }) {
  return (
    <section className="bg-muted/30 py-20 border-y border-border">
      <div className="max-w-[720px] mx-auto px-6">
        <SectionHeading
          eyebrow="Veelgestelde vragen"
          title={<>Wat anderen willen weten <ExampleBadge /></>}
        />
        <div className="rounded-2xl border border-border bg-card px-6">
          {data.faq.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseFaq.jsx
git commit -m "feat(ui): voeg UseCaseFaq accordion component toe"
```

---

## Task 13: Component — UseCasePartners.jsx

**Files:**
- Create: `src/components/use-case/UseCasePartners.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCasePartners.jsx
import SectionHeading from '../SectionHeading.jsx';

const ALL_PARTNERS = [
  'Saxion', 'HAN', 'Windesheim', 'Pioneering', 'Smart.af', 'TriMotion',
];

export default function UseCasePartners({ data }) {
  // partnerIds === [] → toon alle partners als fallback
  const partners = data.partnerIds.length > 0
    ? ALL_PARTNERS.filter(p => data.partnerIds.includes(p.toLowerCase()))
    : ALL_PARTNERS;

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Zij werken al met YouLab"
          title="Partners"
        />
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map(name => (
            <span
              key={name}
              className="text-[15px] font-bold tracking-tight"
              style={{ color: 'var(--foreground)', opacity: 0.28 }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCasePartners.jsx
git commit -m "feat(ui): voeg UseCasePartners component toe"
```

---

## Task 14: Component — UseCaseCta.jsx

**Files:**
- Create: `src/components/use-case/UseCaseCta.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/use-case/UseCaseCta.jsx
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

export default function UseCaseCta({ data, accentColor }) {
  const { heading, body, primaryCta, secondaryCta } = data.cta;
  return (
    <section
      className="py-24"
      style={{
        background: `linear-gradient(135deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 85%, ${accentColor}) 100%)`,
      }}
    >
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <h2
          className="font-extrabold tracking-tight leading-tight mb-5"
          style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            color: '#ffffff',
          }}
        >
          {heading} <ExampleBadge />
        </h2>
        <p
          className="leading-relaxed mb-10"
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}
        >
          {body}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="xl"
            style={{
              background: accentColor,
              color: '#fff',
              border: 'none',
            }}
            asChild
          >
            <Link to={primaryCta.href} className="no-underline">{primaryCta.label}</Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            style={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: '#ffffff',
              background: 'transparent',
            }}
            asChild
          >
            <Link to={secondaryCta.href} className="no-underline">{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseCta.jsx
git commit -m "feat(ui): voeg UseCaseCta component toe"
```

---

## Task 15: Pagina — VoorSectorPage.jsx updaten

**Files:**
- Modify: `src/pages/VoorSectorPage.jsx`

- [ ] **Step 1: Vervang de placeholder-pagina door de volledige template-controller**

```jsx
// src/pages/VoorSectorPage.jsx
import { useParams, Navigate } from 'react-router-dom';
import { useCases } from '../data/use-cases/index.js';
import Footer from '../components/Footer.jsx';
import UseCaseHero from '../components/use-case/UseCaseHero.jsx';
import UseCaseRecognition from '../components/use-case/UseCaseRecognition.jsx';
import UseCaseApplications from '../components/use-case/UseCaseApplications.jsx';
import UseCaseToolbox from '../components/use-case/UseCaseToolbox.jsx';
import UseCaseStory from '../components/use-case/UseCaseStory.jsx';
import UseCaseFaq from '../components/use-case/UseCaseFaq.jsx';
import UseCasePartners from '../components/use-case/UseCasePartners.jsx';
import UseCaseCta from '../components/use-case/UseCaseCta.jsx';

export default function VoorSectorPage() {
  const { sector } = useParams();
  const data = useCases[sector];

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  const { accentColor, label } = data;

  return (
    <main>
      <UseCaseHero    data={data} accentColor={accentColor} label={label} />
      <UseCaseRecognition data={data} accentColor={accentColor} />
      <UseCaseApplications data={data} accentColor={accentColor} />
      <UseCaseToolbox  data={data} accentColor={accentColor} />
      <UseCaseStory    data={data} />
      <UseCaseFaq      data={data} accentColor={accentColor} />
      <UseCasePartners data={data} />
      <UseCaseCta      data={data} accentColor={accentColor} />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/pages/VoorSectorPage.jsx
git commit -m "feat: vervang VoorSectorPage placeholder door volledig datagedreven template"
```

---

## Task 16: Verificatie + finale commit

- [ ] **Step 1: Start dev server**
```bash
npm run dev
```
Verwacht: geen console-errors, server op localhost:5173.

- [ ] **Step 2: Controleer alle vijf routes**
Open in browser:
- `/voor/gemeenten`
- `/voor/onderwijs`
- `/voor/mkb`
- `/voor/non-profit`
- `/voor/adviesbureaus`

Verwacht: alle pagina's laden volledig met hero, recognition (3 punten), applications (3), toolbox-chips, story (lege staat), FAQ (accordion), partners, CTA.

- [ ] **Step 3: Controleer onbekende sector**
Open `/voor/xyz`
Verwacht: redirect naar 404-pagina.

- [ ] **Step 4: Controleer ExampleBadge-gebruik**
Elke pagina moet ExampleBadge tonen op: sector-eyebrow, tagline, subclaim, recognition heading + punten, applications heading + titels, toolbox heading, FAQ heading + vragen, CTA heading.

- [ ] **Step 5: Controleer responsief op 375px**
Hero-illustratie verborgen (`hidden lg:block`), tekst en knoppen correct gestapeld.

- [ ] **Step 6: Slotcommit**
```bash
git add -A
git commit -m "feat: use-case template + vijf sectorpagina's gereed voor bespreking"
```
