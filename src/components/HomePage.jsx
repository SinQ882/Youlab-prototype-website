import HeroSection from './HeroSection.jsx';
import LogosSection from './LogosSection.jsx';
import ApproachSection from './ApproachSection.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import AudienceSection from './AudienceSection.jsx';
import FaqSection from './FaqSection.jsx';
import CtaSection from './CtaSection.jsx';
import Footer from './Footer.jsx';

export default function HomePage({ navigate }) {
  return (
    <main style={{ paddingTop: 68 }}>
      <HeroSection navigate={navigate} />
      <LogosSection />
      {/* ImpactSection wordt hier toegevoegd in stap 3 */}
      <ApproachSection />
      <FeaturesSection navigate={navigate} />
      {/* AudienceSection wordt vervangen door ScenarioSection in stap 6 */}
      <AudienceSection />
      <FaqSection />
      <CtaSection />
      <Footer navigate={navigate} />
    </main>
  );
}
