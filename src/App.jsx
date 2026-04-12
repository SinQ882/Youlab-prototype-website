import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ToolboxPage from './components/ToolboxPage';

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
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: '#0B0B3B', background: '#FAFAFE', minHeight: '100vh' }}>
      <Nav page={page} navigate={navigate} scrolled={scrolled} />
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'toolbox' && <ToolboxPage navigate={navigate} initialToolId={toolId} />}
    </div>
  );
}
