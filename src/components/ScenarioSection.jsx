import { Building2, GraduationCap, Briefcase } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';

const scenarios = [
  {
    Icon: Building2,
    doelgroep: 'Gemeente',
    doelgroepColor: '#4057ff',
    doelgroepBg: 'bg-blue-50 dark:bg-blue-950/30',
    titel: 'Leefbaarheid verbeteren in drie wijken',
    beschrijving: 'De gemeente werkt samen met bewoners, een woningcorporatie en het welzijnswerk aan leefbaarheid. Via de Ontdekken-fase kwamen onverwachte inzichten boven tafel: bewoners ervaarden niet onveiligheid maar eenzaamheid als het grootste probleem.',
    werkvormen: ['Stakeholderanalyse', 'Empathy Map', 'Systeemmap', 'Actieplan'],
    resultaat: 'Een plan gedragen door alle partijen, binnen 8 weken. Bewoners voelen zich gehoord en onderdeel van de oplossing.',
    fase: 'Ontmoeten → Ontdekken → Organiseren',
  },
  {
    Icon: GraduationCap,
    doelgroep: 'Onderwijs',
    doelgroepColor: '#EC4899',
    doelgroepBg: 'bg-pink-50 dark:bg-pink-950/30',
    titel: 'Studenten pakken een echt bedrijfsvraagstuk aan',
    beschrijving: 'Studenten van een hogeschool werken in YouLab aan een innovatievraagstuk van een regionaal bedrijf. Docenten begeleiden via het platform op afstand. Externe experts vanuit het bedrijf denken gratis mee als Expert.',
    werkvormen: ['Intakegesprek', 'Customer Journey', 'Prototype Canvas', 'Ideeënsessie'],
    resultaat: 'Studenten leveren een concreet, gevalideerd concept op. Het bedrijf implementeerde de aanbeveling.',
    fase: 'Ontmoeten → Ontwikkelen',
  },
  {
    Icon: Briefcase,
    doelgroep: 'MKB',
    doelgroepColor: '#F59E0B',
    doelgroepBg: 'bg-amber-50 dark:bg-amber-950/30',
    titel: 'Interne verbeterpunten aanpakken met het hele team',
    beschrijving: 'Een middelgroot bedrijf wil inefficiënties aanpakken maar weet niet waar te beginnen. Via YouLab breng je het hele team in kaart, identificeer je knelpunten en maak je samen een plan dat iedereen snapt én uitvoert.',
    werkvormen: ['Contextschets', 'Systeemmap', 'Business Model Canvas', 'Taakverdeling'],
    resultaat: 'Van vage frustraties naar een helder actieplan met eigenaren. Geen vergadering nodig.',
    fase: 'Ontdekken → Ontwikkelen → Organiseren',
  },
];

export default function ScenarioSection() {
  return (
    <Section id="voor-wie" className="bg-muted/40">
      <div className="text-center max-w-[620px] mx-auto mb-14">
        <PillBadge>Herken jij dit?</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Voor elk vraagstuk een aanpak
        </h2>
        <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
          YouLab werkt voor uiteenlopende organisaties en vraagstukken. Zie hoe andere teams het gebruiken.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {scenarios.map((s, i) => {
          const { Icon } = s;
          return (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="flex flex-wrap gap-8 items-start">
                {/* Left: icon + doelgroep + titel + beschrijving */}
                <div className="flex-1 min-w-[260px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.doelgroepColor}15` }}
                    >
                      <Icon size={20} style={{ color: s.doelgroepColor }} />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${s.doelgroepBg}`}
                      style={{ color: s.doelgroepColor }}
                    >
                      {s.doelgroep}
                    </span>
                  </div>

                  <h3 className="text-foreground font-bold text-[20px] leading-snug mb-3">
                    "{s.titel}"
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.beschrijving}
                  </p>

                  {/* Fase */}
                  <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: s.doelgroepColor }}>
                    {s.fase}
                  </p>
                </div>

                {/* Right: werkvormen + resultaat */}
                <div className="flex-shrink-0 min-w-[220px] max-w-[280px]">
                  <div className="mb-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      Gebruikt in dit project
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.werkvormen.map((w, j) => (
                        <span
                          key={j}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                          style={{ background: `${s.doelgroepColor}12`, color: s.doelgroepColor }}
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="rounded-xl p-4"
                    style={{ background: `${s.doelgroepColor}08`, borderLeft: `3px solid ${s.doelgroepColor}` }}
                  >
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Resultaat
                    </p>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {s.resultaat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
