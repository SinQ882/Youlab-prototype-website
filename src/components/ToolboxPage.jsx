import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { tools, phases, goals, formatMap, formatColors, difficultyColors } from '../data/tools.js';
import { Badge, PrimaryBtn, PillBadge } from './ui.jsx';
import { MockCanvas } from './Mockups.jsx';
import Footer from './Footer.jsx';

function ToolCard({ tool, onClick }) {
  const phase = phases.find(p => p.id === tool.phase);
  const fmt = formatColors[tool.format];
  return (
    <div
      onClick={onClick}
      style={{
        background: '#fff',
        borderRadius: 20,
        border: '1px solid #E8EDF5',
        cursor: 'pointer',
        flex: '1 1 280px',
        minWidth: 260,
        maxWidth: 360,
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(67,97,238,0.12)'; e.currentTarget.style.borderColor = '#4361EE'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E8EDF5'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ padding: '12px 12px 0' }}>
        <MockCanvas type={tool.id} />
      </div>
      <div style={{ padding: '16px 20px 24px' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
          <Badge bg={phase.bg} color={phase.color}>{phase.label}</Badge>
          <Badge bg={fmt.bg} color={fmt.color}>{formatMap[tool.format]}</Badge>
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0B0B3B', margin: '0 0 4px' }}>{tool.name}</h3>
        <p style={{ fontSize: 13, color: '#64748B', margin: '0 0 12px', lineHeight: 1.45 }}>{tool.subtitle}</p>
        <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#94A3B8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} />{tool.time}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Users size={12} />{tool.team} pers.</span>
        </div>
      </div>
    </div>
  );
}

function ToolDetail({ tool, onBack }) {
  const phase = phases.find(p => p.id === tool.phase);
  const fmt = formatColors[tool.format];
  const diff = difficultyColors[tool.difficulty];
  const related = tool.related.map(id => tools.find(t => t.id === id)).filter(Boolean);

  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '40px 24px 80px' }}>
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: '#4361EE', marginBottom: 32, padding: 0 }}
      >
        <ArrowLeft size={18} /> Terug naar toolbox
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        {/* Main content */}
        <div style={{ flex: '1 1 500px', minWidth: 300 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            <Badge bg={phase.bg} color={phase.color}>{phase.label}</Badge>
            <Badge bg={fmt.bg} color={fmt.color}>{formatMap[tool.format]}</Badge>
            <Badge bg={diff.bg} color={diff.color}>{tool.difficulty}</Badge>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#64748B' }}><Clock size={14} />{tool.time}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#64748B' }}><Users size={14} />{tool.team} pers.</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: '#0B0B3B', marginBottom: 8, letterSpacing: -1 }}>{tool.subtitle}</h1>
          <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.7, marginBottom: 36 }}>{tool.desc}</p>

          {/* When to use */}
          <div style={{ background: '#F8FAFF', borderRadius: 16, padding: 24, marginBottom: 28, border: '1px solid #E8EDF5' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 14 }}>Wanneer gebruik je dit?</h3>
            {tool.when.map((w, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                <CheckCircle size={16} color="#10B981" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.5 }}>{w}</span>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 14 }}>Hoe werkt het?</h3>
            {tool.steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #4361EE, #7B68EE)', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.55, paddingTop: 4 }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 14 }}>Wat vul je in?</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tool.sections.map((s, i) => (
                <span key={i} style={{ background: '#EEF2FF', color: '#4361EE', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 8 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Example */}
          <div style={{ background: '#FFFBF0', borderRadius: 16, padding: 24, marginBottom: 28, border: '1px solid #FDE68A' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 10 }}>Voorbeeld</h3>
            <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, margin: 0 }}>{tool.example}</p>
          </div>

          {/* Tips */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0B0B3B', marginBottom: 14 }}>Tips</h3>
            {tool.tips.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                <span style={{ color: '#7B68EE', fontWeight: 700, flexShrink: 0 }}>·</span>
                <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ flex: '0 1 320px', minWidth: 260 }}>
          {/* Canvas preview */}
          <div style={{ background: '#F8FAFF', borderRadius: 20, padding: 24, marginBottom: 20, border: '1px solid #E8EDF5' }}>
            <div style={{ marginBottom: 16 }}>
              <MockCanvas type={tool.id} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <p style={{ fontSize: 13, color: '#64748B', marginBottom: 12 }}>Gebruik deze tool direct op een interactief canvas.</p>
            </div>
            <button style={{
              width: '100%',
              background: 'linear-gradient(135deg, #4361EE, #7B68EE)',
              border: 'none',
              borderRadius: 10,
              padding: '13px',
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
              Open in YouLab <ArrowRight size={15} />
            </button>
          </div>

          {/* Related tools */}
          {related.length > 0 && (
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0B0B3B', marginBottom: 12 }}>Gerelateerde werkvormen</h3>
              {related.map((r, i) => {
                const rp = phases.find(p => p.id === r.phase);
                return (
                  <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', border: '1px solid #E8EDF5', marginBottom: 8, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#4361EE'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#E8EDF5'}
                  >
                    <Badge bg={rp.bg} color={rp.color}>{rp.label}</Badge>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#0B0B3B', marginTop: 6 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{r.subtitle}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ToolboxPage({ navigate, initialToolId }) {
  const [selectedTool, setSelectedTool] = useState(null);
  const [goalFilter, setGoalFilter] = useState('all');
  const [phaseFilter, setPhaseFilter] = useState('all');

  useEffect(() => {
    if (initialToolId) {
      const t = tools.find(t => t.id === initialToolId);
      if (t) setSelectedTool(t);
    }
  }, [initialToolId]);

  const filtered = tools.filter(t => {
    if (goalFilter !== 'all' && t.goal !== goalFilter) return false;
    if (phaseFilter !== 'all' && t.phase !== phaseFilter) return false;
    return true;
  });

  if (selectedTool) {
    return (
      <div style={{ paddingTop: 68 }}>
        <ToolDetail tool={selectedTool} onBack={() => setSelectedTool(null)} />
        <Footer navigate={navigate} />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #EDE4F7 0%, #EEF2FF 100%)', padding: '72px 0 60px', borderBottom: '1px solid #E8EDF5' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <PillBadge>Toolbox</PillBadge>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0B0B3B', margin: '16px 0 16px', letterSpacing: -1.5 }}>
            Werkvormen & Tools
          </h1>
          <p style={{ fontSize: 18, color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Kies op basis van wat je wilt bereiken, of filter op projectfase.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: '#fff', borderBottom: '1px solid #F1F5F9', padding: '20px 0', position: 'sticky', top: 68, zIndex: 10 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#64748B', marginRight: 4 }}>Wat wil je bereiken?</span>
            {[{ id: 'all', label: 'Alles' }, ...goals].map(g => (
              <button key={g.id} onClick={() => setGoalFilter(g.id)} style={{
                background: goalFilter === g.id ? '#4361EE' : '#F1F5F9',
                color: goalFilter === g.id ? '#fff' : '#475569',
                border: 'none',
                borderRadius: 8,
                padding: '7px 14px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}>{g.label}</button>
            ))}
            <div style={{ width: 1, height: 20, background: '#E2E8F0', margin: '0 4px' }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: '#64748B', marginRight: 4 }}>Projectfase</span>
            {[{ id: 'all', label: 'Alle fases', color: '#4361EE', bg: '#EEF2FF' }, ...phases].map(p => (
              <button key={p.id} onClick={() => setPhaseFilter(p.id)} style={{
                background: phaseFilter === p.id ? (p.color || '#4361EE') : '#F1F5F9',
                color: phaseFilter === p.id ? '#fff' : '#475569',
                border: 'none',
                borderRadius: 8,
                padding: '7px 14px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}>{p.label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '48px 0 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: 16, color: '#94A3B8', marginBottom: 16 }}>Geen werkvormen gevonden.</p>
              <button onClick={() => { setGoalFilter('all'); setPhaseFilter('all'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4361EE', fontWeight: 600, fontSize: 14 }}>Reset filters</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {filtered.map(t => <ToolCard key={t.id} tool={t} onClick={() => setSelectedTool(t)} />)}
            </div>
          )}
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
