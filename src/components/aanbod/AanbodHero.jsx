import ExampleBadge from '../ExampleBadge.jsx';

export default function AanbodHero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'calc(68px + 80px)', paddingBottom: 80 }}>
      <div aria-hidden="true" className="pointer-events-none" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,87,255,0.09) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-[760px] mx-auto px-6 text-center relative">
        <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
          Het YouLab-aanbod
        </span>

        <h1 className="text-foreground font-extrabold leading-[1.08] tracking-tight mb-5" style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
          Zo werkt u samen<br />met YouLab <ExampleBadge />
        </h1>

        <p className="text-muted-foreground font-semibold mb-4" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
          Zelfstandig of met begeleiding — u kiest wat past <ExampleBadge />
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-[580px] mx-auto" style={{ fontSize: 'clamp(15px, 1.8vw, 17px)' }}>
          YouLab is beschikbaar als zelfstandig platform én als begeleid traject op locatie.
          Kom je er zelf niet uit, of heb je net even dat eerste duwtje nodig? Dan bieden we Kickstarts,
          Ontwerpsprints en trajecten voor Complexe Uitdagingen — waarbij TriMotion-facilitators je team
          door de 4O-aanpak leiden. <ExampleBadge />
        </p>
      </div>
    </section>
  );
}
