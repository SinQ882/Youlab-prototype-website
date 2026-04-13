import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { cn } from '../lib/utils.js';

const faqs = [
  { q: 'Kan ik YouLab eerst uitproberen?',     a: 'Ja! Plan een gratis demo van 30 minuten. We laten je zien hoe het platform werkt en beantwoorden al je vragen. Geen account nodig, geen verplichtingen.' },
  { q: 'Wat kost YouLab?',                     a: 'Standaard €15/gebruiker/maand, Onderwijs €10/gebruiker/maand. Externe experts werken altijd gratis mee. Zo betaal je alleen voor je eigen teamleden.' },
  { q: 'Moeten alle teamleden betalen?',        a: 'Nee. Externe experts (zoals partners, stakeholders of adviseurs) werken gratis mee. Alleen je eigen interne teamleden hebben een betaalde licentie nodig.' },
  { q: 'Hoe snel kan ik starten?',             a: 'Binnen een dag ben je operationeel. Er is niets te installeren. Je maakt een account aan, maakt een project aan en nodigt je team uit.' },
  { q: 'Is onze data veilig?',                 a: 'Ja. YouLab is AVG-compliant, data wordt opgeslagen in de EU en je kunt gebruikers beheren met duidelijke rollen en rechten.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-[580px] mx-auto mb-14">
        <PillBadge>Veelgestelde vragen</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Alles wat je wilt weten
        </h2>
      </div>

      <div className="max-w-[720px] mx-auto space-y-2.5">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={cn(
              'bg-card rounded-2xl border overflow-hidden transition-all duration-200',
              open === i ? 'border-primary/30 shadow-md' : 'border-border'
            )}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full bg-transparent border-0 cursor-pointer px-6 py-5 flex justify-between items-center gap-4 text-left"
            >
              <span className="text-base font-semibold text-foreground leading-snug">{faq.q}</span>
              <ChevronDown
                size={20}
                className={cn('shrink-0 text-primary transition-transform duration-250', open === i ? 'rotate-180' : '')}
              />
            </button>

            {open === i && (
              <div className="px-6 pb-5 border-t border-border">
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-4">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
