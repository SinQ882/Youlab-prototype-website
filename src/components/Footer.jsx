export default function Footer({ navigate }) {
  const links = [
    { label: 'Toolbox', action: () => navigate('toolbox') },
    { label: 'Updates', action: () => navigate('updates') },
    { label: 'Privacyverklaring', href: '#' },
    { label: 'Contact', href: 'mailto:info@youlab.nl' },
    { label: 'Inloggen', href: 'https://app.youlab.nl' },
  ];

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E8EDF5', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="./youlab-icon.svg" alt="YouLab icon" width={30} height={30} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#4361EE', letterSpacing: -0.3 }}>YouLab</span>
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', alignItems: 'center' }}>
          {links.map((l, i) => (
            l.action
              ? <button key={i} onClick={l.action} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#64748B', fontWeight: 500, padding: 0 }}>{l.label}</button>
              : <a key={i} href={l.href} target={l.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: 14, color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>

        {/* Copyright */}
        <p style={{ fontSize: 13, color: '#94A3B8', margin: 0 }}>
          © YouLab 2026 – <a href="https://www.trimotion.nl" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }}>TriMotion</a>
        </p>
      </div>
    </footer>
  );
}
