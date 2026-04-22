import { Link } from 'react-router-dom';
import { Button } from '../ui/button.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

function HeroIllustration({ color }) {
  const nodes = [
    { cx: 80,  cy: 60,  emoji: '❓' },
    { cx: 230, cy: 35,  emoji: '💡' },
    { cx: 370, cy: 75,  emoji: '🗺️' },
    { cx: 110, cy: 165, emoji: '🤝' },
    { cx: 260, cy: 155, emoji: '⚡' },
    { cx: 390, cy: 145, emoji: '✅' },
  ];
  const edges = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[1,3]];
  const id = `hg${color.replace('#','')}`;
  return (
    <svg viewBox="0 0 460 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 460 }} aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.14" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="235" cy="110" rx="215" ry="105" fill={`url(#${id})`} />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={color} strokeOpacity="0.22" strokeWidth="1.5"
          strokeDasharray="5 4"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={22} fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
          <text x={n.cx} y={n.cy + 6} textAnchor="middle" fontSize="13" style={{ fontFamily: 'system-ui' }}>
            {n.emoji}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function UseCaseHero({ data, accentColor, label }) {
  const { tagline, subclaim, primaryCta, secondaryCta } = data.hero;

  // Split tagline op em-dash voor twee-kleurige kop; zonder dash: volledige kop in accentkleur
  const dashIdx = tagline.indexOf('—');
  const part1 = dashIdx > -1 ? tagline.slice(0, dashIdx).trim() : tagline;
  const part2 = dashIdx > -1 ? tagline.slice(dashIdx + 1).trim() : null;

  return (
    <section
      style={{
        paddingTop: 68,
        background: `radial-gradient(ellipse 900px 500px at 75% 40%, ${accentColor}12, transparent 70%)`,
      }}
    >
      <div
        className="max-w-[1120px] mx-auto px-6 py-20 grid gap-12 items-center"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {/* Tekst */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-6">
            Voor {label}&nbsp;<ExampleBadge />
          </span>

          <h1
            className="font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 62px)', color: 'var(--foreground)' }}
          >
            <span style={{ color: accentColor }}>{part1}</span>
            {part2 && (
              <>
                {' '}
                <span style={{ color: 'var(--foreground)' }}>— {part2}</span>
              </>
            )}
          </h1>

          <p
            className="text-muted-foreground leading-relaxed mb-10"
            style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', maxWidth: 520 }}
          >
            {subclaim}&nbsp;<ExampleBadge />
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" size="lg" asChild>
              <Link to={primaryCta.href} className="no-underline">{primaryCta.label}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={secondaryCta.href} className="no-underline">{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        {/* Illustratie — verborgen op mobiel */}
        <div className="hidden lg:flex items-center justify-center">
          <HeroIllustration color={accentColor} />
        </div>
      </div>
    </section>
  );
}
