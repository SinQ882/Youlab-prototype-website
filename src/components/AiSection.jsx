import { Sparkles } from 'lucide-react';
import { Section } from './ui.jsx';

export default function AiSection() {
  return (
    <section className="py-20" style={{
      background: 'linear-gradient(135deg, #060a1a 0%, #0b0f2a 50%, #101535 100%)',
    }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-wrap gap-12 items-center">
          {/* Left */}
          <div className="flex-1 basis-[360px] min-w-[280px]">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-5"
              style={{ background: 'rgba(123,104,238,0.2)', borderColor: 'rgba(123,104,238,0.35)' }}>
              <Sparkles size={14} color="#a0aaff" />
              <span className="text-[13px] font-semibold" style={{ color: '#a0aaff' }}>Binnenkort</span>
            </div>

            <h2 className="text-[clamp(26px,3.5vw,36px)] font-extrabold mb-4 leading-snug tracking-tight" style={{ color: '#fff' }}>
              Jouw slimme projectassistent
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              AI om snel antwoord te krijgen op vragen over je project. Automatische samenvattingen,
              slimme suggesties en directe inzichten.
            </p>

            <div className="flex gap-3 flex-wrap">
              {['Slimme samenvattingen', 'Projectinzichten', 'Werkvormsuggesties'].map((tag, i) => (
                <span key={i} className="text-[13px] font-semibold px-3.5 py-1.5 rounded-lg"
                  style={{ background: 'rgba(64,87,255,0.18)', border: '1px solid rgba(64,87,255,0.28)', color: 'rgba(255,255,255,0.8)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — AI chat mockup */}
          <div className="flex-1 basis-[340px] min-w-[280px]">
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4057ff, #7B68EE)' }}>
                  <Sparkles size={14} color="#fff" />
                </div>
                <div>
                  <div className="text-[13px] font-bold" style={{ color: '#fff' }}>YouLab AI</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Projectassistent</div>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end mb-3">
                <div className="rounded-[14px_14px_4px_14px] px-3.5 py-2.5 max-w-[80%]"
                  style={{ background: 'rgba(64,87,255,0.38)' }}>
                  <p className="text-[13px]" style={{ color: '#fff' }}>
                    "Wat is de status van project Leefbaarheid?"
                  </p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4057ff, #7B68EE)' }}>
                  <Sparkles size={12} color="#fff" />
                </div>
                <div className="rounded-[4px_14px_14px_14px] px-3.5 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    Ontdekken-fase. 3/5 taken afgerond. Mijlpaal: 20 mei.{' '}
                    <span style={{ color: '#a0aaff', fontWeight: 600 }}>Interviews afnemen</span> loopt nog.
                  </p>
                </div>
              </div>

              <div className="text-center mt-5">
                <span className="text-xs italic" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Binnenkort beschikbaar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
