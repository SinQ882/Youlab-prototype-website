import { Link } from 'react-router-dom';
import { Button } from '../ui/button.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

export default function UseCaseCta({ data, accentColor }) {
  const { heading, body, primaryCta, secondaryCta } = data.cta;
  return (
    <section
      className="py-24"
      style={{
        background: `linear-gradient(140deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 82%, ${accentColor}) 100%)`,
      }}
    >
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <h2
          className="font-extrabold tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(26px, 4vw, 46px)', color: '#ffffff' }}
        >
          {heading}&nbsp;<ExampleBadge />
        </h2>
        <p
          className="leading-relaxed mb-10"
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.68)' }}
        >
          {body}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="xl"
            style={{ background: accentColor, color: '#fff', border: 'none', boxShadow: `0 4px 20px ${accentColor}50` }}
            className="hover:-translate-y-0.5 transition-transform"
            asChild
          >
            <Link to={primaryCta.href} className="no-underline">{primaryCta.label}</Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            style={{ borderColor: 'rgba(255,255,255,0.28)', color: '#ffffff', background: 'transparent' }}
            asChild
          >
            <Link to={secondaryCta.href} className="no-underline">{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
