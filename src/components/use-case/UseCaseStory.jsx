import SectionHeading from '../SectionHeading.jsx';

export default function UseCaseStory({ data }) {
  const { storySlug, label } = data;

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Projectverhaal"
          title="Uit de praktijk"
        />
        {storySlug === null ? (
          <div
            className="max-w-[600px] mx-auto text-center rounded-2xl p-12"
            style={{
              border: '2px dashed var(--border)',
              background: 'var(--muted)',
            }}
          >
            <div className="text-4xl mb-4" aria-hidden="true">📖</div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Binnenkort delen we hier een projectverhaal uit de sector <strong>{label}</strong>.
            </p>
          </div>
        ) : (
          <div className="text-center text-muted-foreground text-sm">
            Verhaal: {storySlug}
          </div>
        )}
      </div>
    </section>
  );
}
