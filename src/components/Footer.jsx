import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-10 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-wrap justify-between items-center gap-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src={import.meta.env.BASE_URL + 'youlab-icon.svg'} alt="YouLab icon" width={28} height={28} />
          <span className="text-lg font-extrabold text-primary tracking-tight">YouLab</span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center">
          <Link to="/toolbox" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Toolbox</Link>
          <Link to="/updates" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Updates</Link>
          <Link to="/verhalen" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Verhalen</Link>
          <a href="#" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Privacyverklaring</a>
          <a href="mailto:info@youlab.nl" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Contact</a>
          <a href="https://app.youlab.nl" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground font-medium no-underline hover:text-foreground transition-colors">Inloggen</a>
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
