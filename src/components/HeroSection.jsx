import { ArrowRight, Star } from 'lucide-react';
import { PrimaryBtn, OutlineBtn, PillBadge } from './ui.jsx';
import { MockBoard } from './Mockups.jsx';

const stats = [
  { value: '500+', label: 'Actieve teams' },
  { value: '12k+', label: 'Gebruikers' },
  { value: '4.8', label: 'Beoordeling' },
];

const logos = ['Saxion', 'HAN', 'Windesheim', 'Pioneering', 'Smart.af', 'TriMotion'];

export default function HeroSection({ navigate }) {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: '#fff',
        padding: '100px 0 80px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Decorative gradient blobs */}
        <div style={{
          position: 'absolute', top: -180, right: -180, width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(67,97,238,0.10) 0%, rgba(123,104,238,0.05) 45%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -120, width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(123,104,238,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
            {/* Left */}
            <div style={{ flex: '1 1 440px', minWidth: 300 }}>
              <PillBadge>Het platform voor projecten die impact maken</PillBadge>
              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 58px)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: '#0B0B3B',
                margin: '20px 0 20px',
                letterSpacing: -2,
              }}>
                Werk samen aan projecten die{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 60%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  écht iets verbeteren
                </span>
              </h1>
              <p style={{ fontSize: 18, color: '#64748B', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                YouLab is het online platform waar teams samen vraagstukken aanpakken. Met een helder stappenplan, praktische werkvormen en alles op één plek.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
                <PrimaryBtn>
                  Plan een gratis demo <ArrowRight size={18} />
                </PrimaryBtn>
                <OutlineBtn onClick={() => navigate('toolbox')}>
                  Bekijk de toolbox
                </OutlineBtn>
              </div>
              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontSize: 13, color: '#94A3B8' }}>
                  Beoordeeld met <strong style={{ color: '#0B0B3B' }}>4.8/5</strong> · Geen account nodig
                </span>
              </div>
            </div>

            {/* Right — browser-framed mockup */}
            <div style={{ flex: '1 1 420px', minWidth: 300 }}>
              <div style={{
                borderRadius: 20,
                padding: 3,
                background: 'linear-gradient(135deg, #4361EE40, #7B68EE30)',
                boxShadow: '0 32px 80px rgba(67,97,238,0.18), 0 8px 24px rgba(0,0,0,0.07)',
              }}>
                <div style={{ background: '#fff', borderRadius: 17, overflow: 'hidden' }}>
                  {/* Browser chrome */}
                  <div style={{
                    background: '#F1F5F9',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    borderBottom: '1px solid #E2E8F0',
                  }}>
                    <div style={{ display: 'flex', gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                    </div>
                    <div style={{ flex: 1, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#94A3B8', border: '1px solid #E2E8F0' }}>
                      app.youlab.nl
                    </div>
                  </div>
                  <div style={{ padding: '16px 16px 0' }}>
                    <MockBoard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Logo strip */}
      <section style={{ padding: '32px 0', background: '#F8FAFF', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 40px' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: '#0B0B3B', letterSpacing: -1, lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Partner logos */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px 24px', opacity: 0.4 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#0B0B3B', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Vertrouwd door
              </span>
              {logos.map((l, i) => (
                <span key={i} style={{ fontSize: 15, fontWeight: 800, color: '#0B0B3B', letterSpacing: -0.3 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
