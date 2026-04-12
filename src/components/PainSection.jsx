import { PillBadge, Section } from './ui.jsx';

const painPoints = [
  { emoji: '🔄', title: 'Vergaderingen zonder resultaat', text: 'Iedereen praat, niemand weet wie wat doet.' },
  { emoji: '📉', title: 'Projecten die vastlopen', text: 'Na een paar weken weet niemand de status.' },
  { emoji: '🔍', title: 'Het wiel opnieuw uitvinden', text: 'Geen overzicht van wat al onderzocht is.' },
  { emoji: '🔀', title: 'Samenwerking is lastig', text: 'Losse e-mails, geen gedeeld overzicht.' },
];

export default function PainSection() {
  return (
    <Section bg="#F8FAFF">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 48px' }}>
        <PillBadge>Herken je dit?</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, lineHeight: 1.15, letterSpacing: -0.8 }}>
          Projecten die moeizaam lopen kosten tijd, geld en energie
        </h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {painPoints.map((p, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 20,
            padding: '32px 24px',
            border: '1px solid #E8EDF5',
            flex: '1 1 220px',
            minWidth: 220,
            textAlign: 'center',
            transition: 'box-shadow 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(67,97,238,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>{p.emoji}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 8 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.55, margin: 0 }}>{p.text}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 40, padding: '24px 32px', background: '#fff', borderRadius: 20, border: '1px solid #E8EDF5' }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: '#0B0B3B', margin: 0, lineHeight: 1.5 }}>
          Dit kan anders. YouLab geeft je team structuur, werkvormen en overzicht –{' '}
          <span style={{ color: '#4361EE' }}>op één plek</span>.
        </p>
      </div>
    </Section>
  );
}
