import { useState, useRef } from 'react';

const steps = [
  {
    n: '01',
    title: 'Ontmoeten',
    subtitle: 'Wie zijn erbij betrokken?',
    desc: 'Breng alle betrokkenen bij elkaar en verken het vraagstuk. Wie zijn de stakeholders? Wat speelt er precies? Wat zijn de kansen en beperkingen?',
    example: 'Een gemeente nodigt bewoners, woningcorporatie en welzijnswerk uit. Via de Stakeholderanalyse wordt meteen duidelijk wie welke belangen heeft — en wie er tot dan toe ontbrak.',
    emoji: '🤝',
    color: '#4057ff',
    bg: 'rgba(64,87,255,0.10)',
    tools: ['Stakeholderanalyse', 'Intakegesprek', 'Contextschets', 'Doelstelling'],
  },
  {
    n: '02',
    title: 'Ontdekken',
    subtitle: 'Wat is er echt aan de hand?',
    desc: 'Onderzoek de situatie in de diepte en vind de echte oorzaken. Interviews, empathie en systeemdenken staan centraal. Voorkom dat je het verkeerde probleem oplost.',
    example: 'Via de Empathy Map ontdekte een onderwijsteam dat studenten niet gebrek aan motivatie hadden, maar gebrek aan overzicht. Dat inzicht veranderde de hele aanpak.',
    emoji: '🔍',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    tools: ['Interviews', 'Empathy Map', 'Systeemmap', 'Customer Journey'],
  },
  {
    n: '03',
    title: 'Ontwikkelen',
    subtitle: 'Wat kan de oplossing zijn?',
    desc: 'Genereer ideeën, bouw prototypes en test ze met echte gebruikers. Van ruwe schets naar geconcretiseerd en gevalideerd concept dat echt werkt in de praktijk.',
    example: 'Een MKB-team bedacht in een ideeënsessie 14 mogelijke oplossingen. Het Prototype Canvas hielp hen de drie meest kansrijke te kiezen en snel te testen.',
    emoji: '💡',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.10)',
    tools: ['Ideeënsessie', 'Prototype Canvas', 'Business Model Canvas', 'Value Proposition'],
  },
  {
    n: '04',
    title: 'Organiseren',
    subtitle: 'Hoe voeren we het uit?',
    desc: 'Vertaal het concept naar een concreet uitvoeringsplan. Taken, verantwoordelijken, mijlpalen en deadlines — allemaal op één plek, zodat niets verloren gaat.',
    example: 'Dankzij het Actieplan in YouLab wist elk teamlid precies wat er van hen verwacht werd. Geen losse e-mails meer, geen vergeten acties — het project liep op schema.',
    emoji: '🚀',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.10)',
    tools: ['Actieplan', 'Taakverdeling', 'Projectbord', 'Voortgangsmonitoring'],
  },
];

function StepCard({ step, navigate }) {
  return (
    <div style={{
      background: 'var(--card)',
      borderRadius: 20,
      padding: 'clamp(20px,2.5vw,32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      borderTop: `4px solid ${step.color}`,
      position: 'relative',
      overflow: 'hidden',
      color: 'var(--card-foreground)',
      height: '100%',
    }}>
      {/* Ghost number */}
      <div style={{
        position: 'absolute', right: 12, bottom: 4,
        fontSize: 96, fontWeight: 900, color: step.color,
        opacity: 0.06, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        {step.n}
      </div>

      {/* Icon + phase */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: step.bg, fontSize: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {step.emoji}
        </div>
        <div>
          <span style={{
            display: 'inline-block', background: step.bg, color: step.color,
            fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, marginBottom: 2,
          }}>
            Fase {step.n}
          </span>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>
            {step.subtitle}
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 'clamp(18px,2vw,22px)', fontWeight: 800, color: 'var(--card-foreground)', letterSpacing: -0.4, margin: 0 }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>
        {step.desc}
      </p>

      {/* Mini-voorbeeld */}
      <div style={{
        background: step.bg,
        borderRadius: 10,
        padding: '10px 14px',
        borderLeft: `3px solid ${step.color}`,
      }}>
        <p style={{ fontSize: 13, color: 'var(--foreground)', lineHeight: 1.65, margin: 0 }}>
          {step.example}
        </p>
      </div>

      {/* Tool-tags — klikbaar naar toolbox */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 4 }}>
        {step.tools.map((tool, j) => (
          <button
            key={j}
            onClick={() => navigate && navigate('toolbox')}
            style={{
              background: step.bg, color: step.color,
              fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 8,
              border: 'none', cursor: navigate ? 'pointer' : 'default',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => { if (navigate) e.target.style.opacity = '0.7'; }}
            onMouseLeave={e => { e.target.style.opacity = '1'; }}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div style={{ textAlign: 'center', paddingBottom: 40 }}>
      <span style={{
        background: 'rgba(64,87,255,0.18)', color: '#8B9CF4',
        fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 100,
        letterSpacing: 0.2, display: 'inline-block', border: '1px solid rgba(85,112,255,0.28)',
      }}>
        De aanpak
      </span>
      <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#fff', marginTop: 12, marginBottom: 8, letterSpacing: -0.8, lineHeight: 1.15 }}>
        Een bewezen aanpak in vier stappen
      </h2>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 500, margin: '0 auto', lineHeight: 1.65 }}>
        Van vraagstuk verkennen tot uitvoerbaar plan. Klik op een werkvorm om te zien wat erin zit.
      </p>
    </div>
  );
}

function DesktopGrid({ navigate }) {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #060a1a 0%, #0b0f2a 55%, #111535 100%)',
      padding: 'clamp(48px,8vh,80px) clamp(20px,5vw,80px)',
    }}>
      {/* Ambient glows */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,87,255,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,104,238,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          <SectionHeader />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}>
            {steps.map((step, i) => (
              <StepCard key={i} step={step} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileSwiper({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isHorizontal = useRef(false);

  function goTo(idx) { setActiveIdx(Math.max(0, Math.min(steps.length - 1, idx))); }
  function onTouchStart(e) { touchStartX.current = e.touches[0].clientX; touchStartY.current = e.touches[0].clientY; isHorizontal.current = false; }
  function onTouchMove(e) {
    if (!isHorizontal.current) {
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (dx > 6 || dy > 6) isHorizontal.current = dx > dy;
    }
    if (isHorizontal.current) e.preventDefault();
  }
  function onTouchEnd(e) {
    if (!isHorizontal.current) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { if (dx < 0) goTo(activeIdx + 1); else goTo(activeIdx - 1); }
  }

  return (
    <section style={{ background: 'linear-gradient(160deg, #060a1a 0%, #0b0f2a 55%, #111535 100%)', paddingBottom: 48, paddingTop: 48 }}>
      <div style={{ padding: '0 20px' }}>
        <SectionHeader />
      </div>
      <div style={{ overflow: 'hidden' }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div style={{ display: 'flex', transform: `translateX(${-activeIdx * 100}vw)`, transition: 'transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94)', willChange: 'transform' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: '100vw', flexShrink: 0, padding: '4px 20px 12px' }}>
              <StepCard step={step} navigate={navigate} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 20 }}>
        <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
          {steps.map((step, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === activeIdx ? 26 : 8, height: 8, borderRadius: 100,
              background: i === activeIdx ? step.color : 'rgba(255,255,255,0.22)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease', flexShrink: 0,
            }} />
          ))}
        </div>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
          {activeIdx + 1} van {steps.length}
        </span>
      </div>
    </section>
  );
}

export default function ApproachSection({ navigate }) {
  return (
    <div id="aanpak">
      <div className="approach-desktop"><DesktopGrid navigate={navigate} /></div>
      <div className="approach-mobile"><MobileSwiper navigate={navigate} /></div>
    </div>
  );
}
