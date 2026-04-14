import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const steps = [
  {
    n: '01',
    title: 'Ontmoeten',
    subtitle: 'Wie zijn erbij betrokken?',
    desc: 'Breng alle betrokkenen bij elkaar en verken het vraagstuk. Wie zijn de stakeholders? Wat speelt er precies? Wat zijn de kansen en beperkingen van dit project?',
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
    emoji: '💡',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.10)',
    tools: ['Ideeënsessie', 'Prototype Canvas', 'Business Model Canvas', 'Value Proposition'],
  },
  {
    n: '04',
    title: 'Organiseren',
    subtitle: 'Hoe voeren we het uit?',
    desc: 'Vertaal het concept naar een concreet uitvoeringsplan. Taken, verantwoordelijken, mijlpalen en deadlines — allemaal op één plek in YouLab, zodat niets verloren gaat.',
    emoji: '🚀',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.10)',
    tools: ['Actieplan', 'Taakverdeling', 'Projectbord', 'Voortgangsmonitoring'],
  },
];

function StepCard({ step, height }) {
  return (
    <div style={{
      background: 'var(--card)',
      borderRadius: 24,
      padding: 'clamp(22px,3vw,36px)',
      height: height || 'auto',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)',
      borderTop: `4px solid ${step.color}`,
      position: 'relative',
      overflow: 'hidden',
      color: 'var(--card-foreground)',
    }}>
      {/* Ghost number */}
      <div style={{
        position: 'absolute', right: 16, bottom: 8,
        fontSize: 110, fontWeight: 900, color: step.color,
        opacity: 0.065, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        {step.n}
      </div>

      {/* Icon + phase */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div style={{
          width: 50, height: 50, borderRadius: 14,
          background: step.bg, fontSize: 22,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {step.emoji}
        </div>
        <div>
          <span style={{
            display: 'inline-block', background: step.bg, color: step.color,
            fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 6, marginBottom: 3,
          }}>
            Fase {step.n}
          </span>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>
            {step.subtitle}
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 800, color: 'var(--card-foreground)', marginBottom: 10, letterSpacing: -0.5 }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7, flex: 1 }}>
        {step.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 18 }}>
        {step.tools.map((tool, j) => (
          <span key={j} style={{ background: step.bg, color: step.color, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 8 }}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ hint }) {
  return (
    <div style={{ textAlign: 'center', padding: 'clamp(28px,4.5vh,52px) 24px 20px' }}>
      <span style={{
        background: 'rgba(64,87,255,0.18)', color: '#8B9CF4',
        fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 100,
        letterSpacing: 0.2, display: 'inline-block', border: '1px solid rgba(85,112,255,0.28)',
      }}>
        De aanpak
      </span>
      <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, color: '#fff', marginTop: 12, marginBottom: 6, letterSpacing: -0.8, lineHeight: 1.15 }}>
        Een bewezen aanpak in vier stappen
      </h2>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: 0.4 }}>{hint}</p>
    </div>
  );
}

function DesktopTrack() {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);
  const dotsRef    = useRef(null);
  const barFillRef = useRef(null);
  const rafRef     = useRef(null);

  function updateLayout() {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;
    const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
    wrapper.style.height = `${window.innerHeight + maxTranslate}px`;
  }

  function updateScroll() {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    const dotsEl  = dotsRef.current;
    const barFill = barFillRef.current;
    if (!wrapper || !track) return;
    const rect           = wrapper.getBoundingClientRect();
    const totalScrollable = wrapper.offsetHeight - window.innerHeight;
    const scrolled       = Math.max(0, -rect.top);
    const progress       = totalScrollable > 0 ? Math.min(1, scrolled / totalScrollable) : 0;
    const maxTranslate   = Math.max(0, track.scrollWidth - window.innerWidth);
    track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    if (barFill) barFill.style.transform = `scaleX(${progress})`;
    if (dotsEl) {
      const activeIdx = Math.round(progress * (steps.length - 1));
      Array.from(dotsEl.children).forEach((dot, i) => {
        const active = i === activeIdx;
        dot.style.background = active ? '#fff' : 'rgba(255,255,255,0.22)';
        dot.style.width      = active ? '26px' : '8px';
      });
    }
  }

  useLayoutEffect(() => { updateLayout(); }, []);

  useEffect(() => {
    updateScroll();
    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    }
    function onResize() { updateLayout(); updateScroll(); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        background: 'linear-gradient(160deg, #060a1a 0%, #0b0f2a 55%, #111535 100%)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ position: 'absolute', top: '15%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,87,255,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,104,238,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <SectionHeader hint="Scroll verder om alle stappen te ontdekken →" />

        <div ref={trackRef} style={{
          display: 'flex', gap: 20,
          paddingLeft:  'calc((100vw - min(500px, 82vw)) / 2)',
          paddingRight: 'calc((100vw - min(500px, 82vw)) / 2)',
          flex: 1, alignItems: 'center', paddingBottom: 8, willChange: 'transform',
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: 'min(500px, 82vw)', flexShrink: 0 }}>
              <StepCard step={step} height="clamp(300px,50vh,420px)" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 24px 14px', flexShrink: 0 }}>
          <div ref={dotsRef} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {steps.map((_, i) => (
              <div key={i} style={{
                height: 8, width: i === 0 ? 26 : 8, borderRadius: 100,
                background: i === 0 ? '#fff' : 'rgba(255,255,255,0.22)',
                transition: 'width 0.3s ease, background 0.3s ease', flexShrink: 0,
              }} />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', flexShrink: 0 }}>
          <div ref={barFillRef} style={{
            height: '100%',
            background: 'linear-gradient(90deg, #4057ff, #7B68EE, #a855f7)',
            transformOrigin: 'left center', transform: 'scaleX(0)',
          }} />
        </div>
      </div>
    </div>
  );
}

function MobileSwiper() {
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
    <section style={{ background: 'linear-gradient(160deg, #060a1a 0%, #0b0f2a 55%, #111535 100%)', paddingBottom: 48 }}>
      <SectionHeader hint="Swipe om alle stappen te ontdekken →" />
      <div style={{ overflow: 'hidden' }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div style={{ display: 'flex', transform: `translateX(${-activeIdx * 100}vw)`, transition: 'transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94)', willChange: 'transform' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: '100vw', flexShrink: 0, padding: '4px 20px 12px' }}>
              <StepCard step={step} />
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

export default function ApproachSection() {
  return (
    <div id="aanpak">
      <div className="approach-desktop"><DesktopTrack /></div>
      <div className="approach-mobile"><MobileSwiper /></div>
    </div>
  );
}
