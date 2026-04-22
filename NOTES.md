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
- `/voor/:sector` → VoorSectorPage (dynamisch, alle vijf sectoren)
- `/verhalen` → VerhalenPage
- `/verhalen/:slug` → VerhaalDetailPage
- `/kennismaken` → KennismakenPage
- `/toolbox` en `/updates` → bestaande pagina's behouden via wrappers
