import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const items = [
  {
    id: 'platform',
    title: 'Platform',
    duration: 'Doorlopend',
    accent: '#4057ff',
    gradient: 'var(--secondary)',
    intro: 'De digitale werkomgeving voor teams die zelfstandig aan de slag willen met de 4O-aanpak. Geen begeleiding nodig — jij bepaalt het tempo.',
    features: [
      'Digitale werkomgeving voor je hele team',
      'Alle designtools inbegrepen',
      'Werken met de 4O-aanpak',
      'Samenwerken met meerdere teamleden',
    ],
    price: '€ 15 / gebruiker / maand',
    priceNote: '€ 10 / gebruiker / maand voor onderwijs en non-profit',
    primaryCta: { label: 'Vraag platformtoegang aan', href: '/kennismaken' },
    secondaryCta: { label: 'Bekijk het platform', href: '/platform' },
  },
];

const sessies = [
  {
    id: 'kickstart',
    title: 'Kickstart',
    duration: 'Dagdeel',
    accent: '#10b981',
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
    intro: 'Ervaar de ontwerpende aanpak van YouLab in één intensieve sessie met je team. Laagdrempelig kennismaken met een vraag uit je eigen organisatie.',
    features: [
      'Ontwerpende aanpak ervaren',
      'Kennismaken met de designtools',
      'Werken met een eigen uitdaging',
      'Lunch of borrel inbegrepen',
      '2 facilitators (TriMotion)',
      '5–8 deelnemers (meest effectief)',
    ],
    price: '€ 2.000',
    priceNote: 'Totaalbedrag — geen verrassingen',
    primaryCta: { label: 'Plan een Kickstart', href: '/kennismaken' },
    secondaryCta: { label: 'Stel een vraag', href: '/kennismaken' },
  },
  {
    id: 'ontwerpsprint',
    title: 'Ontwerpsprint',
    duration: '3 maanden',
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fde68a 60%, #fef3c7 100%)',
    intro: 'Doorloop de volledige 4O-aanpak met je team. Vier Kickstarts, één per fase, en zes maanden platformtoegang inbegrepen.',
    features: [
      '4 Kickstarts (één per fase) incl. lunch',
      '6 maanden platformtoegang',
      'Volledige 4O-aanpak doorlopen',
      'Oplossingen testen met gebruikers',
      '2 facilitators (TriMotion + ambassadeur)',
      '5–8 deelnemers (meest effectief)',
    ],
    price: '€ 12.500',
    priceNote: 'Inclusief 4 Kickstarts en 6 maanden platformtoegang',
    primaryCta: { label: 'Plan een Ontwerpsprint', href: '/kennismaken' },
    secondaryCta: { label: 'Stel een vraag', href: '/kennismaken' },
  },
  {
    id: 'complex',
    title: 'Complexe Uitdaging',
    duration: 'Op maat',
    accent: '#7c3aed',
    gradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
    intro: 'Voor structurele, duurzame verandering. Samen met kennispartners en eindgebruikers aan patronen die écht anders moeten.',
    features: [
      'Samenwerken met kennispartners en eindgebruikers',
      'Doorlopen van de 4O-aanpak',
      'Uitgebreide ondersteuning tijdens het proces',
      'Gebruik van platform en designtools',
      '2 facilitators (TriMotion + ambassadeur)',
      'Scope en doorlooptijd in overleg',
    ],
    price: 'Vanaf € 20.000',
    priceNote: 'In gesprek over scope en doorlooptijd',
    primaryCta: { label: 'Plan een gesprek', href: '/kennismaken' },
    secondaryCta: { label: 'Meer informatie', href: '/kennismaken' },
  },
];

export default function AanbodCards() {
  const platform = items[0];

  return (
    <section className="py-20" style={{ background: 'var(--muted)' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Vier opties"
          title="Kies wat bij jullie past"
          subtitle="Zelfstandig starten of direct met begeleiding — het aanbod schaalt mee met je behoefte."
          center
        />

        {/* Platform — brede kaart bovenaan */}
        <div
          className="rounded-2xl border mb-6 overflow-hidden"
          style={{ borderColor: `${platform.accent}35`, background: platform.gradient }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* Left */}
            <div style={{ padding: '40px 40px 40px 40px' }}>
              <DurationBadge label={platform.duration} accent={platform.accent} />
              <h3 className="text-foreground font-extrabold mt-3 mb-3" style={{ fontSize: 28 }}>
                {platform.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 15 }}>
                {platform.intro} <ExampleBadge />
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {platform.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                    <Check size={14} style={{ color: platform.accent, flexShrink: 0 }} />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div
              style={{
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderLeft: '1px solid rgba(64,87,255,0.15)',
                gap: 20,
              }}
            >
              <div>
                <div className="text-foreground font-extrabold" style={{ fontSize: 22 }}>
                  {platform.price} <ExampleBadge />
                </div>
                <div className="text-muted-foreground" style={{ fontSize: 13, marginTop: 4 }}>
                  {platform.priceNote} <ExampleBadge />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Button variant="gradient" size="lg" asChild>
                  <Link to={platform.primaryCta.href} className="no-underline flex items-center gap-2">
                    {platform.primaryCta.label} <ArrowRight size={15} />
                  </Link>
                </Button>
                <Button variant="outline" size="default" asChild>
                  <Link to={platform.secondaryCta.href} className="no-underline">
                    {platform.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Drie sessie-kaarten */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {sessies.map(item => (
            <SessieCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SessieCard({ item }) {
  const { title, duration, accent, gradient, intro, features, price, priceNote, primaryCta, secondaryCta } = item;
  return (
    <div
      className="rounded-2xl border flex flex-col overflow-hidden"
      style={{ borderColor: `${accent}30`, background: 'var(--card)' }}
    >
      {/* Gradient top strip */}
      <div style={{ height: 6, background: gradient }} />

      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, flexGrow: 1 }}>
        <div>
          <DurationBadge label={duration} accent={accent} />
          <h3 className="text-foreground font-extrabold mt-3" style={{ fontSize: 20 }}>{title}</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 14 }}>
          {intro} <ExampleBadge />
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7, flexGrow: 1 }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 13 }}>
              <Check size={13} style={{ color: accent, flexShrink: 0, marginTop: 2 }} />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginTop: 4 }}>
          <div className="text-foreground font-extrabold" style={{ fontSize: 18 }}>
            {price} <ExampleBadge />
          </div>
          <div className="text-muted-foreground" style={{ fontSize: 12, marginTop: 3 }}>
            {priceNote} <ExampleBadge />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button
            size="default"
            style={{ background: accent, color: '#fff', border: 'none' }}
            asChild
          >
            <Link to={primaryCta.href} className="no-underline flex items-center gap-2">
              {primaryCta.label} <ArrowRight size={14} />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={secondaryCta.href} className="no-underline">{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function DurationBadge({ label, accent }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 99,
      background: `${accent}18`,
      color: accent,
      border: `1px solid ${accent}35`,
    }}>
      {label}
    </span>
  );
}
