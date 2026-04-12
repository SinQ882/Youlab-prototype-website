import { useState, useEffect, Component } from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ToolboxPage from './components/ToolboxPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error: error.message || 'Onbekende fout' };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 600, margin: '80px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <h2 style={{ color: '#0B0B3B', marginBottom: 12 }}>Er ging iets mis</h2>
          <p style={{ color: '#64748B', marginBottom: 24, lineHeight: 1.6 }}>
            De pagina kon niet worden geladen. Ververs de pagina om het opnieuw te proberen.
          </p>
          <pre style={{ background: '#F8FAFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: 16, fontSize: 12, color: '#EF4444', textAlign: 'left', overflowX: 'auto' }}>
            {this.state.error}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 20, background: '#4361EE', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
          >
            Pagina vernieuwen
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [page, setPage] = useState('home');
  const [toolId, setToolId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function navigate(p, tid) {
    setPage(p);
    setToolId(tid || null);
    window.scrollTo(0, 0);
  }

  return (
    <ErrorBoundary>
      <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: '#0B0B3B', background: '#FAFAFE', minHeight: '100vh' }}>
        <Nav page={page} navigate={navigate} scrolled={scrolled} />
        <ErrorBoundary>
          {page === 'home' && <HomePage navigate={navigate} />}
          {page === 'toolbox' && <ToolboxPage navigate={navigate} initialToolId={toolId} />}
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}
