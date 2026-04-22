import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';
import { stories } from '../data/stories/index.js';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};
const SECTOR_LABELS = {
  gemeenten: 'Gemeente', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureau',
};

export default function StoryTeaser() {
  const featured = stories.find(s => s.featured) ?? stories[0];
  if (!featured) return null;

  const color = SECTOR_COLORS[featured.sector] ?? 'var(--primary)';

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Uitgelicht verhaal"
          title="Wat teams vertellen"
          center
        />

        <div
          className="rounded-2xl border border-border bg-card overflow-hidden"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Visual side */}
          <div
            style={{
              background: `linear-gradient(135deg, ${featured.hero.gradientFrom}, ${featured.hero.gradientTo})`,
              minHeight: 280,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>{featured.hero.emoji}</div>
              <div
                style={{
                  display: 'inline-block',
                  background: `${color}18`,
                  color,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 100,
                  border: `1px solid ${color}30`,
                }}
              >
                {SECTOR_LABELS[featured.sector] ?? featured.sector}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="p-10 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[13px] font-semibold text-muted-foreground">
                {featured.context.organization}
              </span>
              <ExampleBadge />
            </div>

            <h3
              className="text-foreground font-bold leading-snug"
              style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
            >
              {featured.title}&nbsp;<ExampleBadge />
            </h3>

            <p className="text-muted-foreground text-[15px] leading-relaxed">
              {featured.oneLineResult}&nbsp;<ExampleBadge />
            </p>

            <Link
              to={`/verhalen/${featured.slug}`}
              className="no-underline inline-flex items-center gap-2 font-semibold text-[15px] mt-2 transition-all hover:gap-3"
              style={{ color }}
            >
              Lees het verhaal <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/verhalen"
            className="no-underline text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle projectverhalen →
          </Link>
        </div>
      </div>
    </section>
  );
}
