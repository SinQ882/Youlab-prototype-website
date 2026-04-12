import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const C = {
  navy: '#0B0B3B',
  blue: '#4361EE',
};

export default function Nav({ page, navigate, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 'toolbox', label: 'Toolbox' },
    { id: 'pricing', label: 'Prijzen' },
  ];

  function scrollToSection(id) {
    setMenuOpen(false);
    if (page !== 'home') {
      navigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(250,250,254,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(67,97,238,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <div style={{
            width: 34, height: 34,
            background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: -0.5 }}>Y</span>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: C.navy, letterSpacing: -0.5 }}>YouLab</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            onClick={() => navigate('toolbox')}
            style={{
              background: page === 'toolbox' ? '#EEF2FF' : 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: page === 'toolbox' ? C.blue : C.navy,
              transition: 'all 0.2s',
            }}
          >
            Toolbox
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: C.navy,
              transition: 'all 0.2s',
            }}
          >
            Prijzen
          </button>
          <div style={{ width: 1, height: 20, background: '#E2E8F0', margin: '0 8px' }} />
          <a
            href="https://app.youlab.nl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: C.navy,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Inloggen
          </a>
          <button
            style={{
              background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 22px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'opacity 0.2s',
              marginLeft: 4,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Plan een gratis demo
            <ArrowRight size={15} />
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: C.navy,
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid #E8EDF5',
          padding: '16px 24px 24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <button
              onClick={() => { navigate('toolbox'); setMenuOpen(false); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', fontSize: 16, fontWeight: 600, color: C.navy, textAlign: 'left' }}
            >
              Toolbox
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', fontSize: 16, fontWeight: 600, color: C.navy, textAlign: 'left' }}
            >
              Prijzen
            </button>
            <a
              href="https://app.youlab.nl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 0', fontSize: 16, fontWeight: 600, color: C.navy, textDecoration: 'none' }}
            >
              Inloggen
            </a>
            <button
              style={{
                marginTop: 8,
                background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 24px',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Plan een gratis demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
