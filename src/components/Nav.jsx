import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const C = {
  navy: '#0B0B3B',
  blue: '#4361EE',
};

export default function Nav({ page, navigate, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(67,97,238,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(11,11,59,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0' }}
        >
          <img src="./youlab-icon.svg" alt="YouLab icon" width={34} height={34} />
          <span style={{ fontSize: 21, fontWeight: 800, color: C.blue, letterSpacing: -0.5 }}>YouLab</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
          <NavBtn
            active={page === 'toolbox'}
            onClick={() => navigate('toolbox')}
          >
            Toolbox
          </NavBtn>
          <NavBtn
            active={page === 'updates' || page === 'update-detail'}
            onClick={() => navigate('updates')}
          >
            Updates
          </NavBtn>
          <NavBtn onClick={() => scrollToSection('pricing')}>
            Prijzen
          </NavBtn>
          <div style={{ width: 1, height: 20, background: '#E2E8F0', margin: '0 6px' }} />
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
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = C.blue; e.currentTarget.style.background = '#EEF2FF'; }}
            onMouseLeave={e => { e.currentTarget.style.color = C.navy; e.currentTarget.style.background = 'transparent'; }}
          >
            Inloggen
          </a>
          <button
            style={{
              background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
              marginLeft: 6,
              boxShadow: '0 4px 14px rgba(67,97,238,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(67,97,238,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(67,97,238,0.35)'; }}
          >
            Plan een gratis demo
            <ArrowRight size={14} />
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
            borderRadius: 8,
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
          borderTop: '1px solid #F1F5F9',
          padding: '16px 24px 24px',
          boxShadow: '0 8px 32px rgba(11,11,59,0.08)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <button
              onClick={() => { navigate('toolbox'); setMenuOpen(false); }}
              style={{ background: page === 'toolbox' ? '#EEF2FF' : 'none', border: 'none', cursor: 'pointer', padding: '12px 14px', borderRadius: 10, fontSize: 16, fontWeight: 600, color: page === 'toolbox' ? C.blue : C.navy, textAlign: 'left' }}
            >
              Toolbox
            </button>
            <button
              onClick={() => { navigate('updates'); setMenuOpen(false); }}
              style={{ background: (page === 'updates' || page === 'update-detail') ? '#EEF2FF' : 'none', border: 'none', cursor: 'pointer', padding: '12px 14px', borderRadius: 10, fontSize: 16, fontWeight: 600, color: (page === 'updates' || page === 'update-detail') ? C.blue : C.navy, textAlign: 'left' }}
            >
              Updates
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '12px 14px', borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.navy, textAlign: 'left' }}
            >
              Prijzen
            </button>
            <a
              href="https://app.youlab.nl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 14px', borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.navy, textDecoration: 'none', display: 'block' }}
            >
              Inloggen
            </a>
            <button
              style={{
                marginTop: 10,
                background: 'linear-gradient(135deg, #4361EE 0%, #7B68EE 100%)',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 24px',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                color: '#fff',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(67,97,238,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              Plan een gratis demo <ArrowRight size={16} />
            </button>
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
      style={{
        background: active ? '#EEF2FF' : 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 600,
        color: active ? C.blue : C.navy,
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#F8FAFF'; e.currentTarget.style.color = C.blue; } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = C.navy; } }}
    >
      {children}
    </button>
  );
}
