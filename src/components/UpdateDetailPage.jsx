import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { updates } from '../data/updates.js';
import Footer from './Footer.jsx';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* Cover image or styled placeholder */
function UpdateCover({ update }) {
  if (update.image) {
    return (
      <img
        src={update.image}
        alt={update.title}
        style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 20, display: 'block' }}
      />
    );
  }
  return (
    <div style={{
      height: 320,
      borderRadius: 20,
      background: `linear-gradient(135deg, ${update.color}20 0%, ${update.color}08 100%)`,
      border: `1px solid ${update.color}18`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: `${update.color}14` }} />
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: `${update.color}0A` }} />
      <div style={{ position: 'absolute', top: '30%', left: '20%', width: 80, height: 80, borderRadius: '50%', background: `${update.color}08` }} />
      <span style={{
        fontSize: 80, position: 'relative', zIndex: 1,
        filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.14))',
      }}>
        {update.emoji}
      </span>
      {/* Version badge in corner */}
      <div style={{
        position: 'absolute', bottom: 20, right: 20,
        background: `${update.color}22`, color: update.color,
        fontSize: 13, fontWeight: 800, padding: '6px 14px', borderRadius: 100,
        border: `1px solid ${update.color}30`,
      }}>
        {update.version}
      </div>
    </div>
  );
}

/* Renders a single body block */
function BodyBlock({ block, color }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 style={{
          fontSize: 22, fontWeight: 800, color: 'var(--foreground)',
          marginTop: 40, marginBottom: 12, letterSpacing: -0.5,
          paddingBottom: 10, borderBottom: '1px solid var(--border)',
        }}>
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 style={{
          fontSize: 17, fontWeight: 700, color: 'var(--foreground)',
          marginTop: 28, marginBottom: 8,
        }}>
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.75, marginBottom: 4 }}>
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '8px 0' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: 8,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: color, flexShrink: 0, marginTop: 8,
              }} />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div style={{ overflowX: 'auto', margin: '16px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr>
                {block.head.map((col, i) => (
                  <th key={i} style={{
                    textAlign: 'left', padding: '10px 16px',
                    background: 'var(--muted)', color: 'var(--muted-foreground)', fontWeight: 600,
                    borderBottom: '2px solid var(--border)',
                    borderRadius: i === 0 ? '8px 0 0 0' : i === block.head.length - 1 ? '0 8px 0 0' : 0,
                  }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      padding: '10px 16px',
                      color: j === 0 ? '#0B0B3B' : '#64748B',
                      fontWeight: j === 0 ? 600 : 400,
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function UpdateDetailPage({ navigate, updateId }) {
  const update = updates.find(u => u.id === updateId);

  if (!update) {
    return (
      <main style={{ paddingTop: 68, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>🔍</p>
          <h2 style={{ color: 'var(--foreground)', marginBottom: 12 }}>Update niet gevonden</h2>
          <button
            onClick={() => navigate('updates')}
            style={{ background: '#4361EE', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 24px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
          >
            Terug naar updates
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--background)' }}>

      {/* Back bar */}
      <div style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)', padding: '14px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <button
            onClick={() => navigate('updates')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: 600, color: 'var(--muted-foreground)',
              padding: '6px 0',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#4361EE'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
          >
            <ArrowLeft size={16} /> Alle updates
          </button>
        </div>
      </div>

      {/* Article */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Cover */}
        <UpdateCover update={update} />

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 28, marginBottom: 16 }}>
          <span style={{
            fontSize: 13, fontWeight: 700,
            background: `${update.tagColor}15`, color: update.tagColor,
            padding: '4px 12px', borderRadius: 8,
          }}>
            {update.tag}
          </span>
          <span style={{
            fontSize: 13, fontWeight: 600,
            background: 'var(--secondary)', color: 'var(--muted-foreground)',
            padding: '4px 12px', borderRadius: 8,
          }}>
            {update.version}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--muted-foreground)', fontSize: 13, marginLeft: 4 }}>
            <Calendar size={13} />
            {formatDate(update.date)}
          </div>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900,
          color: 'var(--foreground)', letterSpacing: -1, lineHeight: 1.1,
          marginBottom: 16,
        }}>
          {update.title}
        </h1>

        {/* Summary (lead paragraph) */}
        <p style={{
          fontSize: 17, color: 'var(--muted-foreground)', lineHeight: 1.7,
          marginBottom: 8,
          paddingBottom: 32, borderBottom: '1px solid var(--border)',
          fontWeight: 500,
        }}>
          {update.summary}
        </p>

        {/* Body blocks */}
        <div style={{ marginTop: 8 }}>
          {update.body.map((block, i) => (
            <BodyBlock key={i} block={block} color={update.color} />
          ))}
        </div>

        {/* Navigation: next/prev */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
          gap: 12, marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border)',
        }}>
          {/* Previous update */}
          {updates[updates.findIndex(u => u.id === updateId) + 1] && (() => {
            const prev = updates[updates.findIndex(u => u.id === updateId) + 1];
            return (
              <button
                onClick={() => navigate('update-detail', prev.id)}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 4,
                  background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14,
                  padding: '16px 20px', cursor: 'pointer', textAlign: 'left',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>← Oudere update</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--foreground)', maxWidth: 240 }}>{prev.title}</span>
              </button>
            );
          })()}

          {/* Back to overview */}
          <button
            onClick={() => navigate('updates')}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#4361EE', color: '#fff',
              border: 'none', borderRadius: 12,
              padding: '16px 24px', cursor: 'pointer',
              fontSize: 14, fontWeight: 700,
              boxShadow: '0 4px 14px rgba(67,97,238,0.35)',
              transition: 'opacity 0.2s',
              marginLeft: 'auto',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Alle updates bekijken
          </button>
        </div>
      </article>

      <Footer navigate={navigate} />
    </main>
  );
}
