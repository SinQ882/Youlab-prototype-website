import { ArrowRight, Shield, Users, BookOpen } from 'lucide-react';

const trustItems = [
  { Icon: Shield, text: 'AVG-compliant · Data in de EU' },
  { Icon: Users, text: 'Expert-rol altijd gratis' },
  { Icon: BookOpen, text: 'Werkvormen met uitleg' },
];

export default function CtaSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0B0B3B 0%, #1a1a6c 50%, #2d2d8c 100%)', padding: '100px 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: -1, lineHeight: 1.1 }}>
          Benieuwd hoe YouLab werkt?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginBottom: 40, lineHeight: 1.6 }}>
          Plan een demo – 30 minuten, geen verplichtingen.
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #4361EE, #7B68EE)',
          border: 'none',
          borderRadius: 14,
          padding: '16px 40px',
          fontSize: 17,
          fontWeight: 700,
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 8px 32px rgba(67,97,238,0.4)',
          transition: 'transform 0.2s, opacity 0.2s',
          marginBottom: 40,
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.92'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
        >
          Plan een gratis demo <ArrowRight size={18} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 24 }}>
          {trustItems.map(({ Icon, text }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={16} color="rgba(123,104,238,0.9)" />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
