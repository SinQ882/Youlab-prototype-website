import { Link } from 'react-router-dom';
import ExampleBadge from '../ExampleBadge.jsx';
import { tools } from '../../data/tools.js';

const PHASE_META = {
  ontmoeten:   { label: 'Ontmoeten',   color: '#4361EE', bg: '#EEF2FF' },
  ontdekken:   { label: 'Ontdekken',   color: '#F59E0B', bg: '#FEF3C7' },
  ontwikkelen: { label: 'Ontwikkelen', color: '#10B981', bg: '#F0FDF4' },
  organiseren: { label: 'Organiseren', color: '#EF4444', bg: '#FFF1F2' },
};

export default function StoryApproach({ story, accentColor }) {
  const { approach } = story;
  const paragraphs = approach.narrative.split('\n\n').filter(Boolean);

  const usedTools = approach.tools
    .map(id => tools.find(t => t.id === id))
    .filter(Boolean);

  return (
    <section className="bg-muted/30 py-16 border-y border-border">
      <div className="max-w-[680px] mx-auto px-6">
        <h2
          className="text-foreground font-bold mb-8"
          style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
        >
          De aanpak&nbsp;<ExampleBadge />
        </h2>

        {/* 4O-fases als badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {approach.phases.map(phase => {
            const m = PHASE_META[phase];
            if (!m) return null;
            return (
              <span
                key={phase}
                className="px-3 py-1.5 rounded-full text-[12px] font-bold"
                style={{ background: m.bg, color: m.color }}
              >
                {m.label}
              </span>
            );
          })}
        </div>

        {/* Tools als klikbare chips */}
        {usedTools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {usedTools.map(tool => (
              <Link
                key={tool.id}
                to={`/toolbox#${tool.id}`}
                className="no-underline"
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold border transition-all duration-150 hover:opacity-75"
                  style={{
                    borderColor: `${accentColor}40`,
                    color: accentColor,
                    background: `${accentColor}0c`,
                  }}
                >
                  {tool.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Aanpak-narratief */}
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
