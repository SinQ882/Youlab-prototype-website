import { useState, useEffect, Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ToolboxPage from './components/ToolboxPage';
import UpdatesPage from './components/UpdatesPage';
import UpdateDetailPage from './components/UpdateDetailPage';
import AnimatedBackground from './components/AnimatedBackground';
import PlatformPage from './pages/PlatformPage';
import AanbodPage from './pages/AanbodPage';
import VoorSectorPage from './pages/VoorSectorPage';
import VerhalenPage from './pages/VerhalenPage';
import VerhaalDetailPage from './pages/VerhaalDetailPage';
import KennismakenPage from './pages/KennismakenPage';

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <AnimatedBackground />
      <Nav scrolled={scrolled} dark={dark} toggleDark={() => setDark(d => !d)} />
      <ErrorBoundary>
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/platform"          element={<PlatformPage />} />
          <Route path="/aanbod"            element={<AanbodPage />} />
          <Route path="/hoe-werkt-het"     element={<Navigate to="/platform" replace />} />
          <Route path="/voor/:sector"      element={<VoorSectorPage />} />
          <Route path="/verhalen"          element={<VerhalenPage />} />
          <Route path="/verhalen/:slug"    element={<VerhaalDetailPage />} />
          <Route path="/toolbox"           element={<ToolboxPageWrapper />} />
          <Route path="/updates"           element={<UpdatesPageWrapper />} />
          <Route path="/updates/:id"       element={<UpdateDetailPageWrapper />} />
          <Route path="/aanbod"            element={<AanbodPage />} />
          <Route path="/kennismaken"       element={<KennismakenPage />} />
          {/* Catch-all */}
          <Route path="*"                  element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

/* Wrappers that preserve the old navigate-prop API for legacy pages */
function ToolboxPageWrapper() {
  const [toolId, setToolId] = useState(null);
  function navigate(p, tid) {
    if (p === 'toolbox') { setToolId(tid || null); window.scrollTo(0, 0); }
    else window.location.href = p === 'home' ? '/' : `/${p}`;
  }
  return <ToolboxPage navigate={navigate} initialToolId={toolId} />;
}

function UpdatesPageWrapper() {
  const [updateId, setUpdateId] = useState(null);
  const [page, setPage] = useState('updates');
  function navigate(p, tid) {
    if (p === 'update-detail') { setPage('update-detail'); setUpdateId(tid); window.scrollTo(0, 0); }
    else if (p === 'updates') { setPage('updates'); window.scrollTo(0, 0); }
    else window.location.href = p === 'home' ? '/' : `/${p}`;
  }
  if (page === 'update-detail') return <UpdateDetailPage navigate={navigate} updateId={updateId} />;
  return <UpdatesPage navigate={navigate} />;
}

function UpdateDetailPageWrapper() {
  function navigate(p, tid) {
    if (p === 'updates') window.history.back();
    else window.location.href = p === 'home' ? '/' : `/${p}`;
  }
  return <UpdateDetailPage navigate={navigate} updateId={null} />;
}

function NotFoundPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-10 text-center">
        <div className="text-6xl mb-4">404</div>
        <h1 className="text-foreground text-2xl font-bold mb-3">Pagina niet gevonden</h1>
        <a href="/" className="text-primary font-semibold underline-offset-4 hover:underline">
          Terug naar home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  return (
    <ErrorBoundary>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AppLayout dark={dark} setDark={setDark} />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
