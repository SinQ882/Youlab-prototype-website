import { Link } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

export default function AanbodCta() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #f7f8fc 0%, #eef0ff 50%, #fef9ee 100%)' }}
    >
      <div aria-hidden="true" className="pointer-events-none" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,87,255,0.10) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-[640px] mx-auto px-6 text-center relative">
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
          Hulp nodig bij de keuze?
        </span>

        <h2 className="text-foreground font-extrabold leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}>
          Niet zeker welk aanbod past? <ExampleBadge />
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-[480px] mx-auto">
          Plan een vrijblijvend gesprek. We denken graag mee over welke aanpak het beste aansluit bij jullie situatie. <ExampleBadge />
        </p>

        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/kennismaken" className="no-underline flex items-center gap-2">
              Plan een vrijblijvend gesprek <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/platform" className="no-underline flex items-center gap-2">
              <Monitor size={16} /> Bekijk het platform
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
