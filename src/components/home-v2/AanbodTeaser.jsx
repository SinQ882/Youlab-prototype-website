import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const cards = [
  {
    id: 'platform',
    title: 'Platform',
    duration: 'Doorlopend',
    price: '€ 15 / gebruiker / mnd',
    priceNote: '€ 10 voor onderwijs & non-profit',
    tagline: 'Zelfstandig aan de slag met de YouLab-aanpak en alle designtools.',
    cta: { label: 'Vraag platformtoegang aan', href: '/kennismaken' },
    isPlatform: true,
    accent: '#4057ff',
  },
  {
    id: 'kickstart',
    title: 'Kickstart',
    duration: 'Dagdeel',
    price: '€ 2.000',
    priceNote: 'Totaalbedrag, geen verrassingen',
    tagline: 'Ervaar de ontwerpende aanpak in één sessie met je team.',
    cta: { label: 'Plan een Kickstart', href: '/kennismaken' },
    isPlatform: false,
    accent: '#10b981',
  },
  {
    id: 'ontwerpsprint',
    title: 'Ontwerpsprint',
    duration: '3 maanden',
    price: '€ 12.500',
    priceNote: 'Incl. 4 Kickstarts + 6 mnd platform',
    tagline: 'Doorloop de volledige 4O-aanpak en test oplossingen met gebruikers.',
    cta: { label: 'Plan een Ontwerpsprint', href: '/kennismaken' },
    isPlatform: false,
    accent: '#f59e0b',
  },
  {
    id: 'complex',
    title: 'Complexe Uitdaging',
    duration: 'Op maat',
    price: 'Vanaf € 20.000',
    priceNote: 'In gesprek over scope',
    tagline: 'Duurzame verandering aan structurele patronen, samen met partners.',
    cta: { label: 'Plan een gesprek', href: '/kennismaken' },
    isPlatform: false,
    accent: '#7c3aed',
  },
];

export default function AanbodTeaser() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Het aanbod"
          title={
            <>
              Vier manieren om met YouLab te werken{' '}
              <ExampleBadge />
            </>
          }
          subtitle="Kom je er zelf niet uit of heb je net even dat eerste duwtje nodig? Dan bieden we ook trajecten op locatie om samen een vraagstuk op te pakken."
          center
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}
        >
          {cards.map(card => (
            <TeaserCard key={card.id} card={card} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/aanbod" className="no-underline flex items-center gap-2">
              Bekijk alle opties op de aanbod-pagina <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TeaserCard({ card }) {
  const { title, duration, price, priceNote, tagline, cta, isPlatform, accent } = card;

  return (
    <div
      className="rounded-2xl border flex flex-col"
      style={{
        borderColor: isPlatform ? `${accent}40` : 'var(--border)',
        background: isPlatform ? `linear-gradient(145deg, #eef2ff 0%, #e8ecff 100%)` : 'var(--card)',
        padding: 24,
        gap: 16,
      }}
    >
      {/* Top strip accent */}
      <div
        style={{
          height: 3,
          borderRadius: 99,
          background: accent,
          width: 40,
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: '2px 10px',
              borderRadius: 99,
              background: `${accent}15`,
              color: accent,
              border: `1px solid ${accent}30`,
            }}
          >
            {duration}
          </span>
        </div>
        <h3
          className="text-foreground font-extrabold"
          style={{ fontSize: 18, marginTop: 6 }}
        >
          {title}
        </h3>
      </div>

      {/* Tagline */}
      <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.55, flexGrow: 1 }}>
        {tagline}
      </p>

      {/* Price */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
        <div className="text-foreground font-extrabold" style={{ fontSize: 16 }}>
          {price}
        </div>
        <div className="text-muted-foreground" style={{ fontSize: 12, marginTop: 2 }}>
          {priceNote} <ExampleBadge />
        </div>
      </div>

      {/* CTA */}
      <Link
        to={cta.href}
        className="no-underline inline-flex items-center gap-1.5 font-semibold text-[13px] transition-all hover:gap-2.5"
        style={{ color: accent }}
      >
        {cta.label} <ArrowRight size={13} />
      </Link>
    </div>
  );
}
