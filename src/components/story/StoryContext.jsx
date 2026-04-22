import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryContext({ story }) {
  const { context } = story;
  const paragraphs = context.challenge.split('\n\n').filter(Boolean);

  return (
    <section className="bg-background py-16">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-6"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          De context&nbsp;<ExampleBadge />
        </h2>

        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
          Organisatie
        </p>
        <p className="font-semibold text-foreground mb-8">
          {context.organization}&nbsp;<ExampleBadge />
        </p>

        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground mb-5 last:mb-0"
            style={{ fontSize: 16, lineHeight: 1.85 }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
