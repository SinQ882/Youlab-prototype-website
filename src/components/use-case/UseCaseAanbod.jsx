import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const ONDERWIJS_SECTORS = ['onderwijs', 'non-profit'];

const kaarten = [
  {
    id: 'platform',
    title: 'Platform',
    price: (sector) =>
      ONDERWIJS_SECTORS.includes(sector) ? '€ 10 / gebruiker / mnd' : '€ 15 / gebruiker / mnd',
    accent: '#4057ff',
    href: '/kennismaken',
    cta: 'Vraag platformtoegang aan',
  },
  {
    id: 'kickstart',
    title: 'Kickstart',
    price: () => '€ 2.000',
    accent: '#10b981',
    href: '/kennismaken',
    cta: 'Plan een Kickstart',
  },
  {
    id: 'ontwerpsprint',
    title: 'Ontwerpsprint',
    price: () => '€ 12.500',
    accent: '#f59e0b',
    href: '/kennismaken',
    cta: 'Plan een Ontwerpsprint',
  },
  {
    id: 'complex',
    title: 'Complexe Uitdaging',
    price: () => 'Vanaf € 20.000',
    accent: '#7c3aed',
    href: '/kennismaken',
    cta: 'Plan een gesprek',
  },
];

export default function UseCaseAanbod({ data, accentColor }) {
  const { label, sector } = data;
  const isReducedTarief = ONDERWIJS_SECTORS.includes(sector);

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Zo werken we samen"
          title={
            <>
              Zo werken we samen in {label} <ExampleBadge />
            </>
          }
          subtitle={
            isReducedTarief
              ? `YouLab biedt een gereduceerd tarief voor ${label.toLowerCase()}organisaties. Werk zelfstandig met het platform of kies een begeleid traject op locatie.`
              : `YouLab is beschikbaar als zelfstandig platform of via een begeleid traject op locatie, afgestemd op de uitdagingen in ${label.toLowerCase()}.`
          }
          center
        />

        {isReducedTarief && (
          <div
            className="rounded-xl border mb-10 max-w-[600px] mx-auto text-center"
            style={{
              padding: '14px 20px',
              background: `${accentColor}0d`,
              borderColor: `${accentColor}30`,
            }}
          >
            <span className="font-semibold" style={{ fontSize: 14, color: accentColor }}>
              ✦ Speciaal tarief voor {label.toLowerCase()}organisaties: € 10 / gebruiker / maand
            </span>
            {' '}<ExampleBadge />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {kaarten.map(k => {
            const price = k.price(sector);
            return (
              <div
                key={k.id}
                className="rounded-xl border flex flex-col"
                style={{
                  padding: 20,
                  borderColor: 'var(--border)',
                  background: 'var(--card)',
                  gap: 12,
                }}
              >
                <div style={{ height: 3, borderRadius: 99, background: k.accent, width: 32 }} />
                <h3 className="text-foreground font-bold" style={{ fontSize: 15 }}>{k.title}</h3>
                <p className="text-foreground font-extrabold" style={{ fontSize: 14 }}>
                  {price} <ExampleBadge />
                </p>
                <Link
                  to={k.href}
                  className="no-underline inline-flex items-center gap-1 font-semibold mt-auto transition-all hover:gap-2"
                  style={{ fontSize: 13, color: k.accent }}
                >
                  {k.cta} <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/aanbod" className="no-underline flex items-center gap-2">
              Bekijk het volledige aanbod <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
