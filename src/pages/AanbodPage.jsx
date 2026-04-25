import Footer from '../components/Footer.jsx';
import AanbodHero from '../components/aanbod/AanbodHero.jsx';
import AanbodCards from '../components/aanbod/AanbodCards.jsx';

export default function AanbodPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <AanbodHero />
      <AanbodCards />
      <Footer />
    </main>
  );
}
