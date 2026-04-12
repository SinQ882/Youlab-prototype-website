import { CheckCircle, ArrowRight } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';

const plans = [
  {
    name: 'Standaard',
    sub: 'Professionals',
    price: '€15',
    unit: '/gebruiker/mnd',
    features: ['Alle werkvormen', 'Onbeperkt projecten', 'Projectbord & planning', 'Berichten & notificaties', 'Gebruikersbeheer'],
    highlight: true,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Onderwijs',
    sub: 'Studenten & sociaal',
    price: '€10',
    unit: '/gebruiker/mnd',
    features: ['Alle werkvormen', 'Challenges', 'Projectbord & planning', 'Berichten & notificaties', 'Begeleidersfuncties'],
    highlight: false,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Expert',
    sub: 'Externe partners',
    price: 'Gratis',
    unit: 'altijd',
    features: ['Meewerken aan werkvormen', 'Taken bijdragen', 'Berichten sturen', 'Per project uitgenodigd'],
    highlight: false,
    cta: 'Meer info',
    note: 'Experts beheren geen projecten.',
  },
];

export default function PricingSection() {
  return (
    <Section bg="#F8FAFF" id="pricing">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
        <PillBadge>Transparante prijzen</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Eerlijk en eenvoudig
        </h2>
        <p style={{ fontSize: 16, color: '#64748B', marginTop: 12 }}>Per gebruiker per maand, geen verborgen kosten.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
        {plans.map((p, i) => (
          <div key={i} style={{
            background: p.highlight ? 'linear-gradient(135deg, #0B0B3B 0%, #1a1a6c 100%)' : '#fff',
            borderRadius: 24,
            padding: '36px 32px',
            border: p.highlight ? 'none' : '1px solid #E8EDF5',
            flex: '1 1 280px',
            maxWidth: 360,
            minWidth: 260,
            boxShadow: p.highlight ? '0 20px 60px rgba(67,97,238,0.25)' : 'none',
            position: 'relative',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => { if (!p.highlight) e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {p.highlight && (
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #4361EE, #7B68EE)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 100 }}>
                Meest gekozen
              </div>
            )}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: p.highlight ? 'rgba(255,255,255,0.6)' : '#64748B' }}>{p.sub}</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: p.highlight ? '#fff' : '#0B0B3B', marginBottom: 4 }}>{p.name}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 28 }}>
              <span style={{ fontSize: 42, fontWeight: 900, color: p.highlight ? '#fff' : '#0B0B3B', letterSpacing: -1.5 }}>{p.price}</span>
              <span style={{ fontSize: 14, color: p.highlight ? 'rgba(255,255,255,0.6)' : '#94A3B8' }}>{p.unit}</span>
            </div>
            <div style={{ borderTop: p.highlight ? '1px solid rgba(255,255,255,0.1)' : '1px solid #F1F5F9', paddingTop: 24, marginBottom: 28 }}>
              {p.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <CheckCircle size={16} color={p.highlight ? '#7B68EE' : '#10B981'} />
                  <span style={{ fontSize: 14, color: p.highlight ? 'rgba(255,255,255,0.85)' : '#0B0B3B', fontWeight: 500 }}>{f}</span>
                </div>
              ))}
              {p.note && (
                <p style={{ fontSize: 12, color: p.highlight ? 'rgba(255,255,255,0.4)' : '#94A3B8', marginTop: 8 }}>{p.note}</p>
              )}
            </div>
            <button style={{
              width: '100%',
              background: p.highlight ? 'linear-gradient(135deg, #4361EE, #7B68EE)' : 'transparent',
              border: p.highlight ? 'none' : '2px solid #0B0B3B',
              borderRadius: 12,
              padding: '13px 24px',
              fontSize: 15,
              fontWeight: 700,
              color: p.highlight ? '#fff' : '#0B0B3B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {p.cta} <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
