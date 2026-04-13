import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';

const faqs = [
  { q: 'Kan ik YouLab eerst uitproberen?', a: 'Ja! Plan een gratis demo van 30 minuten. We laten je zien hoe het platform werkt en beantwoorden al je vragen. Geen account nodig, geen verplichtingen.' },
  { q: 'Wat kost YouLab?', a: 'Standaard €15/gebruiker/maand, Onderwijs €10/gebruiker/maand. Externe experts werken altijd gratis mee. Zo betaal je alleen voor je eigen teamleden.' },
  { q: 'Moeten alle teamleden betalen?', a: 'Nee. Externe experts (zoals partners, stakeholders of adviseurs) werken gratis mee. Alleen je eigen interne teamleden hebben een betaalde licentie nodig.' },
  { q: 'Hoe snel kan ik starten?', a: 'Binnen een dag ben je operationeel. Er is niets te installeren. Je maakt een account aan, maakt een project aan en nodigt je team uit.' },
  { q: 'Is onze data veilig?', a: 'Ja. YouLab is AVG-compliant, data wordt opgeslagen in de EU en je kunt gebruikers beheren met duidelijke rollen en rechten.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <Section bg="rgba(248,250,255,0.80)">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
        <PillBadge>Veelgestelde vragen</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Alles wat je wilt weten
        </h2>
      </div>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.88)',
            borderRadius: 16,
            marginBottom: 10,
            border: '1px solid #E8EDF5',
            overflow: 'hidden',
            transition: 'box-shadow 0.2s',
            boxShadow: open === i ? '0 4px 20px rgba(67,97,238,0.08)' : 'none',
          }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: '#0B0B3B', lineHeight: 1.4 }}>{faq.q}</span>
              <ChevronDown
                size={20}
                color="#4361EE"
                style={{ flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}
              />
            </button>
            {open === i && (
              <div style={{ padding: '0 24px 20px', borderTop: '1px solid #F1F5F9' }}>
                <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.65, margin: '16px 0 0' }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
