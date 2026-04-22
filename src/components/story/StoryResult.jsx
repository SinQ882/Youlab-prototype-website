import ExampleBadge from '../ExampleBadge.jsx';

export default function StoryResult({ story, accentColor }) {
  const { result } = story;
  const paragraphs = result.outcome.split('\n\n').filter(Boolean);

  return (
    <section className="bg-background py-16">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-6"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          Het resultaat&nbsp;<ExampleBadge />
        </h2>

        {/* Outcome-prose */}
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground mb-5"
            style={{ fontSize: 16, lineHeight: 1.85 }}
          >
            {para}
          </p>
        ))}

        {/* Evidence-grid */}
        <div
          className="grid gap-4 mt-8"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
        >
          {result.evidence.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1"
              style={{ borderTop: `3px solid ${accentColor}` }}
            >
              <div
                className="font-extrabold text-foreground leading-tight"
                style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}
              >
                {item.value}&nbsp;<ExampleBadge />
              </div>
              <div className="text-muted-foreground text-[13px] leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
