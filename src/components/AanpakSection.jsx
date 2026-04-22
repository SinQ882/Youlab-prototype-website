import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading.jsx';

const stappen = [
  {
    n: '01',
    emoji: '🤝',
    title: 'Ontmoeten',
    subtitle: 'Wie zijn erbij betrokken?',
    desc: 'Breng alle betrokkenen bij elkaar en verken het vraagstuk. Wie zijn de stakeholders? Wat speelt er precies? Welke kansen en beperkingen zijn er?',
    color: '#4057ff',
    bg: 'rgba(64,87,255,0.10)',
  },
  {
    n: '02',
    emoji: '🔍',
    title: 'Ontdekken',
    subtitle: 'Wat is er echt aan de hand?',
    desc: 'Duik in de situatie en zoek de echte oorzaken. Interviews, empathie en systeemdenken staan centraal. Voorkom dat je het verkeerde probleem oplost.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
  },
  {
    n: '03',
    emoji: '💡',
    title: 'Ontwikkelen',
    subtitle: 'Wat kan de oplossing zijn?',
    desc: 'Genereer ideeën, bouw prototypes en test ze met echte gebruikers. Van ruwe schets naar geconcretiseerd concept dat echt werkt in de praktijk.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.10)',
  },
  {
    n: '04',
    emoji: '🚀',
    title: 'Organiseren',
    subtitle: 'Hoe voeren we het uit?',
    desc: 'Vertaal het concept naar een concreet uitvoeringsplan. Taken, verantwoordelijken, mijlpalen en deadlines — alles op één plek, zodat niets verloren gaat.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.10)',
  },
];

function StepCard({ stap }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        borderRadius: 20,
        padding: 'clamp(20px, 2.5vw, 32px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        borderTop: `4px solid ${stap.color}`,
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Ghost number */}
      <div style={{
        position: 'absolute', right: 12, bottom: 4,
        fontSize: 96, fontWeight: 900,
        color: stap.color, opacity: 0.06,
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        {stap.n}
      </div>

      {/* Icon row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: stap.bg, fontSize: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {stap.emoji}
        </div>
        <div>
          <span style={{
            display: 'inline-block', background: stap.bg, color: stap.color,
            fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 6, marginBottom: 2,
          }}>
            Fase {stap.n}
          </span>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>
            {stap.subtitle}
          </div>
        </div>
      </div>

      <h3 style={{
        fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800,
        color: 'var(--card-foreground)', letterSpacing: -0.4, margin: 0,
      }}>
        {stap.title}
      </h3>

      <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7, margin: 0 }}>
        {stap.desc}
      </p>

      {/* Link to toolbox */}
      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        <Link
          to="/toolbox"
          style={{
            color: stap.color, fontSize: 13, fontWeight: 600,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
          }}
        >
          Bekijk werkvormen →
        </Link>
      </div>
    </div>
  );
}

function ConnectorLine({ color }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 2, minHeight: 32, background: `linear-gradient(to bottom, ${color}, transparent)`,
        margin: '0 auto', opacity: 0.25,
      }}
    />
  );
}

export default function AanpakSection() {
  return (
    <section
      id="aanpak"
      style={{
        background: 'linear-gradient(160deg, #060a1a 0%, #0b0f2a 55%, #111535 100%)',
        padding: 'clamp(48px, 8vh, 80px) clamp(20px, 5vw, 80px)',
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: 'relative' }}>
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(64,87,255,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
          {/* Heading */}
          <div style={{ textAlign: 'center', paddingBottom: 40 }}>
            <span style={{
              background: 'rgba(64,87,255,0.18)', color: '#8B9CF4',
              fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 100,
              letterSpacing: 0.2, display: 'inline-block',
              border: '1px solid rgba(85,112,255,0.28)',
            }}>
              De 4O-aanpak
            </span>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800,
              color: '#fff', marginTop: 12, marginBottom: 8,
              letterSpacing: -0.8, lineHeight: 1.15,
            }}>
              Een reis, geen processchema
            </h2>
            <p style={{
              fontSize: 15, color: 'rgba(255,255,255,0.45)',
              maxWidth: 520, margin: '0 auto', lineHeight: 1.65,
            }}>
              Vier fasen die teams meenemen van vraag naar uitvoering — stap voor stap, altijd met de werkelijkheid als vertrekpunt.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="aanpak-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {stappen.map((stap, i) => (
              <StepCard key={i} stap={stap} />
            ))}
          </div>

          {/* Mobile vertical journey */}
          <div className="aanpak-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
            {stappen.map((stap, i) => (
              <div key={i}>
                <StepCard stap={stap} />
                {i < stappen.length - 1 && <ConnectorLine color={stap.color} />}
              </div>
            ))}
          </div>

          {/* CTA to Toolbox */}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              to="/toolbox"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(64,87,255,0.18)', color: '#8B9CF4',
                border: '1px solid rgba(85,112,255,0.28)',
                borderRadius: 12, padding: '12px 24px',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Bekijk alle werkvormen in de Toolbox →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
