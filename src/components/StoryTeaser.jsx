import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import ExampleBadge from './ExampleBadge.jsx';

export default function StoryTeaser() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Uitgelicht verhaal"
          title="Wat teams vertellen"
          center
        />

        {/* Featured story card */}
        <div
          className="rounded-2xl border border-border bg-card overflow-hidden"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {/* Visual side */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(64,87,255,0.15) 0%, rgba(245,158,11,0.12) 100%)',
              minHeight: 280,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 40,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🏘️</div>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(64,87,255,0.12)',
                  color: '#4057ff',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 100,
                  border: '1px solid rgba(64,87,255,0.2)',
                }}
              >
                Gemeente
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="p-10 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[13px] font-semibold text-muted-foreground">Wijkvernieuwing Arnhem</span>
              <ExampleBadge />
            </div>

            <h3
              className="text-foreground font-bold leading-snug"
              style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
            >
              Van versnipperde overleggen naar één gedragen actieplan
            </h3>

            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Een gemeente bracht 12 partijen samen rond leefbaarheid in drie wijken. Via de Empathy Map kwamen inzichten boven tafel die geen van de partijen verwacht had. In 6 weken: van analyse naar een plan gedragen door bewoners, woningcorporatie en welzijnswerk.
            </p>

            <Link
              to="/verhalen"
              className="no-underline inline-flex items-center gap-2 font-semibold text-[15px] mt-2 transition-all"
              style={{ color: '#4057ff' }}
            >
              Lees het verhaal <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Link to all stories */}
        <div className="text-center mt-8">
          <Link
            to="/verhalen"
            className="no-underline text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle projectverhalen →
          </Link>
        </div>
      </div>
    </section>
  );
}
