import { PillBadge, Section } from './ui.jsx';

const steps = [
  { n: '01', title: 'Ontmoeten', desc: 'Breng in beeld wie er betrokken zijn en wat het probleem is. Wie zijn de stakeholders? Wat speelt er?', emoji: '🤝', color: '#4361EE', bg: '#EEF2FF' },
  { n: '02', title: 'Ontdekken', desc: 'Onderzoek de situatie en vind de echte oorzaken. Interviews, empathie, systeemdenken.', emoji: '🔍', color: '#F59E0B', bg: '#FEF3C7' },
  { n: '03', title: 'Ontwikkelen', desc: 'Bedenk, prototype en test mogelijke oplossingen. Van idee naar concreet concept.', emoji: '💡', color: '#10B981', bg: '#F0FDF4' },
  { n: '04', title: 'Organiseren', desc: 'Maak een plan om de oplossing in te voeren. Taken, verantwoordelijken en deadlines.', emoji: '🚀', color: '#EF4444', bg: '#FFF1F2' },
];

export default function ApproachSection() {
  return (
    <Section bg="#F8FAFF" id="aanpak">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
        <PillBadge>De aanpak</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Een bewezen aanpak in vier stappen
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 20,
            padding: '32px 28px',
            border: '1px solid #E8EDF5',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}20`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Step number */}
            <div style={{ position: 'absolute', top: 20, right: 24, fontSize: 48, fontWeight: 900, color: s.color, opacity: 0.08, lineHeight: 1 }}>{s.n}</div>
            {/* Icon */}
            <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{s.emoji}</div>
            {/* Phase badge */}
            <span style={{ display: 'inline-block', background: s.bg, color: s.color, fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 6, marginBottom: 12 }}>{s.title}</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B0B3B', marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            {/* Connector line on lg */}
            {i < 3 && (
              <div style={{ position: 'absolute', top: '50%', right: -10, width: 20, height: 2, background: `linear-gradient(90deg, ${s.color}40, transparent)`, display: 'none' }} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
