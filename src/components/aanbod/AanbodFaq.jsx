import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const faqs = [
  {
    q: 'Wat als we eerst willen testen voordat we een traject beginnen?',
    a: 'Een Kickstart is hiervoor ideaal. Het is een laagdrempelige manier om de YouLab-aanpak te ervaren met een echte vraag uit je organisatie — zonder dat je je vastlegt op een groter traject.',
  },
  {
    q: 'Kunnen we tussen aanbodsvormen switchen?',
    a: 'Zeker. Na een Kickstart kun je besluiten door te gaan met een Ontwerpsprint. En wie met het platform werkt kan altijd een gefaciliteerde sessie toevoegen. We denken graag mee over wat op dat moment het meest passend is.',
  },
  {
    q: 'Hoe zit het met de facturatie van het platform?',
    a: 'Platformtoegang loopt nog niet via automatische facturatie. Na je aanvraag nemen we contact op om toegang in te richten en de facturatie af te stemmen.',
  },
  {
    q: 'Wat is het verschil tussen een Kickstart en een Ontwerpsprint?',
    a: 'Een Kickstart is een eenmalige sessie van een dagdeel — je maakt kennis met de aanpak en werkt met een concrete vraag. Een Ontwerpsprint is een traject van 3 maanden waarbij je de volledige 4O-aanpak doorloopt, verdeeld over vier Kickstart-sessies, inclusief zes maanden platformtoegang.',
  },
  {
    q: 'Werken jullie ook met externe facilitators?',
    a: 'Ja. Bij de Ontwerpsprint en Complexe Uitdaging werken we samen met een YouLab-ambassadeur: een externe professional die vertrouwd is met de aanpak en een frisse, onafhankelijke blik inbrengt.',
  },
  {
    q: 'Gelden de onderwijs/non-profit-tarieven ook voor een Ontwerpsprint of Complexe Uitdaging?',
    a: 'Het gereduceerde tarief van € 10 per gebruiker per maand geldt specifiek voor platformtoegang voor onderwijs- en non-profitorganisaties. Voor begeleide trajecten stemmen we de prijs in overleg af.',
  },
  {
    q: 'Wat gebeurt er na een traject — kunnen we het platform blijven gebruiken?',
    a: 'Ja. Bij de Ontwerpsprint zijn zes maanden platformtoegang inbegrepen. Daarna kun je het platform als abonnement voortzetten. Na een Complexe Uitdaging bespreken we wat het meest passend is voor jouw organisatie.',
  },
];

export default function AanbodFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-background py-20">
      <div className="max-w-[720px] mx-auto px-6">
        <SectionHeading
          eyebrow="Vragen"
          title={<>Veelgestelde vragen <ExampleBadge /></>}
          center
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border"
              style={{ borderColor: open === i ? 'var(--primary)' : 'var(--border)', overflow: 'hidden' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', background: 'var(--card)',
                  border: 'none', cursor: 'pointer', padding: '16px 20px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                }}
              >
                <span className="text-foreground font-semibold" style={{ fontSize: 14 }}>
                  {faq.q} <ExampleBadge />
                </span>
                <ChevronDown
                  size={16}
                  className="text-muted-foreground"
                  style={{
                    flexShrink: 0,
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
              {open === i && (
                <div
                  className="text-muted-foreground"
                  style={{ padding: '0 20px 18px', fontSize: 14, lineHeight: 1.65, background: 'var(--card)' }}
                >
                  {faq.a} <ExampleBadge />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
