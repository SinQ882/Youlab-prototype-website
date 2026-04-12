import { PillBadge, Section } from './ui.jsx';

const steps = [
  {
    n: '01',
    title: 'Ontmoeten',
    desc: 'Breng in beeld wie er betrokken zijn en wat het probleem is. Wie zijn de stakeholders? Wat speelt er?',
    emoji: '🤝',
    color: '#4361EE',
    bg: '#EEF2FF',
  },
  {
    n: '02',
    title: 'Ontdekken',
    desc: 'Onderzoek de situatie en vind de echte oorzaken. Interviews, empathie, systeemdenken.',
    emoji: '🔍',
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    n: '03',
    title: 'Ontwikkelen',
    desc: 'Bedenk, prototype en test mogelijke oplossingen. Van idee naar concreet concept.',
    emoji: '💡',
    color: '#10B981',
    bg: '#F0FDF4',
  },
  {
    n: '04',
    title: 'Organiseren',
    desc: 'Maak een plan om de oplossing in te voeren. Taken, verantwoordelijken en deadlines.',
    emoji: '🚀',
    color: '#EF4444',
    bg: '#FFF1F2',
  },
];

export default function ApproachSection() {
  return (
    <Section bg="#F8FAFF" id="aanpak">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 64px' }}>
        <PillBadge>De aanpak</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Een bewezen aanpak in vier stappen
        </h2>
        <p style={{ fontSize: 16, color: '#64748B', marginTop: 12, lineHeight: 1.6 }}>
          Van probleem naar oplossing, met structuur die werkt voor elk team.
        </p>
      </div>

      {/* Timeline container */}
      <div style={{ position: 'relative' }}>
        {/* Connecting line — desktop only */}
        <div className="timeline-line" style={{
          position: 'absolute',
          top: 30,
          left: 'calc(12.5% + 10px)',
          right: 'calc(12.5% + 10px)',
          height: 2,
          background: 'linear-gradient(90deg, #4361EE, #F59E0B, #10B981, #EF4444)',
          opacity: 0.25,
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative', textAlign: 'center' }}>
              {/* Step circle */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: s.bg,
                border: `3px solid ${s.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                position: 'relative',
                zIndex: 1,
                fontSize: 24,
                boxShadow: `0 0 0 6px #F8FAFF`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                {s.emoji}
                {/* Step number badge */}
                <div style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: s.color,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #F8FAFF',
                }}>{s.n}</div>
              </div>

              {/* Card */}
              <div style={{
                background: '#fff',
                borderRadius: 16,
                padding: '24px 20px',
                border: '1px solid #E8EDF5',
                borderTop: `3px solid ${s.color}`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ display: 'inline-block', background: s.bg, color: s.color, fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6, marginBottom: 10 }}>
                  Fase {s.n}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B0B3B', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
