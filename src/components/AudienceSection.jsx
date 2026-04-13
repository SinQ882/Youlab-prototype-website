import { Building2, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { Card } from './ui/card.jsx';

const audiences = [
  {
    Icon: Building2,
    title: 'Gemeenten',
    desc: 'Werk aan leefbaarheid, duurzaamheid of participatie met alle betrokken partijen.',
    quote: 'Eindelijk overzicht over wie wat doet.',
    author: 'Projectleider, Gemeente',
    color: '#4057ff',
    bg: 'bg-secondary',
  },
  {
    Icon: GraduationCap,
    title: 'Onderwijs',
    desc: 'Studenten werken samen met echte Challenges. Docenten begeleiden op afstand.',
    quote: 'Studenten werken veel zelfstandiger.',
    author: 'Docent, Saxion Hogeschool',
    color: '#EC4899',
    bg: 'bg-pink-50 dark:bg-pink-950/20',
  },
  {
    Icon: Briefcase,
    title: 'MKB & Bedrijven',
    desc: 'Pak verbetervraagstukken gestructureerd aan. Van probleem naar plan in vier stappen.',
    quote: null,
    author: null,
    color: '#F59E0B',
    bg: 'bg-amber-50 dark:bg-amber-950/20',
  },
  {
    Icon: UserCheck,
    title: "ZZP'ers & Adviseurs",
    desc: 'Gebruik YouLab in je eigen dienstverlening. Breng structuur en professionele werkvormen.',
    quote: null,
    author: null,
    color: '#10B981',
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
  },
];

export default function AudienceSection() {
  return (
    <Section id="voor-wie" className="bg-muted/40">
      <div className="text-center max-w-[580px] mx-auto mb-14">
        <PillBadge>Voor wie?</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Gemaakt voor teams die samen verbeteren
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {audiences.map((a, i) => {
          const { Icon } = a;
          return (
            <Card key={i} className="p-8 hover:-translate-y-0.5 hover:shadow-md">
              <div className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-5 ${a.bg}`}>
                <Icon size={24} style={{ color: a.color }} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2.5">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.desc}</p>
              {a.quote && (
                <div style={{ borderLeft: `3px solid ${a.color}` }} className="pl-3.5">
                  <p className="text-sm italic text-foreground font-medium mb-1">"{a.quote}"</p>
                  <p className="text-xs text-muted-foreground">{a.author}</p>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
