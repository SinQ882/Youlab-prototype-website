import { Link } from 'react-router-dom';
import { Search, PenTool, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';

const pijlers = [
  {
    icon: Search,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.10)',
    title: 'Ontdekken',
    desc: 'Begrijp het vraagstuk in de breedte en diepte — wie zijn er bij betrokken, wat speelt er echt, en welke kansen liggen er?',
    href: '/hoe-werkt-het',
  },
  {
    icon: PenTool,
    color: '#4057ff',
    bg: 'rgba(64,87,255,0.10)',
    title: 'Ontwerpen',
    desc: 'Van inzicht naar idee. Samen werken aan oplossingen, prototypes en concepten die aansluiten bij de werkelijkheid.',
    href: '/hoe-werkt-het',
  },
  {
    icon: Rocket,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.10)',
    title: 'Realiseren',
    desc: 'Zet de plannen om in concrete acties. Duidelijke taakverdeling, voortgang bijhouden, en iedereen op één lijn.',
    href: '/hoe-werkt-het',
  },
];

export default function PijlersSection() {
  return (
    <section className="bg-muted/40 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="De drie pijlers"
          title={
            <>
              Alles wat een project nodig heeft{' '}
              <ExampleBadge />
            </>
          }
          subtitle="YouLab ondersteunt teams door het hele traject — van eerste verkenning tot gedragen uitvoering."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-10">
          {pijlers.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={i}
                to={p.href}
                className="no-underline group"
              >
                <div
                  className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-5 h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: p.bg }}
                  >
                    <Icon size={22} style={{ color: p.color }} />
                  </div>

                  <div>
                    <h3 className="text-foreground font-bold text-[19px] leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div
                    className="mt-auto text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    style={{ color: p.color }}
                  >
                    Meer over {p.title.toLowerCase()}
                    <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
