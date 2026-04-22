import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const EMOJIS = ['🗂️', '🔍', '🚀'];

function ApplicationBlock({ app, index, accentColor }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className="grid gap-10 items-center py-14 border-b border-border last:border-0"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
    >
      {/* Tekst */}
      <div
        className="relative"
        style={{ order: isEven ? 1 : undefined }}
      >
        <div
          className="absolute -top-2 left-0 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 96, color: accentColor, opacity: 0.06, lineHeight: 1 }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        <div style={{ position: 'relative' }}>
          <h3 className="font-bold text-[21px] mb-3 text-foreground leading-snug pt-6">
            {app.title}&nbsp;<ExampleBadge />
          </h3>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>

      {/* Illustratie */}
      <div style={{ order: isEven ? 2 : 0 }}>
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            height: 200,
            background: `linear-gradient(135deg, ${accentColor}16, ${accentColor}06)`,
            border: `1px dashed ${accentColor}30`,
          }}
        >
          <span style={{ fontSize: 60 }}>{EMOJIS[index] ?? '📋'}</span>
        </div>
      </div>
    </div>
  );
}

export default function UseCaseApplications({ data, accentColor }) {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Zo wordt YouLab gebruikt"
          title={<>Drie concrete toepassingen&nbsp;<ExampleBadge /></>}
          subtitle="Herkenbare situaties, direct inzetbaar."
          center={false}
        />
        {data.applications.map((app, i) => (
          <ApplicationBlock
            key={i}
            app={app}
            index={i}
            accentColor={accentColor}
          />
        ))}
      </div>
    </section>
  );
}
