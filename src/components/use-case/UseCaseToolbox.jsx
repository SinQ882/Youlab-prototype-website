import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';
import { tools } from '../../data/tools.js';

export default function UseCaseToolbox({ data, accentColor }) {
  const { intro, toolSlugs } = data.toolbox;

  const selectedTools = toolSlugs
    .map(slug => tools.find(t => t.id === slug))
    .filter(Boolean);

  return (
    <section className="bg-muted/20 py-20 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="YouLab Toolbox"
          title={<>Welke tools passen hierbij&nbsp;<ExampleBadge /></>}
        />
        <p
          className="text-muted-foreground text-[16px] leading-relaxed mb-8"
          style={{ maxWidth: 600, margin: '0 auto 2rem', textAlign: 'center' }}
        >
          {intro}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {selectedTools.map(tool => (
            <Link
              key={tool.id}
              to={`/toolbox#${tool.id}`}
              className="no-underline group"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                style={{
                  borderColor: `${accentColor}45`,
                  color: accentColor,
                  background: `${accentColor}0c`,
                }}
              >
                {tool.name}
                <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/toolbox"
            className="text-sm font-semibold no-underline text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle tools in de Toolbox →
          </Link>
        </div>
      </div>
    </section>
  );
}
