import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ScreenshotPlaceholder from '../ScreenshotPlaceholder.jsx';

export default function PlatformShowcase() {
  return (
    <section className="bg-muted/30 py-24 border-y border-border overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Heading */}
        <SectionHeading
          eyebrow="Het platform"
          title="Een kijkje in YouLab"
          subtitle="YouLab brengt jouw projecten samen in één werkomgeving — van eerste idee tot oplevering."
        />

        {/* ── Hero screenshot — full width ── */}
        <div
          className="rounded-3xl p-3 border border-border shadow-2xl mb-12"
          style={{
            background:
              'linear-gradient(145deg, var(--secondary) 0%, var(--muted) 100%)',
          }}
        >
          <ScreenshotPlaceholder
            label="Platform-screenshot: dashboard"
            description="Toont overzicht van actieve projecten, recente activiteit, snelle toegang tot 4O-fases. Anonimiseer projectnamen."
            ratio="16 / 10"
            size="1600×1000"
            url="app.youlab.nl/dashboard"
            className="rounded-xl"
          />
        </div>

        {/* ── Asymmetrisch duo: tekst links + screenshot rechts ── */}
        <div
          className="platform-showcase-duo"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 40,
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          {/* Text block */}
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-3 py-1 text-[12px] font-semibold tracking-[0.2px] mb-3"
              >
                Werken in fases
              </span>
              <h3
                className="text-foreground font-bold leading-snug mb-3"
                style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
              >
                De 4O-aanpak in de praktijk
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Elke fase — Ontmoeten, Ontdekken, Ontwikkelen, Organiseren — heeft zijn eigen werkruimte. Deelnemers zien direct waar het project staat en wat er van hen verwacht wordt.
              </p>
            </div>
          </div>

          {/* Screenshot */}
          <div
            className="rounded-2xl p-2.5 border border-border shadow-lg"
            style={{ background: 'var(--card)' }}
          >
            <ScreenshotPlaceholder
              label="Platform-screenshot: 4O-aanpak in actie"
              description="Een fase (bv. Ontdekken) gevuld met inhoud, tools zichtbaar, voortgang zichtbaar."
              ratio="4 / 3"
              size="1200×900"
              url="app.youlab.nl/project/fase/ontdekken"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* ── Tweede duo: screenshot links + tekst rechts ── */}
        <div
          className="platform-showcase-duo"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: 40,
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          {/* Screenshot */}
          <div
            className="rounded-2xl p-2.5 border border-border shadow-lg"
            style={{ background: 'var(--card)' }}
          >
            <ScreenshotPlaceholder
              label="Platform-screenshot: toolbox in gebruik"
              description="Een tool open, bezig met invullen, samenwerking zichtbaar."
              ratio="4 / 3"
              size="1200×900"
              url="app.youlab.nl/toolbox/empathy-map"
              className="rounded-xl"
            />
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-3 py-1 text-[12px] font-semibold tracking-[0.2px] mb-3"
              >
                Toolbox
              </span>
              <h3
                className="text-foreground font-bold leading-snug mb-3"
                style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
              >
                Werkvormen die teams verder brengen
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Van Empathy Map tot Actieplan — elke tool is gebouwd voor echte samenwerking. Niet alleen invullen, maar samen begrijpen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 font-semibold text-[15px] no-underline transition-all group"
            style={{ color: '#4057ff' }}
          >
            Bekijk het volledige platform
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
