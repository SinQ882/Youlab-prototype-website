import { Layout, Zap, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { Button } from './ui/button.jsx';
import { MockBoard, MockCanvas, MockChat, MockUsers } from './Mockups.jsx';
import { cn } from '../lib/utils.js';

const featureData = [
  {
    Icon: Layout,
    iconBg: 'bg-secondary',
    title: 'Projectbord met structuur',
    text: 'Taken, subtaken, mijlpalen en statussen. Wijs verantwoordelijken aan en zie in één oogopslag waar het project staat.',
    mockupType: 'board',
    reverse: false,
  },
  {
    Icon: Zap,
    iconBg: 'bg-amber-50 dark:bg-amber-950/20',
    title: 'Interactieve werkvormen',
    text: 'Werk samen in real-time aan bewezen werkvormen met duidelijke uitleg. Van systeemmap tot empathy map.',
    mockupType: 'canvas',
    reverse: true,
  },
  {
    Icon: MessageSquare,
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/20',
    title: 'Communicatie op één plek',
    text: 'Berichten op taak- of projectniveau. Tag teamgenoten en krijg notificaties zodat niets meer verloren gaat.',
    mockupType: 'chat',
    reverse: false,
  },
  {
    Icon: Users,
    iconBg: 'bg-rose-50 dark:bg-rose-950/20',
    title: 'Samenwerk met iedereen',
    text: 'Externe experts werken altijd gratis mee. Beheer gebruikers op elk niveau met duidelijke rollen.',
    mockupType: 'users',
    reverse: true,
  },
];

function renderMockup(type) {
  if (type === 'board')  return <MockBoard />;
  if (type === 'canvas') return <MockCanvas type="systeemmap" />;
  if (type === 'chat')   return <MockChat />;
  if (type === 'users')  return <MockUsers />;
  return null;
}

export default function FeaturesSection({ navigate }) {
  return (
    <Section id="platform">
      {/* Header */}
      <div className="text-center max-w-[580px] mx-auto mb-[72px]">
        <PillBadge>Het platform</PillBadge>
        <h2 className="text-foreground text-[clamp(28px,4vw,38px)] font-extrabold mt-4 tracking-tight">
          Eén platform voor het hele project
        </h2>
      </div>

      {/* Feature rows */}
      {featureData.map((f, i) => {
        const { Icon } = f;
        return (
          <div
            key={i}
            className={cn(
              'flex flex-wrap gap-12 items-center mb-20',
              f.reverse ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Mockup */}
            <div className="flex-1 basis-[400px] min-w-[280px] rounded-2xl overflow-hidden border border-border bg-card shadow-sm p-4">
              {renderMockup(f.mockupType)}
            </div>

            {/* Text */}
            <div className="flex-1 basis-[360px] min-w-[280px]">
              <div className={cn('w-13 h-13 rounded-2xl flex items-center justify-center mb-5', f.iconBg)}>
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="text-[26px] font-bold text-foreground mb-3 tracking-tight">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">{f.text}</p>
              {i === 1 && (
                <Button variant="link" className="p-0 text-[15px]" onClick={() => navigate('toolbox')}>
                  Bekijk alle werkvormen in de toolbox <ArrowRight size={15} />
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
