import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { cn } from '../lib/utils.js';

const faqs = [
  {
    q: 'Voor welk type projecten is YouLab geschikt?',
    a: 'YouLab werkt goed voor vraagstukken waarbij meerdere partijen betrokken zijn en waarbij je stap voor stap wil werken: participatietrajecten bij gemeenten, verbeterprojecten bij MKB, challenges en onderzoeksprojecten in het onderwijs, en innovatievraagstukken bij organisaties die samen willen ontdekken en ontwikkelen.',
  },
  {
    q: 'Hoe verschilt YouLab van tools als Trello of Miro?',
    a: 'Trello organiseert taken, Miro visualiseert ideeën — maar geen van beide begeleidt je door het vraagstuk. YouLab combineert projectmanagement met inhoudelijke werkvormen (zoals Empathy Map, Systeemmap en Prototype Canvas) en een bewezen aanpak in vier stappen. Je hebt niet alleen een bord, maar ook een methode.',
  },
  {
    q: 'Kunnen externe partners gratis meewerken?',
    a: 'Ja, altijd. Externe experts — denk aan een woningcorporatie, freelance adviseur of stakeholder — werken gratis mee als Expert. Ze kunnen meewerken aan werkvormen, taken bijdragen en berichten sturen. Ze beheren geen projecten en hebben geen betaalde licentie nodig.',
  },
  {
    q: 'Hoe snel kan ik starten?',
    a: 'Binnen een dag ben je operationeel. Er is niets te installeren — YouLab draait volledig in de browser. Je maakt een account aan, maakt een project aan en nodigt je team uit.',
  },
  {
    q: 'Is onze data veilig?',
    a: 'Ja. YouLab is AVG-compliant, data wordt opgeslagen in de EU en je kunt gebruikers beheren met duidelijke rollen en rechten.',
  },
  {
    q: 'Wat kost YouLab?',
    a: 'Vanaf €10/gebruiker/maand (onderwijs- en sociaal tarief). Externe experts werken altijd gratis mee. Neem contact op voor een persoonlijk aanbod dat past bij jouw organisatie.',
  },
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
