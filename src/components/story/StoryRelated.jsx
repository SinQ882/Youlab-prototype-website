import SectionHeading from '../SectionHeading.jsx';
import StoryCard from './StoryCard.jsx';

export default function StoryRelated({ related }) {
  return (
    <section className="bg-muted/30 py-20 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Meer verhalen"
          title="Ook interessant"
          center={false}
        />
        {related.length === 0 ? (
          <div
            className="rounded-2xl p-12 text-center text-muted-foreground text-[15px]"
            style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
          >
            Binnenkort meer projectverhalen.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {related.map(s => (
              <StoryCard key={s.slug} story={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
