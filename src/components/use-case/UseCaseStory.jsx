import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';
import { getBySlug } from '../../data/stories/index.js';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function UseCaseStory({ data }) {
  const { storySlug, label, sector } = data;
  const story = storySlug ? getBySlug(storySlug) : null;
  const accentColor = SECTOR_COLORS[sector] ?? 'var(--primary)';

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Projectverhaal"
          title="Uit de praktijk"
        />

        {story ? (
          <div
            className="rounded-2xl border border-border bg-card overflow-hidden max-w-[800px] mx-auto"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
          >
            {/* Visual side */}
            <div
              style={{
                background: `linear-gradient(135deg, ${story.hero.gradientFrom}, ${story.hero.gradientTo})`,
                minHeight: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 52 }} aria-hidden="true">{story.hero.emoji}</span>
            </div>

            {/* Text side */}
            <div className="p-8 flex flex-col gap-4 justify-center">
              <p className="text-muted-foreground text-[12px] font-semibold">
                {story.context.organization}&nbsp;<ExampleBadge />
              </p>
              <h3 className="text-foreground font-bold text-[17px] leading-snug">
                {story.title}&nbsp;<ExampleBadge />
              </h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                {story.oneLineResult}
              </p>
              <Link
                to={`/verhalen/${story.slug}`}
                className="no-underline inline-flex items-center gap-1.5 text-[14px] font-semibold mt-1 transition-all hover:gap-2.5"
                style={{ color: accentColor }}
              >
                Lees het verhaal <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="max-w-[600px] mx-auto text-center rounded-2xl p-12"
            style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
          >
            <div className="text-4xl mb-4" aria-hidden="true">📖</div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Binnenkort delen we hier een projectverhaal uit de sector <strong>{label}</strong>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
