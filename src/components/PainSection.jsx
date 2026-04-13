import { MessageSquareOff, TrendingDown, RefreshCw, GitMerge, ArrowRight } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { Button } from './ui/button.jsx';
import { Card } from './ui/card.jsx';

const painPoints = [
  {
    Icon: MessageSquareOff,
    title: 'Vergaderingen zonder resultaat',
    text: 'Iedereen praat, niemand weet wie wat doet. De volgende vergadering begint op nul.',
    color: '#4057ff',
    bg: 'bg-secondary',
  },
  {
    Icon: TrendingDown,
    title: 'Projecten die vastlopen',
    text: 'Na een paar weken weet niemand de status. Enthousiasme daalt, deadlines schuiven op.',
    color: '#ef4444',
    bg: 'bg-red-50 dark:bg-red-950/20',
  },
  {
    Icon: RefreshCw,
    title: 'Het wiel opnieuw uitvinden',
    text: 'Geen overzicht van wat al onderzocht is. Ieder project begint bij nul.',
    color: '#F59E0B',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
  },
  {
    Icon: GitMerge,
    title: 'Samenwerking is lastig',
    text: 'Losse e-mails, aparte documenten, geen gedeeld overzicht. Wie heeft de laatste versie?',
    color: '#10B981',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
  },
];

export default function PainSection() {
  return (
    <Section className="bg-muted/40">
      {/* Header */}
      <div className="text-center max-w-[580px] mx-auto mb-14">
        <PillBadge>Herken je dit?</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 leading-[1.15] tracking-tight">
          Projecten die moeizaam lopen kosten tijd, geld en energie
        </h2>
      </div>

      {/* Pain cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mb-8">
        {painPoints.map((p, i) => {
          const { Icon } = p;
          return (
            <Card
              key={i}
              className="p-7 hover:-translate-y-0.5 hover:shadow-md group"
              style={{ borderLeft: `4px solid ${p.color}` }}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${p.bg}`}
              >
                <Icon size={20} style={{ color: p.color }} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </Card>
          );
        })}
      </div>

      {/* Solution callout */}
      <div className="rounded-2xl bg-foreground p-7 flex flex-wrap items-center justify-between gap-5">
        <p className="text-base font-semibold text-background leading-relaxed max-w-[560px]">
          Dit kan anders.{' '}
          <span className="text-primary">YouLab</span>
          {' '}geeft je team structuur, werkvormen en overzicht – op één plek.
        </p>
        <Button variant="gradient" size="lg">
          Plan een demo <ArrowRight size={15} />
        </Button>
      </div>
    </Section>
  );
}
