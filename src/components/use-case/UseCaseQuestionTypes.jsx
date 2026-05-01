import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function QuestionCard({ type, accentColor }) {
  return (
    <div
      className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
    >
      {type.icon && (
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
          style={{ background: `${accentColor}12` }}
        >
          {type.icon}
        </div>
      )}
      <h3 className="font-semibold text-[15px] text-foreground leading-snug">
        {type.title}&nbsp;<ExampleBadge />
      </h3>
      <p className="text-muted-foreground text-[13px] leading-relaxed">
        {type.description}
      </p>
    </div>
  );
}

export default function UseCaseQuestionTypes({ data, accentColor }) {
  if (!data.questionTypes) return null;
  const { intro, types } = data.questionTypes;

  return (
    <section className="bg-muted/30 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Wanneer gebruik je dit?"
          title={<>Voor welke vraagstukken?&nbsp;<ExampleBadge /></>}
          subtitle={intro}
          center={false}
        />

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {types.map((type, i) => (
            <QuestionCard key={i} type={type} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
}
