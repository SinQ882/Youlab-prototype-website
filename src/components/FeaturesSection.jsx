import { Layout, Zap, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { Section, PillBadge } from './ui.jsx';
import { Button } from './ui/button.jsx';
import { MockBoard, MockCanvas, MockChat, MockUsers } from './Mockups.jsx';
import { cn } from '../lib/utils.js';

const featureData = [
  {
    Icon: Layout,
    iconBg: 'bg-secondary',
    title: 'Weet altijd waar je project staat',
    text: 'Zie in één blik welke taken lopen, wie er actie moet ondernemen en wat de volgende stap is. Geen losse lijstjes meer — alles bij het project.',
    impact: 'Projectleiders en teamleden starten de dag gefocust, niet zoekend.',
    mockupType: 'board',
    reverse: false,
  },
  {
    Icon: Zap,
    iconBg: 'bg-amber-50 dark:bg-amber-950/20',
    title: 'Werk samen met bewezen methodes',
    text: 'Elke werkvorm heeft een heldere uitleg en structuur. Van Empathy Map tot Prototype Canvas — je team weet meteen wat te doen.',
    impact: 'Geen energie verloren aan "hoe doen we dit?" — meer tijd voor echte inzichten.',
    mockupType: 'canvas',
    reverse: true,
  },
  {
    Icon: MessageSquare,
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/20',
    title: 'Geen losse e-mails meer — alles bij het project',
    text: 'Berichten horen bij de taak of het project waar ze over gaan. Tag teamgenoten, deel bestanden en houd het overzicht — zonder een apart chatplatform.',
    impact: 'Beslissingen blijven zichtbaar. Niemand hoeft terug te scrollen.',
    mockupType: 'chat',
    reverse: false,
  },
  {
    Icon: Users,
    iconBg: 'bg-rose-50 dark:bg-rose-950/20',
    title: 'Betrek externe experts zonder drempels',
    text: 'Een woningcorporatie, welzijnsorganisatie of freelance adviseur? Ze werken altijd gratis mee als Expert. Geen licenties, geen gedoe.',
    impact: 'De juiste mensen aan tafel, ongeacht organisatie of budget.',
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
          Alles wat je team nodig heeft om vooruit te komen
        </h2>
        <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
          Geen losse tools meer. YouLab combineert aanpak, werkvormen en projectmanagement op één plek.
        </p>
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
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{f.text}</p>
              {f.impact && (
                <p className="text-sm font-semibold text-foreground border-l-2 border-primary pl-3 mb-5">
                  {f.impact}
                </p>
              )}
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
