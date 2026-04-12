const C = { navy: '#0B0B3B', blue: '#4361EE', gray: '#64748B', green: '#10B981', yellow: '#F59E0B' };

export function MockBoard() {
  const tabs = ['Ontmoeten', 'Ontdekken', 'Ontwikkelen', 'Organiseren'];
  const rows = [
    { t: 'Stakeholders in kaart', st: 'Klaar', c: '#10B981', w: '100%' },
    { t: 'Systeemmap invullen', st: 'Bezig', c: '#F59E0B', w: '60%' },
    { t: 'Interviews afnemen', st: 'Te doen', c: '#94A3B8', w: '0%' },
  ];
  return (
    <div style={{ background: '#F8FAFF', borderRadius: 16, border: '1px solid #E2E8F0', padding: 20, boxShadow: '0 12px 40px rgba(67,97,238,0.1)' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
        {tabs.map((t, i) => (
          <div key={i} style={{ flex: 1, background: i === 1 ? C.blue : '#E8EDF5', color: i === 1 ? '#fff' : C.navy, borderRadius: 8, padding: '7px 2px', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>{t}</div>
        ))}
      </div>
      {rows.map((it, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '10px 14px', marginBottom: 6, border: '1px solid #F1F5F9', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, height: 3, width: it.w, background: it.c, borderRadius: 2 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.navy }}>{it.t}</div>
              <div style={{ fontSize: 10, color: C.gray, marginTop: 1 }}>Team A · Mijlpaal 15 mei</div>
            </div>
            <span style={{ background: it.c + '18', color: it.c, fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 5 }}>{it.st}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MockChat() {
  const msgs = [
    { name: 'Lisa', msg: 'Ik heb de interviews samengevat, zie notitie bij de taak', time: '14:32', bg: '#EEF2FF' },
    { name: 'Johan', msg: 'Top! Ik voeg de stakeholders toe aan de systeemmap', time: '14:35', bg: '#F0FDF4' },
    { name: 'Marieke', msg: '@Lisa kun je de contactgegevens van de wijkraad delen?', time: '14:41', bg: '#FEF3C7' },
  ];
  return (
    <div style={{ background: '#F8FAFF', borderRadius: 16, border: '1px solid #E2E8F0', padding: 16, boxShadow: '0 8px 32px rgba(67,97,238,0.08)' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Berichten · Systeemmap invullen</div>
      {msgs.map((m, i) => (
        <div key={i} style={{ background: m.bg, borderRadius: 10, padding: '8px 12px', marginBottom: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.navy }}>{m.name}</span>
            <span style={{ fontSize: 10, color: C.gray }}>{m.time}</span>
          </div>
          <div style={{ fontSize: 11, color: C.gray, lineHeight: 1.4 }}>{m.msg}</div>
        </div>
      ))}
    </div>
  );
}

export function MockUsers() {
  const users = [
    { name: 'Johan', role: 'Beheerder', org: 'Gemeente', c: '#4361EE', free: false },
    { name: 'Lisa', role: 'Gebruiker', org: 'Gemeente', c: '#10B981', free: false },
    { name: 'Marieke', role: 'Expert', org: 'Woningcorp.', c: '#F59E0B', free: true },
    { name: 'Pieter', role: 'Expert', org: 'Welzijnsorg.', c: '#E8A0BF', free: true },
  ];
  return (
    <div style={{ background: '#F8FAFF', borderRadius: 16, border: '1px solid #E2E8F0', padding: 16, boxShadow: '0 8px 32px rgba(67,97,238,0.08)' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Teamleden · Leefbaarheid Arnhem</div>
      {users.map((u, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: i < 3 ? '1px solid #F1F5F9' : 'none' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: u.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700, flexShrink: 0 }}>{u.name[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.navy }}>{u.name} <span style={{ color: C.gray, fontWeight: 400 }}>· {u.org}</span></div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: u.free ? '#F0FDF4' : '#EEF2FF', color: u.free ? C.green : C.blue }}>{u.free ? 'Gratis' : u.role}</span>
        </div>
      ))}
    </div>
  );
}

export function MockCanvas({ type }) {
  if (type === '5w1h') return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 8, border: '1px solid #F1F5F9' }}>
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: 120 }}>
        {[['Wat?', 5, 5], ['Wie?', 71, 5], ['Waar?', 137, 5], ['Wanneer?', 5, 49], ['Waarom?', 71, 49]].map(([label, x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width={58} height={38} rx="4" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth=".5" />
            <text x={x + 29} y={y + 23} fontSize="7" fill="#831843" textAnchor="middle" fontWeight="600">{label}</text>
          </g>
        ))}
        <rect x="137" y="49" width={58} height={38} rx="4" fill="#0B0B3B" />
        <text x="166" y="72" fontSize="7" fill="#fff" textAnchor="middle" fontWeight="600">Hoe?</text>
      </svg>
    </div>
  );
  if (type === 'systeemmap') return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 8, border: '1px solid #F1F5F9' }}>
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: 120 }}>
        <rect x="75" y="35" width="50" height="20" rx="4" fill="#4361EE" opacity=".15" stroke="#4361EE" strokeWidth="1" />
        <text x="100" y="48" fontSize="6" fill="#0B0B3B" textAnchor="middle" fontWeight="600">Opgave</text>
        {[['Gemeente', 35, 20], ['Bewoners', 165, 20], ['Woningcorp.', 35, 72], ['Welzijn', 165, 72]].map(([label, cx, cy], i) => (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx="22" ry="12" fill="#EEF2FF" stroke="#4361EE" strokeWidth=".5" />
            <text x={cx} y={cy + 3} fontSize="5" fill="#0B0B3B" textAnchor="middle">{label}</text>
          </g>
        ))}
        <line x1="57" y1="24" x2="75" y2="40" stroke="#94A3B8" strokeWidth=".8" strokeDasharray="3" />
        <line x1="143" y1="24" x2="125" y2="40" stroke="#94A3B8" strokeWidth=".8" strokeDasharray="3" />
        <line x1="57" y1="66" x2="75" y2="50" stroke="#94A3B8" strokeWidth=".8" strokeDasharray="3" />
        <line x1="143" y1="66" x2="125" y2="50" stroke="#94A3B8" strokeWidth=".8" strokeDasharray="3" />
      </svg>
    </div>
  );
  if (type === 'empathy-map') return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 8, border: '1px solid #F1F5F9' }}>
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: 120 }}>
        <circle cx="100" cy="28" r="14" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth=".5" />
        <text x="100" y="31" fontSize="5" fill="#831843" textAnchor="middle" fontWeight="600">Gebruiker</text>
        {[['Ziet', 10, 50, '#EEF2FF'], ['Hoort', 55, 50, '#FEF3C7'], ['Denkt', 100, 50, '#F0FDF4'], ['Doet', 145, 50, '#FFF1F2']].map(([label, x, y, fill], i) => (
          <g key={i}>
            <rect x={x} y={y} width="40" height="32" rx="3" fill={fill} />
            <text x={x + 20} y={y + 19} fontSize="5" fill="#0B0B3B" textAnchor="middle">{label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
  // Default canvas visual
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 8, border: '1px solid #F1F5F9' }}>
      <svg viewBox="0 0 200 90" style={{ width: '100%', height: 120 }}>
        <rect x="5" y="5" width="190" height="80" rx="8" fill="#F8FAFF" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="20" y="20" width="70" height="14" rx="3" fill="#EEF2FF" />
        <rect x="20" y="40" width="50" height="10" rx="3" fill="#F1F5F9" />
        <rect x="20" y="56" width="60" height="10" rx="3" fill="#F1F5F9" />
        <rect x="110" y="20" width="70" height="50" rx="3" fill="#FEF3C7" />
        <text x="100" y="52" fontSize="6" fill="#64748B" textAnchor="middle">Canvas</text>
      </svg>
    </div>
  );
}
