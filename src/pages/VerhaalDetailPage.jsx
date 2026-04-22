import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import Footer from '../components/Footer.jsx';

export default function VerhaalDetailPage() {
  const { slug } = useParams();

  return (
    <main style={{ paddingTop: 68 }}>
      <section className="bg-background py-24">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-secondary text-secondary-foreground px-4 py-1.5 text-[13px] font-semibold mb-8">
            Verhaal
          </span>
          <h1
            className="text-foreground font-extrabold tracking-tight mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            {slug ? slug.replace(/-/g, ' ') : 'Projectverhaal'}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            De volledige casebeschrijving volgt in een volgende iteratie.
          </p>
          <div
            className="rounded-2xl border border-border bg-muted/50 p-10 text-muted-foreground text-sm mb-10"
            style={{ fontStyle: 'italic' }}
          >
            🚧 Verhaalinhoud volgt — placeholder voor bespreekprototype
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button variant="outline" size="lg" asChild>
              <Link to="/verhalen" className="no-underline">← Alle verhalen</Link>
            </Button>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/" className="no-underline">Home</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
