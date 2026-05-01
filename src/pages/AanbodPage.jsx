import Footer from '../components/Footer.jsx';
import AanbodHero from '../components/aanbod/AanbodHero.jsx';
import AanbodCards from '../components/aanbod/AanbodCards.jsx';
import AanbodVergelijking from '../components/aanbod/AanbodVergelijking.jsx';
import AanbodKeuzeGids from '../components/aanbod/AanbodKeuzeGids.jsx';
import AanbodFaq from '../components/aanbod/AanbodFaq.jsx';
import AanbodCta from '../components/aanbod/AanbodCta.jsx';

export default function AanbodPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      <AanbodHero />
      <AanbodCards />
      <AanbodVergelijking />
      <AanbodKeuzeGids />
      <AanbodFaq />
      <AanbodCta />
      <Footer />
    </main>
  );
}
