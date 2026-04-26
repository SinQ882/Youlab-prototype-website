import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button.jsx';

export default function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'var(--muted)',
      }}
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,87,255,0.10) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 60%)',
        }} />
        {/* Ring accent */}
        <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05 }}
          width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="295" stroke="#4057ff" strokeWidth="2" />
          <circle cx="300" cy="300" r="240" stroke="#4057ff" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[680px] mx-auto px-6 text-center relative">
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
          Laagdrempelig beginnen
        </span>

        <h2
          className="text-foreground font-extrabold leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          Nieuwsgierig?
          <br />
          Bekijk eerst een voorbeeldproject.
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-[480px] mx-auto">
          Geen verplichtingen, geen verkoopgesprek. Verken hoe YouLab werkt aan de hand van een concreet voorbeeld — en beslis daarna.
        </p>

        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/verhalen" className="no-underline flex items-center gap-2">
              Bekijk een voorbeeldproject <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/kennismaken" className="no-underline flex items-center gap-2">
              <Calendar size={16} /> Plan een kennismaking
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
