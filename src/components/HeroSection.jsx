import { ArrowRight } from 'lucide-react';
import { PrimaryBtn, OutlineBtn, PillBadge } from './ui.jsx';
import { MockBoard } from './Mockups.jsx';

export default function HeroSection({ navigate }) {
  const logos = ['Saxion', 'HAN', 'Windesheim', 'Pioneering', 'Smart.af', 'TriMotion'];
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#EDE4F7 0%,#F7ECF3 30%,#FFF8F0 60%,#EEF2FF 100%)', padding: '120px 0 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ flex: '1 1 440px', minWidth: 300 }}>
              <PillBadge>Het platform voor projecten die impact maken</PillBadge>
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 900,
                lineHeight: 1.08,
                color: '#0B0B3B',
                margin: '20px 0 20px',
                letterSpacing: -1.5,
              }}>
                Werk samen aan projecten die{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #4361EE, #7B68EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  écht iets verbeteren
                </span>
              </h1>
              <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.65, marginBottom: 36, maxWidth: 500 }}>
                YouLab is het online platform waar teams samen vraagstukken aanpakken. Met een helder stappenplan, praktische werkvormen en alles op één plek.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                <PrimaryBtn>
                  Plan een gratis demo (30 min) <ArrowRight size={18} />
                </PrimaryBtn>
                <OutlineBtn onClick={() => navigate('toolbox')}>
                  Bekijk de toolbox
                </OutlineBtn>
              </div>
              <p style={{ fontSize: 13, color: '#94A3B8' }}>
                Geen account nodig · 30 minuten · Vrijblijvend
              </p>
            </div>
            {/* Right — mockup */}
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <MockBoard />
            </div>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section style={{ padding: '40px 0', background: '#fff', borderBottom: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>
            Vertrouwd door
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px 40px', opacity: 0.55 }}>
            {logos.map((l, i) => (
              <span key={i} style={{ fontSize: 16, fontWeight: 800, color: '#0B0B3B', letterSpacing: -0.3 }}>{l}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
