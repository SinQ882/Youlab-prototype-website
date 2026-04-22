import { Link } from 'react-router-dom';
import { Building, GraduationCap, Briefcase, Heart, Users } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const sectoren = [
  {
    icon: Building,
    label: 'Gemeente',
    desc: 'Participatietrajecten, gebiedsontwikkeling, beleidsvorming met bewoners.',
    to: '/voor/gemeenten',
    color: '#4057ff',
    bg: 'rgba(64,87,255,0.08)',
  },
  {
    icon: GraduationCap,
    label: 'Onderwijs',
    desc: 'Onderzoeksopdrachten, living labs, co-creatie met externe partners.',
    to: '/voor/onderwijs',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
  },
  {
    icon: Briefcase,
    label: 'MKB',
    desc: 'Verbetertrajecten, teamontwikkeling, klantonderzoek en innovatie.',
    to: '/voor/mkb',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    icon: Heart,
    label: 'Non-profit',
    desc: 'Doelgroepenwerk, strategische heroriëntatie, impact meten en sturen.',
    to: '/voor/non-profit',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  {
    icon: Users,
    label: 'Adviesbureau',
    desc: 'Klanttrajecten begeleiden, methodiek verankeren, samenwerken op afstand.',
    to: '/voor/adviesbureaus',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
];

export default function AudienceRouter() {
  return (
    <section className="bg-muted/40 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Ik werk bij een…"
          title="Kies jouw context"
          subtitle="YouLab is ingericht voor uiteenlopende organisaties. Herken je situatie en ontdek hoe YouLab voor jouw context werkt."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {sectoren.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={i}
                to={s.to}
                className="no-underline group"
              >
                <div
                  className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ borderBottom: `3px solid ${s.color}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: s.bg }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>

                  <div>
                    <h3
                      className="font-bold text-[16px] mb-1.5 transition-colors"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {s.label}
                    </h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div
                    className="mt-auto text-[13px] font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ color: s.color }}
                  >
                    Meer over {s.label} →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
