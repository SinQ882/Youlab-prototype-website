import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';

const outcomes = [
  {
    icon: '🗂️',
    title: 'Eén centrale plek',
    desc: 'Alle informatie en stakeholders samenkomen in één gedeelde werkruimte. Niet meer zoeken — gewoon weten waar het staat.',
  },
  {
    icon: '🧭',
    title: 'Stap voor stap structuur',
    desc: 'Een duidelijke structuur die je door het proces leidt. Je weet altijd waar je bent en wat de volgende stap is.',
  },
  {
    icon: '🤝',
    title: 'Iedereen mee in het proces',
    desc: 'Een manier om alle betrokkenen mee te nemen — ook degenen die niet elk overleg bijwonen. Geen verrassing meer achteraf.',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Main claim — full width, centred */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <SectionHeading
            eyebrow="Wat YouLab brengt"
            title={<>Zo wordt complexiteit hanteerbaar&nbsp;<ExampleBadge /></>}
          />
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: 'clamp(16px, 2vw, 18px)', marginTop: -16 }}
          >
            YouLab brengt overzicht waar het versnipperd was, structuur waar het ad hoc was, en regie waar je nu schakelt. Geen extra werk — wel een ander ritme.
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
                {o.title}&nbsp;<ExampleBadge />
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
