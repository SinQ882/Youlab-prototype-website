import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { MockBoard, MockCanvas, MockChat } from './Mockups.jsx';

export default function HeroSection({ navigate }) {
  return (
    <section className="bg-background pt-[calc(68px+80px)] pb-0 overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(64,87,255,0.09) 0%, transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-8 relative">
        {/* Centred text block */}
        <div className="flex flex-col items-center text-center max-w-[896px] mx-auto">
          {/* Pill label */}
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold tracking-[0.2px] mb-8">
            Het platform voor projecten die impact maken
          </span>

          {/* Display heading */}
          <h1 className="text-foreground font-semibold leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(42px, 6.5vw, 80px)' }}>
            Werk samen aan projecten die{' '}
            <span className="bg-gradient-to-br from-primary via-[#6575ff] to-[#a855f7] bg-clip-text text-transparent">
              écht iets verbeteren
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-xl leading-7 max-w-[672px] mb-8">
            YouLab is het online platform waar teams samen vraagstukken aanpakken.
            Met een helder stappenplan, praktische werkvormen en alles op één plek.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
            <Button variant="gradient" size="lg">
              Plan een gratis demo <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('toolbox')}>
              Bekijk de toolbox <ChevronRight size={16} />
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-20">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[13px] text-muted-foreground">
              Beoordeeld met <strong className="text-foreground font-semibold">4.8/5</strong> · Geen account nodig
            </span>
          </div>
        </div>

        {/* ── 3-panel mockup grid (Figma ratio: 3 + 2 + 5 cols) ── */}
        <div className="grid grid-cols-10 gap-4 h-[480px] overflow-hidden">
          {/* Panel 1 — Board */}
          <div className="col-span-3 rounded-xl overflow-hidden border border-border bg-card shadow-lg flex flex-col">
            <div className="bg-muted/60 border-b border-border px-3 py-2 flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="flex-1 bg-card rounded text-[10px] text-muted-foreground text-center py-0.5 px-2 ml-2 border border-border">
                app.youlab.nl/board
              </div>
            </div>
            <div className="flex-1 p-3 overflow-hidden">
              <MockBoard />
            </div>
          </div>

          {/* Panel 2 — Canvas */}
          <div className="col-span-2 rounded-xl overflow-hidden border border-border bg-card shadow-lg flex flex-col">
            <div className="bg-muted/60 border-b border-border px-3 py-2 flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 p-3 overflow-hidden">
              <MockCanvas type="empathy" />
            </div>
          </div>

          {/* Panel 3 — Chat */}
          <div className="col-span-5 rounded-xl overflow-hidden border border-border bg-card shadow-lg flex flex-col">
            <div className="bg-muted/60 border-b border-border px-3 py-2 flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="flex-1 bg-card rounded text-[10px] text-muted-foreground text-center py-0.5 px-2 ml-2 border border-border">
                app.youlab.nl/werkvormen
              </div>
            </div>
            <div className="flex-1 p-4 overflow-hidden">
              <MockChat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
