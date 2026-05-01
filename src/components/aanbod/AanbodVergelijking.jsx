import SectionHeading from '../SectionHeading.jsx';
import ExampleBadge from '../ExampleBadge.jsx';

const rows = [
  { label: 'Doorlooptijd',       platform: 'Doorlopend',       kickstart: 'Dagdeel',             ontwerp: '3 maanden',                   complex: 'Op maat' },
  { label: 'Deelnemers',         platform: 'Heel team',        kickstart: '5–8',                  ontwerp: '5–8',                          complex: 'Op maat' },
  { label: 'Facilitators',       platform: '—',                kickstart: '2 (TriMotion)',         ontwerp: '2 (TriMotion + ambassadeur)',   complex: '2 (TriMotion + ambassadeur)' },
  { label: 'Platformtoegang',    platform: 'Ja, doorlopend',   kickstart: 'Niet inbegrepen',       ontwerp: '6 maanden inbegrepen',          complex: 'Ja, in overleg' },
  { label: 'Locatie',            platform: 'Online',           kickstart: 'Op locatie',            ontwerp: 'Op locatie + online',          complex: 'Op locatie + online' },
  { label: 'Geschikt voor',      platform: 'Teams die zelfstandig starten', kickstart: 'Kennismaken, eerste duwtje', ontwerp: 'Alledaagse uitdagingen', complex: 'Structurele verbetering' },
  { label: 'Prijs',              platform: 'v.a. € 10–15 / u / m', kickstart: '€ 2.000',         ontwerp: '€ 12.500',                      complex: 'Vanaf € 20.000' },
];

const cols = [
  { key: 'platform',  label: 'Platform',             accent: '#4057ff' },
  { key: 'kickstart', label: 'Kickstart',             accent: '#10b981' },
  { key: 'ontwerp',   label: 'Ontwerpsprint',         accent: '#f59e0b' },
  { key: 'complex',   label: 'Complexe Uitdaging',    accent: '#7c3aed' },
];

export default function AanbodVergelijking() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          eyebrow="Overzicht"
          title={<>Op een rij <ExampleBadge /></>}
          subtitle="Een beknopt overzicht van de vier aanbodsvormen naast elkaar."
          center
        />

        {/* Scrollable on mobile */}
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
            <thead>
              <tr style={{ background: 'var(--muted)' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 600, color: 'var(--muted-foreground)', width: '22%' }}>
                  Kenmerk
                </th>
                {cols.map(col => (
                  <th key={col.key} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700 }}>
                    <span style={{ color: col.accent }}>{col.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--card)' : 'var(--background)' }}
                >
                  <td style={{ padding: '13px 20px', fontSize: 13, fontWeight: 600, color: 'var(--muted-foreground)' }}>
                    {row.label}
                  </td>
                  {cols.map(col => (
                    <td key={col.key} style={{ padding: '13px 20px', fontSize: 13, color: 'var(--foreground)' }}>
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground text-center mt-5" style={{ fontSize: 13 }}>
          Alle prijzen zijn indicatief en exclusief btw. <ExampleBadge />
        </p>
      </div>
    </section>
  );
}
