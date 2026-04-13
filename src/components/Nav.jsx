import { useState } from 'react';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { cn } from '../lib/utils.js';

export default function Nav({ page, navigate, scrolled, dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id) {
    setMenuOpen(false);
    if (page !== 'home') {
      navigate('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/92 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2.5 bg-transparent border-0 cursor-pointer py-1"
        >
          <img src="./youlab-icon.svg" alt="YouLab icon" width={32} height={32} />
          <span className="text-xl font-extrabold text-primary tracking-tight">YouLab</span>
        </button>

        {/* Desktop nav */}
        <nav className="flex items-center gap-1 desktop-nav">
          <NavBtn active={page === 'toolbox'} onClick={() => navigate('toolbox')}>Toolbox</NavBtn>
          <NavBtn onClick={() => scrollToSection('pricing')}>Prijzen</NavBtn>

          <div className="w-px h-5 bg-border mx-1.5" />

          <a
            href="https://app.youlab.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-foreground no-underline transition-all duration-150 hover:bg-accent hover:text-accent-foreground"
          >
            Inloggen
          </a>

          <Button variant="gradient" size="sm" className="ml-1.5">
            Plan een gratis demo <ArrowRight size={14} />
          </Button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-lg bg-transparent border-0 cursor-pointer text-muted-foreground hover:bg-accent hover:text-foreground transition-colors duration-150"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 mobile-menu-btn hidden">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-transparent border-0 cursor-pointer text-muted-foreground"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-transparent border-0 cursor-pointer text-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-card border-t border-border px-6 pb-6 pt-4 shadow-lg">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => { navigate('toolbox'); setMenuOpen(false); }}
              className={cn(
                'w-full text-left px-4 py-3 rounded-xl text-base font-semibold border-0 cursor-pointer transition-colors',
                page === 'toolbox'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-transparent text-foreground hover:bg-accent'
              )}
            >
              Toolbox
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold border-0 cursor-pointer bg-transparent text-foreground hover:bg-accent transition-colors"
            >
              Prijzen
            </button>
            <a
              href="https://app.youlab.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-xl text-base font-semibold text-foreground no-underline hover:bg-accent transition-colors"
            >
              Inloggen
            </a>
            <Button variant="gradient" size="lg" className="mt-3 w-full justify-center">
              Plan een gratis demo <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavBtn({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3.5 py-2 rounded-lg text-sm font-semibold border-0 cursor-pointer transition-all duration-150',
        active
          ? 'bg-accent text-accent-foreground'
          : 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground'
      )}
    >
      {children}
    </button>
  );
}
