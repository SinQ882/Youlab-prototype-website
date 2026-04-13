import { Building2, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';

const audiences = [
  {
    Icon: Building2,
    title: 'Gemeenten',
    desc: 'Werk aan leefbaarheid, duurzaamheid of participatie met alle betrokken partijen.',
    quote: 'Eindelijk overzicht over wie wat doet.',
    author: 'Projectleider, Gemeente',
    color: '#4361EE',
    bg: '#EEF2FF',
  },
  {
    Icon: GraduationCap,
    title: 'Onderwijs',
    desc: 'Studenten werken samen met echte Challenges. Docenten begeleiden op afstand.',
    quote: 'Studenten werken veel zelfstandiger.',
    author: 'Docent, Saxion Hogeschool',
    color: '#EC4899',
    bg: '#FCE7F3',
  },
  {
    Icon: Briefcase,
    title: 'MKB & Bedrijven',
    desc: 'Pak verbetervraagstukken gestructureerd aan. Van probleem naar plan in vier stappen.',
    quote: null,
    author: null,
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    Icon: UserCheck,
    title: "ZZP'ers & Adviseurs",
    desc: 'Gebruik YouLab in je eigen dienstverlening. Breng structuur en professionele werkvormen.',
    quote: null,
    author: null,
    color: '#10B981',
    bg: '#F0FDF4',
  },
];

export default function AudienceSection() {
  return (
    <Section id="voor-wie">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
        <PillBadge>Voor wie?</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Gemaakt voor teams die samen verbeteren
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {audiences.map((a, i) => {
          const { Icon } = a;
          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.88)',
              borderRadius: 20,
              padding: '32px 28px',
              border: '1px solid #E8EDF5',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(67,97,238,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon size={24} color={a.color} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B0B3B', marginBottom: 10 }}>{a.title}</h3>
              <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6, margin: '0 0 20px' }}>{a.desc}</p>
              {a.quote && (
                <div style={{ borderLeft: `3px solid ${a.color}`, paddingLeft: 14 }}>
                  <p style={{ fontSize: 14, fontStyle: 'italic', color: '#0B0B3B', fontWeight: 500, marginBottom: 4 }}>"{a.quote}"</p>
                  <p style={{ fontSize: 12, color: '#94A3B8' }}>{a.author}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
