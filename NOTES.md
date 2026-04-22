# Ontwerpkeuzes nieuwe homepage

## Aanpak
Volledige vervanging van de bestaande homepage en navigatie. Backward-compatibility is niet nodig (prototype).

## Kleur & sfeer
- Primair blauw (#4057ff) behouden — herkenbaar en al aanwezig in het design system
- Accentkleur: amber (#f59e0b) als warme tegenhanger — vermijdt generieke SaaS-paars-vibes
- Hero: abstract illustratief netwerk van verbonden nodes — geen stockfoto's
- Achtergronden: lichte gradient-tints (amber/blauw/coral) ipv neutrale grijs

## Technische keuzes
- react-router-dom v6 toegevoegd voor echte URL-routing
- Bestaande ToolboxPage en UpdatesPage bewaard met wrapper-componenten die de oude `navigate` prop API nabootsen
- BrowserRouter in App.jsx — werkt perfect voor `npm run dev`; GitHub Pages deployment vereist eventueel een 404.html redirect

## Nieuwe componenten
- `ExampleBadge` — amber pastel, ✦ icoon, consistent door hele site
- `SectionHeading` — eyebrow + title + subtitle, optioneel gecentreerd
- `Nav` — react-router Link, "Voor wie" dropdown, vijf sectoren
- `HeroSection` — abstracte SVG-illustratie (netwerk), geen mockups
- `PijlersSection` — Ontdekken / Ontwerpen / Realiseren (gemarkeerd als Voorbeeld)
- `ImpactSection` — positieve framing, drie outcome-statements
- `AanpakSection` — 4O-aanpak als visuele reis, desktop grid / mobile vertical
- `ScenarioGuide` — drie scenario-kaarten (Voorbeeld), koppeling naar sectorroutering
- `AudienceRouter` — vijf sectorroutering-kaarten, centraal routing-moment
- `PartnersSection` — bestaande partners behouden
- `StoryTeaser` — uitgelicht verhaal (Voorbeeld-badge), link naar /verhalen
- `ClosingCta` — drempelverlagend, twee CTA's

## Placeholder pagina's
- `/hoe-werkt-het` → HoeWerktHetPage
- `/voor/:sector` → VoorSectorPage (dynamisch, alle vijf sectoren) — zie hieronder
- `/verhalen` → VerhalenPage
- `/verhalen/:slug` → VerhaalDetailPage
- `/kennismaken` → KennismakenPage
- `/toolbox` en `/updates` → bestaande pagina's behouden via wrappers

---

# Use-case template + vijf sectorpagina's (branch: feature/use-case-template)

## Aanpak
Data-first: vijf sector-databestanden exporteren een gestandaardiseerde structuur. `VoorSectorPage` laadt de juiste dataset via de URL-param en geeft hem door aan 8 pure presentatie-componenten. Geen hardcoded content in componenten — nieuwe sector = één datafile + index-update.

## Sector-kleurenpalet (consistent met AudienceRouter en ScenarioGuide)
- Gemeenten:     #4057ff (blauw)
- Onderwijs:     #7c3aed (paars)
- MKB:           #f59e0b (amber)
- Non-profit:    #ef4444 (rood)
- Adviesbureaus: #10b981 (groen)

## Template-secties
1. `UseCaseHero` — SVG node-network illustratie in sector-kleur, gesplitste tagline op em-dash
2. `UseCaseRecognition` — 3 herkenpunten met CheckCircle-icoon in sector-kleur
3. `UseCaseApplications` — 3 toepassingen, afwisselend links/rechts, groot fade-getal op achtergrond
4. `UseCaseToolbox` — klikbare chips naar /toolbox#[id], tool-namen opgezocht via tools.js
5. `UseCaseStory` — lege staat (storySlug === null); inrichtingsklaar voor opdracht 3
6. `UseCaseFaq` — accordion met useState per item, chevron-animatie in sector-kleur
7. `UseCasePartners` — partnerIds=[] → toont alle 6 bestaande partners (fallback)
8. `UseCaseCta` — donkere gradient achtergrond, primaire knop in sector-kleur

## Keuzes en aannames
- Hero-tagline met em-dash (—): deel vóór dash in sector-kleur, deel ná dash in foreground
- Hero-tagline zonder em-dash: volledige tagline in sector-kleur (alle sectoren behalve Onderwijs)
- `<Navigate to="/404" replace />` voor onbekende sector — werkt via `*` wildcard in App.jsx
- ExampleBadge op alle dynamische content uit data (taglines, punttitels, FAQ-vragen, CTA)
- Geen ExampleBadge op structurele lege-staat-teksten (UseCaseStory, UseCasePartners)
- Hero-illustratie verborgen op mobiel via `hidden lg:block`
- UseCaseCta gebruikt `color-mix()` voor gradient richting sector-kleur — moderne browsers
