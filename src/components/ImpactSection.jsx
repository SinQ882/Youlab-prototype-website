import SectionHeading from './SectionHeading.jsx';

const outcomes = [
  {
    icon: '🎯',
    title: 'Scherpere projecten',
    desc: 'Teams die structureel samenwerken, formuleren vraagstukken preciezer. Minder ruis, meer focus op wat er echt toe doet.',
  },
  {
    icon: '🤝',
    title: 'Beter gedragen besluiten',
    desc: 'Wanneer alle betrokkenen meedenken en meebouwen, zijn besluiten niet van bovenaf opgelegd — maar van binnenuit gedragen.',
  },
  {
    icon: '🌱',
    title: 'Blijvende verandering',
    desc: 'Resultaten die wortel schieten. Niet een rapport dat in een la belandt, maar een aanpak die het team meeneemt in de volgende stap.',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Main claim — full width, centred */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <SectionHeading
            eyebrow="Waarom het werkt"
            title="Als teams écht samenwerken"
          />
          <p
            className="text-foreground font-semibold leading-snug"
            style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', marginTop: -24 }}
          >
            worden projecten scherper,{' '}
            <span style={{ color: '#4057ff' }}>sneller gedragen</span>{' '}
            en{' '}
            <span style={{ color: '#10b981' }}>blijvender</span>.
          </p>
        </div>

        {/* Three outcome statements */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="rounded-2xl bg-muted/50 border border-border p-8 flex flex-col gap-4"
            >
              <div className="text-3xl">{o.icon}</div>
              <h3 className="text-foreground font-bold text-[17px] leading-snug">
                {o.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
