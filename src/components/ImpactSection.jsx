import { Building2, GraduationCap, Briefcase } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';

const stories = [
  {
    Icon: Building2,
    phase: 'Ontdekken & Organiseren',
    phaseColor: '#4057ff',
    title: 'Van versnipperde overleggen naar één gedragen actieplan',
    desc: 'Een gemeente bracht 12 partijen samen rond leefbaarheid in drie wijken. Via de Empathy Map kwamen inzichten boven tafel die geen van de partijen verwacht had. In 6 weken: van analyse naar een plan gedragen door bewoners, woningcorporatie en welzijnswerk.',
    tag: 'Gemeente',
    tagBg: 'bg-blue-50 dark:bg-blue-950/30',
    tagColor: '#4057ff',
  },
  {
    Icon: GraduationCap,
    phase: 'Ontmoeten & Ontwikkelen',
    phaseColor: '#EC4899',
    title: 'Studenten lossen een echt bedrijfsvraagstuk op',
    desc: 'Studenten van Saxion werkten via de Design Thinking aanpak in YouLab aan een innovatievraagstuk van een regionaal MKB-bedrijf. Docenten begeleidden op afstand, externe experts dachten mee — en het bedrijf implementeerde het resultaat.',
    tag: 'Onderwijs',
    tagBg: 'bg-pink-50 dark:bg-pink-950/30',
    tagColor: '#EC4899',
  },
  {
    Icon: Briefcase,
    phase: 'Ontdekken & Ontwikkelen',
    phaseColor: '#F59E0B',
    title: 'Verbeterpunten in kaart én direct opgepakt',
    desc: 'Een MKB-bedrijf bracht interne knelpunten in kaart samen met het hele team. Met het Actieplan in YouLab wist iedereen wat er van hen verwacht werd. Geen losse e-mails meer, geen vergeten actiepunten.',
    tag: 'MKB',
    tagBg: 'bg-amber-50 dark:bg-amber-950/30',
    tagColor: '#F59E0B',
  },
];

export default function ImpactSection() {
  return (
    <Section id="impact" className="bg-background">
      <div className="text-center max-w-[620px] mx-auto mb-14">
        <PillBadge>Wat teams mogelijk maken</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Projecten die écht iets veranderen
        </h2>
        <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
          Van vraagstuk naar gedragen resultaat — met structuur, werkvormen en iedereen op één plek.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {stories.map((s, i) => {
          const { Icon } = s;
          return (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.tagColor}15` }}
                >
                  <Icon size={22} style={{ color: s.tagColor }} />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${s.tagBg}`}
                  style={{ color: s.tagColor }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Phase label */}
              <div
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: s.tagColor }}
              >
                {s.phase}
              </div>

              {/* Title & description */}
              <div>
                <h3 className="text-foreground font-bold text-[17px] leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
