# YouLab Prototype Website — Instructies voor Claude Code

## Stack

- **React 19** + **Vite** — geen React Router, navigatie via eigen `navigate(page)` functie in `App.jsx`
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **shadcn/ui** componenten in `src/components/ui/`
- **Lucide React** voor iconen

## Projectstructuur

```
src/
  App.jsx                  # Hoofdcomponent: routing, dark mode, scroll-state
  components/
    HomePage.jsx           # Samengestelde homepage (importeert alle secties)
    Nav.jsx                # Navigatiebalk (fixed, scrolled-state)
    HeroSection.jsx
    LogosSection.jsx       # "Vertrouwd door" partnerbalk
    ImpactSection.jsx      # Impact-verhalen (vervangt PainSection)
    ApproachSection.jsx    # 4-stappen aanpak (desktop grid + mobile swiper)
    FeaturesSection.jsx    # Platform features als outcomes
    ScenarioSection.jsx    # Concrete scenario's per doelgroep
    FaqSection.jsx
    CtaSection.jsx
    Footer.jsx
    Mockups.jsx            # MockBoard, MockCanvas, MockChat, MockUsers
    ui/                    # shadcn/ui primitives (button, card, badge)
    ui.jsx                 # Gedeelde helpers: Section, PillBadge
    ToolboxPage.jsx
    UpdatesPage.jsx
    UpdateDetailPage.jsx
    AnimatedBackground.jsx
  lib/
    utils.js               # cn() helper
index.html                 # Vite entry point
```

## Navigatie

Er is geen React Router. Navigatie werkt via `navigate(page, id?)` in `App.jsx`:

```jsx
navigate('home')
navigate('toolbox')
navigate('updates')
navigate('update-detail', updateId)
```

Geef `navigate` als prop door aan componenten die ermee moeten navigeren.

## Lokale ontwikkeling

```bash
npm install
npm run dev      # Start dev server op http://localhost:5173
npm run build    # Bouw naar dist/
npm run preview  # Preview van de build
```

## Deployment naar GitHub Pages

### Hoe het werkt

GitHub Pages serveert de **`staging` branch**. Die branch bevat uitsluitend de **gebouwde bestanden** (`dist/`), niet de broncode.

De deployment flow is:

```
Push naar feature branch
        ↓
GitHub Actions (.github/workflows/deploy.yml)
        ↓
npm run build  →  dist/
        ↓
peaceiris/actions-gh-pages pusht dist/ naar staging
        ↓
GitHub Pages serveert staging → live website
```

### Welke branches triggeren een deploy

Zie `.github/workflows/deploy.yml`. Momenteel:

- `claude/execute-brief-steps-Wejma`
- `claude/rebuild-youlab-website-Fvpbk`
- `main`

**Voeg een nieuwe feature branch toe aan de `branches` lijst als je wil dat pushes daarvandaan ook deployen.**

### Staging bevat geen broncode

Na elke succesvolle deploy overschrijft de workflow `staging` met alleen de gebouwde bestanden. Dat is normaal. De broncode staat op de feature branch.

**Push nooit handmatig broncode naar `staging`** — dat overschrijft de gebouwde bestanden en GitHub Pages serveert dan de bronbestanden, wat resulteert in een "Laden..." melding.

### Veelvoorkomend probleem: "Laden..." op GitHub Pages

Oorzaak: GitHub Pages serveert de bron-`index.html` (met `src="/src/main.jsx"`) in plaats van de gebouwde `index.html`.

Dit gebeurt als:
1. De feature branch waarop je werkt niet in de `branches` lijst staat in `deploy.yml` — voeg hem toe
2. Broncode handmatig naar `staging` is gepushed — wacht op de volgende workflow-run of trigger handmatig via GitHub > Actions > "Run workflow"
3. De workflow nog niet klaar is — wacht ~2 minuten en ververs

### Handmatig een deploy triggeren

Ga naar GitHub > Actions > "Deploy to GitHub Pages" > "Run workflow" en kies de juiste branch.

## Regels voor content

Dit platform is bedoeld voor impact en waardecreatie, niet voor sales. Houd je aan:

- **Geen verzonnen statistieken** (geen "500+ teams", "12k+ gebruikers", "4.8/5 sterren")
- **Geen nep-reviews of quotes** (geen quotes zonder echte bron)
- **Features beschrijven als outcomes** ("Weet altijd waar je project staat", niet "Projectbord met structuur")
- **CTA's zijn drempelverlagend**, niet pushy ("Ontdek hoe het werkt", niet "Plan een gratis demo")
- **De partnerbalk (LogosSection) mag blijven** — Saxion, HAN, Windesheim zijn echte partners

## Technische aandachtspunten

- `index.html` gebruikt `./favicon.svg` (relatief pad) — **niet** `/favicon.svg`, dat faalt op GitHub Pages subdirectory's
- `vite.config.js` heeft `base: './'` — nodig voor correcte asset-paden op GitHub Pages
- De `approach-desktop` / `approach-mobile` CSS classes in `ApproachSection` regelen desktop/mobile weergave via `index.css`
- Donkere modus wordt beheerd via `dark` class op `<html>` en `localStorage`
