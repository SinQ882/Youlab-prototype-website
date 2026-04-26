import { ArrowRight } from 'lucide-react';
import { updates } from '../data/updates.js';
import { PillBadge } from './ui.jsx';
import Footer from './Footer.jsx';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* Styled cover placeholder (or real image when available) */
function UpdateCover({ update, height = 220, radius = 16 }) {
  if (update.image) {
    return (
      <img
        src={update.image}
        alt={update.title}
        style={{ width: '100%', height, objectFit: 'cover', borderRadius: radius, display: 'block' }}
      />
    );
  }
  return (
    <div style={{
      height, borderRadius: radius,
      background: `linear-gradient(135deg, ${update.color}18 0%, ${update.color}08 100%)`,
      border: `1px solid ${update.color}20`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: `${update.color}12` }} />
      <div style={{ position: 'absolute', bottom: -30, left: -30, width: 130, height: 130, borderRadius: '50%', background: `${update.color}08` }} />
      <span style={{ fontSize: 48, position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.12))' }}>
        {update.emoji}
      </span>
    </div>
  );
}

export default function UpdatesPage({ navigate }) {
  return (
    <main style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--background)' }}>

      {/* Page header */}
      <section style={{ background: 'var(--card)', padding: '72px 24px 56px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <PillBadge>Nieuw in YouLab</PillBadge>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900,
            color: 'var(--foreground)', marginTop: 16, marginBottom: 16,
            letterSpacing: -1.5, lineHeight: 1.05,
          }}>
            Updates & nieuwe features
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted-foreground)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto' }}>
            Alles wat er nieuw is in YouLab — van UX-verbeteringen tot nieuwe werkvormen en prijswijzigingen.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0, left: 19,
            width: 2,
            background: 'linear-gradient(180deg, #4361EE30 0%, #4361EE10 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {updates.map((update, i) => (
              <div key={update.id} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>

                {/* Timeline dot */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1, marginTop: 4 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--card)',
                    border: `2px solid ${update.color}40`,
                    boxShadow: `0 0 0 4px ${update.color}10`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18,
                  }}>
                    {update.emoji}
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: 'var(--card)',
                    borderRadius: 20,
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('update-detail', update.id)}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${update.color}14`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}
                >
                  {/* Cover */}
                  <UpdateCover update={update} height={200} radius={0} />

                  {/* Content */}
                  <div style={{ padding: '24px 28px 28px' }}>
                    {/* Meta row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700,
                        background: `${update.tagColor}15`,
                        color: update.tagColor,
                        padding: '3px 10px', borderRadius: 6,
                      }}>
                        {update.tag}
                      </span>
                      <span style={{
                        fontSize: 12, fontWeight: 600,
                        background: 'var(--secondary)', color: 'var(--secondary-foreground)',
                        padding: '3px 10px', borderRadius: 6,
                      }}>
                        {update.version}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--muted-foreground)', marginLeft: 4 }}>
                        {formatDate(update.date)}
                      </span>
                    </div>

                    <h2 style={{
                      fontSize: 20, fontWeight: 800, color: 'var(--foreground)',
                      marginBottom: 8, letterSpacing: -0.4, lineHeight: 1.3,
                    }}>
                      {update.title}
                    </h2>
                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: 20 }}>
                      {update.summary}
                    </p>

                    {/* Read more */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: update.tagColor, fontWeight: 600, fontSize: 14 }}>
                      Lees meer <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  );
}
