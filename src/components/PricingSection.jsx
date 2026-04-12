import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';

const plans = [
  {
    name: 'Standaard',
    sub: 'Professionals',
    monthlyPrice: 15,
    features: ['Alle werkvormen', 'Onbeperkt projecten', 'Projectbord & planning', 'Berichten & notificaties', 'Gebruikersbeheer'],
    highlight: true,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Onderwijs',
    sub: 'Studenten & sociaal',
    monthlyPrice: 10,
    features: ['Alle werkvormen', 'Challenges', 'Projectbord & planning', 'Berichten & notificaties', 'Begeleidersfuncties'],
    highlight: false,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Expert',
    sub: 'Externe partners',
    monthlyPrice: null,
    features: ['Meewerken aan werkvormen', 'Taken bijdragen', 'Berichten sturen', 'Per project uitgenodigd'],
    highlight: false,
    cta: 'Meer info',
    note: 'Experts beheren geen projecten.',
  },
];

function formatPrice(plan, billing) {
  if (plan.monthlyPrice === null) return { price: 'Gratis', unit: 'altijd' };
  if (billing === 'annual') {
    const discounted = Math.round(plan.monthlyPrice * 0.8);
    return { price: `€${discounted}`, unit: '/gebruiker/mnd' };
  }
  return { price: `€${plan.monthlyPrice}`, unit: '/gebruiker/mnd' };
}

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly');

  return (
    <Section bg="#F8FAFF" id="pricing">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 48px' }}>
        <PillBadge>Transparante prijzen</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Eerlijk en eenvoudig
        </h2>
        <p style={{ fontSize: 16, color: '#64748B', marginTop: 12 }}>Per gebruiker per maand, geen verborgen kosten.</p>

        {/* Billing toggle */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fff', borderRadius: 12, padding: 4, border: '1px solid #E8EDF5', marginTop: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <ToggleBtn active={billing === 'monthly'} onClick={() => setBilling('monthly')}>
            Maandelijks
          </ToggleBtn>
          <ToggleBtn active={billing === 'annual'} onClick={() => setBilling('annual')}>
            Jaarlijks
            <span style={{
              marginLeft: 6,
              background: billing === 'annual' ? '#10B981' : '#F0FDF4',
              color: billing === 'annual' ? '#fff' : '#10B981',
              fontSize: 10,
              fontWeight: 700,
              padding: '2px 7px',
              borderRadius: 100,
              transition: 'all 0.2s',
            }}>
              −20%
            </span>
          </ToggleBtn>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
        {plans.map((p, i) => {
          const { price, unit } = formatPrice(p, billing);
          return (
            <div key={i} style={{
              background: p.highlight ? 'linear-gradient(160deg, #0B0B3B 0%, #1a1a6c 100%)' : '#fff',
              borderRadius: 24,
              padding: '36px 32px',
              border: p.highlight ? 'none' : '1px solid #E8EDF5',
              flex: '1 1 280px',
              maxWidth: 360,
              minWidth: 260,
              boxShadow: p.highlight ? '0 24px 64px rgba(67,97,238,0.28)' : '0 2px 12px rgba(0,0,0,0.04)',
              position: 'relative',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { if (!p.highlight) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(67,97,238,0.12)'; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = p.highlight ? '0 24px 64px rgba(67,97,238,0.28)' : '0 2px 12px rgba(0,0,0,0.04)'; }}
            >
              {p.highlight && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #4361EE, #7B68EE)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 100, whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(67,97,238,0.4)' }}>
                  Meest gekozen
                </div>
              )}

              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: p.highlight ? 'rgba(255,255,255,0.5)' : '#94A3B8' }}>{p.sub}</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: p.highlight ? '#fff' : '#0B0B3B', marginBottom: 6 }}>{p.name}</h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: billing === 'annual' && p.monthlyPrice ? 4 : 28 }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: p.highlight ? '#fff' : '#0B0B3B', letterSpacing: -2 }}>{price}</span>
                <span style={{ fontSize: 14, color: p.highlight ? 'rgba(255,255,255,0.5)' : '#94A3B8' }}>{unit}</span>
              </div>

              {billing === 'annual' && p.monthlyPrice && (
                <p style={{ fontSize: 12, color: p.highlight ? 'rgba(255,255,255,0.4)' : '#94A3B8', marginBottom: 24 }}>
                  Was €{p.monthlyPrice} · bespaar 20% per jaar
                </p>
              )}

              <div style={{ borderTop: p.highlight ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F1F5F9', paddingTop: 24, marginBottom: 28 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <CheckCircle size={16} color={p.highlight ? '#7B68EE' : '#10B981'} fill={p.highlight ? 'rgba(123,104,238,0.15)' : 'rgba(16,185,129,0.1)'} />
                    <span style={{ fontSize: 14, color: p.highlight ? 'rgba(255,255,255,0.85)' : '#334155', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
                {p.note && (
                  <p style={{ fontSize: 12, color: p.highlight ? 'rgba(255,255,255,0.35)' : '#94A3B8', marginTop: 8, fontStyle: 'italic' }}>{p.note}</p>
                )}
              </div>

              <button style={{
                width: '100%',
                background: p.highlight ? 'linear-gradient(135deg, #4361EE, #7B68EE)' : 'transparent',
                border: p.highlight ? 'none' : '2px solid #E2E8F0',
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
                transition: 'all 0.2s',
                boxShadow: p.highlight ? '0 4px 16px rgba(67,97,238,0.4)' : 'none',
              }}
                onMouseEnter={e => {
                  if (p.highlight) { e.currentTarget.style.opacity = '0.88'; }
                  else { e.currentTarget.style.borderColor = '#0B0B3B'; e.currentTarget.style.background = '#0B0B3B'; e.currentTarget.style.color = '#fff'; }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1';
                  if (!p.highlight) { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0B0B3B'; }
                }}
              >
                {p.cta} <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ToggleBtn({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? '#4361EE' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 18px',
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 600,
        color: active ? '#fff' : '#64748B',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}
    >
      {children}
    </button>
  );
}
