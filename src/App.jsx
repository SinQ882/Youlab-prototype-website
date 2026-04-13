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
        <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center font-sans">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-foreground text-xl font-semibold mb-3">Er ging iets mis</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
            De pagina kon niet worden geladen. Ververs de pagina om het opnieuw te proberen.
          </p>
          <pre className="bg-muted border border-border rounded-lg p-4 text-xs text-destructive text-left overflow-x-auto max-w-lg mb-5">
            {this.state.error}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground rounded-xl px-7 py-3 text-sm font-semibold cursor-pointer border-0 hover:opacity-90"
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
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply / remove .dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

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
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Nav page={page} navigate={navigate} scrolled={scrolled} dark={dark} toggleDark={() => setDark(d => !d)} />
        <ErrorBoundary>
          {page === 'home'    && <HomePage navigate={navigate} />}
          {page === 'toolbox' && <ToolboxPage navigate={navigate} initialToolId={toolId} />}
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}
