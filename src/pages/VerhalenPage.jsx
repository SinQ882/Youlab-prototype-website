import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories/index.js';
import Footer from '../components/Footer.jsx';
import StoryCard from '../components/story/StoryCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ExampleBadge from '../components/ExampleBadge.jsx';
import { Button } from '../components/ui/button.jsx';

const SECTOR_FILTERS = [
  { slug: null,            label: 'Alles' },
  { slug: 'gemeenten',     label: 'Gemeenten' },
  { slug: 'onderwijs',     label: 'Onderwijs' },
  { slug: 'mkb',           label: 'MKB' },
  { slug: 'non-profit',    label: 'Non-profit' },
  { slug: 'adviesbureaus', label: 'Adviesbureaus' },
];

const SECTOR_COLORS = {
  gemeenten: '#4057ff', onderwijs: '#7c3aed', mkb: '#f59e0b',
  'non-profit': '#ef4444', adviesbureaus: '#10b981',
};

export default function VerhalenPage() {
  const [activeSector, setActiveSector] = useState(null);

  const filtered = activeSector
    ? stories.filter(s => s.sector === activeSector)
    : stories;

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Hero */}
      <section className="bg-background py-20 border-b border-border">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-6">
            Projectverhalen&nbsp;<ExampleBadge />
          </span>
          <h1
            className="text-foreground font-extrabold tracking-tight mb-5"
            style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}
          >
            Wat teams bereiken met YouLab
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Echte projecten, herkenbare uitdagingen. Hier verzamelen we verhalen van teams die met YouLab werkten — per sector, fase en type vraagstuk.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-background py-16 pb-24">
        <div className="max-w-[1120px] mx-auto px-6">
          {/* Sector-filterknoppen */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {SECTOR_FILTERS.map(f => {
              const isActive = activeSector === f.slug;
              const color = f.slug ? SECTOR_COLORS[f.slug] : 'var(--primary)';
              return (
                <button
                  key={f.slug ?? 'all'}
                  onClick={() => setActiveSector(f.slug)}
                  className="rounded-full px-4 py-2 text-sm font-semibold border transition-all duration-150 cursor-pointer"
                  style={{
                    background: isActive ? `${color}12` : 'transparent',
                    borderColor: isActive ? `${color}50` : 'var(--border)',
                    color: isActive ? color : 'var(--muted-foreground)',
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Verhalen-grid of lege staat */}
          {filtered.length === 0 ? (
            <div
              className="rounded-2xl p-12 text-center text-muted-foreground text-[15px] max-w-[500px] mx-auto"
              style={{ border: '2px dashed var(--border)', background: 'var(--muted)' }}
            >
              Binnenkort delen we hier verhalen uit deze sector.
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
              {filtered.map(s => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA onderaan */}
      <section className="bg-muted/40 py-16 border-t border-border">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-foreground font-semibold text-lg mb-3">
            Heb jij een verhaal?
          </p>
          <p className="text-muted-foreground mb-6">
            Werk jij met YouLab aan een project en wil je het delen? We vertellen graag jouw verhaal.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/kennismaken" className="no-underline">Vertel het ons →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
