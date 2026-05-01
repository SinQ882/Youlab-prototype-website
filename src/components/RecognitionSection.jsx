import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';

const items = [
  {
    title: 'Informatie versnipperd',
    quote:
      'Het zit overal en nergens — bij verschillende collega\'s, in mails, in losse documenten. Voor je verder kunt, ben je al uren bezig met verzamelen.',
  },
  {
    title: 'Veel zit in hoofden',
    quote:
      'Belangrijke kennis zit in het hoofd van collega\'s. Je bent afhankelijk van wie er beschikbaar is, en overdracht kost moeite.',
  },
  {
    title: 'Gaandeweg vormgeven',
    quote:
      'Je begint gewoon ergens en geeft het stap voor stap vorm. Dat werkt — maar je moet vaak terug en mist soms dingen.',
  },
];

export default function RecognitionSection() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(180deg, var(--background) 0%, #fefbf3 50%, var(--background) 100%)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Uit de praktijk"
          title="Herken je dit?"
          subtitle="Werken aan complexe projecten gaat zelden volgens een vast plan."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-card p-8 flex flex-col gap-4 relative overflow-hidden"
              style={{
                borderColor: 'rgba(245,158,11,0.22)',
                background: 'linear-gradient(145deg, #fffdf5 0%, #ffffff 100%)',
              }}
            >
              {/* Decorative opening quote */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: 72, color: 'rgba(245,158,11,0.12)', lineHeight: 1 }}
              >
                "
              </span>

              <h3 className="font-bold text-[16px] text-foreground leading-snug relative">
                {item.title}
              </h3>

              <p
                className="text-muted-foreground text-[15px] leading-relaxed relative"
                style={{ fontStyle: 'italic' }}
              >
                "{item.quote}"&nbsp;<ExampleBadge />
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-[15px] leading-relaxed max-w-[580px] mx-auto">
          Niet jouw aanpak, maar je context. YouLab brengt structuur in precies dat soort werk.
        </p>
      </div>
    </section>
  );
}
