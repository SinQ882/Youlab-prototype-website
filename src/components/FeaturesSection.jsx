import { Layout, Zap, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { PillBadge, Section } from './ui.jsx';
import { MockBoard, MockCanvas, MockChat, MockUsers } from './Mockups.jsx';

const featureData = [
  {
    Icon: Layout,
    iconBg: '#EEF2FF',
    title: 'Projectbord met structuur',
    text: 'Taken, subtaken, mijlpalen en statussen. Wijs verantwoordelijken aan en zie in één oogopslag waar het project staat.',
    mockupType: 'board',
    reverse: false,
  },
  {
    Icon: Zap,
    iconBg: '#FEF3C7',
    title: 'Interactieve werkvormen',
    text: 'Werk samen in real-time aan bewezen werkvormen met duidelijke uitleg. Van systeemmap tot empathy map.',
    mockupType: 'canvas',
    reverse: true,
  },
  {
    Icon: MessageSquare,
    iconBg: '#F0FDF4',
    title: 'Communicatie op één plek',
    text: 'Berichten op taak- of projectniveau. Tag teamgenoten en krijg notificaties zodat niets meer verloren gaat.',
    mockupType: 'chat',
    reverse: false,
  },
  {
    Icon: Users,
    iconBg: '#FFF1F2',
    title: 'Samenwerk met iedereen',
    text: 'Externe experts werken altijd gratis mee. Beheer gebruikers op elk niveau met duidelijke rollen.',
    mockupType: 'users',
    reverse: true,
  },
];

function renderMockup(type) {
  if (type === 'board') return <MockBoard />;
  if (type === 'canvas') return <MockCanvas type="systeemmap" />;
  if (type === 'chat') return <MockChat />;
  if (type === 'users') return <MockUsers />;
  return null;
}

export default function FeaturesSection({ navigate }) {
  return (
    <Section id="platform">
      <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 72px' }}>
        <PillBadge>Het platform</PillBadge>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: '#0B0B3B', marginTop: 16, letterSpacing: -0.8 }}>
          Eén platform voor het hele project
        </h2>
      </div>

      {featureData.map((f, i) => {
        const { Icon } = f;
        return (
          <div key={i} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 48,
            alignItems: 'center',
            marginBottom: 80,
            flexDirection: f.reverse ? 'row-reverse' : 'row',
          }}>
            <div style={{ flex: '1 1 400px', minWidth: 280 }}>
              {renderMockup(f.mockupType)}
            </div>
            <div style={{ flex: '1 1 360px', minWidth: 280 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: f.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon size={24} color="#4361EE" />
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: '#0B0B3B', marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>{f.text}</p>
              {i === 1 && (
                <button
                  onClick={() => navigate('toolbox')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4361EE', fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}
                >
                  Bekijk alle werkvormen in de toolbox <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
