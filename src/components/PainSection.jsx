import { MessageSquareOff, TrendingDown, RefreshCw, GitMerge, ArrowRight } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';

const painPoints = [
  {
    Icon: MessageSquareOff,
    title: 'Vergaderingen zonder resultaat',
    text: 'Iedereen praat, niemand weet wie wat doet. De volgende vergadering begint op nul.',
    color: '#4361EE',
    bg: '#EEF2FF',
  },
  {
    Icon: TrendingDown,
    title: 'Projecten die vastlopen',
    text: 'Na een paar weken weet niemand de status. Enthousiasme daalt, deadlines schuiven op.',
    color: '#EF4444',
    bg: '#FFF1F2',
  },
  {
    Icon: RefreshCw,
    title: 'Het wiel opnieuw uitvinden',
    text: 'Geen overzicht van wat al onderzocht is. Ieder project begint bij nul.',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    Icon: GitMerge,
    title: 'Samenwerking is lastig',
    text: 'Losse e-mails, aparte documenten, geen gedeeld overzicht. Wie heeft de laatste versie?',
    color: '#10B981',
    bg: '#F0FDF4',
  },
];

export default function PainSection() {
  return (
    <Section bg="rgba(248,250,255,0.80)">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
        <PillBadge>Herken je dit?</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, lineHeight: 1.15, letterSpacing: -0.8 }}>
          Projecten die moeizaam lopen kosten tijd, geld en energie
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {painPoints.map((p, i) => {
          const { Icon } = p;
          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.88)',
              borderRadius: 20,
              padding: '28px 24px',
              border: '1px solid #E8EDF5',
              borderLeft: `4px solid ${p.color}`,
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${p.color}18`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={20} color={p.color} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6, margin: 0 }}>{p.text}</p>
            </div>
          );
        })}
      </div>

      {/* Solution callout */}
      <div style={{
        marginTop: 32,
        padding: '28px 36px',
        background: 'linear-gradient(135deg, #0B0B3B 0%, #1a1a6c 100%)',
        borderRadius: 20,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
      }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.5, maxWidth: 560 }}>
          Dit kan anders.{' '}
          <span style={{ color: '#7B68EE' }}>YouLab</span>
          {' '}geeft je team structuur, werkvormen en overzicht – op één plek.
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #4361EE, #7B68EE)',
          border: 'none',
          cursor: 'pointer',
          padding: '12px 24px',
          borderRadius: 10,
          fontSize: 15,
          fontWeight: 700,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(67,97,238,0.4)',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Plan een demo <ArrowRight size={15} />
        </button>
      </div>
    </Section>
  );
}
