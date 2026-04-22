import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { tools, phases, goals, formatMap, formatColors, difficultyColors } from '../data/tools.js';
import { PillBadge } from './ui.jsx';
import { Badge } from './ui/badge.jsx';
import { Button } from './ui/button.jsx';
import { Card } from './ui/card.jsx';
import { MockCanvas } from './Mockups.jsx';
import Footer from './Footer.jsx';
import { cn } from '../lib/utils.js';

function ToolCard({ tool, onClick }) {
  const phase = phases.find(p => p.id === tool.phase);
  const fmt = formatColors[tool.format];
  return (
    <Card
      onClick={onClick}
      className="flex-1 basis-[280px] min-w-[260px] max-w-[360px] overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/40"
    >
      <div className="p-3 pb-0">
        <MockCanvas type={tool.id} />
      </div>
      <div className="p-5 pb-6">
        <div className="flex gap-1.5 mb-2.5 flex-wrap">
          <Badge variant="phase" style={{ background: phase.bg, color: phase.color }}>{phase.label}</Badge>
          <Badge variant="phase" style={{ background: fmt.bg, color: fmt.color }}>{formatMap[tool.format]}</Badge>
        </div>
        <h3 className="text-[17px] font-bold text-foreground mb-1">{tool.name}</h3>
        <p className="text-[13px] text-muted-foreground mb-3 leading-snug">{tool.subtitle}</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock size={12} />{tool.time}</span>
          <span className="flex items-center gap-1"><Users size={12} />{tool.team} pers.</span>
        </div>
      </div>
    </Card>
  );
}

function ToolDetail({ tool, onBack }) {
  const phase = phases.find(p => p.id === tool.phase);
  const fmt = formatColors[tool.format];
  const diff = difficultyColors[tool.difficulty];
  const related = tool.related.map(id => tools.find(t => t.id === id)).filter(Boolean);

  return (
    <div className="max-w-[1120px] mx-auto px-6 pt-10 pb-20">
      <Button variant="link" className="text-primary mb-8 p-0 text-sm" onClick={onBack}>
        <ArrowLeft size={17} /> Terug naar toolbox
      </Button>

      <div className="flex flex-wrap gap-12">
        {/* Main content */}
        <div className="flex-1 basis-[500px] min-w-[300px]">
          <div className="flex gap-2 flex-wrap mb-5">
            <Badge variant="phase" style={{ background: phase.bg, color: phase.color }}>{phase.label}</Badge>
            <Badge variant="phase" style={{ background: fmt.bg, color: fmt.color }}>{formatMap[tool.format]}</Badge>
            <Badge variant="phase" style={{ background: diff.bg, color: diff.color }}>{tool.difficulty}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock size={14} />{tool.time}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users size={14} />{tool.team} pers.</span>
          </div>

          <h1 className="text-[clamp(26px,4vw,38px)] font-black text-foreground mb-2 tracking-tight">{tool.subtitle}</h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-9">{tool.desc}</p>

          {/* When to use */}
          <Card className="p-6 mb-7">
            <h3 className="text-base font-bold text-foreground mb-3.5">Wanneer gebruik je dit?</h3>
            {tool.when.map((w, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5 items-start">
                <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{w}</span>
              </div>
            ))}
          </Card>

          {/* How it works */}
          <div className="mb-7">
            <h3 className="text-base font-bold text-foreground mb-3.5">Hoe werkt het?</h3>
            {tool.steps.map((s, i) => (
              <div key={i} className="flex gap-3 mb-3 items-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[11px] font-bold"
                  style={{ background: 'linear-gradient(135deg, #4057ff, #7B68EE)' }}>
                  {i + 1}
                </div>
                <span className="text-sm text-muted-foreground leading-snug pt-0.5">{s}</span>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="mb-7">
            <h3 className="text-base font-bold text-foreground mb-3.5">Wat vul je in?</h3>
            <div className="flex flex-wrap gap-2">
              {tool.sections.map((s, i) => (
                <span key={i} className="bg-secondary text-secondary-foreground text-[13px] font-semibold px-3.5 py-1.5 rounded-lg">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Example */}
          <Card className="p-6 mb-7 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/40">
            <h3 className="text-base font-bold text-foreground mb-2.5">Voorbeeld</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{tool.example}</p>
          </Card>

          {/* Tips */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-3.5">Tips</h3>
            {tool.tips.map((t, i) => (
              <div key={i} className="flex gap-2.5 mb-2 items-start">
                <span className="text-primary font-bold shrink-0 leading-5">·</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex-none w-[320px] min-w-[260px]">
          <Card className="p-6 mb-5">
            <div className="mb-4">
              <MockCanvas type={tool.id} />
            </div>
            <p className="text-[13px] text-muted-foreground text-center mb-3">
              Gebruik deze tool direct op een interactief canvas.
            </p>
            <Button variant="gradient" size="lg" className="w-full">
              Open in YouLab <ArrowRight size={15} />
            </Button>
          </Card>

          {related.length > 0 && (
            <div>
              <h3 className="text-[15px] font-bold text-foreground mb-3">Gerelateerde werkvormen</h3>
              {related.map((r, i) => {
                const rp = phases.find(p => p.id === r.phase);
                return (
                  <Card key={i} className="p-4 mb-2 cursor-pointer hover:border-primary/40">
                    <Badge variant="phase" style={{ background: rp.bg, color: rp.color }}>{rp.label}</Badge>
                    <div className="text-sm font-semibold text-foreground mt-1.5">{r.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.subtitle}</div>
                  </Card>
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
      <div className="pt-[68px]">
        <ToolDetail tool={selectedTool} onBack={() => setSelectedTool(null)} />
        <Footer navigate={navigate} />
      </div>
    );
  }

  return (
    <div className="pt-[68px]">
      {/* Header */}
      <section className="py-20 pb-16 border-b border-border"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--muted) 100%)' }}>
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <PillBadge>Toolbox</PillBadge>
          <h1 className="text-[clamp(32px,5vw,52px)] font-black text-foreground mt-4 mb-4 tracking-tight">
            Werkvormen & Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-[560px] mx-auto leading-relaxed">
            Kies op basis van wat je wilt bereiken, of filter op projectfase.
          </p>
        </div>
      </section>

      {/* Sticky filters */}
      <section className="bg-card border-b border-border py-5 sticky top-[68px] z-10">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[13px] font-semibold text-muted-foreground mr-1">Wat wil je bereiken?</span>
            {[{ id: 'all', label: 'Alles' }, ...goals].map(g => (
              <FilterBtn key={g.id} active={goalFilter === g.id} onClick={() => setGoalFilter(g.id)}>
                {g.label}
              </FilterBtn>
            ))}
            <div className="w-px h-5 bg-border mx-1" />
            <span className="text-[13px] font-semibold text-muted-foreground mr-1">Projectfase</span>
            {[{ id: 'all', label: 'Alle fases', color: '#4057ff' }, ...phases].map(p => (
              <FilterBtn key={p.id} active={phaseFilter === p.id} activeColor={p.color} onClick={() => setPhaseFilter(p.id)}>
                {p.label}
              </FilterBtn>
            ))}
          </div>
        </div>
      </section>

      {/* Tool grid */}
      <section className="py-12 pb-20">
        <div className="max-w-[1120px] mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">Geen werkvormen gevonden.</p>
              <Button variant="link" onClick={() => { setGoalFilter('all'); setPhaseFilter('all'); }}>
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-5">
              {filtered.map(t => <ToolCard key={t.id} tool={t} onClick={() => setSelectedTool(t)} />)}
            </div>
          )}
        </div>
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}

function FilterBtn({ children, active, onClick, activeColor }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3.5 py-1.5 rounded-lg text-[13px] font-semibold border-0 cursor-pointer transition-all duration-150',
        active ? 'text-white' : 'bg-muted text-muted-foreground hover:text-foreground'
      )}
      style={active ? { background: activeColor || 'var(--primary)' } : {}}
    >
      {children}
    </button>
  );
}
