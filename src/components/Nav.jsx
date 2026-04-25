import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { cn } from '../lib/utils.js';

const sectors = [
  { label: 'Gemeenten',     slug: 'gemeenten' },
  { label: 'Onderwijs',     slug: 'onderwijs' },
  { label: 'MKB',           slug: 'mkb' },
  { label: 'Non-profit',    slug: 'non-profit' },
  { label: 'Adviesbureaus', slug: 'adviesbureaus' },
];

export default function Nav({ scrolled, dark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef  = useRef(null);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location.pathname]);

  useEffect(() => {
    function onClickOutside(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

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
        <Link to="/" className="flex items-center gap-2.5 no-underline py-1">
          <img src="./youlab-icon.svg" alt="YouLab" width={32} height={32} />
          <span className="text-xl font-extrabold text-primary tracking-tight">YouLab</span>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NavLink to="/platform">Het platform</NavLink>

          {/* Voor wie dropdown */}
          <div ref={dropRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDropOpen(o => !o)}
              className={cn(
                'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 border-0 cursor-pointer',
                location.pathname.startsWith('/voor/')
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              Voor wie
              <ChevronDown
                size={14}
                style={{ transform: dropOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
              />
            </button>

            {dropOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-0 bg-card border border-border rounded-xl shadow-lg py-1.5 min-w-[180px]"
                style={{ zIndex: 100 }}
              >
                {sectors.map(s => (
                  <Link
                    key={s.slug}
                    to={`/voor/${s.slug}`}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground no-underline hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg mx-1"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/verhalen">Verhalen</NavLink>
          <NavLink to="/toolbox">Toolbox</NavLink>
          <NavLink to="/updates">Updates</NavLink>

          <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 8px' }} />

          <Button variant="gradient" size="sm" asChild>
            <Link to="/kennismaken" className="no-underline">Kennismaken</Link>
          </Button>

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
            <MobileNavLink to="/platform">Het platform</MobileNavLink>

            <div>
              <button
                onClick={() => setDropOpen(o => !o)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold border-0 cursor-pointer transition-colors bg-transparent text-foreground hover:bg-accent"
              >
                Voor wie
                <ChevronDown size={16} style={{ transform: dropOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>
              {dropOpen && (
                <div className="pl-4 flex flex-col gap-0.5 mt-1">
                  {sectors.map(s => (
                    <Link
                      key={s.slug}
                      to={`/voor/${s.slug}`}
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground no-underline hover:bg-accent hover:text-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <MobileNavLink to="/verhalen">Verhalen</MobileNavLink>
            <MobileNavLink to="/toolbox">Toolbox</MobileNavLink>
            <MobileNavLink to="/updates">Updates</MobileNavLink>

            <Button variant="gradient" size="lg" className="mt-3 w-full justify-center" asChild>
              <Link to="/kennismaken" className="no-underline">Kennismaken</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        'px-3.5 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-150',
        active
          ? 'bg-accent text-accent-foreground'
          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        'block px-4 py-3 rounded-xl text-base font-semibold no-underline transition-colors',
        active ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent'
      )}
    >
      {children}
    </Link>
  );
}
