import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ExampleBadge from '../ExampleBadge.jsx';

const SECTOR_COLORS = {
  gemeenten:     { color: '#4057ff', bg: 'rgba(64,87,255,0.10)'  },
  onderwijs:     { color: '#7c3aed', bg: 'rgba(124,58,237,0.10)' },
  mkb:           { color: '#f59e0b', bg: 'rgba(245,158,11,0.10)' },
  'non-profit':  { color: '#ef4444', bg: 'rgba(239,68,68,0.10)'  },
  adviesbureaus: { color: '#10b981', bg: 'rgba(16,185,129,0.10)' },
};

const SECTOR_LABELS = {
  gemeenten: 'Gemeenten', onderwijs: 'Onderwijs', mkb: 'MKB',
  'non-profit': 'Non-profit', adviesbureaus: 'Adviesbureaus',
};

export default function StoryCard({ story }) {
  const { slug, title, oneLineResult, sector, hero } = story;
  const sc = SECTOR_COLORS[sector] ?? { color: 'var(--primary)', bg: 'var(--secondary)' };

  return (
    <Link to={`/verhalen/${slug}`} className="no-underline group">
      <div className="rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
        {/* Visuele band */}
        <div
          className="relative flex items-center justify-center"
          style={{
            minHeight: 160,
            background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientTo})`,
          }}
        >
          <span style={{ fontSize: 52 }} aria-hidden="true">{hero.emoji}</span>
          <span
            className="absolute bottom-3 left-4 text-[11px] font-bold px-3 py-1 rounded-full"
            style={{
              background: sc.bg,
              color: sc.color,
              border: `1px solid ${sc.color}30`,
            }}
          >
            {SECTOR_LABELS[sector] ?? sector}
          </span>
        </div>

        {/* Tekst */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <p className="text-muted-foreground text-[12px] font-semibold leading-snug">
            {oneLineResult}&nbsp;<ExampleBadge />
          </p>
          <h3 className="text-foreground font-bold text-[16px] leading-snug" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {title}&nbsp;<ExampleBadge />
          </h3>
          <div
            className="mt-auto flex items-center gap-1 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2"
            style={{ color: sc.color }}
          >
            Lees het verhaal <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}
