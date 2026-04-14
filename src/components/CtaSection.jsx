import { ArrowRight, Shield, Users, BookOpen } from 'lucide-react';
import { Button } from './ui/button.jsx';

const trustItems = [
  { Icon: Shield,   text: 'AVG-compliant · Data in de EU' },
  { Icon: Users,    text: 'Expert-rol altijd gratis' },
  { Icon: BookOpen, text: 'Werkvormen met uitleg' },
];

export default function CtaSection() {
  return (
    <section
      className="py-24 overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #060a1a 0%, #0b0f28 55%, #111535 100%)' }}
    >
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(64,87,255,0.22) 0%, rgba(123,104,238,0.08) 40%, transparent 68%)' }} />
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,104,238,0.1) 0%, transparent 60%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(64,87,255,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-[720px] mx-auto px-6 text-center relative">
        <h2 className="font-black mb-5 leading-none tracking-tight text-[clamp(30px,4.5vw,52px)]" style={{ color: '#fff' }}>
          Klaar om te ontdekken wat{' '}
          <span className="bg-gradient-to-r from-primary to-[#7B68EE] bg-clip-text text-transparent">
            YouLab
          </span>
          {' '}mogelijk maakt?
        </h2>

        <p className="text-lg mb-11 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Bekijk een voorbeeldproject en zie hoe teams werken aan vraagstukken die er écht toe doen.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="gradient" size="xl">
            Start met ontdekken <ArrowRight size={18} />
          </Button>
          <Button
            size="xl"
            className="border border-white/20 text-white bg-white/10 hover:bg-white/20"
          >
            Liever eerst praten? Plan een vrijblijvend gesprek
          </Button>
        </div>

        <div className="flex justify-center flex-wrap gap-x-8 gap-y-3">
          {trustItems.map(({ Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(123,104,238,0.15)' }}>
                <Icon size={13} color="#a0aaff" />
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
