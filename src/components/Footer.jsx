export default function Footer({ navigate }) {
  const links = [
    { label: 'Toolbox', action: () => navigate('toolbox') },
    { label: 'Updates', action: () => navigate('updates') },
    { label: 'Privacyverklaring', href: '#' },
    { label: 'Contact',           href: 'mailto:info@youlab.nl' },
    { label: 'Inloggen',          href: 'https://app.youlab.nl' },
  ];

  return (
    <footer className="bg-card border-t border-border py-10 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-wrap justify-between items-center gap-5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src="./youlab-icon.svg" alt="YouLab icon" width={28} height={28} />
          <span className="text-lg font-extrabold text-primary tracking-tight">YouLab</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          {links.map((l, i) =>
            l.action
              ? <button key={i} onClick={l.action} className="bg-transparent border-0 cursor-pointer text-sm text-muted-foreground font-medium p-0 hover:text-foreground transition-colors">{l.label}</button>
              : <a key={i} href={l.href} target={l.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">{l.label}</a>
          )}
        </nav>

        {/* Copyright */}
        <p className="text-[13px] text-muted-foreground m-0">
          © YouLab 2026 –{' '}
          <a href="https://www.trimotion.nl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground no-underline hover:text-foreground transition-colors">
            TriMotion
          </a>
        </p>
      </div>
    </footer>
  );
}
