import { ArrowRight, Shield, Users, BookOpen, Star } from 'lucide-react';

const trustItems = [
  { Icon: Shield, text: 'AVG-compliant · Data in de EU' },
  { Icon: Users, text: 'Expert-rol altijd gratis' },
  { Icon: BookOpen, text: 'Werkvormen met uitleg' },
];

export default function CtaSection() {
  return (
    <section style={{
      background: '#0B0B3B',
      padding: '100px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Radial glow effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(67,97,238,0.22) 0%, rgba(123,104,238,0.10) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,104,238,0.12) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(67,97,238,0.10) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
        {/* Star rating */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 24 }}>
          <div style={{ display: 'flex', gap: 3 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
            ))}
          </div>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>4.8/5 – vertrouwd door 500+ teams</span>
        </div>

        <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: -1.5, lineHeight: 1.05 }}>
          Benieuwd hoe{' '}
          <span style={{
            background: 'linear-gradient(135deg, #4361EE, #7B68EE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            YouLab
          </span>
          {' '}werkt?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', marginBottom: 44, lineHeight: 1.65 }}>
          Plan een demo van 30 minuten. Geen account nodig, geen verplichtingen.
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
          boxShadow: '0 8px 32px rgba(67,97,238,0.5), 0 0 0 1px rgba(123,104,238,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          marginBottom: 48,
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(67,97,238,0.6), 0 0 0 1px rgba(123,104,238,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(67,97,238,0.5), 0 0 0 1px rgba(123,104,238,0.3)'; }}
        >
          Plan een gratis demo <ArrowRight size={18} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px 32px' }}>
          {trustItems.map(({ Icon, text }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(123,104,238,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={14} color="#7B68EE" />
              </div>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
