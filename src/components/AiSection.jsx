import { Sparkles } from 'lucide-react';
import { Section } from './ui.jsx';

export default function AiSection() {
  return (
    <Section bg="linear-gradient(135deg, #0B0B3B 0%, #1a1a6c 50%, #2d2d8c 100%)">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        {/* Left */}
        <div style={{ flex: '1 1 360px', minWidth: 280 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(123,104,238,0.25)', border: '1px solid rgba(123,104,238,0.4)', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
            <Sparkles size={14} color="#7B68EE" />
            <span style={{ fontSize: 13, fontWeight: 600, color: '#7B68EE' }}>Binnenkort</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2, letterSpacing: -0.8 }}>
            Jouw slimme projectassistent
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 24 }}>
            AI om snel antwoord te krijgen op vragen over je project. Automatische samenvattingen, slimme suggesties en directe inzichten.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {['Slimme samenvattingen', 'Projectinzichten', 'Werkvormsuggesties'].map((tag, i) => (
              <span key={i} style={{ background: 'rgba(67,97,238,0.2)', border: '1px solid rgba(67,97,238,0.3)', color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 8 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Right — AI chat mockup */}
        <div style={{ flex: '1 1 340px', minWidth: 280 }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #4361EE, #7B68EE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={14} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>YouLab AI</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Projectassistent</div>
              </div>
            </div>
            {/* User message */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <div style={{ background: 'rgba(67,97,238,0.4)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px', maxWidth: '80%' }}>
                <p style={{ fontSize: 13, color: '#fff', margin: 0 }}>"Wat is de status van project Leefbaarheid?"</p>
              </div>
            </div>
            {/* AI response */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #4361EE, #7B68EE)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Sparkles size={12} color="#fff" />
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '4px 14px 14px 14px', padding: '10px 14px' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
                  Ontdekken-fase. 3/5 taken afgerond. Mijlpaal: 20 mei. <span style={{ color: '#7B68EE', fontWeight: 600 }}>Interviews afnemen</span> loopt nog.
                </p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Binnenkort beschikbaar</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
