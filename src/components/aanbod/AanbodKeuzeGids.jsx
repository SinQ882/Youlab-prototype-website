import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const vragen = [
  {
    vraag: 'Hebben jullie al een concrete vraag of uitdaging?',
    toelichting: 'Geen concrete vraag, maar wel nieuwsgierig? Een Kickstart laat je YouLab ervaren met een vraag uit je eigen organisatie — zonder dat je je vastlegt op meer.',
    advies: [
      { label: 'Nog geen concrete vraag', tip: '→ Kickstart', accent: '#10b981', href: '/kennismaken' },
      { label: 'Concrete vraag, willen leren', tip: '→ Ontwerpsprint', accent: '#f59e0b', href: '/kennismaken' },
      { label: 'Structurele uitdaging', tip: '→ Complexe Uitdaging', accent: '#7c3aed', href: '/kennismaken' },
    ],
  },
  {
    vraag: 'Hoeveel tijd kunnen jullie nu vrijmaken?',
    toelichting: 'De betrokkenheid verschilt per aanbodsvorm. Een Kickstart vraagt een dagdeel; een Ontwerpsprint vraagt commitment over drie maanden.',
    advies: [
      { label: 'Een dagdeel', tip: '→ Kickstart', accent: '#10b981', href: '/kennismaken' },
      { label: 'Enkele maanden', tip: '→ Ontwerpsprint', accent: '#f59e0b', href: '/kennismaken' },
      { label: 'Liever zelf bepalen', tip: '→ Platform', accent: '#4057ff', href: '/kennismaken' },
    ],
  },
  {
    vraag: 'Werken jullie alleen of met meerdere partners?',
    toelichting: 'Bij Complexe Uitdagingen is samenwerking met externe kennispartners en eindgebruikers een belangrijk onderdeel van het proces.',
    advies: [
      { label: 'Intern team', tip: '→ Platform of Kickstart', accent: '#4057ff', href: '/kennismaken' },
      { label: 'Met meerdere partners', tip: '→ Complexe Uitdaging', accent: '#7c3aed', href: '/kennismaken' },
    ],
  },
];

export default function AanbodKeuzeGids() {
  return (
    <section className="py-20" style={{ background: 'var(--muted)' }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Keuzehulp"
          title={<>Welke past bij jullie? <ExampleBadge /></>}
          subtitle="Drie vragen die helpen bepalen welk aanbod het beste aansluit."
          center
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {vragen.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-card"
              style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span
                  style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--secondary)', color: 'var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 800,
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="text-foreground font-bold leading-snug" style={{ fontSize: 15 }}>
                  {v.vraag} <ExampleBadge />
                </h3>
              </div>

              <p className="text-muted-foreground" style={{ fontSize: 13, lineHeight: 1.6 }}>
                {v.toelichting} <ExampleBadge />
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {v.advies.map((a, j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 12px', borderRadius: 10,
                      background: `${a.accent}0d`, border: `1px solid ${a.accent}25`,
                    }}
                  >
                    <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{a.label}</span>
                    <Link
                      to={a.href}
                      className="no-underline font-semibold"
                      style={{ fontSize: 12, color: a.accent }}
                    >
                      {a.tip}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground" style={{ fontSize: 14 }}>
          Twijfel je nog?{' '}
          <Link to="/kennismaken" className="no-underline font-semibold text-primary inline-flex items-center gap-1">
            Plan een vrijblijvend gesprek <ArrowRight size={13} />
          </Link>
        </p>
      </div>
    </section>
  );
}
