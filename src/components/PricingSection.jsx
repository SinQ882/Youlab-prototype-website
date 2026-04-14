import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { Button } from './ui/button.jsx';
import { cn } from '../lib/utils.js';

const plans = [
  {
    name: 'Standaard',
    sub: 'Professionals',
    monthlyPrice: 15,
    features: ['Alle werkvormen', 'Onbeperkt projecten', 'Projectbord & planning', 'Berichten & notificaties', 'Gebruikersbeheer'],
    highlight: true,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Onderwijs',
    sub: 'Studenten & sociaal',
    monthlyPrice: 10,
    features: ['Alle werkvormen', 'Challenges', 'Projectbord & planning', 'Berichten & notificaties', 'Begeleidersfuncties'],
    highlight: false,
    cta: 'Start gratis demo',
    note: null,
  },
  {
    name: 'Expert',
    sub: 'Externe partners',
    monthlyPrice: null,
    features: ['Meewerken aan werkvormen', 'Taken bijdragen', 'Berichten sturen', 'Per project uitgenodigd'],
    highlight: false,
    cta: 'Meer info',
    note: 'Experts beheren geen projecten.',
  },
];

function formatPrice(plan, billing) {
  if (plan.monthlyPrice === null) return { price: 'Gratis', unit: 'altijd' };
  if (billing === 'annual') {
    return { price: `€${Math.round(plan.monthlyPrice * 0.8)}`, unit: '/gebruiker/mnd' };
  }
  return { price: `€${plan.monthlyPrice}`, unit: '/gebruiker/mnd' };
}

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly');

  return (
    <Section className="bg-muted/40" id="pricing">
      <div className="text-center max-w-[580px] mx-auto mb-12">
        <PillBadge>Transparante prijzen</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Eerlijk en eenvoudig
        </h2>
        <p className="text-muted-foreground mt-3">Per gebruiker per maand, geen verborgen kosten.</p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-1 bg-card rounded-xl p-1 border border-border mt-6 shadow-sm">
          <ToggleBtn active={billing === 'monthly'} onClick={() => setBilling('monthly')}>
            Maandelijks
          </ToggleBtn>
          <ToggleBtn active={billing === 'annual'} onClick={() => setBilling('annual')}>
            Jaarlijks
            <span className={cn(
              'ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-all',
              billing === 'annual' ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
            )}>
              −20%
            </span>
          </ToggleBtn>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {plans.map((p, i) => {
          const { price, unit } = formatPrice(p, billing);
          return (
            <div
              key={i}
              className={cn(
                'rounded-3xl p-9 flex-1 basis-[280px] max-w-[360px] min-w-[260px] relative transition-all duration-200',
                p.highlight
                  ? 'bg-foreground text-background shadow-2xl'
                  : 'bg-card border border-border hover:-translate-y-1 hover:shadow-lg'
              )}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#7B68EE] text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  Meest gekozen
                </div>
              )}

              <div className={cn('text-[13px] font-semibold mb-1', p.highlight ? 'text-background/50' : 'text-muted-foreground')}>
                {p.sub}
              </div>
              <h3 className={cn('text-[22px] font-extrabold mb-1.5', p.highlight ? 'text-background' : 'text-foreground')}>
                {p.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className={cn('text-[44px] font-black tracking-tighter', p.highlight ? 'text-background' : 'text-foreground')}>
                  {price}
                </span>
                <span className={cn('text-sm', p.highlight ? 'text-background/50' : 'text-muted-foreground')}>
                  {unit}
                </span>
              </div>

              {billing === 'annual' && p.monthlyPrice && (
                <p className={cn('text-xs mb-6', p.highlight ? 'text-background/40' : 'text-muted-foreground')}>
                  Was €{p.monthlyPrice} · bespaar 20% per jaar
                </p>
              )}

              <div className={cn('border-t pt-6 mb-7', p.highlight ? 'border-background/10' : 'border-border', !billing || !p.monthlyPrice ? 'mt-7' : 'mt-0')}>
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5 mb-3">
                    <CheckCircle
                      size={16}
                      className={p.highlight ? 'text-primary shrink-0' : 'text-emerald-500 shrink-0'}
                      fill={p.highlight ? 'rgba(85,112,255,0.2)' : 'rgba(16,185,129,0.1)'}
                    />
                    <span className={cn('text-sm font-medium', p.highlight ? 'text-background/85' : 'text-foreground')}>
                      {f}
                    </span>
                  </div>
                ))}
                {p.note && (
                  <p className={cn('text-xs mt-2 italic', p.highlight ? 'text-background/35' : 'text-muted-foreground')}>
                    {p.note}
                  </p>
                )}
              </div>

              <Button
                variant={p.highlight ? 'gradient' : 'outline'}
                size="lg"
                className="w-full"
              >
                {p.cta} <ArrowRight size={15} />
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ToggleBtn({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center px-4 py-2 rounded-lg text-sm font-semibold border-0 cursor-pointer transition-all duration-200',
        active ? 'bg-primary text-primary-foreground' : 'bg-transparent text-muted-foreground hover:text-foreground'
      )}
    >
      {children}
    </button>
  );
}
