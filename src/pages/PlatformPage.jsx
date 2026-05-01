import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Monitor, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ExampleBadge from '../components/ExampleBadge.jsx';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder.jsx';
import Footer from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────
   PlatformPage — /platform
   Vijf secties:
     1. PlatformHero
     2. PlatformIntro
     3. PlatformTour  (5 kapittels, wisselend links/rechts)
     4. PlatformDevices
     5. PlatformCta
───────────────────────────────────────────────────────── */

export default function PlatformPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <PlatformHero />
      <PlatformIntro />
      <PlatformTour />
      <PlatformDevices />
      <PlatformCta />
      <Footer />
    </main>
  );
}

/* ─── 1. Hero ─────────────────────────────────────────── */
function PlatformHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 'calc(68px + 80px)', paddingBottom: 0 }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -120, right: -160,
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,87,255,0.10) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: 40, left: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 relative">
        {/* Text */}
        <div className="max-w-[740px] mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
            Het platform
          </span>

          <h1
            className="text-foreground font-extrabold leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
          >
            Het YouLab-platform
          </h1>

          <p
            className="text-muted-foreground font-semibold mb-3"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
          >
            De digitale werkomgeving voor projecten die ertoe doen{' '}
            <ExampleBadge />
          </p>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-[580px] mx-auto"
            style={{ fontSize: 'clamp(15px, 1.8vw, 18px)' }}>
            YouLab is geen generieke projecttool. Het platform is gebouwd rondom een bewezen aanpak — zodat teams niet alleen dingen bijhouden, maar écht verder komen.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/kennismaken" className="no-underline flex items-center gap-2">
                Vraag platformtoegang aan <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/aanbod" className="no-underline flex items-center gap-2">
                Bekijk het aanbod <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero screenshot — hangt over de onderrand van de sectie */}
        <div
          className="rounded-3xl p-3 border border-border shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, var(--secondary) 0%, var(--muted) 100%)',
            marginBottom: -48,
          }}
        >
          <ScreenshotPlaceholder
            label="Platform-screenshot: thuisscherm"
            description="Hoofdscherm van het platform — dashboard of project-overzicht. Het 'thuisscherm' dat gebruikers als eerste zien."
            ratio="16 / 9"
            size="1920×1080"
            url="app.youlab.nl"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Spacer om de negatieve margin op te vangen */}
      <div style={{ height: 80, background: 'var(--muted)', marginTop: 48 }} />
    </section>
  );
}

/* ─── 2. Intro ────────────────────────────────────────── */
const principes = [
  {
    emoji: '🧭',
    title: 'Werkt mee, niet over je heen',
    desc: 'Het platform past zich aan aan het project — niet andersom. Teams kiezen zelf het tempo en de diepgang.',
  },
  {
    emoji: '🧩',
    title: 'Maakt complexe projecten behapbaar',
    desc: 'Door de 4O-aanpak als ruggengraat te gebruiken, wordt elk vraagstuk overzichtelijk — hoe groot of klein ook.',
  },
  {
    emoji: '🔗',
    title: 'Houdt iedereen aangehaakt',
    desc: 'Deelnemers, experts en opdrachtgevers werken in dezelfde ruimte. Geen losse bestanden, geen vergeten e-mails.',
  },
];

function PlatformIntro() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Left — waarom-verhaal */}
          <div className="max-w-[480px]">
            <SectionHeading
              eyebrow="Waarom YouLab"
              title="Gebouwd voor de complexiteit van echte projecten"
              center={false}
            />
            <p className="text-muted-foreground text-[15px] leading-relaxed mt-2">
              Veel tools zijn gebouwd voor taken en planningen. YouLab is gebouwd voor vraagstukken — de momenten waarop een team samen moet nadenken, kiezen en handelen. Dat vraagt om meer dan een to-do-lijst.
            </p>
            <p className="text-muted-foreground text-[15px] leading-relaxed mt-4">
              Daarom combineert YouLab structuur (de 4O-aanpak), werkvormen (de toolbox) en samenwerking (gedeelde ruimte) in één platform.
            </p>
          </div>

          {/* Right — drie principes */}
          <div className="flex flex-col gap-5">
            {principes.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 items-start rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-2xl shrink-0 mt-0.5">{p.emoji}</span>
                <div>
                  <p className="text-foreground font-semibold text-[15px] mb-1">
                    {p.title} <ExampleBadge />
                  </p>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. Tour ─────────────────────────────────────────── */
const kapittels = [
  {
    tag: 'Een project starten',
    title: 'Van nul naar gestructureerd project in minuten',
    body: 'Een nieuw project aanmaken is het begin van een gedeeld traject. De 4O-aanpak wordt direct als startstructuur geladen — zodat het team meteen weet waar het naartoe werkt.',
    screenshot: {
      label: 'Platform-screenshot: project aanmaken / startscherm',
      description: 'Toont hoe een nieuw project wordt aangemaakt, met de 4O-aanpak als startstructuur.',
      ratio: '4 / 3',
      size: '1200×900',
      url: 'app.youlab.nl/nieuw-project',
    },
  },
  {
    tag: 'Werken in fases',
    title: 'Elke fase heeft zijn eigen werkruimte',
    body: 'Ontmoeten, Ontdekken, Ontwikkelen, Organiseren — iedere fase is een werkruimte op zich. Deelnemers zien direct wat er in hun fase gedaan moet worden, welke tools beschikbaar zijn en hoe ver het project staat.',
    screenshot: {
      label: 'Platform-screenshot: 4O-fase gevuld',
      description: 'Een fase (bv. Ontwikkelen) met inhoud, deelnemers, tools en voortgang zichtbaar.',
      ratio: '16 / 10',
      size: '1600×1000',
      url: 'app.youlab.nl/project/fase/ontwikkelen',
    },
  },
  {
    tag: 'De toolbox in actie',
    title: 'Werkvormen die teams echt gebruiken',
    body: 'Elke tool in YouLab is interactief en ingevuld in de context van het project. Geen lege templates die offline worden afgedrukt — de inzichten blijven bewaard, zichtbaar en deelbaar.',
    screenshot: {
      label: 'Platform-screenshot: tool open in gebruik',
      description: 'Een specifieke tool wordt gebruikt — toont interactief invullen of samenwerken in een tool.',
      ratio: '4 / 3',
      size: '1200×900',
      url: 'app.youlab.nl/toolbox/empathy-map',
    },
  },
  {
    tag: 'Samenwerken met je team',
    title: 'Iedereen werkt in dezelfde ruimte',
    body: 'Teamleden, externe experts en opdrachtgevers zitten aan dezelfde digitale tafel. Activiteit is zichtbaar, feedback is contextgebonden, en niets gaat verloren in losse e-maildraden.',
    screenshot: {
      label: 'Platform-screenshot: samenwerkingsmoment',
      description: 'Meerdere gebruikers actief, comments, bewerkingen of activiteit zichtbaar.',
      ratio: '16 / 10',
      size: '1600×1000',
      url: 'app.youlab.nl/project/samenwerking',
    },
  },
  {
    tag: 'Project opleveren en delen',
    title: 'Van werken naar overdragen',
    body: 'Een afgerond project in YouLab is meer dan een archief. De uitkomsten zijn gestructureerd, deelbaar en exporteerbaar — zodat het resultaat ook buiten het platform waarde heeft.',
    screenshot: {
      label: 'Platform-screenshot: oplevering / export / deelbaar resultaat',
      description: 'Hoe een afgerond project eruit ziet — uitkomst, deelbaar, exporteerbaar.',
      ratio: '4 / 3',
      size: '1200×900',
      url: 'app.youlab.nl/project/oplevering',
    },
  },
];

function TourKapittel({ kapittel, index }) {
  const isEven = index % 2 === 0;

  const textBlock = (
    <div className="flex flex-col justify-center gap-4">
      <span className="inline-flex self-start items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-3 py-1 text-[12px] font-semibold tracking-[0.2px]">
        {kapittel.tag}
      </span>
      <h3
        className="text-foreground font-bold leading-snug"
        style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
      >
        {kapittel.title} <ExampleBadge />
      </h3>
      <p className="text-muted-foreground text-[15px] leading-relaxed">
        {kapittel.body}
      </p>
    </div>
  );

  const screenshotBlock = (
    <div
      className="rounded-2xl p-2.5 border border-border shadow-lg"
      style={{ background: 'var(--card)' }}
    >
      <ScreenshotPlaceholder
        label={kapittel.screenshot.label}
        description={kapittel.screenshot.description}
        ratio={kapittel.screenshot.ratio}
        size={kapittel.screenshot.size}
        url={kapittel.screenshot.url}
        className="rounded-xl"
      />
    </div>
  );

  return (
    <div
      className="platform-tour-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'center',
        padding: 'clamp(40px, 6vw, 72px) 0',
        borderTop: index === 0 ? 'none' : '1px solid var(--border)',
      }}
    >
      {isEven ? (
        <>
          {textBlock}
          {screenshotBlock}
        </>
      ) : (
        <>
          {screenshotBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

function PlatformTour() {
  return (
    <section className="bg-muted/20 py-4 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="pt-20 pb-8">
          <SectionHeading
            eyebrow="Platform-tour"
            title="Zo werkt YouLab in de praktijk"
            subtitle="Een rondleiding in vijf stappen — van projectstart tot oplevering."
          />
        </div>

        {kapittels.map((k, i) => (
          <TourKapittel key={i} kapittel={k} index={i} />
        ))}

        <div style={{ paddingBottom: 80 }} />
      </div>
    </section>
  );
}

/* ─── 4. Devices ──────────────────────────────────────── */
function PlatformDevices() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Overal inzetbaar"
          title="Werkt waar jij werkt"
          subtitle="YouLab is een webapplicatie die op elk scherm werkt — van groot desktopscherm tot tablet op locatie."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            alignItems: 'end',
          }}
        >
          {/* Desktop */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Monitor size={16} className="text-muted-foreground" />
              <span className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">Desktop</span>
            </div>
            <div
              className="rounded-2xl p-2.5 border border-border shadow-md"
              style={{ background: 'var(--card)' }}
            >
              <ScreenshotPlaceholder
                label="Platform: desktop-weergave"
                description="Volledige desktop-weergave van een project — toont de volle breedte en navigatie."
                ratio="16 / 10"
                size="1600×1000"
                url="app.youlab.nl/project"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Mobiel/tablet */}
          <div style={{ maxWidth: 340, margin: '0 auto' }}>
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={16} className="text-muted-foreground" />
              <span className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">Mobiel / tablet</span>
            </div>
            <div
              className="rounded-2xl p-2.5 border border-border shadow-md"
              style={{ background: 'var(--card)' }}
            >
              <ScreenshotPlaceholder
                label="Platform: mobiel / tablet-weergave"
                description="Toont dat het platform ook op kleinere schermen werkt — mobiel of tablet. Responsive navigatie en leesbare inhoud."
                ratio="9 / 16"
                size="390×844"
                url="app.youlab.nl"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-[14px] mt-10 max-w-[480px] mx-auto leading-relaxed">
          Of je nu thuis voorbereidt, op locatie werkt of snel iets nakijkt — YouLab past mee.
        </p>
      </div>
    </section>
  );
}

/* ─── 5. CTA ──────────────────────────────────────────── */
function PlatformCta() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        background: 'var(--muted)',
      }}
    >
      {/* Decorative rings */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <svg
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05 }}
          width="700" height="700" viewBox="0 0 700 700" fill="none"
        >
          <circle cx="350" cy="350" r="340" stroke="#4057ff" strokeWidth="2" />
          <circle cx="350" cy="350" r="280" stroke="#4057ff" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="200" stroke="#f59e0b" strokeWidth="1" />
        </svg>
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,87,255,0.10) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 260, height: 260, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 60%)',
        }} />
      </div>

      <div className="max-w-[640px] mx-auto px-6 text-center relative">
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
          Klaar om YouLab te ervaren?
        </span>

        <h2
          className="text-foreground font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          Begin met jouw eerste project
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-[480px] mx-auto">
          Vraag toegang aan en ontdek hoe YouLab werkt met jouw eigen vraagstuk als vertrekpunt.
        </p>

        <div className="flex flex-wrap gap-3 items-center justify-center mb-8">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/kennismaken" className="no-underline flex items-center gap-2">
              Vraag platformtoegang aan <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/aanbod" className="no-underline flex items-center gap-2">
              Bekijk het aanbod <ChevronRight size={16} />
            </Link>
          </Button>
        </div>

        <p className="text-muted-foreground text-[14px]">
          Liever met begeleiding aan de slag?{' '}
          <Link to="/aanbod" className="text-primary font-semibold no-underline hover:underline underline-offset-2">
            Bekijk het aanbod
          </Link>
        </p>
      </div>
    </section>
  );
}
