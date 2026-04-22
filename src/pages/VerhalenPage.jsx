import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import Footer from '../components/Footer.jsx';

export default function VerhalenPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <section className="bg-background py-24">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-8">
            Verhalen
          </span>
          <h1
            className="text-foreground font-extrabold tracking-tight mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Projectverhalen
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Hier komen echte verhalen van teams die met YouLab hebben gewerkt.
            Cases per sector, fase en type vraagstuk.
          </p>
          <div
            className="rounded-2xl border border-border bg-muted/50 p-10 text-muted-foreground text-sm mb-10"
            style={{ fontStyle: 'italic' }}
          >
            🚧 Paginainhoud volgt — placeholder voor bespreekprototype
          </div>
          <Button variant="gradient" size="lg" asChild>
            <Link to="/" className="no-underline">← Terug naar home</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
