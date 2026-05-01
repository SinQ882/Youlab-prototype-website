# Verhalensysteem — Design Spec
*Datum: 2026-04-22*

## Doel

Een werkend verhalensysteem (lijst + detail) met twee voorbeeldverhalen, gekoppeld aan homepage StoryTeaser en sectorpagina UseCaseStory. Data-first architectuur: nieuw verhaal toevoegen = één datafile + index update.

---

## Scope

- Branch: `feature/verhalen-systeem`
- Routes: `/verhalen` (list) en `/verhalen/:slug` (detail) — al aanwezig in App.jsx
- Twee verhalen: westdal-wijkvernieuwing (gemeenten), noordwijk-onderzoeksgroep (onderwijs)
- Koppelen aan: StoryTeaser (homepage), UseCaseStory (sectorpagina's), gemeenten.js, onderwijs.js

---

## Architectuur

Data-laag exporteert een map `stories` plus hulpfuncties (`getBySlug`, `getBySector`, `getRelated`). De list- en detailpagina lezen hieruit. Alle componenten zijn pure presentatie-componenten die een verhaal-object als prop ontvangen.

### Bestandenstructuur

```
src/data/stories/
  _template.js            ← gedocumenteerde structuur
  westdal-wijkvernieuwing.js
  noordwijk-onderzoeksgroep.js
  index.js                ← exporteert stories[], getBySlug(), getBySector(), getRelated()

src/components/story/
  StoryCard.jsx           ← kaart voor lijstpagina
  StoryHero.jsx           ← detail hero
  StoryContext.jsx        ← context prose
  StoryApproach.jsx       ← aanpak met 4O-fases + tools
  StoryResult.jsx         ← resultaat + evidence
  StoryQuote.jsx          ← quote met avatar
  StoryRelated.jsx        ← 2 gerelateerde verhalen

src/pages/
  VerhalenPage.jsx        ← vervang placeholder → list + filter + CTA
  VerhaalDetailPage.jsx   ← vervang placeholder → detail long-read

src/components/
  StoryTeaser.jsx         ← update: lees uit data i.p.v. hardcoded
  use-case/UseCaseStory.jsx ← update: toon verhaalskaart als storySlug gevuld

src/data/use-cases/
  gemeenten.js            ← update: storySlug: 'westdal-wijkvernieuwing'
  onderwijs.js            ← update: storySlug: 'noordwijk-onderzoeksgroep'
```

---

## Datastructuur

```js
{
  slug: "",                     // url-slug
  title: "",
  oneLineResult: "",            // "Van vastgelopen plan naar gedragen aanpak in 4 weken"
  sector: "",                   // 'gemeenten' | 'onderwijs' | 'mkb' | 'non-profit' | 'adviesbureaus'
  publishedAt: null,            // ISO date string
  featured: false,              // true = tonen in StoryTeaser op homepage
  hero: {
    image: null,
    imageAlt: "",
    emoji: "",                  // fallback-illustratie als image null is
    gradientFrom: "",           // CSS kleur voor gradient achtergrond
    gradientTo: "",
  },
  context: {
    organization: "",
    challenge: "",              // prose 150-300 woorden
  },
  approach: {
    phases: [],                 // ['ontmoeten','ontdekken','ontwikkelen','organiseren']
    tools: [],                  // tool-slugs uit Toolbox
    narrative: "",              // prose 150-300 woorden
  },
  result: {
    outcome: "",                // prose 150-300 woorden
    evidence: [
      { label: "", value: "" },
    ],
  },
  quote: {
    text: "",
    author: "",
    role: "",
    organization: "",
    image: null,
  },
}
```

**Aanvulling op template uit opdracht:** `featured` boolean (voor StoryTeaser), `hero.emoji` + gradient velden (fallback zonder afbeelding).

---

## Twee verhalen

### westdal-wijkvernieuwing (sector: gemeenten, accentColor: #4057ff)
- featured: true
- Hero-emoji: 🏘️, gradient: blauw
- Fases: ontmoeten, ontdekken, ontwikkelen
- Tools: 5w1h, systeemmap, empathy-map, actieplan
- Quote: fictieve wijkmanager "Gemeente Westdal"
- Evidence: 4 plausibele items

### noordwijk-onderzoeksgroep (sector: onderwijs, accentColor: #7c3aed)
- featured: false
- Hero-emoji: 🔬, gradient: paars
- Fases: ontdekken, ontwikkelen, organiseren
- Tools: customer-journey, prototype-canvas, actieplan
- Quote: fictieve projectcoördinator "Hogeschool Noordwijk"
- Evidence: 4 plausibele items

---

## Pagina's

### VerhalenPage (/verhalen)
1. Hero (py-24, max-w-[720px] centered): eyebrow "Projectverhalen", h1, korte intro, ExampleBadge
2. Filter-chips: sector-knoppen om op sector te filteren (useState), "Alles" als default
3. Grid (auto-fit minmax(320px, 1fr) gap-6): StoryCard per verhaal
4. Lege staat (als filter leeg oplevert): "Binnenkort delen we verhalen uit deze sector"
5. CTA onderaan: "Heb jij een verhaal? Vertel het ons" → /kennismaken

### VerhaalDetailPage (/verhalen/:slug)
1. `getBySlug(slug)` — geen match → `<Navigate to="/verhalen" replace />`
2. Volgorde secties: StoryHero → StoryContext → StoryApproach → StoryResult → StoryQuote → StoryRelated
3. Prose-breedte: `max-w-[680px] mx-auto` voor leesbaarheid
4. "← Alle verhalen" link bovenaan en onderaan

---

## Component-details

### StoryCard
- Rounded-2xl, border, bg-card, overflow-hidden
- Bovenste helft: visuele band (gradient + emoji of image), sector-tag
- Onderste helft: oneLineResult (klein, muted), title (bold), "Lees het verhaal →" link in sector-kleur
- Hover: -translate-y-1 shadow-lg

### StoryHero
- Volledige breedte achtergrond (gradient in sector-kleur)
- Max-w-[1120px] container: grote titel + oneLineResult + sector-badge + "← Alle verhalen"
- Visuele placeholder: emoji groot gecentreerd op gradient band (minHeight 320px)

### StoryContext / StoryApproach / StoryResult
- Max-w-[680px] mx-auto px-6
- Prose-stijl: leading-[1.8], fontSize 16-17, tekst in muted-foreground
- H2 section-headings in foreground, font-bold, clamp(20px, 2.5vw, 26px)

### StoryApproach uitbreiding
- Fases als badges: hergebruik fase-kleuren uit tools.js (ontmoeten=#4361EE, ontdekken=#F59E0B, ontwikkelen=#10B981, organiseren=#EF4444)
- Tools als kleine chips onder de badges (naam + link naar /toolbox#id)

### StoryResult uitbreiding  
- Evidence: 2×2 grid van statistieken/items. Elke cel: groot getal/label boven, kleine beschrijving onder, sector-kleur accent

### StoryQuote
- max-w-[680px], achtergrond muted/30 of subtiele sector-tint
- Grote aanhalingstekens (") in sector-kleur, hoog opacity
- Quote-tekst italic, groot (clamp(18px, 2vw, 22px))
- Avatar: gekleurde cirkel met initialen als `image === null`
- Author, role, organization

### StoryRelated
- "Meer projectverhalen" heading
- 2 StoryCard's naast elkaar (grid cols 2, 1 op mobiel)
- Als < 2 andere verhalen: toon zoveel als er zijn + lege-staat kaart "Binnenkort meer verhalen"

---

## Koppeling bestaande onderdelen

### StoryTeaser (homepage)
- `import { stories } from '../data/stories/index.js'`
- `const featured = stories.find(s => s.featured) ?? stories[0]`
- Render: emoji + sector-tag uit `featured.hero`, title, oneLineResult, link naar `/verhalen/${featured.slug}`
- Sector-kleur ophalen via sectorList uit use-cases/index.js

### UseCaseStory (sectorpagina)
- `import { getBySlug } from '../../data/stories/index.js'`
- Als `data.storySlug` gevuld: laad verhaal en render als mini-kaart (StoryCard variant)
- Als null: lege staat (bestaand)

### Sector-data updates
- `gemeenten.js`: `storySlug: 'westdal-wijkvernieuwing'`
- `onderwijs.js`: `storySlug: 'noordwijk-onderzoeksgroep'`

---

## Visuele principes

- **Lijstpagina**: ruime witruimte, kaarten met kleur-accenten, sector-filter als pill-buttons
- **Detailpagina**: magazine-long-read gevoel, typografie-gedreven, leesbaarheid via max-breedte prose
- **Geen stockfoto's**: emoji + gradient achtergronden als visuele band
- **4O-fases**: badges in fase-kleuren zijn visueel consistent met de rest van het design
- **Evidence**: cijferblokken als statistieken, maar met ExampleBadge erop

---

## Aannames

- `featured: true` op westdal-wijkvernieuwing → homepage StoryTeaser
- Sector-kleur voor StoryCard ophalen via inline map (`{ gemeenten: '#4057ff', ... }`) — geen import van sectorList nodig
- `getRelated(slug)` geeft alle verhalen minus het huidige, gelimiteerd tot 2
- Avatar-placeholder: initials-cirkel met sector-kleur achtergrond
- ExampleBadge op: title, oneLineResult, context, approach, result, quote — niet op structurele labels
