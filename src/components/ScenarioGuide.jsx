import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';

const scenarios = [
  {
    emoji: '🏘️',
    tag: 'Gemeente',
    tagColor: '#4057ff',
    tagBg: 'rgba(64,87,255,0.08)',
    title: 'Wijkvernieuwing',
    desc: 'Een gemeente wil bewoners, corporatie en welzijnswerk écht betrekken bij de herinrichting van een wijk. YouLab biedt de structuur om van losse bijeenkomsten naar een gezamenlijk gedragen plan te gaan — met heldere rollen en werkvormen die iedereen mee laten denken.',
    to: '/voor/gemeenten',
    accentColor: '#4057ff',
  },
  {
    emoji: '🔬',
    tag: 'Onderwijs',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.08)',
    title: 'Onderzoeksprogramma',
    desc: 'Een hogeschool wil studenten laten werken aan een echt vraagstuk van een externe partner. YouLab verbindt studenten, docenten en opdrachtgevers in één werkruimte — met begeleide fasen en concrete deliverables per stap.',
    to: '/voor/onderwijs',
    accentColor: '#7c3aed',
  },
  {
    emoji: '⚡',
    tag: 'MKB / Advies',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,0.08)',
    title: 'Strategieversnelling',
    desc: 'Een adviesbureau begeleidt een team dat vastloopt in strategische keuzes. Met YouLab wordt de aanpak transparant en interactief: van vraagverkenning tot uitvoerbaar actieplan, met alle betrokkenen aan tafel.',
    to: '/voor/adviesbureaus',
    accentColor: '#f59e0b',
  },
];

export default function ScenarioGuide() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Herkenbare situaties"
          title={
            <>
              Drie scenario&apos;s, één aanpak <ExampleBadge />
            </>
          }
          subtitle="YouLab past zich aan aan de context. Herken je jouw situatie?"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderTop: `3px solid ${s.accentColor}` }}
            >
              {/* Tag row */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.emoji}</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: s.tagBg, color: s.tagColor }}
                >
                  {s.tag}
                </span>
              </div>

              <div>
                <h3 className="text-foreground font-bold text-[19px] leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <Link
                to={s.to}
                className="mt-auto no-underline flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: s.accentColor }}
              >
                Meer over dit scenario <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
