import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from './ui/button.jsx';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 'calc(68px + 96px)', paddingBottom: 96 }}
    >
      {/* Warm abstract background shapes */}
      <div aria-hidden="true" className="pointer-events-none select-none" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Large warm amber circle — top right */}
        <div style={{
          position: 'absolute', top: -160, right: -180,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.13) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        {/* Primary blue glow — centre */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(64,87,255,0.08) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }} />
        {/* Soft coral — bottom left */}
        <div style={{
          position: 'absolute', bottom: -120, left: -100,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,113,133,0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />

        {/* Decorative floating rings */}
        <svg
          style={{ position: 'absolute', top: '15%', right: '8%', opacity: 0.12 }}
          width="320" height="320" viewBox="0 0 320 320"
          fill="none"
        >
          <circle cx="160" cy="160" r="155" stroke="#4057ff" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="120" stroke="#4057ff" strokeWidth="1" />
          <circle cx="160" cy="160" r="80" stroke="#f59e0b" strokeWidth="1" />
        </svg>

        {/* Small scattered dots grid — subtle texture */}
        <svg
          style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.08 }}
          width="200" height="200" viewBox="0 0 200 200"
          fill="none"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={20 + col * 40}
                cy={20 + row * 40}
                r="3"
                fill="#4057ff"
              />
            ))
          )}
        </svg>

        {/* Wavy connector line */}
        <svg
          style={{ position: 'absolute', top: '45%', left: '0', opacity: 0.06, width: '100%' }}
          height="60" viewBox="0 0 1200 60" preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30 Q1050 60 1200 30"
            stroke="#4057ff" strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          {/* Eyebrow pill */}
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
            Samenwerken aan vraagstukken die ertoe doen
          </span>

          {/* Headline */}
          <h1
            className="text-foreground font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
          >
            Van vraagstuk naar{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #4057ff 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              gedragen resultaat
            </span>
          </h1>

          {/* Subclaim */}
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-[580px]"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
            YouLab brengt teams, werkvormen en een bewezen aanpak samen op één plek — zodat projecten niet alleen starten, maar ook landen.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/platform" className="no-underline flex items-center gap-2">
                Ontdek hoe het werkt <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/platform" className="no-underline flex items-center gap-2">
                Bekijk het platform <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Abstract illustration — connected nodes/clusters representing collaboration */}
        <div
          className="mt-20 mx-auto"
          style={{ maxWidth: 780, position: 'relative' }}
          aria-hidden="true"
        >
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  const nodes = [
    { x: 390, y: 100, r: 48, color: '#4057ff', label: 'Vraagstuk', opacity: 0.12 },
    { x: 160, y: 240, r: 36, color: '#f59e0b', label: 'Inzicht', opacity: 0.15 },
    { x: 620, y: 240, r: 36, color: '#10b981', label: 'Aanpak', opacity: 0.15 },
    { x: 270, y: 360, r: 30, color: '#7c3aed', label: 'Team', opacity: 0.13 },
    { x: 510, y: 360, r: 30, color: '#ef4444', label: 'Actie', opacity: 0.12 },
    { x: 390, y: 440, r: 44, color: '#4057ff', label: 'Resultaat', opacity: 0.10 },
  ];

  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 2], [3, 4],
  ];

  return (
    <svg
      viewBox="0 0 780 520"
      width="100%"
      style={{ maxHeight: 340, filter: 'drop-shadow(0 4px 32px rgba(64,87,255,0.08))' }}
    >
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          {/* Outer glow ring */}
          <circle
            cx={n.x} cy={n.y} r={n.r + 16}
            fill={n.color}
            opacity={n.opacity * 0.5}
          />
          {/* Fill circle */}
          <circle
            cx={n.x} cy={n.y} r={n.r}
            fill={n.color}
            opacity={n.opacity * 2}
          />
          {/* Outline */}
          <circle
            cx={n.x} cy={n.y} r={n.r}
            fill="none"
            stroke={n.color}
            strokeWidth="1.5"
            opacity={0.5}
          />
          {/* Label */}
          <text
            x={n.x} y={n.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={n.r > 40 ? 13 : 11}
            fontWeight="700"
            fill={n.color}
            opacity={0.85}
            fontFamily="Inter, sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
