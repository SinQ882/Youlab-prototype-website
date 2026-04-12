const C = {
  navy: '#0B0B3B',
  blue: '#4361EE',
  purple: '#7B68EE',
  gray: '#64748B',
  green: '#10B981',
  yellow: '#F59E0B',
};

export function Section({ children, bg, py = 80, id }) {
  return (
    <section id={id} style={{ background: bg || 'transparent', padding: `${py}px 0` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        {children}
      </div>
    </section>
  );
}

export function PrimaryBtn({ children, onClick, size = 'md' }) {
  const pad = size === 'sm' ? '10px 20px' : '14px 32px';
  const fs = size === 'sm' ? 14 : 16;
  return (
    <button
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: 12,
        padding: pad,
        fontSize: fs,
        fontWeight: 700,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 14px rgba(67,97,238,0.35)',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.92'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(67,97,238,0.45)'; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(67,97,238,0.35)'; }}
    >
      {children}
    </button>
  );
}

export function OutlineBtn({ children, onClick, size = 'md' }) {
  const pad = size === 'sm' ? '10px 20px' : '14px 32px';
  const fs = size === 'sm' ? 14 : 16;
  return (
    <button
      onClick={onClick}
      style={{
        background: 'transparent',
        color: C.navy,
        border: `2px solid ${C.navy}`,
        borderRadius: 12,
        padding: pad,
        fontSize: fs,
        fontWeight: 600,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.navy; }}
    >
      {children}
    </button>
  );
}

export function Badge({ children, color, bg }) {
  return (
    <span style={{
      background: bg || '#EEF2FF',
      color: color || C.blue,
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 6,
      display: 'inline-block',
    }}>
      {children}
    </span>
  );
}

export function PillBadge({ children }) {
  return (
    <span style={{
      background: '#EEF2FF',
      color: C.blue,
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 16px',
      borderRadius: 100,
      letterSpacing: 0.2,
      display: 'inline-block',
      border: '1px solid rgba(67,97,238,0.15)',
    }}>
      {children}
    </span>
  );
}

export default C;
