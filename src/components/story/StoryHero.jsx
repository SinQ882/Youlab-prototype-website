import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ExampleBadge from '../ExampleBadge.jsx';

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};
const SECTOR_LABELS = {
  gemeenten: 'Gemeenten', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureaus',
};

export default function StoryHero({ story }) {
  const { title, oneLineResult, sector, hero } = story;
  const accentColor = SECTOR_COLORS[sector] ?? 'var(--primary)';

  return (
    <section
      style={{
        paddingTop: 68,
        background: `linear-gradient(160deg, ${hero.gradientFrom} 0%, var(--background) 100%)`,
      }}
    >
      {/* Terug-link */}
      <div className="max-w-[1120px] mx-auto px-6 pt-8">
        <Link
          to="/verhalen"
          className="no-underline inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Alle verhalen
        </Link>
      </div>

      {/* Visuele hero-band */}
      <div
        className="w-full flex items-center justify-center mt-8"
        style={{
          minHeight: 300,
          background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientTo})`,
        }}
      >
        <span style={{ fontSize: 88 }} aria-hidden="true">{hero.emoji}</span>
      </div>

      {/* Titel-blok */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[12px] font-bold px-3 py-1.5 rounded-full"
            style={{
              background: `${accentColor}14`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {SECTOR_LABELS[sector] ?? sector}
          </span>
          <ExampleBadge />
        </div>
        <p className="text-muted-foreground text-[14px] font-semibold mb-4 leading-snug">
          {oneLineResult}&nbsp;<ExampleBadge />
        </p>
        <h1
          className="text-foreground font-extrabold tracking-tight leading-[1.15]"
          style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}
        >
          {title}&nbsp;<ExampleBadge />
        </h1>
      </div>
    </section>
  );
}
