import { ArrowRight } from 'lucide-react';
import { Section } from './ui.jsx';
import { Button } from './ui/button.jsx';

export default function PricingSection() {
  return (
    <Section className="bg-muted/40" id="pricing">
      <div className="max-w-[640px] mx-auto text-center">
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          YouLab is beschikbaar{' '}
          <strong className="text-foreground">vanaf €10/gebruiker/maand</strong>.
          Externe experts werken altijd gratis mee.
        </p>
        <Button variant="outline" size="lg">
          Neem contact op voor een persoonlijk gesprek <ArrowRight size={15} />
        </Button>
      </div>
    </Section>
  );
}
