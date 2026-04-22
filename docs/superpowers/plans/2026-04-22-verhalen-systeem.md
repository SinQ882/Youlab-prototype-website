# Verhalensysteem Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw een datagedreven verhalensysteem (lijst + detail) met twee voorbeeldverhalen en koppel het aan de homepage StoryTeaser en sectorpagina UseCaseStory.

**Architecture:** Data-first: twee verhaalbestanden exporteren een gestandaardiseerde structuur, `index.js` biedt `getBySlug`/`getBySector`/`getRelated` helpers. Pagina's zijn thin controllers die data ophalen en doorgeven aan pure presentatie-componenten in `src/components/story/`.

**Tech Stack:** React 19, React Router v7, Tailwind CSS 4, Lucide React, bestaande Button/SectionHeading/ExampleBadge/Badge-componenten.

---

## File Map

| Actie   | Pad | Verantwoordelijkheid |
|---------|-----|----------------------|
| Create | `src/data/stories/_template.js` | Gedocumenteerde structuur |
| Create | `src/data/stories/westdal-wijkvernieuwing.js` | Verhaal Gemeente Westdal |
| Create | `src/data/stories/noordwijk-onderzoeksgroep.js` | Verhaal Hogeschool Noordwijk |
| Create | `src/data/stories/index.js` | `stories[]`, `getBySlug()`, `getBySector()`, `getRelated()` |
| Create | `src/components/story/StoryCard.jsx` | Lijstkaart |
| Create | `src/components/story/StoryHero.jsx` | Detail hero |
| Create | `src/components/story/StoryContext.jsx` | Context prose |
| Create | `src/components/story/StoryApproach.jsx` | Aanpak: fases + tools + prose |
| Create | `src/components/story/StoryResult.jsx` | Resultaat + evidence grid |
| Create | `src/components/story/StoryQuote.jsx` | Quote met avatar |
| Create | `src/components/story/StoryRelated.jsx` | 2 gerelateerde verhalen |
| Modify | `src/pages/VerhalenPage.jsx` | Vervang placeholder → list + filter + CTA |
| Modify | `src/pages/VerhaalDetailPage.jsx` | Vervang placeholder → detail long-read |
| Modify | `src/components/StoryTeaser.jsx` | Verbind met echte data |
| Modify | `src/components/use-case/UseCaseStory.jsx` | Toon verhaalkaart als storySlug gevuld |
| Modify | `src/data/use-cases/gemeenten.js` | `storySlug: 'westdal-wijkvernieuwing'` |
| Modify | `src/data/use-cases/onderwijs.js` | `storySlug: 'noordwijk-onderzoeksgroep'` |

---

## Task 1: Data — _template.js + index.js skelet

**Files:**
- Create: `src/data/stories/_template.js`
- Create: `src/data/stories/index.js`

- [ ] **Step 1: Maak _template.js**

```js
// src/data/stories/_template.js
/**
 * Gedocumenteerde structuur voor een projectverhaal.
 * Kopieer dit als startpunt voor een nieuw verhaal.
 * Nieuw verhaal toevoegen: datafile aanmaken + importeren in index.js
 */
export const storyTemplate = {
  slug: "",                     // url-slug, bijv. 'westdal-wijkvernieuwing'
  title: "",                    // volledige titel
  oneLineResult: "",            // bijv. "Van vastgelopen plan naar gedragen aanpak in 4 weken"
  sector: "",                   // 'gemeenten' | 'onderwijs' | 'mkb' | 'non-profit' | 'adviesbureaus'
  publishedAt: null,            // ISO date string bijv. "2026-03-15"
  featured: false,              // true = getoond in StoryTeaser op homepage

  hero: {
    image: null,                // pad naar afbeelding of null voor emoji-fallback
    imageAlt: "",
    emoji: "📋",               // fallback emoji als image null is
    gradientFrom: "",           // CSS kleur, bijv. 'rgba(64,87,255,0.18)'
    gradientTo: "",             // CSS kleur, bijv. 'rgba(64,87,255,0.04)'
  },

  context: {
    organization: "",           // fictieve naam, markeer met ExampleBadge
    challenge: "",              // prose 150-300 woorden
  },

  approach: {
    phases: [],                 // subset van ['ontmoeten','ontdekken','ontwikkelen','organiseren']
    tools: [],                  // tool.id waarden uit src/data/tools.js
    narrative: "",              // prose 150-300 woorden
  },

  result: {
    outcome: "",                // prose 150-300 woorden
    evidence: [                 // 2-4 items
      { label: "", value: "" },
    ],
  },

  quote: {
    text: "",
    author: "",                 // fictieve naam
    role: "",
    organization: "",
    image: null,                // null = toon initialen-avatar
  },
};
```

- [ ] **Step 2: Maak index.js skelet (wordt uitgebreid na Tasks 2-3)**

```js
// src/data/stories/index.js
import westdalWijkvernieuwing from './westdal-wijkvernieuwing.js';
import noordwijkOnderzoeksgroep from './noordwijk-onderzoeksgroep.js';

export const stories = [
  westdalWijkvernieuwing,
  noordwijkOnderzoeksgroep,
];

/** Zoek verhaal op slug, of undefined als niet gevonden */
export function getBySlug(slug) {
  return stories.find(s => s.slug === slug);
}

/** Alle verhalen van een bepaalde sector */
export function getBySector(sector) {
  return stories.filter(s => s.sector === sector);
}

/** Tot 2 andere verhalen (voor StoryRelated) — voorkeur andere sector */
export function getRelated(currentSlug, limit = 2) {
  const current = getBySlug(currentSlug);
  const others = stories.filter(s => s.slug !== currentSlug);
  // Sorteer: andere sector eerst
  const otherSector = others.filter(s => s.sector !== current?.sector);
  const sameSector  = others.filter(s => s.sector === current?.sector);
  return [...otherSector, ...sameSector].slice(0, limit);
}
```

- [ ] **Step 3: Commit skelet**
```bash
git add src/data/stories/_template.js src/data/stories/index.js
git commit -m "feat(data): voeg verhalen datastructuur en index skelet toe"
```

---

## Task 2: Data — westdal-wijkvernieuwing.js

**Files:**
- Create: `src/data/stories/westdal-wijkvernieuwing.js`

- [ ] **Step 1: Schrijf volledig verhaal**

```js
// src/data/stories/westdal-wijkvernieuwing.js
export default {
  slug: 'westdal-wijkvernieuwing',
  title: 'Van vier mappen inspraak naar één gedragen uitvoeringsagenda',
  oneLineResult: 'Van vastgelopen participatietraject naar gedragen aanpak in 4 weken',
  sector: 'gemeenten',
  publishedAt: '2026-03-10',
  featured: true,

  hero: {
    image: null,
    imageAlt: 'Bewoners en professionals in werksessie',
    emoji: '🏘️',
    gradientFrom: 'rgba(64,87,255,0.18)',
    gradientTo: 'rgba(64,87,255,0.04)',
  },

  context: {
    organization: 'Gemeente Westdal',
    challenge: `De Gemeente Westdal stond voor een lastige opgave. In de wijk Meerzicht — een naoorlogse buurt met een mix van sociale huurwoningen, eengezinswoningen en een sterk vergrijzende bevolking — moest een masterplan voor wijkvernieuwing worden omgezet in een concreet uitvoeringsplan. Het probleem: drie jaar lang waren er gesprekken gevoerd met bewoners, corporatie en welzijnsorganisaties, maar elke partij had een ander beeld van wat er moest gebeuren.

De gemeente had documenten en notulen in overvloed. Wat ontbrak was een gedeeld vertrekpunt. De wijkmanager omschreef het treffend: "We hadden vier mappen vol aan inspraak, maar geen enkel moment waarop iedereen hetzelfde begreep." Het vertrouwen van bewoners in het proces was geslonken. De corporatie wachtte op groen licht. Het welzijnswerk voelde zich buitenspel gezet.

YouLab werd ingeschakeld om in vier weken, via intensieve werksessies, van dit kluwer van belangen en perspectieven tot een gedragen aanpak te komen — met alle partijen aan tafel, niet in volgorde.`,
  },

  approach: {
    phases: ['ontmoeten', 'ontdekken', 'ontwikkelen'],
    tools: ['5w1h', 'systeemmap', 'empathy-map', 'actieplan'],
    narrative: `De eerste sessie gebruikte de 5W1H-methode om het probleemveld gezamenlijk te doordenken. Niet om consensus te forceren, maar om de werkelijke knelpunten scherp te krijgen. Waar de gemeente dacht dat het probleem 'communicatie' was, bleek het voor bewoners 'niet gezien worden bij de echte keuzes' — een fundamenteel ander startpunt.

In de tweede fase werd een Systeemmap opgebouwd. Corporatiemedewerkers, wijkmanagers, bewonersvertegenwoordigers en welzijnswerkers zaten samen aan tafel en tekenden de verbanden tussen speelruimte, groenbeheer, parkeeroverlast en sociale veiligheid. Voor het eerst werd zichtbaar hoe beslissingen in het ene domein onbedoelde gevolgen hadden in het andere.

De derde fase richtte zich op het vertalen van inzichten naar concrete maatregelen. Met de Empathy Map werden de meest herkenbare ervaringen van bewoners als vertrekpunt genomen. Vier werkgroepen formuleerden elk twee 'kwartiermakers' — kleine, snel zichtbare maatregelen die vertrouwen zouden opbouwen. Het Actieplan legde vast wie wat wanneer zou oppakken, met namen en data.`,
  },

  result: {
    outcome: `Vier weken na de start van het traject presenteerde de gemeente een uitvoeringsagenda die door alle betrokken partijen is ondertekend. Wat voorheen in langdurige vergaderrondes vastliep, werd in drie intensieve werksessies opgelost — niet omdat de belangen minder verschilden, maar omdat YouLab een gedeelde taal en een gedeeld beeld opleverde.

De acht kwartiermakers zijn inmiddels opgepakt: van een tijdelijke speelruimte op een braakliggend perceel tot een wekelijkse ontmoetingsochtend in het buurthuis. Klein, maar zichtbaar. Bewoners zien dat er beweging is. De corporatie weet waar ze aan toe is. Het welzijnswerk heeft een formele plek in de uitvoeringsstructuur gekregen.

Voor de gemeente was de grootste opbrengst niet het document, maar de manier van werken. "We doen dit nu zo met elk nieuw participatietraject. Niet omdat het moet, maar omdat het werkt." De aanpak is inmiddels intern gedeeld met andere wijkteams als best practice.`,
    evidence: [
      { label: 'Deelnemende bewoners', value: '38 bewoners' },
      { label: 'Partijen aan tafel', value: '7 organisaties' },
      { label: 'Doorlooptijd', value: '4 weken' },
      { label: 'Kwartiermakers gestart', value: '8 van 8' },
    ],
  },

  quote: {
    text: 'We hadden vier mappen vol aan inspraak, maar geen enkel moment waarop iedereen hetzelfde begreep. YouLab gaf ons dat moment.',
    author: 'Fatima el-Amin',
    role: 'Wijkmanager',
    organization: 'Gemeente Westdal',
    image: null,
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/stories/westdal-wijkvernieuwing.js
git commit -m "feat(data): voeg voorbeeldverhaal Westdal Wijkvernieuwing toe"
```

---

## Task 3: Data — noordwijk-onderzoeksgroep.js

**Files:**
- Create: `src/data/stories/noordwijk-onderzoeksgroep.js`

- [ ] **Step 1: Schrijf volledig verhaal**

```js
// src/data/stories/noordwijk-onderzoeksgroep.js
export default {
  slug: 'noordwijk-onderzoeksgroep',
  title: 'Studenten die voor het eerst het gevoel hadden dat hun werk er écht toe deed',
  oneLineResult: 'Van chaotisch leertraject naar eindproduct dat direct geïmplementeerd werd',
  sector: 'onderwijs',
  publishedAt: '2026-02-18',
  featured: false,

  hero: {
    image: null,
    imageAlt: 'Studenten en opdrachtgever in gezamenlijke sessie',
    emoji: '🔬',
    gradientFrom: 'rgba(124,58,237,0.18)',
    gradientTo: 'rgba(124,58,237,0.04)',
  },

  context: {
    organization: 'Hogeschool Noordwijk',
    challenge: `De opleiding Sociaal Werk van Hogeschool Noordwijk biedt elk jaar een Learning Lab aan — een twintigweeks traject waarbij een groep derdejaarsstudenten een echt vraagstuk van een externe opdrachtgever onderzoekt en uitwerkt. Klinkt goed op papier, maar in de praktijk verliep het moeizaam.

Studenten stonden na de kick-off regelmatig met lege handen: wat moesten ze nu precies doen? De opdrachtgever — een regionale welzijnsorganisatie die wilde weten hoe ze jongvolwassenen beter kon bereiken voor haar activiteitenprogramma's — had hoge verwachtingen maar weinig tijd voor begeleiding. En de drie begeleidende docenten hadden elk een ander beeld van wat een goed eindproduct eruitzag.

Halverwege het vorige traject waren drie van de vijf subgroepen volledig vastgelopen. Eén groep had weken besteed aan een enquête die achteraf de verkeerde doelgroep bevroeg. Een andere groep wachtte vijf weken op een terugkoppeling die nooit formeel was ingepland. Hogeschool Noordwijk schakelde YouLab in voor het volgende cohort, met een helder doel: meer structuur, minder coördinatieproblemen.`,
  },

  approach: {
    phases: ['ontdekken', 'ontwikkelen', 'organiseren'],
    tools: ['customer-journey', 'prototype-canvas', 'actieplan'],
    narrative: `YouLab werd ingezet als gezamenlijke projectwerkruimte voor studenten, docenten én opdrachtgever. Elke fase werd opgedeeld in herkenbare stappen, met duidelijke deliverables.

In de Ontdekkingsfase maakten de vijf subgroepen elk een Customer Journey van een andere doelgroeptypologie. Niet als oefening, maar als echt onderzoeksinstrument. De journeys werden gepresenteerd aan de opdrachtgever, die voor het eerst een gedifferentieerd beeld kreeg van de jongvolwassenen die ze probeerden te bereiken. De reactie was direct: "Dit is precies wat we misten."

In de Ontwikkelfase werkte elke subgroep een Prototype Canvas uit. Studenten bouwden vijf concrete concepten, elk gericht op een ander segment. De tussentijdse reviews met de opdrachtgever waren ingepland als vaste momenten in YouLab — niet afhankelijk van mailwisselingen maar verankerd in het projectritme.

In de Organiseerfase kwamen de vijf concepten samen in één Actieplan met aanbevelingen, prioritering en randvoorwaarden. Omdat de opdrachtgever zo nauw betrokken was geweest, was het eindproduct halverwege al goedgekeurd — de eindpresentatie was een bevestiging, geen verrassing.`,
  },

  result: {
    outcome: `Het Learning Lab van dit cohort leverde iets op wat zelden gebeurt bij studentenprojecten: een eindproduct dat direct in gebruik is genomen.

De welzijnsorganisatie implementeerde twee van de vijf concepten al tijdens het lopende programmajaar. Een derde concept werd doorgezet als pilotproject voor het volgende jaar, met twee studenten die als stagiair betrokken bleven.

Voor de hogeschool was de winst minstens zo groot. Docenten rapporteerden een significante afname van coördinatieproblemen. Studenten gaven in hun evaluatie aan dat ze voor het eerst het gevoel hadden dat hun werk er écht toe deed — niet als oefening, maar als bijdrage.

Het succes zit niet in de tools zelf, maar in de gezamenlijke structuur. Iedereen werkte vanuit hetzelfde beeld van het project. Dat voorkomt misverstanden, verkleint de kans op afhaken, en houdt de energie in het project tot aan de oplevering.`,
    evidence: [
      { label: 'Onderzochte doelgroepsegmenten', value: '5 segmenten' },
      { label: 'Betrokken stakeholders', value: '12 stakeholders' },
      { label: 'Concepten geïmplementeerd', value: '2 van 5' },
      { label: 'Studenten doorgestroomd als stagiair', value: '2 studenten' },
    ],
  },

  quote: {
    text: 'Voor het eerst hadden studenten het gevoel dat hun werk er écht toe deed — niet als oefening, maar als bijdrage.',
    author: 'Dirk van Haaften',
    role: 'Projectcoördinator Learning Lab',
    organization: 'Hogeschool Noordwijk',
    image: null,
  },
};
```

- [ ] **Step 2: Commit**
```bash
git add src/data/stories/noordwijk-onderzoeksgroep.js
git commit -m "feat(data): voeg voorbeeldverhaal Noordwijk Onderzoeksgroep toe"
```

---

## Task 4: Data — sector-slugs bijwerken

**Files:**
- Modify: `src/data/use-cases/gemeenten.js` (regel met `storySlug: null`)
- Modify: `src/data/use-cases/onderwijs.js` (regel met `storySlug: null`)

- [ ] **Step 1: Update gemeenten.js**

Verander regel `storySlug: null,` naar:
```js
storySlug: 'westdal-wijkvernieuwing',
```

- [ ] **Step 2: Update onderwijs.js**

Verander regel `storySlug: null,` naar:
```js
storySlug: 'noordwijk-onderzoeksgroep',
```

- [ ] **Step 3: Commit**
```bash
git add src/data/use-cases/gemeenten.js src/data/use-cases/onderwijs.js
git commit -m "feat(data): koppel storySlug aan gemeenten en onderwijs sectordata"
```

---

## Task 5: Component — StoryCard.jsx

**Files:**
- Create: `src/components/story/StoryCard.jsx`

- [ ] **Step 1: Schrijf component**

```jsx
// src/components/story/StoryCard.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ExampleBadge from '../ExampleBadge.jsx';

const SECTOR_COLORS = {
  gemeenten:     { color: '#4057ff', bg: 'rgba(64,87,255,0.1)'  },
  onderwijs:     { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
  mkb:           { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  'non-profit':  { color: '#ef4444', bg: 'rgba(239,68,68,0.1)'  },
  adviesbureaus: { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
};

const SECTOR_LABELS = {
  gemeenten: 'Gemeenten', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureaus',
};

export default function StoryCard({ story }) {
  const { slug, title, oneLineResult, sector, hero } = story;
  const sc = SECTOR_COLORS[sector] ?? { color: 'var(--primary)', bg: 'var(--secondary)' };

  return (
    <Link to={`/verhalen/${slug}`} className="no-underline group">
      <div className="rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
        {/* Visuele band */}
        <div
          className="relative flex items-center justify-center"
          style={{
            minHeight: 160,
            background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientTo})`,
          }}
        >
          <span style={{ fontSize: 52 }} aria-hidden="true">{hero.emoji}</span>
          {/* Sector-tag */}
          <span
            className="absolute bottom-3 left-4 text-[11px] font-bold px-3 py-1 rounded-full"
            style={{ background: sc.bg, color: sc.color, border: `1px solid ${sc.color}30` }}
          >
            {SECTOR_LABELS[sector] ?? sector}
          </span>
        </div>

        {/* Tekst */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <p className="text-muted-foreground text-[12px] font-semibold leading-snug">
            {oneLineResult}&nbsp;<ExampleBadge />
          </p>
          <h3 className="text-foreground font-bold text-[16px] leading-snug line-clamp-3">
            {title}&nbsp;<ExampleBadge />
          </h3>
          <div
            className="mt-auto flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2"
            style={{ color: sc.color }}
          >
            Lees het verhaal <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/story/StoryCard.jsx
git commit -m "feat(ui): voeg StoryCard component toe"
```

---

## Task 6: Components — StoryHero, StoryContext, StoryApproach

**Files:**
- Create: `src/components/story/StoryHero.jsx`
- Create: `src/components/story/StoryContext.jsx`
- Create: `src/components/story/StoryApproach.jsx`

- [ ] **Step 1: Schrijf StoryHero.jsx**

```jsx
// src/components/story/StoryHero.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExampleBadge from '../ExampleBadge.jsx';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};
const SECTOR_LABELS = {
  gemeenten: 'Gemeenten', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureaus',
};

export default function StoryHero({ story }) {
  const { title, oneLineResult, sector, hero } = story;
  const accentColor = SECTOR_COLORS[sector] ?? 'var(--primary)';

  return (
    <section
      style={{
        paddingTop: 68,
        background: `linear-gradient(160deg, ${hero.gradientFrom} 0%, ${hero.gradientTo} 60%, var(--background) 100%)`,
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 pt-8 pb-4">
        <Link
          to="/verhalen"
          className="no-underline inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Alle verhalen
        </Link>
      </div>

      {/* Visuele band */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          minHeight: 280,
          background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientTo})`,
        }}
      >
        <span style={{ fontSize: 80 }} aria-hidden="true">{hero.emoji}</span>
      </div>

      {/* Titel-blok */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[12px] font-bold px-3 py-1.5 rounded-full"
            style={{ background: `${accentColor}14`, color: accentColor, border: `1px solid ${accentColor}30` }}
          >
            {SECTOR_LABELS[sector] ?? sector}
          </span>
          <ExampleBadge />
        </div>
        <p className="text-muted-foreground text-[14px] font-semibold mb-3 leading-snug">
          {oneLineResult}&nbsp;<ExampleBadge />
        </p>
        <h1
          className="text-foreground font-extrabold tracking-tight leading-[1.15]"
          style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
        >
          {title}&nbsp;<ExampleBadge />
        </h1>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Schrijf StoryContext.jsx**

```jsx
// src/components/story/StoryContext.jsx
import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryContext({ story }) {
  const { context } = story;
  return (
    <section className="bg-background py-16">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-6"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          De context&nbsp;<ExampleBadge />
        </h2>
        <p
          className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-2"
        >
          Organisatie
        </p>
        <p className="font-semibold text-foreground mb-6">
          {context.organization}&nbsp;<ExampleBadge />
        </p>
        {context.challenge.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground mb-4 last:mb-0"
            style={{ fontSize: 16, lineHeight: 1.8 }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Schrijf StoryApproach.jsx**

```jsx
// src/components/story/StoryApproach.jsx
import { Link } from 'react-router-dom';
import ExampleBadge from '../ExampleBadge.jsx';
import { tools } from '../../data/tools.js';

const PHASE_META = {
  ontmoeten:   { label: 'Ontmoeten',   color: '#4361EE', bg: '#EEF2FF' },
  ontdekken:   { label: 'Ontdekken',   color: '#F59E0B', bg: '#FEF3C7' },
  ontwikkelen: { label: 'Ontwikkelen', color: '#10B981', bg: '#F0FDF4' },
  organiseren: { label: 'Organiseren', color: '#EF4444', bg: '#FFF1F2' },
};

export default function StoryApproach({ story, accentColor }) {
  const { approach } = story;
  const usedTools = approach.tools
    .map(id => tools.find(t => t.id === id))
    .filter(Boolean);

  return (
    <section className="bg-muted/30 py-16 border-y border-border">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-8"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          De aanpak&nbsp;<ExampleBadge />
        </h2>

        {/* Fases */}
        <div className="flex flex-wrap gap-2 mb-6">
          {approach.phases.map(phase => {
            const m = PHASE_META[phase];
            return (
              <span
                key={phase}
                className="px-3 py-1.5 rounded-full text-[12px] font-bold"
                style={{ background: m?.bg, color: m?.color }}
              >
                {m?.label ?? phase}
              </span>
            );
          })}
        </div>

        {/* Tools */}
        {usedTools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {usedTools.map(tool => (
              <Link
                key={tool.id}
                to={`/toolbox#${tool.id}`}
                className="no-underline"
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold border transition-colors hover:opacity-80"
                  style={{
                    borderColor: `${accentColor}40`,
                    color: accentColor,
                    background: `${accentColor}0a`,
                  }}
                >
                  {tool.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Narrative */}
        {approach.narrative.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground mb-4 last:mb-0"
            style={{ fontSize: 16, lineHeight: 1.8 }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**
```bash
git add src/components/story/StoryHero.jsx src/components/story/StoryContext.jsx src/components/story/StoryApproach.jsx
git commit -m "feat(ui): voeg StoryHero, StoryContext, StoryApproach componenten toe"
```

---

## Task 7: Components — StoryResult, StoryQuote, StoryRelated

**Files:**
- Create: `src/components/story/StoryResult.jsx`
- Create: `src/components/story/StoryQuote.jsx`
- Create: `src/components/story/StoryRelated.jsx`

- [ ] **Step 1: Schrijf StoryResult.jsx**

```jsx
// src/components/story/StoryResult.jsx
import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryResult({ story, accentColor }) {
  const { result } = story;
  return (
    <section className="bg-background py-16">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-6"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          Het resultaat&nbsp;<ExampleBadge />
        </h2>

        {/* Outcome prose */}
        {result.outcome.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground mb-4 last:mb-8"
            style={{ fontSize: 16, lineHeight: 1.8 }}
          >
            {para}
          </p>
        ))}

        {/* Evidence grid */}
        <div className="grid grid-cols-2 gap-4">
          {result.evidence.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1"
              style={{ borderTop: `3px solid ${accentColor}` }}
            >
              <div
                className="font-extrabold text-foreground"
                style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
              >
                {item.value}&nbsp;<ExampleBadge />
              </div>
              <div className="text-muted-foreground text-[13px] leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Schrijf StoryQuote.jsx**

```jsx
// src/components/story/StoryQuote.jsx
import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryQuote({ story, accentColor }) {
  const { quote } = story;

  const initials = quote.author
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      className="py-16 border-y border-border"
      style={{ background: `${accentColor}08` }}
    >
      <div className="max-w-[680px] mx-auto px-6">
        {/* Aanhalingsteken decoratie */}
        <div
          className="font-extrabold leading-none mb-4 select-none"
          style={{ fontSize: 80, color: accentColor, opacity: 0.2, lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </div>

        <blockquote
          className="text-foreground font-semibold italic mb-8"
          style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', lineHeight: 1.6 }}
        >
          "{quote.text}"&nbsp;<ExampleBadge />
        </blockquote>

        {/* Auteur */}
        <div className="flex items-center gap-4">
          {quote.image ? (
            <img
              src={quote.image}
              alt={quote.author}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-[14px]"
              style={{ background: accentColor }}
            >
              {initials}
            </div>
          )}
          <div>
            <div className="font-bold text-foreground text-[15px]">
              {quote.author}&nbsp;<ExampleBadge />
            </div>
            <div className="text-muted-foreground text-[13px]">
              {quote.role} — {quote.organization}&nbsp;<ExampleBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Schrijf StoryRelated.jsx**

```jsx
// src/components/story/StoryRelated.jsx
import SectionHeading from '../SectionHeading.jsx';
import StoryCard from './StoryCard.jsx';

export default function StoryRelated({ related }) {
  return (
    <section className="bg-muted/30 py-20 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Meer verhalen"
          title="Ook interessant"
          center={false}
        />
        {related.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center text-muted-foreground text-[15px]"
            style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
          >
            Binnenkort meer projectverhalen.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {related.map(s => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**
```bash
git add src/components/story/StoryResult.jsx src/components/story/StoryQuote.jsx src/components/story/StoryRelated.jsx
git commit -m "feat(ui): voeg StoryResult, StoryQuote, StoryRelated componenten toe"
```

---

## Task 8: Pagina — VerhalenPage.jsx

**Files:**
- Modify: `src/pages/VerhalenPage.jsx`

- [ ] **Step 1: Vervang pagina**

```jsx
// src/pages/VerhalenPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories/index.js';
import Footer from '../components/Footer.jsx';
import StoryCard from '../components/story/StoryCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ExampleBadge from '../components/ExampleBadge.jsx';
import { Button } from '../components/ui/button.jsx';

const SECTOR_FILTERS = [
  { slug: null,            label: 'Alles' },
  { slug: 'gemeenten',     label: 'Gemeenten' },
  { slug: 'onderwijs',     label: 'Onderwijs' },
  { slug: 'mkb',           label: 'MKB' },
  { slug: 'non-profit',    label: 'Non-profit' },
  { slug: 'adviesbureaus', label: 'Adviesbureaus' },
];

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function VerhalenPage() {
  const [activeSector, setActiveSector] = useState(null);

  const filtered = activeSector
    ? stories.filter(s => s.sector === activeSector)
    : stories;

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section className="bg-background py-20">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-6">
            Projectverhalen&nbsp;<ExampleBadge />
          </span>
          <h1
            className="text-foreground font-extrabold tracking-tight mb-5"
            style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}
          >
            Wat teams bereiken met YouLab
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Echte projecten, herkenbare uitdagingen. Hier verzamelen we verhalen van teams die met YouLab werkten — per sector, fase en type vraagstuk.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-background pb-24">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Sector-filterknoppen */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {SECTOR_FILTERS.map(f => {
              const isActive = activeSector === f.slug;
              const color = f.slug ? SECTOR_COLORS[f.slug] : 'var(--primary)';
              return (
                <button
                  key={f.slug ?? 'all'}
                  onClick={() => setActiveSector(f.slug)}
                  className="rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-150 cursor-pointer"
                  style={{
                    background: isActive ? (f.slug ? `${color}14` : 'var(--secondary)') : 'transparent',
                    borderColor: isActive ? (f.slug ? `${color}50` : 'var(--primary)') : 'var(--border)',
                    color: isActive ? (f.slug ? color : 'var(--primary)') : 'var(--muted-foreground)',
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Verhalen-grid of lege staat */}
          {filtered.length === 0 ? (
            <div
              className="rounded-2xl p-12 text-center text-muted-foreground text-[15px] max-w-[500px] mx-auto"
              style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
            >
              Binnenkort delen we hier verhalen uit deze sector.
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
              {filtered.map(s => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA onderaan */}
      <section className="bg-muted/40 py-16 border-t border-border">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Heb jij een verhaal over een project met YouLab? Deel het met ons.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/kennismaken" className="no-underline">Vertel het ons →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/pages/VerhalenPage.jsx
git commit -m "feat: vervang VerhalenPage placeholder door volledig datagedreven lijst"
```

---

## Task 9: Pagina — VerhaalDetailPage.jsx

**Files:**
- Modify: `src/pages/VerhaalDetailPage.jsx`

- [ ] **Step 1: Vervang pagina**

```jsx
// src/pages/VerhaalDetailPage.jsx
import { useParams, Navigate } from 'react-router-dom';
import { getBySlug, getRelated } from '../data/stories/index.js';
import Footer from '../components/Footer.jsx';
import StoryHero from '../components/story/StoryHero.jsx';
import StoryContext from '../components/story/StoryContext.jsx';
import StoryApproach from '../components/story/StoryApproach.jsx';
import StoryResult from '../components/story/StoryResult.jsx';
import StoryQuote from '../components/story/StoryQuote.jsx';
import StoryRelated from '../components/story/StoryRelated.jsx';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function VerhaalDetailPage() {
  const { slug } = useParams();
  const story = getBySlug(slug);

  if (!story) {
    return <Navigate to="/verhalen" replace />;
  }

  const accentColor = SECTOR_COLORS[story.sector] ?? 'var(--primary)';
  const related = getRelated(slug);

  return (
    <main>
      <StoryHero     story={story} />
      <StoryContext  story={story} />
      <StoryApproach story={story} accentColor={accentColor} />
      <StoryResult   story={story} accentColor={accentColor} />
      <StoryQuote    story={story} accentColor={accentColor} />
      <StoryRelated  related={related} />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/pages/VerhaalDetailPage.jsx
git commit -m "feat: vervang VerhaalDetailPage placeholder door datagedreven long-read"
```

---

## Task 10: Update StoryTeaser (homepage)

**Files:**
- Modify: `src/components/StoryTeaser.jsx`

- [ ] **Step 1: Verbind met echte data**

```jsx
// src/components/StoryTeaser.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';
import { stories } from '../data/stories/index.js';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};
const SECTOR_LABELS = {
  gemeenten: 'Gemeente', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureau',
};

export default function StoryTeaser() {
  const featured = stories.find(s => s.featured) ?? stories[0];
  if (!featured) return null;

  const color = SECTOR_COLORS[featured.sector] ?? 'var(--primary)';

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Uitgelicht verhaal"
          title="Wat teams vertellen"
          center
        />

        <div
          className="rounded-2xl border border-border bg-card overflow-hidden"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Visual side */}
          <div
            style={{
              background: `linear-gradient(135deg, ${featured.hero.gradientFrom}, ${featured.hero.gradientTo})`,
              minHeight: 280,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>{featured.hero.emoji}</div>
              <div
                style={{
                  display: 'inline-block',
                  background: `${color}18`,
                  color,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 100,
                  border: `1px solid ${color}30`,
                }}
              >
                {SECTOR_LABELS[featured.sector] ?? featured.sector}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="p-10 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[13px] font-semibold text-muted-foreground">
                {featured.context.organization}
              </span>
              <ExampleBadge />
            </div>

            <h3
              className="text-foreground font-bold leading-snug"
              style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
            >
              {featured.title}&nbsp;<ExampleBadge />
            </h3>

            <p className="text-muted-foreground text-[15px] leading-relaxed">
              {featured.oneLineResult}&nbsp;<ExampleBadge />
            </p>

            <Link
              to={`/verhalen/${featured.slug}`}
              className="no-underline inline-flex items-center gap-2 font-semibold text-[15px] mt-2 transition-all hover:gap-3"
              style={{ color }}
            >
              Lees het verhaal <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/verhalen"
            className="no-underline text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle projectverhalen →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/StoryTeaser.jsx
git commit -m "feat: verbind StoryTeaser met echte verhalen-data"
```

---

## Task 11: Update UseCaseStory (sectorpagina's)

**Files:**
- Modify: `src/components/use-case/UseCaseStory.jsx`

- [ ] **Step 1: Toon verhaalskaart als storySlug gevuld**

```jsx
// src/components/use-case/UseCaseStory.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';
import { getBySlug } from '../../data/stories/index.js';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function UseCaseStory({ data }) {
  const { storySlug, label } = data;
  const story = storySlug ? getBySlug(storySlug) : null;
  const accentColor = SECTOR_COLORS[data.sector] ?? 'var(--primary)';

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Projectverhaal"
          title="Uit de praktijk"
        />

        {story ? (
          <div
            className="rounded-2xl border border-border bg-card overflow-hidden"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {/* Visual side */}
            <div
              style={{
                background: `linear-gradient(135deg, ${story.hero.gradientFrom}, ${story.hero.gradientTo})`,
                minHeight: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 52 }} aria-hidden="true">{story.hero.emoji}</span>
            </div>

            {/* Text side */}
            <div className="p-8 flex flex-col gap-4 justify-center">
              <p className="text-muted-foreground text-[12px] font-semibold">
                {story.context.organization}&nbsp;<ExampleBadge />
              </p>
              <h3 className="text-foreground font-bold text-[18px] leading-snug">
                {story.title}&nbsp;<ExampleBadge />
              </h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                {story.oneLineResult}
              </p>
              <Link
                to={`/verhalen/${story.slug}`}
                className="no-underline inline-flex items-center gap-1.5 text-[14px] font-semibold mt-1 transition-all hover:gap-2.5"
                style={{ color: accentColor }}
              >
                Lees het verhaal <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="max-w-[600px] mx-auto text-center rounded-2xl p-12"
            style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true">📖</div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Binnenkort delen we hier een projectverhaal uit de sector <strong>{label}</strong>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**
```bash
git add src/components/use-case/UseCaseStory.jsx
git commit -m "feat: verbind UseCaseStory met echte verhalen-data via storySlug"
```

---

## Task 12: Verificatie + documenten + slotcommit

- [ ] **Step 1: Start dev server**
```bash
npm run dev
```
Verwacht: geen fouten in console, server op localhost:517x.

- [ ] **Step 2: Controleer routes**
Open in browser:
- `/verhalen` — grid met 2 kaarten, sector-filters werken
- `/verhalen/westdal-wijkvernieuwing` — volledig verhaal met alle secties
- `/verhalen/noordwijk-onderzoeksgroep` — volledig verhaal met alle secties
- `/verhalen/xyz` — redirect naar `/verhalen`
- `/` — StoryTeaser toont Westdal (featured: true)
- `/voor/gemeenten` — UseCaseStory toont Westdal kaart
- `/voor/onderwijs` — UseCaseStory toont Noordwijk kaart
- `/voor/mkb` — UseCaseStory toont lege staat

- [ ] **Step 3: Bouw productie-versie**
```bash
npm run build
```
Verwacht: ✓ gebouwd zonder fouten.

- [ ] **Step 4: Update NOTES.md**
Voeg sectie "Verhalensysteem" toe met design-keuzes.

- [ ] **Step 5: Commit alles**
```bash
git add NOTES.md docs/
git commit -m "docs: voeg NOTES en spec/plan toe voor verhalensysteem"
```
